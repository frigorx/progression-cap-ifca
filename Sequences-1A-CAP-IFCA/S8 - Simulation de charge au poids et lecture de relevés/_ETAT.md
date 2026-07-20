# État — Séquence S8 « Simulation de charge (au poids) + lecture de relevés » (1A CAP IFCA)

*Séquence produite le 19/07/2026 par l'usine FrigorX (chef d'orchestre + 6 rédacteurs + contrôle).
Cadrage : `_CADRAGE-S8.md`. Maître : `26-27\_PROGRESSION-1A-CODEE.md` (en attente bon à tirer global).*

## Statut : PRODUITE 19/07/2026 (14 documents HTML) — EN ATTENTE BON À TIRER FRANCK

| Document | État |
|---|---|
| Dossier de séquence S8.html | ✅ produit 19/07/2026, corrigé post-contrôle |
| S8-F1 Simulation de charge au poids (plan + TP + corrigé) | ✅ produit 19/07/2026, corrigé post-contrôle |
| S8-F2 Tirage au vide et charge enchaînés (plan + TP + corrigé) | ✅ produit 19/07/2026, corrigé post-contrôle |
| S8-E1 Réglage de consignes guidé (plan + TP + corrigé) | ✅ produit 19/07/2026 |
| S8-T1 Fluides frigorigènes — familles et étiquettes (élève + prof) | ✅ produit 19/07/2026 |
| F3 Carnet de bord (élève + prof) | ✅ produit 19/07/2026 |

HTML seulement — sortie triple (PDF + docx natif) et intégration RAG APRÈS le bon à tirer.

## Contrôle (19/07/2026)

**Mécanique** (script, 14/14) : polices, pieds, chemins d'images, balises, graphies, aucun chemin
absolu ; 30 h confirmé (le « 40 h » n'est qu'une comparaison avec S7) ; aucune masse de fluide chiffrée ;
piège R290=A3 présent en T1. **Fond** (contrôleur dédié, 12 points, lecture intégrale) : **AUCUN
bloquant** — le principe fondateur (charge simulée azote, jamais de fluide réel manipulé par l'élève)
tient sans faille dans les 14 documents. **1 MAJEUR corrigé** : erreur de catégorie d'attestation
d'aptitude (« catégorie I » attribuée au CAP dans 8 fichiers, contredite par le T1 sourcé arrêté
29/02/2016) → neutralisée partout en « attestation d'aptitude » sans numéro, le détail des catégories
(dont II, charges < 2 kg) reste au seul S8-T1 sourcé. **2 MINEURS corrigés** : abréviation surchauffe
harmonisée SH→**SC** dans F1 (convention de toute la 1re année, cf. S5-T2/S7-T1 ; le contrôleur
suggérait SH à tort) ; phrase de minutage F2 reformulée. Nom de site commercial retiré d'une note de
sourcing (F1 prof). Conformes sans réserve : calendrier 3 sem./30 h, arbitrage F2 passage unique, OI,
F3↔annexes, continuité TH1 S7-E1↔S8-E1, classification fluides (R290=A3, pas de code couleur inventé,
TeqCO2 exclu), statuts (C4.5/C1.3 « Confortement niveau visé Maîtrise » jamais confondu avec
Évaluation), totaux recomptés, libellés officiels, sécurité azote.

## Points en attente (décisions Franck)

1. **Arbitrage calendrier** : 3 semaines ne permettent pas F1 ×2 ET F2 ×2 côté froid → F1 ×2 (geste
   central) + F2 passage unique (synthèse vide+charge). À valider.
2. **Masse cible de charge simulée** : aucune valeur affirmée (« fixée par le professeur ») — la charge
   est à l'AZOTE, jamais de fluide réel (pas d'attestation d'aptitude en 1re année).
3. **Matériel** : balance(s) de charge et bouteilles d'azote disponibles (combien de postes F1/F2) ;
   quelle « machine école » sert de support ; bouteilles/étiquettes réelles pour T1 (R32 ? R290 ?
   R134a ?).
4. **Nouveau cahier des charges E1** : valeurs de consigne à fournir par Franck (champs vides).
5. Dates réelles sem. 26-28 (mai 2027) · copyright.

## Sources anciennes à rouvrir (formats non extraits)

`réglage thermostat.doc` · `tableau de valeur Eleve.doc` · `CHARGE EN GAZ.docx` (chemin égaré,
à relocaliser) — sous `02_CAP-IFCA\`.

## Après bon à tirer (dans l'ordre)

1. Corrections éventuelles de Franck.
2. Sortie triple : PDF (Edge headless) + docx natif (`outils\docx-natif\docx-helpers.js`).
3. Intégration RAG : `python C:\git\usine-contenu\outils\integrer-production.py "<ce dossier>"`.
4. Mise à jour `_PROGRAMME-CAP-IFCA-1A-2A.md` + `programme-cap-ifca.json` + tableau de bord.
