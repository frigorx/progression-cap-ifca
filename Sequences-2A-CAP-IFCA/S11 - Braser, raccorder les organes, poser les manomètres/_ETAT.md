# État de la séquence S11 — Braser, raccorder les organes, poser les manomètres

*Convention modulaire (usine FrigorX, modèle validé 05/07/2026) : une séquence = un assemblage de
**modules indépendants ≤ 4 h** (ateliers 4 h · théorie 1 h · carnet F3 2 h) + une évaluation sommative
1 h. PLUS de « séance de 8 h ». Un dossier par module ; à la racine le **Dossier de séquence** (vue
modulaire) + ce `_ETAT.md`. Pilotage complet : `_CADRAGE-S11.md`.*

## Cadrage (05/07/2026)
- S11 = semaines 4-6 de P5 (module A2 : brasage + raccordement organes + pose manomètres) +
  **évaluation sommative conjointe S10-S11 en semaine 7** (C3.3 · C3.4 · C4.5, remontée École Directe).
- **7 modules** : 3 ateliers 4 h (A2-a, A2-b, A2-c) · 2 théorie 1 h (T1, T2) · 1 carnet de bord F3 (2 h continu) · 1 éval sommative 1 h.
- Seuils autorisés seuls : surchauffe **5-10 K**, sous-refroidissement **4-8 K**. S2.4 → S2.1 (S2.4 inexistant).

## Découpage modulaire (voir `_CADRAGE-S11.md`)
| Module | Type | Durée | Sem. | Contenu | Compétences (statut) |
|---|---|---|---|---|---|
| A2-a | Atelier | 4 h | 4 | Brasage + raccordement ligne liquide (filtre, voyant, prises de pression) | C3.4 Conf.→Éval · C4.7 Découverte |
| T1 | Théorie | 1 h | 4 | Le détendeur · la surchauffe | S5.1 Découverte |
| A2-b | Atelier | 4 h | 5 | Façonnage complexe + pose des manomètres | C3.4 Éval · C4.5 Déc.→Conf. |
| A2-c | Atelier | 4 h | 6 | Fin ligne liquide + pose mano complète + relevé pressions + préréglage banc | C4.5 Conf.→Éval · C4.6 Découverte |
| T2 | Théorie | 1 h | 6 | Surchauffe/sous-refroidissement · incondensables | S5.1·S5.2 Déc.→Conf. |
| F3 | Fil de l'eau | 2 h | 4-6 | Carnet de bord (continu) | C1.3·C2.1 Confortement |
| Éval | Sommative | 1 h | 7 | S10-S11 | C3.3·C3.4·C4.5 Évaluation |

## Avancement (refonte modulaire, 05/07/2026)
- [x] Cadrage modulaire (`_CADRAGE-S11.md`) + `_ETAT.md`
- [x] **A2-a** (dossier `Séance 1 …`) : plan (pilote de forme validé Franck) + TP + corrigé **recalés 8 h → 4 h / 2 jalons**
- [x] **A2-b** (dossier `Séance 2 …`) : plan + TP + corrigé **recalés 4 h / 2 jalons** (relevé sous pression réelle renvoyé à A2-c)
- [x] **A2-c** (dossier `Séance 3 …`) : plan + TP + corrigé **recalés 4 h / 2 jalons** (relevé migré d'A2-b + préréglage banc ; théorie SC/SR sortie vers T2)
- [x] **T1** (dossier `T1 …`) : Document élève + Document professeur **créés** (théorie 1 h)
- [x] **T2** (dossier `T2 …`) : Document élève + Document professeur **créés** (théorie 1 h)
- [x] **F3** (dossier `F3 …`) : Document élève (carnet) + Document professeur **créés** (fil de l'eau 2 h)
- [~] **Dossier de séquence S11** : refonte en vue modulaire EN COURS (rédacteur Sonnet)
- [x] Contrôle qualité groupé (14 pt élève / 13 pt prof, totaux horaires exacts 4 h et 60 min, codes référentiel, seuils SC/SR, grilles 0-4) — PASSÉ
- [ ] Sortie triple (HTML + PDF Edge headless + docx natif) — **APRÈS validation Franck**
- [ ] Validation Franck (sur pièce)

## Passe de restitution (13/07/2026)
Réinjection du travail réel de Franck dans les modules théorie + réglages, sur totaux horaires et grilles
inchangés (contrôle passé, voir plus bas).
- **T2** (élève+prof) : définitions enrichies du kit `sr sch new coplet htlm\cours_surchauffe_sous_refroidissement.html`
  (vapeur sèche / liquide pur) + mémo « sch↔compresseur, SR↔charge&condenseur » ; tableau des 4 relevés de
  l'Application remplacé par 2 installations réelles du kit (« conforme » et « manque de fluide », R449A),
  seuils recalibrés 7→10 K (surchauffe) et 7→8 K (sous-refroidissement) sur la charte — aucun des cas réels
  utilisés n'était sensible à ce recalage (valeurs 6/5/15/3 K, loin des anciennes bornes 7 K).
- **T1** (élève+prof) : exercice 2 remplacé par les 4 cas réels chiffrés et le schéma-source de
  `2 FCA Révision surchauffe.docx` (+ CORRECTION) ; démarche pas-à-pas ajoutée ; images
  `schema-calcul-surchauffe-4-cas.png` (élève) et `-corrige.png` (prof) extraites du docx. Le document
  `deroulment CALCULE D'UNE SURCHAUFFE.docx` cité dans la commande s'est révélé être une simple fiche de
  planning de séance sans contenu chiffré : substitué par le vrai TD chiffré du même dossier
  (`2 FCA Révision surchauffe`), même thème, même dossier source.
- **A2-c** (élève+prof+plan) : préréglage banc générique remplacé par la méthode chiffrée réelle de
  `PROCEDURE REGLAGE PRESSOSTAT BP SECURITE.docx` et `...HP SECURITE.docx` (tables coupure/différentiel/
  enclenchement réelles, exemple région Nîmes) ; vérification sous pression réelle explicitement renvoyée à
  une séance ultérieure de mise en service (cohérent avec la contrainte hors tension/hors fluide du module).
  Exercice au fil de l'eau (phase 4, jusque-là seulement décrit dans le plan) matérialisé avec un cadran
  réaliste EN 837-1 réel (`cadran-manometre-en837-cas1-r134a.png`, source `Exercices_rapides\manometres\`).
- **F3** (élève+prof) : rubrique « Matériel manquant → bon de commande » alignée sur le vrai gabarit
  `bond de commande le froid.docx` (Le Froid Pecomark) — colonne Référence ajoutée (structure
  Article/Désignation/Qté du gabarit réel) + exemples de désignations réelles (pressostat KP1 BP,
  déshydrateur DCY032, voyant liquide VYCL22…). Image du devis réel non intégrée (nom et données de compte
  d'un tiers sur le document scanné) : seule la structure des champs et les désignations d'articles sont
  reprises, pas les données commerciales/personnelles.
- **Évaluation sommative S10-S11 (corrigé)** : 5 renvois périmés « séance 1 de S11 » → « module A2-a » et
  1 renvoi « séance 3 de S11 » → « module A2-c (et T2) » corrigés. Sujet élève et Plan de passation
  contiennent la même formulation périmée mais n'étaient pas dans le périmètre de cette passe — à traiter
  si besoin dans une prochaine passe.
- **Images ajoutées** dans `images\` : `schema-calcul-surchauffe-4-cas.png`,
  `schema-calcul-surchauffe-4-cas-corrige.png`, `cadran-manometre-en837-cas1-r134a.png` — toutes réelles,
  extraites de documents Word (zip → word/media) ou copiées depuis un exercice HTML de Franck, aucune image IA.
- **Auto-contrôle passé** : totaux 60 min (T1, T2) et 240 min (A2-c) exacts et inchangés ; recherche
  « 5-7 » / « 4-7 » = zéro occurrence dans tout le dossier S11 ; corps 14 pt élève / 13 pt professeur
  vérifiés dans le CSS de chaque document touché ; chemins d'images vérifiés valides.

## Inchangé (ne pas toucher)
- **Évaluation sommative S10-S11** (dossier `Évaluation sommative S10-S11 (semaine 7)`) : DÉJÀ bonne, conservée.
- Schémas de `images\` : réutilisés tels quels.

## Points ouverts
- Prépa de chantier : A2-a = 60 min (phase 5 à 20 min), A2-b et A2-c = 55 min (phase 5 à 15 min) — tous ≤ 1 h, cohérents ; harmonisation 60/60 possible si Franck préfère.
- Dossiers d'atelier encore nommés « Séance 1/2/3 » (contenu = « module A2-a/b/c ») : renommage des dossiers possible en polish final.
