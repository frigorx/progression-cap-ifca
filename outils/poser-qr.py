#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Pose les greffes vers inerweb.fr dans les documents élève de la 2e année.

Lit `_charte/qr-inerweb.json` (la table, seule source), génère les QR **en local**
avec segno — aucun service en ligne n'intervient dans la fabrication — et insère
un bloc « Pour aller plus loin » en fin de document, avant le dernier pied de page.

LE QR NE VA JAMAIS SEUL. Le bloc porte les trois : le code, le titre de la station
et l'adresse écrite en clair. Un élève sans téléphone doit pouvoir taper l'adresse,
et le professeur doit voir où ça mène avant de distribuer la feuille.

Idempotent : le bloc est délimité par un marqueur ; une seconde passe le remplace
au lieu de l'empiler.

Usage :
    python outils/poser-qr.py            → simulation (rien n'est écrit)
    python outils/poser-qr.py --ecrire   → applique
"""
import io, json, os, re, sys

sys.stdout.reconfigure(encoding='utf-8')

RACINE = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                      'Sequences-2A-CAP-IFCA')
TABLE = os.path.join(RACINE, '_charte', 'qr-inerweb.json')
DOSSIER_QR = os.path.join(RACINE, '_charte', 'qr')

DEB = '<!-- POUR-ALLER-PLUS-LOIN : DÉBUT — posé par outils/poser-qr.py -->'
FIN = '<!-- POUR-ALLER-PLUS-LOIN : FIN -->'

ecrire = '--ecrire' in sys.argv

try:
    import segno
except ImportError:
    sys.exit("segno manquant. Installer avec :  pip install segno")

table = json.load(io.open(TABLE, encoding='utf-8'))
base = table['base']


def url_complete(u):
    return u if u.startswith('http') else base + u


def nom_qr(u):
    """Nom de fichier stable, dérivé de l'adresse."""
    s = re.sub(r'^https?://', '', url_complete(u))
    s = re.sub(r'[^a-zA-Z0-9]+', '-', s).strip('-').lower()
    return f'qr-{s}.svg'


os.makedirs(DOSSIER_QR, exist_ok=True)

# ------------------------------------------------------------------ les QR
qr_faits = {}
for cible, stations in table['greffes'].items():
    for st in stations:
        f = nom_qr(st['url'])
        if f in qr_faits:
            continue
        chemin = os.path.join(DOSSIER_QR, f)
        if ecrire or not os.path.exists(chemin):
            # correction d'erreur M : reste lisible un peu sali ou photocopié
            segno.make(url_complete(st['url']), error='m').save(
                chemin, kind='svg', scale=1, border=2, dark='#22303f', svgclass=None, lineclass=None)
            # segno écrit width/height mais PAS de viewBox. Sans viewBox, le SVG ne
            # se met pas à l'échelle de façon fiable partout — et la sortie PDF/docx
            # à venir en dépend. On l'ajoute.
            svg = io.open(chemin, encoding='utf-8').read()
            m = re.search(r'width="(\d+)"\s+height="(\d+)"', svg)
            if m and 'viewBox' not in svg:
                svg = svg.replace(m.group(0),
                                  f'{m.group(0)} viewBox="0 0 {m.group(1)} {m.group(2)}"', 1)
                io.open(chemin, 'w', encoding='utf-8', newline='').write(svg)
        qr_faits[f] = url_complete(st['url'])

print(f"{len(qr_faits)} QR générés en local dans _charte/qr/\n")

# --------------------------------------------------------------- les blocs
poses, absents = 0, []
for cible, stations in table['greffes'].items():
    p = os.path.join(RACINE, cible.replace('/', os.sep))
    if not os.path.exists(p):
        absents.append(cible)
        continue

    t = io.open(p, encoding='utf-8').read()

    # profondeur du document par rapport à _charte/qr
    rel = os.path.relpath(DOSSIER_QR, os.path.dirname(p)).replace(os.sep, '/')

    lignes = [DEB,
              '  <div class="aller-plus-loin-titre"><b>Pour aller plus loin sur inerweb.fr</b></div>']
    for st in stations:
        u = url_complete(st['url'])
        affiche = re.sub(r'^https?://', '', u)
        lignes.append(f'''  <div class="aller-plus-loin">
    <div class="qr"><img src="{rel}/{nom_qr(st['url'])}" alt="QR code vers {st['titre']}"></div>
    <div class="txt">
      <span class="quoi">Module en ligne</span>
      <span class="titre">{st['titre']}</span>
      <span class="adresse">{affiche}</span>
    </div>
  </div>''')
    lignes.append(FIN)
    bloc = '\n'.join(lignes)

    if DEB in t:  # seconde passe : on remplace
        t = re.sub(re.escape(DEB) + r'.*?' + re.escape(FIN), bloc, t, flags=re.S)
    else:
        # avant le DERNIER pied de page du document
        i = t.rfind('<div class="pied">')
        if i < 0:
            absents.append(cible + '  (aucun pied de page où s\'accrocher)')
            continue
        t = t[:i] + bloc + '\n\n  ' + t[i:]

    if ecrire:
        io.open(p, 'w', encoding='utf-8', newline='').write(t)
    poses += 1
    print(f"  {len(stations)} greffe(s)  {cible.split('/')[0][:32]:32}  {os.path.basename(os.path.dirname(p))[:38]}")

print(f"\n{poses} document(s) {'traités' if ecrire else 'à traiter (simulation)'}")
if absents:
    print(f"\n⚠ {len(absents)} cible(s) INTROUVABLE(S) — la table renvoie à un fichier qui n'existe pas :")
    for a in absents:
        print('   -', a)
    sys.exit(1)
