# REFONTE 2A CAP IFCA — plan de chantier

*Ouvert le 28/08/2026. Ce fichier est le seul état d'avancement du chantier.*

**Demande de Franck (28/08)** : « le principe est bon, tout est pas mal, ça manque d'images et un peu de
tout. On reste en HTML, mais on prévoit une sortie plus facilement imprimable et travaillable (docx).
Reprendre tout ça, l'adapter au RAG de TP, utiliser Claude Design pour illustrer certaines actions, et
greffer les modules d'inerweb.fr par QR code là où c'est nécessaire. »

## Décisions actées le 28/08
| Question | Décision |
|---|---|
| Périmètre | **Toute la 2e année, S10 → S16** (S13 à rapatrier, S16 à écrire) |
| Marque | **Scolaire — logo lycée Jacques Raynaud.** Conforme au `REPRISE.md` du dépôt. inerWeb n'apparaît que dans le bloc « Pour aller plus loin » qui porte les QR |
| Ordre | **S10 en pilote complet** (gabarit → impression → images → QR → docx). Validation de Franck sur pièce, puis les autres au même moule |
| Où l'on travaille | **`C:\git\progression-cap-ifca`** fait foi (atelier sous git). `26-27\Sequences-2A-CAP-IFCA\` est une **copie servie**, rafraîchie en fin de chantier, jamais éditée directement |

⚠️ **Doublon levé le 28/08** : les séquences existaient en deux exemplaires (atelier git + OneDrive).
Comparés fichier par fichier : **strictement identiques**, aucune divergence, rien de perdu. Le dépôt git
que je venais d'ouvrir sur la copie OneDrive a été supprimé pour ne pas créer un second historique.

---

## État des lieux au 28/08/2026 (constaté sur pièce)

| | Constat |
|---|---|
| Séquences | 5 produites : **S10, S11, S12, S14, S15**. S13 jamais rapatriée (session cloud, PR #1). S16 jamais produite. |
| Volume | **73 HTML**, 20 docx, 23 pdf, 10 md |
| Images | **55 fichiers** pour 73 documents (12 SVG, 33 PNG, 5 JPG) — ≈ 0,75 image par document |
| Charte | **73 blocs `<style>` recopiés, 0 feuille partagée** ← le point dur |
| Logo lycée | Présent dans `images\`, mais posé sur **une seule feuille sur huit** ; les autres n'ont que le texte « LPP JACQUES RAYNAUD » |
| Sortie triple | Faite pour S12 seule. S14/S15 : HTML seul (normal, avant bon à tirer). |
| Liens inerweb.fr | Mention en pied de page uniquement. **Aucun lien de module, aucun QR** vers une station. |
| RAG | `usine-contenu\outils\integrer-production.py` → base « profs cour Indexee ». S12 seule intégrée. |
| Audit | `_AUDIT-HARMONISATION-2A.md` (13/07, dans `26-27\`) : écarts listés, **13 arbitrages jamais tranchés**. |

**Ce que l'audit de juillet avait établi et qui reste vrai** : le fond pédagogique est bon (14 pt élève /
13 pt prof tenus partout, grilles 0-4, ≤ 4 compétences, zéro invention). Les écarts sont dans la cohérence
d'ensemble, pas dans le contenu. La refonte n'écrit donc pas de matière neuve : elle assainit,
industrialise la forme, et enrichit (images + QR).

## Outillage déjà en place — à réutiliser, pas à réécrire
- `usine-contenu\00-charte\impression.css` — feuille d'impression complète et argumentée (le trait porte
  le sens, pas la surface ; double canal couleur + style de trait pour survivre à la photocopie)
- `usine-contenu\outils\docx-natif\docx-helpers.js` — génération docx **native** (jamais pandoc)
- `usine-contenu\outils\integrer-production.py` — intégration RAG après bon à tirer
- `images\logo-lycee-jacques-raynaud.png` — déjà dans chaque séquence

---

## Ordre de marche

### Étape 0 — Assainir (avant d'enrichir)
- [x] **0.1 (S10)** — 20 docx/pdf périmés écartés vers `_versions-perimees-juillet\`. Péremption prouvée
      **sur le contenu** : le docx dit « SÉANCE N° 1/3 », le HTML de même nom dit « Module A0 / 4 h / jalons ».
- [ ] **0.2** Même vérification sur S11, S12, S14, S15 (l'audit signale 10 PDF sur 11 périmés en S11)
- [ ] **0.3** Table d'errata de codes appliquée **une seule fois pour toutes les séquences** (S2.4 inexistant · S7.1 → S0.1 · C4.4 réservé à S15)
- [ ] **0.4** Nomenclature unique : dossiers « Séance 1/2/3 » → modules A1→A6 ; sort le « A0 » inventé en S10

### Étape 1 — Le gabarit unique (le cœur)
**Décision** : la charte reste **injectée dans chaque fichier** (documents autonomes, imprimables et
déplaçables sans rien casser), mais elle n'existe qu'à **un seul endroit** et un script la pose.
- [x] **1.1** Divergence mesurée sur S10, charte écrite → `_charte\charte-2a.css` (59 règles)
- [x] **1.2** Feuille d'impression → `_charte\impression-2a.css`, dérivée de `00-charte\impression.css`
- [x] **1.3** Script `outils\poser-charte.mjs` — idempotent, mode simulation par défaut
- [x] **1.4** **Appliqué aux 14 documents de S10**, contrôlés 14/14 (voir plus bas)
- [x] **1.6** Appliqué à S11, S12, S14, S15 — **72 documents**, 1964 règles en doublon retirées
- [ ] **1.5 — À TRANCHER PAR FRANCK, pas fait exprès.** Le logo du lycée n'est posé que sur la 1re des
      8 feuilles ; les 7 autres portent le texte « LPP JACQUES RAYNAUD ». La charte dit « logo partout »,
      mais l'établissement est **déjà identifié en toutes lettres** sur chaque feuille, et ajouter une image
      sur 8 feuilles × 72 documents coûte de l'encre à l'impression pour une information déjà présente.
      Relève de la règle « élaguer plutôt qu'empiler » : **la question se pose, elle ne se tranche pas seule.**

#### Ce que la mesure a appris (28/08) — et qui a changé la méthode
- Ce ne sont **pas 73 copies d'une charte** : sur S10, 240 règles distinctes, dont **144 dans un seul
  fichier**, et 9 seulement identiques dans les 14. Des chartes cousines qui ont dérivé.
- **Aucun document n'avait `<!DOCTYPE>`, `<html>`, `<head>` ni `<body>`** — des fragments, rendus en
  mode « quirks », où l'impression ne se comporte pas comme en mode standard. C'est une part de ce qui
  rendait ces documents pénibles à imprimer.
- `@page` n'existait que dans **1 document sur 14** : les 13 autres s'imprimaient aux marges du
  navigateur, avec ses en-têtes et ses URL en haut de page.
- `.feuille{page-break-after:always}` sans exception sur la dernière : **une page blanche à la fin de
  chaque document imprimé**.
- ⚠️ **Piège évité** : extraire la charte « par vote majoritaire » retenait `body{font-size:13pt}` et
  aurait **fait passer tous les documents élève de 14 à 13 pt**. Vérification faite : la règle était
  déjà tenue sans exception (5 documents élève à 14 pt, 8 professeur à 13 pt). La taille est désormais
  pilotée par `data-public` sur `<body>`, posé par le script — elle cesse d'être recopiée à la main.
- Les divergences restantes viennent presque toutes du seul « Dossier de séquence », un peu plus aéré
  que les autres (marges, sigle 13,5 pt). C'est cohérent — un document de pilotage, pas un support
  élève. **Laissé tel quel** : le CSS propre au document passe après la charte et garde la main.

#### Contrôle sur pièce (mesuré dans le navigateur, avant / après)
| | avant | après |
|---|---|---|
| Mode de rendu | **quirks** | standards |
| Langue déclarée | aucune | `fr` |
| Corps, document élève | 14 pt | **14 pt** (inchangé) |
| Corps, document professeur | 13 pt | **13 pt** (inchangé) |
| Règles `@page` | 0 | 2 (marges maîtrisées) |
| Page blanche finale | oui | supprimée |
| Images cassées | 0 | 0 |
| Poids CSS | 90 Ko sur S10 | 478 règles en doublon retirées |

Les 14 documents passent le contrôle : doctype, `lang="fr"`, `data-public` juste, un seul bloc de
style, `@page` présent, et **toutes les images référencées existent sur le disque**.

### Étape 1 bis — NE PAS MÂCHER LE TRAVAIL (demandé par Franck le 28/08)
> « Quand ils vont dessiner ou comprendre la Croix du Frigoriste, il faut mettre les éléments sur le côté
> et c'est à eux de les positionner, avec l'aide de l'enseignant. Il ne faut pas tout leur donner prémâché.
> Tu dessines instantanément les bons éléments au bon endroit — il faut les faire dessiner. Des fois tu
> mâches trop le travail. »

Principe retenu, valable pour toute la 2e année : **le document élève ne contient pas la réponse
graphique.** Les éléments vont **en réserve, sur le côté, en désordre** ; la zone de travail est vide ;
le corrigé complet vit dans le document professeur. Crescendo : placer avec aide → redessiner de mémoire.

- [x] **1b.1 — T0, la Croix du Frigoriste** (le cas le plus flagrant, traité le 28/08)
      - planche `images\croix-frigoriste-planche-de-travail.svg` : réserve de 4 symboles à gauche (en
        désordre), croix vierge à droite, 4 cadres HP/BP à remplir, sens de circulation à tracer
      - les emplacements sont repérés par leur **position** (EN HAUT, À GAUCHE…) et **non numérotés** :
        un numéro d'ordre soufflerait le sens de parcours, qui est justement ce qu'il faut trouver
      - le schéma complet **sort du document élève** ; découverte refondue en deux questions de réflexion
        (ce qu'on sait déjà · pourquoi l'arrière d'un réfrigérateur est chaud)
      - l'exercice 1 devient une **restitution de mémoire, feuille retournée**
      - corrigé professeur réaligné : nouvelle correction de la feuille de travail avec le schéma complet
        projetable, placement attendu, convention rappelée, **erreurs de placement à attendre**
- [x] **1b.2 — S11 · T1, le détendeur** (traité le 28/08, et il y avait plus grave que du prémâché)
      - 🔴 **erreur métier** : le corrigé professeur plaçait **trois** organes à contresens de la convention
        — détendeur « en bas à gauche », condenseur « en haut à gauche », évaporateur « en bas à droite ».
        Le document élève portait la même erreur deux fois. Corrigé : **condenseur en HAUT · compresseur à
        DROITE · détendeur à GAUCHE · évaporateur en BAS**, et le corrigé rappelle désormais que la
        convention ne se négocie pas
      - la légende donnait la réponse de l'observation 1, écrite deux lignes plus bas
      - l'exercice 1 demandait d'« entourer le détendeur » sur un schéma où il est nommé en toutes lettres,
        position rappelée dans la consigne : il n'y avait **rien à chercher**. Devenu un replacement sur la
        croix vierge (rappel actif de T0)
      - le schéma complet **reste** en découverte : T1 porte sur le rôle du détendeur, pas sur la
        construction du circuit, et l'élève a déjà construit sa croix en S10

- [x] **1b.3 — les autres cas : examinés un par un, et à laisser tels quels**

  Le relevé du 28/08 (ci-dessous) était **trop mécanique** : il comptait les figures sans regarder leur
  rôle. En examinant chaque cas, la ligne de partage est nette :

  > **En théorie**, montrer le schéma, c'est donner la réponse → il sort du document élève.
  > **En atelier**, le schéma est le **plan de chantier** — un frigoriste travaille d'après un plan.
  > Le retirer serait une erreur pédagogique, pas une exigence.

| Où | Verdict après examen |
|---|---|
| **S11 séances 1-2-3** — ligne liquide, 6 fois | **À GARDER.** Sections « mise en situation », « réalisation jalon 2 », « documents à remettre » : c'est le plan de montage du TP |
| **S12 séance 1** — schéma électrique complet | **À GARDER, et la séance est bien faite** : le schéma est annoncé « à garder sous les yeux pendant tout le câblage », avec une **annexe A3** pour le poste. Les deux cadres demandent déjà de **dessiner les symboles normalisés** du contacteur et du relais thermique |
| **S14 A5-a · S15 A6-a/b** — manifold, 7 fois | **À GARDER.** « Plan de travail à jalons — gardez le schéma de la page précédente » |
| **S15 A6-a** — cotes de dégagement | **À GARDER.** Données constructeur à respecter, pas une réponse à trouver |

*Mesure d'ensemble : 21 documents élève portent 60 figures. Après examen, **seuls T0 et T1 relevaient du
travail prémâché** — les deux modules de théorie. Une plaque signalétique, un CERFA réel ou un plan de
montage sont des supports de lecture et de travail, pas des corrigés déguisés.*

### Étape 2 — Les images
- [ ] **2.1** Relever document par document **où une image manque et ce qu'elle doit montrer** → `_PLAN-IMAGES.md`
- [ ] **2.2** Servir d'abord par l'existant (bibliothèque indexée, `bibliotheque-symboles-energie`)
- [ ] **2.3** Schémas manquants → SVG (bibliothèque, ou Claude Design pour les gestes complexes)
- [ ] **2.4** Ce qui reste introuvable → **prompt fourni à Franck**, qui génère avec GPT
- Règle tenue : une illustration colle parfaitement, ou pas d'illustration.

### Étape 3 — Les QR vers inerweb.fr
Le site expose ≈ 200 stations sur 4 réseaux (thermo-techno, Législation, HydroMétro, AéroRézo).
- [ ] **3.1** Table de correspondance **module 2A → station**, avec URL exacte et raison pédagogique → `_QR-INERWEB.md`
- [ ] **3.2** QR générés **en local**, en SVG (pas de service tiers pendant la fabrication)
- [ ] **3.3** Bloc « Pour aller plus loin » normalisé : QR + titre de la station + **URL écrite en clair** (l'élève sans téléphone doit pouvoir la taper)

### Étape 4 — La sortie imprimable et travaillable
- [ ] **4.1** PDF depuis le HTML, une fois la feuille d'impression posée
- [ ] **4.2** **docx natif** (`docx-helpers.js`) ; les SVG portent une image de repli
- [ ] **4.3** Contrôle sur pièce : c'est le **document imprimé** qu'on regarde, pas le HTML à l'écran

### Étape 5 — Boucler
- [ ] **5.1** Bon à tirer Franck, séquence par séquence
- [ ] **5.2** `integrer-production.py` sur chaque séquence validée (RAG)
- [ ] **5.3** Rafraîchir la copie servie `26-27\Sequences-2A-CAP-IFCA\`
- [ ] **5.4** Puis **S13** (à rapatrier) et **S16** (à écrire) — le périmètre va jusqu'à S16

---

## Arbitrages en attente
Les 13 arbitrages de l'audit du 13/07 restent ouverts. Ils seront remontés **au moment où ils bloquent
une étape**, pas tous d'un coup.

## Journal
- **28/08/2026** — Ouverture. État des lieux sur pièce. Doublon atelier/OneDrive levé (copies identiques).
  Périmètre, marque et ordre tranchés par Franck. Étape 0.1 faite sur S10 : 20 fichiers périmés écartés,
  péremption prouvée sur le contenu. Aucun document pédagogique modifié à ce stade.
