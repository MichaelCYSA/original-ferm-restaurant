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
        sectionName: 'GUSTARI RECI'
    },
    {
        sectionName: 'GUSTARI LA BERE'
    },
    {
        sectionName: 'BUCATE PRINCIPALE'
    },
    {
        sectionName: 'GARNITURI'
    },
    {
        sectionName: 'PIZZA'
    },
    {
        sectionName: 'PIZZA'
    }
]