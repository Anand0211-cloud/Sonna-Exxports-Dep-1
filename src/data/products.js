import roundNeck1 from '../assets/Round neck 1.png';
import roundNeck2 from '../assets/Round neck 2.png';
import roundNeck3 from '../assets/Round neck 3.jpg';
import roundNeck4 from '../assets/Round neck 4.jpg';
import roundNeck5 from '../assets/Round neck 5.jpg';
import roundNeck6 from '../assets/Round neck 6.jpg';

import polo1 from '../assets/polo 1.png';
import polo2 from '../assets/polo 2.png';
import polo3 from '../assets/polo 3.jpg';
import polo4 from '../assets/polo 4.jpg';
import polo5 from '../assets/polo 5.jpg';
import polo6 from '../assets/polo 6.jpg';

import hoodie1 from '../assets/hoodie 1.png';
import hoodie2 from '../assets/hoodie 2.png';
import hoodie3 from '../assets/hoodie 3.jpg';
import hoodie4 from '../assets/hoodie 4.jpg';
import hoodie5 from '../assets/hoodie 5.jpg';
import hoodie6 from '../assets/hoodie 6.jpg';

import sweatshirt1 from '../assets/sweatshirt 1.png';
import sweatshirt2 from '../assets/sweatshirt 2.png';
import sweatshirt3 from '../assets/sweatshirt 3.jpg';
import sweatshirt4 from '../assets/sweatshirt 4.jpg';
import sweatshirt5 from '../assets/sweatshirt 5.jpg';
import sweatshirt6 from '../assets/sweatshirt 6.jpg';

import oversized1 from '../assets/oversized 1.png';
import oversized2 from '../assets/oversized 2.png';
import oversized3 from '../assets/oversized 3.jpg';
import oversized4 from '../assets/oversized 4.jpg';
import oversized5 from '../assets/oversized 5.jpg';
import oversized6 from '../assets/oversized 6.jpg';

import henley1 from '../assets/henley 1.png';
import henley2 from '../assets/henley 2.png';
import henley3 from '../assets/henley 3.png';

import tank1 from '../assets/tank 1.png';
import tank2 from '../assets/tank 2.png';
import tank3 from '../assets/tank 3.jpg';
import tank4 from '../assets/tank 4.jpg';
import tank5 from '../assets/tank 5.jpg';
import tank6 from '../assets/tank 6.jpg';

import fullSleeve1 from '../assets/Full Sleeve T-Shirt 1.jpg';
import fullSleeve2 from '../assets/Full Sleeve T-Shirt 2.jpg';
import fullSleeve3 from '../assets/Full Sleeve T-Shirt 3.jpg';
import fullSleeve4 from '../assets/Full Sleeve T-Shirt  4.jpg';
import fullSleeve5 from '../assets/Full Sleeve T-Shirt 5.jpg';
import fullSleeve6 from '../assets/Full Sleeve T-Shirt 6.jpg';

export const products = [
    // Menswear
    {
        id: 1,
        category: 'Menswear',
        name: 'Round Neck',
        features: ['Premium Cotton', 'Classic Fit', 'Breathable Fabric'],
        image: roundNeck1,
        hoverImage: roundNeck2,
        images: [roundNeck1, roundNeck2, roundNeck3, roundNeck4, roundNeck5, roundNeck6],
        alt: 'Man wearing a classic white round neck t-shirt',
        ref: 'SX–MW–RN–01',
        description: 'A core essential in men’s apparel, our Round Neck T-shirt is manufactured for comfort, structure, and long-term durability. Designed for bulk production, it serves as a reliable base for private label collections and wholesale distribution.',
        specifications: {
            fabric: '100% Cotton / Cotton Blends (Customizable)',
            gsm: '160–220 GSM',
            fit: 'Regular / Slim / Oversized',
            moq: '300–500 Pieces'
        },
        customization: [
            'Custom Labels & Hangtags',
            'Embroidery or Print Detailing',
            'Fabric & GSM Customization',
            'Color Development'
        ]
    },
    {
        id: 2,
        category: 'Menswear',
        name: 'Polo',
        features: ['Pique Cotton', 'Ribbed Collar', 'Smart Casual'],
        image: polo1,
        hoverImage: polo2,
        images: [polo1, polo2, polo3, polo4, polo5, polo6],
        alt: 'Classic polo shirt with textured fabric',
        ref: 'SX–MW–PO–02',
        description: 'Our men’s Polo T-shirt is structured for retail collections and corporate requirements. Manufactured with precision stitching and collar reinforcement, it balances comfort with a refined finish suitable for private labels and uniform programs.',
        specifications: {
            fabric: 'Cotton Piqué / Blended Piqué',
            gsm: '200–240 GSM',
            fit: 'Regular / Tailored Fit',
            moq: '300–500 Pieces'
        },
        customization: [
            'Custom Collar & Placket Styles',
            'Embroidery Branding',
            'Custom Labeling',
            'Bespoke Packaging'
        ]
    },
    {
        id: 3,
        category: 'Menswear',
        name: 'Hoodies',
        features: ['Fleece Lined', 'Adjustable Hood', 'Kangaroo Pocket'],
        image: hoodie1,
        hoverImage: hoodie2,
        images: [hoodie1, hoodie2, hoodie3, hoodie4, hoodie5, hoodie6],
        alt: 'Comfortable oversized hoodie',
        ref: 'SX–MW–HD–03',
        description: 'Built for structured bulk manufacturing, our Hoodies are designed with reinforced seams and premium fabric blends. Suitable for retail brands, winter collections, and promotional apparel programs.',
        specifications: {
            fabric: 'Cotton Fleece / Terry / Blends',
            gsm: '280–350 GSM',
            fit: 'Regular / Oversized',
            moq: '300–500 Pieces'
        },
        customization: [
            'Screen Printing',
            'Puff & Specialty Prints',
            'Custom Drawcords & Trims',
            'Private Labeling'
        ]
    },
    {
        id: 4,
        category: 'Menswear',
        name: 'Sweatshirt',
        features: ['Cotton Blend', 'Ribbed Cuffs', 'Relaxed Fit'],
        image: sweatshirt1,
        hoverImage: sweatshirt2,
        images: [sweatshirt1, sweatshirt2, sweatshirt3, sweatshirt4, sweatshirt5, sweatshirt6],
        alt: 'Soft premium sweatshirt',
        ref: 'SX–MW–SW–04',
        description: 'Our men’s Sweatshirts are manufactured for durability and structured fall. Designed for scalable production, they offer clean finishing and consistent sizing across bulk orders.',
        specifications: {
            fabric: 'Fleece / French Terry',
            gsm: '260–320 GSM',
            fit: 'Regular / Relaxed',
            moq: '300–500 Pieces'
        },
        customization: [
            'Embroidery & Print',
            'Rib & Cuff Variations',
            'Custom Branding',
            'Fabric Customization'
        ]
    },
    {
        id: 5,
        category: 'Menswear',
        name: 'Full Sleeve T-Shirt',
        features: ['Streetwear Style', 'Drop Shoulder', 'Heavyweight Fabric'],
        image: fullSleeve1,
        hoverImage: fullSleeve2,
        images: [fullSleeve1, fullSleeve2, fullSleeve3, fullSleeve4, fullSleeve5, fullSleeve6],
        alt: 'Long sleeve shirt',
        ref: 'SX–MW–FS–05',
        description: 'Designed for transitional collections and layering, our Full Sleeve T-shirts combine breathable fabric with reinforced stitching for reliable export-quality production.',
        specifications: {
            fabric: '100% Cotton / Blends',
            gsm: '160–220 GSM',
            fit: 'Regular / Slim',
            moq: '300–500 Pieces'
        },
        customization: [
            'Print & Embroidery',
            'Custom Sleeve Detailing',
            'Labels & Tags',
            'Color Matching'
        ]
    },
    {
        id: 6,
        category: 'Menswear',
        name: 'Oversized T-Shirt',
        features: ['Layering Essential', 'Soft Touch', 'Tailored Fit'],
        image: oversized1,
        hoverImage: oversized2,
        images: [oversized1, oversized2, oversized3, oversized4, oversized5, oversized6],
        alt: 'Trendy oversized t-shirt',
        ref: 'SX–MW–OS–06',
        description: 'Our Oversized T-shirts are developed for contemporary streetwear and modern retail collections. Manufactured with controlled proportions and consistent finishing for scalable production.',
        specifications: {
            fabric: 'Premium Cotton / Heavy Cotton',
            gsm: '220–260 GSM',
            fit: 'Oversized / Relaxed',
            moq: '300–500 Pieces'
        },
        customization: [
            'Heavyweight Fabric Options',
            'Puff Print & Graphic Printing',
            'Custom Neck Rib',
            'Private Labeling'
        ]
    },
    {
        id: 7,
        category: 'Menswear',
        name: 'Henley T-Shirt',
        features: ['Button Placket', 'Waffle Knit', 'Casual Comfort'],
        image: henley1,
        hoverImage: henley2,
        images: [henley1, henley2, henley3],
        alt: 'Stylish henley neck shirt',
        ref: 'SX–MW–HN–07',
        description: 'The Henley combines structured casual design with durable construction. Ideal for premium retail and private label collections requiring subtle detailing and refined finishing.',
        specifications: {
            fabric: 'Cotton / Blended Knit',
            gsm: '180–220 GSM',
            fit: 'Regular / Slim',
            moq: '300–500 Pieces'
        },
        customization: [
            'Button Placket Variations',
            'Embroidery',
            'Custom Labeling',
            'Fabric Customization'
        ]
    },
    {
        id: 8,
        category: 'Menswear',
        name: 'Tank',
        features: ['Summer Essential', 'Athletic Cut', 'Lightweight'],
        image: tank1,
        hoverImage: tank2,
        images: [tank1, tank2, tank3, tank4, tank5, tank6],
        alt: 'Classic ribbed tank top',
        ref: 'SX–MW–TK–08',
        description: 'Manufactured for activewear, summer collections, and promotional requirements, our Tanks are produced with breathable fabrics and structured armhole finishing for export-quality standards.',
        specifications: {
            fabric: 'Cotton / Performance Blends',
            gsm: '140–180 GSM',
            fit: 'Regular / Athletic',
            moq: '300–500 Pieces'
        },
        customization: [
            'Print & Branding',
            'Custom Cuts',
            'Labeling & Tags',
            'Color Development'
        ]
    },

];
