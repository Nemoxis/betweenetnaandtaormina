#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Genera le derivate responsive delle fotografie dei luoghi (cartella Visit/).

  python3 tools/optimize-visit.py

Legge:   Visit/                          (originali Unsplash, MAI modificati)
Scrive:  assets/images/optimized/        (webp + jpg a 640/1024/1440 px)

Il nome di ogni file contiene già luogo, fotografo e id Unsplash, per esempio
"Taormina_stepan-dudycha-N1T_VfHz7FI-unsplash.jpg". Da lì lo script ricava
i crediti, che finiscono in js/data.js e nella pagina crediti.html.
"""
import os, sys
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
SRC  = os.path.join(ROOT, "Visit")
OUT  = os.path.join(ROOT, "assets", "images", "optimized")
W_STD = [640, 1024, 1440]

# (nome del file in Visit/, slug usato dal sito)
SELECTION = [
    ("Alcantara_wolfgang-hasselmann-TMj6xJfKP3U-unsplash.jpg", "v-alcantara-gole"),
    ("Alcantara_carlo-alberto-burato-F2ExLAPJWqA-unsplash.jpg","v-alcantara-acqua"),
    ("Castelmola_umberto-di-capua-2ofYWyFXBBo-unsplash.jpg",   "v-castelmola-panorama"),
    ("Castiglione_vitalii-kyktov-8uNfchHOVZE-unsplash.jpg",    "v-castiglione"),
    ("Catania_mateusz-butkiewicz-cEYzWTU8PmQ-unsplash.jpg",    "v-catania-cattedrale"),
    ("Catania_samir-kharrat-XLHOHmKj7g8-unsplash.jpg",         "v-catania-etna"),
    ("Etna_dimitra-karkaveli-zNtseoD2y58-unsplash.jpg",        "v-etna-crateri"),
    ("Etna_dimitra-karkaveli-QiYnTJITYfM-unsplash.jpg",        "v-etna-colata"),
    ("Etna_dimitra-karkaveli-bvj_BaixSIY-unsplash.jpg",        "v-etna-jeep"),
    ("Etna_serena-torrisi-UoBlTq81xew-unsplash.jpg",           "v-etna-eruzione"),
    ("Etna_serena-torrisi-YQvtPMoDyY8-unsplash.jpg",           "v-etna-eruzione-neve"),
    ("Serracozzo_anastasiia-rozumna-Yjd7r0giPe4-unsplash.jpg", "v-serracozzo"),
    ("Giardini Naxos_casey-lovegrove-RfxclNteIqY-unsplash.jpg","v-giardini-naxos"),
    ("Isola Bella_yoav-aziz-Nnzup-v5Qmc-unsplash.jpg",         "v-isola-bella"),
    ("Isola Bella_thomas-lamars-NfRy9oMiUBo-unsplash.jpg",     "v-isola-bella-alto"),
    ("Randazzo_jens-aber-mCod1-FYLGg-unsplash.jpg",            "v-randazzo"),
    ("Taormina_stepan-dudycha-N1T_VfHz7FI-unsplash.jpg",       "v-taormina-teatro"),
    ("Taormina_xihao-liu-ADOO1jwhXas-unsplash.jpg",            "v-taormina-costa"),
]

QUALITY_WEBP = 74
QUALITY_JPEG = 78


def credito(fname):
    """Ricava fotografo e id Unsplash dal nome del file."""
    base = fname[:-len("-unsplash.jpg")]
    pid  = base[-11:]                  # gli id Unsplash sono di 11 caratteri
    slug = base[:-12].split("_", 1)[1]
    minuscole = {"di", "al", "de", "van", "der", "la", "le"}
    nome = " ".join(w if w in minuscole else w.capitalize() for w in slug.split("-"))
    return nome, pid


def main():
    if not os.path.isdir(SRC):
        sys.exit("Cartella Visit/ non trovata: %s" % SRC)
    os.makedirs(OUT, exist_ok=True)

    mancanti = []
    for fname, slug in SELECTION:
        path = os.path.join(SRC, fname)
        if not os.path.exists(path):
            mancanti.append(fname)
            continue
        im = Image.open(path).convert("RGB")
        ow, oh = im.size
        for w in widths_for(ow):
            h = round(oh * w / ow)
            rs = im.resize((w, h), Image.LANCZOS)
            rs.save(os.path.join(OUT, "%s-%d.webp" % (slug, w)), "WEBP",
                    quality=QUALITY_WEBP, method=6)
            rs.save(os.path.join(OUT, "%s-%d.jpg" % (slug, w)), "JPEG",
                    quality=QUALITY_JPEG, optimize=True, progressive=True)
        autore, pid = credito(fname)
        print("%-24s %5dx%-5d  %-22s %s" % (slug, ow, oh, autore, pid))

    print("\n%d immagini elaborate." % (len(SELECTION) - len(mancanti)))
    if mancanti:
        print("ATTENZIONE: non trovate in Visit/: %s" % ", ".join(mancanti))


def widths_for(ow):
    return [w for w in W_STD if w <= ow] or [ow]


if __name__ == "__main__":
    main()
