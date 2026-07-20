# État — Séquence S9 « Diagnostic frigorifique simple + É4 » (1A CAP IFCA)

*Production 19/07/2026 (chef d'orchestre + 8 rédacteurs Sonnet + contrôle mécanique et de fond).*
**⭐ DERNIÈRE séquence de la 1re année : sa production BOUCLE le cycle 1A S1→S9.**

## Statut : PRODUITE 19/07/2026 (19 documents HTML) — EN ATTENTE BON À TIRER FRANCK

| Document | État |
|---|---|
| `Dossier de séquence S9.html` | ✅ produit (barème É4 harmonisé au contrôle) |
| `S9-F1 - Diagnostic guidé sur machine\` (Plan de séance · Document élève - TP · Document professeur - corrigé) | ✅ produit — 3518 mots, 240 min exacts |
| `S9-F2 - Remplacement d'un composant simple\` (Plan · Élève · Prof) | ✅ produit — ~2000 mots, 240 min exacts |
| `S9-E1 - Coffret clim en autonomie\` (Plan · Élève · Prof) | ✅ produit — 3245 mots, 240 min exacts |
| `S9-T1 - Démarche de diagnostic et conservation des denrées\` (Élève · Prof) | ✅ produit — 120 min exacts |
| `F3 - Carnet de bord\` (Élève · Prof) | ✅ produit — carnet + compte rendu d'intervention type |
| `Évaluation sommative É4 S7-S9 (semaine 32)\` (Sujet · Corrigé+grille · Plan de passation) | ✅ produit — barème 40 pts, 4 compétences remontées |
| `S9-T2 - Retour d'É4, remédiation et bilan de 1re année\` (Élève · Prof) | ✅ produit — remédiation post-É4 + bilan d'année |

## Contrôle (19/07/2026)
**Mécanique (script)** : 19/19 fichiers ; corps élève **14 pt** / prof-plans **13 pt** OK partout ; pied de page
daté **19/07/2026** partout ; **0 image introuvable** (chemins relatifs `../images/` corrects depuis les sous-dossiers).

**Fond (transversal)** :
- **Aucun code inventé** : 12 compétences (C1.1·C1.3·C2.4·C3.4·C3.6·C3.7·C3.9·C4.1·C4.5·C4.6·C4.7·C5.1) + 6 savoirs
  (S3.1·S4.2·S5.1·S5.5·S5.6·S5.7) + tâches (T1·T11·T13·T14·T16) vérifiés au référentiel `CAP_IFCA.json`.
- **Principe fondateur « sans fluide » tenu partout** : les 27 occurrences de récupération/charge sont soit une
  interdiction explicite pour l'élève, soit un acte réservé au professeur (inertage azote en amont, hors présence
  des élèves), soit une évocation honnête de la 2e année. Aucun fluide réel chargé.
- **Convention SC/SR respectée** (aucun « SH » ; seuils charte SC 5-10 K / SR 4-8 K).
- **1 correction appliquée** : barème d'É4 dans le `Dossier de séquence S9.html` recalé sur le barème réel de l'É4
  (18/10/12 → **Froid 26 [A 9+B 9+C 8] · Élec 6 · Théorie 4 · savoir-être C2.4 4 = 40**) ; poste ÉLEC corrigé de
  « C5.1 variante électrique » en **appui C4.5** (C3.6/C3.7 confortés non remontés).

## Points en attente (décisions Franck — au bon à tirer)
- **Module S9-T2 (clôture + remédiation post-É4 + bilan de 1re année) AJOUTÉ au maître** `_PROGRESSION-1A-CODEE.md`
  → à valider (même statut que S3-T2 / S5-T0 / S7-T0 en leur temps).
- **Nommage de l'éval** « É4 S7-S9 (semaine 32) » à confirmer.
- **PFMP2** (arbitrage n° 1 du socle, non tranché) : si placée fin juin, elle comprime les créneaux des semaines
  33-36 sans changer le fond du dispositif S9-T2.
- **Arbre de diagnostic** = construit ex nihilo (angle mort de la base, confirmé à la restitution) → corrélations
  panne↔symptôme à valider (volontairement bornées aux cas archi-classiques et univoques, niveau CAP).
- **Enceintes isothermes S5.7** : peu de source dédiée → construit à partir des documents « chambre froide » (AFPA/Dagard), à valider.
- **Matériel réel** : nombre de postes/machines pédagogiques de diagnostic, composants de rechange disponibles
  (filtres déshydrateurs, détendeurs, pressostats, ventilateurs, condensateurs), défauts électriques simulables sur
  le coffret, et confirmation que **c'est le professeur qui inerte le circuit à l'azote** pour S9-F2 (passage 2) et É4.
  Tous rédigés « à faire valider par le professeur », aucune valeur inventée.
- **Images à fournir/produire** : photo d'une « machine pédagogique de diagnostic » et d'une « pince ampèremétrique »
  (signalées manquantes par S9-F1, mentionnées en texte sans illustration ; le reste des visuels existe).
- Réglages chiffrés d'un pressostat réel (S9-F2) : donnés en principe (Cut-in = Cut-out + Différentiel), sans chiffre affirmé.
- Dates réelles sem. 29-36 · copyright définitif · anciens formats `.doc` à rouvrir (sources métier).

## Après bon à tirer (dans l'ordre)
1. Corrections Franck sur pièce.
2. **Sortie triple** : PDF fidèle (`msedge --headless --print-to-pdf`) + **docx natif** (librairie npm `docx`).
3. **Intégration RAG** : `python C:\git\usine-contenu\outils\integrer-production.py "<dossier S9>"`.
4. **MAJ tableaux de bord** : `_PROGRAMME-CAP-IFCA-1A-2A.md` (S9 produite → **1A COMPLÈTE S1→S9**),
   `programme-cap-ifca.json` (champ `etat`), `_tableau-de-bord-programme.html`, carte interactive.
5. Valider l'ajout de **S9-T2** au maître `_PROGRESSION-1A-CODEE.md`.

## Sources métier restituées (principales)
- Diagnostic : 2A S10 Séance 1 (état des lieux), `C5-Maintenir\Diagnostic de pannes.pdf` (structure seule — contenu = solaire thermique, écarté), `LA SURCHAUFFE et le SR.docx`, kit HTML SC/SR `25 26\cours 25_26\`.
- Remplacement : `Activité 241 Remplacement filtre déshydrateur.docx` (réécrit sans récupération de fluide), `Package_EP3\S2_04-05\TP1B/TP1C`.
- Coffret : S7-E2/S8-E1 (continuité), `schemas_cablage_coffrets_MR12_MR15.pdf`.
- Compte rendu : `C5-Maintenir\rapport-dintervention.docx`, `fiche d'intervention clim froid.docx`.
- Théorie : `Conditions de conservation des denrées` + `La chaîne du froid` (T.F.C.A.), `Chambres froides` (AFPA/Dagard).
