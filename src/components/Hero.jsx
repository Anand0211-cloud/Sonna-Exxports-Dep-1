import React, { useState, useEffect, useCallback } from 'react';
import { getMailtoLink } from '../utils/emailUtils';
import banner1 from '../assets/Banner/1.png';
import banner2 from '../assets/Banner/2.png';
import banner3 from '../assets/Banner/3.png';

const slides = [
    {
        image: banner1,
        heading: <>Global Fashion,<br /> <span className="italic text-accent-beige">Redefined.</span></>,
    },
    {
        image: banner2,
        heading: <>Export Quality,<br /> <span className="italic text-accent-beige">Production Excellence</span></>,
    },
    {
        image: banner3,
        heading: <>African Style,<br /> <span className="italic text-accent-beige">Elevated.</span></>,
    },
];

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-20">
            {/* Background Images */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className="absolute inset-0 z-0 transition-opacity duration-700 ease-in-out"
                    style={{ opacity: index === current ? 1 : 0 }}
                >
                    <img
                        src={slide.image}
                        alt={`Banner ${index + 1}`}
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            ))}
            {/* Subtle purple overlay + bottom gradient for text readability */}
            <div className="absolute inset-0 z-[1] bg-primary-dark/45"></div>
            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl px-6 md:px-10 flex flex-col items-center text-center gap-8 mt-10">
                <span className="text-accent-beige tracking-[0.2em] text-sm uppercase font-bold" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>Sonna Exxports • Est 1998</span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white leading-[1.1] max-w-4xl tracking-tight transition-opacity duration-500" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.7), 0 2px 4px rgba(0,0,0,0.5)' }}>
                    {slides[current].heading}
                </h1>
                <p className="text-lg text-white/80 max-w-xl font-light leading-relaxed" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                    Experience the pinnacle of luxury export fashion. Meticulously crafted textiles delivered to the world's most exclusive boutiques.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <a 
                        href={getMailtoLink('general')}
                        className="h-12 px-8 rounded-full bg-accent-beige hover:bg-accent-beige-hover text-primary-dark font-bold text-base flex items-center justify-center transition-all transform hover:scale-105"
                    >
                        Discuss Your Project
                    </a>
                    <a 
                        href="/collections"
                        className="h-12 px-8 rounded-full border border-white/30 hover:bg-white/10 text-white font-medium text-base flex items-center justify-center transition-all backdrop-blur-sm"
                    >
                        View Collection
                    </a>
                </div>

                {/* Carousel Indicators */}
                <div className="flex gap-3 mt-4">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 rounded-full transition-all duration-500 ${
                                index === current
                                    ? 'w-8 bg-accent-beige'
                                    : 'w-2 bg-white/40 hover:bg-white/60'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <div className="absolute bottom-10 animate-bounce">
                    <span className="material-symbols-outlined text-white/50 text-3xl">keyboard_arrow_down</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
