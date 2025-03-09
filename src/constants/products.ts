
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
    image: "hering_cu_cartofi_fierti.png",
    name: {
      ru: "Сельдь с вареным картофелем",
      ro: "Hering cu cartofi fierti",
    },
    description: {
      ru: "с вареной картошкой 100/250 г",
      ro: "cu cartofi fierti 100/250 g",
    },
    price: 70,
    productType: "goldSnacks",
  },
  {
    image: "gingerica.png",
    name: {
      ru: "Жинжерица",
      ro: "Gingerica",
    },
    description: {
      ru: "с вареной картошкой 100/250/50 г",
      ro: "cu cartofi fierti 100/250/50 g",
    },
    price: 70,
    productType: "goldSnacks",
  },
  {
    image: "platou_de_legume.png",
    name: {
      ru: "Овощная тарелка",
      ro: "Platou de legume",
    },
    description: {
      ru: "свежие 450 г",
      ro: "proaspete 450 g",
    },
    price: 90,
    productType: "goldSnacks",
  },
  {
    image: "platou_de_cascavaluri.png",
    name: {
      ru: "Тарелка сыров",
      ro: "Platou de cascavaluri",
    },
    description: {
      ru: "от “Ferma Noastra” 300 г",
      ro: "de la “Ferma Noastra” 300 g",
    },
    price: 120,
    productType: "goldSnacks",
  },
  {
    image: "platou_de_slanina.png",
    name: {
      ru: "Тарелка со свиной саломой",
      ro: "Platou de Slanina",
    },
    description: {
      ru: "380 г",
      ro: "380 g",
    },
    price: 90,
    productType: "goldSnacks",
  },
  {
    image: "platou_de_salamuri.png",
    name: {
      ru: "Тарелка салями",
      ro: "Platou de salamuri",
    },
    description: {
      ru: "250 г",
      ro: "250 g",
    },
    price: 140,
    productType: "goldSnacks",
  },
  {
    image: "platou_de_muraturi.png",
    name: {
      ru: "Плато из маринадных овощей",
      ro: "Platou de muraturi",
    },
    description: {
      ru: "450г маринадных овощей",
      ro: "450g de muraturi",
    },
    price: 60,
    productType: "goldSnacks",
  },
  {
    image: "burratta_cu_salata.png",
    name: {
      ru: "Буррата с салатом",
      ro: "Burratta cu salata",
    },
    description: {
      ru: "250г бурраты с помидорами черри и базиликом",
      ro: "Burrata cu roșii cherysi și busuioc, 250g",
    },
    price: 99,
    productType: "goldSnacks",
  },
  {
    image: "bruschete.png",
    name: {
      ru: "Брускетта с лососем",
      ro: "Bruschete",
    },
    description: {
      ru: "2 шт. брускетты с лососем",
      ro: "Bruschete cu somon, 2 bucăți",
    },
    price: 85,
    productType: "goldSnacks",
  },
  {
    image: "bruschete_mozzarella.png",
    name: {
      ru: "Брускетта с моцареллой",
      ro: "Bruschete",
    },
    description: {
      ru: "250г брускетты с моцареллой",
      ro: "Bruschete cu mozzarella, 250g",
    },
    price: 65,
    productType: "goldSnacks",
  },
  {
    image: "bruschete_rosbif.png",
    name: {
      ru: "Брускетта с говяжьим ростбифом",
      ro: "Bruschete",
    },
    description: {
      ru: "250г брускетты с говяжьим ростбифом",
      ro: "Bruschete cu roșbif, 250g",
    },
    price: 70,
    productType: "goldSnacks",
  },
  {
    image: "cascaval_buffalo.png",
    name: {
      ru: "Буффало сыр",
      ro: "Cascaval Buffalo",
    },
    description: {
      ru: "Сыр теледжио с хлебом 125/50 г",
      ro: "Teleggio pane 125/50 g",
    },
    price: 140,
    productType: "hostSnack",
  },
  {
    image: "aripioare_de_pui.png",
    name: {
      ru: "Куриные крылышки",
      ro: "Aripioare de pui",
    },
    description: {
      ru: "Куриные наггетсы с картофелем по-деревенски 150/130/50 г",
      ro: "cu cartofi pai 150/130/50 g",
    },
    price: 85,
    productType: "hostSnack",
  },
  {
    image: "nughete_de_pui.png",
    name: {
      ru: "Куриные наггетсы",
      ro: "Nughete de pui",
    },
    description: {
      ru: "Куриные наггетсы с картофелем по-деревенски 150/130/50 г",
      ro: "cu cartofi pai 150/130/50 g",
    },
    price: 85,
    productType: "hostSnack",
  },
  {
    image: "placinte_in_asortiment.png",
    name: {
      ru: "Пироги ассортимент",
      ro: "Placinte in asortiment",
    },
    description: {
      ru: "200 г пирогов в ассортименте",
      ro: "200 g",
    },
    price: 40,
    productType: "hostSnack",
  },
  {
    image: "nacios.png",
    name: {
      ru: "Нацос",
      ro: "Nacios",
    },
    description: {
      ru: "50г/50г",
      ro: "50g/50g",
    },
    price: 40,
    productType: "beerSnack",
  },
  {
    image: "crutoane_cu_usturoi.png",
    name: {
      ru: "Хрустящие гренки с чесноком",
      ro: "Crutoane cu usturoi",
    },
    description: {
      ru: "250/50 г",
      ro: "250/50 g",
    },
    price: 40,
    productType: "beerSnack",
  },
  {
    image: "migdale_prajite.png",
    name: {
      ru: "Жареные миндаль",
      ro: "Migdale prajite",
    },
    description: {
      ru: "100 г",
      ro: "100 g",
    },
    price: 60,
    productType: "beerSnack",
  },
  {
    image: "pietrosel.png",
    name: {
      ru: "Крошка хлеба",
      ro: "Pietrosel",
    },
    description: {
      ru: "130/50 г",
      ro: "130/50 g",
    },
    price: 65,
    productType: "beerSnack",
  },
  {
    image: "ineluse.png",
    name: {
      ru: "Кольца лука",
      ro: "Ineluse",
    },
    description: {
      ru: "лук+соус тартар 130/50 г",
      ro: "ceapa+sos tartar 130/50 g",
    },
    price: 60,
    productType: "beerSnack",
  },
  {
    image: "ineluse_calmar.png",
    name: {
      ru: "Кольца кальмара",
      ro: "Ineluse",
    },
    description: {
      ru: "кальмар+соус тартар 130/50 г",
      ro: "de calmar+sos tartar 130/50 g",
    },
    price: 70,
    productType: "beerSnack",
  },
  {
    image: "basturma_de_vita.png",
    name: {
      ru: "Бастурма из говядины",
      ro: "Basturma de vita",
    },
    description: {
      ru: "50 г",
      ro: "50 g",
    },
    price: 70,
    productType: "beerSnack",
  },
  {
    image: "ciolan_de_proc.png",
    name: {
      ru: "Свиной голень",
      ro: "Ciolan de proc",
    },
    description: {
      ru: "Свиная голень",
      ro: "Ciolan de proc",
    },
    price: 199,
    productType: "mainDishes",
  },
  {
    image: "guleas_unguresc.png",
    name: {
      ru: "Венгерский гуляш",
      ro: "Guleas Unguresc",
    },
    description: {
      ru: "Венгерский гуляш",
      ro: "Guleas Unguresc",
    },
    price: 80,
    productType: "mainDishes",
  },
  {
    image: "file_de_somon.png",
    name: {
      ru: "Жареный лосось",
      ro: "File de somon",
    },
    description: {
      ru: "Жареный лосось",
      ro: "File de somon",
    },
    price: 170,
    productType: "mainDishes",
  },
  {
    image: "tocanita_de_iepuras.png",
    name: {
      ru: "Зайчатина тушеная",
      ro: "Tocanita de iepuras",
    },
    description: {
      ru: "Зайчатина тушеная",
      ro: "Tocanita de iepuras",
    },
    price: 95,
    productType: "mainDishes",
  },
  {
    image: "paste_cu_carne.png",
    name: {
      ru: "Макароны с говядиной",
      ro: "Paste cu carne",
    },
    description: {
      ru: "Макароны с говядиной",
      ro: "Paste cu carne",
    },
    price: 90,
    productType: "mainDishes",
  },
  {
    image: "paste_cu_somon.png",
    name: {
      ru: "Макароны с лососем",
      ro: "Paste cu somon",
    },
    description: {
      ru: "Макароны с лососем",
      ro: "Paste cu somon",
    },
    price: 110,
    productType: "mainDishes",
  },
  {
    image: "piept_de_pui.png",
    name: {
      ru: "Куриная грудка",
      ro: "Piept de pui",
    },
    description: {
      ru: "Куриная грудка, 180/50 г",
      ro: "Piept de pui",
    },
    price: 75,
    productType: "mainDishes",
  },
  {
    image: "frigarui_de_pui.png",
    name: {
      ru: "Куриные шашлычки",
      ro: "Frigarui de pui",
    },
    description: {
      ru: "Куриные шашлычки, 300/25/25 г",
      ro: "Frigarui de pui",
    },
    price: 95,
    productType: "mainDishes",
  },
  {
    image: "frigarui_de_porc.png",
    name: {
      ru: "Свинные шашлычки",
      ro: "Frigarui de porc",
    },
    description: {
      ru: "Свинные шашлычки, 250/50/50 г",
      ro: "Frigarui de porc",
    },
    price: 105,
    productType: "mainDishes",
  },
  {
    image: "frigarui_de_vita.png",
    name: {
      ru: "Говяжьи шашлычки",
      ro: "Frigarui de vita",
    },
    description: {
      ru: "Говяжьи шашлычки, 250/50/50 г",
      ro: "Frigarui de vita",
    },
    price: 155,
    productType: "mainDishes",
  },
  {
    image: "mici_de_casa.png",
    name: {
      ru: "Домашние мичи",
      ro: "Mici de casa",
    },
    description: {
      ru: "Домашние мичи, салат из капусты 180/100/50 г",
      ro: "Mici de casa",
    },
    price: 90,
    productType: "mainDishes",
  },
  {
    image: "steak.png",
    name: {
      ru: "Бифштекс",
      ro: "Steak",
    },
    description: {
      ru: "Бифштекс, 250/50/50 г",
      ro: "Steak",
    },
    price: 155,
    productType: "mainDishes",
  },
  {
    image: "carne_de_bivol_inabusit_in_vin.png",
    name: {
      ru: "Мясо бизона тушеное в вине",
      ro: "Carne de Bivol inabusit in vin",
    },
    description: {
      ru: "Мясо бизона, овощи, запеченные картофель",
      ro: "Carne de bivol,Legume, Cartofi copti",
    },
    price: 140,
    productType: "mainDishes",
  },
  {
    image: "snitel.png",
    name: {
      ru: "Куриный шницель",
      ro: "Snitel",
    },
    description: {
      ru: "Куриный шницель, 180/50 г",
      ro: "de pui 180/50 g",
    },
    price: 75,
    productType: "mainDishes",
  },
  {
    image: "burger_de_pui.png",
    name: {
      ru: "Куриный бургер",
      ro: "Burger de pui",
    },
    description: {
      ru: "Куриный бургер, 400 г",
      ro: "400g",
    },
    price: 90,
    productType: "mainDishes",
  },
  {
    image: "burger_de_vita.png",
    name: {
      ru: "Говяжий бургер",
      ro: "Burger de vita",
    },
    description: {
      ru: "Говяжий бургер, 400 г",
      ro: "400g",
    },
    price: 90,
    productType: "mainDishes",
  },
  {
    image: "carnita_de_curcan.png",
    name: {
      ru: "Туриця на мангалі з картоплею",
      ro: "Carnita de curcan",
    },
    description: {
      ru: "Туриця, картопля, 550 г",
      ro: "cu cartofi in oala 550 g",
    },
    price: 155,
    productType: "mainDishes",
  },
  {
    image: "costita_de_vitel.png",
    name: {
      ru: "Говяжьи ребрышки",
      ro: "Costita de vitel",
    },
    description: {
      ru: "Говяжьи ребрышки, 100 г",
      ro: "100 g",
    },
    price: 35,
    productType: "mainDishes",
  },
  {
    image: "platou_de_carne_gril.png",
    name: {
      ru: "Жареное мясо",
      ro: "Platou de carne gril",
    },
    description: {
      ru: "Жареное мясо, 1500 г",
      ro: "Platou de carne gril",
    },
    price: 600,
    productType: "mainDishes",
  },
  {
    image: "cartofi_copti.png",
    name: {
      ru: "Жареная картошка",
      ro: "Cartofi copti",
    },
    description: {
      ru: "Жареная картошка с розмарином, 250 г",
      ro: "Cartofi copti",
    },
    price: 40,
    productType: "gaskets",
  },
  {
    image: "cartofi_pai_ketchup.png",
    name: {
      ru: "Картофель фри с кетчупом",
      ro: "Cartofi pai + ketchup",
    },
    description: {
      ru: "Картофель фри с кетчупом, 130/50 г",
      ro: "Cartofi pai + ketchup",
    },
    price: 35,
    productType: "gaskets",
  },
  {
    image: "piure_de_cartofi.png",
    name: {
      ru: "Пюре из картофеля",
      ro: "Piure de cartofi",
    },
    description: {
      ru: "Пюре из картофеля, 200 г",
      ro: "Piure de cartofi",
    },
    price: 30,
    productType: "gaskets",
  },
  {
    image: "cartofi_prajiti_ca_acasa.png",
    name: {
      ru: "Домашняя жареная картошка",
      ro: "Cartofi prajiti ca acasa",
    },
    description: {
      ru: "Домашняя жареная картошка, 300 г",
      ro: "Cartofi prajiti ca acasa",
    },
    price: 50,
    productType: "gaskets",
  },
  {
    image: "mamaliga.png",
    name: {
      ru: "Полента",
      ro: "Mamaliga",
    },
    description: {
      ru: "Полента со сметаной и сыром, 350 г",
      ro: "Mamaliga",
    },
    price: 50,
    productType: "gaskets",
  },
  {
    image: "orez_cu_legume.png",
    name: {
      ru: "Рис с овощами",
      ro: "Orez cu legume",
    },
    description: {
      ru: "Рис с овощами, 250 г",
      ro: "Orez cu legume",
    },
    price: 35,
    productType: "gaskets",
  },
  {
    image: "piure_de_brocoli.png",
    name: {
      ru: "Брокколи пюре",
      ro: "Piure de brocoli",
    },
    description: {
      ru: "Пюре из брокколи, 200 г",
      ro: "Piure de brocoli",
    },
    price: 45,
    productType: "gaskets",
  },
  {
    image: "pastari.png",
    name: {
      ru: "Паста",
      ro: "Pastari",
    },
    description: {
      ru: "Паста, 270 г",
      ro: "Pastari",
    },
    price: 40,
    productType: "gaskets",
  },
  {
    image: "paste_cu_unt.png",
    name: {
      ru: "Паста с маслом",
      ro: "Paste cu unt",
    },
    description: {
      ru: "Паста с маслом, 200 г",
      ro: "Paste cu unt",
    },
    price: 30,
    productType: "gaskets",
  },
  {
    image: "fasole_cu_legume.png",
    name: {
      ru: "Фасоль с овощами",
      ro: "Fasole cu legume",
    },
    description: {
      ru: "Фасоль с овощами, 200 г",
      ro: "Fasole cu legume",
    },
    price: 50,
    productType: "gaskets",
  },
  {
    image: "varza_calita.png",
    name: {
      ru: "Тушеная капуста",
      ro: "Varza calita",
    },
    description: {
      ru: "Тушеная капуста, 200 г",
      ro: "Varza calita",
    },
    price: 40,
    productType: "gaskets",
  },
  {
    image: "margherita.png",
    name: {
      ru: "Маргарита",
      ro: "Margherita",
    },
    description: {
      ru: "Соус из помидоров, моцарелла",
      ro: "Sos de rosii, mozzarella",
    },
    price: 85,
    productType: "pizza",
  },
  {
    image: "diavola.png",
    name: {
      ru: "Дьявола",
      ro: "Diavola",
    },
    description: {
      ru: "Соус из помидоров, острая салями, моцарелла",
      ro: "Sos de rosii, salam picant, mozzarella",
    },
    price: 95,
    productType: "pizza",
  },
  {
    image: "tonno.png",
    name: {
      ru: "Тонно",
      ro: "Tonno",
    },
    description: {
      ru: "Соус из помидоров, руккола, черри, Прошутто, моцарелла, тунец",
      ro: "Sos de rosii, rucola, cherry, Provola, mozzarella, ton",
    },
    price: 115,
    productType: "pizza",
  },
  {
    image: "capriciossa.png",
    name: {
      ru: "Капричиоза",
      ro: "Capriciossa",
    },
    description: {
      ru: "Свинина, запеченная баклажан, соус из помидоров, грибы, козий сыр, моцарелла",
      ro: "Ceafa de porc, vanata coapta, sos de rosii, ciuperci, branza decapra, mozzarella",
    },
    price: 110,
    productType: "pizza",
  },
  {
    image: "pollo.png",
    name: {
      ru: "Полло",
      ro: "Pollo",
    },
    description: {
      ru: "Перец, грибы, куриное филе, моцарелла, соус из помидоров",
      ro: "Gogosari, ciuperci, piept de pui, mozzarella, sos de rosii.",
    },
    price: 110,
    productType: "pizza",
  },
  {
    image: "prosciutto_e_funghi.png",
    name: {
      ru: 'Пицца "Прошутто и грибы"',
      ro: "Prosciutto e funghi",
    },
    description: {
      ru: "Моцарелла, прошутто, ветчина, грибы, томатный соус",
      ro: "Mozzarella, prosciutto, cotto, ciuperci, sos de rosii",
    },
    price: 98,
    productType: "pizza",
  },
  {
    image: "quattro_formaggi.png",
    name: {
      ru: 'Пицца "Четыре сыра"',
      ro: "Quattro formaggi",
    },
    description: {
      ru: "Моцарелла, горгонзола, проволоне, рикотта, томатный соус",
      ro: "Mozzarella, gorgonzola, provola edam, ricotta",
    },
    price: 115,
    productType: "pizza",
  },
  {
    image: "ferma_cu_origini.png",
    name: {
      ru: 'Пицца "Ферма с оригиналами"',
      ro: "Ferma cu origini",
    },
    description: {
      ru: "Томатный соус, моцарелла, кукуруза, прошутто, грибы, сладкий перец, оливки",
      ro: "Sos de rosii, mozzarella, porumb, prosciutto, ciuperci, gogosari, masline",
    },
    price: 110,
    productType: "pizza",
  },
  {
    image: "carbonara.png",
    name: {
      ru: 'Пицца "Карбонара"',
      ro: "Carbonara",
    },
    description: {
      ru: "Томатный соус, моцарелла, бекон, яйцо",
      ro: "Sos de rosii, mozzarella, bacon, ou",
    },
    price: 98,
    productType: "pizza",
  },
  {
    image: "leggera.png",
    name: {
      ru: "Леггера",
      ro: "Leggera",
    },
    description: {
      ru: "Мясо теленка, куринная грудка, бекон, соус томатный, моцарелла, пршут",
      ro: "Carne de vitel,piept de pui becon,sos de rosii, mozzarella,proschiutto ",
    },
    price: 115,
    productType: "pizza",
  },
  {
    image: "pizza_praga.png",
    name: {
      ru: "Пицца Прага",
      ro: "Pizza Praga",
    },
    description: {
      ru: "Соус томатный, моцарелла, бекон, колбаски охотничьи Пражские, сыр эдам",
      ro: "Sos de rosii,mozzarella,becon carnaciori vanatoresti de Praga,cascaval edam",
    },
    price: 105,
    productType: "pizza",
  },
  {
    image: "vegetariana.png",
    name: {
      ru: "Вегетарианская",
      ro: "Vegetariana",
    },
    description: {
      ru: "Соус томатный, овощи гриль",
      ro: "Sos de rosii, legume grill",
    },
    price: 85,
    productType: "pizza",
  },
  {
    image: "focaccia.png",
    name: {
      ru: "Фокачча",
      ro: "Focaccia",
    },
    description: {
      ru: "200 г",
      ro: "200 g",
    },
    price: 25,
    productType: "pizza",
  },
  {
    image: "napoleon.png",
    name: {
      ru: "Наполеон",
      ro: "Napoleon",
    },
    description: {
      ru: "180 г",
      ro: "180 g",
    },
    price: 65,
    productType: "deserts",
  },
  {
    image: "medovic.png",
    name: {
      ru: "Медовик",
      ro: "Medovic",
    },
    description: {
      ru: "140 г",
      ro: "140 g",
    },
    price: 65,
    productType: "deserts",
  },
  {
    image: "cusma_lui_guguta.png",
    name: {
      ru: "Гушма луй Гугуца",
      ro: "Cusma lui Guguta",
    },
    description: {
      ru: "170 г",
      ro: "170 g",
    },
    price: 65,
    productType: "deserts",
  },
  {
    image: "prajitura.png",
    name: {
      ru: "Пирожное",
      ro: "Prajitura",
    },
    description: {
      ru: "Вкус детства 90 г",
      ro: "Gustul copilariei 90g",
    },
    price: 55,
    productType: "deserts",
  },
  {
    image: "prune_cu_nuca.png",
    name: {
      ru: "Сливы с орехами",
      ro: "Prune cu nuca",
    },
    description: {
      ru: "в винном сиропе с кремом из сметаны 200 г",
      ro: "n sirop de vincu crema de smantana 200 g",
    },
    price: 65,
    productType: "deserts",
  },
  {
    image: "fondant.png",
    name: {
      ru: "Фондан",
      ro: "Fondant",
    },
    description: {
      ru: "шоколадный 70/50 г",
      ro: "de ciocolata 70/50 g",
    },
    price: 70,
    productType: "deserts",
  },
  {
    image: "inghetata_adevarata.png",
    name: {
      ru: "Настоящее мороженое",
      ro: "Inghetata adevarata",
    },
    description: {
      ru: "(Пломбир/Шоколад/Фундук/Фисташки/Ежевика, Клубника, 1 шарик 50 г)",
      ro: "(Plombir/Ciocolata /Nocciola/ Fistic/Mure,Capsuna ,1 bila  50 g",
    },
    price: 15,
    productType: "deserts",
  },
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
