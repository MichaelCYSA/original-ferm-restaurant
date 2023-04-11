import * as links from './links';

export interface Product {
    name: string;
    price: number | string;
    description: string;
    img?: string
}

export interface SupplementsItem {
    name: string,
    price: number
}

type ArrayOfSupplementsItems = SupplementsItem[]

export interface MenuSection {
    sectionName: string;
    id: string;
    products?: Product[]
}

export const products: MenuSection[] = [
    {
        sectionName: 'Mic dejun',
        id: links.breakfast,
        products: [
            {
                name: 'Brinzoaice',
                description: '200-50g',
                price: 60.00,
                img: 'brinzoaice.png'
            },
            {
                name: 'Omleta cu salata',
                description: '200g',
                price: 50.00,
                img: 'omleta_cu_salata.png'
            },
            {
                name: 'Ochiuri',
                description: 'cu becon 2buc/50g',
                price: 60.00,
                img: 'ochiuri.png'
            },
            {
                name: 'Clatite',
                description: 'cu gem 250g',
                price: 60.00,
                img: 'clatite.png'
            },
            {
                name: 'Terci de ovaz',
                description: 'pe lapte,apa ,cu gem 300g',
                price: 35.00,
                img: 'terci_de_ovaz.png'
            },
            {
                name: 'Croissant',
                description: 'in sortiment 1 buc',
                price: 35.00,
                img: 'croissant.png'
            }
        ]
    },
    {
        sectionName: 'Supe',
        id: links.soup,
        products: [
            {
                name: 'Bors rosu',
                description: 'cu carne de vita 350/50/50 g',
                price: 60.00,
                img: 'bors_rosu.png'
            },
            {
                name: 'Zeama de gaina',
                description: 'de casa 350/50 g',
                price: 55.00,
                img: 'zeama_de_gaina.png'
            },
            {
                name: 'Soleanca',
                description: '350/50 g',
                price: 60.00,
                img: 'soleanca.png'
            },
            {
                name: 'Supa de spanac',
                description: '250/30 g ',
                price: 70.00,
                img: 'supa_de_spanac.png'
            },
            {
                name: 'Crem supa',
                description: 'de cascaval 380 /30g',
                price: 55.00,
                img: 'crem_supa.png'
            },
        ]
    },
    {
        sectionName: 'Salate',
        id: links.salads,
        products: [
            {
                name: 'Salata Shopski',
                description: '200 g',
                price: 70.00,
                img: 'salata_shopski.png'
            },
            {
                name: 'Salata Caesar ',
                description: 'cu carne de pui 320 g',
                price: 90.00,
                img: 'salata_caesar.png'
            },
            {
                name: 'Salata de varza ',
                description: '200-50g',
                price: 40.00,
                img: 'salata_de_varza.png'
            },
            {
                name: 'Salata cu varza murata',
                description: '200 g',
                price: 40.00,
                img: 'salata_cu_varza_murata.png'
            },
            {
                name: 'Salata Exotic',
                description: 'cu pui si cascaval 250g ',
                price: 75.00,
                img: 'salata_exotic.png'
            },
            {
                name: 'Salata Mozzarella Perle',
                description: '250 g',
                price: 75.00,
                img: 'salata_mozzarella_perle.png'
            },
            {
                name: 'Salata calda',
                description: 'cu carne de vita 320g',
                price: 100.00,
                img: 'salata_calda.png'
            },

            {
                name: 'Salata din legume ',
                description: 'coapte 350 g',
                price: 75.00,
                img: 'salata_din_legume.png'
            },
            {
                name: 'Salata cu ton',
                description: '210 g ',
                price: 95.00,
                img: 'salata_cu_ton.png'
            },
            {
                name: 'Mix de legume',
                description: '250g',
                price: 60.00,
                img: 'mix_de_legume.png'
            }
        ]
    },
    {
        sectionName: 'GUSTARI RECI',
        id: links.goldSnacks,
        products: [
            {
                name: 'Hering cu cartofi fierti',
                description: '100/250 g',
                price: 70.00,
                img: 'hering_cu_cartofi_fierti.png'
            },
            {
                name: 'Gingerica',
                description: 'cu cartofi fierti 100/250/50 g',
                price: 70.00,
                img: 'gingerica.png'
            },
            {
                name: 'Platou de legume',
                description: 'proaspete 450 g',
                price: 90.00,
                img: 'platou_de_legume.png'
            },
            {
                name: 'Platou de cascavaluri',
                description: 'de la “Ferma Noastra” 300 g',
                price: 120.00,
                img: 'platou_de_cascavaluri.png'
            },
            {
                name: 'Platou de Slanina',
                description: '380 g ',
                price: 90.00,
                img: 'platou_de_slanina.png'
            },
            {
                name: 'Platou de salamuri',
                description: '250g',
                price: 140.00,
                img: 'platou_de_salamuri.png'
            },

            {
                name: 'Platou de muraturi',
                description: '450g',
                price: 60.00,
                img: 'platou_de_muraturi.png'
            },
            {
                name: 'Burratta cu salata',
                description: 'de rosii cherrysi busuioc 250 g',
                price: 99.00,
                img: 'burratta_cu_salata.png'
            },
            {
                name: 'Bruschete',
                description: 'cu somon 2 buc',
                price: 85.00,
                img: 'bruschete.png'
            },
            {
                name: 'Bruschete',
                description: 'cu mozzarella 250g',
                price: 65.00,
                img: 'bruschete_mozzarella.png'
            },
            {
                name: 'Bruschete',
                description: 'cu rosbif 250g',
                price: 70.00,
                img: 'bruschete_rosbif.png'
            },
        ]
    },
    {
        sectionName: 'GUSTARI FIERBINTI',
        id: links.hostSnack,
        products: [
            {
                name: 'Cascaval Buffalo',
                description: 'Teleggio pane 125/50 g',
                price: 140.00,
                img: 'cascaval_buffalo.png'
            },
            {
                name: 'Aripioare de pui',
                description: 'cu cartofi pai 250/130/50 g',
                price: 85.00,
                img: 'aripioare_de_pui.png'
            },
            {
                name: 'Nughete de pui',
                description: 'cu cartofi pai 150/130/50 g',
                price: 85.00,
                img: 'nughete_de_pui.png'
            },
            {
                name: 'Placinte in asortiment',
                description: '200 g',
                price: 40.00,
                img: 'placinte_in_asortiment.png'
            }
        ]
    },
    {
        sectionName: 'GUSTARI LA BERE',
        id: links.beerSnack,
        products: [
            {
                name: 'Nacios',
                description: '50g/50g',
                price: 40.00,
                img: 'nacios.png'
            },
            {
                name: 'Crutoane cu usturoi',
                description: '250/50 g',
                price: 40.00,
                img: 'crutoane_cu_usturoi.png'
            },
            {
                name: 'Migdale prajite',
                description: '100 g',
                price: 60.00,
                img: 'migdale_prajite.png'
            },
            {
                name: 'Pietrosel',
                description: '130/50 g',
                price: 65.00,
                img: 'pietrosel.png'
            },
            {
                name: 'Ineluse',
                description: 'ceapa+sos tartar 130/50 g ',
                price: 60.00,
                img: 'ineluse.png'
            },
            {
                name: 'Ineluse',
                description: 'de calmar+sos tartar 130/50 g ',
                price: 70.00,
                img: 'ineluse_calmar.png'
            },
            {
                name: 'Basturma de vita',
                description: '50 g',
                price: 70.00,
                img: 'basturma_de_vita.png'
            }
        ]
    },
    {
        sectionName: 'BUCATE PRINCIPALE',
        id: links.mainDishes,
        products: [
            {
                name: 'Ciolan de proc',
                description: '750 g',
                price: 199.00,
                img: 'ciolan_de_proc.png'
            },
            {
                name: 'Guleas Unguresc',
                description: '300/50 g',
                price: 80.00,
                img: 'guleas_unguresc.png'
            },
            {
                name: 'File de somon',
                description: 'somon la gratar 150/ 50 g ',
                price: 170.00,
                img: 'file_de_somon.png'
            },
            {
                name: 'Tocanita de iepuras',
                description: '200 g',
                price: 95.00,
                img: 'tocanita_de_iepuras.png'
            },
            {
                name: 'Paste cu carne',
                description: 'de vita tocata 300 g ',
                price: 90.00,
                img: 'paste_cu_carne.png'
            },
            {
                name: 'Paste cu somon',
                description: 'in sos alb 250 g',
                price: 110.00,
                img: 'paste_cu_somon.png'
            },
            {
                name: 'Piept de pui',
                description: '180/50 g',
                price: 75.00,
                img: 'piept_de_pui.png'
            },
            {
                name: 'Frigarui de pui',
                description: '300/25/25 g',
                price: 95.00,
                img: 'frigarui_de_pui.png'
            },
            {
                name: 'Frigarui de porc',
                description: '250/50/50 g',
                price: 105.00,
                img: 'frigarui_de_porc.png'
            },
            {
                name: 'Frigarui de vita',
                description: '250/50/50 g',
                price: 155.00,
                img: 'frigarui_de_vita.png'
            },
            {
                name: 'Mici de casa',
                description: 'salata de varza 180/100/50 g',
                price: 90.00,
                img: 'mici_de_casa.png'
            },


            {
                name: 'Steak',
                description: '250/50/50 g',
                price: 155.00,
                img: 'steak.png'
            },
            {
                name: 'Carne de Bivol inabusit in vin',
                description: 'Carne de bivol,Legume, Cartofi copti',
                price: 140.00,
                img: 'carne_de_bivol_inabusit_in_vin.png'
            },
            {
                name: 'Snitel',
                description: 'de pui 180/50 g',
                price: 75.00,
                img: 'snitel.png'
            },
            {
                name: 'Burger de pui',
                description: '400g',
                price: 90.00,
                img: 'burger_de_pui.png'
            },
            {
                name: 'Burger de vita',
                description: '400g',
                price: 90.00,
                img: 'burger_de_vita.png'
            },
            {
                name: 'Carnita de curcan',
                description: 'cu cartofi in oala 550 g',
                price: 155.00,
                img: 'carnita_de_curcan.png'
            },
            {
                name: 'Costita de vitel',
                description: '100 g',
                price: 35.00,
                img: 'costita_de_vitel.png'
            },
            {
                name: 'Platou de carne gril',
                description: '1500 g',
                price: 600.00,
                img: 'platou_de_carne_gril.png'
            }
        ]
    },
    {
        sectionName: 'GARNITURI',
        id: links.gaskets,
        products: [
            {
                name: 'Cartofi copti',
                description: 'cu rozmarin 250 g',
                price: 40.00,
                img: 'cartofi_copti.png'
            },
            {
                name: 'Cartofi pai + ketchup',
                description: '130/50 g',
                price: 35.00,
                img: 'cartofi_pai_ketchup.png'
            },
            {
                name: 'Piure de cartofi',
                description: '200 g',
                price: 30.00,
                img: 'piure_de_cartofi.png'
            },
            {
                name: 'Cartofi prajiti ca acasa',
                description: '300 g',
                price: 50.00,
                img: 'cartofi_prajiti_ca_acasa.png'
            },
            {
                name: 'Mamaliga',
                description: 'cu smantana, branza 350 g',
                price: 50.00,
                img: 'mamaliga.png'
            },
            {
                name: 'Orez cu legume',
                description: '250 g',
                price: 35.00,
                img: 'orez_cu_legume.png'
            },
            {
                name: 'Piure de brocoli',
                description: '200 g',
                price: 45.00,
                img: 'piure_de_brocoli.png'
            },
            {
                name: 'Pastari',
                description: '270 g',
                price: 40.00,
                img: 'pastari.png'
            },
            {
                name: 'Paste cu unt',
                description: '200 gg ',
                price: 30.00,
                img: 'paste_cu_unt.png'
            },
            {
                name: 'Fasole cu legume',
                description: '200 g',
                price: 50.00,
                img: 'fasole_cu_legume.png'
            },
            {
                name: 'Varza calita',
                description: '200 g',
                price: 40.00,
                img: 'varza_calita.png'
            },
        ]
    },
    {
        sectionName: 'PIZZA',
        id: links.pizza,
        products: [
            {
                name: 'Margherita',
                description: 'Sos de rosii, mozzarella',
                price: 85.00,
                img: 'margherita.png'
            },
            {
                name: 'Diavola',
                description: 'Sos de rosii,salam picant, mozzarella',
                price: 95.00,
                img: 'diavola.png'
            },
            {
                name: 'Tonno',
                description: 'Sos de rosii,rucola, cherry, Provola,mozzarella, ton',
                price: 115.00,
                img: 'tonno.png'
            },
            {
                name: 'Capriciossa',
                description: 'Ceafa de porc, vanata coapta, sos de rosii, ciuperci , branza decapra, mozzarella',
                price: 110.00,
                img: 'capriciossa.png'
            },
            {
                name: 'Pollo',
                description: 'Gogosari, ciuperci,piept de pui mozzarella, sos de rosii.',
                price: 110.00,
                img: 'pollo.png'
            },
            {
                name: 'Prosciutto e funghi',
                description: 'Mozzarella, prosciutto, cotto, ciuperci,sos de rosii',
                price: 98.00,
                img: 'prosciutto_e_funghi.png'
            },
            {
                name: 'Quattro formaggi',
                description: 'Mozzarella,gorgonzola, provola edam,ricotta',
                price: 115.00,
                img: 'quattro_formaggi.png'
            },
            {
                name: 'Ferma cu origini',
                description: 'Sos de rosii,mozzarella, porumb,prosciutto ,ciuperci, gogosari, masline',
                price: 110.00,
                img: 'ferma_cu_origini.png'
            },
            {
                name: 'Carbonara',
                description: 'Sos de rosii,mozzarella, bacon,ou',
                price: 98.00,
                img: 'carbonara.png'
            },
            {
                name: 'Leggera',
                description: 'Carne de vitel,piept de pui becon,sos de rosii, mozzarella,proschiutto ',
                price: 115.00,
                img: 'leggera.png'
            },
            {
                name: 'Pizza Praga',
                description: 'Sos de rosii,mozzarella,becon carnaciori vanatoresti de Praga,cascaval edam',
                price: 105.00,
                img: 'pizza_praga.png'
            },
            {
                name: 'Vegetariana',
                description: 'Sos de rosii, legume grill',
                price: 85.00,
                img: 'vegetariana.png'
            },
            {
                name: 'Focaccia',
                description: '200 g',
                price: 25.00,
                img: 'focaccia.png'
            }
        ]
    },
    {
        sectionName: 'DESERTURI',
        id: links.desserts,
        products: [
            {
                name: 'Napoleon',
                description: '180 g',
                price: 65.00,
                img: 'napoleon.png'
            },
            {
                name: 'Medovic',
                description: '140 g',
                price: 65.00,
                img: 'medovic.png'
            },
            {
                name: 'Cusma lui Guguta',
                description: '170 g',
                price: 65.00,
                img: 'cusma_lui_guguta.png'
            },
            {
                name: 'Prajitura',
                description: 'Gustul copilariei90g',
                price: 55.00,
                img: 'prajitura.png'
            },
            {
                name: 'Prune cu nuca',
                description: 'n sirop de vincu crema de smantana 200 g',
                price: 65.00,
                img: 'prune_cu_nuca.png'
            },
            {
                name: 'Fondant',
                description: 'de ciocolata 70/50 g',
                price: 70.00,
                img: 'fondant.png'
            },
            {
                name: 'Inghetata adevarata',
                description: '(Plombir/Ciocolata /Nocciola/ Fistic/Mure,Capsuna ,1 bila  50 g',
                price: 15.00,
                img: 'inghetata_adevarata.png'
            },
        ]
    }
]
export const toppings: ArrayOfSupplementsItems = [
    {
        name: 'Becon',
        price: 25
    }, {
        name: 'Sunca',
        price: 25
    }, {
        name: 'Cascaval',
        price: 15
    }, {
        name: 'Branza',
        price: 15
    }, {
        name: 'Ciuperci',
        price: 15
    }, {
        name: 'Slanina',
        price: 25
    }, {
        name: 'Salam picant',
        price: 25
    }
]
export const sauces: ArrayOfSupplementsItems = [
    {
        name: 'Sos caesar',
        price: 15
    },
    {
        name: 'Sos tartar',
        price: 10
    },
    {
        name: 'Sos de usturoi',
        price: 10
    },
    {
        name: 'Sos de cascaval',
        price: 15
    },
    {
        name: 'Maioneza',
        price: 10
    },
    {
        name: 'Ketchup',
        price: 10
    },
    {
        name: 'Smantana',
        price: 10
    },
    {
        name: 'Adjica',
        price: 10
    },
    {
        name: 'Miere de albini',
        price: 15
    }
];
export let translatedProducts:  MenuSection[] = [
    {
        sectionName: 'breakFast',
        id: links.breakfast,
        products: [
            {
                "img": "brinzoaice.png",
                "price": 60,
                "description": "cheeseBallsDescription",
                "name": "cheeseBalls"
            },
            {
                "img": "omleta_cu_salata.png",
                "price": 50,
                "description": "omeletteWithSaladDescription",
                "name": "omeletteWithSalad"
            },
            {
                "img": "ochiuri.png",
                "price": 60,
                "description": "eggsWithBaconDescription",
                "name": "eggsWithBacon"
            },
            {
                "img": "clatite.png",
                "price": 60,
                "description": "pancakesDescription",
                "name": "pancakes"
            },
            {
                "img": "terci_de_ovaz.png",
                "price": 35,
                "description": "oatmealDescription",
                "name": "oatmeal"
            },
            {
                "img": "croissant.png",
                "price": 35,
                "description": "croissantDescription",
                "name": "croissant"
            }

        ]
    },
    {
        sectionName: 'supe',
        id: links.soup,
        products: [
            {
                "img": "bors_rosu.png",
                "price": 60,
                "description": "descriptionBorsRosu",
                "name": "borsRosu"
            },
            {
                "img": "zeama_de_gaina.png",
                "price": 55,
                "description": "descriptionZeamaDeGaina",
                "name": "zeamaDeGaina"
            },
            {
                "img": "soleanca.png",
                "price": 60,
                "description": "descriptionSoleanca",
                "name": "soleanca"
            },
            {
                "img": "supa_de_spanac.png",
                "price": 70,
                "description": "descriptionSupaDeSpanac",
                "name": "supaDeSpanac"
            },
            {
                "img": "crem_supa.png",
                "price": 55,
                "description": "descriptionCremSupa",
                "name": "cremSupa"
            }
        ]
    },
    {
        sectionName: 'salads',
        id: links.salads,
        products: [
            {
                "img": "salata_shopski.png",
                "price": 70,
                "description": "descriptionSalataShopski",
                "name": "salataShopski"
            },
            {
                "img": "salata_caesar.png",
                "price": 90,
                "description": "descriptionSalataCaesar",
                "name": "salataCaesar"
            },
            {
                "img": "salata_de_varza.png",
                "price": 40,
                "description": "descriptionSalataDeVarza",
                "name": "salataDeVarza"
            },
            {
                "img": "salata_cu_varza_murata.png",
                "price": 40,
                "description": "descriptionSalataCuVarzaMurata",
                "name": "salataCuVarzaMurata"
            },
            {
                "img": "salata_exotic.png",
                "price": 75,
                "description": "descriptionSalataExotic",
                "name": "salataExotic"
            },
            {
                "img": "salata_mozzarella_perle.png",
                "price": 75,
                "description": "descriptionSalataMozzarellaPerle",
                "name": "salataMozzarellaPerle"
            },
            {
                "img": "salata_calda.png",
                "price": 100,
                "description": "descriptionSalataCalda",
                "name": "salataCalda"
            },
            {
                "img": "salata_din_legume.png",
                "price": 75,
                "description": "roasted_vegetables",
                "name": "vegetable_salad"
            },
            {
                "img": "salata_cu_ton.png",
                "price": 95,
                "description": "tuna",
                "name": "tuna_salad"
            },
            {
                "img": "mix_de_legume.png",
                "price": 60,
                "description": "vegetable_mix",
                "name": "vegetable_mix"
            }
        ]
    },
    {
        sectionName: 'goldSnacks',
        id: links.goldSnacks,
        products: [

            {
                "img": "hering_cu_cartofi_fierti.png",
                "price": 70,
                "description": "cuCartofiFierti100250g",
                "name": "heringCuCartofiFierti"
            },
            {
                "img": "gingerica.png",
                "price": 70,
                "description": "cuCartofiFierti10025050g",
                "name": "gingerica"
            },
            {
                "img": "platou_de_legume.png",
                "price": 90,
                "description": "proaspete450g",
                "name": "platouDeLegume"
            },
            {
                "img": "platou_de_cascavaluri.png",
                "price": 120,
                "description": "deLaFermaNoastra300g",
                "name": "platouDeCascavaluri"
            },
            {
                "img": "platou_de_slanina.png",
                "price": 90,
                "description": "380g",
                "name": "platouDeSlanina"
            },
            {
                "img": "platou_de_salamuri.png",
                "price": 140,
                "description": "250g",
                "name": "platouDeSalamuri"
            },
            {
                "img": "platou_de_muraturi.png",
                "price": 60,
                "description": "plate_of_pickles_description",
                "name": "plate_of_pickles"
            },
            {
                "img": "burratta_cu_salata.png",
                "price": 99,
                "description": "burrata_with_salad_description",
                "name": "burrata_with_salad"
            },
            {
                "img": "bruschete.png",
                "price": 85,
                "description": "bruschetta_with_salmon_description",
                "name": "bruschetta_with_salmon"
            },
            {
                "img": "bruschete_mozzarella.png",
                "price": 65,
                "description": "bruschetta_with_mozzarella_description",
                "name": "bruschetta_with_mozzarella"
            },
            {
                "img": "bruschete_rosbif.png",
                "price": 70,
                "description": "bruschetta_with_roast_beef_description",
                "name": "bruschetta_with_roast_beef"
            },
        ]
    },
    {
        sectionName: 'hostSnack',
        id: links.hostSnack,
        products: [
            {
                "img": "cascaval_buffalo.png",
                "price": 140,
                "description": "teleggioPane",
                "name": "cascavalBuffalo"
            },
            {
                "img": "aripioare_de_pui.png",
                "price": 85,
                "description": "cuCartofiPai",
                "name": "aripioareDePui"
            },
            {
                "img": "nughete_de_pui.png",
                "price": 85,
                "description": "cuCartofiPai",
                "name": "nugheteDePui"
            },
            {
                "img": "placinte_in_asortiment.png",
                "price": 40,
                "description": "twoHundredGrams",
                "name": "placinteInAsortiment"
            }
        ]
    },
    {
        sectionName: 'beerSnack',
        id: links.beerSnack,
        products: [
            {
                "img": "nacios.png",
                "price": 40,
                "description": "50g/50g",
                "name": "nacios"
            },
            {
                "img": "crutoane_cu_usturoi.png",
                "price": 40,
                "description": "250/50 g",
                "name": "crutoane_cu_usturoi"
            },
            {
                "img": "migdale_prajite.png",
                "price": 60,
                "description": "100 g",
                "name": "migdale_prajite"
            },
            {
                "img": "pietrosel.png",
                "price": 65,
                "description": "130/50 g",
                "name": "pietrosel"
            },
            {
                "img": "ineluse.png",
                "price": 60,
                "description": "лук+соус тартар 130/50 g",
                "name": "ineluse_ceapa"
            },
            {
                "img": "ineluse_calmar.png",
                "price": 70,
                "description": "кальмар+соус тартар 130/50 g",
                "name": "ineluse_calmar"
            },
            {
                "img": "basturma_de_vita.png",
                "price": 70,
                "description": "50 g",
                "name": "basturma_de_vita"
            },
        ]
    },
    {
        sectionName: 'mainDishes',
        id: links.mainDishes,
        products: [
            {
                "img": "ciolan_de_proc.png",
                "price": 199,
                "description": "pork_shank_description",
                "name": "pork_shank"
            },
            {
                "img": "guleas_unguresc.png",
                "price": 80,
                "description": "hungarian_goulash_description",
                "name": "hungarian_goulash"
            },
            {
                "img": "file_de_somon.png",
                "price": 170,
                "description": "grilled_salmon_description",
                "name": "grilled_salmon"
            },
            {
                "img": "tocanita_de_iepuras.png",
                "price": 95,
                "description": "rabbit_stew_description",
                "name": "rabbit_stew"
            },
            {
                "img": "paste_cu_carne.png",
                "price": 90,
                "description": "pasta_with_beef_description",
                "name": "pasta_with_beef"
            },
            {
                "img": "paste_cu_somon.png",
                "price": 110,
                "description": "pasta_with_salmon_description",
                "name": "pasta_with_salmon"
            },
            {
                "img": "piept_de_pui.png",
                "price": 75,
                "description": "chickenBreastDescription",
                "name": "chickenBreast"
            },
            {
                "img": "frigarui_de_pui.png",
                "price": 95,
                "description": "chickenSkewersDescription",
                "name": "chickenSkewers"
            },
            {
                "img": "frigarui_de_porc.png",
                "price": 105,
                "description": "porkSkewersDescription",
                "name": "porkSkewers"
            },
            {
                "img": "frigarui_de_vita.png",
                "price": 155,
                "description": "beefSkewersDescription",
                "name": "beefSkewers"
            },
            {
                "img": "mici_de_casa.png",
                "price": 90,
                "description": "homemadeMiciDescription",
                "name": "homemadeMici"
            },
            {
                "img": "steak.png",
                "price": 155,
                "description": "beefSteakDescription",
                "name": "beefSteak"
            },
            {
                "img": "carne_de_bivol_inabusit_in_vin.png",
                "price": 140,
                "description": "bisonStewInWineDescription",
                "name": "bisonStewInWine"
            },
            {
                "img": "snitel.png",
                "price": 75,
                "description": "chickenSchnitzelDescription",
                "name": "chickenSchnitzel"
            },
            {
                "img": "burger_de_pui.png",
                "price": 90,
                "description": "chickenBurgerDescription",
                "name": "chickenBurger"
            },
            {
                "img": "burger_de_vita.png",
                "price": 90,
                "description": "beefBurgerDescription",
                "name": "beefBurger"
            },
            {
                "img": "carnita_de_curcan.png",
                "price": 155,
                "description": "turkeyMeatWithPotatoesDescription",
                "name": "turkeyMeatWithPotatoes"
            },
            {
                "img": "costita_de_vitel.png",
                "price": 35,
                "description": "beefRibsDescription",
                "name": "beefRibs"
            },
            {
                "img": "platou_de_carne_gril.png",
                "price": 600,
                "description": "grilledMeatPlatterDescription",
                "name": "grilledMeatPlatter"
            }
        ]
    },
    {
        sectionName: 'gaskets',
        id: links.gaskets,
        products: [
            {
                "img": "cartofi_copti.png",
                "price": 40,
                "description": "roastedPotatoesDescription",
                "name": "roastedPotatoes"
            },
            {
                "img": "cartofi_pai_ketchup.png",
                "price": 35,
                "description": "friesAndKetchupDescription",
                "name": "friesAndKetchup"
            },
            {
                "img": "piure_de_cartofi.png",
                "price": 30,
                "description": "mashedPotatoesDescription",
                "name": "mashedPotatoes"
            },
            {
                "img": "cartofi_prajiti_ca_acasa.png",
                "price": 50,
                "description": "homeStyleFriedPotatoesDescription",
                "name": "homeStyleFriedPotatoes"
            },
            {
                "img": "mamaliga.png",
                "price": 50,
                "description": "polentaDescription",
                "name": "polenta"
            },
            {
                "img": "orez_cu_legume.png",
                "price": 35,
                "description": "riceWithVegetablesDescription",
                "name": "riceWithVegetables"
            },
            {
                "img": "piure_de_brocoli.png",
                "price": 45,
                "description": "broccoliPureeDescription",
                "name": "broccoliPuree"
            },
            {
                "img": "pastari.png",
                "price": 40,
                "description": "pastaDescription",
                "name": "pasta"
            },
            {
                "img": "paste_cu_unt.png",
                "price": 30,
                "description": "pastaWithButterDescription",
                "name": "pastaWithButter"
            },
            {
                "img": "fasole_cu_legume.png",
                "price": 50,
                "description": "beanVegetableStewDescription",
                "name": "beanVegetableStew"
            },
            {
                "img": "varza_calita.png",
                "price": 40,
                "description": "braisedCabbageDescription",
                "name": "braisedCabbage"
            }
        ]
    },
    {
        sectionName: 'pizza',
        id: links.pizza,
        products: [
            {
                "img": "margherita.png",
                "price": 85,
                "description": "margheritaDescription",
                "name": "margherita"
            },
            {
                "img": "diavola.png",
                "price": 95,
                "description": "diavolaDescription",
                "name": "diavola"
            },
            {
                "img": "tonno.png",
                "price": 115,
                "description": "tonnoDescription",
                "name": "tonno"
            },
            {
                "img": "capriciossa.png",
                "price": 110,
                "description": "capriciossaDescription",
                "name": "capriciossa"
            },
            {
                "img": "pollo.png",
                "price": 110,
                "description": "polloDescription",
                "name": "pollo"
            },
            {
                "img": "prosciutto_e_funghi.png",
                "price": 98,
                "description": "prosciuttoEFunghiDescription",
                "name": "prosciuttoEFunghi"
            },
            {
                "img": "quattro_formaggi.png",
                "price": 115,
                "description": "quattroFormaggiDescription",
                "name": "quattroFormaggi"
            },
            {
                "img": "ferma_cu_origini.png",
                "price": 110,
                "description": "fermaCuOriginiDescription",
                "name": "fermaCuOrigini"
            },
            {
                "img": "carbonara.png",
                "price": 98,
                "description": "carbonaraDescription",
                "name": "carbonara"
            },
            {
                "img": "leggera.png",
                "price": 115,
                "description": "leggeraDescription",
                "name": "leggera"
            },
            {
                "img": "pizza_praga.png",
                "price": 105,
                "description": "pizzaPragaDescription",
                "name": "pizzaPraga"
            },
            {
                "img": "vegetariana.png",
                "price": 85,
                "description": "vegetarianaDescription",
                "name": "vegetariana"
            },
            {
                "img": "focaccia.png",
                "price": 25,
                "description": "focacciaDescription",
                "name": "focaccia"
            }
        ]
    },
    {
        sectionName: 'deserts',
        id: links.desserts,
        products: [
            {
                name: 'napoleon',
                description: 'napoleonDescription',
                price: 65.00,
                img: 'napoleon.png'
            },
            {
                name: 'medovic',
                description: 'medovicDescription',
                price: 65.00,
                img: 'medovic.png'
            },
            {
                name: 'gusmaLuiGuguta',
                description: 'gusmaLuiGugutaDescription',
                price: 65.00,
                img: 'cusma_lui_guguta.png'
            },
            {
                name: 'prajitura',
                description: 'prajituraDescription',
                price: 55.00,
                img: 'prajitura.png'
            },
            {
                name: 'pruneCuNuca',
                description: 'pruneCuNucaDescription',
                price: 65.00,
                img: 'prune_cu_nuca.png'
            },
            {
                name: 'fondant',
                description: 'fondantDescription',
                price: 70.00,
                img: 'fondant.png'
            },
            {
                name: 'inghetataAdevarata',
                description: 'inghetataAdevarataDescription',
                price: 15.00,
                img: 'inghetata_adevarata.png'
            },
        ]
    },
    {
        sectionName: 'Bauturi non Alcoolice',
        id: links.nonAlchogol,
        products: [
            {
                name: 'Guizza',
                description: '(apa plata/gazoasa) 500ml ',
                price: 15.00,
                img: 'guizza.png'
            },
            {
                name: 'Plose',
                description: '(apa plata/gazata) 250/750ml',
                price: '30/60.00',
                img: 'plose.png'
            },
            {
                name: 'Coca Cola,Sprite,Fanta',
                description: '300/500 ml',
                price: '20/25.00',
                img: 'coca_cola_sprite_fanta.png'
            },
            {
                name: 'Ceai rece',
                description: '500 ml',
                price: 25.00,
                img: 'ceai_rece.png'
            },
            {
                name: 'Suc Jaffa',
                description: '250/950 ml',
                price: '20/65.00',
                img: 'suc_jaffa.png'
            },
            {
                name: 'Suc Fresh',
                description: 'orange/grapefruit 250 ml',
                price: 45.00,
                img: 'suc_fresh.png'
            },
            {
                name: 'Borjomi',
                description: '500 ml',
                price: 45.00,
                img: 'borjomi.png'
            },
        ]
    },
    {
        sectionName: 'Bauturi de casa',
        id: links.milkShakes,
        products: [
            {
                name: 'Milkshake',
                description: '350 ml  ',
                price: 45.00,
                img: 'milkshake.png'
            },
            {
                name: 'Limonada clasica',
                description: '350 ml/1L',
                price: '40/70.00',
                img: 'limonada_clasica.png'
            },
            {
                name: 'Limonada de capsuna',
                description: '350 ml/1L',
                price: '40/70.00',
                img: 'limonada_de_capsuna.png'
            },
            {
                name: 'Ceai rece de casa',
                description: '350 ml/1L',
                price: '35/65.00',
                img: 'ceai_rece_de_casa.png'
            },
            {
                name: 'Pina Colada',
                description: '250/950 ml',
                price: '45/65.00',
                img: 'pina_colada.png'
            },
            {
                name: 'Frappe',
                description: '350 ml',
                price: 35.00,
                img: 'frappe.png'
            }
        ]
    },
    {
        sectionName: 'Bauturi Fierbinte',
        id: links.coffee,
        products: [
            {
                name: 'Espresso',
                description: '30 ml ',
                price: 20.00,
                img: 'espresso.png'
            },
            {
                name: 'Americano',
                description: '100 ml',
                price: 20.00,
                img: 'americano.png'
            },
            {
                name: 'Cappuccino',
                description: '250ml',
                price: 30.00,
                img: 'cappuccino.png'
            },
            {
                name: 'Latte',
                description: '300 ml',
                price: 30.00,
                img: 'latte.png'
            },
            {
                name: 'Mocaccino',
                description: '',
                price: 30.00,
                img: 'mocaccino.png'
            },
            {
                name: 'Cacao',
                description: '250 ml',
                price: 30.00,
                img: 'cacao.png'
            },
            {
                name: 'Ceai de catina',
                description: 'ghimbir si portocala ,450 ml',
                price: 50.00,
                img: 'ceai_de_catina.png'
            },
            {
                name: 'Ceai de Plante',
                description: '450 ml',
                price: 45.00,
                img: 'ceai_de_plante.png'
            },
        ]
    },
    {
        sectionName: 'Bauturi Alcoolice',
        id: links.alchogolCoctails,
        products: [
            {
                name: 'Aperol Spritz',
                description: '350  ml',
                price: 65.00,
                img: 'aperol_spritz.png'
            },
            {
                name: 'Gin tonic',
                description: '350 ml',
                price: 55.00,
                img: 'gin_tonic.png'
            },
            {
                name: 'Cuba Libre',
                description: '350 ml',
                price: 60.00,
                img: 'cuba_libre.png'
            },
            {
                name: 'Green Mexican',
                description: '60 ml',
                price: 55.00,
                img: 'green_mexican.png'
            },
            {
                name: 'Long Island Ice Tea',
                description: '',
                price: 90.00,
                img: 'long_island_ice_tea.png'
            },
            {
                name: 'Glintwein',
                description: '55 ml',
                price: 30.00,
                img: 'glintwein.png'
            }
        ]
    },
    {
        sectionName: 'BERE LA STICLâ,LA HALBA',
        id: links.alchogolCoctails,
        products: [
            {
                name: 'Pale Ale',
                description: '350  ml',
                price: 45.00,
                img: 'pale_ale.png'
            },
            {
                name: 'Efes pilsner',
                description: 'f/a ,c/a 500 ml',
                price: 40.00,
                img: 'efes_pilsner.png'
            },
            {
                name: 'Kozel',
                description: 'bruna / blonda 500 ml',
                price: 40.00,
                img: 'kozel.png'
            },
            {
                name: 'Corona Extra',
                description: '355 ml',
                price: 55.00,
                img: 'corona_extra.png'
            },
            {
                name: 'Hoegaarden',
                description: '330 ml',
                price: 50.00,
                img: 'hoegaarden.png'
            },
            {
                name: 'Franziskaner',
                description: 'Weissbier 500 ml',
                price: 60.00,
                img: 'franziskaner.png'
            },
            {
                name: 'Kronenbourg',
                description: '460 ml',
                price: 45.00,
                img: 'kronenbourg.png'
            },
            {
                name: 'Kozel blonda  HALBA',
                description: '500 ml',
                price: 35.00,
                img: 'kozel_blonda_halba.png'
            }
        ]
    },
    {
        sectionName: 'VINUL FAUTOR,ASCONI,BOSTAVAN,CRICOVA ',
        id: links.alchogolCoctails,
        products: [
            {
                name: 'Sauvignon Blanc Aligote',
                description: '(alb, sec) 0,75 ml',
                price: 210.00,
                img: 'sauvignon_blanc_aligote.png'
            },
            {
                name: 'Merlot Rara Neagra',
                description: '(rosu, sec) 0,75 ml',
                price: 210.00,
                img: 'merlot_rara_neagra.png'
            },
            {
                name: 'Merlot Feteasca Nearga',
                description: '(roz, sec)0,75 ml',
                price: 210.00,
                img: 'merlot_feteasca_nearga.png'
            },
            {
                name: 'Aurore Feteasca Neagra',
                description: '0,75 ml',
                price: 350.00,
                img: 'aurore_feteasca_neagra.png'
            },
            {
                name: 'Aurore Pinot Grigio',
                description: '0,75 ml',
                price: 350.00,
                img: 'aurore_pinot_grigio.png'
            },
            {
                name: 'Aurore Rara Neagra',
                description: '0,75 ml',
                price: 350.00,
                img: 'aurore_rara_neagra.png'
            },
            {
                name: 'Uneori Cabernet Sauvignon',
                description: '750 ml',
                price: 200.00,
                img: 'uneori_cabernet_sauvignon.png'
            },
            {
                name: 'Uneori Riesling',
                description: '750 ml',
                price: 200.00,
                img: 'uneori_riesling.png'
            },

            {
                name: 'Uneori Muscat Rose',
                description: '750 ml',
                price: 240.00,
                img: 'uneori_muscat_rose.png'
            },
            {
                name: 'Cabernet Sauvignon',
                description: '150/750 ml',
                price: '30/150.00',
                img: 'cabernet_sauvignon.png'
            },
            {
                name: 'Muscat Rose',
                description: '150/750 ml',
                price: '30/150.00',
                img: 'muscat_rose.png'
            },
            {
                name: 'Chardonnay',
                description: '150/750 ml ml',
                price: '30/150.00',
                img: 'chardonnay.png'
            },
            {
                name: 'Orasul Subteran Viorica',
                description: '750 ml',
                price: 200.00,
                img: 'orasul_subteran_viorica.png'
            },

            {
                name: 'Orasul Subteran',
                description: 'Cabernet /Rose  750 ml',
                price: 200.00,
                img: 'orasul_subteran_rose.png'
            },
            {
                name: 'Orasul Subteran',
                description: 'Feteasca Neagra 750 ml',
                price: 200.00,
                img: 'orasul_subteran_neagra.png'
            }
        ]
    },
    {
        sectionName: 'VIN SPUMANT ',
        id: links.alchogolCoctails,
        products: [
            {
                name: 'Lacrima Dulce',
                description: '750 ml',
                price: 170.00,
                img: 'lacrima_dulce.png'
            },
            {
                name: 'Alb Brut',
                description: '750 ml',
                price: 210.00,
                img: 'alb_brut.png'
            },
            {
                name: 'Crisseco',
                description: '150/ 750 ml',
                price: '35/170.00',
                img: 'crisseco.png'
            },
            {
                name: 'Asti Martini',
                description: '750 ml',
                price: 295.00,
                img: 'asti_martini.png'
            }
        ]
    },
    {
        sectionName: 'Bauturi alcoolici Tare',
        id: links.alchogolCoctails,
        products: [
            {
                name: 'Jagermeister',
                description: '50 ml',
                price: 50.00,
                img: 'jagermeister.png'
            },
            {
                name: 'Bailey’s',
                description: '50 ml',
                price: 50.00,
                img: 'bailey_s.png'
            },
            {
                name: 'Martini Rosso',
                description: '50 ml',
                price: 35.00,
                img: 'martini_rosso.png'
            },
            {
                name: 'Martini Bianco',
                description: '50 ml',
                price: 35.00,
                img: 'martini_bianco.png'
            },

            {
                name: 'Jose Cuervo',
                description: 'Reposado/ Silver 50 ml',
                price: 50.00,
                img: 'jose_cuervo.png'
            },
            {
                name: 'Tabacco',
                description: 'Silver Premium 50 ml',
                price: 40.00,
                img: 'tabacco.png'
            },
            {
                name: 'Bacardi',
                description: 'Oakheart 50 ml',
                price: 50.00,
                img: 'bacardi.png'
            },
            {
                name: 'Tuica de gutui,caise prune',
                description: '50 ml',
                price: 35.00,
                img: 'tuica_de_gutui_caise_prune.png'
            },
            {
                name: 'Nemiroff',
                description: '50 ml',
                price: 25.00,
                img: 'nemiroff.png'
            },


            {
                name: 'Finlandia',
                description: '50 ml',
                price: 35.00,
                img: 'finlandia.png'
            },
            {
                name: 'Bardar 5 ani',
                description: '50 ml',
                price: 30.00,
                img: 'bardar_5_ani.png'
            },
            {
                name: 'Bardar 7 ani',
                description: '50 ml',
                price: 45.00,
                img: 'bardar_7_ani.png'
            },
            {
                name: 'Calarasi 5 ani',
                description: '50 ml',
                price: 30.00,
                img: 'calarasi_5_ani.png'
            },
            {
                name: 'Calarasi 7 ani',
                description: '50 ml',
                price: 40.00,
                img: 'calarasi_7_ani.png'
            },
            {
                name: 'Balti 7 ani',
                description: '50 ml',
                price: 40.00,
                img: 'balti_7_ani.png'
            },
            {
                name: 'Speranta 9 ani',
                description: '50 ml',
                price: 50.00,
                img: 'speranta_9_ani.png'
            },
            {
                name: 'Bucuria 10 anii',
                description: '50 ml',
                price: 55.00,
                img: 'bucuria_10_anii.png'
            },
            {
                name: 'Jameson',
                description: '50 ml',
                price: 50.00,
                img: 'jameson.png'
            },
            {
                name: 'Jack Daniel’s',
                description: '50 ml',
                price: 50.00,
                img: 'jack_daniel_s.png'
            }
        ]
    },
]
export const translatedSauces: ArrayOfSupplementsItems = [
    {
        "name": "sosCaesar",
        "price": 15
    },
    {
        "name": "sosTartar",
        "price": 10
    },
    {
        "name": "sosDeUsturoi",
        "price": 10
    },
    {
        "name": "sosDeCascaval",
        "price": 15
    },
    {
        "name": "maioneza",
        "price": 10
    },
    {
        "name": "ketchup",
        "price": 10
    },
    {
        "name": "smantana",
        "price": 10
    },
    {
        "name": "adjica",
        "price": 10
    }
]
export const translatedToppings: ArrayOfSupplementsItems = [
    {
        "name": "miereDeAlbini",
        "price": 15
    },
    {
        "name": "becon",
        "price": 25
    },
    {
        "name": "sunca",
        "price": 25
    },
    {
        "name": "cascaval",
        "price": 15
    },
    {
        "name": "branza",
        "price": 15
    },
    {
        "name": "ciuperci",
        "price": 15
    },
    {
        "name": "slanina",
        "price": 25
    },
    {
        "name": "salamPicant",
        "price": 25
    }
]