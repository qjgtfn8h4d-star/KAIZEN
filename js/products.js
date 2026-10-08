/* ==========================================================
   KAIZEN — DATOS EDITABLES
   ========================================================== */

// ---- Configuración general --------------------------------
const WHATSAPP_NUMBER    = "59891892109";
const INSTAGRAM_USERNAME = "kaizen.olf";
const STORE_NAME         = "KAIZEN";
const STORE_LOCATION     = "Montevideo, Uruguay";
const MP_INSTALLMENTS    = 3;

const FEATURED = [
  "lattafa-khamrah",
  "french-avenue-liquid-brun",
  "lattafa-oud-for-glory"
];

/* ----------------------------------------------------------
   PRODUCTOS
   transfer = precio por transferencia
   mp       = precio Mercado Pago
   null     = consultar
   ---------------------------------------------------------- */

const PRODUCTS = [

  // =========================================================
  // FRENCH AVENUE / PARIS CORNER
  // =========================================================

  {
    id: "french-avenue-liquid-brun",
    brand: "French Avenue",
    name: "Liquid Brun",
    category: "arabe",
    concentration: "Eau de Parfum",
    ml: 100,
    transfer: 3190,
    mp: 3490,
    image: "liquid-brun.webp"
  },

  {
    id: "paris-corner-mandarin-sky",
    brand: "Armaf",
    name: "Odyssey Mandarin Sky",
    category: "arabe",
    concentration: "Eau de Parfum",
    ml: 100,
    transfer: 2690,
    mp: 2990,
    image: "mandarin-sky.webp"
  },

  {
    id: "french-avenue-vulcan-baie",
    brand: "French Avenue",
    name: "Vulcan Baie",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 3190,
    mp: 3490,
    image: "vulcan-baie.webp"
  },

  {
    id: "french-avenue-vulcan-sable",
    brand: "French Avenue",
    name: "Vulcan Sable",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 3190,
    mp: 3490,
    image: "vulcan-sable.webp"
  },


  // =========================================================
  // AL HARAMAIN
  // =========================================================

  {
    id: "al-haramain-gold",
    brand: "Al Haramain",
    name: "Gold",
    category: "arabe",
    concentration: "Pure Perfume",
    ml: 120,
    transfer: 4190,
    mp: 4590,
    image: "amber-oud-gold-edition.webp"
  },

  {
    id: "al-haramain-amber-oud-gold-edition-extreme",
    brand: "Al Haramain",
    name: "Amber Oud Gold Edition Extreme",
    category: "arabe",
    concentration: "Pure Perfume",
    ml: null,
    transfer: 4290,
    mp: 4690,
    image: "amber-oud-gold-extreme.webp"
  },

  {
    id: "al-haramain-bleu",
    brand: "Al Haramain",
    name: "Bleu",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 3790,
    mp: 4190,
    image: ""
  },

  {
    id: "al-haramain-aqua",
    brand: "Al Haramain",
    name: "Aqua",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 3790,
    mp: 4190,
    image: ""
  },

  {
    id: "al-haramain-dubai-night",
    brand: "Al Haramain",
    name: "Dubai Night",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 3590,
    mp: 3990,
    image: ""
  },

  {
    id: "al-haramain-ruby",
    brand: "Al Haramain",
    name: "Ruby",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 3790,
    mp: 4190,
    image: ""
  },

  {
    id: "al-haramain-detour-noir",
    brand: "Al Haramain",
    name: "Detour Noir",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 2890,
    mp: 3190,
    image: ""
  },


  // =========================================================
  // LATTAFA
  // =========================================================

  {
    id: "lattafa-yara",
    brand: "Lattafa",
    name: "Yara",
    category: "arabe",
    concentration: "Eau de Parfum",
    ml: 100,
    transfer: 2550,
    mp: 2890,
    image: "yara.webp"
  },

  {
    id: "lattafa-dynasty",
    brand: "Lattafa",
    name: "Dynasty",
    category: "arabe",
    concentration: "Eau de Parfum",
    ml: 100,
    transfer: 2690,
    mp: 2990,
    image: "dynasty.webp"
  },

  {
    id: "lattafa-khamrah",
    brand: "Lattafa",
    name: "Khamrah",
    category: "arabe",
    concentration: "Eau de Parfum",
    ml: 100,
    transfer: 2690,
    mp: 2990,
    image: "khamrah.webp"
  },

  {
    id: "lattafa-khamrah-qahwa",
    brand: "Lattafa",
    name: "Khamrah Qahwa",
    category: "arabe",
    concentration: "",
    ml: 100,
    transfer: 2490,
    mp: 2790,
    image: ""
  },

  {
    id: "lattafa-khamrah-dukhan",
    brand: "Lattafa",
    name: "Khamrah Dukhan",
    category: "arabe",
    concentration: "",
    ml: 100,
    transfer: 2490,
    mp: 2790,
    image: ""
  },

  {
    id: "lattafa-khamrah-waha",
    brand: "Lattafa",
    name: "Khamrah Waha",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 3490,
    mp: 3790,
    image: ""
  },

  {
    id: "lattafa-asad",
    brand: "Lattafa",
    name: "Asad",
    category: "arabe",
    concentration: "Eau de Parfum",
    ml: 100,
    transfer: 2390,
    mp: 2690,
    image: ""
  },

  {
    id: "lattafa-asad-zanzibar",
    brand: "Lattafa",
    name: "Asad Zanzibar",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 2290,
    mp: 2590,
    image: ""
  },

  {
    id: "lattafa-asad-bourbon",
    brand: "Lattafa",
    name: "Asad Bourbon",
    category: "arabe",
    concentration: "Eau de Parfum",
    ml: 100,
    transfer: 2700,
    mp: 2990,
    image: "asad-bourbon.webp"
  },

  {
    id: "lattafa-fakhar",
    brand: "Lattafa",
    name: "Fakhar",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 2290,
    mp: 2590,
    image: ""
  },

  {
    id: "lattafa-eclaire",
    brand: "Lattafa",
    name: "Eclaire",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 2490,
    mp: 2790,
    image: ""
  },

  {
    id: "lattafa-emaan",
    brand: "Lattafa",
    name: "Emaan",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 2390,
    mp: 2590,
    image: ""
  },

  {
    id: "lattafa-mayar",
    brand: "Lattafa",
    name: "Mayar",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 2390,
    mp: 2590,
    image: ""
  },

  {
    id: "lattafa-mayar-cherry",
    brand: "Lattafa",
    name: "Mayar Cherry",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 2790,
    mp: 3090,
    image: ""
  },

  {
    id: "lattafa-atlas",
    brand: "Lattafa",
    name: "Atlas",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 2490,
    mp: 2790,
    image: ""
  },

  {
    id: "lattafa-oud-for-glory",
    brand: "Lattafa",
    name: "Badee Al Oud Oud for Glory",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 2600,
    mp: 2890,
    image: "oud-for-glory.webp"
  },

  {
    id: "lattafa-the-kingdom",
    brand: "Lattafa",
    name: "The Kingdom",
    category: "arabe",
    concentration: "Eau de Parfum",
    ml: 100,
    transfer: 2290,
    mp: 2590,
    image: "the-kingdom.webp"
  },

  {
    id: "lattafa-opulent-dubai",
    brand: "Lattafa",
    name: "Opulent Dubai",
    category: "arabe",
    concentration: "Eau de Parfum",
    ml: 100,
    transfer: 2190,
    mp: 2490,
    image: "opulent-dubai.webp"
  },

  {
    id: "lattafa-hayaati-al-maleky",
    brand: "Lattafa",
    name: "Hayaati Al Maleky",
    category: "arabe",
    concentration: "Eau de Parfum",
    ml: 100,
    transfer: 2390,
    mp: 2690,
    image: ""
  },


  // =========================================================
  // AFNAN
  // =========================================================

  {
    id: "afnan-9pm-night-out",
    brand: "Afnan",
    name: "9 PM Night Out",
    category: "arabe",
    concentration: "Extrait de Parfum",
    ml: 100,
    transfer: 4190,
    mp: 4590,
    image: "9pm-night-out.webp"
  },

  {
    id: "turathi-blue-gift-set",
    brand: "Afnan",
    name: "Turathi Blue Gift Set",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 3690,
    mp: 3990,
    image: ""
  },


  // =========================================================
  // RASASI
  // =========================================================

  {
    id: "rasasi-hawas-elixir",
    brand: "Rasasi",
    name: "Hawas Elixir",
    category: "arabe",
    concentration: "Eau de Parfum",
    ml: 100,
    transfer: 3190,
    mp: 3490,
    image: "hawas-elixir.webp"
  },

  {
    id: "rasasi-hawas-malibu",
    brand: "Rasasi",
    name: "Hawas Malibu For Him",
    category: "arabe",
    concentration: "Eau de Parfum",
    ml: 100,
    transfer: 3290,
    mp: 3590,
    image: "hawas-malibu.webp"
  },

  {
    id: "rasasi-hawas-tropical-for-him",
    brand: "Rasasi",
    name: "Hawas Tropical For Him",
    category: "arabe",
    concentration: "Eau de Parfum",
    ml: 100,
    transfer: 3290,
    mp: 3590,
    image: "hawas-tropical.webp"
  },

  {
    id: "rasasi-hawas-for-him",
    brand: "Rasasi",
    name: "Hawas For Him",
    category: "arabe",
    concentration: "Eau de Parfum",
    ml: 100,
    transfer: 2490,
    mp: 2790,
    image: ""
  },

  {
    id: "rasasi-hawas-for-her",
    brand: "Rasasi",
    name: "Hawas For Her",
    category: "arabe",
    concentration: "Eau de Parfum",
    ml: 100,
    transfer: 2490,
    mp: 2790,
    image: ""
  },


  // =========================================================
  // RAYHAAN
  // =========================================================

  {
    id: "rayhaan-pacific",
    brand: "Rayhaan",
    name: "Pacific For Him",
    category: "arabe",
    concentration: "Eau de Parfum",
    ml: 100,
    transfer: 2990,
    mp: 3290,
    image: "rayhaan-pacific.webp"
  },

  {
    id: "rayhaan-elixir",
    brand: "Rayhaan",
    name: "Elixir",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 3290,
    mp: 3590,
    image: "rayhaan-elixir.webp"
  },


  // =========================================================
  // MAST PERFUME
  // =========================================================

  {
    id: "mast-perfume-rome-yum-yum",
    brand: "Mast Perfume",
    name: "Rome Yum Yum",
    category: "arabe",
    concentration: "Eau de Parfum",
    ml: 100,
    transfer: 3190,
    mp: 3490,
    image: "rome-yum-yum.webp"
  },

  {
    id: "mast-perfume-rome-pour-homme",
    brand: "Mast Perfume",
    name: "Rome Pour Homme",
    category: "arabe",
    concentration: "Eau de Parfum",
    ml: 100,
    transfer: 3190,
    mp: 3490,
    image: "rome-pour-homme.webp"
  },


  // =========================================================
  // RIIFFS
  // =========================================================

  {
    id: "riiffs-freeze",
    brand: "Riiffs",
    name: "Freeze",
    category: "arabe",
    concentration: "Extrait de Parfum",
    ml: 100,
    transfer: 3590,
    mp: 3990,
    image: "freeze.webp"
  },

  {
    id: "riiffs-freeze-in-flames",
    brand: "Riiffs",
    name: "Freeze In Flames",
    category: "arabe",
    concentration: "Extrait de Parfum",
    ml: 100,
    transfer: 3790,
    mp: 4190,
    image: "freeze-in-flames.webp"
  },

  {
    id: "riiffs-momento",
    brand: "Riiffs",
    name: "Momento Riiffs",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 2890,
    mp: 3190,
    image: ""
  },


  // =========================================================
  // MAISON ALHAMBRA
  // =========================================================

  {
    id: "maison-alhambra-bad-femme",
    brand: "Maison Alhambra",
    name: "B.A.D Femme",
    category: "arabe",
    concentration: "Eau de Parfum",
    ml: 100,
    transfer: 2490,
    mp: 2790,
    image: "bad-femme.webp"
  },

  {
    id: "maison-alhambra-jean-lowe-vibe",
    brand: "Maison Alhambra",
    name: "Jean Lowe Vibe",
    category: "arabe",
    concentration: "Eau de Parfum",
    ml: 100,
    transfer: 2790,
    mp: 3090,
    image: "jean-lowe-vibe.webp"
  },

  {
    id: "maison-alhambra-jean-lowe-azure",
    brand: "Maison Alhambra",
    name: "Jean Lowe Azure",
    category: "arabe",
    concentration: "Eau de Parfum",
    ml: 100,
    transfer: 2790,
    mp: 3090,
    image: ""
  },

  {
    id: "maison-alhambra-dubai-chocolate",
    brand: "Maison Alhambra",
    name: "Dubai Chocolate",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 2490,
    mp: 2790,
    image: ""
  },

  {
    id: "artisan-ethnique-gift-set",
    brand: "Maison Alhambra",
    name: "Artisan Ethnique Gift Set",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 3390,
    mp: 3690,
    image: ""
  },


  // =========================================================
  // ARMAF
  // =========================================================

  {
    id: "armaf-club-de-nuit-intense-man",
    brand: "Armaf",
    name: "Club de Nuit Intense Man",
    category: "arabe",
    concentration: "Pure Parfum",
    ml: 150,
    transfer: 3590,
    mp: 3990,
    image: "club-de-nuit-intense-man.webp"
  },

  {
    id: "armaf-club-de-nuit-intense-man-extrait",
    brand: "Armaf",
    name: "Club de Nuit Intense Man Extrait",
    category: "arabe",
    concentration: "Extrait de Parfum",
    ml: null,
    transfer: 3590,
    mp: 3990,
    image: "club-de-nuit-intense-man-extrait.webp"
  },

  {
    id: "armaf-club-de-nuit-intense-man-presentacion",
    brand: "Armaf",
    name: "Club de Nuit Intense",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 2800,
    mp: 3090,
    image: "club-de-nuit-intense-man.webp"
  },

  {
    id: "armaf-club-de-nuit-woman-extrait",
    brand: "Armaf",
    name: "Club de Nuit Woman Extrait",
    category: "arabe",
    concentration: "Extrait de Parfum",
    ml: null,
    transfer: 3290,
    mp: 3590,
    image: "club-de-nuit-woman-extrait.webp"
  },

  {
    id: "armaf-club-de-nuit-woman",
    brand: "Armaf",
    name: "Club de Nuit Woman",
    category: "arabe",
    concentration: "Eau de Parfum",
    ml: 105,
    transfer: 2990,
    mp: 3290,
    image: "club-de-nuit-woman.webp"
  },

  {
    id: "armaf-club-de-nuit-urban-man-elixir",
    brand: "Armaf",
    name: "Club de Nuit Urban Man Elixir",
    category: "arabe",
    concentration: "Eau de Parfum",
    ml: 105,
    transfer: 3390,
    mp: 3690,
    image: "club-de-nuit-urban-man-elixir.webp"
  },

  {
    id: "armaf-club-de-nuit-precieux-i",
    brand: "Armaf",
    name: "Club de Nuit Precieux I",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 3490,
    mp: 3790,
    image: "club-de-nuit-precieux.webp"
  },

  {
    id: "armaf-dunescape-dubai",
    brand: "Armaf",
    name: "Dunescape",
    category: "arabe",
    concentration: "Extrait de Parfum",
    ml: null,
    transfer: 3390,
    mp: 3690,
    image: "dunescape-dubai.webp"
  },

  {
    id: "armaf-odyssey-mega",
    brand: "Armaf",
    name: "Odyssey Mega",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 2690,
    mp: 2990,
    image: ""
  },

  {
    id: "armaf-odyssey-homme-black",
    brand: "Armaf",
    name: "Odyssey Homme Black",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 2490,
    mp: 2790,
    image: ""
  },

  {
    id: "armaf-odyssey-homme-white",
    brand: "Armaf",
    name: "Odyssey Homme White",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 2490,
    mp: 2790,
    image: ""
  },

  {
    id: "armaf-odyssey-bahamas",
    brand: "Armaf",
    name: "Odyssey Bahamas",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 2390,
    mp: 2690,
    image: ""
  },

  {
    id: "armaf-odyssey-montagne",
    brand: "Armaf",
    name: "Odyssey Montagne",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 2690,
    mp: 2990,
    image: ""
  },

  {
    id: "armaf-club-de-nuit-iconic",
    brand: "Armaf",
    name: "Club de Nuit Iconic",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 2890,
    mp: 3190,
    image: ""
  },

  {
    id: "armaf-club-de-nuit-sillage",
    brand: "Armaf",
    name: "Club de Nuit Sillage",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 2890,
    mp: 3190,
    image: ""
  },

  {
    id: "armaf-club-de-nuit-milestone",
    brand: "Armaf",
    name: "Club de Nuit Milestone",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 2890,
    mp: 3190,
    image: ""
  },


  // =========================================================
  // BHARARA
  // =========================================================

  {
    id: "bharara-king",
    brand: "Bharara",
    name: "King Parfum",
    category: "arabe",
    concentration: "Parfum",
    ml: 100,
    transfer: 4490,
    mp: 4890,
    image: "bharara-king.webp"
  },


  // =========================================================
  // OTROS
  // =========================================================

  {
    id: "fatima-zimaya-extrait",
    brand: "Fatima Zimaya",
    name: "Fatima Zimaya",
    category: "arabe",
    concentration: "Extrait de Parfum",
    ml: null,
    transfer: 3190,
    mp: 3490,
    image: ""
  },

  {
    id: "paris-corner-mandarin-vintage",
    brand: "Paris Corner",
    name: "Mandarin Vintage",
    category: "arabe",
    concentration: "",
    ml: null,
    transfer: 2890,
    mp: 3190,
    image: ""
  }

];