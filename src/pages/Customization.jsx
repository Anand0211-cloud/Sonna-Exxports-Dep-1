import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Box, TrendingUp, ShieldCheck, Globe } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getMailtoLink } from '../utils/emailUtils';
import { useLanguage } from '../context/LanguageContext';

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
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState('industrial');

    const uniformDetails = {
        industrial: {
            id: 'industrial',
            title: "",
            description: "",
            features: [],
            fabric: "",
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

    const techniques = [
        {
            titleKey: 'customization.techniques.print.title',
            descKey: 'customization.techniques.print.desc',
            image: techPrint
        },
        {
            titleKey: 'customization.techniques.embroidery.title',
            descKey: 'customization.embroidery.desc',
            image: techEmbroidery
        },
        {
            titleKey: 'customization.techniques.label.title',
            descKey: 'customization.privatelabel.desc',
            image: techPrivateLabel
        },
        {
            titleKey: 'customization.techniques.color.title',
            descKey: 'customization.colourmatch.desc',
            image: techColour
        },
        {
            titleKey: 'customization.techniques.fabric.title',
            descKey: 'customization.fabricselect.desc',
            image: techFabric
        },
        {
            titleKey: 'customization.techniques.wash.title',
            descKey: 'customization.washing.desc',
            image: techWash
        }
    ];

    const scalableItems = [
        { textKey: 'customization.scalable_items.0', icon: <Zap className="w-8 h-8 text-primary" /> },
        { textKey: 'customization.scalable_items.1', icon: <Box className="w-8 h-8 text-primary" /> },
        { textKey: 'customization.scalable_items.2', icon: <TrendingUp className="w-8 h-8 text-primary" /> },
        { textKey: 'customization.scalable_items.3', icon: <ShieldCheck className="w-8 h-8 text-primary" /> },
        { textKey: 'customization.scalable_items.4', icon: <Globe className="w-8 h-8 text-primary" /> },
        { textKey: 'customization.scalable_items.5', icon: <Box className="w-8 h-8 text-primary" /> },
    ];

    return (
        <div className="bg-white dark:bg-background-dark text-gray-900 dark:text-gray-100 font-display">
            <Header />

            {/* 1. Hero Section - Full Size Image, No Overlay */}
            <section className="relative w-full overflow-hidden mt-[64px] md:mt-[70px]">
                <div className="w-full">
                    <img
                        src={mainBanner}
                        alt="Textile Production Banner"
                        className="w-full h-[300px] sm:h-[400px] md:h-auto object-cover object-center block"
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
                        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-[#460566]">{t('customization.hero.title')}</h2>
                        <div className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-light w-full text-center space-y-6">
                            <p>
                                {t('customization.p1')}
                            </p>
                            <p className="font-bold text-gray-900 dark:text-white text-xl md:text-2xl py-2">
                                {t('customization.p2')}
                            </p>
                            <p>
                                {t('customization.p3')}
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. Customisation Techniques Section */}
                <section className="pt-6 pb-16 px-6 md:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-4xl md:text-5xl mt-3 text-[#460566]">{t('customization.techniques.title')}</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
                                {t('customization.techniques.subtitle')}
                            </p>
                        </div>

                        {/* Techniques Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {techniques.map((tech, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col h-full text-left">
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={tech.image}
                                            alt={t(tech.titleKey)}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="font-serif text-2xl text-[#460566] mb-4">{t(tech.titleKey)}</h3>
                                        <div className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line flex-grow">
                                            {t(tech.descKey)}
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
                                <h3 className="font-serif text-2xl md:text-4xl text-white mb-6">{t('customization.looking')}</h3>
                                <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg font-light">
                                    {t('customization.looking_desc')}
                                </p>
                                <Link 
                                    to="/contact"
                                    className="inline-flex items-center justify-center bg-white text-[#460566] text-lg font-bold px-10 py-4 rounded-md shadow-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1"
                                >
                                    {t('customization.discuss_req')}
                                </Link>
                            </div>
                            <div className="mb-12">
                                <h2 className="inline-block font-serif text-4xl md:text-6xl text-[#460566] pb-4 border-b-4 border-primary/20 italic">{t('customization.uniforms_title')}</h2>
                            </div>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 mb-4 max-w-2xl mx-auto">
                                {t('customization.uniforms_desc')}
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
                                                {t('customization.discuss_requirement')}
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
                                <h2 className="font-serif text-4xl md:text-5xl mb-8 text-[#460566]">{t('customization.scalable_title')}</h2>
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 justify-center">
                            {scalableItems.map((item, index) => (
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
                                        {t(item.textKey)}
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
                                {t('customization.scalable_footer')}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* 5. CTA Section */}
                <section className="py-20 bg-primary text-white text-center px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-serif text-4xl md:text-5xl mb-8 text-white">{t('customization.cta_title')}</h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
                            <a 
                                href={getMailtoLink('customization')}
                                className="bg-white text-primary hover:bg-gray-100 py-4 px-10 rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                {t('customization.discuss_now')}
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
