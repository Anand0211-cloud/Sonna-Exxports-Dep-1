import React, { useState, useEffect, useCallback } from 'react';
import { getMailtoLink } from '../utils/emailUtils';
import banner1 from '../assets/Banner/1.png';
import banner2 from '../assets/Banner/2.png';
import banner3 from '../assets/Banner/3.png';
import banner1Mobile from '../assets/home 1_mobile.png';
import banner2Mobile from '../assets/home 2_mobile.png';
import banner3Mobile from '../assets/home 3_mobile.png';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const slides = [
        {
            image: banner1,
            mobileImage: banner1Mobile,
            heading: <>{t('hero.slide1.l1')}<br /> <span className="italic text-accent-beige">{t('hero.slide1.l2')}</span></>,
        },
        {
            image: banner2,
            mobileImage: banner2Mobile,
            heading: <>{t('hero.slide2.l1')}<br /> <span className="italic text-accent-beige">{t('hero.slide2.l2')}</span></>,
        },
        {
            image: banner3,
            mobileImage: banner3Mobile,
            heading: <>{t('hero.slide3.l1')}<br /> <span className="italic text-accent-beige">{t('hero.slide3.l2')}</span></>,
        },
    ];

    const goToSlide = useCallback((index) => {
        if (index === current || isTransitioning) return;
        setIsTransitioning(true);
        setCurrent(index);
        setTimeout(() => setIsTransitioning(false), 700);
    }, [current, isTransitioning]);

    useEffect(() => {
        const timer = setInterval(() => {
            const next = (current + 1) % slides.length;
            goToSlide(next);
        }, 5000);
        return () => clearInterval(timer);
    }, [current, goToSlide]);

    return (
        <section className="relative overflow-hidden bg-primary-dark pt-[72px]">
            {/* Image container — image in normal flow sets the section height */}
            <div className="relative w-full">
                {slides.map((slide, index) => (
                    <picture
                        key={index}
                        className={`w-full h-[550px] sm:h-[600px] md:h-auto block transition-opacity duration-700 ease-in-out ${index === 0 ? 'relative' : 'absolute inset-0'
                            }`}
                        style={{
                            opacity: index === current ? 1 : 0,
                            zIndex: index === current ? 1 : 0
                        }}
                    >
                        <source media="(max-width: 767px)" srcSet={slide.mobileImage} />
                        <img
                            src={slide.image}
                            alt={`Banner ${index + 1}`}
                            className="w-full h-full object-cover object-center block"
                        />
                    </picture>
                ))}

                {/* Subtle purple overlay + bottom gradient for text readability */}
                <div className="absolute inset-0 z-[2] bg-primary-dark/45"></div>
                <div className="absolute inset-0 z-[2] bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent"></div>

                {/* Content overlay */}
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="w-full max-w-7xl px-4 sm:px-6 md:px-10 flex flex-col items-center text-center gap-4 sm:gap-6 md:gap-8">
                        <span className="text-accent-beige tracking-[0.2em] text-xs sm:text-sm uppercase font-bold" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>{t('hero.subtitle')}</span>
                        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-[1.1] max-w-4xl tracking-tight transition-opacity duration-500" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.7), 0 2px 4px rgba(0,0,0,0.5)' }}>
                            {slides[current].heading}
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-xl font-light leading-relaxed hidden sm:block" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                            {t('hero.desc')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-2 w-full sm:w-auto px-4 sm:px-0">
                            <a
                                href={getMailtoLink('general')}
                                className="h-12 sm:h-12 w-full sm:w-auto px-6 sm:px-8 rounded-full bg-accent-beige hover:bg-accent-beige-hover text-primary-dark font-bold text-sm sm:text-base flex items-center justify-center transition-all transform hover:scale-105"
                            >
                                {t('hero.cta.discuss')}
                            </a>
                            <a
                                href="/collections"
                                className="h-12 sm:h-12 w-full sm:w-auto px-6 sm:px-8 rounded-full border border-white/30 hover:bg-white/10 text-white font-medium text-sm sm:text-base flex items-center justify-center transition-all backdrop-blur-sm"
                            >
                                {t('hero.cta.view')}
                            </a>
                        </div>

                        {/* Carousel Indicators */}
                        <div className="flex gap-3 mt-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`h-2 rounded-full transition-all duration-500 ${index === current
                                        ? 'w-8 bg-accent-beige'
                                        : 'w-2 bg-white/40 hover:bg-white/60'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
