import * as links from './links';

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
  products?: Product[];
}

export const products: MenuSection[] = [
  {
    sectionName: "Mic dejun",
    id: links.breakfast,
    products: [
      {
        name: "Brinzoaice",
        description: "200-50g",
        price: 60.0,
        img: "brinzoaice.png",
      },
      {
        name: "Omleta cu salata",
        description: "200g",
        price: 50.0,
        img: "omleta_cu_salata.png",
      },
      {
        name: "Ochiuri",
        description: "cu becon 2buc/50g",
        price: 60.0,
        img: "ochiuri.png",
      },
      {
        name: "Clatite",
        description: "cu gem 250g",
        price: 60.0,
        img: "clatite.png",
      },
      {
        name: "Terci de ovaz",
        description: "pe lapte,apa ,cu gem 300g",
        price: 35.0,
        img: "terci_de_ovaz.png",
      },
      {
        name: "Croissant",
        description: "in sortiment 1 buc",
        price: 35.0,
        img: "croissant.png",
      },
    ],
  },
  {
    sectionName: "Supe",
    id: links.soup,
    products: [
      {
        name: "Bors rosu",
        description: "cu carne de vita 350/50/50 g",
        price: 60.0,
        img: "bors_rosu.png",
      },
      {
        name: "Zeama de gaina",
        description: "de casa 350/50 g",
        price: 55.0,
        img: "zeama_de_gaina.png",
      },
      {
        name: "Soleanca",
        description: "350/50 g",
        price: 60.0,
        img: "soleanca.png",
      },
      {
        name: "Supa de spanac",
        description: "250/30 g ",
        price: 70.0,
        img: "supa_de_spanac.png",
      },
      {
        name: "Crem supa",
        description: "de cascaval 380 /30g",
        price: 55.0,
        img: "crem_supa.png",
      },
    ],
  },
  {
    sectionName: "Salate",
    id: links.salads,
    products: [
      {
        name: "Salata Shopski",
        description: "200 g",
        price: 70.0,
        img: "salata_shopski.png",
      },
      {
        name: "Salata Caesar ",
        description: "cu carne de pui 320 g",
        price: 90.0,
        img: "salata_caesar.png",
      },
      {
        name: "Salata de varza ",
        description: "200-50g",
        price: 40.0,
        img: "salata_de_varza.png",
      },
      {
        name: "Salata cu varza murata",
        description: "200 g",
        price: 40.0,
        img: "salata_cu_varza_murata.png",
      },
      {
        name: "Salata Exotic",
        description: "cu pui si cascaval 250g ",
        price: 75.0,
        img: "salata_exotic.png",
      },
      {
        name: "Salata Mozzarella Perle",
        description: "250 g",
        price: 75.0,
        img: "salata_mozzarella_perle.png",
      },
      {
        name: "Salata calda",
        description: "cu carne de vita 320g",
        price: 100.0,
        img: "salata_calda.png",
      },

      {
        name: "Salata din legume ",
        description: "coapte 350 g",
        price: 75.0,
        img: "salata_din_legume.png",
      },
      {
        name: "Salata cu ton",
        description: "210 g ",
        price: 95.0,
        img: "salata_cu_ton.png",
      },
      {
        name: "Mix de legume",
        description: "250g",
        price: 60.0,
        img: "mix_de_legume.png",
      },
    ],
  },
  {
    sectionName: "GUSTARI RECI",
    id: links.goldSnacks,
    products: [
      {
        name: "Hering cu cartofi fierti",
        description: "100/250 g",
        price: 70.0,
        img: "hering_cu_cartofi_fierti.png",
      },
      {
        name: "Gingerica",
        description: "cu cartofi fierti 100/250/50 g",
        price: 70.0,
        img: "gingerica.png",
      },
      {
        name: "Platou de legume",
        description: "proaspete 450 g",
        price: 90.0,
        img: "platou_de_legume.png",
      },
      {
        name: "Platou de cascavaluri",
        description: "de la “Ferma Noastra” 300 g",
        price: 120.0,
        img: "platou_de_cascavaluri.png",
      },
      {
        name: "Platou de Slanina",
        description: "380 g ",
        price: 90.0,
        img: "platou_de_slanina.png",
      },
      {
        name: "Platou de salamuri",
        description: "250g",
        price: 140.0,
        img: "platou_de_salamuri.png",
      },

      {
        name: "Platou de muraturi",
        description: "450g",
        price: 60.0,
        img: "platou_de_muraturi.png",
      },
      {
        name: "Burratta cu salata",
        description: "de rosii cherrysi busuioc 250 g",
        price: 99.0,
        img: "burratta_cu_salata.png",
      },
      {
        name: "Bruschete",
        description: "cu somon 2 buc",
        price: 85.0,
        img: "bruschete.png",
      },
      {
        name: "Bruschete",
        description: "cu mozzarella 250g",
        price: 65.0,
        img: "bruschete_mozzarella.png",
      },
      {
        name: "Bruschete",
        description: "cu rosbif 250g",
        price: 70.0,
        img: "bruschete_rosbif.png",
      },
    ],
  },
  {
    sectionName: "GUSTARI FIERBINTI",
    id: links.hostSnack,
    products: [
      {
        name: "Cascaval Buffalo",
        description: "Teleggio pane 125/50 g",
        price: 140.0,
        img: "cascaval_buffalo.png",
      },
      {
        name: "Aripioare de pui",
        description: "cu cartofi pai 250/130/50 g",
        price: 85.0,
        img: "aripioare_de_pui.png",
      },
      {
        name: "Nughete de pui",
        description: "cu cartofi pai 150/130/50 g",
        price: 85.0,
        img: "nughete_de_pui.png",
      },
      {
        name: "Placinte in asortiment",
        description: "200 g",
        price: 40.0,
        img: "placinte_in_asortiment.png",
      },
    ],
  },
  {
    sectionName: "GUSTARI LA BERE",
    id: links.beerSnack,
    products: [
      {
        name: "Nacios",
        description: "50g/50g",
        price: 40.0,
        img: "nacios.png",
      },
      {
        name: "Crutoane cu usturoi",
        description: "250/50 g",
        price: 40.0,
        img: "crutoane_cu_usturoi.png",
      },
      {
        name: "Migdale prajite",
        description: "100 g",
        price: 60.0,
        img: "migdale_prajite.png",
      },
      {
        name: "Pietrosel",
        description: "130/50 g",
        price: 65.0,
        img: "pietrosel.png",
      },
      {
        name: "Ineluse",
        description: "ceapa+sos tartar 130/50 g ",
        price: 60.0,
        img: "ineluse.png",
      },
      {
        name: "Ineluse",
        description: "de calmar+sos tartar 130/50 g ",
        price: 70.0,
        img: "ineluse_calmar.png",
      },
      {
        name: "Basturma de vita",
        description: "50 g",
        price: 70.0,
        img: "basturma_de_vita.png",
      },
    ],
  },
  {
    sectionName: "BUCATE PRINCIPALE",
    id: links.mainDishes,
    products: [
      {
        name: "Ciolan de proc",
        description: "750 g",
        price: 199.0,
        img: "ciolan_de_proc.png",
      },
      {
        name: "Guleas Unguresc",
        description: "300/50 g",
        price: 80.0,
        img: "guleas_unguresc.png",
      },
      {
        name: "File de somon",
        description: "somon la gratar 150/ 50 g ",
        price: 170.0,
        img: "file_de_somon.png",
      },
      {
        name: "Tocanita de iepuras",
        description: "200 g",
        price: 95.0,
        img: "tocanita_de_iepuras.png",
      },
      {
        name: "Paste cu carne",
        description: "de vita tocata 300 g ",
        price: 90.0,
        img: "paste_cu_carne.png",
      },
      {
        name: "Paste cu somon",
        description: "in sos alb 250 g",
        price: 110.0,
        img: "paste_cu_somon.png",
      },
      {
        name: "Piept de pui",
        description: "180/50 g",
        price: 75.0,
        img: "piept_de_pui.png",
      },
      {
        name: "Frigarui de pui",
        description: "300/25/25 g",
        price: 95.0,
        img: "frigarui_de_pui.png",
      },
      {
        name: "Frigarui de porc",
        description: "250/50/50 g",
        price: 105.0,
        img: "frigarui_de_porc.png",
      },
      {
        name: "Frigarui de vita",
        description: "250/50/50 g",
        price: 155.0,
        img: "frigarui_de_vita.png",
      },
      {
        name: "Mici de casa",
        description: "salata de varza 180/100/50 g",
        price: 90.0,
        img: "mici_de_casa.png",
      },

      {
        name: "Steak",
        description: "250/50/50 g",
        price: 155.0,
        img: "steak.png",
      },
      {
        name: "Carne de Bivol inabusit in vin",
        description: "Carne de bivol,Legume, Cartofi copti",
        price: 140.0,
        img: "carne_de_bivol_inabusit_in_vin.png",
      },
      {
        name: "Snitel",
        description: "de pui 180/50 g",
        price: 75.0,
        img: "snitel.png",
      },
      {
        name: "Burger de pui",
        description: "400g",
        price: 90.0,
        img: "burger_de_pui.png",
      },
      {
        name: "Burger de vita",
        description: "400g",
        price: 90.0,
        img: "burger_de_vita.png",
      },
      {
        name: "Carnita de curcan",
        description: "cu cartofi in oala 550 g",
        price: 155.0,
        img: "carnita_de_curcan.png",
      },
      {
        name: "Costita de vitel",
        description: "100 g",
        price: 35.0,
        img: "costita_de_vitel.png",
      },
      {
        name: "Platou de carne gril",
        description: "1500 g",
        price: 600.0,
        img: "platou_de_carne_gril.png",
      },
    ],
  },
  {
    sectionName: "GARNITURI",
    id: links.gaskets,
    products: [
      {
        name: "Cartofi copti",
        description: "cu rozmarin 250 g",
        price: 40.0,
        img: "cartofi_copti.png",
      },
      {
        name: "Cartofi pai + ketchup",
        description: "130/50 g",
        price: 35.0,
        img: "cartofi_pai_ketchup.png",
      },
      {
        name: "Piure de cartofi",
        description: "200 g",
        price: 30.0,
        img: "piure_de_cartofi.png",
      },
      {
        name: "Cartofi prajiti ca acasa",
        description: "300 g",
        price: 50.0,
        img: "cartofi_prajiti_ca_acasa.png",
      },
      {
        name: "Mamaliga",
        description: "cu smantana, branza 350 g",
        price: 50.0,
        img: "mamaliga.png",
      },
      {
        name: "Orez cu legume",
        description: "250 g",
        price: 35.0,
        img: "orez_cu_legume.png",
      },
      {
        name: "Piure de brocoli",
        description: "200 g",
        price: 45.0,
        img: "piure_de_brocoli.png",
      },
      {
        name: "Pastari",
        description: "270 g",
        price: 40.0,
        img: "pastari.png",
      },
      {
        name: "Paste cu unt",
        description: "200 gg ",
        price: 30.0,
        img: "paste_cu_unt.png",
      },
      {
        name: "Fasole cu legume",
        description: "200 g",
        price: 50.0,
        img: "fasole_cu_legume.png",
      },
      {
        name: "Varza calita",
        description: "200 g",
        price: 40.0,
        img: "varza_calita.png",
      },
    ],
  },
  {
    sectionName: "PIZZA",
    id: links.pizza,
    products: [
      {
        name: "Margherita",
        description: "Sos de rosii, mozzarella",
        price: 85.0,
        img: "margherita.png",
      },
      {
        name: "Diavola",
        description: "Sos de rosii,salam picant, mozzarella",
        price: 95.0,
        img: "diavola.png",
      },
      {
        name: "Tonno",
        description: "Sos de rosii,rucola, cherry, Provola,mozzarella, ton",
        price: 115.0,
        img: "tonno.png",
      },
      {
        name: "Capriciossa",
        description:
          "Ceafa de porc, vanata coapta, sos de rosii, ciuperci , branza decapra, mozzarella",
        price: 110.0,
        img: "capriciossa.png",
      },
      {
        name: "Pollo",
        description:
          "Gogosari, ciuperci,piept de pui mozzarella, sos de rosii.",
        price: 110.0,
        img: "pollo.png",
      },
      {
        name: "Prosciutto e funghi",
        description: "Mozzarella, prosciutto, cotto, ciuperci,sos de rosii",
        price: 98.0,
        img: "prosciutto_e_funghi.png",
      },
      {
        name: "Quattro formaggi",
        description: "Mozzarella,gorgonzola, provola edam,ricotta",
        price: 115.0,
        img: "quattro_formaggi.png",
      },
      {
        name: "Ferma cu origini",
        description:
          "Sos de rosii,mozzarella, porumb,prosciutto ,ciuperci, gogosari, masline",
        price: 110.0,
        img: "ferma_cu_origini.png",
      },
      {
        name: "Carbonara",
        description: "Sos de rosii,mozzarella, bacon,ou",
        price: 98.0,
        img: "carbonara.png",
      },
      {
        name: "Leggera",
        description:
          "Carne de vitel,piept de pui becon,sos de rosii, mozzarella,proschiutto ",
        price: 115.0,
        img: "leggera.png",
      },
      {
        name: "Pizza Praga",
        description:
          "Sos de rosii,mozzarella,becon carnaciori vanatoresti de Praga,cascaval edam",
        price: 105.0,
        img: "pizza_praga.png",
      },
      {
        name: "Vegetariana",
        description: "Sos de rosii, legume grill",
        price: 85.0,
        img: "vegetariana.png",
      },
      {
        name: "Focaccia",
        description: "200 g",
        price: 25.0,
        img: "focaccia.png",
      },
    ],
  },
  {
    sectionName: "DESERTURI",
    id: links.desserts,
    products: [
      {
        name: "Napoleon",
        description: "180 g",
        price: 65.0,
        img: "napoleon.png",
      },
      {
        name: "Medovic",
        description: "140 g",
        price: 65.0,
        img: "medovic.png",
      },
      {
        name: "Cusma lui Guguta",
        description: "170 g",
        price: 65.0,
        img: "cusma_lui_guguta.png",
      },
      {
        name: "Prajitura",
        description: "Gustul copilariei90g",
        price: 55.0,
        img: "prajitura.png",
      },
      {
        name: "Prune cu nuca",
        description: "n sirop de vincu crema de smantana 200 g",
        price: 65.0,
        img: "prune_cu_nuca.png",
      },
      {
        name: "Fondant",
        description: "de ciocolata 70/50 g",
        price: 70.0,
        img: "fondant.png",
      },
      {
        name: "Inghetata adevarata",
        description:
          "(Plombir/Ciocolata /Nocciola/ Fistic/Mure,Capsuna ,1 bila  50 g",
        price: 15.0,
        img: "inghetata_adevarata.png",
      },
    ],
  },
];
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
/*export let translatedProducts: MenuSection[] = [
  {
    sectionName: "breakFast",
    id: links.breakfast,
    products: [
      {
        img: "brinzoaice.png",
        price: 60,
        description: "cheeseBallsDescription",
        name: "cheeseBalls",
      },
      {
        img: "omleta_cu_salata.png",
        price: 50,
        description: "omeletteWithSaladDescription",
        name: "omeletteWithSalad",
      },
      {
        img: "ochiuri.png",
        price: 60,
        description: "eggsWithBaconDescription",
        name: "eggsWithBacon",
      },
      {
        img: "clatite.png",
        price: 60,
        description: "pancakesDescription",
        name: "pancakes",
      },
      {
        img: "terci_de_ovaz.png",
        price: 35,
        description: "oatmealDescription",
        name: "oatmeal",
      },
      {
        img: "croissant.png",
        price: 35,
        description: "croissantDescription",
        name: "croissant",
      },
    ],
  },
  {
    sectionName: "supe",
    id: links.soup,
    products: [
      {
        img: "bors_rosu.png",
        price: 60,
        description: "descriptionBorsRosu",
        name: "borsRosu",
      },
      {
        img: "zeama_de_gaina.png",
        price: 55,
        description: "descriptionZeamaDeGaina",
        name: "zeamaDeGaina",
      },
      {
        img: "soleanca.png",
        price: 60,
        description: "descriptionSoleanca",
        name: "soleanca",
      },
      {
        img: "supa_de_spanac.png",
        price: 70,
        description: "descriptionSupaDeSpanac",
        name: "supaDeSpanac",
      },
      {
        img: "crem_supa.png",
        price: 55,
        description: "descriptionCremSupa",
        name: "cremSupa",
      },
    ],
  },
  {
    sectionName: "salads",
    id: links.salads,
    products: [
      {
        img: "salata_shopski.png",
        price: 70,
        description: "descriptionSalataShopski",
        name: "salataShopski",
      },
      {
        img: "salata_caesar.png",
        price: 90,
        description: "descriptionSalataCaesar",
        name: "salataCaesar",
      },
      {
        img: "salata_de_varza.png",
        price: 40,
        description: "descriptionSalataDeVarza",
        name: "salataDeVarza",
      },
      {
        img: "salata_cu_varza_murata.png",
        price: 40,
        description: "descriptionSalataCuVarzaMurata",
        name: "salataCuVarzaMurata",
      },
      {
        img: "salata_exotic.png",
        price: 75,
        description: "descriptionSalataExotic",
        name: "salataExotic",
      },
      {
        img: "salata_mozzarella_perle.png",
        price: 75,
        description: "descriptionSalataMozzarellaPerle",
        name: "salataMozzarellaPerle",
      },
      {
        img: "salata_calda.png",
        price: 100,
        description: "descriptionSalataCalda",
        name: "salataCalda",
      },
      {
        img: "salata_din_legume.png",
        price: 75,
        description: "roasted_vegetables",
        name: "vegetable_salad",
      },
      {
        img: "salata_cu_ton.png",
        price: 95,
        description: "tuna",
        name: "tuna_salad",
      },
      {
        img: "mix_de_legume.png",
        price: 60,
        description: "vegetable_mix",
        name: "vegetable_mix",
      },
    ],
  },
  {
    sectionName: "goldSnacks",
    id: links.goldSnacks,
    products: [
      {
        img: "hering_cu_cartofi_fierti.png",
        price: 70,
        description: "cuCartofiFierti100250g",
        name: "heringCuCartofiFierti",
      },
      {
        img: "gingerica.png",
        price: 70,
        description: "cuCartofiFierti10025050g",
        name: "gingerica",
      },
      {
        img: "platou_de_legume.png",
        price: 90,
        description: "proaspete450g",
        name: "platouDeLegume",
      },
      {
        img: "platou_de_cascavaluri.png",
        price: 120,
        description: "deLaFermaNoastra300g",
        name: "platouDeCascavaluri",
      },
      {
        img: "platou_de_slanina.png",
        price: 90,
        description: "380g",
        name: "platouDeSlanina",
      },
      {
        img: "platou_de_salamuri.png",
        price: 140,
        description: "250g",
        name: "platouDeSalamuri",
      },
      {
        img: "platou_de_muraturi.png",
        price: 60,
        description: "plate_of_pickles_description",
        name: "plate_of_pickles",
      },
      {
        img: "burratta_cu_salata.png",
        price: 99,
        description: "burrata_with_salad_description",
        name: "burrata_with_salad",
      },
      {
        img: "bruschete.png",
        price: 85,
        description: "bruschetta_with_salmon_description",
        name: "bruschetta_with_salmon",
      },
      {
        img: "bruschete_mozzarella.png",
        price: 65,
        description: "bruschetta_with_mozzarella_description",
        name: "bruschetta_with_mozzarella",
      },
      {
        img: "bruschete_rosbif.png",
        price: 70,
        description: "bruschetta_with_roast_beef_description",
        name: "bruschetta_with_roast_beef",
      },
    ],
  },
  {
    sectionName: "hostSnack",
    id: links.hostSnack,
    products: [
      {
        img: "cascaval_buffalo.png",
        price: 140,
        description: "teleggioPane",
        name: "cascavalBuffalo",
      },
      {
        img: "aripioare_de_pui.png",
        price: 85,
        description: "cuCartofiPai",
        name: "aripioareDePui",
      },
      {
        img: "nughete_de_pui.png",
        price: 85,
        description: "cuCartofiPai",
        name: "nugheteDePui",
      },
      {
        img: "placinte_in_asortiment.png",
        price: 40,
        description: "twoHundredGrams",
        name: "placinteInAsortiment",
      },
    ],
  },
  {
    sectionName: "beerSnack",
    id: links.beerSnack,
    products: [
      {
        img: "nacios.png",
        price: 40,
        description: "50g/50g",
        name: "nacios",
      },
      {
        img: "crutoane_cu_usturoi.png",
        price: 40,
        description: "250/50 g",
        name: "crutoane_cu_usturoi",
      },
      {
        img: "migdale_prajite.png",
        price: 60,
        description: "100 g",
        name: "migdale_prajite",
      },
      {
        img: "pietrosel.png",
        price: 65,
        description: "130/50 g",
        name: "pietrosel",
      },
      {
        img: "ineluse.png",
        price: 60,
        description: "лук+соус тартар 130/50 g",
        name: "ineluse_ceapa",
      },
      {
        img: "ineluse_calmar.png",
        price: 70,
        description: "кальмар+соус тартар 130/50 g",
        name: "ineluse_calmar",
      },
      {
        img: "basturma_de_vita.png",
        price: 70,
        description: "50 g",
        name: "basturma_de_vita",
      },
    ],
  },
  {
    sectionName: "mainDishes",
    id: links.mainDishes,
    products: [
      {
        img: "ciolan_de_proc.png",
        price: 199,
        description: "pork_shank_description",
        name: "pork_shank",
      },
      {
        img: "guleas_unguresc.png",
        price: 80,
        description: "hungarian_goulash_description",
        name: "hungarian_goulash",
      },
      {
        img: "file_de_somon.png",
        price: 170,
        description: "grilled_salmon_description",
        name: "grilled_salmon",
      },
      {
        img: "tocanita_de_iepuras.png",
        price: 95,
        description: "rabbit_stew_description",
        name: "rabbit_stew",
      },
      {
        img: "paste_cu_carne.png",
        price: 90,
        description: "pasta_with_beef_description",
        name: "pasta_with_beef",
      },
      {
        img: "paste_cu_somon.png",
        price: 110,
        description: "pasta_with_salmon_description",
        name: "pasta_with_salmon",
      },
      {
        img: "piept_de_pui.png",
        price: 75,
        description: "chickenBreastDescription",
        name: "chickenBreast",
      },
      {
        img: "frigarui_de_pui.png",
        price: 95,
        description: "chickenSkewersDescription",
        name: "chickenSkewers",
      },
      {
        img: "frigarui_de_porc.png",
        price: 105,
        description: "porkSkewersDescription",
        name: "porkSkewers",
      },
      {
        img: "frigarui_de_vita.png",
        price: 155,
        description: "beefSkewersDescription",
        name: "beefSkewers",
      },
      {
        img: "mici_de_casa.png",
        price: 90,
        description: "homemadeMiciDescription",
        name: "homemadeMici",
      },
      {
        img: "steak.png",
        price: 155,
        description: "beefSteakDescription",
        name: "beefSteak",
      },
      {
        img: "carne_de_bivol_inabusit_in_vin.png",
        price: 140,
        description: "bisonStewInWineDescription",
        name: "bisonStewInWine",
      },
      {
        img: "snitel.png",
        price: 75,
        description: "chickenSchnitzelDescription",
        name: "chickenSchnitzel",
      },
      {
        img: "burger_de_pui.png",
        price: 90,
        description: "chickenBurgerDescription",
        name: "chickenBurger",
      },
      {
        img: "burger_de_vita.png",
        price: 90,
        description: "beefBurgerDescription",
        name: "beefBurger",
      },
      {
        img: "carnita_de_curcan.png",
        price: 155,
        description: "turkeyMeatWithPotatoesDescription",
        name: "turkeyMeatWithPotatoes",
      },
      {
        img: "costita_de_vitel.png",
        price: 35,
        description: "beefRibsDescription",
        name: "beefRibs",
      },
      {
        img: "platou_de_carne_gril.png",
        price: 600,
        description: "grilledMeatPlatterDescription",
        name: "grilledMeatPlatter",
      },
    ],
  },
  {
    sectionName: "gaskets",
    id: links.gaskets,
    products: [
      {
        img: "cartofi_copti.png",
        price: 40,
        description: "roastedPotatoesDescription",
        name: "roastedPotatoes",
      },
      {
        img: "cartofi_pai_ketchup.png",
        price: 35,
        description: "friesAndKetchupDescription",
        name: "friesAndKetchup",
      },
      {
        img: "piure_de_cartofi.png",
        price: 30,
        description: "mashedPotatoesDescription",
        name: "mashedPotatoes",
      },
      {
        img: "cartofi_prajiti_ca_acasa.png",
        price: 50,
        description: "homeStyleFriedPotatoesDescription",
        name: "homeStyleFriedPotatoes",
      },
      {
        img: "mamaliga.png",
        price: 50,
        description: "polentaDescription",
        name: "polenta",
      },
      {
        img: "orez_cu_legume.png",
        price: 35,
        description: "riceWithVegetablesDescription",
        name: "riceWithVegetables",
      },
      {
        img: "piure_de_brocoli.png",
        price: 45,
        description: "broccoliPureeDescription",
        name: "broccoliPuree",
      },
      {
        img: "pastari.png",
        price: 40,
        description: "pastaDescription",
        name: "pasta",
      },
      {
        img: "paste_cu_unt.png",
        price: 30,
        description: "pastaWithButterDescription",
        name: "pastaWithButter",
      },
      {
        img: "fasole_cu_legume.png",
        price: 50,
        description: "beanVegetableStewDescription",
        name: "beanVegetableStew",
      },
      {
        img: "varza_calita.png",
        price: 40,
        description: "braisedCabbageDescription",
        name: "braisedCabbage",
      },
    ],
  },
  {
    sectionName: "pizza",
    id: links.pizza,
    products: [
      {
        img: "margherita.png",
        price: 85,
        description: "margheritaDescription",
        name: "margherita",
      },
      {
        img: "diavola.png",
        price: 95,
        description: "diavolaDescription",
        name: "diavola",
      },
      {
        img: "tonno.png",
        price: 115,
        description: "tonnoDescription",
        name: "tonno",
      },
      {
        img: "capriciossa.png",
        price: 110,
        description: "capriciossaDescription",
        name: "capriciossa",
      },
      {
        img: "pollo.png",
        price: 110,
        description: "polloDescription",
        name: "pollo",
      },
      {
        img: "prosciutto_e_funghi.png",
        price: 98,
        description: "prosciuttoEFunghiDescription",
        name: "prosciuttoEFunghi",
      },
      {
        img: "quattro_formaggi.png",
        price: 115,
        description: "quattroFormaggiDescription",
        name: "quattroFormaggi",
      },
      {
        img: "ferma_cu_origini.png",
        price: 110,
        description: "fermaCuOriginiDescription",
        name: "fermaCuOrigini",
      },
      {
        img: "carbonara.png",
        price: 98,
        description: "carbonaraDescription",
        name: "carbonara",
      },
      {
        img: "leggera.png",
        price: 115,
        description: "leggeraDescription",
        name: "leggera",
      },
      {
        img: "pizza_praga.png",
        price: 105,
        description: "pizzaPragaDescription",
        name: "pizzaPraga",
      },
      {
        img: "vegetariana.png",
        price: 85,
        description: "vegetarianaDescription",
        name: "vegetariana",
      },
      {
        img: "focaccia.png",
        price: 25,
        description: "focacciaDescription",
        name: "focaccia",
      },
    ],
  },
  {
    sectionName: "deserts",
    id: links.desserts,
    products: [
      {
        name: "napoleon",
        description: "napoleonDescription",
        price: 65.0,
        img: "napoleon.png",
      },
      {
        name: "medovic",
        description: "medovicDescription",
        price: 65.0,
        img: "medovic.png",
      },
      {
        name: "gusmaLuiGuguta",
        description: "gusmaLuiGugutaDescription",
        price: 65.0,
        img: "cusma_lui_guguta.png",
      },
      {
        name: "prajitura",
        description: "prajituraDescription",
        price: 55.0,
        img: "prajitura.png",
      },
      {
        name: "pruneCuNuca",
        description: "pruneCuNucaDescription",
        price: 65.0,
        img: "prune_cu_nuca.png",
      },
      {
        name: "fondant",
        description: "fondantDescription",
        price: 70.0,
        img: "fondant.png",
      },
      {
        name: "inghetataAdevarata",
        description: "inghetataAdevarataDescription",
        price: 15.0,
        img: "inghetata_adevarata.png",
      },
    ],
  },
  {
    sectionName: "Bauturi non Alcoolice",
    id: links.nonAlchogol,
    products: [
      {
        name: "Guizza",
        description: "(apa plata/gazoasa) 500ml ",
        price: 15.0,
        img: "guizza.png",
      },
      {
        name: "Plose",
        description: "(apa plata/gazata) 250/750ml",
        price: "30/60.00",
        img: "plose.png",
      },
      {
        name: "Coca Cola,Sprite,Fanta",
        description: "300/500 ml",
        price: "20/25.00",
        img: "coca_cola_sprite_fanta.png",
      },
      {
        name: "Ceai rece",
        description: "500 ml",
        price: 25.0,
        img: "ceai_rece.png",
      },
      {
        name: "Suc Jaffa",
        description: "250/950 ml",
        price: "20/65.00",
        img: "suc_jaffa.png",
      },
      {
        name: "Suc Fresh",
        description: "orange/grapefruit 250 ml",
        price: 45.0,
        img: "suc_fresh.png",
      },
      {
        name: "Borjomi",
        description: "500 ml",
        price: 45.0,
        img: "borjomi.png",
      },
    ],
  },
  {
    sectionName: "Bauturi de casa",
    id: links.milkShakes,
    products: [
      {
        name: "Milkshake",
        description: "350 ml  ",
        price: 45.0,
        img: "milkshake.png",
      },
      {
        name: "Limonada clasica",
        description: "350 ml/1L",
        price: "40/70.00",
        img: "limonada_clasica.png",
      },
      {
        name: "Limonada de capsuna",
        description: "350 ml/1L",
        price: "40/70.00",
        img: "limonada_de_capsuna.png",
      },
      {
        name: "Ceai rece de casa",
        description: "350 ml/1L",
        price: "35/65.00",
        img: "ceai_rece_de_casa.png",
      },
      {
        name: "Pina Colada",
        description: "250/950 ml",
        price: "45/65.00",
        img: "pina_colada.png",
      },
      {
        name: "Frappe",
        description: "350 ml",
        price: 35.0,
        img: "frappe.png",
      },
    ],
  },
  {
    sectionName: "Bauturi Fierbinte",
    id: links.coffee,
    products: [
      {
        name: "Espresso",
        description: "30 ml ",
        price: 20.0,
        img: "espresso.png",
      },
      {
        name: "Americano",
        description: "100 ml",
        price: 20.0,
        img: "americano.png",
      },
      {
        name: "Cappuccino",
        description: "250ml",
        price: 30.0,
        img: "cappuccino.png",
      },
      {
        name: "Latte",
        description: "300 ml",
        price: 30.0,
        img: "latte.png",
      },
      {
        name: "Mocaccino",
        description: "",
        price: 30.0,
        img: "mocaccino.png",
      },
      {
        name: "Cacao",
        description: "250 ml",
        price: 30.0,
        img: "cacao.png",
      },
      {
        name: "Ceai de catina",
        description: "ghimbir si portocala ,450 ml",
        price: 50.0,
        img: "ceai_de_catina.png",
      },
      {
        name: "Ceai de Plante",
        description: "450 ml",
        price: 45.0,
        img: "ceai_de_plante.png",
      },
    ],
  },
  {
    sectionName: "Bauturi Alcoolice",
    id: links.alchogolCoctails,
    products: [
      {
        name: "Aperol Spritz",
        description: "350  ml",
        price: 65.0,
        img: "aperol_spritz.png",
      },
      {
        name: "Gin tonic",
        description: "350 ml",
        price: 55.0,
        img: "gin_tonic.png",
      },
      {
        name: "Cuba Libre",
        description: "350 ml",
        price: 60.0,
        img: "cuba_libre.png",
      },
      {
        name: "Green Mexican",
        description: "60 ml",
        price: 55.0,
        img: "green_mexican.png",
      },
      {
        name: "Long Island Ice Tea",
        description: "",
        price: 90.0,
        img: "long_island_ice_tea.png",
      },
      {
        name: "Glintwein",
        description: "55 ml",
        price: 30.0,
        img: "glintwein.png",
      },
    ],
  },
  {
    sectionName: "BERE LA STICLâ,LA HALBA",
    id: links.alchogolCoctails,
    products: [
      {
        name: "Pale Ale",
        description: "350  ml",
        price: 45.0,
        img: "pale_ale.png",
      },
      {
        name: "Efes pilsner",
        description: "f/a ,c/a 500 ml",
        price: 40.0,
        img: "efes_pilsner.png",
      },
      {
        name: "Kozel",
        description: "bruna / blonda 500 ml",
        price: 40.0,
        img: "kozel.png",
      },
      {
        name: "Corona Extra",
        description: "355 ml",
        price: 55.0,
        img: "corona_extra.png",
      },
      {
        name: "Hoegaarden",
        description: "330 ml",
        price: 50.0,
        img: "hoegaarden.png",
      },
      {
        name: "Franziskaner",
        description: "Weissbier 500 ml",
        price: 60.0,
        img: "franziskaner.png",
      },
      {
        name: "Kronenbourg",
        description: "460 ml",
        price: 45.0,
        img: "kronenbourg.png",
      },
      {
        name: "Kozel blonda  HALBA",
        description: "500 ml",
        price: 35.0,
        img: "kozel_blonda_halba.png",
      },
    ],
  },
  {
    sectionName: "VINUL FAUTOR ,ASCONI ,BOSTAVAN ,CRICOVA",
    id: links.alchogolCoctails,
    products: [
      {
        name: "Sauvignon Blanc Aligote",
        description: "(alb, sec) 0,75 ml",
        price: 210.0,
        img: "sauvignon_blanc_aligote.png",
      },
      {
        name: "Merlot Rara Neagra",
        description: "(rosu, sec) 0,75 ml",
        price: 210.0,
        img: "merlot_rara_neagra.png",
      },
      {
        name: "Merlot Feteasca Nearga",
        description: "(roz, sec)0,75 ml",
        price: 210.0,
        img: "merlot_feteasca_nearga.png",
      },
      {
        name: "Aurore Feteasca Neagra",
        description: "0,75 ml",
        price: 350.0,
        img: "aurore_feteasca_neagra.png",
      },
      {
        name: "Aurore Pinot Grigio",
        description: "0,75 ml",
        price: 350.0,
        img: "aurore_pinot_grigio.png",
      },
      {
        name: "Aurore Rara Neagra",
        description: "0,75 ml",
        price: 350.0,
        img: "aurore_rara_neagra.png",
      },
      {
        name: "Uneori Cabernet Sauvignon",
        description: "750 ml",
        price: 200.0,
        img: "uneori_cabernet_sauvignon.png",
      },
      {
        name: "Uneori Riesling",
        description: "750 ml",
        price: 200.0,
        img: "uneori_riesling.png",
      },

      {
        name: "Uneori Muscat Rose",
        description: "750 ml",
        price: 240.0,
        img: "uneori_muscat_rose.png",
      },
      {
        name: "Cabernet Sauvignon",
        description: "150/750 ml",
        price: "30/150.00",
        img: "cabernet_sauvignon.png",
      },
      {
        name: "Muscat Rose",
        description: "150/750 ml",
        price: "30/150.00",
        img: "muscat_rose.png",
      },
      {
        name: "Chardonnay",
        description: "150/750 ml ml",
        price: "30/150.00",
        img: "chardonnay.png",
      },
      {
        name: "Orasul Subteran Viorica",
        description: "750 ml",
        price: 200.0,
        img: "orasul_subteran_viorica.png",
      },

      {
        name: "Orasul Subteran",
        description: "Cabernet /Rose  750 ml",
        price: 200.0,
        img: "orasul_subteran_rose.png",
      },
      {
        name: "Orasul Subteran",
        description: "Feteasca Neagra 750 ml",
        price: 200.0,
        img: "orasul_subteran_neagra.png",
      },
    ],
  },
  {
    sectionName: "VIN SPUMANT ",
    id: links.alchogolCoctails,
    products: [
      {
        name: "Lacrima Dulce",
        description: "750 ml",
        price: 170.0,
        img: "lacrima_dulce.png",
      },
      {
        name: "Alb Brut",
        description: "750 ml",
        price: 210.0,
        img: "alb_brut.png",
      },
      {
        name: "Crisseco",
        description: "150/ 750 ml",
        price: "35/170.00",
        img: "crisseco.png",
      },
      {
        name: "Asti Martini",
        description: "750 ml",
        price: 295.0,
        img: "asti_martini.png",
      },
    ],
  },
  {
    sectionName: "Bauturi alcoolici Tare",
    id: links.alchogolCoctails,
    products: [
      {
        name: "Jagermeister",
        description: "50 ml",
        price: 50.0,
        img: "jagermeister.png",
      },
      {
        name: "Bailey’s",
        description: "50 ml",
        price: 50.0,
        img: "bailey_s.png",
      },
      {
        name: "Martini Rosso",
        description: "50 ml",
        price: 35.0,
        img: "martini_rosso.png",
      },
      {
        name: "Martini Bianco",
        description: "50 ml",
        price: 35.0,
        img: "martini_bianco.png",
      },

      {
        name: "Jose Cuervo",
        description: "Reposado/ Silver 50 ml",
        price: 50.0,
        img: "jose_cuervo.png",
      },
      {
        name: "Tabacco",
        description: "Silver Premium 50 ml",
        price: 40.0,
        img: "tabacco.png",
      },
      {
        name: "Bacardi",
        description: "Oakheart 50 ml",
        price: 50.0,
        img: "bacardi.png",
      },
      {
        name: "Tuica de gutui,caise prune",
        description: "50 ml",
        price: 35.0,
        img: "tuica_de_gutui_caise_prune.png",
      },
      {
        name: "Nemiroff",
        description: "50 ml",
        price: 25.0,
        img: "nemiroff.png",
      },

      {
        name: "Finlandia",
        description: "50 ml",
        price: 35.0,
        img: "finlandia.png",
      },
      {
        name: "Bardar 5 ani",
        description: "50 ml",
        price: 30.0,
        img: "bardar_5_ani.png",
      },
      {
        name: "Bardar 7 ani",
        description: "50 ml",
        price: 45.0,
        img: "bardar_7_ani.png",
      },
      {
        name: "Calarasi 5 ani",
        description: "50 ml",
        price: 30.0,
        img: "calarasi_5_ani.png",
      },
      {
        name: "Calarasi 7 ani",
        description: "50 ml",
        price: 40.0,
        img: "calarasi_7_ani.png",
      },
      {
        name: "Balti 7 ani",
        description: "50 ml",
        price: 40.0,
        img: "balti_7_ani.png",
      },
      {
        name: "Speranta 9 ani",
        description: "50 ml",
        price: 50.0,
        img: "speranta_9_ani.png",
      },
      {
        name: "Bucuria 10 anii",
        description: "50 ml",
        price: 55.0,
        img: "bucuria_10_anii.png",
      },
      {
        name: "Jameson",
        description: "50 ml",
        price: 50.0,
        img: "jameson.png",
      },
      {
        name: "Jack Daniel’s",
        description: "50 ml",
        price: 50.0,
        img: "jack_daniel_s.png",
      },
    ],
  },
].map((el: any) => {
   el.products = el.products.map((i: any) => {
     i._id = String(Math.random() * 1000000000000000)
     return i
  })
  return el
});

console.log({translatedProducts})*/

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

export const translatedProducts: MenuSection[] = [
  {
    sectionName: "breakFast",
    id: "breakfast",
    products: [
      {
        img: "brinzoaice.png",
        price: 60,
        description: "cheeseBallsDescription",
        name: "cheeseBalls",
        _id: "229561202533612.56",
      },
      {
        img: "omleta_cu_salata.png",
        price: 50,
        description: "omeletteWithSaladDescription",
        name: "omeletteWithSalad",
        _id: "80104560489071",
      },
      {
        img: "ochiuri.png",
        price: 60,
        description: "eggsWithBaconDescription",
        name: "eggsWithBacon",
        _id: "740161883394610.1",
      },
      {
        img: "clatite.png",
        price: 60,
        description: "pancakesDescription",
        name: "pancakes",
        _id: "394767066104006.5",
      },
      {
        img: "terci_de_ovaz.png",
        price: 35,
        description: "oatmealDescription",
        name: "oatmeal",
        _id: "557539054338364.4",
      },
      {
        img: "croissant.png",
        price: 35,
        description: "croissantDescription",
        name: "croissant",
        _id: "980507513769255.1",
      },
    ],
  },
  {
    sectionName: "supe",
    id: "soup",
    products: [
      {
        img: "bors_rosu.png",
        price: 60,
        description: "descriptionBorsRosu",
        name: "borsRosu",
        _id: "851037595268294.9",
      },
      {
        img: "zeama_de_gaina.png",
        price: 55,
        description: "descriptionZeamaDeGaina",
        name: "zeamaDeGaina",
        _id: "162479922922740.94",
      },
      {
        img: "soleanca.png",
        price: 60,
        description: "descriptionSoleanca",
        name: "soleanca",
        _id: "518527708497297.8",
      },
      {
        img: "supa_de_spanac.png",
        price: 70,
        description: "descriptionSupaDeSpanac",
        name: "supaDeSpanac",
        _id: "973857642816386",
      },
      {
        img: "crem_supa.png",
        price: 55,
        description: "descriptionCremSupa",
        name: "cremSupa",
        _id: "744854198824342.4",
      },
    ],
  },
  {
    sectionName: "salads",
    id: "salads",
    products: [
      {
        img: "salata_shopski.png",
        price: 70,
        description: "descriptionSalataShopski",
        name: "salataShopski",
        _id: "762580461768692.9",
      },
      {
        img: "salata_caesar.png",
        price: 90,
        description: "descriptionSalataCaesar",
        name: "salataCaesar",
        _id: "157339020975500.34",
      },
      {
        img: "salata_de_varza.png",
        price: 40,
        description: "descriptionSalataDeVarza",
        name: "salataDeVarza",
        _id: "577361496344289",
      },
      {
        img: "salata_cu_varza_murata.png",
        price: 40,
        description: "descriptionSalataCuVarzaMurata",
        name: "salataCuVarzaMurata",
        _id: "30621038233186.848",
      },
      {
        img: "salata_exotic.png",
        price: 75,
        description: "descriptionSalataExotic",
        name: "salataExotic",
        _id: "257502077904599.56",
      },
      {
        img: "salata_mozzarella_perle.png",
        price: 75,
        description: "descriptionSalataMozzarellaPerle",
        name: "salataMozzarellaPerle",
        _id: "840517776076464.9",
      },
      {
        img: "salata_calda.png",
        price: 100,
        description: "descriptionSalataCalda",
        name: "salataCalda",
        _id: "571667668432446.1",
      },
      {
        img: "salata_din_legume.png",
        price: 75,
        description: "roasted_vegetables",
        name: "vegetable_salad",
        _id: "969509482093879.6",
      },
      {
        img: "salata_cu_ton.png",
        price: 95,
        description: "tuna",
        name: "tuna_salad",
        _id: "424831349716096.5",
      },
      {
        img: "mix_de_legume.png",
        price: 60,
        description: "vegetable_mix",
        name: "vegetable_mix",
        _id: "455851205763010.3",
      },
    ],
  },
  {
    sectionName: "goldSnacks",
    id: "gold_snacks",
    products: [
      {
        img: "hering_cu_cartofi_fierti.png",
        price: 70,
        description: "cuCartofiFierti100250g",
        name: "heringCuCartofiFierti",
        _id: "743149303259263.4",
      },
      {
        img: "gingerica.png",
        price: 70,
        description: "cuCartofiFierti10025050g",
        name: "gingerica",
        _id: "735963195381067",
      },
      {
        img: "platou_de_legume.png",
        price: 90,
        description: "proaspete450g",
        name: "platouDeLegume",
        _id: "298837839517629.1",
      },
      {
        img: "platou_de_cascavaluri.png",
        price: 120,
        description: "deLaFermaNoastra300g",
        name: "platouDeCascavaluri",
        _id: "312599154020838.6",
      },
      {
        img: "platou_de_slanina.png",
        price: 90,
        description: "380g",
        name: "platouDeSlanina",
        _id: "666288759048912.6",
      },
      {
        img: "platou_de_salamuri.png",
        price: 140,
        description: "250g",
        name: "platouDeSalamuri",
        _id: "600385872406170.8",
      },
      {
        img: "platou_de_muraturi.png",
        price: 60,
        description: "plate_of_pickles_description",
        name: "plate_of_pickles",
        _id: "675481302901626.2",
      },
      {
        img: "burratta_cu_salata.png",
        price: 99,
        description: "burrata_with_salad_description",
        name: "burrata_with_salad",
        _id: "814736668267841.1",
      },
      {
        img: "bruschete.png",
        price: 85,
        description: "bruschetta_with_salmon_description",
        name: "bruschetta_with_salmon",
        _id: "520813988567065.06",
      },
      {
        img: "bruschete_mozzarella.png",
        price: 65,
        description: "bruschetta_with_mozzarella_description",
        name: "bruschetta_with_mozzarella",
        _id: "133424126597717.4",
      },
      {
        img: "bruschete_rosbif.png",
        price: 70,
        description: "bruschetta_with_roast_beef_description",
        name: "bruschetta_with_roast_beef",
        _id: "975398423560508.2",
      },
    ],
  },
  {
    sectionName: "hostSnack",
    id: "host_snack",
    products: [
      {
        img: "cascaval_buffalo.png",
        price: 140,
        description: "teleggioPane",
        name: "cascavalBuffalo",
        _id: "155345243962141.44",
      },
      {
        img: "aripioare_de_pui.png",
        price: 85,
        description: "cuCartofiPai",
        name: "aripioareDePui",
        _id: "223550342346015.44",
      },
      {
        img: "nughete_de_pui.png",
        price: 85,
        description: "cuCartofiPai",
        name: "nugheteDePui",
        _id: "184101202304107.1",
      },
      {
        img: "placinte_in_asortiment.png",
        price: 40,
        description: "twoHundredGrams",
        name: "placinteInAsortiment",
        _id: "891712105496332.6",
      },
    ],
  },
  {
    sectionName: "beerSnack",
    id: "beer_snack",
    products: [
      {
        img: "nacios.png",
        price: 40,
        description: "50g/50g",
        name: "nacios",
        _id: "893643606160607.6",
      },
      {
        img: "crutoane_cu_usturoi.png",
        price: 40,
        description: "250/50 g",
        name: "crutoane_cu_usturoi",
        _id: "674777337851349.8",
      },
      {
        img: "migdale_prajite.png",
        price: 60,
        description: "100 g",
        name: "migdale_prajite",
        _id: "473919561047318.7",
      },
      {
        img: "pietrosel.png",
        price: 65,
        description: "130/50 g",
        name: "pietrosel",
        _id: "235150038250425.8",
      },
      {
        img: "ineluse.png",
        price: 60,
        description: "лук+соус тартар 130/50 g",
        name: "ineluse_ceapa",
        _id: "343591104811125.3",
      },
      {
        img: "ineluse_calmar.png",
        price: 70,
        description: "кальмар+соус тартар 130/50 g",
        name: "ineluse_calmar",
        _id: "608113946195268",
      },
      {
        img: "basturma_de_vita.png",
        price: 70,
        description: "50 g",
        name: "basturma_de_vita",
        _id: "353259330326567.6",
      },
    ],
  },
  {
    sectionName: "mainDishes",
    id: "main_dishes",
    products: [
      {
        img: "ciolan_de_proc.png",
        price: 199,
        description: "pork_shank_description",
        name: "pork_shank",
        _id: "236192657723127.38",
      },
      {
        img: "guleas_unguresc.png",
        price: 80,
        description: "hungarian_goulash_description",
        name: "hungarian_goulash",
        _id: "878647555987374.6",
      },
      {
        img: "file_de_somon.png",
        price: 170,
        description: "grilled_salmon_description",
        name: "grilled_salmon",
        _id: "275067567817060.22",
      },
      {
        img: "tocanita_de_iepuras.png",
        price: 95,
        description: "rabbit_stew_description",
        name: "rabbit_stew",
        _id: "939420363601667.1",
      },
      {
        img: "paste_cu_carne.png",
        price: 90,
        description: "pasta_with_beef_description",
        name: "pasta_with_beef",
        _id: "665725092074295.2",
      },
      {
        img: "paste_cu_somon.png",
        price: 110,
        description: "pasta_with_salmon_description",
        name: "pasta_with_salmon",
        _id: "962326289790912.1",
      },
      {
        img: "piept_de_pui.png",
        price: 75,
        description: "chickenBreastDescription",
        name: "chickenBreast",
        _id: "345332684119711.94",
      },
      {
        img: "frigarui_de_pui.png",
        price: 95,
        description: "chickenSkewersDescription",
        name: "chickenSkewers",
        _id: "366473268146298.7",
      },
      {
        img: "frigarui_de_porc.png",
        price: 105,
        description: "porkSkewersDescription",
        name: "porkSkewers",
        _id: "530516232214886",
      },
      {
        img: "frigarui_de_vita.png",
        price: 155,
        description: "beefSkewersDescription",
        name: "beefSkewers",
        _id: "507906697101924.94",
      },
      {
        img: "mici_de_casa.png",
        price: 90,
        description: "homemadeMiciDescription",
        name: "homemadeMici",
        _id: "263291635154000.22",
      },
      {
        img: "steak.png",
        price: 155,
        description: "beefSteakDescription",
        name: "beefSteak",
        _id: "60750563782750.45",
      },
      {
        img: "carne_de_bivol_inabusit_in_vin.png",
        price: 140,
        description: "bisonStewInWineDescription",
        name: "bisonStewInWine",
        _id: "357016054508954.1",
      },
      {
        img: "snitel.png",
        price: 75,
        description: "chickenSchnitzelDescription",
        name: "chickenSchnitzel",
        _id: "886816416540696.2",
      },
      {
        img: "burger_de_pui.png",
        price: 90,
        description: "chickenBurgerDescription",
        name: "chickenBurger",
        _id: "766501239285589.2",
      },
      {
        img: "burger_de_vita.png",
        price: 90,
        description: "beefBurgerDescription",
        name: "beefBurger",
        _id: "173015515546202.22",
      },
      {
        img: "carnita_de_curcan.png",
        price: 155,
        description: "turkeyMeatWithPotatoesDescription",
        name: "turkeyMeatWithPotatoes",
        _id: "833431705929285.4",
      },
      {
        img: "costita_de_vitel.png",
        price: 35,
        description: "beefRibsDescription",
        name: "beefRibs",
        _id: "504424320816720.94",
      },
      {
        img: "platou_de_carne_gril.png",
        price: 600,
        description: "grilledMeatPlatterDescription",
        name: "grilledMeatPlatter",
        _id: "789241812945051.6",
      },
    ],
  },
  {
    sectionName: "gaskets",
    id: "gaskets",
    products: [
      {
        img: "cartofi_copti.png",
        price: 40,
        description: "roastedPotatoesDescription",
        name: "roastedPotatoes",
        _id: "918819554862631.5",
      },
      {
        img: "cartofi_pai_ketchup.png",
        price: 35,
        description: "friesAndKetchupDescription",
        name: "friesAndKetchup",
        _id: "316908345756585.75",
      },
      {
        img: "piure_de_cartofi.png",
        price: 30,
        description: "mashedPotatoesDescription",
        name: "mashedPotatoes",
        _id: "464698693492831",
      },
      {
        img: "cartofi_prajiti_ca_acasa.png",
        price: 50,
        description: "homeStyleFriedPotatoesDescription",
        name: "homeStyleFriedPotatoes",
        _id: "17237803405756.646",
      },
      {
        img: "mamaliga.png",
        price: 50,
        description: "polentaDescription",
        name: "polenta",
        _id: "360312434375573.56",
      },
      {
        img: "orez_cu_legume.png",
        price: 35,
        description: "riceWithVegetablesDescription",
        name: "riceWithVegetables",
        _id: "143556121951659",
      },
      {
        img: "piure_de_brocoli.png",
        price: 45,
        description: "broccoliPureeDescription",
        name: "broccoliPuree",
        _id: "538186942684341",
      },
      {
        img: "pastari.png",
        price: 40,
        description: "pastaDescription",
        name: "pasta",
        _id: "371458744094370.9",
      },
      {
        img: "paste_cu_unt.png",
        price: 30,
        description: "pastaWithButterDescription",
        name: "pastaWithButter",
        _id: "29451930558826.777",
      },
      {
        img: "fasole_cu_legume.png",
        price: 50,
        description: "beanVegetableStewDescription",
        name: "beanVegetableStew",
        _id: "923768311622051",
      },
      {
        img: "varza_calita.png",
        price: 40,
        description: "braisedCabbageDescription",
        name: "braisedCabbage",
        _id: "100369156506632.58",
      },
    ],
  },
  {
    sectionName: "pizza",
    id: "pizza",
    products: [
      {
        img: "margherita.png",
        price: 85,
        description: "margheritaDescription",
        name: "margherita",
        _id: "426634150716610.6",
      },
      {
        img: "diavola.png",
        price: 95,
        description: "diavolaDescription",
        name: "diavola",
        _id: "847964189476241.4",
      },
      {
        img: "tonno.png",
        price: 115,
        description: "tonnoDescription",
        name: "tonno",
        _id: "826734581449111.2",
      },
      {
        img: "capriciossa.png",
        price: 110,
        description: "capriciossaDescription",
        name: "capriciossa",
        _id: "921743757544951.2",
      },
      {
        img: "pollo.png",
        price: 110,
        description: "polloDescription",
        name: "pollo",
        _id: "983982938472650.4",
      },
      {
        img: "prosciutto_e_funghi.png",
        price: 98,
        description: "prosciuttoEFunghiDescription",
        name: "prosciuttoEFunghi",
        _id: "7253192435255.795",
      },
      {
        img: "quattro_formaggi.png",
        price: 115,
        description: "quattroFormaggiDescription",
        name: "quattroFormaggi",
        _id: "861383138861546.9",
      },
      {
        img: "ferma_cu_origini.png",
        price: 110,
        description: "fermaCuOriginiDescription",
        name: "fermaCuOrigini",
        _id: "918687059290053.6",
      },
      {
        img: "carbonara.png",
        price: 98,
        description: "carbonaraDescription",
        name: "carbonara",
        _id: "554958815789260.2",
      },
      {
        img: "leggera.png",
        price: 115,
        description: "leggeraDescription",
        name: "leggera",
        _id: "733899082487622.8",
      },
      {
        img: "pizza_praga.png",
        price: 105,
        description: "pizzaPragaDescription",
        name: "pizzaPraga",
        _id: "257821603119438.12",
      },
      {
        img: "vegetariana.png",
        price: 85,
        description: "vegetarianaDescription",
        name: "vegetariana",
        _id: "354333710705537.75",
      },
      {
        img: "focaccia.png",
        price: 25,
        description: "focacciaDescription",
        name: "focaccia",
        _id: "453787544718755.25",
      },
    ],
  },
  {
    sectionName: "deserts",
    id: "desserts",
    products: [
      {
        name: "napoleon",
        description: "napoleonDescription",
        price: 65,
        img: "napoleon.png",
        _id: "526366679554537.6",
      },
      {
        name: "medovic",
        description: "medovicDescription",
        price: 65,
        img: "medovic.png",
        _id: "267318585466746.7",
      },
      {
        name: "gusmaLuiGuguta",
        description: "gusmaLuiGugutaDescription",
        price: 65,
        img: "cusma_lui_guguta.png",
        _id: "37692902995825.4",
      },
      {
        name: "prajitura",
        description: "prajituraDescription",
        price: 55,
        img: "prajitura.png",
        _id: "602463717914341.1",
      },
      {
        name: "pruneCuNuca",
        description: "pruneCuNucaDescription",
        price: 65,
        img: "prune_cu_nuca.png",
        _id: "546239538813461.9",
      },
      {
        name: "fondant",
        description: "fondantDescription",
        price: 70,
        img: "fondant.png",
        _id: "898403541417481.1",
      },
      {
        name: "inghetataAdevarata",
        description: "inghetataAdevarataDescription",
        price: 15,
        img: "inghetata_adevarata.png",
        _id: "764571317552600.1",
      },
    ],
  },
  {
    sectionName: "non_alchogol",
    id: "non_alchogol",
    products: [
      {
        name: "Guizza",
        description: "(apa plata/gazoasa) 500ml ",
        price: 15,
        img: "guizza.png",
        _id: "246577283178955.56",
      },
      {
        name: "Plose",
        description: "(apa plata/gazata) 250/750ml",
        price: "30/60.00",
        img: "plose.png",
        _id: "431672285281011.9",
      },
      {
        name: "Coca Cola,Sprite,Fanta",
        description: "300/500 ml",
        price: "20/25.00",
        img: "coca_cola_sprite_fanta.png",
        _id: "40867984173378.336",
      },
      {
        name: "Ceai rece",
        description: "500 ml",
        price: 25,
        img: "ceai_rece.png",
        _id: "211448817707932.22",
      },
      {
        name: "Suc Jaffa",
        description: "250/950 ml",
        price: "20/65.00",
        img: "suc_jaffa.png",
        _id: "679195569411428.8",
      },
      {
        name: "Suc Fresh",
        description: "orange/grapefruit 250 ml",
        price: 45,
        img: "suc_fresh.png",
        _id: "210735024244796.06",
      },
      {
        name: "Borjomi",
        description: "500 ml",
        price: 45,
        img: "borjomi.png",
        _id: "404684262322850.5",
      },
    ],
  },
  {
    sectionName: "milk_shakes_lemonads",
    id: "milk_shakes",
    products: [
      {
        name: "Milkshake",
        description: "350 ml  ",
        price: 45,
        img: "milkshake.png",
        _id: "696020123466154.4",
      },
      {
        name: "Limonada clasica",
        description: "350 ml/1L",
        price: "40/70.00",
        img: "limonada_clasica.png",
        _id: "193146831127673.06",
      },
      {
        name: "Limonada de capsuna",
        description: "350 ml/1L",
        price: "40/70.00",
        img: "limonada_de_capsuna.png",
        _id: "630567412296131.2",
      },
      {
        name: "Ceai rece de casa",
        description: "350 ml/1L",
        price: "35/65.00",
        img: "ceai_rece_de_casa.png",
        _id: "372841331807410.6",
      },
      {
        name: "Pina Colada",
        description: "250/950 ml",
        price: "45/65.00",
        img: "pina_colada.png",
        _id: "658560666833927.5",
      },
      {
        name: "Frappe",
        description: "350 ml",
        price: 35,
        img: "frappe.png",
        _id: "692003147692449.5",
      },
    ],
  },
  {
    sectionName: "hot_drinks",
    id: "coffee",
    products: [
      {
        name: "Espresso",
        description: "30 ml ",
        price: 20,
        img: "espresso.png",
        _id: "874102765724142.8",
      },
      {
        name: "Americano",
        description: "100 ml",
        price: 20,
        img: "americano.png",
        _id: "289864113673320.1",
      },
      {
        name: "Cappuccino",
        description: "250ml",
        price: 30,
        img: "cappuccino.png",
        _id: "867949345298343.6",
      },
      {
        name: "Latte",
        description: "300 ml",
        price: 30,
        img: "latte.png",
        _id: "901926775008788.1",
      },
      {
        name: "Mocaccino",
        description: "",
        price: 30,
        img: "mocaccino.png",
        _id: "720210364040204",
      },
      {
        name: "Cacao",
        description: "250 ml",
        price: 30,
        img: "cacao.png",
        _id: "222887694534936.5",
      },
      {
        name: "Ceai de catina",
        description: "ghimbir si portocala ,450 ml",
        price: 50,
        img: "ceai_de_catina.png",
        _id: "136519180607665.66",
      },
      {
        name: "Ceai de Plante",
        description: "450 ml",
        price: 45,
        img: "ceai_de_plante.png",
        _id: "412494070158303.44",
      },
    ],
  },
  {
    sectionName: "alchogol_coctails",
    id: "alchogol_coctails",
    products: [
      {
        name: "Aperol Spritz",
        description: "350  ml",
        price: 65,
        img: "aperol_spritz.png",
        _id: "234443289783194.84",
      },
      {
        name: "Gin tonic",
        description: "350 ml",
        price: 55,
        img: "gin_tonic.png",
        _id: "246003853137253.94",
      },
      {
        name: "Cuba Libre",
        description: "350 ml",
        price: 60,
        img: "cuba_libre.png",
        _id: "121899839431740.1",
      },
      {
        name: "Green Mexican",
        description: "60 ml",
        price: 55,
        img: "green_mexican.png",
        _id: "716718846699964.6",
      },
      {
        name: "Long Island Ice Tea",
        description: "",
        price: 90,
        img: "long_island_ice_tea.png",
        _id: "566385192072482.5",
      },
      {
        name: "Glintwein",
        description: "55 ml",
        price: 30,
        img: "glintwein.png",
        _id: "273680277136934.44",
      },
    ],
  },
  {
    sectionName: "beer",
    id: "beer",
    products: [
      {
        name: "Pale Ale",
        description: "350  ml",
        price: 45,
        img: "pale_ale.png",
        _id: "52381578865165.48",
      },
      {
        name: "Efes pilsner",
        description: "f/a ,c/a 500 ml",
        price: 40,
        img: "efes_pilsner.png",
        _id: "338409576525762.3",
      },
      {
        name: "Kozel",
        description: "bruna / blonda 500 ml",
        price: 40,
        img: "kozel.png",
        _id: "309657155168563.75",
      },
      {
        name: "Corona Extra",
        description: "355 ml",
        price: 55,
        img: "corona_extra.png",
        _id: "307655579429608.75",
      },
      {
        name: "Hoegaarden",
        description: "330 ml",
        price: 50,
        img: "hoegaarden.png",
        _id: "490193474130136",
      },
      {
        name: "Franziskaner",
        description: "Weissbier 500 ml",
        price: 60,
        img: "franziskaner.png",
        _id: "119507685890885.34",
      },
      {
        name: "Kronenbourg",
        description: "460 ml",
        price: 45,
        img: "kronenbourg.png",
        _id: "473842907448259.5",
      },
      {
        name: "Kozel blonda  HALBA",
        description: "500 ml",
        price: 35,
        img: "kozel_blonda_halba.png",
        _id: "272540617239202.66",
      },
    ],
  },
  {
    sectionName: "wines",
    id: "wines",
    products: [
      {
        name: "Sauvignon Blanc Aligote",
        description: "(alb, sec) 0,75 ml",
        price: 210,
        img: "sauvignon_blanc_aligote.png",
        _id: "387323550469774.94",
      },
      {
        name: "Merlot Rara Neagra",
        description: "(rosu, sec) 0,75 ml",
        price: 210,
        img: "merlot_rara_neagra.png",
        _id: "457926373665744.75",
      },
      {
        name: "Merlot Feteasca Nearga",
        description: "(roz, sec)0,75 ml",
        price: 210,
        img: "merlot_feteasca_nearga.png",
        _id: "767979532538396.2",
      },
      {
        name: "Aurore Feteasca Neagra",
        description: "0,75 ml",
        price: 350,
        img: "aurore_feteasca_neagra.png",
        _id: "23393902550285.95",
      },
      {
        name: "Aurore Pinot Grigio",
        description: "0,75 ml",
        price: 350,
        img: "aurore_pinot_grigio.png",
        _id: "994643628013039.6",
      },
      {
        name: "Aurore Rara Neagra",
        description: "0,75 ml",
        price: 350,
        img: "aurore_rara_neagra.png",
        _id: "709165395568352",
      },
      {
        name: "Uneori Cabernet Sauvignon",
        description: "750 ml",
        price: 200,
        img: "uneori_cabernet_sauvignon.png",
        _id: "798939996977834.6",
      },
      {
        name: "Uneori Riesling",
        description: "750 ml",
        price: 200,
        img: "uneori_riesling.png",
        _id: "574978721049201.1",
      },
      {
        name: "Uneori Muscat Rose",
        description: "750 ml",
        price: 240,
        img: "uneori_muscat_rose.png",
        _id: "211195014126831.94",
      },
      {
        name: "Cabernet Sauvignon",
        description: "150/750 ml",
        price: "30/150.00",
        img: "cabernet_sauvignon.png",
        _id: "480126935270826.75",
      },
      {
        name: "Muscat Rose",
        description: "150/750 ml",
        price: "30/150.00",
        img: "muscat_rose.png",
        _id: "945247636613469.5",
      },
      {
        name: "Chardonnay",
        description: "150/750 ml ml",
        price: "30/150.00",
        img: "chardonnay.png",
        _id: "683924119217242.4",
      },
      {
        name: "Orasul Subteran Viorica",
        description: "750 ml",
        price: 200,
        img: "orasul_subteran_viorica.png",
        _id: "716378875320667.8",
      },
      {
        name: "Orasul Subteran",
        description: "Cabernet /Rose  750 ml",
        price: 200,
        img: "orasul_subteran_rose.png",
        _id: "615234055032006.4",
      },
      {
        name: "Orasul Subteran",
        description: "Feteasca Neagra 750 ml",
        price: 200,
        img: "orasul_subteran_neagra.png",
        _id: "323555892353936.56",
      },
    ],
  },
  {
    sectionName: "champagne",
    id: "champagne",
    products: [
      {
        name: "Lacrima Dulce",
        description: "750 ml",
        price: 170,
        img: "lacrima_dulce.png",
        _id: "906919286312555.8",
      },
      {
        name: "Alb Brut",
        description: "750 ml",
        price: 210,
        img: "alb_brut.png",
        _id: "94744733775335.88",
      },
      {
        name: "Crisseco",
        description: "150/ 750 ml",
        price: "35/170.00",
        img: "crisseco.png",
        _id: "560012882082486.8",
      },
      {
        name: "Asti Martini",
        description: "750 ml",
        price: 295,
        img: "asti_martini.png",
        _id: "903175763534212.1",
      },
    ],
  },
  {
    sectionName: "strong_alchogol",
    id: "strong_alchogol",
    products: [
      {
        name: "Jagermeister",
        description: "50 ml",
        price: 50,
        img: "jagermeister.png",
        _id: "993511826012895.1",
      },
      {
        name: "Bailey’s",
        description: "50 ml",
        price: 50,
        img: "bailey_s.png",
        _id: "651605533444667.1",
      },
      {
        name: "Martini Rosso",
        description: "50 ml",
        price: 35,
        img: "martini_rosso.png",
        _id: "915706602935179.9",
      },
      {
        name: "Martini Bianco",
        description: "50 ml",
        price: 35,
        img: "martini_bianco.png",
        _id: "627342702827510.5",
      },
      {
        name: "Jose Cuervo",
        description: "Reposado/ Silver 50 ml",
        price: 50,
        img: "jose_cuervo.png",
        _id: "474537492524864.9",
      },
      {
        name: "Tabacco",
        description: "Silver Premium 50 ml",
        price: 40,
        img: "tabacco.png",
        _id: "863680112617806.8",
      },
      {
        name: "Bacardi",
        description: "Oakheart 50 ml",
        price: 50,
        img: "bacardi.png",
        _id: "364885242416672.3",
      },
      {
        name: "Tuica de gutui,caise prune",
        description: "50 ml",
        price: 35,
        img: "tuica_de_gutui_caise_prune.png",
        _id: "332024275033712.8",
      },
      {
        name: "Nemiroff",
        description: "50 ml",
        price: 25,
        img: "nemiroff.png",
        _id: "254648372697740.66",
      },
      {
        name: "Finlandia",
        description: "50 ml",
        price: 35,
        img: "finlandia.png",
        _id: "397299591305388.5",
      },
      {
        name: "Bardar 5 ani",
        description: "50 ml",
        price: 30,
        img: "bardar_5_ani.png",
        _id: "13961612484759.244",
      },
      {
        name: "Bardar 7 ani",
        description: "50 ml",
        price: 45,
        img: "bardar_7_ani.png",
        _id: "136457983395431.58",
      },
      {
        name: "Calarasi 5 ani",
        description: "50 ml",
        price: 30,
        img: "calarasi_5_ani.png",
        _id: "601878736362646.5",
      },
      {
        name: "Calarasi 7 ani",
        description: "50 ml",
        price: 40,
        img: "calarasi_7_ani.png",
        _id: "189306521406631.06",
      },
      {
        name: "Balti 7 ani",
        description: "50 ml",
        price: 40,
        img: "balti_7_ani.png",
        _id: "902342540482034.9",
      },
      {
        name: "Speranta 9 ani",
        description: "50 ml",
        price: 50,
        img: "speranta_9_ani.png",
        _id: "8333241266421.21",
      },
      {
        name: "Bucuria 10 anii",
        description: "50 ml",
        price: 55,
        img: "bucuria_10_anii.png",
        _id: "327773321218859.06",
      },
      {
        name: "Jameson",
        description: "50 ml",
        price: 50,
        img: "jameson.png",
        _id: "596542623684737.4",
      },
      {
        name: "Jack Daniel’s",
        description: "50 ml",
        price: 50,
        img: "jack_daniel_s.png",
        _id: "373660492613479.3",
      },
    ],
  },
];


export const productCatagories = [
  {
      "label": "breakFast",
      "value": "breakFast"
  },
  {
      "label": "supe",
      "value": "supe"
  },
  {
      "label": "salads",
      "value": "salads"
  },
  {
      "label": "goldSnacks",
      "value": "goldSnacks"
  },
  {
      "label": "hostSnack",
      "value": "hostSnack"
  },
  {
      "label": "beerSnack",
      "value": "beerSnack"
  },
  {
      "label": "mainDishes",
      "value": "mainDishes"
  },
  {
      "label": "gaskets",
      "value": "gaskets"
  },
  {
      "label": "pizza",
      "value": "pizza"
  },
  {
      "label": "deserts",
      "value": "deserts"
  },
  {
      "label": "non_alchogol",
      "value": "non_alchogol"
  },
  {
      "label": "milk_shakes_lemonads",
      "value": "milk_shakes_lemonads"
  },
  {
      "label": "hot_drinks",
      "value": "hot_drinks"
  },
  {
      "label": "alchogol_coctails",
      "value": "alchogol_coctails"
  },
  {
      "label": "beer",
      "value": "beer"
  },
  {
      "label": "wines",
      "value": "wines"
  },
  {
      "label": "champagne",
      "value": "champagne"
  },
  {
      "label": "strong_alchogol",
      "value": "strong_alchogol"
  }
]



const migration = [
  {
    "name_ru": "Сырные шарики",
    "name_ro": "Brinzoaice",
    "description_ru": "Сырные шарики",
    "description_ro": "200-50g",
    "image": "brinzoaice.png",
    "price": 60,
    "productType": "breakFast"
  },
  {
    "name_ru": "Омлет с салатом",
    "name_ro": "Omleta cu salata",
    "description_ru": "Омлет с салатом",
    "description_ro": "200g",
    "image": "omleta_cu_salata.png",
    "price": 50,
    "productType": "breakFast"
  },
  {
    "name_ru": "Яйца с беконом",
    "name_ro": "Ochiuri",
    "description_ru": "Яйца с беконом",
    "description_ro": "cu becon 2buc/50g",
    "image": "ochiuri.png",
    "price": 60,
    "productType": "breakFast"
  },
  {
    "name_ru": "Блины",
    "name_ro": "Clatite",
    "description_ru": "Блины",
    "description_ro": "cu gem 250g",
    "image": "clatite.png",
    "price": 60,
    "productType": "breakFast"
  },
  {
    "name_ru": "Овсянка",
    "name_ro": "Terci de ovaz",
    "description_ru": "Овсянка",
    "description_ro": "pe lapte,apa ,cu gem 300g",
    "image": "terci_de_ovaz.png",
    "price": 35,
    "productType": "breakFast"
  },
  {
    "name_ru": "Круассан",
    "name_ro": "Croissant",
    "description_ru": "Круассан",
    "description_ro": "in sortiment 1 buc",
    "image": "croissant.png",
    "price": 35,
    "productType": "breakFast"
  },
  {
    "name_ru": "Красный борщ",
    "name_ro": "Bors rosu",
    "description_ru": "Красный борщ",
    "description_ro": "cu carne de vita 350/50/50 g",
    "image": "bors_rosu.png",
    "price": 60,
    "productType": "supe"
  },
  {
    "name_ru": "Куриный бульон",
    "name_ro": "Zeama de gaina",
    "description_ru": "Куриный бульон",
    "description_ro": "de casa 350/50 g",
    "image": "zeama_de_gaina.png",
    "price": 55,
    "productType": "supe"
  },
  {
    "name_ru": "Овощной суп",
    "name_ro": "Soleanca",
    "description_ru": "Овощной суп",
    "description_ro": "350/50 g",
    "image": "soleanca.png",
    "price": 60,
    "productType": "supe"
  },
  {
    "name_ru": "Шпинатный суп",
    "name_ro": "Supa de spanac",
    "description_ru": "Шпинатный суп",
    "description_ro": "250/30 g",
    "image": "supa_de_spanac.png",
    "price": 70,
    "productType": "supe"
  },
  {
    "name_ru": "Сливочный суп",
    "name_ro": "Crem supa",
    "description_ru": "Сливочный суп",
    "description_ro": "de cascaval 380 /30g",
    "image": "crem_supa.png",
    "price": 55,
    "productType": "supe"
  },
  {
    "name_ru": "Салат Шопски",
    "name_ro": "Salata Shopski",
    "description_ru": "Салат Шопски",
    "description_ro": "200 g",
    "image": "salata_shopski.png",
    "price": 70,
    "productType": "salads"
  },
  {
    "name_ru": "Салат Цезарь",
    "name_ro": "Salata Caesar ",
    "description_ru": "Салат Цезарь",
    "description_ro": "cu carne de pui 320 g",
    "image": "salata_caesar.png",
    "price": 90,
    "productType": "salads"
  },
  {
    "name_ru": "Салат из капусты",
    "name_ro": "Salata de varza ",
    "description_ru": "Салат из капусты",
    "description_ro": "200-50g",
    "image": "salata_de_varza.png",
    "price": 40,
    "productType": "salads"
  },
  {
    "name_ru": "Салат со сладкой капустой",
    "name_ro": "Salata cu varza murata",
    "description_ru": "Салат со сладкой капустой",
    "description_ro": "200 g",
    "image": "salata_cu_varza_murata.png",
    "price": 40,
    "productType": "salads"
  },
  {
    "name_ru": "Салат Экзотика",
    "name_ro": "Salata Exotic",
    "description_ru": "Салат Экзотика",
    "description_ro": "cu pui si cascaval 250g",
    "image": "salata_exotic.png",
    "price": 75,
    "productType": "salads"
  },
  {
    "name_ru": "Салат с моцареллой и перлами",
    "name_ro": "Salata Mozzarella Perle",
    "description_ru": "Салат с моцареллой и перлами",
    "description_ro": "250 g",
    "image": "salata_mozzarella_perle.png",
    "price": 75,
    "productType": "salads"
  },
  {
    "name_ru": "Горячий салат",
    "name_ro": "Salata calda",
    "description_ru": "Горячий салат",
    "description_ro": "cu carne de vita 320g",
    "image": "salata_calda.png",
    "price": 100,
    "productType": "salads"
  },
  {
    "name_ru": "Салат из овощей",
    "name_ro": "Salata din legume",
    "description_ru": "Салат из овощей",
    "description_ro": "legume coapte",
    "image": "salata_din_legume.png",
    "price": 75,
    "productType": "salads"
  },
  {
    "name_ru": "Салат с тунцом",
    "name_ro": "Salata cu ton",
    "description_ru": "Салат с тунцом",
    "description_ro": "ton",
    "image": "salata_cu_ton.png",
    "price": 95,
    "productType": "salads"
  },
  {
    "name_ru": "Смесь овощей",
    "name_ro": "Mix de legume",
    "description_ru": "Смесь овощей",
    "description_ro": "Mix de legume",
    "image": "mix_de_legume.png",
    "price": 60,
    "productType": "salads"
  },
  {
    "name_ru": "Сельдь с вареным картофелем",
    "name_ro": "Hering cu cartofi fierti",
    "description_ru": "Сельдь с вареным картофелем",
    "description_ro": "cu cartofi fierti 100/250 g",
    "image": "hering_cu_cartofi_fierti.png",
    "price": 70,
    "productType": "goldSnacks"
  },
  {
    "name_ru": "Жинжерица",
    "name_ro": "Gingerica",
    "description_ru": "Жинжерица",
    "description_ro": "cu cartofi fierti 100/250/50 g",
    "image": "gingerica.png",
    "price": 70,
    "productType": "goldSnacks"
  },
  {
    "name_ru": "Овощная тарелка",
    "name_ro": "Platou de legume",
    "description_ru": "Овощная тарелка",
    "description_ro": "proaspete 450 g",
    "image": "platou_de_legume.png",
    "price": 90,
    "productType": "goldSnacks"
  },
  {
    "name_ru": "Тарелка сыров",
    "name_ro": "Platou de cascavaluri",
    "description_ru": "Тарелка сыров",
    "description_ro": "de la “Ferma Noastra” 300 g",
    "image": "platou_de_cascavaluri.png",
    "price": 120,
    "productType": "goldSnacks"
  },
  {
    "name_ru": "Тарелка со свиной саломой",
    "name_ro": "Platou de Slanina",
    "description_ru": "Тарелка со свиной саломой",
    "description_ro": "380 g",
    "image": "platou_de_slanina.png",
    "price": 90,
    "productType": "goldSnacks"
  },
  {
    "name_ru": "Тарелка салями",
    "name_ro": "Platou de salamuri",
    "description_ru": "Тарелка салями",
    "description_ro": "250 g",
    "image": "platou_de_salamuri.png",
    "price": 140,
    "productType": "goldSnacks"
  },
  {
    "name_ru": "Плато из маринадных овощей",
    "name_ro": "Platou de muraturi",
    "description_ru": "Плато из маринадных овощей",
    "description_ro": "450g de muraturi",
    "image": "platou_de_muraturi.png",
    "price": 60,
    "productType": "goldSnacks"
  },
  {
    "name_ru": "Буррата с салатом",
    "name_ro": "Burratta cu salata",
    "description_ru": "Буррата с салатом",
    "description_ro": "Burrata cu roșii cherysi și busuioc, 250g",
    "image": "burratta_cu_salata.png",
    "price": 99,
    "productType": "goldSnacks"
  },
  {
    "name_ru": "Брускетта с лососем",
    "name_ro": "Bruschete",
    "description_ru": "Брускетта с лососем",
    "description_ro": "Bruschete cu somon, 2 bucăți",
    "image": "bruschete.png",
    "price": 85,
    "productType": "goldSnacks"
  },
  {
    "name_ru": "Брускетта с моцареллой",
    "name_ro": "Bruschete",
    "description_ru": "Брускетта с моцареллой",
    "description_ro": "Bruschete cu mozzarella, 250g",
    "image": "bruschete_mozzarella.png",
    "price": 65,
    "productType": "goldSnacks"
  },
  {
    "name_ru": "Брускетта с говяжьим ростбифом",
    "name_ro": "Bruschete",
    "description_ru": "Брускетта с говяжьим ростбифом",
    "description_ro": "Bruschete cu roșbif, 250g",
    "image": "bruschete_rosbif.png",
    "price": 70,
    "productType": "goldSnacks"
  },
  {
    "name_ru": "Буффало сыр",
    "name_ro": "Cascaval Buffalo",
    "description_ru": "Буффало сыр",
    "description_ro": "Teleggio pane 125/50 g",
    "image": "cascaval_buffalo.png",
    "price": 140,
    "productType": "hostSnack"
  },
  {
    "name_ru": "Куриные крылышки",
    "name_ro": "Aripioare de pui",
    "description_ru": "Куриные крылышки",
    "description_ro": "cu cartofi pai 150/130/50 g",
    "image": "aripioare_de_pui.png",
    "price": 85,
    "productType": "hostSnack"
  },
  {
    "name_ru": "Куриные наггетсы",
    "name_ro": "Nughete de pui",
    "description_ru": "Куриные наггетсы",
    "description_ro": "cu cartofi pai 150/130/50 g",
    "image": "nughete_de_pui.png",
    "price": 85,
    "productType": "hostSnack"
  },
  {
    "name_ru": "Пироги ассортимент",
    "name_ro": "Placinte in asortiment",
    "description_ru": "Пироги ассортимент",
    "description_ro": "200 g",
    "image": "placinte_in_asortiment.png",
    "price": 40,
    "productType": "hostSnack"
  },
  {
    "name_ru": "Нацос",
    "name_ro": "Nacios",
    "description_ru": "Нацос",
    "description_ro": "50g/50g",
    "image": "nacios.png",
    "price": 40,
    "productType": "beerSnack"
  },
  {
    "name_ru": "Хрустящие гренки с чесноком",
    "name_ro": "Crutoane cu usturoi",
    "description_ru": "Хрустящие гренки с чесноком",
    "description_ro": "250/50 g",
    "image": "crutoane_cu_usturoi.png",
    "price": 40,
    "productType": "beerSnack"
  },
  {
    "name_ru": "Жареные миндаль",
    "name_ro": "Migdale prajite",
    "description_ru": "Жареные миндаль",
    "description_ro": "100 g",
    "image": "migdale_prajite.png",
    "price": 60,
    "productType": "beerSnack"
  },
  {
    "name_ru": "Крошка хлеба",
    "name_ro": "Pietrosel",
    "description_ru": "Крошка хлеба",
    "description_ro": "130/50 g",
    "image": "pietrosel.png",
    "price": 65,
    "productType": "beerSnack"
  },
  {
    "name_ru": "Кольца лука",
    "name_ro": "Ineluse",
    "description_ru": "Кольца лука",
    "description_ro": "ceapa+sos tartar 130/50 g",
    "image": "ineluse.png",
    "price": 60,
    "productType": "beerSnack"
  },
  {
    "name_ru": "Кольца кальмара",
    "name_ro": "Ineluse",
    "description_ru": "Кольца кальмара",
    "description_ro": "de calmar+sos tartar 130/50 g",
    "image": "ineluse_calmar.png",
    "price": 70,
    "productType": "beerSnack"
  },
  {
    "name_ru": "Бастурма из говядины",
    "name_ro": "Basturma de vita",
    "description_ru": "Бастурма из говядины",
    "description_ro": "50 g",
    "image": "basturma_de_vita.png",
    "price": 70,
    "productType": "beerSnack"
  },
  {
    "name_ru": "Свиной голень",
    "name_ro": "Ciolan de proc",
    "description_ru": "Свиной голень",
    "description_ro": "Ciolan de proc",
    "image": "ciolan_de_proc.png",
    "price": 199,
    "productType": "mainDishes"
  },
  {
    "name_ru": "Венгерский гуляш",
    "name_ro": "Guleas Unguresc",
    "description_ru": "Венгерский гуляш",
    "description_ro": "Guleas Unguresc",
    "image": "guleas_unguresc.png",
    "price": 80,
    "productType": "mainDishes"
  },
  {
    "name_ru": "Жареный лосось",
    "name_ro": "File de somon",
    "description_ru": "Жареный лосось",
    "description_ro": "File de somon",
    "image": "file_de_somon.png",
    "price": 170,
    "productType": "mainDishes"
  },
  {
    "name_ru": "Зайчатина тушеная",
    "name_ro": "Tocanita de iepuras",
    "description_ru": "Зайчатина тушеная",
    "description_ro": "Tocanita de iepuras",
    "image": "tocanita_de_iepuras.png",
    "price": 95,
    "productType": "mainDishes"
  },
  {
    "name_ru": "Макароны с говядиной",
    "name_ro": "Paste cu carne",
    "description_ru": "Макароны с говядиной",
    "description_ro": "Paste cu carne",
    "image": "paste_cu_carne.png",
    "price": 90,
    "productType": "mainDishes"
  },
  {
    "name_ru": "Макароны с лососем",
    "name_ro": "Paste cu somon",
    "description_ru": "Макароны с лососем",
    "description_ro": "Paste cu somon",
    "image": "paste_cu_somon.png",
    "price": 110,
    "productType": "mainDishes"
  },
  {
    "name_ru": "Куриная грудка",
    "name_ro": "Piept de pui",
    "description_ru": "Куриная грудка",
    "description_ro": "Piept de pui",
    "image": "piept_de_pui.png",
    "price": 75,
    "productType": "mainDishes"
  },
  {
    "name_ru": "Куриные шашлычки",
    "name_ro": "Frigarui de pui",
    "description_ru": "Куриные шашлычки",
    "description_ro": "Frigarui de pui",
    "image": "frigarui_de_pui.png",
    "price": 95,
    "productType": "mainDishes"
  },
  {
    "name_ru": "Свинные шашлычки",
    "name_ro": "Frigarui de porc",
    "description_ru": "Свинные шашлычки",
    "description_ro": "Frigarui de porc",
    "image": "frigarui_de_porc.png",
    "price": 105,
    "productType": "mainDishes"
  },
  {
    "name_ru": "Говяжьи шашлычки",
    "name_ro": "Frigarui de vita",
    "description_ru": "Говяжьи шашлычки",
    "description_ro": "Frigarui de vita",
    "image": "frigarui_de_vita.png",
    "price": 155,
    "productType": "mainDishes"
  },
  {
    "name_ru": "Домашние мичи",
    "name_ro": "Mici de casa",
    "description_ru": "Домашние мичи",
    "description_ro": "Mici de casa",
    "image": "mici_de_casa.png",
    "price": 90,
    "productType": "mainDishes"
  },
  {
    "name_ru": "Бифштекс",
    "name_ro": "Steak",
    "description_ru": "Бифштекс",
    "description_ro": "Steak",
    "image": "steak.png",
    "price": 155,
    "productType": "mainDishes"
  },
  {
    "name_ru": "Мясо бизона тушеное в вине",
    "name_ro": "Carne de Bivol inabusit in vin",
    "description_ru": "Мясо бизона тушеное в вине",
    "description_ro": "Carne de bivol,Legume, Cartofi copti",
    "image": "carne_de_bivol_inabusit_in_vin.png",
    "price": 140,
    "productType": "mainDishes"
  },
  {
    "name_ru": "Куриный шницель",
    "name_ro": "Snitel",
    "description_ru": "Куриный шницель",
    "description_ro": "de pui 180/50 g",
    "image": "snitel.png",
    "price": 75,
    "productType": "mainDishes"
  },
  {
    "name_ru": "Куриный бургер",
    "name_ro": "Burger de pui",
    "description_ru": "Куриный бургер",
    "description_ro": "400g",
    "image": "burger_de_pui.png",
    "price": 90,
    "productType": "mainDishes"
  },
  {
    "name_ru": "Говяжий бургер",
    "name_ro": "Burger de vita",
    "description_ru": "Говяжий бургер",
    "description_ro": "400g",
    "image": "burger_de_vita.png",
    "price": 90,
    "productType": "mainDishes"
  },
  {
    "name_ru": "Туриця на мангалі з картоплею",
    "name_ro": "Carnita de curcan",
    "description_ru": "Туриця на мангалі з картоплею",
    "description_ro": "cu cartofi in oala 550 g",
    "image": "carnita_de_curcan.png",
    "price": 155,
    "productType": "mainDishes"
  },
  {
    "name_ru": "Говяжьи ребрышки",
    "name_ro": "Costita de vitel",
    "description_ru": "Говяжьи ребрышки",
    "description_ro": "100 g",
    "image": "costita_de_vitel.png",
    "price": 35,
    "productType": "mainDishes"
  },
  {
    "name_ru": "Жареное мясо",
    "name_ro": "Platou de carne gril",
    "description_ru": "Жареное мясо",
    "description_ro": "Platou de carne gril",
    "image": "platou_de_carne_gril.png",
    "price": 600,
    "productType": "mainDishes"
  },
  {
    "name_ru": "Жареная картошка",
    "name_ro": "Cartofi copti",
    "description_ru": "Жареная картошка",
    "description_ro": "Cartofi copti",
    "image": "cartofi_copti.png",
    "price": 40,
    "productType": "gaskets"
  },
  {
    "name_ru": "Картофель фри с кетчупом",
    "name_ro": "Cartofi pai + ketchup",
    "description_ru": "Картофель фри с кетчупом",
    "description_ro": "Cartofi pai + ketchup",
    "image": "cartofi_pai_ketchup.png",
    "price": 35,
    "productType": "gaskets"
  },
  {
    "name_ru": "Пюре из картофеля",
    "name_ro": "Piure de cartofi",
    "description_ru": "Пюре из картофеля",
    "description_ro": "Piure de cartofi",
    "image": "piure_de_cartofi.png",
    "price": 30,
    "productType": "gaskets"
  },
  {
    "name_ru": "Домашняя жареная картошка",
    "name_ro": "Cartofi prajiti ca acasa",
    "description_ru": "Домашняя жареная картошка",
    "description_ro": "Cartofi prajiti ca acasa",
    "image": "cartofi_prajiti_ca_acasa.png",
    "price": 50,
    "productType": "gaskets"
  },
  {
    "name_ru": "Полента",
    "name_ro": "Mamaliga",
    "description_ru": "Полента",
    "description_ro": "Mamaliga",
    "image": "mamaliga.png",
    "price": 50,
    "productType": "gaskets"
  },
  {
    "name_ru": "Рис с овощами",
    "name_ro": "Orez cu legume",
    "description_ru": "Рис с овощами",
    "description_ro": "Orez cu legume",
    "image": "orez_cu_legume.png",
    "price": 35,
    "productType": "gaskets"
  },
  {
    "name_ru": "Брокколи пюре",
    "name_ro": "Piure de brocoli",
    "description_ru": "Брокколи пюре",
    "description_ro": "Piure de brocoli",
    "image": "piure_de_brocoli.png",
    "price": 45,
    "productType": "gaskets"
  },
  {
    "name_ru": "Паста",
    "name_ro": "Pastari",
    "description_ru": "Паста",
    "description_ro": "Pastari",
    "image": "pastari.png",
    "price": 40,
    "productType": "gaskets"
  },
  {
    "name_ru": "Паста с маслом",
    "name_ro": "Paste cu unt",
    "description_ru": "Паста с маслом",
    "description_ro": "Paste cu unt",
    "image": "paste_cu_unt.png",
    "price": 30,
    "productType": "gaskets"
  },
  {
    "name_ru": "Фасоль с овощами",
    "name_ro": "Fasole cu legume",
    "description_ru": "Фасоль с овощами",
    "description_ro": "Fasole cu legume",
    "image": "fasole_cu_legume.png",
    "price": 50,
    "productType": "gaskets"
  },
  {
    "name_ru": "Тушеная капуста",
    "name_ro": "Varza calita",
    "description_ru": "Тушеная капуста",
    "description_ro": "Varza calita",
    "image": "varza_calita.png",
    "price": 40,
    "productType": "gaskets"
  },
  {
    "name_ru": "Маргарита",
    "name_ro": "Margherita",
    "description_ru": "Маргарита",
    "description_ro": "Sos de rosii, mozzarella",
    "image": "margherita.png",
    "price": 85,
    "productType": "pizza"
  },
  {
    "name_ru": "Дьявола",
    "name_ro": "Diavola",
    "description_ru": "Дьявола",
    "description_ro": "Sos de rosii, salam picant, mozzarella",
    "image": "diavola.png",
    "price": 95,
    "productType": "pizza"
  },
  {
    "name_ru": "Тонно",
    "name_ro": "Tonno",
    "description_ru": "Тонно",
    "description_ro": "Sos de rosii, rucola, cherry, Provola, mozzarella, ton",
    "image": "tonno.png",
    "price": 115,
    "productType": "pizza"
  },
  {
    "name_ru": "Капричиоза",
    "name_ro": "Capriciossa",
    "description_ru": "Капричиоза",
    "description_ro": "Ceafa de porc, vanata coapta, sos de rosii, ciuperci, branza decapra, mozzarella",
    "image": "capriciossa.png",
    "price": 110,
    "productType": "pizza"
  },
  {
    "name_ru": "Полло",
    "name_ro": "Pollo",
    "description_ru": "Полло",
    "description_ro": "Gogosari, ciuperci, piept de pui, mozzarella, sos de rosii.",
    "image": "pollo.png",
    "price": 110,
    "productType": "pizza"
  },
  {
    "name_ru": "Пицца \"Прошутто и грибы\"",
    "name_ro": "Prosciutto e funghi",
    "description_ru": "Пицца \"Прошутто и грибы\"",
    "description_ro": "Mozzarella, prosciutto, cotto, ciuperci, sos de rosii",
    "image": "prosciutto_e_funghi.png",
    "price": 98,
    "productType": "pizza"
  },
  {
    "name_ru": "Пицца \"Четыре сыра\"",
    "name_ro": "Quattro formaggi",
    "description_ru": "Пицца \"Четыре сыра\"",
    "description_ro": "Mozzarella, gorgonzola, provola edam, ricotta",
    "image": "quattro_formaggi.png",
    "price": 115,
    "productType": "pizza"
  },
  {
    "name_ru": "Пицца \"Ферма с оригиналами\"",
    "name_ro": "Ferma cu origini",
    "description_ru": "Пицца \"Ферма с оригиналами\"",
    "description_ro": "Sos de rosii, mozzarella, porumb, prosciutto, ciuperci, gogosari, masline",
    "image": "ferma_cu_origini.png",
    "price": 110,
    "productType": "pizza"
  },
  {
    "name_ru": "Пицца \"Карбонара\"",
    "name_ro": "Carbonara",
    "description_ru": "Пицца \"Карбонара\"",
    "description_ro": "Sos de rosii, mozzarella, bacon, ou",
    "image": "carbonara.png",
    "price": 98,
    "productType": "pizza"
  },
  {
    "name_ru": "Леггера",
    "name_ro": "Leggera",
    "description_ru": "Леггера",
    "description_ro": "Carne de vitel,piept de pui becon,sos de rosii, mozzarella,proschiutto ",
    "image": "leggera.png",
    "price": 115,
    "productType": "pizza"
  },
  {
    "name_ru": "Пицца Прага",
    "name_ro": "Pizza Praga",
    "description_ru": "Пицца Прага",
    "description_ro": "Sos de rosii,mozzarella,becon carnaciori vanatoresti de Praga,cascaval edam",
    "image": "pizza_praga.png",
    "price": 105,
    "productType": "pizza"
  },
  {
    "name_ru": "Вегетарианская",
    "name_ro": "Vegetariana",
    "description_ru": "Вегетарианская",
    "description_ro": "Sos de rosii, legume grill",
    "image": "vegetariana.png",
    "price": 85,
    "productType": "pizza"
  },
  {
    "name_ru": "Фокачча",
    "name_ro": "Focaccia",
    "description_ru": "Фокачча",
    "description_ro": "200 g",
    "image": "focaccia.png",
    "price": 25,
    "productType": "pizza"
  },
  {
    "name_ru": "Наполеон",
    "name_ro": "Napoleon",
    "description_ru": "Наполеон",
    "description_ro": "180 g",
    "image": "napoleon.png",
    "price": 65,
    "productType": "deserts"
  },
  {
    "name_ru": "Медовик",
    "name_ro": "Medovic",
    "description_ru": "Медовик",
    "description_ro": "140 g",
    "image": "medovic.png",
    "price": 65,
    "productType": "deserts"
  },
  {
    "name_ru": "Гушма луй Гугуца",
    "name_ro": "Cusma lui Guguta",
    "description_ru": "Гушма луй Гугуца",
    "description_ro": "170 g",
    "image": "cusma_lui_guguta.png",
    "price": 65,
    "productType": "deserts"
  },
  {
    "name_ru": "Пирожное",
    "name_ro": "Prajitura",
    "description_ru": "Пирожное",
    "description_ro": "Gustul copilariei 90g",
    "image": "prajitura.png",
    "price": 55,
    "productType": "deserts"
  },
  {
    "name_ru": "Сливы с орехами",
    "name_ro": "Prune cu nuca",
    "description_ru": "Сливы с орехами",
    "description_ro": "n sirop de vincu crema de smantana 200 g",
    "image": "prune_cu_nuca.png",
    "price": 65,
    "productType": "deserts"
  },
  {
    "name_ru": "Фондан",
    "name_ro": "Fondant",
    "description_ru": "Фондан",
    "description_ro": "de ciocolata 70/50 g",
    "image": "fondant.png",
    "price": 70,
    "productType": "deserts"
  },
  {
    "name_ru": "Настоящее мороженое",
    "name_ro": "Inghetata adevarata",
    "description_ru": "Настоящее мороженое",
    "description_ro": "(Plombir/Ciocolata /Nocciola/ Fistic/Mure,Capsuna ,1 bila  50 g",
    "image": "inghetata_adevarata.png",
    "price": 15,
    "productType": "deserts"
  },
  {
    "name_ru": "Guizza",
    "name_ro": "Guizza",
    "description_ru": "Guizza",
    "description_ro": "(apa plata/gazoasa) 500ml ",
    "image": "guizza.png",
    "price": 15,
    "productType": "non_alchogol"
  },
  {
    "name_ru": "Plose",
    "name_ro": "Plose",
    "description_ru": "Plose",
    "description_ro": "(apa plata/gazata) 250/750ml",
    "image": "plose.png",
    "price": "25.41",
    "productType": "non_alchogol"
  },
  {
    "name_ru": "Coca Cola,Sprite,Fanta",
    "name_ro": "Coca Cola,Sprite,Fanta",
    "description_ru": "Coca Cola,Sprite,Fanta",
    "description_ro": "300/500 ml",
    "image": "coca_cola_sprite_fanta.png",
    "price": "19.00",
    "productType": "non_alchogol"
  },
  {
    "name_ru": "Ceai rece",
    "name_ro": "Ceai rece",
    "description_ru": "Ceai rece",
    "description_ro": "500 ml",
    "image": "ceai_rece.png",
    "price": 25,
    "productType": "non_alchogol"
  },
  {
    "name_ru": "Suc Jaffa",
    "name_ro": "Suc Jaffa",
    "description_ru": "Suc Jaffa",
    "description_ro": "250/950 ml",
    "image": "suc_jaffa.png",
    "price": "70.68",
    "productType": "non_alchogol"
  },
  {
    "name_ru": "Suc Fresh",
    "name_ro": "Suc Fresh",
    "description_ru": "Suc Fresh",
    "description_ro": "orange/grapefruit 250 ml",
    "image": "suc_fresh.png",
    "price": 45,
    "productType": "non_alchogol"
  },
  {
    "name_ru": "Borjomi",
    "name_ro": "Borjomi",
    "description_ru": "Borjomi",
    "description_ro": "500 ml",
    "image": "borjomi.png",
    "price": 45,
    "productType": "non_alchogol"
  },
  {
    "name_ru": "Milkshake",
    "name_ro": "Milkshake",
    "description_ru": "Milkshake",
    "description_ro": "350 ml  ",
    "image": "milkshake.png",
    "price": 45,
    "productType": "milk_shakes_lemonads"
  },
  {
    "name_ru": "Limonada clasica",
    "name_ro": "Limonada clasica",
    "description_ru": "Limonada clasica",
    "description_ro": "350 ml/1L",
    "image": "limonada_clasica.png",
    "price": "69.70",
    "productType": "milk_shakes_lemonads"
  },
  {
    "name_ru": "Limonada de capsuna",
    "name_ro": "Limonada de capsuna",
    "description_ru": "Limonada de capsuna",
    "description_ro": "350 ml/1L",
    "image": "limonada_de_capsuna.png",
    "price": "73.41",
    "productType": "milk_shakes_lemonads"
  },
  {
    "name_ru": "Ceai rece de casa",
    "name_ro": "Ceai rece de casa",
    "description_ru": "Ceai rece de casa",
    "description_ro": "350 ml/1L",
    "image": "ceai_rece_de_casa.png",
    "price": "4.05",
    "productType": "milk_shakes_lemonads"
  },
  {
    "name_ru": "Pina Colada",
    "name_ro": "Pina Colada",
    "description_ru": "Pina Colada",
    "description_ro": "250/950 ml",
    "image": "pina_colada.png",
    "price": "51.74",
    "productType": "milk_shakes_lemonads"
  },
  {
    "name_ru": "Frappe",
    "name_ro": "Frappe",
    "description_ru": "Frappe",
    "description_ro": "350 ml",
    "image": "frappe.png",
    "price": 35,
    "productType": "milk_shakes_lemonads"
  },
  {
    "name_ru": "Espresso",
    "name_ro": "Espresso",
    "description_ru": "Espresso",
    "description_ro": "30 ml ",
    "image": "espresso.png",
    "price": 20,
    "productType": "hot_drinks"
  },
  {
    "name_ru": "Americano",
    "name_ro": "Americano",
    "description_ru": "Americano",
    "description_ro": "100 ml",
    "image": "americano.png",
    "price": 20,
    "productType": "hot_drinks"
  },
  {
    "name_ru": "Cappuccino",
    "name_ro": "Cappuccino",
    "description_ru": "Cappuccino",
    "description_ro": "250ml",
    "image": "cappuccino.png",
    "price": 30,
    "productType": "hot_drinks"
  },
  {
    "name_ru": "Latte",
    "name_ro": "Latte",
    "description_ru": "Latte",
    "description_ro": "300 ml",
    "image": "latte.png",
    "price": 30,
    "productType": "hot_drinks"
  },
  {
    "name_ru": "Mocaccino",
    "name_ro": "Mocaccino",
    "description_ru": "Mocaccino",
    "description_ro": "",
    "image": "mocaccino.png",
    "price": 30,
    "productType": "hot_drinks"
  },
  {
    "name_ru": "Cacao",
    "name_ro": "Cacao",
    "description_ru": "Cacao",
    "description_ro": "250 ml",
    "image": "cacao.png",
    "price": 30,
    "productType": "hot_drinks"
  },
  {
    "name_ru": "Ceai de catina",
    "name_ro": "Ceai de catina",
    "description_ru": "Ceai de catina",
    "description_ro": "ghimbir si portocala ,450 ml",
    "image": "ceai_de_catina.png",
    "price": 50,
    "productType": "hot_drinks"
  },
  {
    "name_ru": "Ceai de Plante",
    "name_ro": "Ceai de Plante",
    "description_ru": "Ceai de Plante",
    "description_ro": "450 ml",
    "image": "ceai_de_plante.png",
    "price": 45,
    "productType": "hot_drinks"
  },
  {
    "name_ru": "Aperol Spritz",
    "name_ro": "Aperol Spritz",
    "description_ru": "Aperol Spritz",
    "description_ro": "350  ml",
    "image": "aperol_spritz.png",
    "price": 65,
    "productType": "alchogol_coctails"
  },
  {
    "name_ru": "Gin tonic",
    "name_ro": "Gin tonic",
    "description_ru": "Gin tonic",
    "description_ro": "350 ml",
    "image": "gin_tonic.png",
    "price": 55,
    "productType": "alchogol_coctails"
  },
  {
    "name_ru": "Cuba Libre",
    "name_ro": "Cuba Libre",
    "description_ru": "Cuba Libre",
    "description_ro": "350 ml",
    "image": "cuba_libre.png",
    "price": 60,
    "productType": "alchogol_coctails"
  },
  {
    "name_ru": "Green Mexican",
    "name_ro": "Green Mexican",
    "description_ru": "Green Mexican",
    "description_ro": "60 ml",
    "image": "green_mexican.png",
    "price": 55,
    "productType": "alchogol_coctails"
  },
  {
    "name_ru": "Long Island Ice Tea",
    "name_ro": "Long Island Ice Tea",
    "description_ru": "Long Island Ice Tea",
    "description_ro": "",
    "image": "long_island_ice_tea.png",
    "price": 90,
    "productType": "alchogol_coctails"
  },
  {
    "name_ru": "Glintwein",
    "name_ro": "Glintwein",
    "description_ru": "Glintwein",
    "description_ro": "55 ml",
    "image": "glintwein.png",
    "price": 30,
    "productType": "alchogol_coctails"
  },
  {
    "name_ru": "Pale Ale",
    "name_ro": "Pale Ale",
    "description_ru": "Pale Ale",
    "description_ro": "350  ml",
    "image": "pale_ale.png",
    "price": 45,
    "productType": "beer"
  },
  {
    "name_ru": "Efes pilsner",
    "name_ro": "Efes pilsner",
    "description_ru": "Efes pilsner",
    "description_ro": "f/a ,c/a 500 ml",
    "image": "efes_pilsner.png",
    "price": 40,
    "productType": "beer"
  },
  {
    "name_ru": "Kozel",
    "name_ro": "Kozel",
    "description_ru": "Kozel",
    "description_ro": "bruna / blonda 500 ml",
    "image": "kozel.png",
    "price": 40,
    "productType": "beer"
  },
  {
    "name_ru": "Corona Extra",
    "name_ro": "Corona Extra",
    "description_ru": "Corona Extra",
    "description_ro": "355 ml",
    "image": "corona_extra.png",
    "price": 55,
    "productType": "beer"
  },
  {
    "name_ru": "Hoegaarden",
    "name_ro": "Hoegaarden",
    "description_ru": "Hoegaarden",
    "description_ro": "330 ml",
    "image": "hoegaarden.png",
    "price": 50,
    "productType": "beer"
  },
  {
    "name_ru": "Franziskaner",
    "name_ro": "Franziskaner",
    "description_ru": "Franziskaner",
    "description_ro": "Weissbier 500 ml",
    "image": "franziskaner.png",
    "price": 60,
    "productType": "beer"
  },
  {
    "name_ru": "Kronenbourg",
    "name_ro": "Kronenbourg",
    "description_ru": "Kronenbourg",
    "description_ro": "460 ml",
    "image": "kronenbourg.png",
    "price": 45,
    "productType": "beer"
  },
  {
    "name_ru": "Kozel blonda  HALBA",
    "name_ro": "Kozel blonda  HALBA",
    "description_ru": "Kozel blonda  HALBA",
    "description_ro": "500 ml",
    "image": "kozel_blonda_halba.png",
    "price": 35,
    "productType": "beer"
  },
  {
    "name_ru": "Sauvignon Blanc Aligote",
    "name_ro": "Sauvignon Blanc Aligote",
    "description_ru": "Sauvignon Blanc Aligote",
    "description_ro": "(alb, sec) 0,75 ml",
    "image": "sauvignon_blanc_aligote.png",
    "price": 210,
    "productType": "wines"
  },
  {
    "name_ru": "Merlot Rara Neagra",
    "name_ro": "Merlot Rara Neagra",
    "description_ru": "Merlot Rara Neagra",
    "description_ro": "(rosu, sec) 0,75 ml",
    "image": "merlot_rara_neagra.png",
    "price": 210,
    "productType": "wines"
  },
  {
    "name_ru": "Merlot Feteasca Nearga",
    "name_ro": "Merlot Feteasca Nearga",
    "description_ru": "Merlot Feteasca Nearga",
    "description_ro": "(roz, sec)0,75 ml",
    "image": "merlot_feteasca_nearga.png",
    "price": 210,
    "productType": "wines"
  },
  {
    "name_ru": "Aurore Feteasca Neagra",
    "name_ro": "Aurore Feteasca Neagra",
    "description_ru": "Aurore Feteasca Neagra",
    "description_ro": "0,75 ml",
    "image": "aurore_feteasca_neagra.png",
    "price": 350,
    "productType": "wines"
  },
  {
    "name_ru": "Aurore Pinot Grigio",
    "name_ro": "Aurore Pinot Grigio",
    "description_ru": "Aurore Pinot Grigio",
    "description_ro": "0,75 ml",
    "image": "aurore_pinot_grigio.png",
    "price": 350,
    "productType": "wines"
  },
  {
    "name_ru": "Aurore Rara Neagra",
    "name_ro": "Aurore Rara Neagra",
    "description_ru": "Aurore Rara Neagra",
    "description_ro": "0,75 ml",
    "image": "aurore_rara_neagra.png",
    "price": 350,
    "productType": "wines"
  },
  {
    "name_ru": "Uneori Cabernet Sauvignon",
    "name_ro": "Uneori Cabernet Sauvignon",
    "description_ru": "Uneori Cabernet Sauvignon",
    "description_ro": "750 ml",
    "image": "uneori_cabernet_sauvignon.png",
    "price": 200,
    "productType": "wines"
  },
  {
    "name_ru": "Uneori Riesling",
    "name_ro": "Uneori Riesling",
    "description_ru": "Uneori Riesling",
    "description_ro": "750 ml",
    "image": "uneori_riesling.png",
    "price": 200,
    "productType": "wines"
  },
  {
    "name_ru": "Uneori Muscat Rose",
    "name_ro": "Uneori Muscat Rose",
    "description_ru": "Uneori Muscat Rose",
    "description_ro": "750 ml",
    "image": "uneori_muscat_rose.png",
    "price": 240,
    "productType": "wines"
  },
  {
    "name_ru": "Cabernet Sauvignon",
    "name_ro": "Cabernet Sauvignon",
    "description_ru": "Cabernet Sauvignon",
    "description_ro": "150/750 ml",
    "image": "cabernet_sauvignon.png",
    "price": "10.25",
    "productType": "wines"
  },
  {
    "name_ru": "Muscat Rose",
    "name_ro": "Muscat Rose",
    "description_ru": "Muscat Rose",
    "description_ro": "150/750 ml",
    "image": "muscat_rose.png",
    "price": "7.76",
    "productType": "wines"
  },
  {
    "name_ru": "Chardonnay",
    "name_ro": "Chardonnay",
    "description_ru": "Chardonnay",
    "description_ro": "150/750 ml ml",
    "image": "chardonnay.png",
    "price": "86.38",
    "productType": "wines"
  },
  {
    "name_ru": "Orasul Subteran Viorica",
    "name_ro": "Orasul Subteran Viorica",
    "description_ru": "Orasul Subteran Viorica",
    "description_ro": "750 ml",
    "image": "orasul_subteran_viorica.png",
    "price": 200,
    "productType": "wines"
  },
  {
    "name_ru": "Orasul Subteran",
    "name_ro": "Orasul Subteran",
    "description_ru": "Orasul Subteran",
    "description_ro": "Cabernet /Rose  750 ml",
    "image": "orasul_subteran_rose.png",
    "price": 200,
    "productType": "wines"
  },
  {
    "name_ru": "Orasul Subteran",
    "name_ro": "Orasul Subteran",
    "description_ru": "Orasul Subteran",
    "description_ro": "Feteasca Neagra 750 ml",
    "image": "orasul_subteran_neagra.png",
    "price": 200,
    "productType": "wines"
  },
  {
    "name_ru": "Lacrima Dulce",
    "name_ro": "Lacrima Dulce",
    "description_ru": "Lacrima Dulce",
    "description_ro": "750 ml",
    "image": "lacrima_dulce.png",
    "price": 170,
    "productType": "champagne"
  },
  {
    "name_ru": "Alb Brut",
    "name_ro": "Alb Brut",
    "description_ru": "Alb Brut",
    "description_ro": "750 ml",
    "image": "alb_brut.png",
    "price": 210,
    "productType": "champagne"
  },
  {
    "name_ru": "Crisseco",
    "name_ro": "Crisseco",
    "description_ru": "Crisseco",
    "description_ro": "150/ 750 ml",
    "image": "crisseco.png",
    "price": "82.62",
    "productType": "champagne"
  },
  {
    "name_ru": "Asti Martini",
    "name_ro": "Asti Martini",
    "description_ru": "Asti Martini",
    "description_ro": "750 ml",
    "image": "asti_martini.png",
    "price": 295,
    "productType": "champagne"
  },
  {
    "name_ru": "Jagermeister",
    "name_ro": "Jagermeister",
    "description_ru": "Jagermeister",
    "description_ro": "50 ml",
    "image": "jagermeister.png",
    "price": 50,
    "productType": "strong_alchogol"
  },
  {
    "name_ru": "Bailey’s",
    "name_ro": "Bailey’s",
    "description_ru": "Bailey’s",
    "description_ro": "50 ml",
    "image": "bailey_s.png",
    "price": 50,
    "productType": "strong_alchogol"
  },
  {
    "name_ru": "Martini Rosso",
    "name_ro": "Martini Rosso",
    "description_ru": "Martini Rosso",
    "description_ro": "50 ml",
    "image": "martini_rosso.png",
    "price": 35,
    "productType": "strong_alchogol"
  },
  {
    "name_ru": "Martini Bianco",
    "name_ro": "Martini Bianco",
    "description_ru": "Martini Bianco",
    "description_ro": "50 ml",
    "image": "martini_bianco.png",
    "price": 35,
    "productType": "strong_alchogol"
  },
  {
    "name_ru": "Jose Cuervo",
    "name_ro": "Jose Cuervo",
    "description_ru": "Jose Cuervo",
    "description_ro": "Reposado/ Silver 50 ml",
    "image": "jose_cuervo.png",
    "price": 50,
    "productType": "strong_alchogol"
  },
  {
    "name_ru": "Tabacco",
    "name_ro": "Tabacco",
    "description_ru": "Tabacco",
    "description_ro": "Silver Premium 50 ml",
    "image": "tabacco.png",
    "price": 40,
    "productType": "strong_alchogol"
  },
  {
    "name_ru": "Bacardi",
    "name_ro": "Bacardi",
    "description_ru": "Bacardi",
    "description_ro": "Oakheart 50 ml",
    "image": "bacardi.png",
    "price": 50,
    "productType": "strong_alchogol"
  },
  {
    "name_ru": "Tuica de gutui,caise prune",
    "name_ro": "Tuica de gutui,caise prune",
    "description_ru": "Tuica de gutui,caise prune",
    "description_ro": "50 ml",
    "image": "tuica_de_gutui_caise_prune.png",
    "price": 35,
    "productType": "strong_alchogol"
  },
  {
    "name_ru": "Nemiroff",
    "name_ro": "Nemiroff",
    "description_ru": "Nemiroff",
    "description_ro": "50 ml",
    "image": "nemiroff.png",
    "price": 25,
    "productType": "strong_alchogol"
  },
  {
    "name_ru": "Finlandia",
    "name_ro": "Finlandia",
    "description_ru": "Finlandia",
    "description_ro": "50 ml",
    "image": "finlandia.png",
    "price": 35,
    "productType": "strong_alchogol"
  },
  {
    "name_ru": "Bardar 5 ani",
    "name_ro": "Bardar 5 ani",
    "description_ru": "Bardar 5 ani",
    "description_ro": "50 ml",
    "image": "bardar_5_ani.png",
    "price": 30,
    "productType": "strong_alchogol"
  },
  {
    "name_ru": "Bardar 7 ani",
    "name_ro": "Bardar 7 ani",
    "description_ru": "Bardar 7 ani",
    "description_ro": "50 ml",
    "image": "bardar_7_ani.png",
    "price": 45,
    "productType": "strong_alchogol"
  },
  {
    "name_ru": "Calarasi 5 ani",
    "name_ro": "Calarasi 5 ani",
    "description_ru": "Calarasi 5 ani",
    "description_ro": "50 ml",
    "image": "calarasi_5_ani.png",
    "price": 30,
    "productType": "strong_alchogol"
  },
  {
    "name_ru": "Calarasi 7 ani",
    "name_ro": "Calarasi 7 ani",
    "description_ru": "Calarasi 7 ani",
    "description_ro": "50 ml",
    "image": "calarasi_7_ani.png",
    "price": 40,
    "productType": "strong_alchogol"
  },
  {
    "name_ru": "Balti 7 ani",
    "name_ro": "Balti 7 ani",
    "description_ru": "Balti 7 ani",
    "description_ro": "50 ml",
    "image": "balti_7_ani.png",
    "price": 40,
    "productType": "strong_alchogol"
  },
  {
    "name_ru": "Speranta 9 ani",
    "name_ro": "Speranta 9 ani",
    "description_ru": "Speranta 9 ani",
    "description_ro": "50 ml",
    "image": "speranta_9_ani.png",
    "price": 50,
    "productType": "strong_alchogol"
  },
  {
    "name_ru": "Bucuria 10 anii",
    "name_ro": "Bucuria 10 anii",
    "description_ru": "Bucuria 10 anii",
    "description_ro": "50 ml",
    "image": "bucuria_10_anii.png",
    "price": 55,
    "productType": "strong_alchogol"
  },
  {
    "name_ru": "Jameson",
    "name_ro": "Jameson",
    "description_ru": "Jameson",
    "description_ro": "50 ml",
    "image": "jameson.png",
    "price": 50,
    "productType": "strong_alchogol"
  },
  {
    "name_ru": "Jack Daniel’s",
    "name_ro": "Jack Daniel’s",
    "description_ru": "Jack Daniel’s",
    "description_ro": "50 ml",
    "image": "jack_daniel_s.png",
    "price": 50,
    "productType": "strong_alchogol"
  }
]