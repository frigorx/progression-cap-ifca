# État — Séquence S6 « Épreuve d'étanchéité azote (20 bar) + recherche de fuite » (1A CAP IFCA)

*Séquence produite le 19/07/2026 par l'usine FrigorX (chef d'orchestre + 7 rédacteurs + contrôle).
Cadrage : `_CADRAGE-S6.md`. Maître : `26-27\_PROGRESSION-1A-CODEE.md` (en attente bon à tirer global).*

## Statut : PRODUITE 19/07/2026 (17 documents HTML) — EN ATTENTE BON À TIRER FRANCK

| Document | État |
|---|---|
| Dossier de séquence S6.html | ✅ produit 19/07/2026 |
| S6-F1 Épreuve d'étanchéité à l'azote (plan + TP + corrigé) | ✅ produit 19/07/2026 |
| S6-F2 Recherche de fuite (plan + TP + corrigé) | ✅ produit 19/07/2026 |
| S6-E1 Contacteurs et moteurs — consolidation (plan + TP + corrigé) | ✅ produit 19/07/2026 |
| S6-T1 Risques de la pression et gaz neutres (élève + prof) | ✅ produit 19/07/2026 |
| F3 Carnet de bord (élève + prof) | ✅ produit 19/07/2026 |
| É3 S5-S6 semaine 21 (sujet + corrigé/grille + passation) | ✅ produit 19/07/2026, corrigé post-contrôle |

HTML seulement — sortie triple (PDF + docx natif) et intégration RAG APRÈS le bon à tirer.

## Contrôle (19/07/2026)

**Mécanique** (script, 17/17) : polices, pieds de page, chemins d'images, balises, graphies, chemins
absolus — propre ; « 20 bar » vérifié cantonné aux paragraphes d'arbitrage (retiré du TITRE de garde du
Dossier de séquence, restituable si l'arbitrage tranche 20 bar).
**Fond** (contrôleur dédié, 12 points, lecture intégrale) : **1 BLOQUANT corrigé** — le poste élec d'É3
évaluait un interrupteur simple alors que S6-E1 promet « commande complète avec auto-maintien » comme
niveau exigé à É3 ; É3 réaligné sur la promesse (S1 NO + S2 NF + auto-maintien KM1 13-14, essai décisif
« relâchement de S1 : le moteur continue », annexes A3 = les schémas --sans-reperes réellement
travaillés, voyants H1/H2 explicitement hors évaluation, barème 40 pts inchangé). Aucun majeur, aucun
mineur — tout le reste conforme sans réserve (calendrier, OI, F3↔modules, PV↔mini-PV, statuts,
libellés, valeurs sourcées, totaux 240/120 min recomptés, sécurité, annexes).
Points de rigueur T1 : interdiction de l'oxygène SOURCÉE (ED 742, inflammation des corps gras) ;
interdiction de l'air comprimé honnêtement marquée « règle professionnelle, à faire valider ».

## Points en attente (décisions Franck)

1. **Arbitrage de calendrier (décision de cadrage à valider)** : la semaine 21 est entièrement prise
   par É3 → **S6-F2 (recherche de fuite) en passage UNIQUE renforcé** (sem. 20, réinvesti au poste
   froid d'É3 puis S7) et **créneau élec de la sem. 20 = préparation libre d'É3** (reprise autonome
   des documents S5/S6, pas de document neuf). Le maître marquait F2 « ×2 » — dérogation motivée.
2. **Pression d'épreuve** : maître « 20 bar » vs seule valeur sourcée « 10 bar mini/24 h »
   (`1 mise sous azote.docx`) — même arbitrage que S5 ; les documents écrivent « fixée par le
   professeur ». Durée de tenue en pression : idem.
3. **Gaz traceur (arbitrage n° 6 du maître)** : quel gaz réellement à l'atelier ? Les documents se
   limitent à « il existe des gaz traceurs, selon le matériel de l'atelier, à faire valider »
   (aucune composition affirmée).
4. **Montages fuyards S6-F2** : combien, et comment le professeur crée les fuites (suggestions du
   corrigé « raccord desserré, dudgeon mal serré, brasure incomplète » — à faire valider).
5. **Matériel** : nombre de manodétendeurs/postes d'épreuve simultanés, platines élec pour E1 et É3.
6. Dates réelles sem. 18-21 (mars-avril 2027) · copyright (point global usine).
7. TP soudure acier C3.5 toujours EN SUSPENS (fourni par Franck, créneau réservé en S5) — sans impact S6.
8. **É3 — choix de rédaction à valider** : barème 40 pts réparti C3.4=10 · C3.9=8(azote)+6(fuite) ·
   C3.6=10 · théorie appui=2 · savoir-être C2.4=4 (première fois pesé explicitement) ; **poste élec
   ALIGNÉ le 19/07 sur la promesse de S6-E1 (arbitrage chef d'orchestre, correction bloquante)** :
   commande complète S2 arrêt NF → S1 marche NO → auto-maintien KM1 13-14 en parallèle de S1 → F1 95-96
   en série → bobine KM1, SANS les voyants H1/H2 (niveau 2 du contrat, hors É3 ; s'ils figurent sur le
   SVG annexe, la consigne dit de ne pas les câbler) ; montage fuyard du poste froid partie C peut être
   le montage même de l'élève (s'il échoue en partie B) ou un montage préparé — à trancher selon le
   nombre de postes réels.

## Après bon à tirer (dans l'ordre)

1. Corrections éventuelles de Franck.
2. Sortie triple : PDF (Edge headless) + docx natif (`outils\docx-natif\docx-helpers.js`).
3. Intégration RAG : `python C:\git\usine-contenu\outils\integrer-production.py "<ce dossier>"`.
4. Mise à jour `_PROGRAMME-CAP-IFCA-1A-2A.md` + tableau de bord programme.
