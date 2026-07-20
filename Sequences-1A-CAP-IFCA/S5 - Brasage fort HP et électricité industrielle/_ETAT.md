# État — Séquence S5 « Brasage fort (HP) + électricité industrielle » (1A CAP IFCA)

*Séquence produite le 18/07/2026 par l'usine FrigorX (chef d'orchestre + 9 rédacteurs + contrôle).
Cadrage : `_CADRAGE-S5.md`. Maître : `26-27\_PROGRESSION-1A-CODEE.md` (en attente bon à tirer global).*

## Statut : PRODUITE 18/07/2026 (21 documents HTML) — EN ATTENTE BON À TIRER FRANCK

| Document | État |
|---|---|
| Dossier de séquence S5.html | ✅ produit 18/07/2026 |
| S5-T0 Retour d'É2 (élève + prof) | ✅ produit 18/07/2026 |
| S5-F1 Brasage fort HP (plan + TP + corrigé) | ✅ produit 18/07/2026 |
| S5-F2 Préparation à l'épreuve azote (plan + TP + corrigé) | ✅ produit 18/07/2026 |
| S5-E1 Contacteurs et moteurs (plan + TP + corrigé) | ✅ produit 18/07/2026 |
| S5-E2 Schémas de commande industriels (plan + TP + corrigé) | ✅ produit 18/07/2026 |
| S5-T1 Pressostats et thermostats (élève + prof) | ✅ produit 18/07/2026 |
| S5-T2 Surchauffe / sous-refroidissement simulés (élève + prof) | ✅ produit 18/07/2026 |
| F3 Carnet de bord (élève + prof) | ✅ produit 18/07/2026 |

Contrôle mécanique passé (21/21 : polices, pieds de page, chemins d'images, balises équilibrées,
graphies) ; 3 correctifs appliqués par le chef d'orchestre : ordre de fermeture des gaz dans F3 élève
(combustible d'abord — conforme ED 742), chemin absolu retiré du corrigé E2, « Franck » → « l'enseignant »
dans un encadré du Dossier. ⚠ Correction de sécurité notable : le cadrage initial disait « fermer O₂
puis combustible » ; l'ED 742 dit l'INVERSE — cadrage corrigé, documents alignés sur la source.
## Contrôle (18/07/2026)

**Contrôle mécanique** (script, 21/21) : polices 14/13 pt, pieds de page datés, chemins d'images tous
existants, balises équilibrées, graphies normes, aucun chemin absolu, aucun statut Évaluation attribué.
**Contrôle de fond** (contrôleur dédié, lecture intégrale + totaux recomptés ligne à ligne) :
1 BLOQUANT corrigé — l'ordre de fermeture des gaz inversé subsistait dans le Dossier de séquence
(reliquat de l'erreur initiale du cadrage ; désormais partout « combustible d'abord, puis oxygène »,
conforme ED 742). Majeurs traités : encadré TP acier ramené à la phrase sobre ; annexe pleine page du
montage d'essai AJOUTÉE au TP S5-F2 (feuille 9) ; contradiction Découverte/Confortement réconciliée
dans le corrigé F2 (méthode découverte ≠ statut de compétence) ; « 6 à 8 fois l'intensité nominale »
dé-chiffré dans le corrigé E1 (« selon le moteur, à faire valider »). Arbitrages chef d'orchestre,
vérifiés sur pièce : oxygène ≈ 200 bar CONSERVÉ (sourcé ED 742) ; paragraphe pressostat combiné
CONSERVÉ (bien présent p. 15 du cours AFPA, le doute du contrôleur est levé) ; annexe A3 surnuméraire
d'E1 conservée (utile). Mineurs corrigés : titres des annexes E2 (« à compléter avec vos repères »),
encadré F1 harmonisé « depuis S3-F2 », prénom retiré d'un encadré du Dossier.
Conformes sans réserve : calendrier, OI-S5-1→4, brevets identiques F1/F3/Dossier, check-list azote
F2↔F3, auto-maintien réservé à E2, repères texte↔SVG, S5-T0, totaux 240/120 min exacts, seuils charte.
Note : S5-T0 réactive S2.1 (code officiel valide, hérité de S1) en plus de la liste du cadrage — assumé.

HTML seulement — sortie triple (PDF + docx natif) et intégration RAG APRÈS le bon à tirer.

## Points en attente (décisions Franck)

1. **S5-T0 = AJOUT au maître** (le tableau S5 ne liste que T1/T2) — remédiation post-É2, précédents
   S3-T2 et T0 de S10. À valider au bon à tirer.
2. **⚠ TP soudure acier (C3.5) EN SUSPENS — décision Franck 18/07** : le TP existant « Initiation
   chalumeau bain de fusion » (2ndes TNE, base : `01_2nde-TNE\Decouverte-Metiers\Initiation chalumeau
   bain de fusion.pdf`) sera FOURNI par Franck en temps et en heure. L'usine n'a rien produit ;
   le Dossier de séquence porte seulement un encadré « créneau réservé » (semaines flamme 14-15).
3. **Pression d'essai azote S5-F2** : le maître dit « 20 bar » (épreuve S6), la seule valeur sourcée
   de la base est « 10 bar minimum pendant 24 h » (`1 mise sous azote.docx`). Les documents écrivent
   « par paliers jusqu'à la valeur fixée par le professeur ». À trancher.
4. **Matériel réel à confirmer** : chalumeaux brasage fort (type/notice métal d'apport), nombre de
   platines contacteur/moteur, pressostats et thermostats disponibles en main pour T1, nombre de
   montages d'essai azote.
5. Dates réelles des semaines 14-17 (février-mars 2027, après PFMP1 si l'arbitrage n° 1 place PFMP1
   en janvier).
6. Copyright du pied de page (point ouvert global usine).
7. **S5-E2 — matériel réel du relais thermique** : le schéma de commande utilise les DEUX contacts
   auxiliaires standard d'un relais thermique (95-96 NF pour couper la bobine, 97-98 NO pour signaler
   le défaut via H2) — montage professionnel courant, à confirmer que le matériel de l'atelier possède
   bien ce second contact 97-98 (sinon variante sans H2 à prévoir). Schémas de commande et de puissance
   composés en SVG (`images\schema-commande-marche-arret*.svg`, `images\schema-puissance-moteur*.svg`),
   selon la méthode déjà utilisée en S3-E2, à valider au bon à tirer.
8. **S5-T2 — cas simulés construits pour le TD** : réglette P/T fictive (fournie dans l'énoncé, indépendante de
   tout fluide réel) + 4 installations fictives A-D (conforme · SC haute/SR basse · SC basse/SR haute · SC haute
   seule/SR correcte), calibrées sans ambiguïté au regard des seuils charte (SC 5-10 K, SR 4-8 K, différents des
   seuils du kit 25-26 et de la source docx, cités comme sources en fin de document sans reprise de
   leurs seuils). À valider au bon à tirer.

## Sources anciennes à rouvrir (formats non extraits, rien inventé à leur place)

`5.CHALUMEAU OA.doc` · `Le poste de soudage oxyacétylénique.doc` (×4 versions) · `brasure forte.doc` ·
`Doc Ressourses pompe à vide,Azote,manifold.DOC` · `Présentation matériel depart Moteur.ppt` ·
`Raccordement des moteurs électriques.doc` (tous sous `02_CAP-IFCA\`).

## Après bon à tirer (dans l'ordre)

1. Corrections éventuelles de Franck.
2. Sortie triple : PDF (Edge headless) + docx natif (`outils\docx-natif\docx-helpers.js`).
3. Intégration RAG : `python C:\git\usine-contenu\outils\integrer-production.py "<ce dossier>"`.
4. Mise à jour `_PROGRAMME-CAP-IFCA-1A-2A.md` + `programme-cap-ifca.json` + tableau de bord.
