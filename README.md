# Tra il fuoco dell'Etna e Taormina, sito ufficiale

Sito vetrina della casa vacanze di Piedimonte Etneo (CT), Sicilia.
HTML, CSS e JavaScript scritti a mano. Nessun framework, nessuna build, nessuna dipendenza da installare.

---

## Da completare prima di pubblicare

Tutto quello che ti serve modificare sta in **`js/config.js`**. Cerca i commenti `⚠️`.

| Voce | Stato | Cosa fare |
|---|---|---|
| `CIN` | ✅ inserito | `IT087035C2E9DVLW8N`, ripreso dai "Dati di registrazione" dell'annuncio Airbnb. Verifica che corrisponda al certificato BDSR: nell'annuncio compare anche la variante `IT87035C2E9DVLW8N`, senza lo zero. |
| `CIR` | ✅ inserito | `19087035C246016`, confermato dal proprietario e coerente con il numero di licenza pubblicato sulla scheda Booking.com. |
| `ADDRESS_STREET` | ✅ inserito | Via Alfio Cassisi 8, 95017 Piedimonte Etneo (CT). La mappa è centrata su questo indirizzo. |
| `LATITUDE` / `LONGITUDE` | facoltative | Non verificate: puntano al centro del paese e il sito le ignora, perché passa a Google l'indirizzo completo. Se vuoi il segnaposto al centimetro, inseriscile e metti `EXACT_LOCATION: true`. |
| `EMAIL` | ✅ inserito | `betweenetnaandtaormina@gmail.com` |
| `PHONE` / `WHATSAPP` | ⚠️ vuoti | Se li lasci vuoti non vengono mostrati. |
| `SITE_URL` | ✅ impostato | `https://nemoxis.github.io/betweenetnaandtaormina`. Se compri un dominio tuo, cambialo qui e anche in `index.html` (canonical e Open Graph), `robots.txt` e `sitemap.xml`. |

Come trovare le coordinate esatte, se le vuoi: apri Google Maps, fai clic destro sul portone di casa, il primo elemento del menu sono latitudine e longitudine, un clic per copiarle.

---

## Struttura del progetto

```
.
├── index.html                     pagina unica del sito
├── privacy.html                   informativa privacy (traccia da completare)
├── cookie.html                    cookie policy
├── robots.txt  sitemap.xml
├── css/style.css                  identità visiva completa
├── js/
│   ├── config.js                  ← l'unico file da modificare di norma
│   ├── data.js                    foto, punti di interesse, itinerari
│   ├── i18n.js                    traduzioni inglesi
│   └── main.js                    carosello, lightbox, filtri, mappa, recensioni
├── assets/
│   ├── icons/favicon.svg
│   └── images/optimized/          derivate responsive generate dallo script
├── tools/optimize-images.py       rigenera le derivate dalle foto originali
└── OldPhoto/                      FOTO ORIGINALI, mai toccate
```

---

## Come vedere il sito in locale

Serve un piccolo server web: aprendo `index.html` con doppio clic (`file://`) alcuni browser bloccano il caricamento dei file JavaScript.

**Con Python** (già presente su macOS e Linux, scaricabile su Windows da python.org):

```bash
cd "Tra il fuoco dell'etna e Taormina"
python3 -m http.server 8000
```

Poi apri <http://localhost:8000>.

**Con Node.js:**

```bash
npx serve .
```

**Con Visual Studio Code:** installa l'estensione *Live Server*, clic destro su `index.html` → *Open with Live Server*.

---

## Caricare il sito su GitHub

La prima volta, da PowerShell (le virgolette servono: il percorso contiene spazi e un apostrofo):

```powershell
cd "C:\Users\barba\Desktop\Tra il fuoco dell'etna e Taormina"
git init
git branch -M main
git add .
git commit -m "Primo caricamento del sito"
git remote add origin https://github.com/Nemoxis/betweenetnaandtaormina.git
git push -u origin main
```

Se GitHub rifiuta il push dicendo *"Updates were rejected"*, vuol dire che alla creazione della repository hai spuntato "Add a README file": la repository non è vuota. Si risolve così, una volta sola:

```powershell
git pull --rebase origin main
git push -u origin main
```

Quando ti chiede le credenziali, la password del sito non funziona: serve un **Personal Access Token** (GitHub, *Settings → Developer settings → Personal access tokens → Tokens (classic)*, spunta `repo`). Incollalo al posto della password.

Le volte successive bastano tre comandi:

```powershell
cd "C:\Users\barba\Desktop\Tra il fuoco dell'etna e Taormina"
git add .
git commit -m "Descrizione di cosa hai cambiato"
git push
```

### Pubblicare con GitHub Pages

Nella repository: *Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save*. Dopo un paio di minuti il sito è online su `https://nemoxis.github.io/betweenetnaandtaormina/`.

Funziona perché `index.html` sta nella cartella principale. Ricordati poi di aggiornare il dominio in `js/config.js`, `index.html`, `robots.txt` e `sitemap.xml`.

Il file `.gitignore` esclude solo i file di sistema (`Thumbs.db`, `.DS_Store`) e le cartelle degli editor. Le fotografie vengono caricate: `OldPhoto/` e `assets/images/optimized/` insieme pesano circa 17 MB, ben sotto il limite di GitHub.

---

## Altri modi per pubblicarlo

Il sito è statico: qualunque hosting va bene, anche gratuito.

**Netlify o Cloudflare Pages (i più semplici)**
Trascina l'intera cartella nella pagina di deploy. Nessuna configurazione, nessun comando di build. Il certificato HTTPS è automatico.

**GitHub Pages**
Carica la cartella in un repository, poi *Settings → Pages → Deploy from a branch → main / (root)*.

**Hosting tradizionale (Aruba, Register, cPanel…)**
Carica tutto via FTP nella cartella pubblica (`public_html` o `www`), mantenendo la struttura delle sottocartelle.

Nota: `OldPhoto/` non serve al sito pubblicato. Puoi non caricarla, ma conservala: è la sorgente di `tools/optimize-images.py`.

Dopo la pubblicazione, sostituisci il dominio in `js/config.js`, `index.html`, `robots.txt` e `sitemap.xml`, poi registra il sito su [Google Search Console](https://search.google.com/search-console) e invia la sitemap.

---

## Recensioni

La sezione "Cosa dicono di noi" mostra i dati pubblici dell'annuncio Airbnb: media, distribuzione delle stelle, punteggi per categoria e i "termini ricorrenti" che Airbnb calcola da sola. Stanno tutti in `js/config.js`, sotto `RATING_*`, con la data del rilevamento (agosto 2026). Aggiornali ogni tanto, oppure metti `SHOW_RATING: false` per far sparire l'intera sezione.

**Le singole recensioni non ci sono, ed è voluto.** Airbnb carica i testi via JavaScript e non li pubblica nel codice della pagina, quindi non è stato possibile recuperarli e non sono stati inventati. Per aggiungerli: apri l'annuncio, scegli le recensioni che ti piacciono di più e copiale in `window.RECENSIONI`, in fondo a `js/data.js`, seguendo l'esempio commentato lì dentro. Compariranno da sole sopra i punteggi, in riquadri con la citazione, il nome e la data. Copia il testo fedelmente, senza riscriverlo.

## Fotografie

Le foto della casa vengono **esclusivamente** da `OldPhoto/`. Nessuna immagine è stata scaricata da internet.

- 39 file trovati in `OldPhoto/`
- 32 selezionati per il sito (24 dell'alloggio + 8 del territorio)
- 7 scartati: doppioni della stessa inquadratura e una foto dell'eruzione con filigrana di copyright di terzi
- gli originali non sono mai stati modificati né sovrascritti

Per aggiungere o cambiare una foto: metti il file in `OldPhoto/`, aggiungi una riga in `tools/optimize-images.py`, rilancia lo script, poi aggiungi la voce in `js/data.js`.

Nella cartella `assets/images/optimized/` sono rimasti 32 file `*-lqip.jpg` (miniature da 20 px) di una versione precedente dello script: non sono usati dal sito e puoi cancellarli tranquillamente.

---

## Lingue

L'italiano è scritto direttamente nell'HTML: è la lingua principale, quella che leggono i motori di ricerca. L'inglese sta in `js/i18n.js` e viene applicato dal selettore **IT | EN** in alto a destra, che ricorda la scelta per le visite successive.

Per aggiungere una lingua duplica il blocco `en:` in `js/i18n.js`, cambia il codice, e aggiungi un pulsante `<button class="lang-btn" data-lang="fr">FR</button>` nell'intestazione.

Per tradurre un testo nuovo: aggiungi `data-i18n="una.chiave"` all'elemento HTML e la chiave corrispondente in `i18n.js`.

---

## Privacy e cookie

- Il sito **non usa** analytics, cookie di profilazione o script pubblicitari.
- Poiché la mappa di Google parte automaticamente, valuta con un consulente se nel tuo caso serva un banner di consenso: dipende da come interpreti l'obbligo per i cookie tecnici di terze parti. L'alternativa più prudente è il caricamento su richiesta, descritto qui sotto.
- La **mappa di Google si carica da sola** quando la sezione "Dove siamo" entra nello schermo: in quel momento Google riceve l'indirizzo IP del visitatore e può impostare cookie tecnici. È una scelta consapevole, fatta per comodità di chi visita il sito, ed è dichiarata nella Cookie Policy. Se in futuro volessi tornare al caricamento su richiesta, basta rimettere un pulsante davanti all'iframe in `initMap()` dentro `js/main.js`.
- L'unico dato salvato nel browser è la lingua scelta, in `localStorage`.
- I **caratteri tipografici** (Fraunces e Inter) sono richiesti a Google Fonts. Se preferisci evitare del tutto la connessione ai server di Google: scarica i font da [google-webfonts-helper](https://gwfh.mranftl.com/fonts), mettili in `assets/fonts/`, sostituisci i tre tag `<link>` in `index.html`, `privacy.html` e `cookie.html` con le regole `@font-face` corrispondenti. Il sito resta identico e il rilievo privacy sparisce.
- `privacy.html` è una **traccia**: i dati del titolare del trattamento vanno inseriti prima della pubblicazione. Il documento lo dichiara apertamente in cima.

---

## Accessibilità

Navigazione completa da tastiera (menu, carosello con frecce, Home ed End, lightbox con frecce ed Esc, modale con focus intrappolato e ripristinato), link di salto al contenuto, landmark semantici, testi alternativi descrittivi su tutte le immagini, contrasti conformi a WCAG AA, animazioni disattivate se il sistema ha impostato `prefers-reduced-motion`.

---

## Fonti dei dati

Le informazioni sulla casa (6 ospiti, 3 camere, 6 letti, 2 bagni, dotazioni, orari di check-in, codice di registrazione, valutazioni) provengono dall'annuncio pubblico Airbnb della struttura. Nessun dato è stato inventato: quello che non era verificabile è un segnaposto o è stato omesso.

Le distanze nella sezione *Da scoprire* sono **stradali e indicative, calcolate da Piedimonte Etneo**, non dall'indirizzo esatto: il sito lo dichiara esplicitamente. Ricontrollale quando avrai inserito l'indirizzo.
