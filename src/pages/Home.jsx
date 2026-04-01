import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Collections from '../components/Collections';
import VideoSection from '../components/VideoSection';
import Manufacturing from '../components/Manufacturing';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

import Certifications from '../components/Certifications';
import InstagramFeed from '../components/InstagramFeed';
import yusrahProfile from '../assets/Home Page Founder.png';
import yusrahSignature from '../assets/team/yusrah-signature.png';

const Home = () => {
    const { t } = useLanguage();
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-primary-dark text-white font-display overflow-x-hidden antialiased selection:bg-accent-beige selection:text-primary-dark">
            <Header />
            <main className="flex-grow">
                <Hero />

                {/* Leadership Section */}
                <section className="py-20 bg-background-light text-gray-900 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
                            <div className="w-full lg:w-1/2 relative">
                                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/30 hidden md:block"></div>
                                <img
                                    alt="Founder Portrait"
                                    className="relative shadow-xl w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover object-top transition-all duration-500"
                                    src={yusrahProfile}
                                />
                            </div>
                            <div className="flex flex-col gap-6 w-full lg:w-1/2 mt-10 lg:mt-0">
                                <div>
                                    <span className="text-secondary font-bold tracking-widest text-[13px] uppercase mb-4 block animate-fade-in">{t('home.leadership.tag')}</span>
                                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif text-primary mb-2">
                                        {t('home.leadership.title')}
                                    </h2>
                                    <div className="h-1 w-16 bg-accent-beige mt-6"></div>
                                </div>
                                <div className="flex flex-col gap-5 text-primary-light text-base md:text-lg leading-relaxed pt-2">
                                    <p className="font-medium text-primary">
                                        {t('home.leadership.p1')}
                                    </p>
                                    <div className="pl-6 border-left-animated border-l-4 border-accent-beige py-2 bg-gradient-to-r from-accent-beige/10 to-transparent">
                                        <p className="italic underline underline-offset-4 decoration-accent-beige decoration-2">{t('home.leadership.p2')}</p>
                                        <p className="font-serif text-primary text-xl mt-2">{t('home.leadership.p3')}</p>
                                    </div>
                                </div>
                                <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                                    <div>
                                        <img
                                            alt="Founder Signature"
                                            className="h-16 opacity-60 mb-2"
                                            src={yusrahSignature}
                                        />
                                        <h4 className="font-bold text-primary font-serif text-xl">Yusrah Ahmad</h4>
                                        <span className="text-secondary text-sm font-semibold tracking-wider uppercase mt-1 block">{t('home.leadership.role')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Collections />

                <Manufacturing />

                <Certifications />
                <InstagramFeed />
                <Newsletter />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
