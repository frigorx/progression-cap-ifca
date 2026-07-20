# CADRAGE — Séquence S9 « Diagnostic frigorifique simple + É4 » (1A CAP IFCA)

*Rédigé le 19/07/2026 par le chef d'orchestre (usine FrigorX). Maître : `26-27\_PROGRESSION-1A-CODEE.md`
(EN ATTENTE bon à tirer). **S9 = LA DERNIÈRE séquence de la 1re année**, P4 semaines 29-36 (8 semaines).
Elle BOUCLE l'année : diagnostiquer, remplacer un composant, tenir le coffret en autonomie, et rendre
compte — puis **É4** (la 4e et **dernière** évaluation sommative, sem. 32) et la **remédiation post-É4 +
bilan de 1re année** (sem. 33-36). S9 porte donc À LA FOIS le module d'évaluation ET un module de clôture
NOUVEAU (**S9-T2**, ajouté au maître — à valider par Franck, comme les T0 des séquences précédentes).*

## ⚠⚠ PRINCIPE FONDATEUR DE LA SÉQUENCE — à verrouiller chez TOUS les rédacteurs
**En 1re année, on DIAGNOSTIQUE PAR LA MESURE et on REMPLACE un composant SANS manipuler de fluide
frigorigène réel.** C'est le prolongement direct du principe de S8 (charge simulée à l'azote).
1. **Diagnostic = observer → mesurer → comparer à une cible → conclure.** L'élève lit les symptômes
   (bruit, givre, température qui ne descend pas), relève **HP / BP aux manomètres**, les **températures**
   (thermomètre de contact), le **courant** (pince) ; il calcule la **surchauffe (SC)** et le
   **sous-refroidissement (SR)** et les **compare aux valeurs cibles** ; il formule une **hypothèse de
   panne SIMPLE**. Support = **machine PÉDAGOGIQUE en marche** (banc, machine école).
2. **Remplacement de composant = SANS manipulation de fluide.** L'élève ne remplace QUE des organes qui
   n'exigent PAS de toucher au fluide : **composants électriques** (pressostat, thermostat, relais,
   condensateur, ventilateur, klixon), **mécaniques/externes** (fixation, bulbe, isolant), OU un organe
   sur un **circuit préalablement inerté à l'azote par le professeur** (le professeur a récupéré le fluide
   EN AMONT — la récupération réelle, c'est la 2e année). **L'élève ne récupère JAMAIS de fluide, n'ouvre
   JAMAIS un circuit en charge, ne braise/ne coupe JAMAIS un circuit contenant du fluide.**
3. **Niveau CAP (Bloom 1→3).** Panne **SIMPLE et UNIVOQUE** : un seul défaut à la fois, cas
   ARCHI-classiques. Arbre de diagnostic à **2-3 branches** maximum. **JAMAIS** d'analyse multi-cause,
   d'optimisation, de dimensionnement, de bilan enthalpique.
4. **La manipulation réelle du fluide, la récupération et le diagnostic sur charge réelle = 2e année**
   (S10 diagnostic approfondi, S13-S14 récupération/charge, attestation d'aptitude). Encadré prof
   « pourquoi, en 1re année, on ne touche pas au fluide » (teasing honnête vers la 2e année).
5. ⚠ **Convention 1A** : surchauffe = **SC**, sous-refroidissement = **SR** (jamais SH). Seuils
   AUTORISÉS **SC 5-10 K · SR 4-8 K**. **Aucune autre valeur affirmée sans source** (« selon la machine /
   la notice constructeur, à faire valider par le professeur »).
6. ⚠ **L'arbre de diagnostic symptôme→HP/BP→hypothèse est un ANGLE MORT de la base** (confirmé à la
   restitution : aucun arbre décisionnel prêt à l'emploi). Il est **construit ici**, à partir des
   ressources de fond citées, en restant SIMPLE. **Ne retenir que les corrélations panne↔symptôme
   ARCHI-classiques et univoques** (voir tableau de référence prudent au § Codes/Sources). Aucune
   corrélation inventée : en cas de doute → « à confirmer selon la machine ».

## Contexte
- Classe : **1re année CAP IFCA** (cohorte 2026-2028), LP Privé Jacques Raynaud — Campus ÉQUATIO, prof. F. Henninot.
- Semaines **29-36**, période **P4** (juin 2027, dates exactes à caler). **8 semaines = 80 h** (10 h/sem.),
  mais découpées en **deux temps** :
  - **Semaines 29-32 = les apprentissages + l'évaluation** (modules F1/F2/E1/T1 puis É4 sem. 32).
  - **Semaines 33-36 = la CLÔTURE** (remédiation post-É4, rattrapages, tutorat, bilan d'année = module S9-T2 ;
    **PFMP2 possible ici** si Franck la place en fin juin — arbitrage n° 1 du socle, non tranché).
- Organisation : 4 h froid + 4 h élec (demi-groupes en rotation) + 2 h théorie (classe entière).
- **Découpage hebdomadaire indicatif** (rotation demi-groupes A/B exacte à caler par Franck — point ouvert) :

  | Sem. | Froid (4 h) | Élec (4 h) | Théorie (2 h) |
  |---|---|---|---|
  | 29 | S9-F1 diagnostic (passage 1) | S9-E1 coffret (passage 1) | S9-T1 (démarche + arbre) |
  | 30 | S9-F1 diagnostic (passage 2) | S9-E1 coffret (passage 2) | S9-T1 (denrées + enceintes) |
  | 31 | S9-F2 remplacement (passage 1) | S9-E1 dépannage autonomie (passage « + ») | Préparation É4 (relevés→conclusion) |
  | **32** | **É4 — poste froid** | **É4 — poste élec** | **É4 — poste théorie (écrit 2 h)** |
  | 33 | S9-F2 remplacement (passage 2) + reprise | reprise ciblée élec | Correction collective É4 + lancement bilan |
  | 34-36 | **S9-T2 : postes de reprise, rattrapages, tutorat, bilan de 1re année** (PFMP2 si placée ici) | | |

- **Prérequis réels (S1→S8, à réactiver au fil de l'eau)** : lecture P/T et calcul SC/SR (S4, S5-T2, S7-T1),
  pose manomètres HP/BP (S7-F1), tirage au vide réel (S7-F2), premier réglage de consigne (S7-E1),
  coffret clim câblé (S7-E2, S8-E1), charge simulée à l'azote (S8-F1/F2), fluides frigorigènes découverte
  (S8-T1), mesures électriques (multimètre/pince, S1→S6), câblage industriel (S5-E1/E2, S6-E1),
  carnet de bord « exploitable par un tiers » (F3 toute l'année). C5.1 (remplacer un composant) est une
  **PREMIÈRE rencontre** (Découverte).
- ⚠ **Ne pas confondre le NIVEAU spiralaire VISÉ et le STATUT dans l'activité.** Le maître écrit des
  niveaux visés élevés (C4.5 **V**, C3.6 **V**, C1.3 **M**) : ce sont des **niveaux atteints en fin de
  parcours**, PAS des statuts d'activité. Dans les **modules** S9-F1/F2/E1/T1/F3, le statut est
  **Confortement** (ou **Découverte** pour C5.1 en S9-F1) — **rien n'est remonté**. La **remontée officielle
  École Directe** se fait UNIQUEMENT à **É4** (statut **Évaluation** : C4.1 · C4.5 · C4.7 · C5.1).

## ⭐ CLÔTURE & REMÉDIATION POST-É4 — le dispositif (module S9-T2, sem. 33-36)
É4 est la **DERNIÈRE** évaluation de la 1re année : sa remédiation ne peut pas être reportée en tête de la
séquence suivante (il n'y en a pas). Elle se fait donc **en clôture de S9**, sur les semaines 33-36, dans un
module **NOUVEAU S9-T2** cloné sur la mécanique rodée des T0 (S3-T2 / S5-T0 / S7-T0), mais élargi à la
**fin d'année**. Dispositif à **3 volets** :
1. **Postes de reprise par compétence d'É4** (groupes de besoin tournants) : poste DIAGNOSTIC (C4.5 —
   relire des relevés, refaire un mini-diagnostic guidé), poste MISE EN SERVICE (C4.1/C4.7 — reprendre
   vide + pose manos), poste REMPLACEMENT (C5.1 — refaire une dépose/repose d'organe hors fluide), poste
   COFFRET (C3.6/C3.7 — remettre un coffret en service). **Élève positionné 1-2 à É4 = REPRISE** ;
   **élève positionné 3-4 = TUTEUR pair** (fiche tuteur) ou **défi transfert**. Aucun résultat fictif,
   aucun prénom ; tableaux à remplir par le professeur.
2. **Bilan de 1re année** (le temps fort de la clôture) : chaque élève fait le **bilan réflexif** de son
   année — **auto-positionnement I/C/M/V** sur les compétences travaillées (C2.4, C3.4, C3.6, C3.7, C3.9,
   C4.1, C4.5, C4.6, C4.7, C5.1, C1.1, C1.3), ce qu'il sait faire seul, ses **2-3 objectifs pour la
   2e année**. Passerelle explicite vers la 2A (« l'an prochain, tu manipuleras le vrai fluide, avec
   l'attestation »).
3. **Rattrapages** (élèves absents/en difficulté sur un geste-clé de l'année) : créneaux fléchés, le
   professeur rejoue le geste manquant. Le module reste **FORMATIF — rien n'est remonté**.

## Découpage en modules

| Module | Type | Durée | Sem. | Contenu | Compétences (statut) | Tâches | Savoirs travaillés |
|---|---|---|---|---|---|---|---|
| S9-F1 | Atelier | 4 h ×2 | 29-30 | **Diagnostic guidé sur machine** : symptôme → relevés HP/BP + T° → calcul SC/SR → comparaison aux cibles → hypothèse de panne simple (l'arbre). Le « frigoriste-détective ». | **C4.5 Confortement** (visé V) · **C5.1 Découverte** (1re rencontre, sans fluide) · C3.7 Confortement | T16 · T14 | S5.1 augmenté · S4.2 nouveau |
| S9-F2 | Atelier | 4 h ×2 | 31,33 | **Remplacement d'un composant simple + remise en état** : dépose/repose d'un organe HORS FLUIDE (pressostat, filtre sur circuit inerté azote, ventilateur…), gamme + auto-contrôle qualité, remise en service, compte rendu. | **C5.1 Confortement** · C3.4 Confortement (visé M) · C3.7 Confortement | T16 · T1 | S5.1 augmenté |
| S9-E1 | Atelier | 4 h ×2+ | 29-31 | **Coffret clim en autonomie / dépannage électrique** : remettre en service un coffret présentant un défaut simple (fil débranché, organe HS simulé par le prof), SANS fiche guidée, à partir du schéma. | **C3.6 Confortement** (visé V) · **C3.7 Confortement** (visé M) | T16 · T11 | S5.6 augmenté |
| S9-T1 | Théorie | 2 h | 29-30 | **La démarche de diagnostic (arbre simple) + le froid et les denrées** : co-construire l'arbre symptôme→hypothèse ; conservation des denrées, chaîne du froid, enceintes isothermes positives/négatives. | appui C4.5 (théorique, non remonté) | — | S4.2 augmenté · **S5.7 nouveau** · S5.1 augmenté |
| F3 | Fil de l'eau | 2 h continu | 29-36 | Carnet de bord + **compte rendu d'intervention type** (le carnet devient dossier de maintenance : constat, mesures, diagnostic, action, remise en état). | **C1.3 Confortement** (visé M) · **C1.1 Confortement** (visé C) | T1 · T16 | S3.1 augmenté |
| **É4** | Sommative | 2-3 h/poste | **32** | **3 postes** : FROID (tirer au vide + poser manos + mini-diagnostic + remplacer un composant désigné) · ÉLEC (remettre le coffret en service) · THÉORIE (écrit : relevés → conclusion de diagnostic + denrées). | **C4.1 · C4.5 · C4.7 · C5.1 Évaluation** (4 max, remontée École Directe) + **C2.4 savoir-être** pesé | T13 · T16 · T1 | S5.1 · S5.5 |
| S9-T2 | Clôture/remédiation | sem. 33-36 | 33-36 | **Retour d'É4 + remédiation ciblée + BILAN de 1re année** (postes de reprise, tutorat, auto-positionnement I/C/M/V, objectifs 2A, rattrapages). FORMATIF — rien remonté. | reprise C4.1/C4.5/C4.7/C5.1/C3.6/C3.7 (formatif) | T16 | rappel transversal |

Trames : **ATELIER 4 h = 10 phases, prépa ≤ 1 h, 240 min EXACTS** ; F1/E1 = encadré Passage 1/2 ;
F2 = Passage 1 (sem. 31) / Passage 2 (sem. 33, après É4 = intégration + reprise). **THÉORIE 2 h =
accroche 10 → découverte 40 → application 50 → synthèse 20 = 120 min EXACTS.** F3 = fiche-carnet à
rubriques. **É4** = format É3 (sujet élève par postes/feuilles + corrigé/grille 0-4 + plan de passation).
**S9-T2** = format dispositif duo (doc élève + doc prof), déroulé minuté par volet.

## Fil rouge professionnel
**Le SAV — la tournée de dépannage, le bouquet final de l'année.** Toute l'année, l'apprenti a INSTALLÉ
(cuivre, brasage), PROUVÉ (étanchéité azote), MIS EN SERVICE (vide, manos, réglages, charge à blanc). Cette
dernière séquence le fait passer côté **MAINTENANCE** : le client rappelle — « ça ne fait plus assez de
froid », « ça givre », « le disjoncteur a sauté ». L'apprenti **observe, mesure, conclut, remplace le
composant fautif, remet en état et REND COMPTE**. Ordres d'intervention (client générique, jamais de nom propre) :
- **OI-S9-1** (F1) : « L'armoire positive ne descend plus en température. Diagnostiquez. » (démarche guidée).
- **OI-S9-2** (F2) : « Remplacez le composant identifié, remettez en état, rédigez le compte rendu. »
- **OI-S9-3** (E1) : « Le coffret du climatiseur ne démarre plus / disjoncte. Remettez-le en service. » (autonomie).
- **OI-S9-4** (É4) : intervention complète de mise en service + mini-diagnostic (évaluation individuelle).
Encadré de fin de séquence : « La vraie manipulation du fluide et la recherche de panne approfondie,
c'est la 2e année, avec l'attestation d'aptitude » (teasing honnête, passerelle 2A).

## Méthodes imposées (VARIER — AUCUNE reprise de S1→S8)
Méthodes déjà employées en 1A à NE PAS reprendre : répétition à blanc chronométrée « avant-vol » (S8-F1),
enquête « carte d'identité » (S8-T1), jeux de rôles opérateur/contrôleur (S5-F2), jigsaw (S5-E2), parcours
à brevets (S5-F1), cartes-étapes à remettre en ordre (S7-F1), chef d'équipe tournant (S7-E2), contrat de
réussite (S6-E1), étude de documents authentiques (S6-T1), groupes de besoin tournants (T0), « le client
change d'avis » (S8-E1).
- **S9-F1** : **la démarche d'enquête « le frigoriste-détective »** — situation-problème de dépannage :
  le client décrit UN symptôme, l'élève mène l'enquête méthodique (relever les indices → mesurer HP/BP/T°
  → calculer SC/SR → comparer aux cibles → **désigner le coupable parmi une courte liste de suspects**).
  On formalise **l'arbre de diagnostic APRÈS** la première enquête vécue (« planter la notion » :
  observer → nommer → expliciter). Le professeur pré-règle une panne simple et univoque par poste.
- **S9-F2** : **la gamme opératoire + auto-contrôle qualité, posture « je signe mon travail »** — l'élève
  reçoit une **gamme de dépose/repose** qu'il doit respecter ET **auto-contrôler étape par étape**
  (check-list qualité : propreté, serrage, étanchéité à l'eau savonneuse pour un raccord hors fluide,
  contrôle de remise en service). La remise en état se **PROUVE**. Compte rendu obligatoire.
- **S9-E1** : **le « dépannage minute » en autonomie complète** — le coffret présente un défaut électrique
  simple posé par le professeur ; l'élève diagnostique et remet en service **SANS fiche guidée**, en
  s'appuyant sur le **schéma** et sa consignation. Différenciation forte : les rapides traitent un
  2e défaut, deviennent tuteurs.
- **S9-T1** : **construction collective d'un arbre de décision + étude de cas « la bonne température pour
  la bonne denrée »** — 1re partie : les élèves **co-construisent** l'arbre de diagnostic simple à partir
  des cas vécus en F1 (carte mentale collective, le prof formalise) ; 2e partie : **étude de cas
  conservation** — associer denrée ↔ température ↔ enceinte **positive/négative**, la chaîne du froid,
  pourquoi le froid conserve (S4.2, S5.7).
- **S9-T2** : **groupes de besoin + tutorat par pairs + entretien-bilan réflexif** — postes de reprise
  sur les compétences d'É4, tuteurs pairs (fiche tuteur), et **bilan individuel de 1re année**
  (auto-positionnement I/C/M/V, objectifs 2A).

## Documents de référence (à LIRE avant de rédiger — obligatoire)
- Charte : `C:\git\usine-contenu\00-charte\CHARTE-PEDAGOGIQUE-FRIGORX.md`
- Manuel : `C:\git\usine-contenu\02-conception\MANUEL-CONCEPTION.md` (§2 bis, §3, §4, §6)
- **Modèles de forme (harmonisation 1A STRICTE — même CSS / en-tête / pied que S7-S8)** :
  - Atelier (triple) : `..\S8 - Simulation de charge au poids et lecture de relevés\S8-F1 - Simulation de charge au poids\`
    (ou `..\S7 ...\S7-F1 - Pose manomètres HP-BP\`)
  - Théorie (duo) : `..\S8 ...\S8-T1 - Fluides frigorigènes - familles et étiquettes\`
  - Carnet (duo) : `..\S8 ...\F3 - Carnet de bord\`
  - **Remédiation/clôture (duo — LE modèle du dispositif)** : `..\S7 - Pose manomètres HP-BP et tirage au vide\S7-T0 - Retour d'É3 et remédiation ciblée\`
  - **Évaluation (trio)** : `..\S6 - Épreuve d'étanchéité azote et recherche de fuite\Évaluation sommative É3 S5-S6 (semaine 21)\`
  - Dossier de séquence : `..\S8 ...\Dossier de séquence S8.html`

## Codes officiels (libellés EXACTS — vérifiés au référentiel `CAP_IFCA.json` le 19/07/2026)
**Compétences :**
- **C4.1** « Tirer au vide le circuit frigorifique » — Évaluation (É4)
- **C4.5** « Mesurer, comparer des grandeurs » — Confortement (modules) / Évaluation (É4) — le PIVOT du diagnostic
- **C4.7** « Raccorder les équipements de charge, de mesure et de contrôle » — Évaluation (É4)
- **C5.1** « Remplacer des composants de l'installation » — Découverte (S9-F1) → Confortement (S9-F2) →
  Évaluation (É4). ⚠ **À chaque occurrence** : « remplacer un composant — **sans manipulation de fluide** :
  organe électrique/mécanique ou circuit inerté à l'azote par le professeur ».
- **C3.4** « Façonner, raccorder, assembler, isoler les circuits (frigorifique, hydraulique, aéraulique) » — Confortement
- **C3.6** « Câbler, repérer, connecter les liaisons électriques et électroniques » — Confortement
- **C3.7** « Contrôler la mise en œuvre des équipements électriques et fluidiques » — Confortement
- **C1.1** « Compléter, transmettre » · **C1.3** « Rendre compte » — Confortement (F3, compte rendu d'intervention)
- **C2.4** « Sécuriser l'intervention » — savoir-être, fil rouge, pesé explicitement à É4

**Tâches :**
- **T16** « Assurer l'entretien d'une installation » (le cœur métier de S9)
- **T13** « Tirer au vide, charger et contrôler l'installation sous tension » (É4, geste de mise en service)
- **T14** « Régler l'installation en fonctionnement »
- **T1** « Renseigner et transmettre des documents de suivi d'intervention » (compte rendu, F3)
- T11 « Contrôler les circuits hors fonctionnement » (E1)

**Savoirs :**
- **S4.2** « Action du froid sur la conservation des denrées » (cœur de S9-T1, appui du diagnostic « à quoi sert le froid »)
- **S5.7** « Enceintes isothermes positives et négatives » (**nouveau** — chambre positive/négative, S9-T1)
- **S5.1** « Systèmes thermodynamiques à détente directe » (le cycle, support du raisonnement HP/BP/SC/SR)
- **S5.5** « Réseaux fluidiques et mécanique des fluides » · **S5.6** « Réseaux, matériels électriques et de régulation »
- **S3.1** « Communication technique » (compte rendu, schéma)

**⚠ Tableau de référence PRUDENT des corrélations panne↔symptôme (S9-F1/T1) — cas ARCHI-classiques,
univoques, niveau CAP ; toute autre corrélation = « à confirmer selon la machine » :**
- **Manque de charge / fuite** → BP basse, HP basse, **SC élevée** (> 10 K), bulles au voyant, givre à
  l'évaporateur, température qui ne descend pas.
- **Excès de charge** → HP élevée, **SR élevé** (> 8 K), intensité compresseur élevée.
- **Encrassement du condenseur / défaut de ventilation condenseur** → HP élevée, SR normal/élevé,
  condenseur chaud/sale.
- **Évaporateur givré / filtre à air colmaté / défaut ventilation évaporateur** → BP basse, SC élevée,
  débit d'air faible.
- **Détendeur trop fermé** → BP basse, SC élevée ; **détendeur trop ouvert** → BP haute, SC faible (< 5 K),
  risque de coup de liquide.
- **Défaut électrique** (ne démarre pas / disjoncte) → contrôle tension, continuité, condensateur,
  pressostats de sécurité, klixon (poste coffret).
Ces corrélations sont à FAIRE TROUVER par la mesure, pas à réciter. Elles sont sourçables par les
ressources de fond ci-dessous ; toute valeur chiffrée hors seuils charte SC 5-10 K / SR 4-8 K = « selon
la machine / la notice, à faire valider ».

## Sources métier à restituer (RESTITUTION D'ABORD — base = `C:\Users\henni\OneDrive\Bureau\profs cour Indexee\`)
**S9-F1 (diagnostic)** :
- ⭐⭐ **2A S10 Séance 1 « Diagnostic de la machine et état des lieux »** :
  `..\..\Sequences-2A-CAP-IFCA\S10 - Diagnostiquer, mettre en place, façonner le cuivre\Séance 1 - Diagnostic de la machine et état des lieux\` — trame de diagnostic/constat/croquis (à SIMPLIFIER pour la 1A ; c'est du diagnostic « état des lieux », **compléter par l'arbre symptôme→panne**).
- ⭐ `02_CAP-IFCA\C5-Maintenir\Diagnostic de pannes.pdf` (le plus proche d'un arbre constat→cause — matière première de l'arbre).
- ⭐ `02_CAP-IFCA\C5-Maintenir\analyse pratique entretien diag.docx` · `_Archives\Themes\Collegues-Partages\Dépanage des installations 2.pdf`.
- Raisonnement SC/SR : `02_CAP-IFCA\C4-MettreEnService\LA SURCHAUFFE et le SR.docx` · `Calcul sous refroidissement Prof.docx` · kit HTML `25 26\cours 25_26\sr sch new coplet htlm\` · TP `25 26\vrac fiep 3\Package_EP3_CAP_IFCA_final\TP2B_Mesures_PT_surchauffe_sous_refroidissement`.
- ⚠ `02_CAP-IFCA\C5-Maintenir\panne1.bin … panne20.bin` = binaires ILLISIBLES (ancien logiciel) : **NE PAS compter dessus**.

**S9-F2 (remplacement composant, sans fluide)** :
- ⭐⭐ `03_BAC-MFER\S2-Systemes\Activité 241 Remplacement d'un filtre déshydrateur.docx` (le plus ciblé — **réécrire sur circuit inerté azote, sans récupération de fluide**).
- ⭐ `25 26\vrac fiep 3\Package_EP3_CAP_IFCA_final\S2_04-05\TP1B_Remplacement_reglage_pressostat` + `TP1C_Depose_etancheite_remise_service`.
- Appui composants : détendeur `02_CAP-IFCA\S2-Systemes\Activité n° 25 le detendeur .docx` · filtre `Activité 15 Deshydrateur.docx` · pressostat `05_Ressources-Partagees\Pressostats-Manometres\TP_Complet_Manometres_Pressostat_BP_CAP_IFCA.docx` + AFPA `_Archives\Themes\Collegues-Partages\Pressostat.pdf`.
- `02_CAP-IFCA\C3-Realiser\TP59 RACCORDEMENT D'UN DETENDEUR THERMOSTATIQUE.doc` (geste de raccordement).

**S9-E1 (coffret autonomie / dépannage élec)** :
- ⭐⭐ **2A S12 Séance 1 « Câblage de l'armoire électrique »** : `..\..\Sequences-2A-CAP-IFCA\S12 - Câbler, prouver l'étanchéité, tirer au vide\Séance 1 - Câblage de l'armoire électrique\` (charte à jour — pour la forme du schéma coffret).
- `02_CAP-IFCA\C3-Realiser\Activité n°1 cablage schémas de commande.docx` · `Activité n°3 cablage schémas de puissance.docx`.
- `02_CAP-IFCA\C1-Communiquer\schemas_cablage_coffrets_MR12_MR15.pdf` · `_Archives\Themes\Collegues-Partages\Coffret Elec.pdf`.
- Continuité : les documents **S7-E2 (coffret clim) et S8-E1 (réglage consignes)** PRODUITS — S9-E1 est la mise en autonomie/dépannage de ce qui a été câblé.

**F3 (compte rendu d'intervention)** :
- ⭐⭐ `02_CAP-IFCA\C5-Maintenir\rapport-dintervention.docx` (modèle) · `02_CAP-IFCA\C4-MettreEnService\fiche d'intervention clim froid.docx` · `fiche d'intervention.docx` (vierge).
- ⭐ `25 26\EP3_Henninot\13_TP_Intervention_v3_charte.docx` (TP intervention charté).
- Modèle carnet : `..\S8 ...\F3 - Carnet de bord\`.

**S9-T1 (démarche + denrées + enceintes)** :
- ⭐⭐ Conservation : `_Archives\Themes\Froid-Frigorifique\Conditions de conservation des denrées ... .html` · `La chaine du froid ... .html` · `_Archives\Non-classe\Divers\Choix-des-produits-alimentaires.pdf`.
- Enceintes isothermes pos/nég (S5.7, **thin** — construire prudemment) : `03_BAC-MFER\S2-Systemes\Chambre froide.pdf` · `02_CAP-IFCA\C4-MettreEnService\Mise en service d'une chambre froide.docx` · `02_CAP-IFCA\C5-Maintenir\INTERVENTIONS CHAMBRES FROIDES N1.docx`.
- Arbre de diagnostic : synthèse des sources F1 (aucun arbre prêt à l'emploi — **construit ici**).

**Symboles techniques** : `C:\git\usine-contenu\bibliotheque-symboles\catalogue.json` — manomètres, pressostat_*, thermostat*, pompe_electrique, croix du frigoriste, symboles élec (contacteurs, relais). Composants à remplacer (filtre, détendeur, ventilateur) : **photo réelle extraite des sources** si pas de symbole (le signaler, jamais d'image IA). ⚠ Aucune image filigranée e-genieclimatique (rejetée 2×).
- Extraction : docx = zip `word/media/` ; PDF = pymupdf ; formats .doc anciens non extraits = « à rouvrir ».

## Images du dossier
`images\` : recopier depuis S8 le fonds commun (logos, croix, fiche-securite, manomètres, pompe, pressostat,
thermostat, coffret/symboles élec). Extraire des sources : une **machine pédagogique de diagnostic** (banc,
face avant manos), les **composants à remplacer** (filtre déshydrateur, détendeur, pressostat, ventilateur,
condensateur), un **schéma de coffret clim**, un **tableau denrée/température** (conservation), une planche
« chambre positive vs négative ». L'**arbre de diagnostic** est un **SVG construit** (boîtes/branches, symboles
biblio). Nommer en clair, citer la source.

## Règles non négociables (rappel — charte/manuel font foi)
1. Corps élève **14 pt vérifié dans le CSS** (professeur/plans 13 pt) ; TDAH/DYS (puces, gras, jamais justifié).
2. Grilles **0-4** critères observables + ligne savoir-être + auto-positionnement ; **≤ 4 compétences** ;
   statuts **Découverte/Confortement/Évaluation** UNIQUEMENT (niveau visé V/M ≠ statut — le préciser).
3. Fil rouge SAV/maintenance, OI-S9-1 à 4 ; **jamais de nom propre**, client générique.
4. **Sécurité** (fil rouge C2.4) :
   - **Machine sous tension** (diagnostic F1) : la mise/remise sous tension est faite par le PROFESSEUR ;
     consignation **NF C 18-510** avant toute intervention électrique ; parties chaudes (compresseur,
     refoulement) et tournantes (ventilateurs) = risque brûlure/coupure.
   - **Remplacement (F2)** : circuit **inerté à l'azote par le professeur** (jamais de fluide, jamais
     d'ouverture d'un circuit en charge) ; **gestes interdits** : jamais récupérer de fluide, jamais
     braser/couper un circuit contenant du fluide, jamais d'oxygène/air comprimé.
   - **Coffret (E1)** : consignation NF C 18-510 (VAT), mise sous tension par le professeur pour l'essai.
   - **Procédure d'urgence** : couper (arrêt d'urgence), alerter, ne pas déplacer un électrisé ; trousse
     et arrêt d'urgence localisés au rituel d'entrée.
5. Totaux EXACTS : ateliers **240 min** · théorie **120 min** ; F1/E1 encadré Passage 1/2 ; F2 Passage 1/2.
6. TP élève **≥ 1 500 mots**, autoportant ; encadré « ce qui change depuis S8 » (on passe de la mise en
   service à la MAINTENANCE : on cherche la panne, on remplace, on rend compte) ; phase OBSERVER avant procédure.
7. **ZÉRO invention** : aucune corrélation panne↔symptôme hors des cas archi-classiques listés ci-dessus ;
   seuils charte **SC 5-10 K / SR 4-8 K** ; toute autre valeur = « selon la machine/notice, à faire valider » ;
   aucune masse/charge de fluide ; C5.1 TOUJOURS « sans manipulation de fluide ».
8. Alternance **agir → noter → réfléchir** ; variantes consolidation / standard / approfondissement + tutorat.
9. Tableaux jamais coupés (`page-break-inside: avoid`) ; **pied de page charte daté 19/07/2026** ; sources
   en fin (« D'après : … » + anciens formats à rouvrir).
10. **HTML SEULEMENT** (sortie triple PDF+docx et RAG **APRÈS bon à tirer** de Franck, jamais avant).
    Annexes pleine page : **arbre de diagnostic** (F1/T1) ; **gamme de dépose/repose + check-list qualité**
    (F2) ; **schéma du coffret** (E1) ; **feuille de compte rendu d'intervention** vierge (F3) ; **tableau
    de conservation denrée/température** (T1) ; **fiche bilan de 1re année** (S9-T2).

## Rangement (créer EXACTEMENT ces dossiers/fichiers)
`C:\Users\henni\OneDrive\Bureau\26-27\Sequences-1A-CAP-IFCA\S9 - Diagnostic frigorifique simple\`
- `Dossier de séquence S9.html` + `_CADRAGE-S9.md` (ce fichier) + `_ETAT.md` + `images\`
- `S9-F1 - Diagnostic guidé sur machine\` → `Plan de séance.html` · `Document élève - TP.html` · `Document professeur - corrigé.html`
- `S9-F2 - Remplacement d'un composant simple\` → idem (3 fichiers)
- `S9-E1 - Coffret clim en autonomie\` → idem (3 fichiers)
- `S9-T1 - Démarche de diagnostic et conservation des denrées\` → `Document élève.html` · `Document professeur.html`
- `F3 - Carnet de bord\` → `Document élève.html` · `Document professeur.html`
- `Évaluation sommative É4 S7-S9 (semaine 32)\` → `Document élève - sujet.html` · `Document professeur - corrigé et grille.html` · `Plan de passation.html`
- `S9-T2 - Retour d'É4, remédiation et bilan de 1re année\` → `Document élève.html` · `Document professeur.html`

## Points en attente (reporter dans `_ETAT.md`)
- **Module S9-T2 (clôture + remédiation post-É4 + bilan d'année) AJOUTÉ au maître** → à valider par Franck
  (comme S3-T2 / S5-T0 / S7-T0 en leur temps).
- **PFMP2** (arbitrage n° 1 du socle, non tranché) : si placée fin juin, elle occupe une partie des
  semaines 33-36 → S9-T2 s'ajuste (créneaux, pas le fond).
- Nommage de l'éval **« É4 S7-S9 (semaine 32) »** à confirmer (couvre C4.1/C4.5/C4.7 travaillées S7-S8 + C5.1 nouvelle S9).
- **Matériel réel** : machine(s) pédagogique(s) de diagnostic (combien de postes, quel type), composants
  de rechange disponibles (filtres, détendeurs, pressostats, ventilateurs, condensateurs), défauts
  électriques simulables sur le coffret ; **qui inerte le circuit à l'azote** pour F2 (le professeur).
- **Arbre de diagnostic** = angle mort de la base → construit ex nihilo : **corrélations panne↔symptôme à
  faire valider par Franck** (ne retenir que les cas archi-classiques).
- **Enceintes isothermes S5.7** : peu de source dédiée → construit à partir des docs « chambre froide », à valider.
- Dates réelles sem. 29-36 · copyright définitif · anciens formats .doc à rouvrir.
