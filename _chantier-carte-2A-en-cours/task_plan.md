# Chantier : Carte de progression 2CAP IFCA 2026-2027 (pédagogie de projet × calendrier réel)

## Goal
Fusionner la carte hebdomadaire du maître `26-27\Dossier_Progression_2A_CAP_IFCA.docx`
(pédagogie de projet, P5→P8, S10→S16, 6 matières, codes C/T/S) avec le calendrier officiel
`planification_generale_2026_2027_modifiable_enseignants.xlsx` (col. J = CAP IFCA scolaire).
Livrable : carte de progression complète Période → Séquence → Séance, matière par matière,
codes référentiel vérifiés (errata appliqué), présentable à un inspecteur.
Sortie : HTML pour bon à tirer → puis sortie triple (PDF + docx natif) après validation Franck.

## Décisions de fusion (calendrier réel, xlsx col. J)
- P5 = 2636-2642 (31/08→16/10, 7 sem.) = sem. maîtres 1-7. Éval S10-S11 en 2642 (12-16/10).
- Toussaint 19/10→30/10.
- P6 = 2645-2647 (02/11→20/11, 3 sem.) = sem. 8-10. Éval S12 en 2647 (16-20/11).
- PFMP3 = 2648-2651 (23/11→18/12). Noël 21/12→01/01.
- P7 = 2701-2707 (04/01→19/02, 7 sem.) = sem. 11-17 SANS coupure (vacances d'hiver décalées
  après la sem. 17 au lieu d'après la 15). CCF EP1-S2 en 2703 (18-22/01). Éval S13-S14 en 2707 (15-19/02).
- Hiver 22/02→05/03.
- Début P8 = 2710-2711 (08/03→19/03) = sem. 18-19 : CCF EP2 en 2710, S15/A6 + prépa PFMP4 en 2711.
- PFMP4 = 2712-2715 (22/03→16/04). Printemps 19/04→30/04.
- Fin P8 = 2718-2725 (03/05→25/06, 8 sem. RÉELLES contre 6 prévues → 2 sem. gagnées) :
  2718=sem.20 (A6 finition ; Ascension jeu. 06/05), 2719=sem.21 (A6 MES finale),
  2720=sem.22/S16 (férié lun. 17/05), 2721=NOUVELLE sem. 22bis CCF EP3 blanc + répétition oral,
  2722=sem.23 CCF EP3 + soutenance chef-d'œuvre (31/05-04/06), 2723=sem.24 rattrapages,
  2724=sem.25 fin/validation, 2725=NOUVELLE bilan/conseils de classe.
- Errata codes appliqué (audit §2.1) : S2.4→S2.1 (sem.3,5) et →S5.6 (sem.9) ; S7.1→S0.1 ;
  C4.4 sem.15→C4.2/C4.7. C4.4 conservé en S15 (pose split). À documenter dans le livrable.

## Phases
### Phase 1 — Sources réunies : COMPLETE
xlsx décodé (col. J + vacances), maître 2A extrait (tableaux 0-9), audit lu, programme lu.
### Phase 2 — Vérif codes référentiel : COMPLETE (16 T, 29 S, 24 C extraits ; errata confirmé)
### Phase 3 — Questions Franck : COMPLETE (Scolaire — logo lycée · attestation CATÉGORIE I,
arbitrage n° 4 de l'audit tranché le 16/08/2026)
### Phase 4 — Carte HTML construite : COMPLETE
`26-27\Carte_Progression_2A_CAP_IFCA_2026-2027.html` (257 Ko, 2 logos base64, 10 sections,
en-tête répété par thead squelette — le position:fixed chevauchait, corrigé)
### Phase 5 — Vérifications : COMPLETE
27 semaines de cours = exactement les semaines ISO attendues, zéro sur PFMP/vacances ;
S2.4/S7.1/C4.4 absents de la grille (présents seulement en errata/référentiel) ; accents OK ;
rendu PDF Edge contrôlé visuellement pages 1, 4, 5 (15 pages, en-tête sur chaque page).
### Phase 6 — Livraison : COMPLETE (bon à tirer Franck 16/08 soir → sortie triple finie :
HTML + PDF + docx natif `docx` (script build-carte-docx.mjs adapté de la brique
tp-qelectrotech\outils\html-vers-docx.mjs : paysage + trames de lignes + logos) ;
docx vérifié par python-docx (paysage, 39×10, 7 blocs, jalons) ; copies OneDrive +
G:\Mon Drive\PROGRESSION\26-27\ ; décisions tracées dans _PROGRAMME-CAP-IFCA-1A-2A.md)

## Correction majeure du 16/08 (retour Franck, AVANT bon à tirer)
Le tableau maître étiquetait « Chantier Ax » presque chaque semaine → FAUX : le dossier projet
(§ 4.1) dit 2 h/sem banquées sur le chef-d'œuvre → blocs ponctuels. Décision Franck : catalogue
A1→A6 en 6 rendez-vous — A1 sem.2 (8 h) · A2 sem.6 (8 h) · A3 sem.8-9 (journées 8 h bi-prof) ·
A4 sem.10 (4 h) · A5 sem.15 (4 h) · A6 sem.20 (4 h) — TP classiques le reste du temps.
Appliqué partout (grille, sections 1-2-4-10, légende, carte résumé). Vérifié : 0 préfixe restant,
7 badges bloc, 6 cellules saumon. PDF régénéré (15 p.), copies OneDrive + Google Drive à jour
(`G:\Mon Drive\PROGRESSION\26-27\`). Livraison téléphone : via les applis Drive, pas les cartes
de fichier (session à distance).

## Next Step
CHANTIER TERMINÉ. Restes éventuels (autre chat) : reporter la cadence 6 blocs dans le
docx maître Dossier_Progression_2A + les arbitrages 5-13 de l'audit toujours ouverts.

## Errors Encountered
| Error | Attempt | Resolution |
|-------|---------|------------|
| xlsx max_col=16364 (cellules fantômes) | 1 | limiter à 120 col + fusions résolues |

## Fichiers
- Dump maître : scratchpad\progression-2A-dump.txt (25 sem., tableaux 0-9)
- Livrable : 26-27\Carte_Progression_2A_CAP_IFCA_2026-2027.html (à créer)
