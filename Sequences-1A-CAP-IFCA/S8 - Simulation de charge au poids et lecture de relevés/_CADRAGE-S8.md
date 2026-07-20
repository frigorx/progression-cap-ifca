# CADRAGE — Séquence S8 « Simulation de charge (au poids) + lecture de relevés » (1A CAP IFCA)

*Rédigé le 19/07/2026 par le chef d'orchestre (usine FrigorX). Maître : `26-27\_PROGRESSION-1A-CODEE.md`
(EN ATTENTE bon à tirer). S8 = avant-dernière séquence P4 (semaines 26-28) : **le geste de charge SANS
fluide réel** — bouteille, balance, procédure, à l'AZOTE. Séquence COURTE (3 semaines), PAS de remédiation
(pas d'éval récente — la dernière est É3 sem. 21, la prochaine É4 sem. 32 en S9) donc PAS de module T0.
Pas d'éval propre (→ É4).*

## ⚠⚠ PRINCIPE FONDATEUR DE LA SÉQUENCE — à verrouiller chez TOUS les rédacteurs
La charge est **SIMULÉE À L'AZOTE**, jamais avec un fluide frigorigène réel. En CAP 1re année, l'élève
n'a PAS l'attestation d'aptitude qui autorise la manipulation de fluide — elle se prépare
en 2e année. ⚠ Ne PAS affirmer de numéro de catégorie hors du module S8-T1 : le CAP ne prépare PAS la
« catégorie I » (la plus large) ; le détail des catégories (dont la catégorie II, charges < 2 kg) est
traité et sourcé UNIQUEMENT en S8-T1 (skill fluides-nfen378 + arrêté 29/02/2016). Ailleurs, écrire
« une attestation d'aptitude à la manipulation des fluides frigorigènes », sans numéro. On apprend donc le GESTE (bouteille sur balance, tare, pesée, complément, procédure) avec
de l'azote, sur du matériel PÉDAGOGIQUE. **Aucune masse de fluide réel affirmée, aucune procédure de
récupération, aucun raccordement de bouteille de FF.** Le distinguo « pourquoi on simule » est un encadré
prof explicite (source : `repere_fluides_frigorigenes_et_attestation_daptitude_.docx`, Éducation
nationale — catégories I-V ; à NE PAS distribuer aux élèves, à citer pour cadrer). Tout document source
qui charge un vrai R404A/R134a (ex. `Mise en service et charge en fluide frigorigène projet.docx`,
300/500 g) est réécrit en azote : on garde la DÉMARCHE (tare, pesée, tableau masse avant/après), on
remplace le fluide par l'azote et la masse par « masse cible fixée par le professeur ».

## Contexte
- Classe : **1re année CAP IFCA** (cohorte 2026-2028), LP Privé Jacques Raynaud — Campus ÉQUATIO, prof. F. Henninot.
- Semaines **26-28**, période **P4** (mai 2027, dates exactes à caler). **3 semaines = 30 h** (10 h/sem.).
- Organisation : 4 h froid + 4 h élec (demi-groupes en rotation) + 2 h théorie (classe entière).
- ⚠ **ARBITRAGE DE CALENDRIER (assumé, à valider — comme en S6)** : 3 semaines ne permettent pas les
  2 passages de F1 ET F2 côté froid. Décision : **F1 vécu ×2 (le geste central, sem. 26-27), F2 en
  PASSAGE UNIQUE (sem. 28)** car F2 est la SYNTHÈSE (vide de S7 + charge de F1 enchaînés = mini-mise en
  service). Côté élec : **E1 vécu ×2 (sem. 26-27)**, sem. 28 = créneau de préparation/co-intervention.
  - Sem. 26 : froid S8-F1 (p1) · élec S8-E1 (p1) · théorie **S8-T1 Fluides frigorigènes**
  - Sem. 27 : froid S8-F1 (p2) · élec S8-E1 (p2) · théorie libre (co-intervention si marquée)
  - Sem. 28 : froid **S8-F2 (passage unique)** · élec créneau libre (préparation, révisions) · théorie libre
- Prérequis réels (S1→S7, à réactiver au fil de l'eau) : pose manomètres + lecture (S7-F1), tirage au
  vide réel avec courbe de descente (S7-F2), premier réglage de consigne C4.6 (S7-E1, repère TH1),
  coffret clim câblé (S7-E2), lecture de relevés réels + chasse aux aberrantes (S7-T1), épreuve azote
  au PV (S6, C3.9), départ moteur auto-maintien évalué à É3. La bouteille d'azote et le manodétendeur
  sont MAÎTRISÉS (S5-F2, S6-F1, S7-F2). Carnet F3 = document professionnel « exploitable par un tiers ».
- **Aucun statut Évaluation dans S8** — Découverte/Confortement uniquement. ⚠ Ne pas confondre le NIVEAU
  spiralaire VISÉ (le maître écrit C4.5 **M**, C1.3 **M** : niveau élevé atteint) avec le STATUT dans
  l'activité (Confortement — rien n'est remonté en S8). C4.5 et C1.3 sont « Confortement, niveau visé
  Maîtrise » ; C4.2 est « Découverte » (première rencontre, simulée).

## Découpage en modules

| Module | Type | Durée | Sem. | Contenu | Compétences (statut) | Tâches | Savoirs travaillés |
|---|---|---|---|---|---|---|---|
| S8-F1 | Atelier | 4 h ×2 | 26-27 | **Simulation de charge au poids** (azote, balance électronique, tare, pesée, complément) : le geste de charge SANS fluide réel, procédure complète | **C4.2 Découverte** (simulée) · C4.7 Confortement | T13 (simulé) · T14 (découverte) | S5.2 augmenté |
| S8-F2 | Atelier | 4 h ×1 | 28 | **Tirage au vide + simulation de charge enchaînés** (mini-mise en service) : reprendre le vide (S7-F2) puis simuler la charge (F1), remplir la feuille de relevés | C4.1 Confortement · **C4.5 Confortement** (niveau visé Maîtrise) | T13 · T15 | S5.5 augmenté |
| S8-E1 | Atelier | 4 h ×2 | 26-27 | **Réglage de consignes guidé — consolidation** : re-régler plusieurs organes (thermostat, pressostat) en AUTONOMIE, moins d'aide qu'en S7-E1 | C4.6 Confortement · C3.6 Confortement | T14 (découverte) · T11 | S5.6 augmenté |
| S8-T1 | Théorie | 2 h | 26 | **Fluides frigorigènes : familles, bouteilles, étiquettes** (découverte) : CFC/HCFC/HFC/HFO/naturels, code couleur, étiquetage, classification sécurité A1/A2L/A2/A3, PRP en découverte | appui (pas de compétence remontée) | — | **S5.2 augmenté · S0.1 nouveau** |
| F3 | Fil de l'eau | 2 h continu | 26-28 | Carnet de bord + **feuille de relevés type** (le carnet devient dossier de mise en service) | **C1.1 Confortement** · **C1.3 Confortement** (niveau visé Maîtrise) | T1 · T15 | S3.1 augmenté |

Trames : ATELIER 4 h = 10 phases, prépa ≤ 1 h, **240 min exacts**. F1/E1 = encadré Passage 1/2 ;
**F2 = passage unique** (encadré « pourquoi une seule séance, cette fois » comme S6-F2). THÉORIE 2 h =
accroche 10 → découverte 40 → application 50 → synthèse 20 = **120 min exacts**.

## Fil rouge professionnel
**Le chantier « arrière-boutique », l'avant-dernier geste** : en S7, la chambre froide a été raccordée
(manos), déshydratée (vide), réglée (consignes), câblée (coffret). Il reste à la CHARGER — mais la charge
réelle exige l'attestation d'aptitude (2e année). Alors on RÉPÈTE le geste à blanc, à l'azote, pour être
prêt. Ordres d'intervention :
- **OI-S8-1** (F1) : simuler la charge au poids du groupe (bouteille sur balance, procédure).
- **OI-S8-2** (F2) : enchaîner vide + charge simulée (répétition générale de la mise en service).
- **OI-S8-3** (E1) : régler seul les consignes du coffret (le commerçant a précisé ses besoins).
T1 : « quel fluide y aura-t-il dans cette machine, et pourquoi celui-là ? ». Jamais de nom propre.
Encadré de fin de séquence : « la vraie charge, avec l'attestation, c'est la 2e année » (teasing honnête).

## Méthodes imposées (VARIER — aucune reprise de S1→S7)
- **S8-F1** : **répétition à blanc chronométrée type "avant-vol"** — la charge au poids se déroule comme
  une check-list d'aviateur : chaque étape (tare de la balance, raccordement, ouverture, pesée du
  transfert simulé, complément, contrôle) est cochée et minutée ; on refait jusqu'à la fluidité du geste.
  L'azote remplace le fluide (masse cible fixée par le professeur). Le sens : le geste de charge se
  MÉMORISE par répétition, comme un enchaînement sûr.
- **S8-F2** : **mini-mise en service intégrale en autonomie** — l'élève enchaîne SEUL les deux gestes
  déjà vus séparément (vide S7-F2 → charge simulée F1) et remplit la FEUILLE DE RELEVÉS DE MISE EN
  SERVICE (version pédagogique). C'est la répétition générale de ce qu'il fera « en vrai » en 2e année.
  Passage unique assumé : c'est l'intégration, pas un nouveau geste.
- **S8-E1** : **le client change d'avis** — nouveau cahier des charges (valeurs fournies par le
  professeur), l'élève doit RE-régler les consignes SANS la fiche guidée de S7-E1 (autonomie) ; on
  vérifie le déclenchement. Différenciation forte : les rapides règlent un 2e organe.
- **S8-T1** : **enquête « carte d'identité des fluides »** — par équipes, chaque équipe reçoit une
  bouteille (photo/étiquette) et remplit la carte du fluide (famille, code couleur, classe de sécurité
  A1/A2L…, PRP d'après le tableau fourni, inflammable ou non) ; mise en commun sous forme de FRISE des
  familles (CFC→HCFC→HFC→HFO→naturels, l'histoire de l'interdiction progressive) ; le professeur
  formalise. ⚠ Le piège R290 (propane) = A3 (inflammable), PAS A2L — à faire trouver (source :
  skill `fluides-nfen378`).

## Documents de référence (à LIRE avant de rédiger — obligatoire)
- Charte : `C:\git\usine-contenu\00-charte\CHARTE-PEDAGOGIQUE-FRIGORX.md`
- Manuel : `C:\git\usine-contenu\02-conception\MANUEL-CONCEPTION.md` (§2 bis, §3, §6)
- **Skill fluides** (pour S8-T1) : charger `fluides-nfen378` (classification NF EN 378 / ASHRAE 34,
  tableau A1/A2L/A2/A3/B1/B2L, piège R290=A3, F-Gaz, PRP, attestation) — c'est LA référence de contrôle
  des valeurs de classification.
- **Modèles de forme (harmonisation 1A stricte — même CSS/en-tête/pied)** :
  - Atelier (triple) : `..\S7 - Pose manomètres HP-BP et tirage au vide\S7-F1 - Pose manomètres HP-BP\`
  - Atelier passage unique : `..\S6 - Épreuve d'étanchéité azote et recherche de fuite\S6-F2 - Recherche de fuite\` (le modèle du passage unique justifié)
  - Théorie (duo) : `..\S7 ...\S7-T1 - Lecture de relevés\`
  - Carnet (duo) : `..\S7 ...\F3 - Carnet de bord\`
  - Dossier de séquence : `..\S7 ...\Dossier de séquence S7.html`

## Codes officiels (libellés EXACTS — vérifiés au référentiel le 19/07)
- **C4.2 « Manipuler le fluide frigorigène et les huiles »** (statut Découverte, SIMULÉ à l'azote —
  l'écrire à chaque occurrence : « manipuler … — geste simulé à l'azote, la manipulation réelle exige
  l'attestation d'aptitude, 2e année ») · C4.1 « Tirer au vide le circuit frigorifique » · C4.7
  « Raccorder les équipements de charge, de mesure et de contrôle » · C4.5 « Mesurer, comparer des
  grandeurs » · C4.6 « Paramétrer ou régler les valeurs de consigne sur organe de régulation ou de
  sécurité » · C3.6 « Câbler, repérer, connecter les liaisons électriques et électroniques » ·
  C1.1 « Compléter, transmettre » · C1.3 « Rendre compte » · C2.4 « Sécuriser l'intervention »
- **T13 « Tirer au vide, charger et contrôler l'installation sous tension »** (SIMULÉ : seul le geste
  à blanc, l'écrire) · **T14 « Régler l'installation en fonctionnement »** (découverte) · T15
  « Renseigner les documents de mise en service » · T11 « Contrôler les circuits hors fonctionnement » · T1
- **S5.2 « Fluides frigorigènes, huiles frigorifiques »** · **S0.1 « Réglementation et impacts
  environnementaux »** (nouveau — abordé par les étiquettes, le PRP, l'interdiction progressive) ·
  S5.5 « Réseaux fluidiques et mécanique des fluides » · S5.6 « Réseaux, matériels électriques et de
  régulation » · S3.1 « Communication technique »

## Sources métier à restituer (fiches : `profs cour Indexee\_MD\<chemin>.md`)
Base = `C:\Users\henni\OneDrive\Bureau\profs cour Indexee\`
- **S8-F1 (charge simulée)** : ⭐⭐ `02_CAP-IFCA\C4-MettreEnService\reglage bp sous azote.docx` (séance
  CAP IFCA n°3 DÉJÀ conçue tout azote, grille de compétences prête) · ⭐ `Mise en service et charge en
  fluide frigorigène projet.docx` (pas-à-pas de la balance : tare, pesée, tableau masse avant/après —
  RÉÉCRIRE la charge R404A en charge azote simulée, masse « fixée par le professeur ») · ⭐ `DOSSIER
  RESSOURCES  charge.docx` (fond : charge liquide/vapeur, complément, la source dit SC 4-7 °C / SH
  5-8 °C → citer « D'après » mais RETENIR les seuils charte SC 5-10 K / SR 4-8 K) · `tp mise sous
  azote PFC.docx` (structure TP azote pur). ⚠ Extraire les photos de balance/bouteille (docx = zip
  `word/media/`).
- **S8-F2 (vide + charge enchaînés)** : ⭐⭐ `02_CAP-IFCA\C4-MettreEnService\Fiche de mise en service et
  identification.docx` (version « PÉDAGOGIQUE » vierge — idéale pour du simulé) · ⭐⭐ `Feuille de relevé
  de mise en service.docx` (récente, Henninot, LPP — feuille de relevés vedette) · `cahier mise en
  service.docx` (fond : by-pass, manodétendeur — FILTRER les passages de récupération/charge réelle) ·
  les documents S7-F2 (tirage au vide) et S8-F1 produits.
- **S8-E1 (réglage consolidation)** : ⭐ `02_CAP-IFCA\C4-MettreEnService\PROCEDURE REGLAGE PRESSOSTAT BP
  SECURITE.docx` + `PROCEDURE REGLAGE PRESSOSTAT HP SECURITE.docx` (procédures pas à pas) · `reglage bp
  sous azote.docx` · les documents S7-E1 PRODUITS (continuité TH1, cahier des charges — « en S7 vous
  avez fait le PREMIER réglage guidé, aujourd'hui vous réglez SEULS »). Ne rien réinventer : c'est une
  consolidation.
- **S8-T1 (fluides découverte)** : ⭐⭐ `05_Ressources-Partagees\Froid-Climatisation\Cours_Fluides_
  Transition_Inerweb.pdf` + `Feuille_Eleve_Fluides_Transition_Inerweb.pdf` (cours 1 h 30 familles/classes
  A1→B2L/F-Gaz/PRP niveau accessible — RESTITUTION PRIORITAIRE) · ⭐⭐ `Fluides-GWP-Glide-Class-V5.pdf`
  (tableau fluide/GWP/glide/classe — la « liste des fluides », en fournir un EXTRAIT en annexe) ·
  ⭐ `02_CAP-IFCA\C4-MettreEnService\RAPPORT PRESSION TEMPÉRATURE GWP.docx` (identifier un fluide par
  P/T sur bouteille — exercice papier sans manip) · `05_Ressources-Partagees\Froid-Climatisation\Les
  fluides frigorigenes.pdf` (INRS ED 969 — familles, à SIMPLIFIER, dense) · la fiche Whart
  `_25-26-bureau\vrac fiep 3\Fiches_Whart\Whart_S2_..._Identification_fluides_TeqCO2.html` (modèle de
  tableau classification — reprendre la CLASSIFICATION/GWP, LAISSER le TeqCO2/fréquence de contrôle à
  la 2e année). ⚠ Classification et PRP : UNIQUEMENT d'après ces tableaux sourcés + le skill
  `fluides-nfen378` (piège R290=A3). Aucune valeur de PRP/classe affirmée de mémoire.
- **Fond prof (distinguo 1re/2e année)** : `02_CAP-IFCA\C4-MettreEnService\repere_fluides_frigorigenes_
  et_attestation_daptitude_.docx` (catégories I-V de l'attestation — le détail des catégories est traité et sourcé en S8-T1) : sert
  UNIQUEMENT à écrire l'encadré prof « pourquoi on simule », pas de distribution élève.
- Symboles : `C:\git\usine-contenu\bibliotheque-symboles\catalogue.json` — `manometres` (vacuomètre
  générique), `pompe_electrique` (pompe à vide générique), `pressostat_*`, `thermostat*`, croix. Pas de
  symbole « balance » ni « bouteille de charge » : utiliser une PHOTO réelle extraite des sources
  (balance, bouteille) — le signaler ; jamais d'image IA. ⚠ Aucune image filigranée e-genieclimatique
  (déjà rejeté 2×) : vérifier avant de copier toute image.
- Extraction : docx = zip `word/media/` ; PDF = pymupdf ; odt = zip `Pictures/`. Formats anciens
  (.doc) non extraits : « à rouvrir ».

## Images du dossier
`images\` (12 déjà copiées depuis S7 : logos, croix, fiche-securite, manometres, pompe_electrique,
pressostat/thermostat, manodétendeur) : extraire des sources la balance électronique de charge, une
bouteille de fluide avec étiquette/code couleur, un extrait du tableau GWP/classe (rendu propre, sourcé),
une planche de bouteilles par famille si disponible. Nommer en clair, citer la source.

## Règles non négociables (rappel — charte/manuel font foi)
1. Corps élève **14 pt vérifié dans le CSS** (professeur/plans 13 pt) ; TDAH/DYS.
2. Grilles **0-4** critères observables + savoir-être + auto-positionnement ; **≤ 4 compétences** ;
   statuts Découverte/Confortement UNIQUEMENT (niveau visé M ≠ statut Évaluation — le préciser).
3. Fil rouge arrière-boutique, OI-S8-1 à 3 ; jamais de nom propre.
4. Sécurité :
   - **Charge simulée azote (F1/F2)** : gaz inerte = ASPHYXIE en confiné (FDS azote, acquis S5/S6),
     bouteille debout/arrimée, détendeur obligatoire, jamais dépasser la pression fixée par le
     professeur, lunettes ; balance = charge lourde (dos, pieds). PROJECTIONS lors des raccordements.
   - **Rappel du distinguo** : on NE manipule PAS de fluide réel (encadré). Gestes interdits : jamais
     de fluide FF, jamais d'oxygène/air comprimé, jamais ouvrir un circuit en charge.
   - **Élec (E1)** : consignation « NF C 18-510 » (avec espaces), mise sous tension par le professeur.
5. Totaux EXACTS : ateliers 240 min · théorie 120 min ; F1/E1 encadré Passage 1/2 ; F2 encadré passage unique.
6. TP élève ≥ 1 500 mots ; encadré « ce qui change depuis S7 » (les gestes de mise en service sont
   posés ; on répète la charge à blanc avant la vraie, en 2e année).
7. ZÉRO invention : AUCUNE masse de charge affirmée (« masse cible fixée par le professeur ») ; AUCUNE
   valeur de PRP/classe hors tableaux sourcés + skill ; seuils charte SC 5-10 K / SR 4-8 K (la source
   « 4-7 / 5-8 °C » citée « D'après » sans être retenue) ; azote 10 bar/24 h + ≈ 200 bar en rappel sourcé.
8. Alternance agir → noter → réfléchir ; variantes consolidation / standard / approfondissement.
9. Tableaux jamais coupés ; pied de page charte daté **19/07/2026** ; sources en fin (+ anciens formats).
10. HTML SEULEMENT (sortie triple après bon à tirer). Annexes pleine page : check-list de charge
    "avant-vol" (F1) ; feuille de relevés de mise en service (F2) ; frise des familles + extrait du
    tableau GWP/classe (T1) ; nouveau cahier des charges (E1).

## Rangement (créer exactement ces dossiers)
`C:\Users\henni\OneDrive\Bureau\26-27\Sequences-1A-CAP-IFCA\S8 - Simulation de charge au poids et lecture de relevés\`
- `Dossier de séquence S8.html` + `_CADRAGE-S8.md` (ce fichier) + `_ETAT.md` + `images\`
- `S8-F1 - Simulation de charge au poids\` → Plan de séance.html · Document élève - TP.html · Document professeur - corrigé.html
- `S8-F2 - Tirage au vide et charge enchaînés\` → idem
- `S8-E1 - Réglage de consignes guidé\` → idem
- `S8-T1 - Fluides frigorigènes - familles et étiquettes\` → Document élève.html · Document professeur.html
- `F3 - Carnet de bord\` → Document élève.html · Document professeur.html

## Points en attente (reporter dans `_ETAT.md`)
Arbitrage calendrier F2 passage unique (à valider) · masse cible de charge simulée (fixée par le
professeur) · balance(s) de charge et bouteilles d'azote disponibles (combien de postes F1/F2) ·
nouveau cahier des charges E1 (valeurs à fournir par Franck) · bouteilles/étiquettes réelles pour T1
(lesquelles à l'atelier : R32 ? R290 ? R134a ?) · matériel pédagogique de simulation (quelle « machine
école » sert de support) · dates réelles sem. 26-28 · copyright · anciens formats à rouvrir
(`réglage thermostat.doc`, `tableau de valeur Eleve.doc`).
