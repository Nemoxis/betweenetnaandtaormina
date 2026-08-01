/* =============================================================================
   DATI DEL SITO: fotografie, punti di interesse, itinerari
   -----------------------------------------------------------------------------
   Tutte le fotografie della casa provengono da OldPhoto/ (originali intatti).
   Le derivate ottimizzate stanno in assets/images/optimized/.
   Ogni voce genera automaticamente srcset a 640 / 1024 / 1440 px.
   ============================================================================= */

/* Le foto: slug, categoria, larghezze disponibili, alt IT/EN.
   cat: esterni | interni | camere | cucina | bagni | panorama            */
window.PHOTOS = [
  { s:"balcone-vista-etna", cat:"panorama", w:[640,1024,1440],
    it:"Tavolo apparecchiato sul balcone dell'appartamento con l'Etna sullo sfondo",
    en:"Table set on the apartment balcony with Mount Etna in the background" },

  { s:"soggiorno-balcone", cat:"interni", w:[640,1024,1440],
    it:"Soggiorno luminoso con divani e porta finestra sul balcone",
    en:"Bright living room with sofas and French door opening onto the balcony" },

  { s:"cucina-vista-etna", cat:"cucina", w:[640,1024,1440],
    it:"Cucina abitabile con tavolo e balcone aperto sulla campagna etnea",
    en:"Eat-in kitchen with table and balcony overlooking the Etna countryside" },

  { s:"camera-1-matrimoniale", cat:"camere", w:[640,1024,1440],
    it:"Prima camera da letto matrimoniale con tende chiare e aria condizionata",
    en:"First double bedroom with light curtains and air conditioning" },

  { s:"vista-campagna-etna", cat:"panorama", w:[640,1024,1440],
    it:"Vista dal balcone sulla campagna coltivata e sul cono dell'Etna",
    en:"View from the balcony over the cultivated countryside and Etna's cone" },

  { s:"soggiorno-pranzo", cat:"interni", w:[640,1024,1440],
    it:"Zona pranzo del soggiorno con tavolo in legno e credenza",
    en:"Dining area of the living room with wooden table and sideboard" },

  { s:"camera-2-matrimoniale", cat:"camere", w:[640,1024,1440],
    it:"Seconda camera matrimoniale con grande finestra e luce naturale",
    en:"Second double bedroom with large window and natural light" },

  { s:"cucina-verso-soggiorno", cat:"cucina", w:[640,1024,1440],
    it:"Cucina attrezzata con forno, piano cottura e passaggio verso il soggiorno",
    en:"Fitted kitchen with oven and hob, opening towards the living room" },

  { s:"bagno-vasca", cat:"bagni", w:[640,1024,1440],
    it:"Bagno con vasca, lavabo e ampio piano di appoggio",
    en:"Bathroom with bathtub, washbasin and wide counter" },

  { s:"camera-3-letti-singoli", cat:"camere", w:[640,1024,1440],
    it:"Terza camera con due letti singoli e porta finestra sul balcone",
    en:"Third bedroom with two single beds and French door to the balcony" },

  { s:"esterno-palazzina", cat:"esterni", w:[640,1024,1440],
    it:"La palazzina che ospita l'appartamento, con i suoi balconi",
    en:"The building where the apartment is located, with its balconies" },

  { s:"soggiorno-divani", cat:"interni", w:[640,1024,1440],
    it:"Soggiorno con divani, poltrona e tavolo da pranzo",
    en:"Living room with sofas, armchair and dining table" },

  { s:"balcone-veranda-etna", cat:"panorama", w:[640,1024,1440],
    it:"Balcone coperto con tavolo e vista aperta verso l'Etna",
    en:"Covered balcony with table and open view towards Mount Etna" },

  { s:"cucina-tavolo", cat:"cucina", w:[640,1024,1440],
    it:"Tavolo della cucina apparecchiato davanti alla porta finestra",
    en:"Kitchen table laid in front of the French door" },

  { s:"camera-matrimoniale-como", cat:"camere", w:[640,1024,1440],
    it:"Camera matrimoniale con comò e specchio",
    en:"Double bedroom with chest of drawers and mirror" },

  { s:"soggiorno-tavolo", cat:"interni", w:[640,1024,1440],
    it:"Tavolo da pranzo del soggiorno con divani sullo sfondo",
    en:"Living room dining table with sofas in the background" },

  { s:"bagno-doppio-lavabo", cat:"bagni", w:[640,1024],
    it:"Secondo bagno con doppio lavabo e vasca",
    en:"Second bathroom with double washbasin and bathtub" },

  { s:"lavanderia", cat:"bagni", w:[640,1024],
    it:"Locale lavanderia con lavatrice e servizio",
    en:"Laundry room with washing machine and toilet" },

  { s:"soggiorno-corridoio", cat:"interni", w:[640,1024,1440],
    it:"Soggiorno con TV e disimpegno verso le camere",
    en:"Living room with TV and hallway leading to the bedrooms" },

  { s:"esterno-fronte", cat:"esterni", w:[640,1024,1440],
    it:"Facciata della palazzina vista dalla strada",
    en:"Front of the building seen from the street" },

  { s:"balcone-vista-paese", cat:"panorama", w:[640,1024,1440],
    it:"Balcone affacciato sul paese di Piedimonte Etneo",
    en:"Balcony overlooking the village of Piedimonte Etneo" },

  { s:"soggiorno-ingresso", cat:"interni", w:[640,1024,1440],
    it:"Ingresso dell'appartamento con divani e zona pranzo",
    en:"Apartment entrance with sofas and dining area" },

  { s:"bagno-lavabo", cat:"bagni", w:[640,1024],
    it:"Bagno con lavabo e mobile contenitore",
    en:"Bathroom with washbasin and storage unit" },

  { s:"esterno-ingresso", cat:"esterni", w:[640,1024,1440],
    it:"Accesso pedonale alla palazzina dalla strada",
    en:"Pedestrian access to the building from the street" }
];

/* Foto del territorio (paesaggi e luoghi vicini). Non sono l'alloggio. */
window.PHOTOS_TERRITORIO = {
  "etna-innevato":        { w:[640,1024,1440], it:"L'Etna innevato al tramonto visto dalla riviera ionico-etnea", en:"Snow-capped Etna at dusk seen from the Ionian and Etna riviera" },
  "etna-dal-paese":       { w:[640,1024,1440], it:"Il cono innevato dell'Etna visto da una via del paese", en:"Etna's snowy cone seen from a village street" },
  "etna-eruzione-notte":  { w:[640,1024,1440], it:"Eruzione notturna dell'Etna vista dalla costa ionica", en:"Night-time eruption of Etna seen from the Ionian coast" },
  "taormina-isola-bella": { w:[640,1024,1440], it:"Isola Bella e la baia di Taormina dall'alto", en:"Isola Bella and the bay of Taormina from above" },
  "catania-duomo":        { w:[640,1024,1440], it:"Piazza Duomo a Catania con la fontana dell'Elefante", en:"Piazza Duomo in Catania with the Elephant fountain" },
  "spiaggia-ionica":      { w:[640,1024,1440], it:"Spiaggia di ghiaia lavica sulla costa ionica", en:"Lava-pebble beach on the Ionian coast" },
  "mare-tramonto":        { w:[640,1024,1440], it:"Il mare Ionio all'alba dalla spiaggia", en:"The Ionian Sea at dawn from the beach" },
  "piedimonte-festa":     { w:[640,1024,1440], it:"Rievocazione storica serale a Piedimonte Etneo", en:"Evening historical re-enactment in Piedimonte Etneo" }
};

/* -----------------------------------------------------------------------------
   PUNTI DI INTERESSE
   Le distanze sono STRADALI E INDICATIVE, calcolate da Piedimonte Etneo.
   Aggiornale quando inserisci l'indirizzo esatto in config.js.
   -------------------------------------------------------------------------- */
window.POI = [
  { cat:"etna", img:"etna-innevato",
    it:{ n:"Etna Nord, Piano Provenzana", d:"Il versante nord del vulcano: pinete, colate recenti e la partenza delle escursioni verso i crateri sommitali.", km:"circa 30 km", t:"circa 50 min" },
    en:{ n:"Etna North: Piano Provenzana", d:"The volcano's northern slope: pine forests, recent lava flows and the starting point for hikes to the summit craters.", km:"about 30 km", t:"about 50 min" } },

  { cat:"etna", img:"etna-dal-paese",
    it:{ n:"Linguaglossa e la Pineta Ragabo", d:"Il paese-porta dell'Etna nord, con la sua pineta secolare e le strade forestali che salgono verso quota 1800.", km:"circa 8 km", t:"circa 12 min" },
    en:{ n:"Linguaglossa and Pineta Ragabo", d:"The gateway town to northern Etna, with its centuries-old pine wood and forest roads climbing to 1,800 m.", km:"about 8 km", t:"about 12 min" } },

  { cat:"etna", img:"piedimonte-festa",
    it:{ n:"Ferrovia Circumetnea", d:"La stazione è a pochi passi dalla casa: il trenino compie il giro del vulcano tra vigne, colate e paesi in pietra lavica.", km:"a pochi passi", t:"" },
    en:{ n:"Circumetnea Railway", d:"The station is a few steps from the house: the little train circles the volcano through vineyards, lava flows and stone villages.", km:"a few steps away", t:"" } },

  { cat:"taormina", img:"taormina-isola-bella",
    it:{ n:"Taormina", d:"Il Teatro Antico affacciato sul mare, Corso Umberto, i giardini della Villa Comunale e i belvedere sulla baia di Naxos.", km:"circa 20 km", t:"circa 30 min" },
    en:{ n:"Taormina", d:"The ancient Greek theatre above the sea, Corso Umberto, the Villa Comunale gardens and the viewpoints over the bay of Naxos.", km:"about 20 km", t:"about 30 min" } },

  { cat:"taormina", img:"taormina-isola-bella",
    it:{ n:"Isola Bella", d:"Riserva naturale e piccola isola collegata alla spiaggia da una lingua di ciottoli, sotto la rupe di Taormina.", km:"circa 20 km", t:"circa 30 min" },
    en:{ n:"Isola Bella", d:"A nature reserve and tiny island linked to the beach by a pebble spit, below the Taormina cliff.", km:"about 20 km", t:"about 30 min" } },

  { cat:"borghi", img:"etna-innevato",
    it:{ n:"Castelmola", d:"Il borgo che domina Taormina dall'alto, con la piazza panoramica e il vino alla mandorla.", km:"circa 25 km", t:"circa 40 min" },
    en:{ n:"Castelmola", d:"The village looking down on Taormina, with its panoramic square and almond wine.", km:"about 25 km", t:"about 40 min" } },

  { cat:"mare", img:"spiaggia-ionica",
    it:{ n:"Marina di Cottone", d:"Spiaggia di ghiaia e sabbia scura alla foce dell'Alcantara, tra le più vicine alla casa.", km:"circa 9 km", t:"circa 15 min" },
    en:{ n:"Marina di Cottone", d:"Dark sand-and-shingle beach at the mouth of the Alcantara, among the closest to the house.", km:"about 9 km", t:"about 15 min" } },

  { cat:"mare", img:"mare-tramonto",
    it:{ n:"Fondachello di Mascali", d:"Lungo litorale di ciottoli lavici, stabilimenti e chioschi, con l'Etna alle spalle.", km:"circa 12 km", t:"circa 20 min" },
    en:{ n:"Fondachello di Mascali", d:"A long lava-pebble shoreline with beach clubs and kiosks, Etna rising behind.", km:"about 12 km", t:"about 20 min" } },

  { cat:"mare", img:"spiaggia-ionica",
    it:{ n:"San Marco di Calatabiano", d:"Spiaggia ampia e tranquilla ai piedi del castello di Calatabiano.", km:"circa 11 km", t:"circa 18 min" },
    en:{ n:"San Marco di Calatabiano", d:"A wide, quiet beach at the foot of Calatabiano castle.", km:"about 11 km", t:"about 18 min" } },

  { cat:"mare", img:"taormina-isola-bella",
    it:{ n:"Giardini Naxos", d:"La prima colonia greca di Sicilia, oggi lungomare, spiagge e il parco archeologico di Naxos.", km:"circa 17 km", t:"circa 25 min" },
    en:{ n:"Giardini Naxos", d:"Sicily's first Greek colony: today a seafront promenade, beaches and the Naxos archaeological park.", km:"about 17 km", t:"about 25 min" } },

  { cat:"natura", img:"etna-innevato",
    it:{ n:"Gole dell'Alcantara", d:"Pareti di basalto colonnare scavate dal fiume: si scende a piedi fino all'acqua, gelida anche d'estate.", km:"circa 20 km", t:"circa 30 min" },
    en:{ n:"Alcantara Gorges", d:"Columnar basalt walls carved by the river; you walk down to water that stays icy even in summer.", km:"about 20 km", t:"about 30 min" } },

  { cat:"borghi", img:"piedimonte-festa",
    it:{ n:"Randazzo", d:"Città medievale in pietra lavica sul versante nord, rimasta intatta nonostante secoli di eruzioni.", km:"circa 25 km", t:"circa 35 min" },
    en:{ n:"Randazzo", d:"A medieval town built in lava stone on the northern slope, intact despite centuries of eruptions.", km:"about 25 km", t:"about 35 min" } },

  { cat:"borghi", img:"etna-dal-paese",
    it:{ n:"Forza d'Agrò", d:"Borgo arroccato con vista che spazia dalla costa ionica fino alla Calabria.", km:"circa 30 km", t:"circa 45 min" },
    en:{ n:"Forza d'Agrò", d:"A hilltop village with views stretching from the Ionian coast to Calabria.", km:"about 30 km", t:"about 45 min" } },

  { cat:"cultura", img:"catania-duomo",
    it:{ n:"Catania", d:"Il barocco di Piazza Duomo e via Crociferi, il mercato della Pescheria e il Castello Ursino.", km:"circa 45 km", t:"circa 40 min" },
    en:{ n:"Catania", d:"The baroque of Piazza Duomo and Via Crociferi, the Pescheria fish market and Castello Ursino.", km:"about 45 km", t:"about 40 min" } },

  { cat:"cultura", img:"catania-duomo",
    it:{ n:"Acireale", d:"Barocco settecentesco, la Timpa a picco sul mare e uno dei carnevali più noti d'Italia.", km:"circa 30 km", t:"circa 30 min" },
    en:{ n:"Acireale", d:"Eighteenth-century baroque, the Timpa cliffs above the sea and one of Italy's best-known carnivals.", km:"about 30 km", t:"about 30 min" } },

  { cat:"enogastronomia", img:"balcone-vista-etna",
    it:{ n:"Le cantine dell'Etna", d:"Le contrade del versante nord (Solicchiata, Passopisciaro, Rovittello) con i vini Etna DOC da Nerello e Carricante.", km:"da 5 a 20 km", t:"" },
    en:{ n:"Etna wineries", d:"The northern-slope districts (Solicchiata, Passopisciaro, Rovittello), home of Etna DOC wines from Nerello and Carricante.", km:"5 to 20 km", t:"" } },

  { cat:"enogastronomia", img:"piedimonte-festa",
    it:{ n:"Bronte e il pistacchio", d:"Il paese del pistacchio DOP coltivato sulla lava, sul versante occidentale del vulcano.", km:"circa 45 km", t:"circa 1 h" },
    en:{ n:"Bronte and its pistachio", d:"The home of PDO pistachios grown on lava, on the volcano's western slope.", km:"about 45 km", t:"about 1 h" } }
];

/* -----------------------------------------------------------------------------
   RECENSIONI IN EVIDENZA
   -----------------------------------------------------------------------------
   Questo elenco è VUOTO di proposito: i testi delle recensioni non sono
   pubblicati nel codice della pagina Airbnb, quindi non è stato possibile
   recuperarli automaticamente e non sono stati inventati.

   Per farle comparire sul sito, apri l'annuncio, scegli le recensioni che
   preferisci e copiale qui sotto. La sezione "Cosa dicono gli ospiti" le
   mostrerà da sola, sopra i punteggi.

   Esempio della forma da usare (togli le barre // per attivarlo):

   { autore:"Giulia", data:"luglio 2025", paese:"Milano, Italia",
     it:"Testo della recensione, copiato senza modifiche.",
     en:"Optional English translation of the same review." },

   Regole: riporta il testo fedelmente, non riscriverlo; indica sempre
   il nome così come appare su Airbnb.
   -------------------------------------------------------------------------- */
window.RECENSIONI = [
];

/* ------------------------------------------------------------------ itinerari */
window.ITINERARI = [
  { img:"etna-innevato", badge:"1 giorno", badgeEn:"1 day",
    it:{ t:"Un giorno sull'Etna", s:["Colazione presto e salita verso Linguaglossa","Piano Provenzana: escursione o jeep verso i crateri","Pranzo in un rifugio della Pineta Ragabo","Rientro lento tra le contrade del vino","Aperitivo in cantina a Passopisciaro"] },
    en:{ t:"A day on Etna", s:["Early breakfast and drive up to Linguaglossa","Piano Provenzana: hike or jeep tour towards the craters","Lunch at a mountain refuge in Pineta Ragabo","Slow return through the wine districts","Sunset tasting at a Passopisciaro winery"] } },

  { img:"taormina-isola-bella", badge:"1 giorno", badgeEn:"1 day",
    it:{ t:"Taormina e Isola Bella", s:["Parcheggio Lumbi o Porta Catania e navetta","Teatro Antico al mattino, prima del caldo","Corso Umberto e Villa Comunale","Funivia per Mazzarò e Isola Bella","Cena a Giardini Naxos sul lungomare"] },
    en:{ t:"Taormina and Isola Bella", s:["Park at Lumbi or Porta Catania and take the shuttle","The Ancient Theatre early, before the heat","Corso Umberto and the Villa Comunale gardens","Cable car down to Mazzarò and Isola Bella","Dinner on the Giardini Naxos seafront"] } },

  { img:"spiaggia-ionica", badge:"1 giorno", badgeEn:"1 day",
    it:{ t:"Una giornata tra mare e lava", s:["Mattina alla spiaggia di Marina di Cottone","Granita e brioche a metà mattina","Pranzo di pesce a Riposto o Torre Archirafi","Pomeriggio alle Gole dell'Alcantara","Tramonto dal balcone di casa"] },
    en:{ t:"A day between sea and lava", s:["Morning at Marina di Cottone beach","Granita and brioche mid-morning","Seafood lunch in Riposto or Torre Archirafi","Afternoon at the Alcantara Gorges","Sunset from the balcony at home"] } },

  { img:"piedimonte-festa", badge:"1 giorno", badgeEn:"1 day",
    it:{ t:"Borghi e sapori dell'Etna", s:["Partenza in treno con la Circumetnea","Castiglione di Sicilia e il suo castello","Randazzo, pranzo tra le vie in pietra lavica","Sosta a Bronte per il pistacchio","Rientro con la luce bassa sul vulcano"] },
    en:{ t:"Etna villages and flavours", s:["Depart by train on the Circumetnea railway","Castiglione di Sicilia and its castle","Randazzo: lunch among lava-stone streets","Stop in Bronte for pistachio","Return with low light on the volcano"] } },

  { img:"catania-duomo", badge:"weekend", badgeEn:"weekend",
    it:{ t:"Weekend nella Sicilia orientale", s:["Sabato mattina: Catania barocca e la Pescheria","Sabato pomeriggio: Acireale e la Timpa","Domenica mattina: Aci Trezza e i Faraglioni","Domenica pomeriggio: Castelmola e Taormina","Cena di rientro a Piedimonte"] },
    en:{ t:"A weekend in eastern Sicily", s:["Saturday morning: baroque Catania and the fish market","Saturday afternoon: Acireale and the Timpa cliffs","Sunday morning: Aci Trezza and its sea stacks","Sunday afternoon: Castelmola and Taormina","Dinner back in Piedimonte"] } }
];
