import React from 'react';
import customizationImg from '../assets/home/home page customisation.png';
import { getMailtoLink } from '../utils/emailUtils';
import { useLanguage } from '../context/LanguageContext';
import { Palette, Layers, Tag, Package, ArrowRight } from 'lucide-react';

const Manufacturing = () => {
    const { t } = useLanguage();

    const features = [
        { icon: Palette, textPath: 'manufacturing.features.print' },
        { icon: Layers, textPath: 'manufacturing.features.fabric' },
        { icon: Tag, textPath: 'manufacturing.features.label' },
        { icon: Package, textPath: 'manufacturing.features.packaging' }
    ];

    return (
        <section className="py-24 bg-[#460566]">
            <div className="layout-container flex justify-center px-4 md:px-10">
                <div className="w-full max-w-7xl">
                    <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
                        <div className="relative order-1">
                            <div className="relative w-full aspect-[4/5] overflow-hidden shadow-2xl group bg-white">
                                <img
                                    src={customizationImg}
                                    alt={t('manufacturing.alt_main')}
                                    className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                <div className="absolute bottom-8 left-8 z-30 flex items-center gap-4">
                                    <div className="size-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md">
                                        <span className="material-symbols-outlined text-white text-sm">settings_suggest</span>
                                    </div>
                                    <div className="text-white">
                                        <p className="text-xs font-bold uppercase tracking-widest text-accent-beige">{t('manufacturing.customization')}</p>
                                        <p className="text-sm opacity-90 font-medium">{t('manufacturing.bespoke_line')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -z-10 -bottom-6 -left-6 size-48 bg-accent-beige rounded-full blur-3xl opacity-10"></div>
                        </div>
                        <div className="flex flex-col gap-6 md:gap-8 order-2">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-accent-beige text-sm font-bold tracking-[0.3em] uppercase">{t('manufacturing.tag')}</h3>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">{t('manufacturing.title')}</h2>
                            </div>
                            <div className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-xl space-y-4">
                                <p>{t('manufacturing.p1')}</p>
                                <p>{t('manufacturing.p2')}</p>
                                <p>{t('manufacturing.p3')}</p>
                            </div>
                            <div className="space-y-4 pt-4 border-t border-white/10">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                                            <div className="w-10 h-10 rounded-full bg-accent-beige/20 text-accent-beige flex items-center justify-center flex-shrink-0">
                                                <feature.icon size={20} strokeWidth={2.5} />
                                            </div>
                                            <span className="font-semibold text-white text-sm uppercase tracking-wider">{t(feature.textPath)}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                                {t('manufacturing.p4')}
                            </p>
                            <div className="pt-2">
                                <a 
                                    href={getMailtoLink('sales')}
                                    className="h-14 px-8 sm:px-12 rounded-full bg-accent-beige hover:bg-accent-beige-hover text-primary-dark font-bold text-base sm:text-lg flex items-center justify-center transition-all shadow-lg hover:shadow-accent-beige/20 transform hover:-translate-y-1 gap-2 w-full sm:w-auto"
                                >
                                    {t('manufacturing.cta')}
                                    <ArrowRight size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Manufacturing;
