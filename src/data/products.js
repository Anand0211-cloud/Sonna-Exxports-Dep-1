import classicTShirt1 from '../assets/1. classic t shirt/1.png';
import classicTShirt2 from '../assets/1. classic t shirt/2.png';
import classicTShirt3 from '../assets/1. classic t shirt/3.png';
import classicTShirt4 from '../assets/1. classic t shirt/4.png';
import classicTShirt5 from '../assets/1. classic t shirt/5.png';
import classicTShirt6 from '../assets/1. classic t shirt/6.png';

import dtgPrinting1 from '../assets/2. DTG Printing/60.png';
import dtgPrinting2 from '../assets/2. DTG Printing/61.png';
import dtgPrinting3 from '../assets/2. DTG Printing/62.png';
import dtgPrinting4 from '../assets/2. DTG Printing/63.png';

import classicPolo1 from '../assets/3. classic polo/7.png';
import classicPolo2 from '../assets/3. classic polo/8.png';
import classicPolo3 from '../assets/3. classic polo/9.png';
import classicPolo4 from '../assets/3. classic polo/10.png';
import classicPolo5 from '../assets/3. classic polo/11.png';
import classicPolo6 from '../assets/3. classic polo/12.png';

import classicHoodie1 from '../assets/4. classic hoodie/13.png';
import classicHoodie2 from '../assets/4. classic hoodie/14.png';
import classicHoodie3 from '../assets/4. classic hoodie/15.png';
import classicHoodie4 from '../assets/4. classic hoodie/16.png';
import classicHoodie5 from '../assets/4. classic hoodie/17.png';
import classicHoodie6 from '../assets/4. classic hoodie/18.png';

import embossedPrinting1 from '../assets/5. Embossed Printing/68.png';
import embossedPrinting2 from '../assets/5. Embossed Printing/69.png';
import embossedPrinting3 from '../assets/5. Embossed Printing/70.png';
import embossedPrinting4 from '../assets/5. Embossed Printing/71.png';

import classicSweatshirt1 from '../assets/6. classic sweatshirt/19.png';
import classicSweatshirt2 from '../assets/6. classic sweatshirt/20.png';
import classicSweatshirt3 from '../assets/6. classic sweatshirt/21.png';
import classicSweatshirt4 from '../assets/6. classic sweatshirt/22.png';
import classicSweatshirt5 from '../assets/6. classic sweatshirt/23.png';
import classicSweatshirt6 from '../assets/6. classic sweatshirt/24.png';

import screenPrinting1 from '../assets/7. Screen Printing/64.png';
import screenPrinting2 from '../assets/7. Screen Printing/65.png';
import screenPrinting3 from '../assets/7. Screen Printing/66.png';
import screenPrinting4 from '../assets/7. Screen Printing/67.png';

import classicOversized1 from '../assets/8. classic oversized/31.png';
import classicOversized2 from '../assets/8. classic oversized/32.png';
import classicOversized3 from '../assets/8. classic oversized/33.png';
import classicOversized4 from '../assets/8. classic oversized/34.png';
import classicOversized5 from '../assets/8. classic oversized/35.png';
import classicOversized6 from '../assets/8. classic oversized/36.png';

import acidWash1 from '../assets/9. Acid Wash/72.png';
import acidWash2 from '../assets/9. Acid Wash/73.png';
import acidWash3 from '../assets/9. Acid Wash/74.png';
import acidWash4 from '../assets/9. Acid Wash/75.png';

import classicHenley1 from '../assets/10. classic henley neck/25.png';
import classicHenley2 from '../assets/10. classic henley neck/26.png';
import classicHenley3 from '../assets/10. classic henley neck/27.png';
import classicHenley4 from '../assets/10. classic henley neck/28.png';
import classicHenley5 from '../assets/10. classic henley neck/29.png';
import classicHenley6 from '../assets/10. classic henley neck/30.png';

import classicTank1 from '../assets/11. classic tank/37.png';
import classicTank2 from '../assets/11. classic tank/38.png';
import classicTank3 from '../assets/11. classic tank/39.png';
import classicTank4 from '../assets/11. classic tank/40.png';
import classicTank5 from '../assets/11. classic tank/41.png';
import classicTank6 from '../assets/11. classic tank/42.png';

import babySuit1 from '../assets/12. baby suit/50.png';
import babySuit2 from '../assets/12. baby suit/51.png';
import babySuit3 from '../assets/12. baby suit/52.png';
import babySuit4 from '../assets/12. baby suit/53.png';
import babySuit5 from '../assets/12. baby suit/54.png';
import babySuit6 from '../assets/12. baby suit/55.png';

export const products = [
    {
        id: 1,
        category: 'Menswear',
        name: 'Classic T-Shirt',
        features: ['Premium Cotton', 'Classic Fit', 'Breathable Fabric'],
        image: classicTShirt1,
        hoverImage: classicTShirt2,
        images: [classicTShirt1, classicTShirt2, classicTShirt3, classicTShirt4, classicTShirt5, classicTShirt6],
        alt: 'Classic T Shirt image',
        ref: 'SX-MW-TS-01',
        description: 'A core essential in men’s apparel, our Classic T-Shirt is manufactured for comfort, structure, and long-term durability. Designed for bulk production, it serves as a reliable base for private label collections and wholesale distribution.',
        specifications: {
            "Fabric Composition": "100% Cotton / Cotton Blends (Customizable)",
            "GSM (Weight)": "160–220 GSM",
            "Fit Type": "Regular / Slim",
            "Order Qty": "Flexible MOQ"
        },
        customization: [
            "Custom Labels & Hangtags",
            "Embroidery or Print Detailing",
            "Fabric & GSM Customization",
            "Color Development"
        ]
    },
    {
        id: 2,
        category: 'Printing',
        name: 'DTG Printing',
        features: ['High Detail', 'Vibrant Colors', 'Soft Feel'],
        image: dtgPrinting1,
        hoverImage: dtgPrinting2,
        images: [dtgPrinting1, dtgPrinting2, dtgPrinting3, dtgPrinting4],
        alt: 'DTG Printing example',
        ref: 'SX-PR-DTG-02',
        description: 'Direct-to-Garment (DTG) printing allows high-resolution, detailed artwork application suitable for multi-color and intricate graphic designs. Ideal for T-Shirts, lightweight garments, and various other apparel categories requiring precision and color depth in bulk production.',
        specifications: {
            "Applicable On": "T-Shirts / Lightweight Garments / Various Others",
            "Print Type": "Direct-to-Garment",
            "Detail Level": "High-Resolution Artwork",
            "Color Range": "Full Color Spectrum",
            "Order Qty": "Flexible MOQ"
        },
        customization: [
            "Full-Color Graphics",
            "Detailed Artwork Printing",
            "Custom Placement",
            "Private Label Integration"
        ]
    },
    {
        id: 3,
        category: 'Menswear',
        name: 'Classic Polo',
        features: ['Pique Cotton', 'Ribbed Collar', 'Smart Casual'],
        image: classicPolo1,
        hoverImage: classicPolo2,
        images: [classicPolo1, classicPolo2, classicPolo3, classicPolo4, classicPolo5, classicPolo6],
        alt: 'Classic Polo image',
        ref: 'SX-MW-PO-03',
        description: 'Our Classic Polo is structured for retail collections and corporate requirements. Manufactured with precision stitching and collar reinforcement, it balances comfort with a refined finish suitable for private labels and uniform programs.',
        specifications: {
            "Fabric Composition": "Cotton Piqué / Blended Piqué",
            "GSM (Weight)": "200–240 GSM",
            "Fit Type": "Regular / Tailored Fit",
            "Order Qty": "Flexible MOQ"
        },
        customization: [
            "Custom Collar & Placket Styles",
            "Embroidery Branding",
            "Custom Labeling",
            "Bespoke Packaging"
        ]
    },
    {
        id: 4,
        category: 'Menswear',
        name: 'Classic Hoodie',
        features: ['Fleece Lined', 'Adjustable Hood', 'Kangaroo Pocket'],
        image: classicHoodie1,
        hoverImage: classicHoodie2,
        images: [classicHoodie1, classicHoodie2, classicHoodie3, classicHoodie4, classicHoodie5, classicHoodie6],
        alt: 'Classic Hoodie image',
        ref: 'SX-MW-HD-04',
        description: 'Built for structured bulk manufacturing, our Classic Hoodie is designed with reinforced seams and premium fabric blends. Suitable for retail brands, winter collections, and promotional apparel programs.',
        specifications: {
            "Fabric Composition": "Cotton Fleece / Terry / Blends",
            "GSM (Weight)": "280–350 GSM",
            "Fit Type": "Regular / Oversized",
            "Order Qty": "Flexible MOQ"
        },
        customization: [
            "Screen Printing",
            "Puff & Specialty Prints",
            "Custom Drawcords & Trims",
            "Private Labeling"
        ]
    },
    {
        id: 5,
        category: 'Printing',
        name: 'Embossed Printing',
        features: ['Tactile Feel', '3D Effect', 'Premium Finish'],
        image: embossedPrinting1,
        hoverImage: embossedPrinting2,
        images: [embossedPrinting1, embossedPrinting2, embossedPrinting3, embossedPrinting4],
        alt: 'Embossed Printing example',
        ref: 'SX-PR-EM-05',
        description: 'Our Embossed Printing technique adds raised texture and dimensional detailing across various garment categories including T-Shirts, Hoodies, Sweatshirts, Oversized styles, and various others. This method enhances visual depth while maintaining fabric integrity and export-grade finishing standards.',
        specifications: {
            "Applicable On": "T-Shirts / Hoodies / Sweatshirts / Oversized Styles / Various Others",
            "Effect Type": "Raised / Textured Print",
            "Finish": "Durable & Structured Surface",
            "Order Qty": "Flexible MOQ"
        },
        customization: [
            "Raised Texture Effects",
            "Logo Embossing",
            "Placement Customization",
            "Private Label Integration"
        ]
    },
    {
        id: 6,
        category: 'Menswear',
        name: 'Classic Sweatshirt',
        features: ['Cotton Blend', 'Ribbed Cuffs', 'Relaxed Fit'],
        image: classicSweatshirt1,
        hoverImage: classicSweatshirt2,
        images: [classicSweatshirt1, classicSweatshirt2, classicSweatshirt3, classicSweatshirt4, classicSweatshirt5, classicSweatshirt6],
        alt: 'Classic Sweatshirt image',
        ref: 'SX-MW-SW-06',
        description: 'Our Classic Sweatshirt is manufactured for durability and structured fall. Designed for scalable production, it offers clean finishing and consistent sizing across bulk orders.',
        specifications: {
            "Fabric Composition": "Fleece / French Terry",
            "GSM (Weight)": "260–320 GSM",
            "Fit Type": "Regular / Relaxed",
            "Order Qty": "Flexible MOQ"
        },
        customization: [
            "Embroidery & Print",
            "Rib & Cuff Variations",
            "Custom Branding",
            "Fabric Customization"
        ]
    },
    {
        id: 7,
        category: 'Printing',
        name: 'Screen Printing',
        features: ['Durable', 'Vibrant', 'Scalable'],
        image: screenPrinting1,
        hoverImage: screenPrinting2,
        images: [screenPrinting1, screenPrinting2, screenPrinting3, screenPrinting4],
        alt: 'Screen Printing example',
        ref: 'SX-PR-SP-07',
        description: 'Our Screen Printing capability supports bulk branding programs across T-Shirts, Hoodies, Sweatshirts, Tanks, and various other garment categories. We ensure durable print application, consistent color accuracy, and reinforced finishing aligned with export-grade quality standards.',
        specifications: {
            "Applicable On": "T-Shirts / Hoodies / Sweatshirts / Tanks / Various Others",
            "Print Type": "Multi-Color Screen Printing",
            "Ink Options": "Standard & Specialty Inks",
            "Order Qty": "Flexible MOQ"
        },
        customization: [
            "Multi-Color Screen Printing",
            "Specialty Inks",
            "Large Format Prints",
            "Private Label Integration"
        ]
    },
    {
        id: 8,
        category: 'Menswear',
        name: 'Classic Oversized T-Shirt',
        features: ['Layering Essential', 'Soft Touch', 'Tailored Drop Fit'],
        image: classicOversized1,
        hoverImage: classicOversized2,
        images: [classicOversized1, classicOversized2, classicOversized3, classicOversized4, classicOversized5, classicOversized6],
        alt: 'Classic Oversized image',
        ref: 'SX-MW-OS-08',
        description: 'Our Classic Oversized T-Shirt is developed for contemporary streetwear and modern retail collections. Manufactured with controlled proportions and consistent finishing for scalable production.',
        specifications: {
            "Fabric Composition": "Premium Cotton / Heavy Cotton",
            "GSM (Weight)": "220–260 GSM",
            "Fit Type": "Oversized / Relaxed",
            "Order Qty": "Flexible MOQ"
        },
        customization: [
            "Heavyweight Fabric Options",
            "Puff Print & Graphic Printing",
            "Custom Neck Rib",
            "Private Label Integration"
        ]
    },
    {
        id: 9,
        category: 'Specialty',
        name: 'Acid Wash',
        features: ['Vintage Look', 'Unique Finish', 'Soft Handfeel'],
        image: acidWash1,
        hoverImage: acidWash2,
        images: [acidWash1, acidWash2, acidWash3, acidWash4],
        alt: 'Acid Wash example',
        ref: 'SX-SP-AW-09',
        description: 'Our Enzyme and Acid Wash finishing techniques create controlled texture, softness, and vintage effects while maintaining fabric strength and shrinkage control. Applicable across T-Shirts, Hoodies, Sweatshirts, Oversized styles, and various others.',
        specifications: {
            "Applicable On": "T-Shirts / Hoodies / Sweatshirts / Oversized Styles / Various Others",
            "Wash Type": "Enzyme Wash / Acid Wash",
            "Effect": "Soft Finish / Vintage Fade",
            "Shrinkage Control": "Pre-tested & Stabilized",
            "Order Qty": "Flexible MOQ"
        },
        customization: [
            "Controlled Fade Effects",
            "Soft-Touch Finishing",
            "Vintage Wash Styling",
            "Private Label Integration"
        ]
    },
    {
        id: 10,
        category: 'Menswear',
        name: 'Classic Henley',
        features: ['Button Placket', 'Waffle Knit/Knit', 'Casual Comfort'],
        image: classicHenley1,
        hoverImage: classicHenley2,
        images: [classicHenley1, classicHenley2, classicHenley3, classicHenley4, classicHenley5, classicHenley6],
        alt: 'Classic Henley Neck image',
        ref: 'SX-MW-HN-10',
        description: 'The Classic Henley combines structured casual design with durable construction. Ideal for premium retail and private label collections requiring subtle detailing and refined finishing.',
        specifications: {
            "Fabric Composition": "Cotton / Blended Knit",
            "GSM (Weight)": "180–220 GSM",
            "Fit Type": "Regular / Slim",
            "Order Qty": "Flexible MOQ"
        },
        customization: [
            "Button Placket Variations",
            "Embroidery",
            "Custom Labeling",
            "Fabric Customization"
        ]
    },
    {
        id: 11,
        category: 'Menswear',
        name: 'Classic Tank',
        features: ['Summer Essential', 'Athletic Cut', 'Lightweight'],
        image: classicTank1,
        hoverImage: classicTank2,
        images: [classicTank1, classicTank2, classicTank3, classicTank4, classicTank5, classicTank6],
        alt: 'Classic Tank image',
        ref: 'SX-MW-TK-11',
        description: 'Manufactured for activewear, summer collections, and promotional requirements, our Classic Tank is produced with breathable fabrics and structured armhole finishing for export-quality standards.',
        specifications: {
            "Fabric Composition": "Cotton / Performance Blends",
            "GSM (Weight)": "140–180 GSM",
            "Fit Type": "Regular / Athletic",
            "Order Qty": "Flexible MOQ"
        },
        customization: [
            "Print & Branding",
            "Custom Cuts",
            "Labeling & Tags",
            "Color Development"
        ]
    },
    {
        id: 12,
        category: 'Kidswear',
        name: 'Baby Suit',
        features: ['Ultra Soft', 'Snap Closures', 'Hypoallergenic'],
        image: babySuit1,
        hoverImage: babySuit2,
        images: [babySuit1, babySuit2, babySuit3, babySuit4, babySuit5, babySuit6],
        alt: 'Baby Suit image',
        ref: 'SX-KW-BS-12',
        description: 'Our Baby Suits are manufactured using soft, breathable, and skin-friendly fabrics designed for infant comfort and safety. Built for export-grade quality, they maintain gentle stitching and controlled shrinkage suitable for bulk supply.',
        specifications: {
            "Fabric Composition": "100% Combed Cotton / Organic Cotton (Optional)",
            "GSM (Weight)": "150–200 GSM",
            "Fit Type": "Regular Infant Fit",
            "Order Qty": "Flexible MOQ"
        },
        customization: [
            "Soft Touch Printing",
            "Snap Button Variations",
            "Custom Labeling",
            "Size & Care Tags"
        ]
    }
];
