import React from 'react';
import customizationImg from '../assets/home/home page customisation.png';

const Manufacturing = () => {
    return (
        <section className="py-24 bg-[#460566]">
            <div className="layout-container flex justify-center px-4 md:px-10">
                <div className="w-full max-w-7xl">
                    <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
                        <div className="relative order-1">
                            <div className="relative w-full aspect-[4/3] lg:aspect-video overflow-hidden shadow-2xl group">
                                <img
                                    src={customizationImg}
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
                            <div className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-xl space-y-4">
                                <p>We provide end-to-end custom garment manufacturing designed around your brand’s requirements.</p>
                                <p>From fabric and fit to custom labeling and bespoke packaging, every detail is handled with structured precision.</p>
                                <p>Whether you come with a tech pack or need full product development from scratch, our team ensures seamless execution with export-grade quality.</p>
                            </div>
                            <div className="space-y-4 pt-4 border-t border-white/10">
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                    <div className="flex items-center gap-4 text-white/80">
                                        <span className="material-symbols-outlined text-accent-beige">palette</span>
                                        <span className="text-sm uppercase tracking-wider font-semibold">Print Techniques</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-white/80">
                                        <span className="material-symbols-outlined text-accent-beige">texture</span>
                                        <span className="text-sm uppercase tracking-wider font-semibold">Fabric Selection</span>
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
                            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                                As a trusted garment manufacturer & exporter, we deliver scalable production with consistency and discipline.
                            </p>
                            <div className="pt-2">
                                <button className="h-14 px-12 rounded-full bg-accent-beige hover:bg-accent-beige-hover text-primary-dark font-bold text-lg transition-all shadow-lg hover:shadow-accent-beige/20 transform hover:-translate-y-1">
                                    Start Your Custom Manufacturing Journey
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
