import roundNeck1 from '../assets/Round neck 1.png';
import roundNeck2 from '../assets/Round neck 2.png';
import roundNeck3 from '../assets/round neck 3.png';
import polo1 from '../assets/polo 1.png';
import polo2 from '../assets/polo 2.png';
import polo3 from '../assets/polo 3.png';
import hoodie1 from '../assets/hoodie 1.png';
import hoodie2 from '../assets/hoodie 2.png';
import hoodie3 from '../assets/hoodie 3.png';
import sweatshirt1 from '../assets/sweatshirt 1.png';
import sweatshirt2 from '../assets/sweatshirt 2.png';
import sweatshirt3 from '../assets/sweatshirt 3.png';
import oversized1 from '../assets/oversized 1.png';
import oversized2 from '../assets/oversized 2.png';
import oversized3 from '../assets/oversized 3.png';
import henley1 from '../assets/henley 1.png';
import henley2 from '../assets/henley 2.png';
import henley3 from '../assets/henley 3.png';
import tank1 from '../assets/tank 1.png';
import tank2 from '../assets/tank 2.png';
import tank3 from '../assets/tank 3.png';

export const products = [
    // Menswear
    {
        id: 1,
        category: 'Menswear',
        name: 'Round Neck',
        features: ['Premium Cotton', 'Classic Fit', 'Breathable Fabric'],
        image: roundNeck1,
        hoverImage: roundNeck2,
        images: [roundNeck1, roundNeck2, roundNeck3],
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
        images: [polo1, polo2, polo3],
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
        images: [hoodie1, hoodie2, hoodie3],
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
        images: [sweatshirt1, sweatshirt2, sweatshirt3],
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
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdO6S9dedDKE8jV_-c5UkDaskWSdFqzP6iyibHQWyABr5mpu0vl74NqDqvThtgIecuilcEsEaj8XpgXeeiPSWdVk4UKEtwPTDUl0BH5P94pmp1Dx_wudOSQ0djeoGmLGfwFZNdxAGRSOgeo_aetqQWqn3EinroQ6fZY0geT3m-grjWYpYX55itUsG08Fu6AAU4pzNVmwD2o8HtTIcmXu0_upiiawM6cO-mUVdJ1DS2CHcva66weXoQjS_5Nxifg19G2hgLKorPkw',
        hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNXz8Is0KJcxspNOCNabpq8ApXiGHbLjcCVkwlU96GW9Rh0EbOLi9_EInAgOI2jF8bfkIKtFBwaVE7oG4Sg-ZAfh2VNWjMIx0z0rQG9qZmhzFd-psHAb9KwOHQcAt9ELXv0ws4lK2GNnR9uTAK2EFLohtUdQ-HpRN9AMK8dJgBOAJWugjbvNqiQkGR4pZS-nY4IlYHcNWu-Evtv6erZbg9n0BVRglipye2B5Z1W6hRNuLgbEOQkSZLx9yM1Fh5uZ2HWr04G3B1GQ',
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
        images: [oversized1, oversized2, oversized3],
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
        images: [tank1, tank2, tank3],
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
