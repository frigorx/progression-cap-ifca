# État de la séquence S0 — Découverte et inventaire de l'atelier (1A CAP IFCA)

## 🔴 02/09/2026 — deux défauts graves signalés par Franck, corrigés

**1. Les .docx étaient inutilisables (« c'est nul, c'est zéro, pas compatible »).**
15 des 17 `.docx` contenaient le **code HTML en texte brut** (`&lt;td&gt;…`) au lieu de la mise en
page. Cause : les fichiers `.html` produits n'avaient **pas d'enveloppe `<html><head></head><body>`**
— Word les importait alors comme du texte, pas comme du HTML. Corrigé : les 17 documents ont reçu
une enveloppe complète (doctype + head avec `<title>` et les `<style>`, + body), rendu navigateur
inchangé. **Contrôle automatique ajouté après conversion** : 0 fichier en balises brutes.
> ⚠️ **À ne pas refaire ailleurs dans l'usine** : tout HTML destiné à une conversion Word doit avoir
> son enveloppe complète. Les gabarits `usine-contenu\gabarits\` et les séquences déjà produites
> (S1 notamment, même forme sans `<html>`) sont probablement touchés par le même défaut — **à
> vérifier avant leur prochaine sortie docx**.

**2. Les images n'étaient pas embarquées dans les .docx.**
Word se contentait de **lier** les photos (`../images/...`) : un docx déplacé, envoyé par mail ou
extrait ailleurs perdait toutes ses images. Corrigé : le script de conversion inline désormais
chaque image en `data:` URI dans une copie temporaire avant de passer la main à Word. Contrôle
après conversion : **17/17 docx avec images embarquées** (1 à 10 selon le document).

**3. Les cintreuses n'étaient pas détaillées par diamètre — Franck avait raison.**
J'avais décidé de « ne pas pré-lister les diamètres » et de faire relever le marquage par l'élève.
C'était un contresens : Franck AVAIT donné les diamètres, et un inventaire de stock compte chaque
diamètre séparément — exactement comme les 6 tailles de tournevis, qui elles avaient bien leurs
6 lignes. Résultat : une seule ligne « cintreuses cuivre (tous diamètres) », inutilisable comme
inventaire. Corrigé partout (fiches de tri, fiches de comptage, affiche de poste, corrigés
professeur, versions détaillées, cadrage) : **1/4" · 3/8" · 1/2" · 5/8" + modèle 3 diamètres
(1/4 · 5/16 · 1/2)**, une ligne d'inventaire par diamètre, la lecture du marquage restant un
objectif pédagogique qui s'ajoute aux lignes au lieu de les remplacer.


## 🔧 Passe d'amélioration du 02/09/2026 (3e retour de Franck : « il faut vraiment que tu m'améliores ce projet »)

Trois trous fermés, aucun ajout de couche :

1. **Le bac TRANSFERT ne menait nulle part.** Les séances 1 et 2 demandaient de mettre de côté les
   outils de l'autre atelier dans un bac TRANSFERT… et rien ne disait ce qu'il devenait : les outils
   transférés n'étaient comptés nulle part, l'inventaire final aurait été **faux**. Corrigé en
   Séance 3 : l'échange des bacs entre ateliers s'intègre à la phase 6 (25 min OVNI + 15 min
   TRANSFERT, total de séance toujours 90 min exactes), avec un point de vigilance explicite côté
   professeur (mettre à jour les compteurs des deux ateliers après l'échange) et la consigne de
   reporter les totaux dans l'outil numérique.
2. **L'outil d'inventaire n'avait pas d'import.** Un export était un aller sans retour : un vidage du
   navigateur, un changement de poste, et le stock était perdu — problème réel puisque Franck veut
   conserver ce stock pour sa future page de gestion. Ajout d'un **import JSON qui AJOUTE au stock
   existant** (ne remplace jamais, ignore les doublons d'`id`, valeurs par défaut sur entrée
   incomplète, entrées invalides ignorées sans planter). **10 tests écrits et passés** (dont
   aller-retour export→import fidèle et réimport du même fichier sans duplication) —
   `scratchpad\test-import.js`. Ajout aussi des champs **Dimension relevée** et **Isolé**
   (formulaire, tableau, export CSV et JSON).
3. **Les critères d'état encombraient le livret élève.** Créé une **affiche de poste par atelier**
   (`Affiche de poste - Critères d'état - Atelier Électrique/Façonnage.html`, A4, gros caractères,
   photos) qui porte le tableau Bon / À réviser / Hors service, et retiré ce tableau des documents
   élève (remplacé par un renvoi court). Meilleure pédagogie d'atelier — on lève les yeux vers
   l'affiche au lieu de lire son livret — et volume ramené de **1222 → 1076 mots** (Électrique) et
   **1144 → 1020** (Façonnage). Les affiches sont dans les DEUX zips (rien de corrigé dedans).

**Non fait, volontairement** : les croquis des 3 outils sans photo (tournevis testeur, clé à molette,
cintreuse plombier). Ils seront photographiés à l'atelier, et la charte impose la photo réelle avant
le croquis — produire un croquis destiné à être remplacé serait du travail jeté.

## ✅ RÉSOLU — les versions détaillées manquaient (02/09/2026, question de Franck sur le plafond de 900 mots)

Franck : « j'ai du mal à comprendre pourquoi tu as cette limitation de 900 mots, avant tu m'écrivais
carrément des ebooks ». **Il avait raison, et l'erreur était de mon côté** : le manuel §3 prévoit
DEUX fichiers par TP — la version élève ACCESSIBLE (≤ 900 mots, celle que l'élève reçoit) ET la
`Document de référence - version détaillée.html` (**≥ 1 500 mots, un plancher, pas un plafond** :
pour le professeur, les élèves à l'aise, le réemploi en bac pro). Pour S0 je n'avais produit que la
moitié accessible, puis passé trois tours à essayer de faire tenir dans un format court tout le
détail demandé. Les « ebooks » de S1 (2 633 / 2 747 / 2 590 / 2 757 mots) sont précisément cet autre
fichier.

**Les 3 versions détaillées sont écrites** (≈ 12 600 mots au total) :
- Séance 1 — **≈ 4 100 mots** : monographie des 14 familles + 3 partagées (fonction, ce qui la
  distingue de la voisine, **pourquoi elle est conçue ainsi**, erreur typique), lecture des marquages
  (2,5×50, PZ2×125, 1/2"), sens professionnel de l'inventaire (T6), mécanisme OVNI/TRANSFERT.
- Séance 2 — **≈ 4 700 mots** : méthode de contrôle famille par famille (ordre du contrôle, gestes
  autorisés/interdits, usure débutante vs défaut éliminatoire et **pourquoi** — encoche arrondie qui
  écrase le cuivre, isolant fendu qui annule la protection VDE 1000 V, gorge de cintreuse ovalisée
  qui réduit la section de passage), « à réviser » vs « hors service » (qui décide, ce qu'on répare
  en lycée), filière déchets S0.2, méthode du lot de 15 et du bon de commande.
- Séance 3 — **≈ 3 788 mots** : conduite de la restitution croisée (faire formuler l'hypothèse avant
  la réponse, exploiter l'erreur, exiger une justification par forme/matière/marquage/usure),
  évaluation par compétences en semaine 1 (poids réduit, 0-4 constaté vs I/C/M/V visé, « 0 = non
  évalué »), ligne savoir-être comme exigence professionnelle, clôture de l'inventaire.

Ces 3 documents sont dans le **zip complet uniquement** (ce sont des documents de référence, pas des
feuilles à distribuer). Le zip élève garde les feuilles courtes + les affiches de poste.

## ⚠️ Point CLOS — volume de texte des documents élève (Séance 2)

*Sans objet depuis que les versions détaillées existent : le détail a maintenant son fichier. Les
documents élève restent à 1076 / 1020 mots, légèrement au-dessus du plafond de 900, ce qui est
documenté ci-dessous et n'appelle plus d'arbitrage — sauf si Franck veut malgré tout les raccourcir.*

Après le passage au tri détaillé (9 familles Électrique dont 6 tournevis séparés par taille, 5
familles Façonnage, familles partagées, bac TRANSFERT), les documents élève de la **Séance 2**
dépassent le plafond charte de 900 mots : **Atelier Électrique 1076 mots, Atelier Façonnage
1020 mots** (après le déplacement des critères vers l'affiche de poste, qui a déjà fait tomber
1222 → 1076 et 1144 → 1020). Séance 1 : 996 et 961 mots. Séance 3 : 904 mots.
Nuance de mesure : ce comptage inclut le contenu des cellules de tableau (les « ☐ Oui ☐ Non »
répétés sur 11 lignes de comptage, par exemple), qui se balaient du regard et ne pèsent pas comme
de la prose continue — le plafond de 900 a été pensé pour du texte suivi. Le manuel de conception autorise ce dépassement s'il est justifié (§3) : ici il
vient directement du niveau de détail demandé — chaque famille garde sa propre ligne dans le
tableau de comptage, ce qui est le cœur de la demande. Une consolidation a déjà été faite (les 5
lignes de critères d'état des tournevis, identiques, ont été fusionnées en une seule ligne — le
tableau de comptage, lui, garde ses 6 lignes séparées car c'est ce qui sert à distinguer les
tailles). Deux options pour la suite, à choisir par Franck :
1. **Accepter tel quel** — le volume est surtout du tableau (cellules courtes, lecture par
   balayage), pas de la prose continue ; le document tient sur les mêmes 2 feuilles A4, juste plus
   denses.
2. **Couper précisément** — dire quoi retirer (ex. simplifier le texte d'intro de la Feuille 1,
   ou déplacer une partie du contenu vers le document professeur) plutôt qu'une coupe arbitraire
   qui perdrait la granularité demandée.


*Séquence d'OUVERTURE d'année, avant ou en tête de S1. Pilotage : `_CADRAGE-S0.md` (+ son
« Addendum du 02/09/2026 »). Produite le 02/09/2026 par 4 rédacteurs Sonnet en parallèle
(Séance 1, Séance 2, Séance 3, Dossier de séquence) sous cadrage du chef d'orchestre, puis
3 passes de correction (découverte guidée + photos réelles + harmonisation horaire).*

## ✅ SÉQUENCE COMPLÈTE — HTML + DOCX (02/09/2026), 12 documents + 1 outil numérique

### Modules et livrables
- [x] **Dossier de séquence S0.html/.docx** — page de garde (3 compétences en pastilles,
      libellés officiels exacts), plan de séquence (3 séances, durées 120/120/90 min), formule
      de Bowers avec statuts, fil rouge sécurité, descriptif de l'évaluation de clôture, renvoi
      vers l'outil numérique d'inventaire.
- [x] **Séance 1 — Identifier et trier l'outillage** (2 h, statut Découverte, C2.2) : Plan de
      séance + Document élève Atelier Électrique (996 mots) + Document élève Atelier Façonnage
      (961 mots) + Document professeur — corrigé. **Fiche de découverte guidée** : photo de
      chaque outil + 2 colonnes vides (nom proposé / fonction supposée), corrigé réservé au
      document professeur. **Tri détaillé (révision du 02/09/2026)** : 9 familles Électrique
      (3 pinces avec case « isolée ? » + 6 tournevis séparés par taille/type, coffret Stanley
      FATMAX VDE 6 pièces réf. 0-65-443 sourcé par recherche web) et 5 familles Façonnage
      (dont cintreuses cuivre en lecture de marquage, pas en liste devinée, et un bac unique
      « outils mécaniques » sans sous-tri), + bacs OVNI et TRANSFERT, + 3 familles partagées en
      comptage indicatif (mètres-rubans, clés à molette, outils mécaniques).
- [x] **Séance 2 — Vérifier l'état et constituer les lots** (2 h, statut Découverte, C3.1) :
      Plan de séance + Document élève Atelier Électrique (≈1220 mots) + Document élève Atelier
      Façonnage (≈1140 mots) + Document professeur — corrigé. Critères d'état Bon/À réviser/Hors
      service illustrés par les mêmes photos, fiche de comptage détaillée par famille vers 15,
      tri des déchets (S0.2). Mêmes 9+5 familles que Séance 1 — **volume au-dessus du plafond
      900 mots, voir point à trancher en tête de ce fichier**.
- [x] **Séance 3 — Restituer, ranger et évaluer** (1 h 30, statut Évaluation C1.1 / Confortement
      C2.2-C3.1) : Plan de séance + Document élève unique (~905 mots, légèrement au-dessus du
      plafond 900 après l'ajout d'une photo justifiée — écart mineur assumé) + Document
      professeur — corrigé. Grille 0-4 (3 compétences + ligne savoir-être portant le critère
      « respecte les rayons et zones affectées »), restitution croisée des OVNI illustrée par la
      photo de la pince à bec (question posée, réponse non donnée).
- [x] **outil-inventaire/Inventaire-atelier.html** — outil autonome (formulaire, compteur de
      progression vers 15 par famille, export CSV/JSON, localStorage) — hors gabarit
      pédagogique, écrit directement par le chef d'orchestre. Vérifié : syntaxe JS valide
      (`node --check`) ; non testé en interaction navigateur (fichier hors du dossier de projet
      de la session, l'aperçu du Browser pane ne charge que des instantanés statiques pour les
      chemins externes) — à ouvrir directement par Franck (double-clic) pour un premier essai.
- [x] **Conversion DOCX** — 12/12 fichiers convertis via Word (COM PowerShell), `_convertir-docx.ps1`
      conservé dans le dossier pour reconversion après toute future modification du HTML.
- [x] **9 photos réelles sourcées et vérifiées à l'œil** (RAG HAL, `chercher-rag.js`) dans
      `images\` : pince coupante diagonale, pince à dénuder, jeu de tournevis (2 vues), pince à
      bec, pince multiprise débrayable, coupe-tube, mètre-ruban, cintreuse cuivre. Chaque photo
      est citée « D'après : [titre du fichier source] » dans les documents qui l'utilisent.

## Corrections apportées en cours de chantier (traçabilité)

1. **Erreur d'addition de 10 min dans le cadrage initial** (trame ATELIER 2h totalisait 130 min
   au lieu de 120) — repérée indépendamment par les rédacteurs de Séance 1, Séance 2 ET Dossier
   de séquence. Corrigée et harmonisée : phase 6 « Guider l'étude » = 50 min (au lieu de 60),
   phase 9 « Ranger-nettoyer » = 15 min (inchangée). Séance 1 et Séance 2 utilisent maintenant la
   même trame. Séance 3 (90 min) n'avait pas l'erreur.
2. **Passage en pédagogie de découverte stricte** (demande de Franck en cours de chantier) : la
   fiche d'identification de Séance 1 donnait initialement la réponse (tableau Famille→Fonction
   rempli) — corrigée en fiche à trous (photo + 2 colonnes vides), corrigé déplacé dans le
   document professeur uniquement.
3. **Ajout de photos réelles** (demande de Franck, RAG + base indexée mobilisés) dans les
   documents élève de Séance 1, Séance 2 et Séance 3 (voir tableau des sources dans l'addendum
   du cadrage).
4. **3 outils sans photo fiable trouvée** : clé à molette, tournevis testeur (le testeur trouvé
   dans la base était un multimètre, pas le petit tournevis testeur de la caisse), cintreuse
   plombier. Plusieurs candidats visuellement vérifiés et REJETÉS parce que mal étiquetés par la
   description automatique (ex. une clé à pipe proposée pour « clé à molette », un extracteur à
   griffes proposé pour « dudgeonnière ») — aucun forcé, case « photo à venir » à la place.
5. **Note technique** : les 3 agents de correction ont chacun terminé leur travail sur le disque
   avant de signaler une erreur d'infrastructure (API) en fin de tâche — vérifié fichier par
   fichier, rien n'est resté à moitié corrigé.

## Empaquetage livré à Franck

- `S0 - Dossier complet (professeur).zip` — tout le dossier (professeur + élève + images +
  cadrage + outil d'inventaire).
- `S0 - Dossier élève.zip` — uniquement les documents élève (Séance 1/2/3, Atelier Électrique et
  Façonnage bien séparés) + les images utilisées, prêt à distribuer sans donner les corrigés.

## Points ouverts (aucun résolu par invention)

1. **Dates réelles** de la séquence (rentrée 2026-27) et sa place exacte (avant S1 ou semaine 1
   jour 1) — à trancher par Franck.
2. **Photos réelles de l'atelier** à prendre pour clé à molette, tournevis testeur, cintreuse
   plombier (remplaceront les cases « photo à venir »).
3. **Encadrement** : nombre de professeurs pour les 2 ateliers en parallèle et pour la
   restitution croisée classe entière (Séance 3) — marqué « à confirmer selon dotation réelle ».
4. **Filière de recyclage des outils hors service** : signalée « à confirmer avec les services
   techniques de l'établissement » (aucune source ne la documente).
5. Texte définitif du copyright (récurrent usine).
6. **Bon à tirer Franck** — en attente sur pièce (HTML + DOCX déjà livrés cette fois, à la
   demande explicite de Franck, en écart assumé à la règle habituelle « docx après bon à tirer »
   utilisée pour S1).
7. **Chaîne d'indexation RAG** (`integrer-production.py` etc.) — **PAS encore lancée**, à faire
   seulement après le bon à tirer, conformément à la doctrine usine.

## Prochaines étapes

Après le bon à tirer de Franck : lancer la chaîne d'indexation complète (script
`integrer-production.py` puis `indexer.mjs`, `construire-explorateur.py`,
`importer-documents-rag` et `indexer-ressources-rag` côté HAL-v3) pour que S0 devienne
cherchable par HAL et par le moteur de recherche de l'usine.
