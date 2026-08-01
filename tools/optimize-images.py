#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Genera le derivate responsive del sito a partire dalle foto originali.

  python3 tools/optimize-images.py

Legge:   OldPhoto/                        (originali, MAI modificati)
Scrive:  assets/images/optimized/         (webp + jpg a 640/1024/1440 px)

Per aggiungere una foto al sito:
  1. mettila in OldPhoto/
  2. aggiungi una riga a SELECTION qui sotto (file, slug, larghezze)
  3. rilancia lo script
  4. aggiungi la voce corrispondente in js/data.js (slug, categoria, alt IT/EN)

Serve la libreria Pillow:  pip install Pillow
"""
import os, json, sys
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
SRC  = os.path.join(ROOT, "OldPhoto")
OUT  = os.path.join(ROOT, "assets", "images", "optimized")

W_STD = [640, 1024, 1440]

# (nome file in OldPhoto, slug usato dal sito, larghezze)
SELECTION = [
    # panorama e balconi
    ("9392c63d_original.avif", "balcone-vista-etna",       W_STD),
    ("f9ff856f_original.avif", "balcone-veranda-etna",     W_STD),
    ("24418acd_original.jpg",  "vista-campagna-etna",      W_STD),
    ("3193ddac_original.jpg",  "balcone-vista-paese",      W_STD),
    ("defc646f_original.jpg",  "etna-innevato",            W_STD),
    ("be0664ac_original.avif", "etna-dal-paese",           W_STD),
    ("0d14ed14_original.jpg",  "etna-eruzione-notte",      W_STD),
    # esterni
    ("80771d84_original.avif", "esterno-palazzina",        W_STD),
    ("eda61972_original.jpg",  "esterno-fronte",           W_STD),
    ("2459d58d_original.jpg",  "esterno-ingresso",         W_STD),
    # soggiorno
    ("d2df7570_original.avif", "soggiorno-balcone",        W_STD),
    ("bfd669cd_original.avif", "soggiorno-pranzo",         W_STD),
    ("6477d22f_original.jpg",  "soggiorno-divani",         W_STD),
    ("ba67de75_original.jpg",  "soggiorno-tavolo",         W_STD),
    ("2f290702_original.jpg",  "soggiorno-corridoio",      W_STD),
    ("87ac73fe_original.jpg",  "soggiorno-ingresso",       W_STD),
    # cucina
    ("245e8e42_original.jpg",  "cucina-vista-etna",        W_STD),
    ("7db1a0ac_original.avif", "cucina-verso-soggiorno",   W_STD),
    ("6e2fe2fd_original.jpg",  "cucina-tavolo",            W_STD),
    # camere
    ("426cebcc_original.avif", "camera-1-matrimoniale",    W_STD),
    ("bc328d9d_original.avif", "camera-2-matrimoniale",    W_STD),
    ("c1a047a8_original.avif", "camera-3-letti-singoli",   W_STD),
    ("703f0ff1_original.avif", "camera-matrimoniale-como", W_STD),
    # bagni e servizi (originali verticali: bastano due larghezze)
    ("151141d5_original.avif", "bagno-vasca",              W_STD),
    ("bfc51fa2_original.jpg",  "bagno-doppio-lavabo",      [640, 1024]),
    ("633d0ab8_original.avif", "bagno-lavabo",             [640, 1024]),
    ("432e644b_original.avif", "lavanderia",               [640, 1024]),
    # territorio
    ("9069d7f4_original.jpg",  "taormina-isola-bella",     W_STD),
    ("3ec690df_original.avif", "catania-duomo",            W_STD),
    ("807d4053_original.avif", "spiaggia-ionica",          W_STD),
    ("c5e40d9b_original.jpg",  "mare-tramonto",            W_STD),
    ("ebd08ff6_original.avif", "piedimonte-festa",         W_STD),
]

QUALITY_WEBP = 74
QUALITY_JPEG = 78


def main():
    if not os.path.isdir(SRC):
        sys.exit("Cartella OldPhoto/ non trovata: %s" % SRC)
    os.makedirs(OUT, exist_ok=True)

    report, mancanti = [], []
    for fname, slug, widths in SELECTION:
        path = os.path.join(SRC, fname)
        if not os.path.exists(path):
            mancanti.append(fname)
            continue

        im = Image.open(path).convert("RGB")
        ow, oh = im.size
        fatte = []
        for w in widths:
            w = min(w, ow)                       # non ingrandire mai l'originale
            h = round(oh * w / ow)
            rs = im.resize((w, h), Image.LANCZOS)
            rs.save(os.path.join(OUT, "%s-%d.webp" % (slug, w)), "WEBP",
                    quality=QUALITY_WEBP, method=6)
            rs.save(os.path.join(OUT, "%s-%d.jpg" % (slug, w)), "JPEG",
                    quality=QUALITY_JPEG, optimize=True, progressive=True)
            fatte.append(w)

        report.append({"src": fname, "slug": slug,
                       "orig": [ow, oh], "widths": sorted(set(fatte))})
        print("%-26s %5dx%-5d -> %s" % (slug, ow, oh, sorted(set(fatte))))

    with open(os.path.join(OUT, "_manifest.json"), "w", encoding="utf-8") as fh:
        json.dump(report, fh, indent=1, ensure_ascii=False)

    print("\n%d immagini elaborate." % len(report))
    if mancanti:
        print("ATTENZIONE: non trovate in OldPhoto/: %s" % ", ".join(mancanti))


if __name__ == "__main__":
    main()
