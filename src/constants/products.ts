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
                img: '/brinzoaice.png'
            },
            {
                name: 'Omleta cu salata',
                description: '200g',
                price: 50.00,
                img: '/omleta_cu_salata.png'
            },
            {
                name: 'Ochiuri',
                description: 'cu becon 2buc/50g',
                price: 60.00,
                img: '/ochiuri.png'
            },
            {
                name: 'Clatite',
                description: 'cu gem 250g',
                price: 60.00,
                img: '/clatite.png'
            },
            {
                name: 'Terci de ovaz',
                description: 'pe lapte,apa ,cu gem 300g',
                price: 35.00,
                img: '/terci_de_ovaz.png'
            },
            {
                name: 'Croissant',
                description: 'in sortiment 1 buc',
                price: 35.00,
                img: '/croissant.png'
            }
        ]
    },
    {
        sectionName: 'Supe',
        products: [
            {
                name: 'Bors rosu',
                description: 'cu carne de vita 350/50/50 g',
                price: 60.00
            },
            {
                name: 'Zeama de gaina',
                description: 'de casa 350/50 g',
                price: 55.00
            },
            {
                name: 'Soleanca',
                description: '350/50 g',
                price: 60.00
            },
            {
                name: 'Supa de spanac',
                description: '250/30 g ',
                price: 70.00
            },
            {
                name: 'Crem supa',
                description: 'de cascaval 380 /30g',
                price: 55.00
            },
        ]
    },
    {
        sectionName: 'Salate'
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