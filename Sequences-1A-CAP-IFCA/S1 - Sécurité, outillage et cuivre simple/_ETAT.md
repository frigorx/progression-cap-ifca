# État de la séquence S1 — Sécurité, outillage et cuivre simple (1A CAP IFCA)

*Séquence PILOTE de la 1re année (cohorte 2026-2028). Maître : `26-27\_PROGRESSION-1A-CODEE.md`
(+ mise en forme `26-27\Dossier_Progression_1A_CAP_IFCA.html`) — le socle ET ce pilote sont
**EN ATTENTE DU BON À TIRER DE FRANCK**. Pilotage : `_CADRAGE-S1.md`. Période P1, semaines 1-4,
rotation demi-groupes, chaque module d'atelier vécu 2 fois (passage 1 découverte / passage 2 consolidation).*

## ✅ SÉQUENCE COMPLÈTE — HTML (16/07/2026), 19 documents

Produite par 8 rédacteurs Sonnet en parallèle (+ 1 pour le maître 1A), formes clonées des modèles
validés 2A (S11 atelier · S10-T0 théorie · S11-F3 carnet · S14 dossier de séquence), sous cadrage
du chef d'orchestre. Contrôle mécanique PASSÉ (19/19 : polices 14 pt élève / 13 pt prof vérifiées
dans le CSS, toutes les images existent, balises équilibrées, aucun statut « Évaluation » — interdit
en S1). Contrôle de fond (checklist Manuel §6) : rapport du contrôleur en cours, à annexer ici.

### Modules et livrables
- [x] **Dossier de séquence S1.html** — 6 feuilles (rotation 4 semaines, formule de Bowers, 9 pastilles
      Découverte, fil rouge sécurité, renvoi É1)
- [x] **S1-F1** Cuivre simple (coupe · cintrage · dudgeon) : plan + TP élève (2 633 mots) + corrigé —
      ateliers tournants 3 postes ; valeurs sourcées (rayon mini 3×D, 8 tours mini, 80 % des fuites
      au dudgeon — notices Tube cuivre AFPA/F. Cabeza)
- [x] **S1-F2** Sécurité froid + découverte du cycle : plan + TP élève (2 747 mots) + corrigé —
      visite-découverte guidée, croix du frigoriste construite par OBSERVATION (convention absolue
      respectée), fiche sécurité pleine largeur, **permis de travail atelier** (restitution du test
      sécurité TNE)
- [x] **S1-E1** Électricité domestique simple : plan + TP élève (2 590 mots) + corrigé — plan de
      travail à jalons (simple allumage → va-et-vient), contrôle HORS tension puis mise sous tension
      par le professeur, consignation posée en rituel ; 2 schémas SVG construits avec la bibliothèque
      de symboles (`schema-simple-allumage.svg`, `schema-va-et-vient.svg`) + 2 annexes A3 paysage
- [x] **S1-E2** Montages + multimètre : plan + TP élève (2 757 mots) + corrigé — postes tournants de
      mesure, images réelles extraites du TP 04 multimètre (cadran + circuit)
- [x] **S1-T1** Le cycle frigorifique, les bases (théorie 2 h) : élève (1 655 mots) + professeur —
      petit frère du T0 de 2A, simplifié semaine 1
- [x] **S1-T2** Les grandeurs électriques U/I/R (théorie 2 h) : élève (1 757 mots) + professeur —
      plaque moteur Leroy Somer réelle extraite d'Exercice 01 ; AUCUN triplet U/I/R inventé (calcul
      réel renvoyé à l'atelier S1-E2, choix documenté dans le doc professeur)
- [x] **F3** Carnet de bord : élève + professeur — page « mode d'emploi » (premier carnet), 5 fiches
      à rubriques + bilan, bon de commande Référence/Désignation/Quantité (gabarit réel Pecomark via 2A)
- [x] **Contrôle de fond PASSÉ (16/07)** — 0 bloquant ; 14 corrections appliquées et contre-vérifiées
      (encadrés Passage 1/2 ajoutés à F2/E1, échelle 0-4 complète en théorie, C3.4 complété ×5, conicité
      45° sourcée Cabeza, procédure d'urgence complétée, cos φ « à faire valider », etc.)
      + harmonisation ultérieure : sourçage F. Cabeza unifié dans le corrigé S1-F1 (passe S2 du même jour).
- [ ] **Bon à tirer Franck** (socle 1A + pilote S1, sur pièce)
- [ ] Sortie triple (PDF Edge + docx natif) — APRÈS bon à tirer, jamais avant
- [ ] Intégration RAG (`integrer-production.py`) — après sortie triple

### Images dans `images\`
Logos (2) · croix-frigoriste (svg+png) · fiche-securite-a-cocher · tubes-cuivre (2 photos) ·
multimetre-cadran-fonctions.png + schema-circuit-disjoncteur-interrupteur-lampe.png +
schema-circuit-tension-amont-aval.png (extraites TP 04, .odt→zip) · loi-d-ohm-thermique.png +
bouilloire-electrique.png (S4-Electricite) · plaque-signaletique-moteur-leroysomer.png (Exercice 01) ·
schema-simple-allumage.svg + schema-va-et-vient.svg (bibliothèque de symboles — AUCUNE image IA).

## Points ouverts (consolidés des 8 rédacteurs — AUCUN résolu par invention)
1. **Dates réelles** des semaines 1-4 (calendrier 2026-27) — partout « à confirmer ».
2. **Ordre F1/F2 dans la semaine 1** (quel module ouvre l'année ?) — recommandation : F2 (sécurité
   d'abord, permis de travail avant les gestes) ; à trancher.
3. Machine observée en S1-F2 : « selon la machine du poste, à faire valider ».
4. Diamètres/longueurs des tubes distribués (F1) : « selon le stock de l'atelier ».
5. Bibliothèque de symboles : pas de symbole « lampe » dédié (voyant IEC utilisé et signalé, E1) ;
   pas de symboles voltmètre/ampèremètre/ohmmètre (photos réelles utilisées à la place, E2).
6. F3 : découpage en 5 fiches (4 ateliers + 1 théorie générique) au lieu de 6 — à valider.
7. Rendu visuel des 2 SVG élec et du maître 1A : vérifié par calcul, relecture visuelle conseillée.
8. Récurrents usine : texte définitif du copyright · PNG logos officiels.
+ Les **8 arbitrages du maître 1A** (`_PROGRESSION-1A-CODEE.md` §5) — aucun ne bloque S1.

## Prochaines étapes (après bon à tirer)
S2 → S9 : un chat par séquence, même moule (cadrage depuis le maître codé + restitution + rédacteurs
Sonnet + contrôleur). S2 embarque l'évaluation sommative É1 (S1-S2, semaine 7, C3.4·C3.6·C4.5).
