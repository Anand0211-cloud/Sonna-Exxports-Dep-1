import React from 'react';
import gstImg from '../assets/home/GST Registered.png';
import isoImg from '../assets/home/ISO 9001.png';
import iecImg from '../assets/home/Import Export Code (IEC).png';
import oekoTexImg from '../assets/home/OEKO-TEX®️ Standard 100.png';
import { useLanguage } from '../context/LanguageContext';

const Certifications = () => {
    const { t } = useLanguage();
    const certs = [
        { id: 1, img: isoImg, alt: 'ISO 9001' },
        { id: 2, img: oekoTexImg, alt: 'OEKO-TEX Standard 100' },
        { id: 3, img: gstImg, alt: 'GST Registered' },
        { id: 4, img: iecImg, alt: 'Import Export Code (IEC)' },
    ];

    return (
        <section className="py-16 bg-background-light border-y border-primary/5">
            <div className="layout-container px-4 md:px-10">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest text-sm uppercase">{t('certifications.tag')}</span>
                        <h2 className="font-serif text-4xl md:text-5xl mt-3 text-primary-dark">{t('certifications.title')}</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        {certs.map((cert) => (
                            <div key={cert.id} className="flex flex-col items-center gap-4 group cursor-pointer">
                                <div className="w-64 h-64 bg-white border border-primary/10 rounded-full shadow-sm flex items-center justify-center relative overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-md p-8">
                                    <div className="absolute inset-0 border-4 border-double border-primary/5 rounded-full m-2"></div>
                                    <img
                                        src={cert.img}
                                        alt={cert.alt}
                                        className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <h4 className="font-serif text-primary-dark font-bold text-xl mt-4 text-center">{cert.alt}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
