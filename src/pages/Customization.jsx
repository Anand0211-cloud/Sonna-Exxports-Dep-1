import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Box, TrendingUp, ShieldCheck, Globe } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getMailtoLink } from '../utils/emailUtils';

// Industrial Uniforms
import industrialBlue from '../assets/customisation/Industrial Blue.png';
import industrialGreen from '../assets/customisation/Industrial Green.png';
import industrialRed from '../assets/customisation/Industrial Red.png';

// Customisation Techniques
import techPrint from '../assets/customisation/Print.png';
import techEmbroidery from '../assets/customisation/Embroidery.png';
import techPrivateLabel from '../assets/customisation/Private Labeling.png';
import techColour from '../assets/customisation/Colour Matching.png';
import techFabric from '../assets/customisation/Fabric Selection.png';
import techWash from '../assets/customisation/Washing & Finishing.png';
import mainBanner from '../assets/Customisation Banner.png';

const Customization = () => {
    const [activeCategory, setActiveCategory] = useState('industrial');

    const uniformDetails = {
        industrial: {
            id: 'industrial',
            title: "Industrial Uniforms",
            description: "",
            features: [
                "Fire-retardant & chemical-resistant options",
                "High-visibility reflective taping",
                "Reinforced knees and stress points",
                "Moisture-wicking industrial blends"
            ],
            fabric: "Heavy-duty Twill / Treated Cotton",
            variants: [
                {
                    name: "Industrial Blue",
                    image: industrialBlue
                },
                {
                    name: "Industrial Green",
                    image: industrialGreen
                },
                {
                    name: "Industrial Red",
                    image: industrialRed
                }
            ]
        }
    };

    return (
        <div className="bg-white dark:bg-background-dark text-gray-900 dark:text-gray-100 font-display">
            <Header />

            {/* 1. Hero Section - Full Size Image, No Overlay */}
            <section className="relative w-full overflow-hidden pt-20">
                <div className="w-full">
                    <img
                        src={mainBanner}
                        alt="Textile Production Banner"
                        className="w-full h-auto block"
                    />
                </div>
            </section>

            <main id="content" className="bg-background-light dark:bg-background-dark">

                {/* 2. Intro Section */}
                <section className="pt-16 pb-6 px-6 md:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="flex justify-center mb-8">
                            <div className="h-1 w-20 bg-primary"></div>
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-[#460566]">End-to-End Custom Garment Manufacturing</h2>
                        <div className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-light w-full text-center space-y-6">
                            <p>
                                At Sonna Exxports, we provide complete end-to-end custom garment manufacturing tailored to your brand’s specifications. From concept development and tech pack creation to fabric selection, production, finishing, and export coordination — every stage is managed with structured precision.
                            </p>
                            <p className="font-bold text-gray-900 dark:text-white text-xl md:text-2xl py-2">
                                We support 100% custom product development from scratch.
                            </p>
                            <p>
                                If you already have a tech pack, we execute it accurately. If not, our team can professionally develop one for you — ensuring clarity before bulk production begins. As a trusted garment manufacturer & exporter, we deliver scalable production with export-grade quality standards.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. Customisation Techniques Section */}
                <section className="pt-6 pb-16 px-6 md:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-4xl md:text-5xl mt-3 text-[#460566]">Customisation Techniques</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
                                Our custom apparel manufacturing services include:
                            </p>
                        </div>

                        {/* Techniques Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Print",
                                    description: "Advanced screen printing and specialty print techniques for bulk garment production, including DTF (Direct to Film), screen print, puff print, discharge print, and heat transfer printing.\nWe ensure color accuracy, long-lasting durability, and export-quality finishing across all orders.",
                                    image: techPrint
                                },
                                {
                                    title: "Embroidery",
                                    description: "High-precision embroidery for logos, badges, and detailed branding elements.\nSuitable for uniforms, private labels, and premium retail collections.",
                                    image: techEmbroidery
                                },
                                {
                                    title: "Private Labeling",
                                    description: "Complete private label garment manufacturing including:\n• Custom neck labels\n• Size & wash-care labels\n• Hangtags\n• Brand trims\n• Bespoke packaging\nWe ensure your brand identity is fully integrated into the final product.",
                                    image: techPrivateLabel
                                },
                                {
                                    title: "Colour Matching",
                                    description: "Accurate color development aligned with brand guidelines.\nWe offer structured dyeing processes and pantone shade matching to maintain consistency across bulk orders.",
                                    image: techColour
                                },
                                {
                                    title: "Fabric Selection",
                                    description: "Extensive fabric sourcing including cotton, blends, fleece and performance fabrics.\nGSM customization available based on product and market requirement.",
                                    image: techFabric
                                },
                                {
                                    title: "Washing & Finishing",
                                    description: "Controlled washing processes including 100% combed wash, enzyme wash, soft wash, acid wash, and special finishes, depending on fabric and brand requirements.\nEach batch undergoes strict quality checks to maintain texture, color stability, shrinkage control, and long-term garment durability.",
                                    image: techWash
                                }
                            ].map((tech, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col h-full text-left">
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={tech.image}
                                            alt={tech.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="font-serif text-2xl text-[#460566] mb-4">{tech.title}</h3>
                                        <div className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line flex-grow">
                                            {tech.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Interactive Categories (Specialized Uniforms) */}
                <section id="categories" className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-gray-900 scroll-mt-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-10">
                        <div className="bg-[#460566] rounded-xl p-10 mb-16 border border-white/10 shadow-2xl">
                                <h3 className="font-serif text-2xl md:text-4xl text-white mb-6">Looking for customized solutions for your brand?</h3>
                                <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg font-light">
                                    Our export team is ready to discuss your specific bulk manufacturing requirements, from sampling to final delivery.
                                </p>
                                <Link 
                                    to="/contact"
                                    className="inline-flex items-center justify-center bg-white text-[#460566] text-lg font-bold px-10 py-4 rounded-md shadow-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1"
                                >
                                    Discuss Your Requirement
                                </Link>
                            </div>
                            <div className="mb-12">
                                <h2 className="inline-block font-serif text-4xl md:text-6xl text-[#460566] pb-4 border-b-4 border-primary/20 italic">Industrial Uniforms</h2>
                            </div>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 mb-4 max-w-2xl mx-auto">
                                We provide structured uniform manufacturing solutions designed for durability, comfort, and institutional identity.
                            </p>
                        </div>



                        {/* Dynamic Content Area */}
                        <div className="animate-fade-in">
                            {/* Category Description */}
                            <div className="max-w-3xl mx-auto text-center mb-10">
                                <p className="text-xl text-gray-700 dark:text-gray-300 font-serif active-category-description whitespace-pre-line">
                                    {uniformDetails[activeCategory].description}
                                </p>
                            </div>

                            {/* 3-Card Product Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {uniformDetails[activeCategory].variants.map((variant, index) => (
                                    <div key={index} className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-800">
                                        <div className="relative overflow-hidden bg-white flex items-center justify-center border-b border-gray-100 dark:border-gray-800">
                                            <img
                                                src={variant.image}
                                                alt={variant.name}
                                                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.03]"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                                        </div>
                                        <div className="p-6 text-center flex flex-col items-center">
                                            <a 
                                                href={getMailtoLink('uniform', { variant: variant.name })}
                                                className="w-full flex items-center justify-center bg-primary text-white text-sm font-medium px-8 py-4 rounded hover:bg-opacity-90 transition-colors shadow-sm tracking-widest uppercase"
                                            >
                                                Discuss Requirement
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Scalable & Structured Production Section */}
                <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-background-dark overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="font-serif text-4xl md:text-5xl mb-8 text-[#460566]">Scalable & Structured Production</h2>
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 justify-center">
                            {[
                                {
                                    text: "Fast Sampling for quicker approvals",
                                    icon: <Zap className="w-8 h-8 text-primary" />,
                                    color: "bg-primary/5"
                                },
                                {
                                    text: "Convenient Order Quantities",
                                    icon: <Box className="w-8 h-8 text-primary" />,
                                    color: "bg-primary/5"
                                },
                                {
                                    text: "Cost-Effective Production for larger orders",
                                    icon: <TrendingUp className="w-8 h-8 text-primary" />,
                                    color: "bg-primary/5"
                                },
                                {
                                    text: "Strict Quality Control Systems",
                                    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
                                    color: "bg-primary/5"
                                },
                                {
                                    text: "International Export Compliance",
                                    icon: <Globe className="w-8 h-8 text-primary" />,
                                    color: "bg-primary/5"
                                },
                                {
                                    text: "Repeatable Manufacturing Standards",
                                    icon: <Box className="w-8 h-8 text-primary" />,
                                    color: "bg-primary/5"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-2 flex flex-col items-center text-center overflow-hidden`}
                                >
                                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-150 duration-700 ease-out`}></div>

                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 group-hover:rotate-6 transition-transform duration-300`}>
                                        {item.icon}
                                    </div>

                                    <h3 className="font-serif text-xl text-primary dark:text-gray-100 relative z-10 leading-snug">
                                        {item.text}
                                    </h3>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-center"
                        >
                            <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
                                We operate as a professional apparel export house, ensuring smooth production and global shipment coordination.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* 5. CTA Section */}
                <section className="py-20 bg-primary text-white text-center px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-serif text-4xl md:text-5xl mb-8 text-white">Ready to Start Your Private Label?</h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
                            <a 
                                href={getMailtoLink('customization')}
                                className="bg-white text-primary hover:bg-gray-100 py-4 px-10 rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Discuss Now
                            </a>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default Customization;
