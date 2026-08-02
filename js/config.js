/* =============================================================================
   CONFIGURAZIONE DEL SITO
   -----------------------------------------------------------------------------
   Questo è l'UNICO file che devi modificare per aggiornare i dati della casa.
   Cerca i commenti  ⚠️ DA COMPLETARE  per i valori ancora mancanti.
   ============================================================================= */

window.SITE_CONFIG = {

  /* ---------------------------------------------------------------- struttura */
  PROPERTY_NAME: "Tra il fuoco dell'Etna e Taormina",
  // Nome usato quando il sito passa in inglese, nel marchio, nel titolo
  // dell'hero e nel titolo della scheda del browser.
  PROPERTY_NAME_EN: "Between Etna and Taormina",
  PROPERTY_SHORT: "Tra il fuoco dell'Etna",
  PROPERTY_TYPE: "Intero appartamento",          // fonte: annuncio Airbnb
  HOST_NAME: "Raffaele e Pina",                   // fonte: annuncio Airbnb
  HOST_NAME_EN: "Raffaele and Pina",              // la stessa coppia, con la "e" inglese
  // L'annuncio Airbnb dichiara "14 anni da host": nel 2026 corrisponde al 2012.
  // Se conosci l'anno esatto in cui hai cominciato, correggilo qui.
  HOST_SINCE_YEAR: 2012,

  /* ------------------------------------------------------- codici obbligatori */
  // CIN = Codice Identificativo Nazionale.
  // Valore rilevato nei "Dati di registrazione" dell'annuncio Airbnb.
  // ⚠️ VERIFICA che corrisponda esattamente al certificato della BDSR
  //    (nell'annuncio compare anche la variante "IT87035C2E9DVLW8N").
  CIN: "IT087035C2E9DVLW8N",

  // CIR = Codice Identificativo Regionale (Regione Siciliana).
  // Valore confermato dal proprietario, coerente con il numero di licenza
  // pubblicato sulla scheda Booking.com della struttura.
  CIR: "19087035C246016",

  /* ------------------------------------------------------------------ località */
  ADDRESS_STREET: "Via Alfio Cassisi 8",
  ADDRESS_LOCALITY: "Piedimonte Etneo",
  ADDRESS_PROVINCE: "CT",
  ADDRESS_POSTAL: "95017",
  ADDRESS_REGION: "Sicilia",
  ADDRESS_COUNTRY: "IT",

  // Coordinate. NON sono state verificate: sono impostate sul centro del paese.
  // Con EXACT_LOCATION a false il sito le ignora e passa a Google l'indirizzo
  // qui sopra, che viene geolocalizzato correttamente. Va già bene così.
  //
  // Se vuoi il segnaposto al centimetro: apri Google Maps, clic destro sul
  // portone di casa, il primo elemento del menu sono latitudine e longitudine.
  // Incollale qui e porta EXACT_LOCATION a true.
  LATITUDE: 37.8050,
  LONGITUDE: 15.1830,
  EXACT_LOCATION: false,

  /* ------------------------------------------------------------- prenotazioni */
  AIRBNB_URL: "https://www.airbnb.it/rooms/540027",
  BOOKING_URL: "https://www.booking.com/searchresults.it.html?aid=356980&redirected=1&city=-124697&highlighted_hotels=14618275",

  /* ----------------------------------------------------------------- contatti */
  EMAIL: "betweenetnaandtaormina@gmail.com",
  PHONE: "",          // ⚠️ DA COMPLETARE (es. "+39 333 1234567"). Vuoto = non mostrato
  WHATSAPP: "",       // ⚠️ DA COMPLETARE (solo cifre, es. "393331234567"). Vuoto = non mostrato

  /* ------------------------------------------------------------ social (opz.) */
  // Lascia vuoto ciò che non hai: i link vuoti non vengono mostrati.
  FACEBOOK_URL: "",
  INSTAGRAM_URL: "",

  /* --------------------------------------------------------------- valutazioni */
  // Tutti i dati qui sotto sono pubblici sull'annuncio Airbnb.
  // Rilevati il 1 agosto 2026: aggiornali quando cambiano.
  // Con SHOW_RATING a false spariscono sia la riga nell'introduzione
  // sia l'intera sezione "Cosa dicono gli ospiti".
  SHOW_RATING: true,
  RATING_VALUE: "4,64",
  RATING_COUNT: 88,
  RATING_SOURCE: "Airbnb",
  RATING_DATE: "agosto 2026",
  RATING_DATE_EN: "August 2026",

  // Punteggi per categoria (0-5).
  RATING_CATEGORIES: [
    { it: "Pulizia",        en: "Cleanliness",  v: "4,9", n: 4.9 },
    { it: "Check-in",       en: "Check-in",     v: "4,9", n: 4.9 },
    { it: "Precisione",     en: "Accuracy",     v: "4,8", n: 4.8 },
    { it: "Comunicazione",  en: "Communication",v: "4,7", n: 4.7 },
    { it: "Qualità/prezzo", en: "Value",        v: "4,7", n: 4.7 },
    { it: "Posizione",      en: "Location",     v: "4,5", n: 4.5 }
  ],

  // Distribuzione delle stelle, in percentuale sul totale.
  RATING_STARS: [ {s:5,p:69}, {s:4,p:26}, {s:3,p:3}, {s:2,p:1}, {s:1,p:0} ],

  // "Termini ricorrenti nelle recensioni": è Airbnb a calcolarli e a mostrarli
  // pubblicamente sull'annuncio, con il numero di recensioni che li citano.
  RATING_THEMES: [
    { it:"Ospitalità",    en:"Hospitality",  n:58 },
    { it:"Posizione",     en:"Location",     n:53 },
    { it:"Vista",         en:"View",         n:52 },
    { it:"Pulizia",       en:"Cleanliness",  n:44 },
    { it:"Spazi interni", en:"Interiors",    n:33 },
    { it:"Nelle vicinanze",en:"Surroundings",n:20 },
    { it:"Comfort",       en:"Comfort",      n:17 }
  ],

  /* ---------------------------------------------------------------- struttura */
  GUESTS: 6,
  BEDROOMS: 3,
  BEDS: 6,
  BATHROOMS: 2,
  FLOOR: "1º piano con ascensore",
  CHECKIN: "dalle 17:00",
  CHECKOUT: "entro le 10:00",

  /* -------------------------------------------------------------------- varie */
  // Indirizzo pubblico del sito. Se un domani compri un dominio tuo,
  // cambialo qui e anche in index.html (canonical e Open Graph),
  // robots.txt e sitemap.xml.
  SITE_URL: "https://nemoxis.github.io/betweenetnaandtaormina",
  DEFAULT_LANG: "it"
};
