import React from 'react';

const Editorial = () => {
    return (
        <section className="py-16 md:py-24 bg-[#3a1538]">
            <div className="layout-container flex justify-center px-4 md:px-10">
                <div className="w-full max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="order-2 lg:order-1 flex flex-col gap-8">
                            <div className="flex items-center gap-4 text-accent-beige">
                                <span className="h-px w-12 bg-accent-beige"></span>
                                <span className="uppercase tracking-widest text-sm font-bold">Editorial Spotlight</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
                                Crafting Excellence <br />Since 1998.
                            </h2>
                            <div className="space-y-6 text-white/80 text-lg font-light leading-relaxed">
                                <p>
                                    Our commitment to quality ensures every piece meets global standards. From the sourcing of raw cotton in Egypt to the final stitch in our Italian ateliers, Sonna Exxports represents the gold standard in fashion logistics and manufacturing.
                                </p>
                                <p>
                                    We collaborate with over 50 countries, bridging the gap between local artisans and global luxury houses.
                                </p>
                            </div>
                            <div className="pt-4 flex flex-wrap gap-8">
                                <div className="flex flex-col gap-1">
                                    <span className="text-3xl font-serif text-accent-beige">50+</span>
                                    <span className="text-sm text-white/60 uppercase tracking-wider">Countries Served</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-3xl font-serif text-accent-beige">25 Years</span>
                                    <span className="text-sm text-white/60 uppercase tracking-wider">Of Excellence</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-3xl font-serif text-accent-beige">100%</span>
                                    <span className="text-sm text-white/60 uppercase tracking-wider">Sustainable Sourcing</span>
                                </div>
                            </div>
                            <button className="mt-4 w-fit flex items-center gap-3 text-white font-bold group">
                                <span className="border-b border-accent-beige pb-1 group-hover:text-accent-beige transition-colors">Read Our Story</span>
                                <span className="material-symbols-outlined text-accent-beige group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                            </button>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <div className="absolute -inset-4 bg-accent-beige/10 transform rotate-3"></div>
                            <div className="relative overflow-hidden aspect-[4/5] shadow-2xl">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1ybDI4BeJOE3iOXM47hPnyTZSQ-g0K_gvQ1grHqdvskoKJBLpQ45AJTM7RS9zuYlt-1IKLu3XXwxN-suml_MR5LV1RZIWk98D9bSBBtKle5M2tS95H-e65pPNtBq_ROvp2Pm3arOikmLGfWm3CMcJZSsBecaHtGdYALa8CRxDXzM1j2Y35K_oeq06c3bZxsNZXX0tAsXi7lK1ie1NHKRB7SokG2jqW4j4tPt8OoxkahflSokd0xK6WXIDn2JvQRHmHxdhkn_uqA"
                                    alt="Fashion designer working on sketches"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md p-4 border border-white/20 max-w-xs">
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-accent-beige">format_quote</span>
                                        <p className="text-white text-sm italic font-serif">"Fashion is not just about clothes, it is about a look."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Editorial;
