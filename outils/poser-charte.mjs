#!/usr/bin/env node
// =====================================================================
// POSER LA CHARTE 2A — injecte la charte unique dans les documents HTML
// ---------------------------------------------------------------------
// LE PROBLÈME (mesuré le 28/08/2026 sur la S10)
//   Les 14 documents portaient chacun leur bloc <style> recopié à la main :
//   90 Ko de CSS, 240 règles distinctes, dont 144 présentes dans un seul
//   fichier. Corriger une couleur demandait d'ouvrir 14 fichiers — 73 pour
//   la 2e année entière.
//   Et aucun document n'avait <!DOCTYPE>, <html>, <head> ni <body> : ce sont
//   des fragments, rendus en mode « quirks », où l'impression ne se comporte
//   pas comme en mode standard.
//
// CE QUE FAIT L'OUTIL
//   1. Enveloppe le document dans une vraie page HTML (doctype, lang="fr").
//   2. Pose `data-public` sur <body> : c'est lui qui commande la taille du
//      corps — 14 pt élève / 13 pt professeur. La règle la plus sensible de
//      l'usine cesse d'être recopiée à la main dans chaque fichier.
//   3. Injecte la charte + la feuille d'impression entre deux marqueurs.
//   4. PRÉSERVE le CSS propre au document, placé APRÈS la charte : en cas de
//      conflit, le document garde la main. On ne casse aucun rendu.
//   5. Retire du CSS propre les règles STRICTEMENT identiques à la charte
//      (doublon pur, sans risque) et SIGNALE celles qui divergent, sans y
//      toucher — un écart de mise en page se tranche à l'œil, pas en série.
//
// IDEMPOTENT : relançable. Les marqueurs délimitent la zone gérée par
// l'outil ; tout ce qui est en dehors est laissé tel quel.
//
// Usage :
//   node outils/poser-charte.mjs "<dossier>"            → simulation (rien écrit)
//   node outils/poser-charte.mjs "<dossier>" --ecrire   → applique
// =====================================================================

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, basename, dirname, resolve } from 'node:path';

const DEB = '/* ===== CHARTE-2A : DÉBUT — zone gérée par outils/poser-charte.mjs ===== */';
const FIN = '/* ===== CHARTE-2A : FIN ===== */';
const DEB_SPEC = '/* ----- Propre à ce document ----- */';

const racineDepot = resolve(new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
const dossierCharte = join(racineDepot, 'Sequences-2A-CAP-IFCA', '_charte');

// ---------------------------------------------------------------- outils CSS
const RE_STYLE = /<style[^>]*>([\s\S]*?)<\/style>/gi;
const RE_REGLE = /([^{}]+)\{([^{}]*)\}/g;

/** Normalise un corps de règle : ni le « ; » final ni les espaces ne comptent. */
function normCorps(corps) {
  return corps.split(';').map(d => d.trim().replace(/\s+/g, ' ')).filter(Boolean).join('; ');
}

/** Rend une Map {sélecteur → corps normalisé} pour le CSS HORS @media/@page. */
function reglesDe(css) {
  const horsMedia = css.replace(/@(media|page|supports)[^{]*\{(?:[^{}]|\{[^{}]*\})*\}/g, '');
  const sansCom = horsMedia.replace(/\/\*[\s\S]*?\*\//g, '');
  const m = new Map();
  let r;
  RE_REGLE.lastIndex = 0;
  while ((r = RE_REGLE.exec(sansCom))) {
    const sel = r[1].trim().replace(/\s+/g, ' ');
    if (!sel || sel.startsWith('@')) continue;
    m.set(sel, normCorps(r[2]));
  }
  return m;
}

// ------------------------------------------------------------------ le public
// La taille du corps en dépend : 14 pt élève, 13 pt professeur.
// En cas de doute on retient « professeur » : un document de travail trop
// petit se corrige, un document élève trop petit part en classe.
function publicDe(chemin) {
  const n = basename(chemin).toLowerCase();
  if (n.includes('élève') || n.includes('eleve')) return 'eleve';
  if (n.includes('sujet')) return 'eleve';
  return 'professeur';
}

// ------------------------------------------------------------------- fichiers
function htmlsDe(racine) {
  const out = [];
  (function marche(d) {
    for (const n of readdirSync(d)) {
      if (n.startsWith('.') || n.startsWith('_versions-perimees') || n === 'node_modules') continue;
      const p = join(d, n);
      if (statSync(p).isDirectory()) marche(p);
      else if (n.toLowerCase().endsWith('.html')) out.push(p);
    }
  })(racine);
  return out.sort();
}

// ---------------------------------------------------------------------- corps
function traiter(chemin, charte, impression, reglesCharte) {
  const src = readFileSync(chemin, 'utf8');
  const dejaFait = src.includes(DEB);

  // 1. Le CSS actuel : tous les blocs <style> réunis.
  const blocs = [];
  let m;
  RE_STYLE.lastIndex = 0;
  while ((m = RE_STYLE.exec(src))) blocs.push(m[1]);
  let cssActuel = blocs.join('\n');

  // Sur une seconde passe, on ne relit que le spécifique : la zone gérée est
  // remplacée, pas réanalysée (sinon la charte se ferait absorber comme
  // « spécifique » et l'outil ne serait plus idempotent).
  if (dejaFait) {
    const i = cssActuel.indexOf(DEB_SPEC);
    cssActuel = i >= 0 ? cssActuel.slice(i + DEB_SPEC.length) : '';
  }

  // 2. Trier le spécifique : doublon pur → retiré ; divergence → conservée et signalée.
  const reglesDoc = reglesDe(cssActuel);
  const doublons = [];
  const divergences = [];
  for (const [sel, corps] of reglesDoc) {
    if (!reglesCharte.has(sel)) continue;
    if (reglesCharte.get(sel) === corps) doublons.push(sel);
    else divergences.push({ sel, doc: corps, charte: reglesCharte.get(sel) });
  }

  // Retrait des doublons stricts, règle par règle.
  // ⚠️ On met les blocs @media à l'abri d'abord : une règle peut y être
  // identique à celle de la charte tout en ayant un rôle différent (les
  // règles d'impression du document ne doivent pas disparaître).
  const abris = [];
  let cssSpec = cssActuel.replace(
    /@(media|page|supports)[^{]*\{(?:[^{}]|\{[^{}]*\})*\}/g,
    (bloc) => { abris.push(bloc); return `/*__ABRI${abris.length - 1}__*/`; }
  );

  for (const sel of doublons) {
    const echap = sel.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    cssSpec = cssSpec.replace(new RegExp(`(^|\\})\\s*${echap}\\s*\\{[^{}]*\\}`, 'g'), '$1');
  }
  // La taille du corps n'est plus écrite en dur : c'est `data-public` qui commande.
  cssSpec = cssSpec.replace(/(\bbody\s*\{[^{}]*?)font-size\s*:\s*1[34]pt\s*;?/g, '$1');

  cssSpec = cssSpec.replace(/\/\*__ABRI(\d+)__\*\//g, (_, i) => abris[+i]);
  cssSpec = cssSpec.replace(/\n{3,}/g, '\n\n').trim();

  // 3. Reconstruire le document.
  const pub = publicDe(chemin);
  const titre = (src.match(/<title>([\s\S]*?)<\/title>/i) || [, ''])[1].trim();

  // Le corps = tout ce qui n'est ni <meta>, ni <title>, ni <style>, ni l'enveloppe.
  let corpsDoc = src
    .replace(RE_STYLE, '')
    .replace(/<meta[^>]*>/gi, '')
    .replace(/<title>[\s\S]*?<\/title>/gi, '')
    .replace(/<!DOCTYPE[^>]*>/gi, '')
    .replace(/<\/?(html|head|body)[^>]*>/gi, '')
    .trim();

  // Les commentaires de la charte sont longs et argumentés : utiles UNE fois,
  // dans le fichier source. Les recopier dans 73 documents ajouterait ~500 Ko
  // de prose au poids des supports. On injecte donc le CSS compacté, avec un
  // renvoi vers l'original.
  const compacter = (css) => css.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\n{2,}/g, '\n').trim();

  const styleFinal = [
    DEB,
    "/* Zone gérée par outils/poser-charte.mjs — ne rien éditer ici : la",
    "   prochaine passe l'écrase. La charte, avec ses raisons, se corrige dans",
    "   Sequences-2A-CAP-IFCA/_charte/charte-2a.css et impression-2a.css. */",
    compacter(charte),
    '',
    '@media print{',
    compacter(impression).replace(/^/gm, '  '),
    '}',
    FIN,
    '',
    DEB_SPEC,
    cssSpec,
  ].join('\n');

  const sortie =
`<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${titre}</title>
<style>
${styleFinal}
</style>
</head>
<body data-public="${pub}">
${corpsDoc}
</body>
</html>
`;

  return { sortie, pub, doublons, divergences, dejaFait, avant: src.length, apres: sortie.length };
}

// ----------------------------------------------------------------------- main
const cible = process.argv[2];
const ecrire = process.argv.includes('--ecrire');
if (!cible) {
  console.error('Usage : node outils/poser-charte.mjs "<dossier>" [--ecrire]');
  process.exit(1);
}

const charte = readFileSync(join(dossierCharte, 'charte-2a.css'), 'utf8');
const impression = readFileSync(join(dossierCharte, 'impression-2a.css'), 'utf8');
const reglesCharte = reglesDe(charte);

const fichiers = htmlsDe(cible);
console.log(`\n${ecrire ? 'APPLICATION' : 'SIMULATION (rien n\'est écrit)'} — ${fichiers.length} document(s)`);
console.log(`Charte : ${reglesCharte.size} règles\n`);

let totDoublons = 0;
const toutesDivergences = [];

for (const f of fichiers) {
  const r = traiter(f, charte, impression, reglesCharte);
  totDoublons += r.doublons.length;
  for (const d of r.divergences) toutesDivergences.push({ fichier: relative(cible, f), ...d });
  const delta = r.apres - r.avant;
  console.log(
    `  ${r.pub === 'eleve' ? 'ÉLÈVE ' : 'prof  '} ` +
    `${String(r.doublons.length).padStart(3)} doublons retirés  ` +
    `${String(r.divergences.length).padStart(2)} divergences  ` +
    `${(delta >= 0 ? '+' : '') + (delta / 1024).toFixed(1)} Ko  ` +
    `${relative(cible, f)}`
  );
  if (ecrire) writeFileSync(f, r.sortie, 'utf8');
}

console.log(`\n${totDoublons} règles en doublon retirées au total.`);

if (toutesDivergences.length) {
  console.log(`\n--- ${toutesDivergences.length} DIVERGENCES conservées telles quelles (à trancher à l'œil) ---`);
  const parSel = new Map();
  for (const d of toutesDivergences) {
    if (!parSel.has(d.sel)) parSel.set(d.sel, []);
    parSel.get(d.sel).push(d);
  }
  for (const [sel, ds] of parSel) {
    console.log(`\n  ${sel}   (${ds.length} document(s))`);
    console.log(`    charte   : ${ds[0].charte.slice(0, 140)}`);
    console.log(`    document : ${ds[0].doc.slice(0, 140)}`);
  }
}
console.log();
