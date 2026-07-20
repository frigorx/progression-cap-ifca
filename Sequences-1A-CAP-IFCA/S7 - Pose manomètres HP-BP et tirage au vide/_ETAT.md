# État — Séquence S7 « Pose manomètres HP/BP + tirage au vide réel » (1A CAP IFCA)

*Séquence produite le 19/07/2026 par l'usine FrigorX (chef d'orchestre + 8 rédacteurs + contrôle).
Cadrage : `_CADRAGE-S7.md`. Maître : `26-27\_PROGRESSION-1A-CODEE.md` (en attente bon à tirer global).*

## Statut : PRODUITE 19/07/2026 (19 documents HTML) — EN ATTENTE BON À TIRER FRANCK

| Document | État |
|---|---|
| Dossier de séquence S7.html | ✅ produit 19/07/2026 |
| S7-T0 Retour d'É3 (élève + prof) | ✅ produit 19/07/2026, corrigé post-contrôle |
| S7-F1 Pose manomètres HP-BP (plan + TP + corrigé) | ✅ produit 19/07/2026, corrigé post-contrôle |
| S7-F2 Tirage au vide réel (plan + TP + corrigé) | ✅ produit 19/07/2026 |
| S7-E1 Régulations simples — premier réglage (plan + TP + corrigé) | ✅ produit 19/07/2026, corrigé post-contrôle |
| S7-E2 Coffret clim et câblage (plan + TP + corrigé) | ✅ produit 19/07/2026, corrigé post-contrôle |
| S7-T1 Lecture de relevés (élève + prof) | ✅ produit 19/07/2026, corrigé post-contrôle |
| F3 Carnet de bord (élève + prof) | ✅ produit 19/07/2026 |

HTML seulement — sortie triple (PDF + docx natif) et intégration RAG APRÈS le bon à tirer.

## Contrôle (19/07/2026)

**Mécanique** (script, 19/19) : polices, pieds, chemins d'images, balises, graphies, aucun chemin
absolu, aucune image filigranée, aucun contenu pump down (seules les mises en garde), aucune valeur
de vide chiffrée. Les 2 SVG du coffret (E2) validés VISUELLEMENT par le chef d'orchestre (rendu PNG
Edge : schéma complet correct — Q1/KM1/F1/M1, commande avec TH1 en série, H1 après TH1, H2 sur 97-98 ;
variante sans repères bien vidée).
**Fond** (contrôleur dédié, 13 points, lecture intégrale) : **1 BLOQUANT corrigé** — statut C3.6
gonflé en « vers Maîtrise » dans les encadrés de S7-E1 (le cadrage le réserve à E2 ; coquille prouvée
par le propre corps du document). **6 MAJEURS corrigés** : repère TH1 introduit dans E1 (continuité
d'objet avec E2, 24 emplacements) ; encadré Passage 1/2 ajouté au TP élève E2 + rotations du passage 2
réalignées (« la pause n'est pas une nouvelle rotation ») ; T15 désattribué de T1 (résidu) ; mini-cas
de T1 renommés postes fictifs X/Y/Z (collision avec les postes réels 1-12) ; fausse équivalence T0 ↔
exercice 3 d'É3 reformulée. Mineurs traités au passage : T12 libellé complet (F1), sources du poste
étanchéité T0 réattribuées à S5-F2, harmonisations E2, notation T1 unifiée, « D'après » ajouté au
Plan E1. Conformes sans réserve : calendrier, OI, F3↔annexes réelles des 4 ateliers, T0↔grille É3,
auto-maintien acquis (jamais re-présenté), repères identiques textes↔SVG, totaux 240/120 recomptés,
libellés officiels mot à mot, sécurité.

## Points en attente (décisions Franck)

1. **S7-T0 = AJOUT au maître** (remédiation post-É3, précédents S3-T2/S5-T0). À valider.
2. **Niveau de vide cible (S7-F2)** : aucune valeur sourcée exploitable (l'image d'archives
   `tirage_au_vide_valeur_de_pression_a_atteindre.jpg` a été écartée : filigrane commercial tiers
   e-genieclimatique.com + valeur aberrante) → « fixé par le professeur » partout. Valeur réelle
   de l'atelier à fournir.
3. **Machines support de F1** : lesquelles, combien de postes manifold ; pose sur machine EN CHARGE
   sous supervision directe (cadre 1A rappelé au cadrage).
4. **Matériel E1** : coffrets thermostat/pressostat disponibles ; cahier des charges client type
   (consignes) à fournir par Franck.
5. **Plan réel du coffret clim E2** : le TP modèle `25 26\...\tp cablage pu co reperage.pdf` fait-il
   foi tel quel ?
6. **Pompes à vide / vacuomètres** : combien de postes pour F2.
7. Dates réelles sem. 22-25 (avril 2027) · copyright.
8. **S7-F1 — décision de rédaction à confirmer** : la DÉPOSE du manifold est volontairement simplifiée
   (fermeture vanne de service + purge brève + débranchement + rangement), SANS manœuvre de pump down
   réelle (interruption de la circulation de fluide, descente BP au pressostat) — ce geste plus avancé
   est renvoyé à plus tard, pour rester au niveau 1A/Découverte et éviter tout chevauchement avec le
   pump down comme stratégie de régulation (2A, S12). À valider par Franck au bon à tirer.
9. **S7-F2 produit (19/07/2026)** : 3 875 mots au TP élève, corps 14 pt vérifié. Images extraites et
   ajoutées à `images\` : `pompe-a-vide-schema-legende.jpeg` (12 repères, D'après : ressource tirage au
   vide.docx), `schema-principe-tirage-au-vide.jpeg` (D'après : ressource tirage au vide.docx),
   `pompe-a-vide-photo.png` et `vacuometre-digital-photo.png` (D'après : tirage au vide 24.docx),
   `pompe-a-vide-en-service.png` (D'après : S5S1 POSE MANIFOLD ET TIRAGE AU VIDE PROF.docx). Symboles
   génériques `pompe_electrique.svg` et `manometres.svg` réutilisés et signalés comme génériques dans le
   document élève (aucun symbole dédié « pompe à vide »/« vacuomètre » dans la bibliothèque). Annexe
   pleine page « repère millimétré » construite en SVG maison (axe des pressions volontairement NON
   gradué, à écrire par l'élève). Courbe « allure attendue » du document professeur également en SVG
   maison, sans valeurs chiffrées. Aucun niveau de vide ni durée de tirage affirmés (cf. point 2).
   Table pression/température de saturation de l'eau trouvée dans les sources (ex. 15 °C → 17,0-17,2 mbar
   selon la source) : VOLONTAIREMENT NON reproduite (cadrage : « sans table chiffrée ») — seul le principe
   qualitatif est utilisé, avec renvoi à S4-T1. Écart mineur noté entre les sources sur la durée de
   fonctionnement de la pompe (« demi-heure à plusieurs jours » selon tirage au vide.docx vs « 1/2h à
   plusieurs heures » selon ressource tirage au vide.docx) : non tranché, aucune durée n'est affirmée dans
   les documents produits.

10. **S7-T1 produit (19/07/2026)** : 2 617 mots au document élève, corps 14 pt vérifié (13 pt professeur).
    Méthode « exploitation des relevés réels de la classe » (chaque binôme apporte ses relevés F1/carnet
    F3) : cœur du module = un tableau collectif ANNEXE pleine page (Machine/HP lue/BP lue/T réglette/T
    mesurée/SC ou SR/verdict), la réglette P/T et les seuils SC 5-10 K / SR 4-8 K étant repris À
    L'IDENTIQUE de S4 et S5-T2 (continuité assumée, même valeurs). 3 mini-cas fictifs de « chasse aux
    valeurs aberrantes » + 2 cas de secours fictifs (postes E/F) pour les binômes sans relevé exploitable —
    aucune valeur de pression de machine réelle affirmée nulle part. Exercices de lecture de cadrans
    d'après la série « EvaL lecture mano un/2/3.odt » de l'enseignant (restitution du PRINCIPE des
    exercices, pas des images : les photos de cadrans de cette série portent le même filigrane commercial
    tiers `e-genieclimatique.com` déjà écarté en S5-T1/S7-F2 — vérifié en ouvrant les .odt, images NON
    reprises). Images retenues à la place : 2 cadrans génériques SANS mention commerciale, extraits de
    `25 26\vrac fiep 3\Exercices_rapides\manometres\` (`cadran-manometre-bp-hp-generique.png`,
    `cadran-manometre-zone-verte-generique.png`, copiés dans `images\`) + 2 cadrans d'entraînement à
    aiguille fixe construits en SVG maison (aucune valeur de machine réelle). Point conditionnel de
    l'énoncé (erreurs bar/mbar, pression relative/absolue) traité en « point en attente » côté professeur :
    les sources ne documentent pas cette distinction, non introduite comme objectif du module. Colonne
    « Poste / groupe » du tableau collectif volontairement générique (12 lignes) : les machines support de
    F1 ne sont pas encore arrêtées (point 3 ci-dessous).

## Sources anciennes à rouvrir (formats non extraits)

`tp tirage au vide.doc` · `Tirage au vide, charge en fluide.DOC` · `Manifold, tirage au vide,
détection.DOC` · `10498-3 tirage au vide.PPT` (AFPA) — sous `02_CAP-IFCA\` et `_Archives\`.

## Après bon à tirer (dans l'ordre)

1. Corrections éventuelles de Franck.
2. Sortie triple : PDF (Edge headless) + docx natif (`outils\docx-natif\docx-helpers.js`).
3. Intégration RAG : `python C:\git\usine-contenu\outils\integrer-production.py "<ce dossier>"`.
4. Mise à jour `_PROGRAMME-CAP-IFCA-1A-2A.md` + `programme-cap-ifca.json` + tableau de bord.
