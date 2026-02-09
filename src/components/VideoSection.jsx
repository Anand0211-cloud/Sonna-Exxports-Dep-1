import React from 'react';

const VideoSection = () => {
    return (
        <section className="py-24 bg-background-light">
            <div className="layout-container flex justify-center px-4 md:px-10">
                <div className="w-full max-w-7xl">
                    <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-center">
                        <div className="flex flex-col gap-8 order-2 lg:order-1">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-primary text-sm font-bold tracking-[0.3em] uppercase">The Art of Creation</h3>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary-dark leading-tight">Making Video</h2>
                            </div>
                            <p className="text-primary-dark/70 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                                Witness the artistry behind every garment. Our state-of-the-art facilities combine traditional craftsmanship with rigorous international standards to ensure perfection in every thread.
                            </p>
                            <div className="space-y-4 pt-4 border-t border-primary-dark/10">
                                <div className="flex items-center gap-4 text-primary-dark/80">
                                    <span className="material-symbols-outlined text-primary">verified</span>
                                    <span className="text-sm uppercase tracking-wider">Certified Factory Standards</span>
                                </div>
                                <div className="flex items-center gap-4 text-primary-dark/80">
                                    <span className="material-symbols-outlined text-primary">eco</span>
                                    <span className="text-sm uppercase tracking-wider">Zero-Waste Manufacturing</span>
                                </div>
                            </div>
                            <div className="pt-6">
                                <button className="h-14 px-12 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-lg transition-all shadow-lg hover:shadow-primary/20 transform hover:-translate-y-1">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                        <div className="relative order-1 lg:order-2">
                            <div className="relative w-full aspect-[4/3] lg:aspect-video overflow-hidden shadow-2xl group">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10 flex items-center justify-center">
                                    <button className="size-24 md:size-32 flex items-center justify-center rounded-full bg-white text-primary hover:scale-110 transition-transform duration-300 shadow-xl">
                                        <span className="material-symbols-outlined text-5xl md:text-6xl translate-x-1">play_arrow</span>
                                    </button>
                                </div>
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzZQtZWy5jCRHxtdOskrw98GVFPJhzvIaqxDAsz7E3rcSPEb-STornx6GZDSxqgdG9cZHhDNr4jSbUaoEjxDPoYDB0Ph--v_OXvF2Meg7K1JuwnJT5EN8c2sWPhIIISFNFBT4Q9YYNO2gDBSJiAmyt0r3xgcrSAZtMK90erRvw6cSL3TOzqnDEyZkx48xiIvC7AGgHBnT0IV-3-V6aBE4Fk3twk6i69GT64s4hs_n29qSMwToEF5nrsEsbosi7PTjsxTqtCrTcWQ"
                                    alt="Craftsman working on garment"
                                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary-dark/60 to-transparent z-20"></div>
                                <div className="absolute bottom-8 left-8 z-30 flex items-center gap-4">
                                    <div className="size-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md">
                                        <span className="material-symbols-outlined text-white text-sm">precision_manufacturing</span>
                                    </div>
                                    <div className="text-white">
                                        <p className="text-xs font-bold uppercase tracking-widest text-accent-beige">Production</p>
                                        <p className="text-sm">Factory Floor: A Wing</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -z-10 -bottom-6 -right-6 size-48 bg-primary-light rounded-full blur-3xl opacity-20"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
