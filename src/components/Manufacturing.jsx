import React from 'react';

const Manufacturing = () => {
    return (
        <section className="py-24 bg-[#460566]">
            <div className="layout-container flex justify-center px-4 md:px-10">
                <div className="w-full max-w-7xl">
                    <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 items-center">
                        <div className="relative order-1">
                            <div className="relative w-full aspect-[4/3] lg:aspect-video overflow-hidden shadow-2xl group">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzZQtZWy5jCRHxtdOskrw98GVFPJhzvIaqxDAsz7E3rcSPEb-STornx6GZDSxqgdG9cZHhDNr4jSbUaoEjxDPoYDB0Ph--v_OXvF2Meg7K1JuwnJT5EN8c2sWPhIIISFNFBT4Q9YYNO2gDBSJiAmyt0r3xgcrSAZtMK90erRvw6cSL3TOzqnDEyZkx48xiIvC7AGgHBnT0IV-3-V6aBE4Fk3twk6i69GT64s4hs_n29qSMwToEF5nrsEsbosi7PTjsxTqtCrTcWQ"
                                    alt="Premium manufacturing machinery and finished garments"
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent z-20"></div>
                                <div className="absolute bottom-8 left-8 z-30 flex items-center gap-4">
                                    <div className="size-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md">
                                        <span className="material-symbols-outlined text-white text-sm">settings_suggest</span>
                                    </div>
                                    <div className="text-white">
                                        <p className="text-xs font-bold uppercase tracking-widest text-accent-beige">Customization</p>
                                        <p className="text-sm opacity-90 font-medium">Bespoke Production Line</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -z-10 -bottom-6 -left-6 size-48 bg-accent-beige rounded-full blur-3xl opacity-10"></div>
                        </div>
                        <div className="flex flex-col gap-8 order-2">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-accent-beige text-sm font-bold tracking-[0.3em] uppercase">Tailored for your brand</h3>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">Private Label & Custom Manufacturing</h2>
                            </div>
                            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                                Elevate your brand with our white-label solutions. We provide end-to-end manufacturing from conceptual design to final packaging, ensuring your unique vision is realized with uncompromising quality.
                            </p>
                            <div className="space-y-4 pt-4 border-t border-white/10">
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                    <div className="flex items-center gap-4 text-white/80">
                                        <span className="material-symbols-outlined text-accent-beige">palette</span>
                                        <span className="text-sm uppercase tracking-wider font-semibold">Screen Printing</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-white/80">
                                        <span className="material-symbols-outlined text-accent-beige">auto_awesome</span>
                                        <span className="text-sm uppercase tracking-wider font-semibold">Embroidery</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-white/80">
                                        <span className="material-symbols-outlined text-accent-beige">label</span>
                                        <span className="text-sm uppercase tracking-wider font-semibold">Custom Labeling</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-white/80">
                                        <span className="material-symbols-outlined text-accent-beige">inventory_2</span>
                                        <span className="text-sm uppercase tracking-wider font-semibold">Bespoke Packaging</span>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6">
                                <button className="h-14 px-12 rounded-full bg-accent-beige hover:bg-accent-beige-hover text-primary-dark font-bold text-lg transition-all shadow-lg hover:shadow-accent-beige/20 transform hover:-translate-y-1">
                                    Discuss Your Requirement
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Manufacturing;
