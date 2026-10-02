param(
  [string]$Racine = (Split-Path -Parent $MyInvocation.MyCommand.Path)
)

# Convertit chaque .html en .docx via Word.
# Deux precautions indispensables, apprises a la dure :
#  1. le .html DOIT avoir une enveloppe <html><head></head><body></body></html>,
#     sinon Word l'importe comme du TEXTE BRUT et le .docx contient le code HTML ;
#  2. les images sont inlinees en data: URI dans une copie temporaire avant conversion,
#     sinon Word ne fait que les LIER et le .docx perd ses photos des qu'on le deplace.

# L'outil d'inventaire est une page interactive : un .docx n'aurait aucun sens.
$exclus = @('Inventaire-atelier.html')

$fichiers = Get-ChildItem -Path $Racine -Recurse -Filter *.html |
  Where-Object { $_.Name -notlike '~*' -and $exclus -notcontains $_.Name }

Write-Output "Conversion de $($fichiers.Count) fichier(s) HTML en DOCX..."

$typesMime = @{ '.jpg' = 'image/jpeg'; '.jpeg' = 'image/jpeg'; '.png' = 'image/png'; '.gif' = 'image/gif'; '.svg' = 'image/svg+xml' }

$word = New-Object -ComObject Word.Application
$word.Visible = $false
$word.DisplayAlerts = 0

$ok = 0
$echecs = @()

foreach ($f in $fichiers) {
  $docx = [System.IO.Path]::ChangeExtension($f.FullName, '.docx')
  $temp = Join-Path $f.DirectoryName ("~conv-" + $f.Name)
  try {
    $html = Get-Content $f.FullName -Raw -Encoding UTF8

    # --- inlining des images en data: URI ---
    $motif = [regex]'src="([^"]+\.(?:jpe?g|png|gif|svg))"'
    $html = $motif.Replace($html, {
      param($m)
      $rel = $m.Groups[1].Value
      if ($rel -like 'data:*' -or $rel -like 'http*') { return $m.Value }
      $chemin = Join-Path $f.DirectoryName $rel
      if (-not (Test-Path $chemin)) { return $m.Value }
      $ext = [System.IO.Path]::GetExtension($chemin).ToLower()
      $mime = $typesMime[$ext]
      if (-not $mime) { return $m.Value }
      $b64 = [Convert]::ToBase64String([System.IO.File]::ReadAllBytes($chemin))
      return 'src="data:' + $mime + ';base64,' + $b64 + '"'
    })

    Set-Content -Path $temp -Value $html -Encoding UTF8

    $doc = $word.Documents.Open($temp, $false, $true)
    $doc.SaveAs2($docx, 16)
    $doc.Close($false)
    Remove-Item $temp -Force
    $ok++
    Write-Output "OK  : $($f.Name)"
  } catch {
    $echecs += $f.FullName
    if (Test-Path $temp) { Remove-Item $temp -Force }
    Write-Output "ECHEC : $($f.FullName) -- $($_.Exception.Message)"
  }
}

$word.Quit()

Write-Output ""
Write-Output "Termine : $ok / $($fichiers.Count) convertis."
if ($echecs.Count -gt 0) {
  Write-Output "Echecs :"
  $echecs | ForEach-Object { Write-Output "  - $_" }
}
