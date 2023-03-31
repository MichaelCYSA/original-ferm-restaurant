export interface Product {
     name: string;
     price: number;
     description: string;
     img?: string
}

export interface MenuSection {
     sectionName: string;
     products?: Product[]
}

export const products: MenuSection[] = [
    {
        sectionName: 'Mic dejun',
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
        sectionName: 'GARNITURI'
    },
    {
        sectionName: 'PIZZA'
    }
]