
export interface Product {
  _id?: string;
  name: string;
  price: any;
  description: string;
  img?: string;
  count?: number;
}

export interface SupplementsItem {
  name: string;
  price: number;
}

type ArrayOfSupplementsItems = SupplementsItem[];

export interface MenuSection {
  sectionName: string;
  id: string;
  products?: IProduct[];
}

export const toppings: ArrayOfSupplementsItems = [
  {
    name: "Becon",
    price: 25,
  },
  {
    name: "Sunca",
    price: 25,
  },
  {
    name: "Cascaval",
    price: 15,
  },
  {
    name: "Branza",
    price: 15,
  },
  {
    name: "Ciuperci",
    price: 15,
  },
  {
    name: "Slanina",
    price: 25,
  },
  {
    name: "Salam picant",
    price: 25,
  },
];
export const sauces: ArrayOfSupplementsItems = [
  {
    name: "Sos caesar",
    price: 15,
  },
  {
    name: "Sos tartar",
    price: 10,
  },
  {
    name: "Sos de usturoi",
    price: 10,
  },
  {
    name: "Sos de cascaval",
    price: 15,
  },
  {
    name: "Maioneza",
    price: 10,
  },
  {
    name: "Ketchup",
    price: 10,
  },
  {
    name: "Smantana",
    price: 10,
  },
  {
    name: "Adjica",
    price: 10,
  },
  {
    name: "Miere de albini",
    price: 15,
  },
];

export const translatedSauces: ArrayOfSupplementsItems = [
  {
    name: "sosCaesar",
    price: 15,
  },
  {
    name: "sosTartar",
    price: 10,
  },
  {
    name: "sosDeUsturoi",
    price: 10,
  },
  {
    name: "sosDeCascaval",
    price: 15,
  },
  {
    name: "maioneza",
    price: 10,
  },
  {
    name: "ketchup",
    price: 10,
  },
  {
    name: "smantana",
    price: 10,
  },
  {
    name: "adjica",
    price: 10,
  },
];
export const translatedToppings: ArrayOfSupplementsItems = [
  {
    name: "miereDeAlbini",
    price: 15,
  },
  {
    name: "becon",
    price: 25,
  },
  {
    name: "sunca",
    price: 25,
  },
  {
    name: "cascaval",
    price: 15,
  },
  {
    name: "branza",
    price: 15,
  },
  {
    name: "ciuperci",
    price: 15,
  },
  {
    name: "slanina",
    price: 25,
  },
  {
    name: "salamPicant",
    price: 25,
  },
];

export const productCatagories = [
  {
    label: "breakFast",
    value: "breakFast",
  },
  {
    label: "supe",
    value: "supe",
  },
  {
    label: "salads",
    value: "salads",
  },
  {
    label: "goldSnacks",
    value: "goldSnacks",
  },
  {
    label: "hostSnack",
    value: "hostSnack",
  },
  {
    label: "beerSnack",
    value: "beerSnack",
  },
  {
    label: "mainDishes",
    value: "mainDishes",
  },
  {
    label: "gaskets",
    value: "gaskets",
  },
  {
    label: "pizza",
    value: "pizza",
  },
  {
    label: "deserts",
    value: "deserts",
  },
  {
    label: "non_alchogol",
    value: "non_alchogol",
  },
  {
    label: "milk_shakes_lemonads",
    value: "milk_shakes_lemonads",
  },
  {
    label: "hot_drinks",
    value: "hot_drinks",
  },
  {
    label: "alchogol_coctails",
    value: "alchogol_coctails",
  },
  {
    label: "beer",
    value: "beer",
  },
  {
    label: "wines",
    value: "wines",
  },
  {
    label: "champagne",
    value: "champagne",
  },
  {
    label: "strong_alchogol",
    value: "strong_alchogol",
  }
];

export const productCategoriesCookTime = {
    "breakFast": 600000,
    "supe": 600000,
    "salads": 600000,
    "goldSnacks": 600000,
    "hostSnack": 600000,
    "beerSnack": 600000,
    "mainDishes": 1200000,
    "gaskets": 600000,
    "pizza": 1200000,
    "deserts": 600000,
    "non_alchogol": 0,
    "milk_shakes_lemonads": 0,
    "hot_drinks": 0,
    "alchogol_coctails": 0,
    "beer": 0,
    "wines": 0,
    "champagne": 0,
    "strong_alchogol": 0,
    "souces": 0,
    "toppings": 0
  }

export const suplimentar = [
  {
    label: "souces",
    value: "souces",
  },
  {
    label: "toppings",
    value: "toppings",
  }
]

export interface IProduct {
  image: string;
  name: {
    ru: string;
    ro: string;
  };
  description: {
    ru: string;
    ro: string;
  };
  price: number;
  productType: string;
  count?: number;
  _id?: string;
  disabled?:boolean
}

const productsMig = [
  {
    image: "Brînzoaice (180_50) 75 MDL.webp",
    name: {
      ru: "Сырные шарики",
      ro: "Brinzoaice",
    },
    description: {
      ru: "180/50 г",
      ro: "180/50g",
    },
    price: 75,
    productType: "breakFast",
  },
  {
    image: "omletă_cu_legume.webp",
    name: {
      ru: "Омлет с овощами",
      ro: "Omleta cu legume",
    },
    description: {
      ru: "200/250 г",
      ro: "200/250 g",
    },
    price: 75,
    productType: "breakFast",
  },
  {
    image: "mic_dejun_piure_de_cartofi_ouă_bacon.webp",
    name: {
      ru: "Mic dejun",
      ro: "Завтрак",
    },
    description: {
      ru: "картофельное пюре, яйца, бекон 150/100/50г",
      ro: "piure de cartofi, ouă de găină, bacon 150/100/50g",
    },
    price: 90,
    productType: "breakFast",
  },
  {
    image: "clătite_cu_brînză_de_vaci.webp",
    name: {
      ru: "Блинчики с творогом",
      ro: "Clatite cu brinza",
    },
    description: {
      ru: "250/50 г",
      ro: "250g/50g",
    },
    price: 75,
    productType: "breakFast",
  },

  // {
  //   image: "terci_de_ovaz.png",
  //   name: {
  //     ru: "Овсянка",
  //     ro: "Terci de ovaz",
  //   },
  //   description: {
  //     ru: "Овсянка с молоком и водой, с джемом, 300 г",
  //     ro: "pe lapte,apa ,cu gem 300g",
  //   },
  //   price: 35,
  //   productType: "breakFast",
  // },
  // {
  //   image: "croissant.png",
  //   name: {
  //     ru: "Круассан",
  //     ro: "Croissant",
  //   },
  //   description: {
  //     ru: "Круассан, один шт.",
  //     ro: "in sortiment 1 buc",
  //   },
  //   price: 35,
  //   productType: "breakFast",
  // },
  {
    image: "bors_rosu_cu_carne_de_vita.webp",
    name: {
      ru: "Красный борщ 350/50 г",
      ro: "Bors rosu 350/50 g",
    },
    description: {
      ru: "с говядиной",
      ro: "cu carne de vita",
    },
    price: 75,
    productType: "supe",
  },
  {
    image: "zeamă_din_găină_de_casă.webp",
    name: {
      ru: "Домашняя зама",
      ro: "Zeama de gaina",
    },
    description: {
      ru: "с куриным мясом 350/50 г",
      ro: "de casa 350/50 g",
    },
    price: 75,
    productType: "supe",
  },
  {
    image: "Soleancă (350_50) 75 MDL.webp",
    name: {
      ru: "Солянка",
      ro: "Soleanca",
    },
    description: {
      ru: "350/50 г",
      ro: "350/50 g",
    },
    price: 75,
    productType: "supe",
  },
  {
    image: "Supă-cremă cu cașcaval.webp",
    name: {
      ru: "Сырный крем-суп",
      ro: "Supă-cremă cu cașcaval",
    },
    description: {
      ru: "300/30 г",
      ro: "300/30 g",
    },
    price: 70,
    productType: "supe",
  },
  {
    image: "Supă-cremă cu ciuperci.webp",
    name: {
      ru: "Supă-cremă cu ciuperci",
      ro: "Crem supa",
    },
    description: {
      ru: "300 г",
      ro: "300 g",
    },
    price: 70,
    productType: "supe",
  },
  

  ////
  {
    image: "caesar_cu_somon.webp",
    name: {
      ru: "Салат Цезарь с лососем",
      ro: "Caesar cu somon",
    },
    description: {
      ru: "260 г",
      ro: "260 g",
    },
    price: 130,
    productType: "salads",
  },
  {
    image: "salată_cu_carne_de_vită.webp",
    name: {
      ru: "Салат с говядиной",
      ro: "Salata cu carne de vita",
    },
    description: {
      ru: "250 г",
      ro: "250 g",
    },
    price: 105,
    productType: "salads",
  },
  {
    image: "salată_bulgărească_Shopski.webp",
    name: {
      ru: "Салат Шопски",
      ro: "Salata Shopski",
    },
    description: {
      ru: "350 г",
      ro: "350 g",
    },
    price: 85,
    productType: "salads",
  },
  {
    image: "Caesar cu piept de pui (260) 100 MDL.webp",
    name: {
      ru: "Салат Цезарь",
      ro: "Salata Caesar ",
    },
    description: {
      ru: "с курицей 260 г",
      ro: "cu carne de pui 260 g",
    },
    price: 100,
    productType: "salads",
  },
  {
    image: "Salată din varză cu mazăre (200) 50 MDL.webp",
    name: {
      ru: "Салат из капусты",
      ro: "Salata de varza ",
    },
    description: {
      ru: "200 г",
      ro: "200g",
    },
    price: 50,
    productType: "salads",
  },
  {
    image: "șold_de_găină_carry_cu_legume.webp",
    name: {
      ru: "Теплый салат с куриной грудкой и броколи",
      ro: "Salata calda cu pui si brocoli",
    },
    description: {
      ru: "300 г",
      ro: "300 g",
    },
    price: 110,
    productType: "salads",
  },
  {
    image: "Salată caldă cu legume coapte (300_50) 95 MDL.webp",
    name: {
      ru: "Теплый салат из запеченых овощей",
      ro: "Salata calda cu legume coapte",
    },
    description: {
      ru: "300/50 г",
      ro: "300/50 g",
    },
    price: 95,
    productType: "salads",
  },
  ///////
  {
    image: "platou_cu_slănină_de_casă.webp",
    name: {
      ru: "Плато с домашним салом",
      ro: "Platou cu slanina de casa",
    },
    description: {
      ru: "200/50 г",
      ro: "200/50 g",
    },
    price: 130,
    productType: "goldSnacks",
  },
  {
    image: "cașcaval_hot_brie_cu_ciabatta.webp",
    name: {
      ru: "Сыр hot brie с чиабаттой",
      ro: "Cascaval hot brie cu ciabatta",
    },
    description: {
      ru: "125/100 г",
      ro: "125/100 g",
    },
    price: 120,
    productType: "goldSnacks",
  },
  {
    image: "piept_de_porc_picant.webp",
    name: {
      ru: "Свиная грудинка",
      ro: "Piept de porc picant",
    },
    description: {
      ru: "200 г",
      ro: "200 g",
    },
    price: 120,
    productType: "goldSnacks",
  },
  {
    image: "Platou murături (400_50) 90 MDL.webp",
    name: {
      ru: "Ассорти солений",
      ro: "Platou muraturi",
    },
    description: {
      ru: "400/50 г",
      ro: "400/50 g",
    },
    price: 90,
    productType: "goldSnacks",
  },
  {
    image: "no_img.png",
    name: {
      ru: "Плато из свежих овощей",
      ro: "Platou legume proaspete",
    },
    description: {
      ru: "450 г",
      ro: "450 g",
    },
    price: 120,
    productType: "goldSnacks",
  },
  {
    image: "no_img.png",
    name: {
      ru: "Кващеная капуста ассорти",
      ro: "Mix varza murata",
    },
    description: {
      ru: "150/150 г",
      ro: "150/150 g",
    },
    price: 65,
    productType: "goldSnacks",
  },
  //////////////////////////
  // {
  //   image: "aripioare_de_pui.png",
  //   name: {
  //     ru: "Куриные крылышки",
  //     ro: "Aripioare de pui",
  //   },
  //   description: {
  //     ru: "Куриные наггетсы с картофелем по-деревенски 150/130/50 г",
  //     ro: "cu cartofi pai 150/130/50 g",
  //   },
  //   price: 85,
  //   productType: "hostSnack",
  // },
  // {
  //   image: "nughete_de_pui.png",
  //   name: {
  //     ru: "Куриные наггетсы",
  //     ro: "Nughete de pui",
  //   },
  //   description: {
  //     ru: "Куриные наггетсы с картофелем по-деревенски 150/130/50 г",
  //     ro: "cu cartofi pai 150/130/50 g",
  //   },
  //   price: 85,
  //   productType: "hostSnack",
  // },
  // {
  //   image: "placinte_in_asortiment.png",
  //   name: {
  //     ru: "Пироги ассортимент",
  //     ro: "Placinte in asortiment",
  //   },
  //   description: {
  //     ru: "200 г пирогов в ассортименте",
  //     ro: "200 g",
  //   },
  //   price: 40,
  //   productType: "hostSnack",
  // },
  {
    image: "migdale.webp",
    name: {
      ru: "Миндаль",
      ro: "Migdale prajite",
    },
    description: {
      ru: "100г",
      ro: "100g",
    },
    price: 80,
    productType: "beerSnack",
  },
  {
    image: "midii.webp",
    name: {
      ru: "Мидий пане",
      ro: "Midii pane",
    },
    description: {
      ru: "140 г",
      ro: "140 g",
    },
    price: 100,
    productType: "beerSnack",
  },
  {
    image: "inele.webp",
    name: {
      ru: "Кольца кальмара",
      ro: "Inele de calamar",
    },
    description: {
      ru: "130/50 г",
      ro: "130/50 g",
    },
    price: 90,
    productType: "beerSnack",
  },
  {
    image: "raci.webp",
    name: {
      ru: "Раки",
      ro: "Raci",
    },
    description: {
      ru: "800 г",
      ro: "800 g",
    },
    price: 550,
    productType: "beerSnack",
  },
  {
    image: "no_img.png",
    name: {
      ru: "Луковые кольца ",
      ro: "Inele de ciapa",
    },
    description: {
      ru: "130/50 г",
      ro: "130/50 g",
    },
    price: 60,
    productType: "beerSnack",
  },
  {
    image: "no_img.png",
    name: {
      ru: "Арахис",
      ro: "Arahide prajite",
    },
    description: {
      ru: "100 г",
      ro: "100 g",
    },
    price: 50,
    productType: "beerSnack",
  },
  {
    image: "Crutoane de casă cu usturoi (200_50) 40 MDL.webp",
    name: {
      ru: "Гренки домашние с чесноком",
      ro: "Crutoane de casa cu usturoi",
    },
    description: {
      ru: "200/50 г",
      ro: "200/50 g",
    },
    price: 40,
    productType: "beerSnack",
  },
  {
    image: "Sudjuc (50) 60 MDL.webp",
    name: {
      ru: "Суджук",
      ro: "Sudjuc",
    },
    description: {
      ru: "50 г",
      ro: "50 g",
    },
    price: 60,
    productType: "beerSnack",
  },
  {
    image: "Coriușca (130) 70 MDL.webp",
    name: {
      ru: "Корюшка",
      ro: "Coriusca",
    },
    description: {
      ru: "130 г",
      ro: "130 g",
    },
    price: 70,
    productType: "beerSnack",
  },
  {
    image: "Cîrnăciori vînătorești (100) 65 MDL.webp",
    name: {
      ru: "Охотничьи колбаски",
      ro: "Cîrnaciori vînatoresti",
    },
    description: {
      ru: "100 г",
      ro: "100 g",
    },
    price: 65,
    productType: "beerSnack",
  },
///


  {
    image: "cîrnăciori_de_porc_cu_salată_de_varză.webp",
    name: {
      ru: "Колбаски свиные с салатом из капусты",
      ro: "Cîrnaciori de porc cu salata de varza",
    },
    description: {
      ru: "180/100 г",
      ro: "180/100g",
    },
    price: 110,
    productType: "mainDishes",
  },
  {
    image: "șold_de_găină_carry_cu_legume.webp",
    name: {
      ru: "Бедро куриное карри",
      ro: "Sold de gaina carry cu legume",
    },
    description: {
      ru: "320/200 г",
      ro: "320/200g",
    },
    price: 120,
    productType: "mainDishes",
  },
  {
    image: "antricot_de_porc_cu_cartofi_și_ciuperci.webp",
    name: {
      ru: "Свинина с картошкой и грибами",
      ro: "Antricot de porc cu cartofi si ciuperci",
    },
    description: {
      ru: "200/220г",
      ro: "200/220g",
    },
    price: 150,
    productType: "mainDishes",
  },
  {
    image: "Paste cu somon (300) 125 MDL.webp",
    name: {
      ru: "Домашняя паста с лососем",
      ro: "Paste cu somon",
    },
    description: {
      ru: "300г",
      ro: "300g",
    },
    price: 125,
    productType: "mainDishes",
  },
  {
    image: "Paste cu pui și ciuperci (350) 110 MDL.webp",
    name: {
      ru: "Паста с куриной грудкой и грибами",
      ro: "Paste cu pui si ciuperci",
    },
    description: {
      ru: "350г",
      ro: "350g",
    },
    price: 110,
    productType: "mainDishes",
  },
  {
    image: "Păstrav cu legume la grătar (270_200) 220 MDL.webp",
    name: {
      ru: "Форель с овощами гриль",
      ro: "Pastrav cu legume la gratar",
    },
    description: {
      ru: "270/200 г",
      ro: "270/200 g",
    },
    price: 220,
    productType: "mainDishes",
  },
  {
    image: "Păstrav cu mămăligă (270_200) 220 MDL.webp",
    name: {
      ru: "Форель с мамалыгой",
      ro: "Pastrav cu mamaliga",
    },
    description: {
      ru: "270/200 г",
      ro: "270/200 g",
    },
    price: 220,
    productType: "mainDishes",
  },
  {
    image: "fasole_cu_bacon.webp",
    name: {
      ru: "Фасоль с беконом",
      ro: "Fasole cu bаcon",
    },
    description: {
      ru: "300 г",
      ro: "300 g",
    },
    price: 100,
    productType: "mainDishes",
  },
  {
    image: "carne_de_vițel_cu_sos_de_vișină.webp",
    name: {
      ru: "Телятина с вишневым соусом",
      ro: "Carne de vitel cu sos de visina",
    },
    description: {
      ru: "250/50 г",
      ro: "250/50 g",
    },
    price: 150,
    productType: "mainDishes",
  },
  {
    image: "carne_de_miel_cu_orez.webp",
    name: {
      ru: "Баранина с рисом",
      ro: "Carne de miel cu orez",
    },
    description: {
      ru: "250/200 г",
      ro: "250/200 g",
    },
    price: 160,
    productType: "mainDishes",
  },
  {
    image: "Tocană de pui cu mămăligă (300_200) 135 MDL.webp",
    name: {
      ru: "Мамалыга с куриным рагу",
      ro: "Tocana de pui cu mamaliga",
    },
    description: {
      ru: "250/250 г",
      ro: "250/250 g",
    },
    price: 135,
    productType: "mainDishes",
  },
  {
    image: "Tocană de iepure cu mămăligă (250_200) 175 MDL.webp",
    name: {
      ru: "Рагу из кролика с мамалыгой",
      ro: "Tocana de iepure cu mamaliga",
    },
    description: {
      ru: "250/250 г",
      ro: "250/250 g",
    },
    price: 175,
    productType: "mainDishes",
  },
  {
    image: "Carne de vițel înăbușită în vin (250_200) 160 MDL.webp",
    name: {
      ru: "Говядина тушеная в красном вине",
      ro: "Carne de vitel inabusita în vin",
    },
    description: {
      ru: "250/200 г",
      ro: "250/200 g",
    },
    price: 160,
    productType: "mainDishes",
  },
  {
    image: "Mici cu salată de varză (170_100) 110 MDL.webp",
    name: {
      ru: "Мититеи с салатом из капусты",
      ro: "Mici cu salata de varza",
    },
    description: {
      ru: "170/100 г",
      ro: "170/100 g",
    },
    price: 110,
    productType: "mainDishes",
  },
  {
    image: "ciolan_de_porc_cu_varză_călită.webp",
    name: {
      ru: "Свиная рулька с тушеной капустой",
      ro: "Ciolan de porc cu varza calita",
    },
    description: {
      ru: "500/250 г",
      ro: "500/250 g",
    },
    price: 240,
    productType: "mainDishes",
  },
  {
    image: "carp_prăjit.webp",
    name: {
      ru: "Карп жареный",
      ro: "Carp prajit",
    },
    description: {
      ru: "100 г",
      ro: "100 g",
    },
    price: 40,
    productType: "mainDishes",
  },
  {
    image: "tocană_de_porc_cu_mămăligă.webp",
    name: {
      ru: "Рагу из свинины с мамалыгой",
      ro: "Tocana de porc cu mamaliga",
    },
    description: {
      ru: "250/250 г",
      ro: "250/250 g",
    },
    price: 145,
    productType: "mainDishes",
  },
  {
    image: "Pulpă de rață cu piure de cartofi și varză călită (200_200_150) 200 MDL).webp",
    name: {
      ru: "Утиная ножка с картофельным пюре и тушеной капустой",
      ro: "Pulpa de rata cu piure de cartofi si varza calita",
    },
    description: {
      ru: "200/200/150 г",
      ro: "200/200/150 g",
    },
    price: 200,
    productType: "mainDishes",
  },
  {
    image: "Șnițel de pui cu varză picantă (180_100) 120 MDL.webp",
    name: {
      ru: "Шницель куриный с красной капустой",
      ro: "Snitel de pui cu varza picanta",
    },
    description: {
      ru: "180/100 г",
      ro: "180/100 g",
    },
    price: 120,
    productType: "mainDishes",
  },
  {
    image: "Frigărui de porc cu salată de varză (200_100_50) 130 MDL.webp",
    name: {
      ru: "Шашлык свиной",
      ro: "Frigarui de porc cu salata de varza",
    },
    description: {
      ru: "200/100/50 г",
      ro: "200/100/50 g",
    },
    price: 130,
    productType: "mainDishes",
  },
  {
    image: "Frigărui de pui (200_50) 120 MDL.webp",
    name: {
      ru: "Шашлык куринный",
      ro: "Frigarui de pui",
    },
    description: {
      ru: "200/50 г",
      ro: "200/50 g",
    },
    price: 120,
    productType: "mainDishes",
  },
  {
    image: "Burgher de vită (300) 100 MDL.webp",
    name: {
      ru: "Бургер говяжий",
      ro: "Burgher de vita",
    },
    description: {
      ru: "300 г",
      ro: "300 g",
    },
    price: 100,
    productType: "mainDishes",
  },
  {
    image: "Burgher de pui (300) 95 MDL.webp",
    name: {
      ru: "Бургер куриный",
      ro: "Burgher de pui",
    },
    description: {
      ru: "300 г",
      ro: "300 g",
    },
    price: 95,
    productType: "mainDishes",
  },
  {
    image: "Platou cu carne la grătar (1000_100) 750 MDL.webp",
    name: {
      ru: "Мясное ассорти на гриле",
      ro: "Platou cu carne la gratar",
    },
    description: {
      ru: "1000/100 г",
      ro: "1000/100 g",
    },
    price: 750,
    productType: "mainDishes",
  },
  {
    image: "Pui Tapaka (1_50) 160 MDL.webp",
    name: {
      ru: "Цыпленок табака",
      ro: "Pui Tapaka",
    },
    description: {
      ru: "1/50",
      ro: "1/50",
    },
    price: 160,
    productType: "mainDishes",
  },
  {
    image: "Mămăligă cu smîntînă și brînză (200_50_25) 55 MDL.webp",
    name: {
      ru: "Мамалыга с брынзой и сметаной",
      ro: "Mamaliga cu smîntîna si brînza",
    },
    description: {
      ru: "200/50/25 г",
      ro: "200/50/25 g",
    },
    price: 55,
    productType: "gaskets",
  },
  {
    image: "Piure de cartofi (200) 35 MDL.webp",
    name: {
      ru: "Картофельное пюре",
      ro: "Piure de cartofi",
    },
    description: {
      ru: "200 г",
      ro: "200 g",
    },
    price: 35,
    productType: "gaskets",
  },
  {
    image: "Cartofi prăjiți ca acasă (300) 55 MDL.webp",
    name: {
      ru: "Картошка по-домашнему",
      ro: "Cartofi prajiti ca acasa",
    },
    description: {
      ru: "300 г",
      ro: "300 g",
    },
    price: 55,
    productType: "gaskets",
  },
  {
    image: "Cartofi copți cu rozmarin (250) 45 MDL.webp",
    name: {
      ru: "Запеченый картофель с розмарином",
      ro: "Cartofi copti cu rozmarin",
    },
    description: {
      ru: "250 г",
      ro: "250 g",
    },
    price: 45,
    productType: "gaskets",
  },
  {
    image: "Cartofi pai cu sos ketcup (130_50) 45 MDL.webp",
    name: {
      ru: "Кортошка фри с кетчупом",
      ro: "Cartofi pai cu sos ketcup",
    },
    description: {
      ru: "130/50 г",
      ro: "130/50 g",
    },
    price: 45,
    productType: "gaskets",
  },
  {
    image: "Legume la grătar (250) 75 MDL.webp",
    name: {
      ru: "Овощи гриль",
      ro: "Legume la gratar",
    },
    description: {
      ru: "250 г",
      ro: "250 g",
    },
    price: 75,
    productType: "gaskets",
  },
 
//
  {
    image: "vegetariană.webp",
    name: {
      ru: "Vegetariana",
      ro: "Vegetariana",
    },
    description: {
      ru: "sos rosii, legume grill 400g",
      ro: "sos rosii, legume grill 400g",
    },
    price: 110,
    productType: "pizza",
  },
  {
    image: "capriciosa.webp",
    name: {
      ru: "Capriciosa",
      ro: "Capriciosa",
    },
    description: {
      ru: "sos rosii, mozzarella,ciuperci ceafă de porc, vînată coaptă,brinză de capră 550g",
      ro: "sos rosii, mozzarella,ciuperci ceafă de porc, vînată coaptă,brinză de capră 550g",
    },
    price: 120,
    productType: "pizza",
  },
  {
    image: "quatro_formaggi.webp",
    name: {
      ru: "Quattro formaggi",
      ro: "Quattro formaggi",
    },
    description: {
      ru: "mozzarella, cașcaval rusesc gorgonzola, canestrato 400g",
      ro:  "mozzarella, cașcaval rusesc gorgonzola, canestrato 400g",
    },
    price: 120,
    productType: "pizza",
  },
  {
    image: "pollo.webp",
    name: {
      ru: "Pollo",
      ro: "Pollo",
    },
    description: {
      ru: "Sos de roșii, mozzarela,piept de pui, prosciutto cotto, ciuperci 400g",
      ro: "Sos de roșii, mozzarela,piept de pui, prosciutto cotto, ciuperci 400g",
    },
    price: 120,
    productType: "pizza",
  },
  {
    image: "margarita.webp",
    name: {
      ru: "Margarita",
      ro: "Margarita",
    },
    description: {
      ru: "sos rosii, mozzarella 450g",
      ro: "sos rosii, mozzarella 450g",
    },
    price: 100,
    productType: "pizza",
  },
  {
    image: "pere_și_prosciuto.webp",
    name: {
      ru: 'Pere Si Prosciuto',
      ro: "Pere Si Prosciuto",
    },
    description: {
      ru: "pere, brie, prosciutto crudo, mozzarella 500g",
      ro: "pere, brie, prosciutto crudo, mozzarella 500g",
    },
    price: 120,
    productType: "pizza",
  },
  {
    image: "diavola.webp",
    name: {
      ru: 'Diavola',
      ro: "Diavola",
    },
    description: {
      ru: "sos rosii, mozzarella,salam picant 450g",
      ro: "sos rosii, mozzarella,salam picant 450g",
    },
    price: 120,
    productType: "pizza",
  },
  {
    image: "leggera.webp",
    name: {
      ru: 'Leggera',
      ro: "Leggera",
    },
    description: {
      ru: "sos rosii, mozzarella prosciutto cotto, piept pui carne de vitel, bacon 600g",
      ro: "Sos de rosii, mozzarella, porumb, prosciutto, ciuperci, gogosari, masline 600g",
    },
    price: 120,
    productType: "pizza",
  },
  {
    image: "no_img.png",
    name: {
      ru: 'Pizza cherry',
      ro: "Pizza cherry",
    },
    description: {
      ru: "mozzarella, friscă prosciutto cotto, cherry, măsline 500g",
      ro: "mozzarella, friscă prosciutto cotto, cherry, măsline 500g",
    },
    price: 120,
    productType: "pizza",
  },
  {
    image: "Focaccia (200) 30 MDL.webp",
    name: {
      ru: "Focaccia",
      ro: "Focaccia",
    },
    description: {
      ru: "200g",
      ro: "200g",
    },
    price: 30,
    productType: "pizza",
  },
///////////
{
  image: "panna_cotta.webp",
  name: {
    ru: "Panna Cotta",
    ro: "Panna Cotta",
  },
  description: {
    ru: "150 г",
    ro: "150 g",
  },
  price: 60,
  productType: "deserts",
},
  {
    image: "napoleon.webp",
    name: {
      ru: "Наполеон",
      ro: "Napoleon",
    },
    description: {
      ru: "180 г",
      ro: "180 g",
    },
    price: 70,
    productType: "deserts",
  },
  {
    image: "no_image.png",
    name: {
      ru: "Тирамису",
      ro: "Tiramisu",
    },
    description: {
      ru: "175 г",
      ro: "175 g",
    },
    price: 75,
    productType: "deserts",
  },
  {
    image: "gugutsa.webp",
    name: {
      ru: "Гушма луй Гугуца",
      ro: "Cusma lui Guguta",
    },
    description: {
      ru: "170 г",
      ro: "175 g",
    },
    price: 70,
    productType: "deserts",
  },
  {
    image: "no_img.png",
    name: {
      ru: "Вкус детства",
      ro: "Gustul copilariei",
    },
    description: {
      ru: "90 г",
      ro: "90g",
    },
    price: 55,
    productType: "deserts",
  },
  {
    image: "fondant.webp",
    name: {
      ru: "Фондан",
      ro: "Fondant",
    },
    description: {
      ru: "70/50 г",
      ro: "70/50 g",
    },
    price: 70,
    productType: "deserts",
  },
  {
    image: "no_img.png",
    name: {
      ru: "Мороженое",
      ro: "Înghețata in asortiment",
    },
    description: {
      ru: "150 г",
      ro: "150 g",
    },
    price: 75,
    productType: "deserts",
  },

  //
  {
    image: "guizza.png",
    name: {
      ru: "Guizza",
      ro: "Guizza",
    },
    description: {
      ru: "(apa plata/gazoasa) 500ml ",
      ro: "(apa plata/gazoasa) 500ml ",
    },
    price: 15,
    productType: "non_alchogol",
  },
  {
    image: "plose.png",
    name: {
      ru: "Plose",
      ro: "Plose",
    },
    description: {
      ru: "(apa plata/gazata) 250/750ml",
      ro: "(apa plata/gazata) 250/750ml",
    },
    price: "74.24",
    productType: "non_alchogol",
  },
  {
    image: "coca_cola_sprite_fanta.png",
    name: {
      ru: "Coca Cola,Sprite,Fanta",
      ro: "Coca Cola,Sprite,Fanta",
    },
    description: {
      ru: "300/500 ml",
      ro: "300/500 ml",
    },
    price: "48.69",
    productType: "non_alchogol",
  },
  {
    image: "ceai_rece.png",
    name: {
      ru: "Ceai rece",
      ro: "Ceai rece",
    },
    description: {
      ru: "500 ml",
      ro: "500 ml",
    },
    price: 25,
    productType: "non_alchogol",
  },
  {
    image: "suc_jaffa.png",
    name: {
      ru: "Suc Jaffa",
      ro: "Suc Jaffa",
    },
    description: {
      ru: "250/950 ml",
      ro: "250/950 ml",
    },
    price: "90.37",
    productType: "non_alchogol",
  },
  {
    image: "suc_fresh.png",
    name: {
      ru: "Suc Fresh",
      ro: "Suc Fresh",
    },
    description: {
      ru: "orange/grapefruit 250 ml",
      ro: "orange/grapefruit 250 ml",
    },
    price: 45,
    productType: "non_alchogol",
  },
  {
    image: "borjomi.png",
    name: {
      ru: "Borjomi",
      ro: "Borjomi",
    },
    description: {
      ru: "500 ml",
      ro: "500 ml",
    },
    price: 45,
    productType: "non_alchogol",
  },
  {
    image: "milkshake.png",
    name: {
      ru: "Milkshake",
      ro: "Milkshake",
    },
    description: {
      ru: "350 ml  ",
      ro: "350 ml  ",
    },
    price: 45,
    productType: "milk_shakes_lemonads",
  },
  {
    image: "limonada_clasica.png",
    name: {
      ru: "Limonada clasica",
      ro: "Limonada clasica",
    },
    description: {
      ru: "350 ml/1L",
      ro: "350 ml/1L",
    },
    price: "91.17",
    productType: "milk_shakes_lemonads",
  },
  {
    image: "limonada_de_capsuna.png",
    name: {
      ru: "Limonada de capsuna",
      ro: "Limonada de capsuna",
    },
    description: {
      ru: "350 ml/1L",
      ro: "350 ml/1L",
    },
    price: "19.01",
    productType: "milk_shakes_lemonads",
  },
  {
    image: "ceai_rece_de_casa.png",
    name: {
      ru: "Ceai rece de casa",
      ro: "Ceai rece de casa",
    },
    description: {
      ru: "350 ml/1L",
      ro: "350 ml/1L",
    },
    price: "43.75",
    productType: "milk_shakes_lemonads",
  },
  {
    image: "pina_colada.png",
    name: {
      ru: "Pina Colada",
      ro: "Pina Colada",
    },
    description: {
      ru: "250/950 ml",
      ro: "250/950 ml",
    },
    price: "91.46",
    productType: "milk_shakes_lemonads",
  },
  {
    image: "frappe.png",
    name: {
      ru: "Frappe",
      ro: "Frappe",
    },
    description: {
      ru: "350 ml",
      ro: "350 ml",
    },
    price: 35,
    productType: "milk_shakes_lemonads",
  },
  {
    image: "espresso.png",
    name: {
      ru: "Espresso",
      ro: "Espresso",
    },
    description: {
      ru: "30 ml ",
      ro: "30 ml ",
    },
    price: 20,
    productType: "hot_drinks",
  },
  {
    image: "americano.png",
    name: {
      ru: "Americano",
      ro: "Americano",
    },
    description: {
      ru: "100 ml",
      ro: "100 ml",
    },
    price: 20,
    productType: "hot_drinks",
  },
  {
    image: "cappuccino.png",
    name: {
      ru: "Cappuccino",
      ro: "Cappuccino",
    },
    description: {
      ru: "250ml",
      ro: "250ml",
    },
    price: 30,
    productType: "hot_drinks",
  },
  {
    image: "latte.png",
    name: {
      ru: "Latte",
      ro: "Latte",
    },
    description: {
      ru: "300 ml",
      ro: "300 ml",
    },
    price: 30,
    productType: "hot_drinks",
  },
  {
    image: "mocaccino.png",
    name: {
      ru: "Mocaccino",
      ro: "Mocaccino",
    },
    description: {
      ru: "",
      ro: "",
    },
    price: 30,
    productType: "hot_drinks",
  },
  {
    image: "cacao.png",
    name: {
      ru: "Cacao",
      ro: "Cacao",
    },
    description: {
      ru: "250 ml",
      ro: "250 ml",
    },
    price: 30,
    productType: "hot_drinks",
  },
  {
    image: "ceai_de_catina.png",
    name: {
      ru: "Ceai de catina",
      ro: "Ceai de catina",
    },
    description: {
      ru: "ghimbir si portocala ,450 ml",
      ro: "ghimbir si portocala ,450 ml",
    },
    price: 50,
    productType: "hot_drinks",
  },
  {
    image: "ceai_de_plante.png",
    name: {
      ru: "Ceai de Plante",
      ro: "Ceai de Plante",
    },
    description: {
      ru: "450 ml",
      ro: "450 ml",
    },
    price: 45,
    productType: "hot_drinks",
  },
  {
    image: "aperol_spritz.png",
    name: {
      ru: "Aperol Spritz",
      ro: "Aperol Spritz",
    },
    description: {
      ru: "350  ml",
      ro: "350  ml",
    },
    price: 65,
    productType: "alchogol_coctails",
  },
  {
    image: "gin_tonic.png",
    name: {
      ru: "Gin tonic",
      ro: "Gin tonic",
    },
    description: {
      ru: "350 ml",
      ro: "350 ml",
    },
    price: 55,
    productType: "alchogol_coctails",
  },
  {
    image: "cuba_libre.png",
    name: {
      ru: "Cuba Libre",
      ro: "Cuba Libre",
    },
    description: {
      ru: "350 ml",
      ro: "350 ml",
    },
    price: 60,
    productType: "alchogol_coctails",
  },
  {
    image: "green_mexican.png",
    name: {
      ru: "Green Mexican",
      ro: "Green Mexican",
    },
    description: {
      ru: "60 ml",
      ro: "60 ml",
    },
    price: 55,
    productType: "alchogol_coctails",
  },
  {
    image: "long_island_ice_tea.png",
    name: {
      ru: "Long Island Ice Tea",
      ro: "Long Island Ice Tea",
    },
    description: {
      ru: "",
      ro: "",
    },
    price: 90,
    productType: "alchogol_coctails",
  },
  {
    image: "glintwein.png",
    name: {
      ru: "Glintwein",
      ro: "Glintwein",
    },
    description: {
      ru: "55 ml",
      ro: "55 ml",
    },
    price: 30,
    productType: "alchogol_coctails",
  },
  {
    image: "pale_ale.png",
    name: {
      ru: "Pale Ale",
      ro: "Pale Ale",
    },
    description: {
      ru: "350  ml",
      ro: "350  ml",
    },
    price: 45,
    productType: "beer",
  },
  {
    image: "efes_pilsner.png",
    name: {
      ru: "Efes pilsner",
      ro: "Efes pilsner",
    },
    description: {
      ru: "f/a ,c/a 500 ml",
      ro: "f/a ,c/a 500 ml",
    },
    price: 40,
    productType: "beer",
  },
  {
    image: "kozel.png",
    name: {
      ru: "Kozel",
      ro: "Kozel",
    },
    description: {
      ru: "bruna / blonda 500 ml",
      ro: "bruna / blonda 500 ml",
    },
    price: 40,
    productType: "beer",
  },
  {
    image: "corona_extra.png",
    name: {
      ru: "Corona Extra",
      ro: "Corona Extra",
    },
    description: {
      ru: "355 ml",
      ro: "355 ml",
    },
    price: 55,
    productType: "beer",
  },
  {
    image: "hoegaarden.png",
    name: {
      ru: "Hoegaarden",
      ro: "Hoegaarden",
    },
    description: {
      ru: "330 ml",
      ro: "330 ml",
    },
    price: 50,
    productType: "beer",
  },
  {
    image: "franziskaner.png",
    name: {
      ru: "Franziskaner",
      ro: "Franziskaner",
    },
    description: {
      ru: "Weissbier 500 ml",
      ro: "Weissbier 500 ml",
    },
    price: 60,
    productType: "beer",
  },
  {
    image: "kronenbourg.png",
    name: {
      ru: "Kronenbourg",
      ro: "Kronenbourg",
    },
    description: {
      ru: "460 ml",
      ro: "460 ml",
    },
    price: 45,
    productType: "beer",
  },
  {
    image: "kozel_blonda_halba.png",
    name: {
      ru: "Kozel blonda  HALBA",
      ro: "Kozel blonda  HALBA",
    },
    description: {
      ru: "500 ml",
      ro: "500 ml",
    },
    price: 35,
    productType: "beer",
  },
  {
    image: "sauvignon_blanc_aligote.png",
    name: {
      ru: "Sauvignon Blanc Aligote",
      ro: "Sauvignon Blanc Aligote",
    },
    description: {
      ru: "(alb, sec) 0,75 ml",
      ro: "(alb, sec) 0,75 ml",
    },
    price: 210,
    productType: "wines",
  },
  {
    image: "merlot_rara_neagra.png",
    name: {
      ru: "Merlot Rara Neagra",
      ro: "Merlot Rara Neagra",
    },
    description: {
      ru: "(rosu, sec) 0,75 ml",
      ro: "(rosu, sec) 0,75 ml",
    },
    price: 210,
    productType: "wines",
  },
  {
    image: "merlot_feteasca_nearga.png",
    name: {
      ru: "Merlot Feteasca Nearga",
      ro: "Merlot Feteasca Nearga",
    },
    description: {
      ru: "(roz, sec)0,75 ml",
      ro: "(roz, sec)0,75 ml",
    },
    price: 210,
    productType: "wines",
  },
  {
    image: "aurore_feteasca_neagra.png",
    name: {
      ru: "Aurore Feteasca Neagra",
      ro: "Aurore Feteasca Neagra",
    },
    description: {
      ru: "0,75 ml",
      ro: "0,75 ml",
    },
    price: 350,
    productType: "wines",
  },
  {
    image: "aurore_pinot_grigio.png",
    name: {
      ru: "Aurore Pinot Grigio",
      ro: "Aurore Pinot Grigio",
    },
    description: {
      ru: "0,75 ml",
      ro: "0,75 ml",
    },
    price: 350,
    productType: "wines",
  },
  {
    image: "aurore_rara_neagra.png",
    name: {
      ru: "Aurore Rara Neagra",
      ro: "Aurore Rara Neagra",
    },
    description: {
      ru: "0,75 ml",
      ro: "0,75 ml",
    },
    price: 350,
    productType: "wines",
  },
  {
    image: "uneori_cabernet_sauvignon.png",
    name: {
      ru: "Uneori Cabernet Sauvignon",
      ro: "Uneori Cabernet Sauvignon",
    },
    description: {
      ru: "750 ml",
      ro: "750 ml",
    },
    price: 200,
    productType: "wines",
  },
  {
    image: "uneori_riesling.png",
    name: {
      ru: "Uneori Riesling",
      ro: "Uneori Riesling",
    },
    description: {
      ru: "750 ml",
      ro: "750 ml",
    },
    price: 200,
    productType: "wines",
  },
  {
    image: "uneori_muscat_rose.png",
    name: {
      ru: "Uneori Muscat Rose",
      ro: "Uneori Muscat Rose",
    },
    description: {
      ru: "750 ml",
      ro: "750 ml",
    },
    price: 240,
    productType: "wines",
  },
  {
    image: "cabernet_sauvignon.png",
    name: {
      ru: "Cabernet Sauvignon",
      ro: "Cabernet Sauvignon",
    },
    description: {
      ru: "150/750 ml",
      ro: "150/750 ml",
    },
    price: "24.92",
    productType: "wines",
  },
  {
    image: "muscat_rose.png",
    name: {
      ru: "Muscat Rose",
      ro: "Muscat Rose",
    },
    description: {
      ru: "150/750 ml",
      ro: "150/750 ml",
    },
    price: "87.07",
    productType: "wines",
  },
  {
    image: "chardonnay.png",
    name: {
      ru: "Chardonnay",
      ro: "Chardonnay",
    },
    description: {
      ru: "150/750 ml ml",
      ro: "150/750 ml ml",
    },
    price: "30.10",
    productType: "wines",
  },
  {
    image: "orasul_subteran_viorica.png",
    name: {
      ru: "Orasul Subteran Viorica",
      ro: "Orasul Subteran Viorica",
    },
    description: {
      ru: "750 ml",
      ro: "750 ml",
    },
    price: 200,
    productType: "wines",
  },
  {
    image: "orasul_subteran_rose.png",
    name: {
      ru: "Orasul Subteran",
      ro: "Orasul Subteran",
    },
    description: {
      ru: "Cabernet /Rose  750 ml",
      ro: "Cabernet /Rose  750 ml",
    },
    price: 200,
    productType: "wines",
  },
  {
    image: "orasul_subteran_neagra.png",
    name: {
      ru: "Orasul Subteran",
      ro: "Orasul Subteran",
    },
    description: {
      ru: "Feteasca Neagra 750 ml",
      ro: "Feteasca Neagra 750 ml",
    },
    price: 200,
    productType: "wines",
  },
  {
    image: "lacrima_dulce.png",
    name: {
      ru: "Lacrima Dulce",
      ro: "Lacrima Dulce",
    },
    description: {
      ru: "750 ml",
      ro: "750 ml",
    },
    price: 170,
    productType: "champagne",
  },
  {
    image: "alb_brut.png",
    name: {
      ru: "Alb Brut",
      ro: "Alb Brut",
    },
    description: {
      ru: "750 ml",
      ro: "750 ml",
    },
    price: 210,
    productType: "champagne",
  },
  {
    image: "crisseco.png",
    name: {
      ru: "Crisseco",
      ro: "Crisseco",
    },
    description: {
      ru: "150/ 750 ml",
      ro: "150/ 750 ml",
    },
    price: "20.46",
    productType: "champagne",
  },
  {
    image: "asti_martini.png",
    name: {
      ru: "Asti Martini",
      ro: "Asti Martini",
    },
    description: {
      ru: "750 ml",
      ro: "750 ml",
    },
    price: 295,
    productType: "champagne",
  },
  {
    image: "jagermeister.png",
    name: {
      ru: "Jagermeister",
      ro: "Jagermeister",
    },
    description: {
      ru: "50 ml",
      ro: "50 ml",
    },
    price: 50,
    productType: "strong_alchogol",
  },
  {
    image: "bailey_s.png",
    name: {
      ru: "Bailey’s",
      ro: "Bailey’s",
    },
    description: {
      ru: "50 ml",
      ro: "50 ml",
    },
    price: 50,
    productType: "strong_alchogol",
  },
  {
    image: "martini_rosso.png",
    name: {
      ru: "Martini Rosso",
      ro: "Martini Rosso",
    },
    description: {
      ru: "50 ml",
      ro: "50 ml",
    },
    price: 35,
    productType: "strong_alchogol",
  },
  {
    image: "martini_bianco.png",
    name: {
      ru: "Martini Bianco",
      ro: "Martini Bianco",
    },
    description: {
      ru: "50 ml",
      ro: "50 ml",
    },
    price: 35,
    productType: "strong_alchogol",
  },
  {
    image: "jose_cuervo.png",
    name: {
      ru: "Jose Cuervo",
      ro: "Jose Cuervo",
    },
    description: {
      ru: "Reposado/ Silver 50 ml",
      ro: "Reposado/ Silver 50 ml",
    },
    price: 50,
    productType: "strong_alchogol",
  },
  {
    image: "tabacco.png",
    name: {
      ru: "Tabacco",
      ro: "Tabacco",
    },
    description: {
      ru: "Silver Premium 50 ml",
      ro: "Silver Premium 50 ml",
    },
    price: 40,
    productType: "strong_alchogol",
  },
  {
    image: "bacardi.png",
    name: {
      ru: "Bacardi",
      ro: "Bacardi",
    },
    description: {
      ru: "Oakheart 50 ml",
      ro: "Oakheart 50 ml",
    },
    price: 50,
    productType: "strong_alchogol",
  },
  {
    image: "tuica_de_gutui_caise_prune.png",
    name: {
      ru: "Tuica de gutui,caise prune",
      ro: "Tuica de gutui,caise prune",
    },
    description: {
      ru: "50 ml",
      ro: "50 ml",
    },
    price: 35,
    productType: "strong_alchogol",
  },
  {
    image: "nemiroff.png",
    name: {
      ru: "Nemiroff",
      ro: "Nemiroff",
    },
    description: {
      ru: "50 ml",
      ro: "50 ml",
    },
    price: 25,
    productType: "strong_alchogol",
  },
  {
    image: "finlandia.png",
    name: {
      ru: "Finlandia",
      ro: "Finlandia",
    },
    description: {
      ru: "50 ml",
      ro: "50 ml",
    },
    price: 35,
    productType: "strong_alchogol",
  },
  {
    image: "bardar_5_ani.png",
    name: {
      ru: "Bardar 5 ani",
      ro: "Bardar 5 ani",
    },
    description: {
      ru: "50 ml",
      ro: "50 ml",
    },
    price: 30,
    productType: "strong_alchogol",
  },
  {
    image: "bardar_7_ani.png",
    name: {
      ru: "Bardar 7 ani",
      ro: "Bardar 7 ani",
    },
    description: {
      ru: "50 ml",
      ro: "50 ml",
    },
    price: 45,
    productType: "strong_alchogol",
  },
  {
    image: "calarasi_5_ani.png",
    name: {
      ru: "Calarasi 5 ani",
      ro: "Calarasi 5 ani",
    },
    description: {
      ru: "50 ml",
      ro: "50 ml",
    },
    price: 30,
    productType: "strong_alchogol",
  },
  {
    image: "calarasi_7_ani.png",
    name: {
      ru: "Calarasi 7 ani",
      ro: "Calarasi 7 ani",
    },
    description: {
      ru: "50 ml",
      ro: "50 ml",
    },
    price: 40,
    productType: "strong_alchogol",
  },
  {
    image: "balti_7_ani.png",
    name: {
      ru: "Balti 7 ani",
      ro: "Balti 7 ani",
    },
    description: {
      ru: "50 ml",
      ro: "50 ml",
    },
    price: 40,
    productType: "strong_alchogol",
  },
  {
    image: "speranta_9_ani.png",
    name: {
      ru: "Speranta 9 ani",
      ro: "Speranta 9 ani",
    },
    description: {
      ru: "50 ml",
      ro: "50 ml",
    },
    price: 50,
    productType: "strong_alchogol",
  },
  {
    image: "bucuria_10_anii.png",
    name: {
      ru: "Bucuria 10 anii",
      ro: "Bucuria 10 anii",
    },
    description: {
      ru: "50 ml",
      ro: "50 ml",
    },
    price: 55,
    productType: "strong_alchogol",
  },
  {
    image: "jameson.png",
    name: {
      ru: "Jameson",
      ro: "Jameson",
    },
    description: {
      ru: "50 ml",
      ro: "50 ml",
    },
    price: 50,
    productType: "strong_alchogol",
  },
  {
    image: "jack_daniel_s.png",
    name: {
      ru: "Jack Daniel’s",
      ro: "Jack Daniel’s",
    },
    description: {
      ru: "50 ml",
      ro: "50 ml",
    },
    price: 50,
    productType: "strong_alchogol",
  },
];
