/* ==========================================================
   KAIZEN — DATOS EDITABLES
   Este es el único archivo que necesitás tocar para cambiar
   el número, los precios o agregar perfumes.
   ========================================================== */

// ---- Configuración general --------------------------------
const WHATSAPP_NUMBER    = "59891892109";   // <- ÚNICO lugar del número (código de país + número, sin + ni espacios)
const INSTAGRAM_USERNAME = "kaizen.olf";
const STORE_NAME         = "KAIZEN";
const STORE_LOCATION     = "Montevideo, Uruguay";
const MP_INSTALLMENTS    = 3;                // "hasta 3 cuotas"
const FEATURED = ["lattafa-khamrah", "french-avenue-liquid-brun", "lattafa-oud-for-glory"]; // los 3 de la portada (ids)

/* ----------------------------------------------------------
   PRODUCTOS
   Para agregar uno, copiá una línea y completá:
     id          único, en minúsculas y con guiones
     brand       marca
     name        nombre del perfume
     category    "arabe" o "disenador"
     concentration  ej. "Eau de Parfum" ("" si no se sabe)
     ml          número, ej. 100 (null si no se sabe)
     transfer    precio por transferencia, número (null = "Consultar")
     mp          precio Mercado Pago, número (null = "Consultar")
     image       nombre del archivo dentro de assets/images/products/
                 ("" = muestra "Imagen próximamente")
   Los precios se escriben a mano: nada se calcula solo.
   ---------------------------------------------------------- */
const PRODUCTS = [
  // — Con fotografía y precio —
  { id: "french-avenue-liquid-brun", brand: "French Avenue", name: "Liquid Brun", category: "arabe", concentration: "", ml: null, transfer: 2890, mp: 3190, image: "liquid-brun.webp" },
  { id: "paris-corner-mandarin-sky", brand: "Paris Corner", name: "Mandarin Sky", category: "arabe", concentration: "Eau de Parfum", ml: null, transfer: 2290, mp: 2590, image: "mandarin-sky.webp" },
  { id: "al-haramain-gold", brand: "Al Haramain", name: "Gold", category: "arabe", concentration: "", ml: 120, transfer: 3790, mp: 4190, image: "amber-oud-gold-edition.webp" },
  { id: "lattafa-yara", brand: "Lattafa", name: "Yara", category: "arabe", concentration: "Eau de Parfum", ml: 100, transfer: 2290, mp: 2590, image: "yara.webp" },
  { id: "lattafa-dynasty", brand: "Lattafa", name: "Dynasty", category: "arabe", concentration: "Eau de Parfum", ml: 100, transfer: 2890, mp: 3190, image: "dynasty.webp" },
  { id: "lattafa-khamrah", brand: "Lattafa", name: "Khamrah", category: "arabe", concentration: "Eau de Parfum", ml: 100, transfer: 2390, mp: 2690, image: "khamrah.webp" },

  // — Con fotografía, precio a consultar —
  { id: "armaf-club-de-nuit-intense-man", brand: "Armaf", name: "Club de Nuit Intense Man", category: "arabe", concentration: "Pure Parfum", ml: 150, transfer: null, mp: null, image: "club-de-nuit-intense-man.webp" },
  { id: "armaf-club-de-nuit-intense-man-extrait", brand: "Armaf", name: "Club de Nuit Intense Man Extrait", category: "arabe", concentration: "Extrait de Parfum", ml: null, transfer: null, mp: null, image: "club-de-nuit-intense-man-extrait.webp" },
  { id: "riiffs-freeze", brand: "Riiffs", name: "Freeze", category: "arabe", concentration: "Extrait de Parfum", ml: 100, transfer: null, mp: null, image: "freeze.webp" },
  { id: "riiffs-freeze-in-flames", brand: "Riiffs", name: "Freeze In Flames", category: "arabe", concentration: "Extrait de Parfum", ml: 100, transfer: null, mp: null, image: "freeze-in-flames.webp" },
  { id: "maison-alhambra-bad-femme", brand: "Maison Alhambra", name: "B.A.D Femme", category: "arabe", concentration: "Eau de Parfum", ml: 100, transfer: null, mp: null, image: "bad-femme.webp" },
  { id: "maison-alhambra-jean-lowe-vibe", brand: "Maison Alhambra", name: "Jean Lowe Vibe", category: "arabe", concentration: "Eau de Parfum", ml: 100, transfer: null, mp: null, image: "jean-lowe-vibe.webp" },
  { id: "afnan-9pm-night-out", brand: "Afnan", name: "9 PM Night Out", category: "arabe", concentration: "Extrait de Parfum", ml: 100, transfer: null, mp: null, image: "9pm-night-out.webp" },
  { id: "rasasi-hawas-elixir", brand: "Rasasi", name: "Hawas Elixir", category: "arabe", concentration: "Eau de Parfum", ml: 100, transfer: null, mp: null, image: "hawas-elixir.webp" },
  { id: "rasasi-hawas-malibu", brand: "Rasasi", name: "Hawas Malibu For Him", category: "arabe", concentration: "Eau de Parfum", ml: 100, transfer: null, mp: null, image: "hawas-malibu.webp" },
  { id: "rayhaan-pacific", brand: "Rayhaan", name: "Pacific For Him", category: "arabe", concentration: "Eau de Parfum", ml: 100, transfer: null, mp: null, image: "rayhaan-pacific.webp" },
  { id: "mast-perfume-rome-yum-yum", brand: "Mast Perfume", name: "Rome Yum Yum", category: "arabe", concentration: "Eau de Parfum", ml: 100, transfer: null, mp: null, image: "rome-yum-yum.webp" },
  { id: "mast-perfume-rome-pour-homme", brand: "Mast Perfume", name: "Rome Pour Homme", category: "arabe", concentration: "Eau de Parfum", ml: 100, transfer: null, mp: null, image: "rome-pour-homme.webp" },
  { id: "french-avenue-vulcan-baie", brand: "French Avenue", name: "Vulcan Baie", category: "arabe", concentration: "", ml: null, transfer: null, mp: null, image: "vulcan-baie.webp" },
  { id: "french-avenue-vulcan-sable", brand: "French Avenue", name: "Vulcan Sable", category: "arabe", concentration: "", ml: null, transfer: null, mp: null, image: "vulcan-sable.webp" },
  { id: "lattafa-oud-for-glory", brand: "Lattafa", name: "Oud for Glory", category: "arabe", concentration: "", ml: null, transfer: null, mp: null, image: "oud-for-glory.webp" },
  { id: "lattafa-asad-bourbon", brand: "Lattafa", name: "Asad Bourbon", category: "arabe", concentration: "Eau de Parfum", ml: 100, transfer: null, mp: null, image: "asad-bourbon.webp" },
  { id: "armaf-club-de-nuit-woman-extrait", brand: "Armaf", name: "Club de Nuit Woman Extrait", category: "arabe", concentration: "Extrait de Parfum", ml: null, transfer: null, mp: null, image: "club-de-nuit-woman-extrait.webp" },
  { id: "armaf-club-de-nuit-woman", brand: "Armaf", name: "Club de Nuit Woman", category: "arabe", concentration: "Eau de Parfum", ml: 105, transfer: null, mp: null, image: "club-de-nuit-woman.webp" },
  { id: "armaf-club-de-nuit-urban-man-elixir", brand: "Armaf", name: "Club de Nuit Urban Man Elixir", category: "arabe", concentration: "Eau de Parfum", ml: 105, transfer: null, mp: null, image: "club-de-nuit-urban-man-elixir.webp" },
  { id: "armaf-club-de-nuit-precieux-i", brand: "Armaf", name: "Club de Nuit Precieux I", category: "arabe", concentration: "", ml: null, transfer: null, mp: null, image: "club-de-nuit-precieux.webp" },
  { id: "armaf-dunescape-dubai", brand: "Armaf", name: "Dunescape Dubai", category: "arabe", concentration: "", ml: null, transfer: null, mp: null, image: "dunescape-dubai.webp" },
  { id: "rayhaan-elixir", brand: "Rayhaan", name: "Elixir", category: "arabe", concentration: "", ml: null, transfer: null, mp: null, image: "rayhaan-elixir.webp" },
  { id: "rasasi-hawas-tropical-for-him", brand: "Rasasi", name: "Hawas Tropical For Him", category: "arabe", concentration: "Eau de Parfum", ml: 100, transfer: null, mp: null, image: "hawas-tropical.webp" },
  { id: "bharara-king", brand: "Bharara", name: "King", category: "arabe", concentration: "Parfum", ml: 100, transfer: null, mp: null, image: "bharara-king.webp" },
  { id: "al-haramain-amber-oud-gold-edition-extreme", brand: "Al Haramain", name: "Amber Oud Gold Edition Extreme", category: "arabe", concentration: "Pure Perfume", ml: null, transfer: null, mp: null, image: "amber-oud-gold-extreme.webp" },
  { id: "lattafa-the-kingdom", brand: "Lattafa", name: "The Kingdom", category: "arabe", concentration: "Eau de Parfum", ml: 100, transfer: null, mp: null, image: "the-kingdom.webp" },
  { id: "lattafa-opulent-dubai", brand: "Lattafa", name: "Opulent Dubai", category: "arabe", concentration: "Eau de Parfum", ml: 100, transfer: null, mp: null, image: "opulent-dubai.webp" },

  // — Con precio, imagen próximamente —
  { id: "al-haramain-bleu", brand: "Al Haramain", name: "Bleu", category: "arabe", concentration: "", ml: null, transfer: 3790, mp: 4190, image: "" },
  { id: "al-haramain-aqua", brand: "Al Haramain", name: "Aqua", category: "arabe", concentration: "", ml: null, transfer: 3790, mp: 4190, image: "" },
  { id: "al-haramain-dubai-night", brand: "Al Haramain", name: "Dubai Night", category: "arabe", concentration: "", ml: null, transfer: 3790, mp: 4190, image: "" },
  { id: "al-haramain-ruby", brand: "Al Haramain", name: "Ruby", category: "arabe", concentration: "", ml: null, transfer: 3790, mp: 4190, image: "" },
  { id: "al-haramain-detour-noir", brand: "Al Haramain", name: "Detour Noir", category: "arabe", concentration: "", ml: null, transfer: 2890, mp: 3190, image: "" },
  { id: "paris-corner-mandarin-vintage", brand: "Paris Corner", name: "Mandarin Vintage", category: "arabe", concentration: "", ml: null, transfer: 2890, mp: 3190, image: "" },
  { id: "armaf-odyssey-mega", brand: "Armaf", name: "Odyssey Mega", category: "arabe", concentration: "", ml: null, transfer: 2390, mp: 2690, image: "" },
  { id: "armaf-odyssey-homme-black", brand: "Armaf", name: "Odyssey Homme Black", category: "arabe", concentration: "", ml: null, transfer: 2490, mp: 2790, image: "" },
  { id: "armaf-odyssey-homme-white", brand: "Armaf", name: "Odyssey Homme White", category: "arabe", concentration: "", ml: null, transfer: 2490, mp: 2790, image: "" },
  { id: "armaf-odyssey-bahamas", brand: "Armaf", name: "Odyssey Bahamas", category: "arabe", concentration: "", ml: null, transfer: 2390, mp: 2690, image: "" },
  { id: "armaf-odyssey-montagne", brand: "Armaf", name: "Odyssey Montagne", category: "arabe", concentration: "", ml: null, transfer: 2390, mp: 2690, image: "" },
  { id: "armaf-club-de-nuit-iconic", brand: "Armaf", name: "Club de Nuit Iconic", category: "arabe", concentration: "", ml: null, transfer: 2890, mp: 3190, image: "" },
  { id: "armaf-club-de-nuit-sillage", brand: "Armaf", name: "Club de Nuit Sillage", category: "arabe", concentration: "", ml: null, transfer: 2890, mp: 3190, image: "" },
  { id: "armaf-club-de-nuit-milestone", brand: "Armaf", name: "Club de Nuit Milestone", category: "arabe", concentration: "", ml: null, transfer: 2890, mp: 3190, image: "" },
  { id: "maison-alhambra-dubai-chocolate", brand: "Maison Alhambra", name: "Dubai Chocolate", category: "arabe", concentration: "", ml: null, transfer: 2490, mp: 2790, image: "" },
  { id: "lattafa-asad", brand: "Lattafa", name: "Asad", category: "arabe", concentration: "", ml: null, transfer: 2390, mp: 2690, image: "" },
  { id: "lattafa-asad-zanzibar", brand: "Lattafa", name: "Asad Zanzibar", category: "arabe", concentration: "", ml: null, transfer: 2290, mp: 2590, image: "" },
  { id: "lattafa-fakhar", brand: "Lattafa", name: "Fakhar", category: "arabe", concentration: "", ml: null, transfer: 2290, mp: 2590, image: "" },
  { id: "lattafa-eclaire", brand: "Lattafa", name: "Eclaire", category: "arabe", concentration: "", ml: null, transfer: 2490, mp: 2790, image: "" },
  { id: "lattafa-emaan", brand: "Lattafa", name: "Emaan", category: "arabe", concentration: "", ml: null, transfer: 2390, mp: 2590, image: "" },
  { id: "lattafa-mayar", brand: "Lattafa", name: "Mayar", category: "arabe", concentration: "", ml: null, transfer: 2390, mp: 2590, image: "" },
  { id: "lattafa-mayar-cherry", brand: "Lattafa", name: "Mayar Cherry", category: "arabe", concentration: "", ml: null, transfer: 2790, mp: 3090, image: "" },
  { id: "lattafa-khamrah-qahwa", brand: "Lattafa", name: "Khamrah Qahwa", category: "arabe", concentration: "", ml: null, transfer: 2490, mp: 2790, image: "" },
  { id: "lattafa-khamrah-dukhan", brand: "Lattafa", name: "Khamrah Dukhan", category: "arabe", concentration: "", ml: null, transfer: 2490, mp: 2790, image: "" },
  { id: "lattafa-khamrah-waha", brand: "Lattafa", name: "Khamrah Waha", category: "arabe", concentration: "", ml: null, transfer: 3390, mp: 3790, image: "" },
  { id: "lattafa-atlas", brand: "Lattafa", name: "Atlas", category: "arabe", concentration: "", ml: null, transfer: 2490, mp: 2790, image: "" },
  { id: "rasasi-hawas-for-him", brand: "Rasasi", name: "Hawas for Him", category: "arabe", concentration: "", ml: null, transfer: 2490, mp: 2790, image: "" },
  { id: "rasasi-hawas-for-her", brand: "Rasasi", name: "Hawas for Her", category: "arabe", concentration: "", ml: null, transfer: 2490, mp: 2790, image: "" },
  { id: "riiffs-momento", brand: "Riiffs", name: "Momento Riiffs", category: "arabe", concentration: "", ml: null, transfer: 2890, mp: 3190, image: "" }
];
