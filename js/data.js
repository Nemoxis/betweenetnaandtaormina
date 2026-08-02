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
   FOTOGRAFIE DEI LUOGHI (cartella Visit/)
   -----------------------------------------------------------------------------
   Immagini di Unsplash, usate secondo la licenza Unsplash. L'attribuzione non è
   obbligatoria ma la mettiamo comunque: compare in piccolo su ogni fotografia e
   per esteso nella pagina crediti.html.
   Autore e id sono ricavati dal nome del file originale, non inventati.
   Per aggiungerne altre: tools/optimize-visit.py, poi una riga qui sotto.
   -------------------------------------------------------------------------- */
window.PHOTOS_VISIT = {
  "v-alcantara-gole":      { w:[640,1024,1440], a:"Wolfgang Hasselmann",  u:"TMj6xJfKP3U",
    p:"50% 72%",
    it:"Le pareti di basalto delle Gole dell'Alcantara viste dal fiume",
    en:"The basalt walls of the Alcantara Gorges seen from the river" },
  "v-alcantara-acqua":     { w:[640,1024,1440], a:"Carlo Alberto Burato", u:"F2ExLAPJWqA",
    p:"50% 48%",
    it:"L'acqua che scorre tra le colonne di basalto delle Gole dell'Alcantara",
    en:"Water running between the basalt columns of the Alcantara Gorges" },
  "v-castelmola-panorama": { w:[640,1024,1440], a:"Umberto di Capua",     u:"2ofYWyFXBBo",
    p:"50% 80%",
    it:"La baia di Taormina vista dal belvedere di Castelmola",
    en:"The bay of Taormina seen from the Castelmola belvedere" },
  "v-castelmola-tetti":    { w:[640,1024,1440], a:"Yoav Aziz",            u:"to8ugTFsONc",
    p:"50% 45%",
    it:"I tetti di Castelmola sopra il mare, fra le palme e la ringhiera del belvedere",
    en:"The rooftops of Castelmola above the sea, between palms and the belvedere railing" },
  "v-castiglione":         { w:[640,1024,1440], a:"Vitalii Kyktov",       u:"8uNfchHOVZE",
    it:"Le case di Castiglione di Sicilia aggrappate al versante",
    en:"The houses of Castiglione di Sicilia clinging to the hillside" },
  "v-catania-cattedrale":  { w:[640,1024,1440], a:"Mateusz Butkiewicz",   u:"cEYzWTU8PmQ",
    p:"50% 40%",
    it:"La cupola della cattedrale di Sant'Agata a Catania",
    en:"The dome of Sant'Agata cathedral in Catania" },
  "v-catania-etna":        { w:[640,1024,1440], a:"Samir Kharrat",        u:"XLHOHmKj7g8",
    it:"Una cupola barocca di Catania con l'Etna in attività sullo sfondo",
    en:"A baroque dome in Catania with Etna active in the background" },
  "v-catania-liotru":      { w:[640,1024,1440], a:"Maria Bobrova",        u:"7xy3l9RV4Qw",
    p:"50% 50%",
    it:"La fontana dell'Elefante in piazza del Duomo a Catania, con l'obelisco e l'elefante di pietra lavica",
    en:"The Elephant fountain in Piazza del Duomo, Catania, with the obelisk and the lava-stone elephant" },
  "v-catania-crociferi":   { w:[640,1024,1440], a:"Carla Lipani",         u:"f2PyFPC34Z8",
    p:"50% 45%",
    it:"Via Crociferi a Catania, fra le facciate barocche delle chiese, con l'arco in fondo alla strada",
    en:"Via Crociferi in Catania, between the baroque church fronts, with the arch at the end of the street" },
  "v-catania-mercato":     { w:[640,1024,1440], a:"Mateusz Butkiewicz",   u:"5R5zxf23u5k",
    p:"50% 50%",
    it:"Le bancarelle di un mercato di strada nel centro di Catania, sotto le tende da sole e i balconi",
    en:"The stalls of a street market in central Catania, under the awnings and balconies" },
  "v-etna-crateri":        { w:[640,1024,1440], a:"Dimitra Karkaveli",    u:"zNtseoD2y58",
    p:"50% 90%",
    it:"Fila di escursionisti sul bordo di un cratere dell'Etna",
    en:"A line of hikers on the rim of an Etna crater" },
  "v-etna-colata":         { w:[640,1024,1440], a:"Dimitra Karkaveli",    u:"QiYnTJITYfM",
    p:"50% 38%",
    it:"Le pendici nere dell'Etna, tra sabbia lavica e prime piante",
    en:"The black slopes of Etna, between volcanic sand and the first plants" },
  "v-etna-jeep":           { w:[640,1024,1440], a:"Dimitra Karkaveli",    u:"bvj_BaixSIY",
    it:"Un mezzo per escursioni sulla strada sterrata che sale sull'Etna",
    en:"An excursion vehicle on the dirt road climbing Etna" },
  "v-serracozzo":          { w:[640,1024,1440], a:"Anastasiia Rozumna",   u:"Yjd7r0giPe4",
    p:"50% 44%",
    it:"Un cono spento dell'Etna nella zona di Serracozzo, tra sabbia lavica nera ed erba secca",
    en:"An extinct cone on Etna in the Serracozzo area, between black volcanic sand and dry grass" },
  "v-etna-eruzione-neve":  { w:[640,1024,1440], a:"Serena Torrisi",       u:"YQvtPMoDyY8",
    p:"50% 55%",
    it:"Eruzione dell'Etna sul versante innevato del vulcano",
    en:"An Etna eruption on the volcano's snow-covered flank" },
  "v-etna-eruzione":       { w:[640,1024,1440], a:"Serena Torrisi",       u:"UoBlTq81xew",
    it:"Colata di lava incandescente sull'Etna di notte",
    en:"Glowing lava flow on Etna at night" },
  "v-giardini-naxos":      { w:[640,1024,1440], a:"Casey Lovegrove",      u:"RfxclNteIqY",
    p:"50% 74%",
    it:"Una via di Giardini Naxos con i balconi e le facciate colorate",
    en:"A street in Giardini Naxos with balconies and colourful façades" },
  "v-isola-bella":         { w:[640,1024,1440], a:"Yoav Aziz",            u:"Nnzup-v5Qmc",
    p:"50% 40%",
    it:"Isola Bella e la spiaggia di ciottoli che la collega alla costa",
    en:"Isola Bella and the pebble beach linking it to the shore" },
  "v-isola-bella-alto":    { w:[640,1024,1440], a:"Thomas Lamars",        u:"NfRy9oMiUBo",
    p:"50% 40%",
    it:"Isola Bella vista dall'alto, circondata dall'acqua trasparente",
    en:"Isola Bella from above, surrounded by clear water" },
  "v-randazzo":            { w:[640,1024,1440], a:"Jens Aber",            u:"mCod1-FYLGg",
    it:"Rosone in pietra chiara su un muro di pietra lavica a Randazzo",
    en:"A pale stone rose window set into a lava-stone wall in Randazzo" },
  "v-taormina-teatro":     { w:[640,1024,1440], a:"Stepan Dudycha",       u:"N1T_VfHz7FI",
    it:"Il Teatro Antico di Taormina affacciato sulla baia di Naxos",
    en:"The Ancient Theatre of Taormina looking over the bay of Naxos" },
  "v-taormina-costa":      { w:[640,1024,1440], a:"Xihao Liu",            u:"ADOO1jwhXas",
    p:"50% 85%",
    it:"Le colonne del Teatro Antico di Taormina e la costa ionica",
    en:"The columns of Taormina's Ancient Theatre and the Ionian coast" }
};

/* -----------------------------------------------------------------------------
   PUNTI DI INTERESSE
   cat è un elenco: una meta può stare in più categorie e comparire sotto
   ciascun filtro. La prima categoria è quella principale.
   Categorie in uso: etna | borghi | mare | cultura
   Le distanze sono STRADALI E INDICATIVE, calcolate da Piedimonte Etneo.
   Aggiornale quando inserisci l'indirizzo esatto in config.js.
   -------------------------------------------------------------------------- */
window.POI = [
  { cat:["etna"], img:"v-etna-eruzione-neve",
    it:{ n:"Etna Nord, Piano Provenzana", d:"Il versante nord del vulcano: pinete, colate recenti e la partenza delle escursioni verso i crateri sommitali.", km:"circa 30 km", t:"circa 50 min" },
    en:{ n:"Etna North: Piano Provenzana", d:"The volcano's northern slope: pine forests, recent lava flows and the starting point for hikes to the summit craters.", km:"about 30 km", t:"about 50 min" } },

  { cat:["etna"], img:"v-etna-crateri",
    it:{ n:"Escursione ai crateri sommitali", d:"La salita fino a oltre 3000 metri, dove il vulcano fuma davvero. Si va solo con guide alpine o vulcanologiche autorizzate, che forniscono anche casco e attrezzatura: da soli, oltre una certa quota, non si può.", km:"partenza da Piano Provenzana", t:"mezza giornata" },
    en:{ n:"Hike to the summit craters", d:"The climb above 3,000 metres, where the volcano really does smoke. Only with authorised alpine or volcanological guides, who also provide helmet and equipment: above a certain altitude you cannot go alone.", km:"departs from Piano Provenzana", t:"half a day" } },

  { cat:["etna"], img:"v-etna-colata",
    it:{ n:"La Valle del Bove", d:"L'enorme conca a ferro di cavallo sul fianco orientale dell'Etna, con pareti alte fino a mille metri: è qui che finiscono quasi tutte le colate. Le escursioni partono dal Rifugio Citelli.", km:"circa 30 km", t:"circa 50 min" },
    en:{ n:"Valle del Bove", d:"The huge horseshoe-shaped hollow on Etna's eastern flank, with walls up to a thousand metres high: this is where almost every lava flow ends up. Hikes start from Rifugio Citelli.", km:"about 30 km", t:"about 50 min" } },

  { cat:["etna"], img:"v-serracozzo",
    it:{ n:"Grotta di Serracozzo", d:"Una galleria scavata dalla lava dell'eruzione del 1971, a 1851 metri di quota. Il sentiero parte poco prima del Rifugio Citelli e attraversa boschi di betulle e faggi: circa un chilometro e mezzo a piedi.", km:"circa 30 km", t:"circa 50 min" },
    en:{ n:"Serracozzo lava cave", d:"A tunnel carved by the lava of the 1971 eruption, at 1,851 metres. The path starts just before Rifugio Citelli and crosses birch and beech woods: about a kilometre and a half on foot.", km:"about 30 km", t:"about 50 min" } },

  { cat:["etna","borghi"], img:"v-etna-jeep",
    it:{ n:"Linguaglossa e la Pineta Ragabo", d:"Il paese-porta dell'Etna nord, con la sua pineta secolare e le strade forestali che salgono verso quota 1800.", km:"circa 8 km", t:"circa 12 min" },
    en:{ n:"Linguaglossa and Pineta Ragabo", d:"The gateway town to northern Etna, with its centuries-old pine wood and forest roads climbing to 1,800 m.", km:"about 8 km", t:"about 12 min" } },

  { cat:["cultura","borghi"], img:"piedimonte-festa",
    it:{ n:"Ferrovia Circumetnea", d:"La stazione è a pochi passi dalla casa: il trenino compie il giro del vulcano tra vigne, colate e paesi in pietra lavica.", km:"a pochi passi", t:"" },
    en:{ n:"Circumetnea Railway", d:"The station is a few steps from the house: the little train circles the volcano through vineyards, lava flows and stone villages.", km:"a few steps away", t:"" } },

  { cat:["borghi","cultura"], img:"v-taormina-teatro",
    it:{ n:"Taormina", d:"Il Teatro Antico affacciato sul mare, Corso Umberto, i giardini della Villa Comunale e i belvedere sulla baia di Naxos.", km:"circa 20 km", t:"circa 30 min" },
    en:{ n:"Taormina", d:"The ancient Greek theatre above the sea, Corso Umberto, the Villa Comunale gardens and the viewpoints over the bay of Naxos.", km:"about 20 km", t:"about 30 min" } },

  { cat:["mare"], img:"v-isola-bella",
    it:{ n:"Isola Bella", d:"Riserva naturale e piccola isola collegata alla spiaggia da una lingua di ciottoli, sotto la rupe di Taormina. Gli scogli sono taglienti: le scarpe da mare non sono un optional.", km:"circa 20 km", t:"circa 30 min" },
    en:{ n:"Isola Bella", d:"A nature reserve and tiny island linked to the beach by a pebble spit, below the Taormina cliff. The rocks are sharp: water shoes are not optional here.", km:"about 20 km", t:"about 30 min" } },

  { cat:["borghi"], img:"v-castelmola-panorama",
    it:{ n:"Castelmola", d:"Uno dei Borghi più belli d'Italia, sospeso sopra Taormina: la piazzetta panoramica, il vino alla mandorla e, sulla strada che sale, la chiesa della Madonna della Rocca, scavata dentro la roccia.", km:"circa 25 km", t:"circa 40 min" },
    en:{ n:"Castelmola", d:"One of the officially designated Borghi più belli d'Italia, suspended above Taormina: the panoramic little square, almond wine and, on the road up, the church of the Madonna della Rocca, cut into the rock.", km:"about 25 km", t:"about 40 min" } },

  { cat:["mare"], img:"spiaggia-ionica",
    it:{ n:"Marina di Cottone", d:"Spiaggia di ghiaia e sabbia scura alla foce dell'Alcantara, tra le più vicine alla casa.", km:"circa 9 km", t:"circa 15 min" },
    en:{ n:"Marina di Cottone", d:"Dark sand-and-shingle beach at the mouth of the Alcantara, among the closest to the house.", km:"about 9 km", t:"about 15 min" } },

  { cat:["mare"], img:"mare-tramonto",
    it:{ n:"Fondachello di Mascali", d:"Lungo litorale di ciottoli lavici, stabilimenti e chioschi, con l'Etna alle spalle.", km:"circa 12 km", t:"circa 20 min" },
    en:{ n:"Fondachello di Mascali", d:"A long lava-pebble shoreline with beach clubs and kiosks, Etna rising behind.", km:"about 12 km", t:"about 20 min" } },

  { cat:["mare"], img:"spiaggia-ionica",
    it:{ n:"San Marco di Calatabiano", d:"Spiaggia ampia e tranquilla ai piedi del castello di Calatabiano.", km:"circa 11 km", t:"circa 18 min" },
    en:{ n:"San Marco di Calatabiano", d:"A wide, quiet beach at the foot of Calatabiano castle.", km:"about 11 km", t:"about 18 min" } },

  { cat:["mare","borghi"], img:"v-giardini-naxos",
    it:{ n:"Giardini Naxos", d:"La prima colonia greca di Sicilia, oggi lungomare, spiagge e il parco archeologico di Naxos.", km:"circa 17 km", t:"circa 25 min" },
    en:{ n:"Giardini Naxos", d:"Sicily's first Greek colony: today a seafront promenade, beaches and the Naxos archaeological park.", km:"about 17 km", t:"about 25 min" } },

  { cat:["etna"], img:"v-alcantara-gole",
    it:{ n:"Gole dell'Alcantara", d:"Pareti di basalto colonnare scavate dal fiume: si scende a piedi fino all'acqua, gelida anche d'estate.", km:"circa 20 km", t:"circa 30 min" },
    en:{ n:"Alcantara Gorges", d:"Columnar basalt walls carved by the river; you walk down to water that stays icy even in summer.", km:"about 20 km", t:"about 30 min" } },

  { cat:["borghi","cultura"], img:"v-castiglione",
    it:{ n:"Castiglione di Sicilia", d:"Borgo medievale sospeso sulla valle dell'Alcantara, con il castello normanno e la chiesetta bizantina della Cuba in fondo alla valle.", km:"circa 18 km", t:"circa 30 min" },
    en:{ n:"Castiglione di Sicilia", d:"A medieval village above the Alcantara valley, with its Norman castle and the small Byzantine church of La Cuba down in the valley.", km:"about 18 km", t:"about 30 min" } },

  { cat:["borghi","cultura"], img:"v-randazzo",
    it:{ n:"Randazzo", d:"Città medievale in pietra lavica sul versante nord, rimasta intatta nonostante secoli di eruzioni.", km:"circa 25 km", t:"circa 35 min" },
    en:{ n:"Randazzo", d:"A medieval town built in lava stone on the northern slope, intact despite centuries of eruptions.", km:"about 25 km", t:"about 35 min" } },

  { cat:["borghi","cultura"], img:"etna-dal-paese",
    it:{ n:"Forza d'Agrò", d:"Borgo arroccato con vista fino alla Calabria, le sue antiche chiese e il convento agostiniano del Cinquecento: il chiostro, la sala di San Nicola e le cripte sotterranee dove venivano sepolti i monaci.", km:"circa 30 km", t:"circa 45 min" },
    en:{ n:"Forza d'Agrò", d:"A hilltop village with views as far as Calabria, its old churches and the sixteenth-century Augustinian convent: the cloister, the hall of San Nicola and the underground crypts where the monks were buried.", km:"about 30 km", t:"about 45 min" } },

  { cat:["borghi","cultura"], img:"v-catania-cattedrale",
    it:{ n:"Catania", d:"La cattedrale di Sant'Agata affacciata su Piazza Duomo e, al centro della piazza, l'obelisco sorretto dall'elefante di pietra lavica: u Liotru, simbolo della città. Poi via Crociferi, il mercato della Pescheria e il Castello Ursino.", km:"circa 45 km", t:"circa 40 min" },
    en:{ n:"Catania", d:"The cathedral of Sant'Agata on Piazza Duomo and, at its centre, the obelisk carried by a lava-stone elephant: u Liotru, the city's emblem. Then Via Crociferi, the Pescheria fish market and Castello Ursino.", km:"about 45 km", t:"about 40 min" } },

  { cat:["borghi","cultura"], img:"v-catania-etna",
    it:{ n:"Acireale", d:"Barocco settecentesco, la Timpa a picco sul mare e uno dei carnevali più noti d'Italia.", km:"circa 30 km", t:"circa 30 min" },
    en:{ n:"Acireale", d:"Eighteenth-century baroque, the Timpa cliffs above the sea and one of Italy's best-known carnivals.", km:"about 30 km", t:"about 30 min" } },

  { cat:["cultura"], img:"balcone-vista-etna",
    it:{ n:"Le cantine dell'Etna", d:"Le contrade del versante nord (Solicchiata, Passopisciaro, Rovittello) con i vini Etna DOC da Nerello e Carricante.", km:"da 5 a 20 km", t:"" },
    en:{ n:"Etna wineries", d:"The northern-slope districts (Solicchiata, Passopisciaro, Rovittello), home of Etna DOC wines from Nerello and Carricante.", km:"5 to 20 km", t:"" } },

  { cat:["borghi","cultura"], img:"etna-innevato",
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
/* Itinerari: ogni tappa è un luogo, con poche parole che dicono perché. */
window.ITINERARI = [
  { img:"v-castelmola-tetti", pos:"50% 55%", badge:"weekend", badgeEn:"weekend",
    it:{ t:"Weekend nella Sicilia orientale", s:["Catania, il barocco di Piazza Duomo","La Pescheria, mercato a cielo aperto","Acireale e il ciglio della Timpa","Aci Trezza, i faraglioni del Ciclope","Aci Castello, il maniero sulla lava","Castelmola, con Taormina ai piedi"] },
    en:{ t:"A weekend in eastern Sicily", s:["Catania, the baroque of Piazza Duomo","The Pescheria, an open-air market","Acireale and the edge of the Timpa","Aci Trezza, the Cyclops' sea stacks","Aci Castello, the keep on the lava","Castelmola, with Taormina at its feet"] } },

  { img:"v-etna-colata", pos:"50% 35%", badge:"1 giorno", badgeEn:"1 day",
    it:{ t:"Un giorno sull'Etna", s:["Linguaglossa, porta del versante nord","Piano Provenzana, da dove si sale ai crateri","Pineta Ragabo, faggi e betulle a duemila metri","Le contrade del vino, fra le colate","Passopisciaro, l'ultimo bicchiere"] },
    en:{ t:"A day on Etna", s:["Linguaglossa, gateway to the northern slope","Piano Provenzana, where the climb to the craters starts","Pineta Ragabo, beech and birch at two thousand metres","The wine districts, among the lava flows","Passopisciaro, the last glass"] } },

  { img:"v-isola-bella-alto", pos:"50% 35%", badge:"1 giorno", badgeEn:"1 day",
    it:{ t:"Taormina e Isola Bella", s:["Teatro Antico, il mare fra le colonne","Corso Umberto, da una porta all'altra","Villa Comunale, giardini sospesi sul golfo","Funivia giù a Mazzarò","Isola Bella, riserva e istmo di ciottoli","Giardini Naxos, lungomare e cena"] },
    en:{ t:"Taormina and Isola Bella", s:["The Ancient Theatre, the sea between the columns","Corso Umberto, from one gate to the other","Villa Comunale, gardens hung above the gulf","Cable car down to Mazzarò","Isola Bella, a reserve on a pebble spit","Giardini Naxos, the seafront and dinner"] } },

  { img:"v-catania-cattedrale", pos:"50% 35%", badge:"1 giorno", badgeEn:"1 day",
    it:{ t:"Catania, il primo giorno", s:["Piazza Duomo e u Liotru, l'elefante di lava","Cattedrale di Sant'Agata, e la tomba di Bellini","La Pescheria, meglio prima delle undici","Via Etnea, con il vulcano in fondo alla strada","Quattro Canti, aperitivo quando cala la luce"] },
    en:{ t:"Catania, day one", s:["Piazza Duomo and u Liotru, the lava elephant","Sant'Agata cathedral, and Bellini's tomb","The Pescheria, better before eleven","Via Etnea, the volcano at the end of the street","Quattro Canti, an aperitivo as the light drops"] } },

  { img:"catania-duomo", pos:"50% 40%", badge:"1 giorno", badgeEn:"1 day",
    it:{ t:"Catania sotterranea e barocca", s:["Via Crociferi, quattro chiese in cento metri","Monastero dei Benedettini, fra i più grandi d'Europa","Castello Ursino, circondato dalla lava del 1669","Teatro Romano, incastrato fra i palazzi","Villa Bellini, un'ora d'ombra","Via Santa Filomena, tavoli sulla strada"] },
    en:{ t:"Catania, baroque and underground", s:["Via Crociferi, four churches in a hundred metres","The Benedictine Monastery, among Europe's largest","Castello Ursino, ringed by the lava of 1669","The Roman Theatre, wedged between the buildings","Villa Bellini, an hour of shade","Via Santa Filomena, tables in the street"] } },

  { img:"mare-tramonto", pos:"50% 35%", badge:"1 giorno", badgeEn:"1 day",
    it:{ t:"Acireale e la riviera dei Ciclopi", s:["Piazza Duomo, barocco fino ai cornicioni","La Timpa, la falesia a picco sul mare","Santa Maria La Scala, borgo di pescatori","Aci Trezza e i suoi faraglioni","Aci Castello, il castello normanno sulla rupe"] },
    en:{ t:"Acireale and the Riviera dei Ciclopi", s:["Piazza Duomo, baroque up to the cornices","The Timpa, the cliff sheer above the sea","Santa Maria La Scala, a fishing hamlet","Aci Trezza and its sea stacks","Aci Castello, the Norman castle on the crag"] } },

  { img:"v-serracozzo", pos:"50% 55%", badge:"1 giorno", badgeEn:"1 day",
    it:{ t:"A piedi sulla Valle del Bove", s:["Rifugio Citelli, quota millesettecento","Sentiero di Serracozzo, fra betulle e faggi","Grotta di Serracozzo, galleria di lava del 1971","Belvedere sulla Valle del Bove"] },
    en:{ t:"On foot above the Valle del Bove", s:["Rifugio Citelli, at seventeen hundred metres","The Serracozzo path, through birch and beech","Serracozzo cave, a lava tunnel from 1971","The Valle del Bove viewpoint"] } },

  { img:"v-alcantara-acqua", pos:"50% 35%", badge:"1 giorno", badgeEn:"1 day",
    it:{ t:"Fra mare e lava", s:["Marina di Cottone, ciottoli neri e acqua alta","Riposto, il porto e il pesce del mattino","Torre Archirafi, l'acqua ferrosa","Gole dell'Alcantara, basalto e acqua gelata"] },
    en:{ t:"Between sea and lava", s:["Marina di Cottone, black pebbles and deep water","Riposto, the harbour and the morning catch","Torre Archirafi, its iron-rich water","Alcantara Gorges, basalt and freezing water"] } },

  { img:"v-randazzo", pos:"50% 40%", badge:"1 giorno", badgeEn:"1 day",
    it:{ t:"Borghi e sapori dell'Etna", s:["Ferrovia Circumetnea, il giro del vulcano","Castiglione di Sicilia e il castello normanno","Randazzo, la città tagliata nella pietra nera","Bronte, il pistacchio DOP","Contea di Nelson, il castello dell'ammiraglio"] },
    en:{ t:"Etna villages and flavours", s:["The Circumetnea railway, right around the volcano","Castiglione di Sicilia and its Norman castle","Randazzo, a town cut from black stone","Bronte, home of PDO pistachio","The Nelson estate, the admiral's castle"] } }
];
