import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import yusrahProfile from '../assets/team/yusrah-profile.jpg';
import yusrahSignature from '../assets/team/yusrah-signature.png';
import mainBanner from '../assets/About Banner.png';
import mobileBanner from '../assets/about_mobile.png';
import { getMailtoLink } from '../utils/emailUtils';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();
    return (
        <div className="bg-white text-gray-900 font-display overflow-x-hidden antialiased selection:bg-accent-beige selection:text-primary-dark transition-colors duration-300">
            <Header />
            {/* Added pt-20 to account for fixed header */}
            <main>
                <header className="relative w-full mt-[72px] h-[300px] sm:h-[400px] md:h-[40vh] md:min-h-[350px] flex items-center justify-center overflow-hidden bg-black">
                    <div className="absolute inset-0 z-0">
                        <picture>
                            <source media="(max-width: 767px)" srcSet={mobileBanner} />
                            <img
                                alt="About Sonna Exxports Banner"
                                className="w-full h-full object-cover object-center block"
                                src={mainBanner}
                            />
                        </picture>
                    </div>
                </header>

                {/* 1. About Sonna Exxports */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="font-serif text-4xl md:text-5xl mb-8">{t('about.title')}</h2>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-5xl mx-auto text-justify md:text-center space-y-4">
                            <span className="block">{t('about.p1')}</span>
                            <span className="block">{t('about.p2')}</span>
                            <span className="block">{t('about.p3')}</span>
                        </p>
                    </div>
                </section>

                {/* 2. Leadership Section (Moved Up) */}
                <section className="py-20 bg-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest text-sm uppercase">{t('about.leadership_tag')}</span>
                            <h2 className="font-serif text-4xl md:text-5xl mt-3">{t('about.founder')}</h2>
                        </div>
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
                            <div className="w-full lg:w-1/2 relative">
                                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/30 hidden md:block"></div>
                                <img
                                    alt="Founder Portrait"
                                    className="relative shadow-xl w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover object-top transition-all duration-500"
                                    src={yusrahProfile}
                                />
                            </div>
                            <div className="w-full lg:w-1/2 space-y-6">
                                <h3 className="font-serif text-5xl font-bold">Yusrah Ahmad</h3>
                                <div className="space-y-4">
                                    <p className="text-gray-600 leading-loose">
                                        {t('about.founder_p1')}
                                    </p>
                                    <p className="text-gray-600 leading-loose">
                                        {t('about.founder_p2')}
                                    </p>
                                    <p className="text-gray-600 leading-loose">
                                        {t('about.founder_p3')}
                                    </p>
                                    <p className="text-gray-600 leading-loose">
                                        {t('about.founder_p4')}
                                    </p>
                                </div>
                                <div className="pt-6">
                                    <img
                                        alt="Founder Signature"
                                        className="h-16 opacity-60 mb-2"
                                        src={yusrahSignature}
                                    />
                                    <p className="text-primary font-medium tracking-wide text-sm">{t('about.founder_role')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Vision / Mission Section (No Image, Split Layout) */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-light transition-colors duration-300">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                            <div className="bg-white p-10 rounded-lg shadow-sm border-l-4 border-gray-300">
                                <h2 className="font-serif text-3xl md:text-4xl mb-6">{t('about.mission')}</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {t('about.mission_desc')}
                                </p>
                            </div>
                            <div className="bg-white p-10 rounded-lg shadow-sm border-l-4 border-primary">
                                <h2 className="font-serif text-3xl md:text-4xl mb-6">{t('about.vision')}</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {t('about.vision_desc')}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Core Values (Moved) */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="font-serif text-4xl md:text-5xl mb-12">{t('about.values')}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <span className="material-symbols-outlined text-primary text-4xl mb-4">verified</span>
                                <h3 className="font-serif text-xl font-bold mb-3">{t('about.val_reliability')}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{t('about.val_reliability_desc')}</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <span className="material-symbols-outlined text-primary text-4xl mb-4">sync</span>
                                <h3 className="font-serif text-xl font-bold mb-3">{t('about.val_consistency')}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{t('about.val_consistency_desc')}</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <span className="material-symbols-outlined text-primary text-4xl mb-4">playlist_add_check</span>
                                <h3 className="font-serif text-xl font-bold mb-3">{t('about.val_quality')}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{t('about.val_quality_desc')}</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <span className="material-symbols-outlined text-primary text-4xl mb-4">lock</span>
                                <h3 className="font-serif text-xl font-bold mb-3">{t('about.val_privacy')}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{t('about.val_privacy_desc')}</p>
                            </div>
                        </div>
                    </div>
                </section>



                {/* 5. Contact Section */}
                <section className="py-24 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="font-serif text-4xl md:text-5xl mb-10">{t('about.cta_title')}<br />{t('about.cta_title2')}</h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href={getMailtoLink('about')}
                                className="w-full sm:w-auto inline-block bg-primary hover:bg-primary-light text-white px-10 py-4 rounded font-medium tracking-widest transition-colors duration-300 shadow-lg hover:shadow-xl"
                            >
                                {t('about.cta_discuss')}
                            </a>
                            <Link
                                to="/contact"
                                className="w-full sm:w-auto inline-block bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 rounded font-medium tracking-widest transition-colors duration-300 shadow-lg hover:shadow-xl"
                            >
                                {t('about.cta_contact')}
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div >
    );
};

export default About;
