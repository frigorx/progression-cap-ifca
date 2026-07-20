# CADRAGE MODULAIRE — Séquence S14 « Charger le fluide, mettre en service, tracer (CERFA) »

*Rédigé le 09/07/2026 au **format modulaire** (modèle validé Franck 05/07 : des **modules indépendants ≤ 4 h**,
calés sur la carte de progression — PAS de « séance 8 h » par défaut). Ce document pilote la production.*

**Sources autoritaires :**
- Progression annuelle : `OneDrive\Bureau\26-27\Dossier_Progression_2A_CAP_IFCA.docx` (§5 tableau spiralaire,
  §6 évaluations sommatives, carte hebdo semaines 15-17).
- Référentiel officiel (codes/libellés EXACTS) : `C:\git\HAL-v3\donnees\referentiels\peda\CAP_IFCA.json`.
- Bibliothèque de la progression : `..\BIBLIOTHEQUE.md` rubrique **S13-S14 (P7)** — restitution d'abord.
- Matières prêtes de Franck : `Desktop\prpa propg\archive\S13-Prepa-EP3\` (feuille de relevé MES, réglage BP)
  et `\S14-CCF-EP2-Cablage\` (⚠️ mal nommé : ces docx sont du **câblage** = S12, PAS S14 — ne pas confondre).

## Place de S14 dans la progression (autoritaire, carte hebdo)

| Sem. | Dates | Chantier FROID/MES | Techno | Co-Maths | Co-Français | Comp. | Tâches | Savoirs |
|---|---|---|---|---|---|---|---|---|
| **15** | 02-06/02 | A5 · **Chargement gaz + mise en service** | CERFA (intro) | Puissance frigo (abaque) | Remplir le CERFA · F4 | C4.2, C4.4 | T2, T13, T15 | S0.1, S7.1 |
| **16** | 23-27/02 | A5 · **Chargement gaz + réglages SC/SR** | Le CERFA | Puissance frigo (volume) | Notice CERFA · 🎬 MES | C4.2, C4.5 | T2, T13, T15 | S0.1, S7.1 |
| **17** | 02-06/03 | **ÉVAL SOMMATIVE S13-S14** (≥ 1 h) | Obligations régl. | Puissance frigo | Documents régl. | C4.2, C4.5, C4.7 | T2, T13, T15 | S0.1, S7.1 |

**Ce que S14 N'EST PAS** (déjà traité, ne pas dupliquer) :
- Le **câblage** de l'armoire → **S12** (« Câbler, prouver l'étanchéité, tirer au vide », finie).
- L'**étanchéité azote + tirage au vide** → **S12**.
- La **récupération** du fluide → **S13** (sem. 11-12, produite en session parallèle « cloud »).
  *S14 part du principe que S13 a posé la récupération (C4.2 en Confortement) et l'intro des feuilles MES ;
  S14 la fait monter d'un cran sur la CHARGE et la MISE EN SERVICE, et ajoute la traçabilité CERFA.*

## Niveau spiralaire visé en P7 (progression §5) — à afficher sur le Dossier
C4.2 Manipuler le fluide → **M** · C4.5 Mesurer, comparer → **V** · C4.6 Régler les consignes → **V** ·
C4.7 Raccorder charge/mesure → **V** · C4.1 Tirer au vide → **V** (rappel, acquis S12).
*(I Initiation · C Consolidation · M Maîtrise · V Validé = niveau VISÉ dans l'année ; à ne pas confondre
avec l'échelle 0-4 = positionnement constaté un jour donné.)*

## Découpage de S14 en modules

| Module | Type | Durée | Contenu (carte) | Compétences évaluées (statut activité) | Tâches | Savoirs |
|---|---|---|---|---|---|---|
| **A5-a** | Atelier | 4 h | **Chargement du fluide + première mise en service** : raccord manifold sur circuit tiré au vide validé, introduction de la charge (liquide au condenseur / vapeur), démarrage, premiers relevés HP/BP/T | C4.2 *Confortement→Éval* · C4.7 *Évaluation* | T2·T13 | prér. S5.1·S6.1·S6.2 ; trav. S5.2·S0.1 |
| **A5-b** | Atelier | 4 h | **Contrôle de la charge par SC/SR + réglages en fonctionnement** : lecture HP/BP, calcul surchauffe/sous-refroidissement, décision d'ajuster (compléter/retirer), réglage pressostat/détendeur | C4.5 *Évaluation* · C4.6 *Confortement* · C4.2 *Confortement* | T13·T14 | prér. S5.2·S5.1 ; trav. S5.6·S0.1 |
| **T1** | Théorie | 1 h | **Le CERFA et la traçabilité des fluides** : fiche d'intervention FI-BSD, obligations F-Gaz, GWP/tCO₂e, attestation d'aptitude, registre | (S0.1·S1.2, Découverte→Confortement) | T2·T15 | S0.1·S1.2 |
| **F3** | Fil de l'eau | 2 h (continu) | **Carnet de bord** (rituel tenu à chaque séance) | C1.3·C2.1 (Confortement) | T1 | S3.1 |
| **F4** | Fil de l'eau | 2 h | **Feuille de relevé de mise en service + remplissage du CERFA** (support écrit vedette de S14) | C1.1 *Confortement→Éval* · C4.5 *Confortement* | T2·T15 | S1.2·S0.1 |
| **Éval** | Sommative | 1 h | **S13-S14** : récupération · charge · mise en service · CERFA (poste individuel, remontée École Directe, semaine 17) | C4.2·C4.5·C4.7 *Évaluation* | T2·T13·T15 | S0.1·S5.2·S1.2 |

**≤ 4 compétences évaluées par module** ✓. Bloom **CAP 1→3** (citer, nommer, montrer, réaliser, appliquer,
lire un relevé, remplir un document) — jamais « analyser les écarts et optimiser » (hors calibre CAP).

## Méthodes pédagogiques VARIÉES (imposées — différentes des séances voisines)
- Rappel S11 : démonstration · plan de travail à jalons · situation-problème. S12 : TP câblage · signature
  5 étapes · situation-problème étanchéité.
- **A5-a = démonstration guidée + postes tournants** (la charge est un **geste à risque** : elle se *démontre*,
  ne se découvre pas — cf. charte §1, limite de la découverte).
- **A5-b = étude de cas / diagnostic guidé** (interpréter un couple HP/BP + SC/SR et **décider** : manque de
  charge ? excès ? incondensables ?).
- **T1 CERFA = classe inversée + jeu de rôle « contrôle réglementaire »** (l'élève remplit puis vérifie une
  FI-BSD).
- **F4 = renseignement de documents réels** (feuille MES + CERFA à compléter au fil des relevés).

## Sécurité — fil rouge P7 (progression §3) + gestes interdits
Thématiques P7 : **charge et récupération des fluides ; risque électrique, consignation, VAT ; prépa
habilitation B1V ; traçabilité CERFA/BSD.**
- **EPI** : gants manipulation fluide (risque de gelure/projection), lunettes, chaussures ; EPI électriques
  pour les mesures sous tension.
- **Gestes INTERDITS** (explicites sur chaque doc) : jamais de **charge sans tirage au vide validé** ;
  **jamais de rejet de fluide à l'atmosphère** (récupération obligatoire — F-Gaz) ; **jamais de bouteille
  de fluide chauffée à la flamme** pour accélérer le transfert ; **VAT avant toute intervention électrique**
  (consignation NFC 18-510) ; jamais de shunt d'un organe de sécurité.
- **Urgence** : couper (arrêt d'urgence), alerter, ne pas déplacer un électrisé ; trousse + arrêt d'urgence
  localisés au rituel d'entrée.

## Seuils AUTORISÉS (seuls — zéro invention)
Surchauffe **5-10 K** · sous-refroidissement **4-8 K** · NF EN 378 · NFC 18-510. Toute autre valeur
(pression de consigne, charge nominale en grammes, seuil pressostat) = **« selon plaque signalétique /
notice constructeur, à faire valider par le professeur »**. GWP/PRP des fluides : valeurs des tableaux
officiels (F-Gaz), sinon « à confirmer ».

## Codes officiels (référentiel CAP IFCA — libellés EXACTS)
- **Compétences** : C4.2 *Manipuler le fluide frigorigène et les huiles* · C4.4 *Intervenir sur un circuit
  hydraulique ou aéraulique* · C4.5 *Mesurer, comparer des grandeurs* · C4.6 *Paramétrer ou régler les
  valeurs de consigne sur organe de régulation ou de sécurité* · C4.7 *Raccorder les équipements de charge,
  de mesure et de contrôle* · C1.1 *Compléter, transmettre* · C1.3 *Rendre compte* · C2.1 *Organiser des
  informations*.
- **Tâches** : T2 *Compléter les documents de traçabilité des fluides frigorigènes* · T13 *Tirer au vide,
  charger et contrôler l'installation sous tension* · T14 *Régler l'installation en fonctionnement* ·
  T15 *Renseigner les documents de mise en service* · T1 *Renseigner et transmettre des documents de suivi*.
- **Savoirs** : S0.1 *Réglementation et impacts environnementaux* · S1.2 *Pièces et autorisations
  administratives* · S5.1 *Systèmes thermodynamiques à détente directe* · S5.2 *Fluides frigorigènes, huiles
  frigorifiques* · S5.6 *Réseaux, matériels électriques et de régulation* · S6.1 *Santé et sécurité au
  travail* · S6.2 *Principaux risques et moyens de prévention* · S3.1 *Communication technique* ·
  S7 *Anglais technique* (la carte note « S7.1 » → rattaché à S7).

## Sources bibliothèque à restituer (rubrique S13-S14 de `..\BIBLIOTHEQUE.md`)
- ⭐ `02_CAP-IFCA/Cours-Annuels/CERFA FI-BSD CAP.docx` — document CERFA/BSD officiel → **T1 + F4**.
- ⭐ `02_CAP-IFCA/C4-MettreEnService/Feuille de relevé de mise en service.docx` (aussi dans `archive\S13-Prepa-EP3\`) → **F4**.
- ⭐ `02_CAP-IFCA/C4-MettreEnService/ACT 3. Mise en service de l'installation.docx` → **A5-a**.
- `.../CHARGE EN GAZ.docx` (+pdf) → **A5-a** (procédure de charge).
- `.../Calcul sous refroidissement Prof.docx` · `.../LA SURCHAUFFE et le SR.docx` → **A5-b**.
- `.../fiche contrat tirage charge.docx` → **A5-a/A5-b** (fiche contrat).
- `02_CAP-IFCA/Froid-Frigorifique/tp CEFA FI BSD .docx` (+pdf) → **T1**.
- `05_Ressources-Partagees/Froid-Climatisation/Liste_fluides_frigorigènes.pdf` · `Cours_Fluides_Transition_Inerweb.pdf` → **T1** (familles, GWP).
- `05_Ressources-Partagees/F-GAZ/Document_Ressources_Fgaz3_Exercice6.docx` → **T1** (exercice F-Gaz).
- `02_CAP-IFCA/C4-MettreEnService/Série 2 Activité 4 - Récupération du fluide...docx` → rappel récup. dans l'**Éval**.
- `02_CAP-IFCA/C2-Preparer/bond de commande le froid.docx` → rituel bon de commande (phase 8 bis).
*Toute reprise = citée « D'après : … » sur le document.*

## Livrables (miroir de S11/S12 — HTML de référence d'abord, PDF+docx après bon à tirer Franck)
1. **Dossier de séquence S14** (page de garde Croix + pastilles compétences + cadre EP2/EP3 ; plan de
   séquence modulaire ; plans de séance intégrés).
2. **Module A5-a** : Plan de séance · Document élève (TP) · Document professeur (corrigé).
3. **Module A5-b** : Plan de séance · Document élève (TP) · Document professeur (corrigé).
4. **T1 CERFA** : Document élève · Document professeur.
5. **F3 Carnet de bord** : Document élève · Document professeur.
6. **F4 Feuille MES + CERFA** : Document élève · Document professeur.
7. **Évaluation sommative S13-S14** : Document élève (sujet) · Document professeur (corrigé + grille 0-4) ·
   Plan de passation.

## Règles NON NÉGOCIABLES (rappel checklist)
Corps élève **14 pt vérifié dans le CSS** ; grilles **0-4** (critère observable/case, ligne savoir-être,
auto-positionnement) ; **≤ 4 compétences** ancrées « sur T…·S… » ; statuts **Découverte/Confortement/
Évaluation** ; situation pro (ordre d'intervention numéroté, client générique — jamais d'élève nommé) ;
sécurité complète ; **totaux horaires EXACTS** ; **zéro invention** ; charte graphique constante (en-têtes
logos, pied de page « ❄ inerWeb Édu — par F. Henninot », fond clair) ; tableaux/encadrés **jamais coupés**
entre deux pages ; **schéma d'usage complet en annexe pleine page** (le schéma fluidique manifold+charge
en A3 paysage) ; sources citées.

## Symboles / schémas
- Circuit, contacts, protections, symboles fluidiques : **bibliothèque** `usine-contenu\bibliotheque-symboles\`
  (`catalogue.json`, 348 symboles) — jamais redessinés ; version `--sans-reperes` pour les exercices à compléter.
- Réutilisables déjà dans `images\` : `schema-fluidique-manifold-pompe-a-vide.png` (à adapter/étiqueter pour
  la CHARGE), `pompe-a-vide-legendee.jpeg`, `croix-frigoriste-schema-technique.svg`, `fiche-securite-a-cocher.png`, logos.
- À produire : schéma « raccord manifold pour la charge », abaque/tableau de lecture SC-SR, gabarit CERFA
  FI-BSD à remplir. Image d'un CERFA réel = extraite de `CERFA FI-BSD CAP.docx` (word/media).

## Sortie TRIPLE (à chaque document, APRÈS validation Franck)
HTML (référence d'impression) → PDF (`msedge --headless --no-pdf-header-footer --print-to-pdf`) →
docx NATIF (`C:\git\usine-contenu\outils\docx-natif\docx-helpers.js`).

## Points en attente (comme S11/S12)
Logos PNG officiels définitifs · texte définitif du copyright · orthographe « Bowers » · libellé S7.1.
**Hypothèse de partage S13↔S14 à confirmer par Franck** (récupération = S13 ; charge/MES/CERFA = S14).
