import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const InstagramFeed = () => {
    const { t } = useLanguage();
    // Placeholder images from Unsplash
    const posts = [
        "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2574&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=2670&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?q=80&w=2670&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2776&auto=format&fit=crop"
    ];

    return (
        <section className="py-24 bg-background-light overflow-hidden">
            <div className="layout-container px-4 md:px-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                        <div>
                            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-3 block animate-fade-in flex items-center gap-2">
                                <Instagram size={16} />
                                {t('instagram.tag')}
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary">
                                {t('instagram.title')}
                            </h2>
                        </div>
                        <a 
                            href="https://instagram.com/sonnaexxports" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 text-primary font-medium border-b border-primary/30 pb-1 hover:border-primary transition-colors"
                        >
                            {t('instagram.view')}
                            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {posts.map((src, index) => (
                            <div key={index} className="group relative aspect-square overflow-hidden cursor-pointer">
                                <img
                                    src={src}
                                    alt={`Instagram post ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white text-3xl">favorite</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
