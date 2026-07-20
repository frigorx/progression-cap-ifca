# État de la séquence S15 — Finir le chantier, poser le climatiseur, mettre en service, documenter

## ✅ SÉQUENCE COMPLÈTE — HTML (09/07/2026), 13 documents — EN ATTENTE DE BON À TIRER

Période **P8**, semaines **19-21**, 2A CAP IFCA. Phase chantier **A6 — finition & MES autonome**.
Dernière séquence de contenu avant le **CCF EP3** (dont le blanc sera produit avec S16). Cadrage autoritaire
= progression annuelle. Détails, codes et sources : `_CADRAGE-S15.md`.
Contrôle chef d'orchestre PASSÉ : élève 14 pt / prof 13 pt, pieds de page 13/13, images OK, grilles 0-4 ≤ 4 comp., zéro invention.

### Modules et livrables
- [x] **Dossier de séquence S15** — page de garde + plan modulaire + contribution EP2/EP3 (HTML de référence produit 09/07/2026 — en attente bon à tirer Franck ; semaines A6-a/A6-b à confirmer, cf. points d'attention)
- [x] **A6-a** Pose et raccordement du climatiseur split : Plan · Document élève (TP, ~2220 mots) · Document professeur — fait 09/07/2026, HTML de référence, en attente bon à tirer Franck
- [x] **A6-b** Mise en service autonome + validation : Plan · Document élève (TP, ~2530 mots) · Document professeur — fait 09/07/2026
- [x] **T1** Le dossier technique / DOE + fiche machine QR : Document élève · Document professeur — fait 09/07/2026 (2 schémas SVG maison : flux DOE + pictogramme fiche machine QR)
- [x] **F6** Dossier technique (au fil de l'eau) : Document élève · Document professeur — fait 09/07/2026
- [x] **F3** Carnet de bord : Document élève · Document professeur (HTML de référence produit 09/07/2026 — en attente bon à tirer Franck)

### Contrôle qualité — A6-b (09/07/2026)
Corps élève **14 pt vérifié** (prof/plans 13 pt) · grille **0-4** à critères observables + savoir-être +
auto-positionnement · **3 compétences** (≤ 4) : C4.1 Évaluation · C4.5 Évaluation · C4.6 Confortement · totaux
horaires **exacts** (240 min) · **zéro invention** (seuls seuils SC 5-10 K / SR 4-8 K ; charge, quantités et
réglages « selon plaque signalétique / notice, à faire valider » ; table pression-température vierge en annexe,
à compléter par le professeur selon le fluide du poste) · images référencées présentes (`images\`) · méthode
situation-problème/autonomie maximale (répétition CCF EP3) appliquée sans pas-à-pas dans le document élève.

### Contrôle qualité — A6-a (09/07/2026)
Corps élève **14 pt vérifié** · grille **0-4** à critères observables + savoir-être + auto-positionnement ·
**3 compétences** (≤ 4) : C2.3 Confortement · C4.4 Confortement→Évaluation · C4.7 Évaluation · totaux
horaires plan de séance **exacts** (240 min = 60 prépa chantier + 125 guider l'étude + 15 pause + 40 clôture) ·
**zéro invention** (seuls seuils SC 5-10 K / SR 4-8 K ; longueur de liaison, couple de serrage flare, charge
et seuil de tirage au vide = « selon notice du climatiseur, à faire valider ») · schéma d'implantation UE/UI
construit avec les symboles de la bibliothèque inerWeb (`frigo_schema` : compresseur, condenseur à air,
ventilateur hélicoïde/centrifuge, vanne d'isolement ×2, manomètres, détendeur, filtre déshydrateur) — vérifié
au navigateur (10 symboles rendus, aucun bbox vide, un chevauchement de texte détecté et corrigé) ; version
réduite dans le TP + annexe pleine page A3 ; enveloppes UE/UI, mur, passage et évacuation des condensats =
éléments schématiques génériques (pas de symbole normalisé dans le catalogue pour ceux-là, signalé dans le
document) ; azote/tirage au vide illustrés en réutilisant `schema-fluidique-manifold-pompe-a-vide.png` déjà
présent dans `images/` (pas de nouvelle image inventée) · méthode plan de travail à jalons appliquée.

### Passe de restitution A6-a (13/07/2026)
Réinjection du travail réel de F. Henninot dans le module A6-a (Plan · Document élève TP · Document professeur),
qui avait été largement créé ex nihilo le 09/07/2026. Imports :
- **TP 1 implantation et fixation d'un climatiseur mono split** (`03_BAC-MFER/S2-Systemes`) : cotes du gabarit
  UI (58,5 × 58,5 cm), du support mural UE (116 × 39 cm), dégagement mini UE (150 mm) ; structure de la fiche
  compte rendu en 4 parties (préparation/procédure/analyse/bilan), qui remplace le « rapport 5-10 lignes » —
  nouvelle Feuille 6 dans le Document élève.
- **TP 2 Raccordement fluidique d'un climatiseur mono split RAHMOUNI** (`02_CAP-IFCA/C3-Realiser`, .doc ancien,
  extrait via Word en lecture seule) : diamètres de tubes 1/4″ et 3/8″, rappel de l'écrou à glisser avant le
  dudgeon, épreuve d'étanchéité à l'azote 10 bars.
- **TP 3 Raccordement électrique d'un climatiseur mono split RAHMOUNI** (idem, .doc ancien) : codes couleur
  (phase rouge, neutre bleu, borniers 1-4 noir/bleu/marron/gris, terre jaune-vert), sections 3×1,5 mm²
  (alimentation) et 5×1,5 mm² (liaison UE-UI), test de continuité.
- **MONTAGE CLIMATISEUR SPLIT**, fiche procédure (`03_BAC-MFER/S2-Systemes`) : correction de la pente
  d'évacuation des condensats, **1 % → 3 cm/m au moins** (valeur exacte de Franck), partout où elle apparaissait
  (texte + 3 schémas SVG, dont un piège d'indentation qui avait fait échapper une occurrence au premier passage).
- 3 images réelles extraites des `.docx` sources (word/media) et copiées dans `images/` : dégagements minima UE
  (A-E, mm), plaque de montage UI (cotes, orifice mur, sorties tuyaux), support mural antivibratile UE.
- Grilles 0-4 des 3 compétences (C2.3, C4.4, C4.7) enrichies de critères observables sourcés (dégagement 150 mm,
  pente ≥ 3 cm/m, azote 10 bars) — barèmes chiffrés des sources transposés en critères, pas en note sur 40.
- Correction de la date du Plan de séance : 16-20/03/2026 → 16-20/03/2027.
- Corrigé A6-a : transition A6-b reformulée (contredisait le module A6-b, dont la mise en service porte sur le
  groupe frigorifique du chantier, pas sur le split) — même correction reportée dans le Plan et le Document
  élève pour rester cohérent. A6-b non modifié.
- Sources « D'après » mises à jour dans les 3 documents.
- Non importé : contenu texte des deux TP RAHMOUNI au-delà des valeurs déjà vérifiées (fichiers .doc anciens,
  extraction Word COM limitée au texte, pas aux schémas annotés) ; images des TP RAHMOUNI non extraites (format
  .doc, hors procédure zip standard) — valeurs déjà sourcées suffisantes, pas de lacune identifiée.

### Points d'attention connus
- A6-a a été recalé par restitution le 13/07/2026 (voir ci-dessus) ; reste « selon notice/plaque signalétique,
  à faire valider » : longueur exacte de liaison, couple de serrage flare, valeur cible du tirage au vide.
- A6-a : aucun symbole normalisé trouvé dans le catalogue pour « unité extérieure/intérieure » (enveloppe),
  « passe-mur / manchon d'étanchéité », « fixation antivibratile » ni « dudgeon/flare » — remplacés par des
  éléments schématiques génériques (boîtes, cercle de passage, traits), pas par des symboles inventés.
- **Pas d'éval sommative propre à S15** : la sommative S15-S16 = **CCF EP3** (rangé avec S16).
- S15 **enjambe la PFMP4** (entre sem. 19 et 20).
- ⚠️ **Répartition A6-a (sem. 19) / A6-b (sem. 21) dans le Dossier de séquence = une interprétation** de la
  carte hebdo (le cadrage ne fixe pas de semaine par module ; « pose climatiseur » apparaît sem. 19 ET 20
  côté Élec/M&S) — à confirmer par Franck avant bon à tirer.
- Chemin des images du Dossier de séquence : `images/...` (dossier à la racine de S15, comme S12) — la
  fiche de brief mentionnait `../images/...`, corrigé car les images sont déjà dans `S15/images/`.

## En attente de Franck
Bon à tirer → sortie triple (PDF + docx natif) → intégration RAG. Arbitrages : voir `_CADRAGE-S15.md`.
