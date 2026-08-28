#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Contrôle sur pièce des documents passés à la charte 2A.

Vérifie, document par document :
  - l'enveloppe HTML (doctype, lang="fr"), sans quoi le navigateur rend en mode
    « quirks » et l'impression ne se comporte pas comme en mode standard ;
  - un seul bloc <style> ;
  - `data-public` conforme au type de document, et la taille de corps qui en découle
    (14 pt élève · 13 pt professeur · 14 pt dossier de séquence) ;
  - la présence des règles d'impression (@page) ;
  - que toutes les images référencées existent réellement sur le disque.

Usage : python outils/controler-charte.py [dossier]
"""
import os, re, sys, io
from urllib.parse import unquote

sys.stdout.reconfigure(encoding='utf-8')

RACINE = sys.argv[1] if len(sys.argv) > 1 else "Sequences-2A-CAP-IFCA"
TAILLE = {'eleve': 14.0, 'professeur': 13.0, 'dossier': 14.0}


def public_attendu(nom):
    n = nom.lower()
    if n.startswith('dossier de séquence') or n.startswith('dossier de sequence'):
        return 'dossier'
    if 'élève' in n or 'eleve' in n or 'sujet' in n:
        return 'eleve'
    return 'professeur'


total, bons = 0, 0
problemes = []

for d, _, ns in os.walk(RACINE):
    if '_versions-perimees' in d or '.git' in d or '_charte' in d:
        continue
    for n in sorted(ns):
        if not n.lower().endswith('.html'):
            continue
        # Les fichiers en « _ » sont des outils de navigation (carte interactive,
        # tableau de bord), pas des supports de séance : ni imprimables, ni soumis
        # à la charte papier.
        if n.startswith('_'):
            continue
        p = os.path.join(d, n)
        t = io.open(p, encoding='utf-8', errors='replace').read()
        total += 1
        maux = []

        if not t.lstrip().startswith('<!DOCTYPE html>'):
            maux.append('pas de doctype (rendu en mode quirks)')
        if 'lang="fr"' not in t:
            maux.append('langue non déclarée')
        if t.count('<style') != 1:
            maux.append(f'{t.count("<style")} blocs <style> au lieu de 1')
        if '@page' not in t:
            maux.append('aucune règle @page (marges du navigateur)')
        if 'CHARTE-2A : DÉBUT' not in t:
            maux.append('marqueur de charte absent')

        att = public_attendu(n)
        m = re.search(r'<body data-public="([a-z]+)"', t)
        got = m.group(1) if m else None
        if got != att:
            maux.append(f'data-public « {got} » au lieu de « {att} »')

        # la taille ne doit plus être écrite en dur dans le bloc propre au document
        spec = t.split('CHARTE-2A : FIN')[-1]
        dur = re.search(r'\bbody\s*\{[^{}]*?font-size\s*:\s*([\d.]+)pt', spec)
        if dur:
            maux.append(f'taille encore écrite en dur ({dur.group(1)}pt) — la charte ne pilote plus')

        for src in re.findall(r'<img[^>]+src="([^"]+)"', t):
            if src.startswith(('data:', 'http')):
                continue
            cible = os.path.normpath(os.path.join(d, unquote(src)))
            if not os.path.exists(cible):
                maux.append(f'image absente du disque : {src}')

        if maux:
            problemes.append((os.path.relpath(p, RACINE), maux))
        else:
            bons += 1

print(f"{bons}/{total} documents conformes\n")
if problemes:
    print(f"=== {len(problemes)} DOCUMENT(S) À REPRENDRE ===")
    for f, maux in problemes:
        print(f'\n  {f}')
        for x in maux:
            print(f'      - {x}')
    sys.exit(1)
print("Vérifié : enveloppe HTML, langue, bloc de style unique, data-public et taille de")
print("corps conformes, règles d'impression présentes, images toutes présentes sur le disque.")
