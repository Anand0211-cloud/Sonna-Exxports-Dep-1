import React from 'react';

const Certifications = () => {
    return (
        <section className="py-16 bg-background-light border-y border-primary/5">
            <div className="layout-container px-4 md:px-10">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest text-sm uppercase">Excellence</span>
                        <h2 className="font-serif text-4xl md:text-5xl mt-3 text-primary-dark">Accreditations & Standards</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        {/* Dummy Certificate 1 */}
                        <div className="flex flex-col items-center gap-4 group cursor-pointer">
                            <div className="w-96 h-72 bg-white border border-primary/10 shadow-sm flex items-center justify-center relative overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-md">
                                <div className="absolute inset-0 border-4 border-double border-primary/5 m-4"></div>
                                <div className="flex flex-col items-center text-center p-6">
                                    <span className="material-symbols-outlined text-6xl text-primary/40 mb-4">workspace_premium</span>
                                    <h4 className="font-serif text-primary-dark font-bold text-2xl">ISO 9001</h4>
                                    <p className="text-sm text-primary/60 mt-2 uppercase tracking-wider">Quality Management</p>
                                </div>
                            </div>
                        </div>

                        {/* Dummy Certificate 2 */}
                        <div className="flex flex-col items-center gap-4 group cursor-pointer">
                            <div className="w-96 h-72 bg-white border border-primary/10 shadow-sm flex items-center justify-center relative overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-md">
                                <div className="absolute inset-0 border-4 border-double border-primary/5 m-4"></div>
                                <div className="flex flex-col items-center text-center p-6">
                                    <span className="material-symbols-outlined text-6xl text-primary/40 mb-4">eco</span>
                                    <h4 className="font-serif text-primary-dark font-bold text-2xl">GOTS Certified</h4>
                                    <p className="text-sm text-primary/60 mt-2 uppercase tracking-wider">Global Organic Textile Standard</p>
                                </div>
                            </div>
                        </div>

                        {/* Dummy Certificate 3 */}
                        <div className="flex flex-col items-center gap-4 group cursor-pointer">
                            <div className="w-96 h-72 bg-white border border-primary/10 shadow-sm flex items-center justify-center relative overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-md">
                                <div className="absolute inset-0 border-4 border-double border-primary/5 m-4"></div>
                                <div className="flex flex-col items-center text-center p-6">
                                    <span className="material-symbols-outlined text-6xl text-primary/40 mb-4">verified_user</span>
                                    <h4 className="font-serif text-primary-dark font-bold text-2xl">OEKO-TEX®</h4>
                                    <p className="text-sm text-primary/60 mt-2 uppercase tracking-wider">Standard 100</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
