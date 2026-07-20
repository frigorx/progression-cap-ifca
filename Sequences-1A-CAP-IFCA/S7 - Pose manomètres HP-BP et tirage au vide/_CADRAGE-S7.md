# CADRAGE — Séquence S7 « Pose manomètres HP/BP + tirage au vide réel » (1A CAP IFCA)

*Rédigé le 19/07/2026 par le chef d'orchestre (usine FrigorX). Maître : `26-27\_PROGRESSION-1A-CODEE.md`
(EN ATTENTE bon à tirer). S7 ouvre la période P4 (semaines 22-25) : **entrer dans la mise en service** —
brancher les manomètres, faire le vide, lire. **S7 MATÉRIALISE LA REMÉDIATION POST-É3** (mécanique T0
rodée S3/S5) : module S7-T0 en semaine 22 + crochets ateliers + rubrique F3. Pas d'évaluation propre
(→ É4, sem. 32, rangée en S9).*

## ⚠ PIÈGE D'HOMONYMIE (à verrouiller chez tous les rédacteurs)
Dans la base, « tirage au vide » désigne DEUX choses différentes :
1. **le TIRAGE AU VIDE** = mise sous vide du circuit avec pompe à vide + vacuomètre (déshydratation
   avant charge) → **c'est NOTRE S7-F2** ;
2. la « **régulation par tirage au vide** (unique/automatique) » = le **pump down** (électrotechnique
   de régulation, électrovanne + pressostat BP) → **sujet 2A (S12), HORS S7 — ne PAS piocher dans ces
   documents** (`TP n°1/n°2 - Tirage au vide unique`, `Série … Régulation par tirage au vide`, etc.).
Un document source dont le titre contient « unique », « automatique » ou « régulation » = pump down = à écarter.

## Contexte
- Classe : **1re année CAP IFCA** (cohorte 2026-2028), LP Privé Jacques Raynaud — Campus ÉQUATIO, prof. F. Henninot.
- Semaines **22-25**, période **P4** (avril 2027, dates exactes à caler).
- Organisation inchangée : 10 h/sem. = 4 h froid + 4 h élec (demi-groupes) + 2 h théorie (classe
  entière). Ateliers vécus ×2 (passage 1 découverte guidée · passage 2 consolidation), UN document
  par module, encadré « Passage 1 / Passage 2 ».
- Calendrier des modules :
  - Sem. 22 : froid S7-F1 (p1) · élec S7-E1 (p1) · théorie **S7-T0 Remédiation É3** (classe entière)
  - Sem. 23 : froid S7-F1 (p2) · élec S7-E1 (p2) · théorie libre (co-intervention si marquée)
  - Sem. 24 : froid S7-F2 (p1) · élec S7-E2 (p1) · théorie **S7-T1 Lecture de relevés**
  - Sem. 25 : froid S7-F2 (p2) · élec S7-E2 (p2) · théorie libre
  (T1 en sem. 24 À DESSEIN : elle exploite les relevés réels accumulés en F1.)
- Prérequis réels (S1→S6, à réactiver au fil de l'eau) : brasage fort + épreuve azote au PV (C3.9
  travaillée vers Maîtrise), recherche de fuite prouvée, départ moteur avec auto-maintien câblé et
  ÉVALUÉ à É3, pressostats/thermostats connus en théorie (S5-T1, C4.6 Découverte), SC/SR calculées sur
  cas simulés (S5-T2), relation P/T (S4), **É3 passée (C3.4 · C3.6 · C3.9 positionnées)**.
- **Aucun statut Évaluation dans S7** — Découverte/Confortement uniquement.
- **Fluide frigorigène — cadre 1A** : la pose de manomètres se fait sur les machines de l'atelier
  (en charge) SOUS SUPERVISION DIRECTE du professeur (détenteur de l'attestation) ; purges BRÈVES,
  flexibles en bon état, émissions minimisées. AUCUNE manipulation de fluide au sens charge/récupération
  (ça reste S8 simulé puis 2A). Le tirage au vide (F2) se fait sur un circuit SANS fluide (le montage
  éprouvé de S6 ou un circuit école vidé), remise à l'azote en fin.

## ⭐ REMÉDIATION POST-É3 — le dispositif (mécanique T0, rodée)
Trois étages :
1. **Module S7-T0 « Retour d'É3 — remédiation ciblée » (2 h, sem. 22, classe entière)** — cloner la
   forme de S5-T0 en l'adaptant à É3. Postes de besoin issus des compétences d'É3 :
   poste BRASAGE FORT (C3.4 : un assemblage brasé fort, critères d'É3 — supports S5-F1),
   poste ÉTANCHÉITÉ (C3.9 : contrôle à l'eau savonneuse d'un montage SOUS PRESSION POSÉE PAR LE
   PROFESSEUR + lecture/critique d'un PV — supports S6-F1/F2 ; l'élève en remédiation ne manipule
   PAS la bouteille), poste CÂBLAGE (C3.6 : le départ moteur avec auto-maintien d'É3 recâblé sans
   aide — supports S6-E1/É3). Tuteurs 3-4 (fiche tuteur), défi transfert (« et le coffret clim qui
   arrive ? »), trace écrite « mon plan de progrès S7 » recopiée dans F3. Formatif, rien de remonté.
   Trame 120 min exacts : grilles 20 → 2×35 postes → retour 15 → plan 15. Tableaux à remplir par le
   professeur, AUCUN résultat fictif, aucun prénom.
2. **Crochets sem. 22-23** : phase 4 de S7-F1 réactive les gestes du poste froid d'É3 ; phase 4 de
   S7-E1 les items du poste élec ; variante consolidation fléchée « 1-2 à É3 sur [compétence] »,
   approfondissement fléché tutorat.
3. **F3** : rubrique « Après É3 : mes 2 objectifs, où j'en suis » (sem. 22, bilan sem. 25).
⚠ S7-T0 = AJOUT au maître (précédents S3-T2, S5-T0) — à valider au bon à tirer.

## Découpage en modules

| Module | Type | Durée | Sem. | Contenu | Compétences (statut) | Tâches | Savoirs travaillés |
|---|---|---|---|---|---|---|---|
| S7-T0 | Théorie (remédiation) | 2 h | 22 | Retour d'É3 : grilles, groupes de besoin C3.4/C3.9/C3.6, tutorat, plan de progrès | C3.4 · C3.9 · C3.6 Confortement (formatif) | T12 | S6.2 · S5.5 · S5.6 (réactivés) |
| S7-F1 | Atelier | 4 h ×2 | 22-23 | **Pose manomètres HP/BP** : le manifold (2 manomètres, 3 flexibles, by-pass), branchement sur machine, purge brève, LECTURE (P lue ↔ T de la réglette), dépose propre | **C4.7 Découverte→Confortement** · C4.5 Confortement (vers M) | T11 · T12 · T15 (découverte) | S5.1 augmenté |
| S7-F2 | Atelier | 4 h ×2 | 24-25 | **Tirage au vide RÉEL** : pompe à vide, vacuomètre, courbe de descente dans le temps, interprétation (remontée = fuite ou humidité), casse du vide à l'azote | **C4.1 Découverte→Confortement** · C3.7 Confortement | T13 (partiel) · T12 | S5.5 augmenté |
| S7-E1 | Atelier | 4 h ×2 | 22-23 | **Régulations simples** : thermostat et pressostat EN COFFRET — le PREMIER réglage réel de consigne (guidé), vérification du déclenchement | **C4.6 Découverte→Confortement** · C3.6 Confortement | T11 · T12 | S5.6 augmenté |
| S7-E2 | Atelier | 4 h ×2 | 24-25 | **Coffret clim + câblage** : câbler le coffret complet d'après plan (alimentation, régulation, départ moteur — réinvestissement S5/S6) | C3.6 **vers Maîtrise** · C3.7 Confortement | T10 · T11 · T12 | S5.6 augmenté |
| S7-T1 | Théorie | 2 h | 24 | **Lecture de relevés** : HP/BP/températures — mettre ensemble réglette P/T (S4), SC/SR (S5-T2) et les relevés RÉELS de F1 ; préparer le regard du diagnostiqueur (S9) | C4.5 Confortement (vers M) | — | S5.1 augmenté |
| F3 | Fil de l'eau | 2 h continu | 22-25 | Carnet de bord + **relevés systématiques** (chaque séance = sa feuille de relevés) + rubrique « après É3 » | **C1.1 Découverte→Confortement** · C1.3 Confortement | T1 · T15 (découverte) | S3.1 augmenté |

Trames : ATELIER 4 h = 10 phases, prépa ≤ 1 h, **240 min exacts**, encadré Passage 1/2.
THÉORIE 2 h = accroche 10 → découverte 40 → application 50 → synthèse 20 = **120 min exacts**.

## Fil rouge professionnel
**Le chantier « arrière-boutique », acte final avant mise en service** : l'étanchéité de la chambre
froide a été PROUVÉE au PV en S6 — on prépare maintenant la mise en service. Ordres d'intervention :
- **OI-S7-1** (F1) : poser les manomètres sur le groupe et relever les pressions.
- **OI-S7-2** (F2) : tirer au vide la liaison éprouvée en S6 (déshydrater avant la future charge).
- **OI-S7-3** (E1) : régler les organes de régulation du coffret aux consignes du commerçant.
- **OI-S7-4** (E2) : câbler le coffret complet de la chambre.
T1 : « les relevés du groupe : tout va bien ? ». Jamais de nom propre. La CHARGE elle-même n'arrive
qu'en S8 (simulée) — le dire dans le Dossier de séquence (teasing de fin de séquence).

## Méthodes imposées (VARIER — aucune reprise de S1→S6)
- **S7-T0** : groupes de besoin + tutorat (rituel post-évaluation, reprise assumée).
- **S7-F1** : **procédure à remettre en ordre** — les étapes de pose/dépose du manifold sont fournies
  MÉLANGÉES (cartes-étapes) ; chaque binôme reconstitue l'ordre, le fait valider, PUIS exécute sa
  propre procédure sur machine. La dépose suit le même principe. (Le sens : la procédure se comprend
  avant de s'exécuter.)
- **S7-F2** : **expérience instrumentée + courbe de descente** — l'élève relève la pression au
  vacuomètre à intervalles réguliers, TRACE la courbe temps/pression sur un repère fourni, constate
  le palier, interprète une remontée d'aiguille (fuite ? humidité ?) ; casse du vide à l'azote.
  C'est la 1re fois qu'un TP fait TRACER une courbe — assumer et guider (papier millimétré fourni
  en annexe pleine page).
- **S7-E1** : **cahier des charges client → consigne** — situation-problème : « le commerçant veut
  telle température dans la chambre, telle sécurité sur le groupe » (valeurs du cahier des charges
  FOURNIES par le professeur au poste, « à faire valider ») ; l'élève traduit en consignes, règle
  (guidé), PROUVE le déclenchement (bouton test / variation réelle observée).
- **S7-E2** : **chef d'équipe tournant** — binôme : l'un lit le plan et guide à voix haute (chef
  d'équipe), l'autre exécute ; rotation à mi-câblage. Développe C3.7 (contrôler la mise en œuvre)
  et la communication technique. Passage 2 : rôles raccourcis, plus d'autonomie.
- **S7-T1** : **exploitation des relevés RÉELS de la classe** — chaque binôme apporte les relevés
  de son passage F1 (carnet F3) ; on les met en commun (tableau collectif), on les confronte à la
  réglette P/T et aux plages SC/SR (seuils charte), on repère les valeurs aberrantes (erreur de
  lecture ? machine ?) ; cas fournis en complément pour les binômes sans relevés exploitables.
- **F3** : chaque séance de S7 produit une FEUILLE DE RELEVÉS (T15 en découverte : renseigner un
  document de mise en service).

## Documents de référence (à LIRE avant de rédiger — obligatoire)
- Charte : `C:\git\usine-contenu\00-charte\CHARTE-PEDAGOGIQUE-FRIGORX.md`
- Manuel : `C:\git\usine-contenu\02-conception\MANUEL-CONCEPTION.md` (§2 bis, §3, §6)
- **Modèles de forme (harmonisation 1A stricte — même CSS/en-tête/pied)** :
  - Atelier (triple) : `..\S6 - Épreuve d'étanchéité azote et recherche de fuite\S6-F1 - Épreuve d'étanchéité à l'azote\`
  - Théorie (duo) : `..\S6 ...\S6-T1 - Risques de la pression et gaz neutres\`
  - Remédiation S7-T0 : cloner `..\S5 - Brasage fort HP et électricité industrielle\S5-T0 - Retour d'É2 et remédiation ciblée\`
    en l'adaptant à É3 (grilles É3 = `..\S6 ...\Évaluation sommative É3 S5-S6 (semaine 21)\Document professeur - corrigé et grille.html`)
  - Carnet (duo) : `..\S6 ...\F3 - Carnet de bord\`
  - Dossier de séquence : `..\S6 ...\Dossier de séquence S6.html`

## Codes officiels (libellés EXACTS — vérifiés au référentiel le 19/07)
- **C4.1 « Tirer au vide le circuit frigorifique »** · **C4.7 « Raccorder les équipements de charge,
  de mesure et de contrôle »** · C4.6 « Paramétrer ou régler les valeurs de consigne sur organe de
  régulation ou de sécurité » · C4.5 « Mesurer, comparer des grandeurs » · C3.6 « Câbler, repérer,
  connecter les liaisons électriques et électroniques » · C3.7 « Contrôler la mise en œuvre des
  équipements électriques et fluidiques » · C3.4 « Façonner, raccorder, assembler, isoler les
  circuits (frigorifique, hydraulique, aéraulique) » · C3.9 « Vérifier l'étanchéité d'un circuit
  (frigorifique, hydraulique) avant mise en service » · C2.4 « Sécuriser l'intervention » ·
  C1.3 « Rendre compte » · **C1.1 « Compléter, transmettre »**
- T10 · T11 « Contrôler les circuits hors fonctionnement » · T12 · **T13 « Tirer au vide, charger et
  contrôler l'installation sous tension »** (PARTIEL : seul « tirer au vide » est travaillé — l'écrire) ·
  **T15 « Renseigner les documents de mise en service »** (découverte) · T1
- S5.1 « Systèmes thermodynamiques à détente directe » · S5.5 « Réseaux fluidiques et mécanique des
  fluides » · S5.6 « Réseaux, matériels électriques et de régulation » · S3.1 « Communication technique »

## Sources métier à restituer (fiches : `profs cour Indexee\_MD\<chemin>.md`)
Base = `C:\Users\henni\OneDrive\Bureau\profs cour Indexee\`
- **S7-F1 (pose manos)** : ⭐⭐ `02_CAP-IFCA\C3-Realiser\S5S1 POSE MANIFOLD ET TIRAGE AU VIDE
  ELEVES.docx` + `...PROF.docx` (+ variante `-cour-fh.docx` = le cours de Franck — restitution
  prioritaire ; ces documents couvrent F1 ET F2, les partager entre les deux rédacteurs) ·
  ⭐ `02_CAP-IFCA\C4-MettreEnService\03-Manifold NEW.docx` (dossier complet manifold) ·
  `Fiche branchement débranchement des manifolds élève.docx` · `05_Ressources-Partagees\
  Pressostats-Manometres\TP_Complet_Manometres_Pressostat_BP_CAP_IFCA.docx` + `Fiche_CAP_IFCA_
  Pose_Manometres.docx` + `Support_Pose_Manometres_CAP_IFCA.docx` · `02_CAP-IFCA\C4-MettreEnService\
  Document de travail - La pose du bipasse de service (manifold).pdf` · `02_CAP-IFCA\C3-Realiser\
  Activité 307 Pose de mano et tirage au vide.docx` + `Activité pose de mano et tirage au vide.docx`.
- **S7-F2 (tirage au vide)** : ⭐⭐ les mêmes `S5S1 POSE MANIFOLD ET TIRAGE AU VIDE …` ·
  ⭐ `02_CAP-IFCA\C4-MettreEnService\TD_Pose-manifold-tirage-au-vide_Maximilien-Perret.pdf`
  (+ `_version-modifiable.docx`) · `02_CAP-IFCA\C3-Realiser\tirage au vide.docx` (+ `tirage au
  vide 24.docx`) · `02_CAP-IFCA\C3-Realiser\ressource tirage au vide.docx` · `Activité n°24 Test
  étanchéité tirage au vide Thierry.docx`. ⚠ L'image d'archives `tirage_au_vide_valeur_de_pression_
  a_atteindre.jpg` a été EXAMINÉE ET ÉCARTÉE par le chef d'orchestre (19/07) : filigrane commercial
  tiers « e-genieclimatique.com » (même site que les photos rejetées en S5-T1) + une valeur aberrante
  ligne 24 °C — ne PAS l'utiliser. **Niveau de vide cible = « fixé par le professeur, selon la
  pratique de l'atelier, à faire valider »** (aucune valeur de vide affirmée). Le principe « le vide
  fait bouillir l'eau à froid » peut s'expliquer QUALITATIVEMENT (lien avec S4-T1 : ébullition et
  pression), sans table chiffrée. ⚠ Écarter tout doc « régulation par tirage au vide / unique / automatique » (pump
  down, 2A). Ne PAS traiter la charge (Activité 244 « et charge en fluide » : ne prendre que le volet vide).
- **S7-E1 (régulations)** : ⭐ `02_CAP-IFCA\C4-MettreEnService\reglage bp sous azote.docx` (réglage
  pressostat BP — adapter : en 1A le circuit d'essai est préparé par le professeur) · `TRAVAUX
  PRATIQUES POSE des manifold et réglage Pressostat BP.docx` · `_réglage des pressostat  BP
  sécurité.docx` · `_Archives\Themes\Collegues-Partages\Pressostat.pdf` (AFPA — consigne/différentiel,
  exemple chiffré 4,2/1,8/2,4 bar déjà validé en S5-T1) · les documents S5-T1 PRODUITS (cartes
  d'identité : continuité directe — « en S5 vous avez compris la consigne, aujourd'hui vous la RÉGLEZ »).
- **S7-E2 (coffret clim)** : ⭐⭐ `C:\Users\henni\OneDrive\Bureau\25 26\cours 25_26\2cap ifca 25_26\
  tp cablage pu co reperage.pdf` (LE TP modèle de Franck — barre du haut de référence, repérage
  puissance/commande) · les documents S5-E2/S6-E1 PRODUITS (schémas SVG commande/puissance, repères
  KM1/S1/S2/F1/H1/H2 — le coffret RÉINVESTIT ces acquis en y ajoutant la régulation de E1) ·
  `02_CAP-IFCA\S4-Electricite\TP formatif horloge et contacteur.docx` (visuels).
- **S7-T1 (lecture de relevés)** : ⭐ série `EvaL lecure mano` (exemplaires les plus lisibles :
  `02_CAP-IFCA\Bases-Techniques\EvaL lecure mano un.odt`/`2.odt`/`3.odt`, doublons dans
  `_Archives\Themes\Cours-Annuels\` en .docx/.pdf) · exercices rapides lecture manomètres
  (`25 26\vrac fiep 3\Exercices_rapides\`) · les documents S4-F1 et S5-T2 PRODUITS (réglette,
  SC/SR — continuité des seuils charte 5-10 K / 4-8 K).
- **S7-T0** : les 3 documents É3 produits (S6) + supports S5-F1, S6-F1/F2, S6-E1 (reprises, rien de neuf).
- Symboles (`C:\git\usine-contenu\bibliotheque-symboles\`) : disponibles et vérifiés : `manometres`,
  `pompe`, `pompe_electrique`, `pressostat_hp/bp/nf`, `thermostat`, `thermostat_froid`, + tout le
  jeu élec de S5 (contacteur, moteur, boutons, relais thermique, voyants). Pas de symbole « pompe à
  vide » ni « vacuomètre » dédiés : utiliser `pompe_electrique` légendé « pompe à vide » et
  `manometres` légendé « vacuomètre » — le SIGNALER dans les documents (« symbole générique »),
  ne rien redessiner à la main.
- Extraction : docx = zip `word/media/` ; PDF = pymupdf ; odt = zip `Pictures/`. Formats anciens
  (.doc/.ppt/.DOC) non extraits : « à rouvrir », rien inventé.

## Images du dossier
`images\` : copier depuis S5/S6 : logos ×2, croix svg+png, fiche-securite-a-cocher.png,
multimetre-cadran-fonctions.png, manodetendeur-azote-schema-principe.jpg, symboles élec utiles +
`manometres.svg`, `pompe.svg`, `pompe_electrique.svg`, `pressostat_*.svg`, `thermostat*.svg` ;
extraire des S5S1/03-Manifold : photos du manifold (HP rouge / BP bleu), pompe à vide, vacuomètre ;
copier `tirage_au_vide_valeur_de_pression_a_atteindre.jpg` si lisible (la sourcer).

## Règles non négociables (rappel — charte/manuel font foi)
1. Corps élève **14 pt vérifié dans le CSS** (professeur/plans 13 pt) ; TDAH/DYS.
2. Grilles **0-4** critères observables + savoir-être + auto-positionnement ; **≤ 4 compétences** ;
   statuts Découverte/Confortement UNIQUEMENT (nuance « vers Maîtrise » tolérée pour C3.6/C4.5).
3. Fil rouge arrière-boutique, OI-S7-1 à 4 ; jamais de nom propre.
4. Sécurité renforcée :
   - **Machine en charge (F1)** : supervision directe du professeur, lunettes + gants (brûlure
     froide), flexibles vérifiés, purge BRÈVE, jamais desserrer un flexible sous pression sans purge,
     jamais ouvrir le circuit ; une phrase sur le sens F-Gas (limiter les émissions), sans cours.
   - **Pompe à vide (F2)** : appareil électrique (état du cordon), huile chaude, échappement d'huile,
     jamais d'aspiration d'azote sous pression (casser la pression AVANT de pomper).
   - **Azote (casse du vide, F2)** : acquis S5/S6 — détendeur obligatoire, montée douce, lunettes.
   - **Élec (E1/E2)** : consignation « NF C 18-510 » (avec espaces), contrôle hors tension, mise
     sous tension PAR LE PROFESSEUR ; coffret : repérage avant câblage.
   - Flamme : si mentionnée (rappels), ordre de fermeture = **combustible d'abord, puis oxygène** (ED 742).
5. Totaux EXACTS : ateliers 240 min · théories 120 min · encadrés Passage 1/2 dans les 4 ateliers.
6. TP élève ≥ 1 500 mots ; encadré « ce qui change depuis S6 » (l'étanchéité est prouvée, on prépare
   la mise en service ; É3 est passée : tes objectifs s'appliquent ici).
7. ZÉRO invention : niveau de vide cible = image sourcée SI lisible, sinon « fixé par le professeur » ;
   AUCUNE valeur de pression de service affirmée (« lue sur la machine ») ; consignes E1 « du cahier
   des charges fourni au poste, à faire valider » ; seuils charte SC 5-10 K / SR 4-8 K seuls (T1) ;
   azote 10 bar mini/24 h + ≈ 200 bar (sourcés) uniquement en rappel.
8. Alternance agir → noter → réfléchir ; variantes consolidation (fléchée É3) / standard /
   approfondissement (tutorat) dans chaque atelier.
9. Tableaux jamais coupés ; pied de page charte daté **19/07/2026** ; sources en fin (+ anciens
   formats « à rouvrir »).
10. HTML SEULEMENT (sortie triple après bon à tirer). Annexes pleine page : cartes-étapes de la
    procédure (F1, une planche à découper) + feuille de relevés T15 (F1) ; repère millimétré de la
    courbe de descente pleine page (F2) ; plan du coffret **A3 paysage** (E2, une feuille par
    binôme) ; tableau collectif de relevés pleine page (T1).

## Rangement (créer exactement ces dossiers)
`C:\Users\henni\OneDrive\Bureau\26-27\Sequences-1A-CAP-IFCA\S7 - Pose manomètres HP-BP et tirage au vide\`
- `Dossier de séquence S7.html` + `_CADRAGE-S7.md` (ce fichier) + `_ETAT.md` + `images\`
- `S7-T0 - Retour d'É3 et remédiation ciblée\` → Document élève.html · Document professeur.html
- `S7-F1 - Pose manomètres HP-BP\` → Plan de séance.html · Document élève - TP.html · Document professeur - corrigé.html
- `S7-F2 - Tirage au vide réel\` → idem
- `S7-E1 - Régulations simples - premier réglage\` → idem
- `S7-E2 - Coffret clim et câblage\` → idem
- `S7-T1 - Lecture de relevés\` → Document élève.html · Document professeur.html
- `F3 - Carnet de bord\` → Document élève.html · Document professeur.html
(⚠ « HP/BP » s'écrit « HP-BP » dans les noms de dossiers ; « HP/BP » dans les textes.)

## Points en attente (reporter dans `_ETAT.md`)
S7-T0 = ajout au maître (à valider) · niveau de vide cible (image d'archives à vérifier, sinon
professeur) · machines support de F1 (lesquelles, combien de postes manifold) · matériel E1 (coffrets
thermostat/pressostat disponibles, cahier des charges type à fournir par Franck) · plan réel du
coffret clim E2 (le TP modèle `tp cablage pu co reperage.pdf` fait-il foi tel quel ?) · pompe(s) à
vide et vacuomètre(s) disponibles (combien de postes F2) · dates réelles sem. 22-25 · copyright ·
anciens formats à rouvrir (`tp tirage au vide.doc`, `Tirage au vide, charge en fluide.DOC`,
`Manifold, tirage au vide, détection.DOC`, `10498-3 tirage au vide.PPT` AFPA).
