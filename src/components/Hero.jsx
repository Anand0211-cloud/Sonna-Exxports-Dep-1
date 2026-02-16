import React from 'react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-20">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2XA1s7XhSYYmYEpMD85HtDIOfhWMCRGNJ3TAV2cOei3bkxEMW2SHBm95loyxxv5x0-O4GrEC-Uh38__FXdxc3J1eagVrFwZmximoRxLq_YFBWnARZbf0OVLhAGGv7W_U3jwi0MBn7YrmH8doxfxsVl3FGjLXAg5HIes7clm2344LWkWn5Pxs3D6GTdofq0OJObbZLihs1BTF1n5EUMPiqqc12YmCtV2OdELM4cX09LBcF_ON8onm-_nrWw8ENorKAWOTJ6hW8Dw"
                    alt="High fashion model posing in dramatic lighting"
                    className="w-full h-full object-cover object-center opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-transparent to-primary-dark/80"></div>
            </div>
            <div className="relative z-10 w-full max-w-7xl px-6 md:px-10 flex flex-col items-center text-center gap-8 mt-10">
                <span className="text-accent-beige tracking-[0.2em] text-sm uppercase font-bold">Sonna Exxports • Est 1998</span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white leading-[1.1] max-w-4xl tracking-tight">
                    Global Fashion,<br /> <span className="italic text-accent-beige">Redefined.</span>
                </h1>
                <p className="text-lg text-white/80 max-w-xl font-light leading-relaxed">
                    Experience the pinnacle of luxury export fashion. Meticulously crafted textiles delivered to the world's most exclusive boutiques.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <button className="h-12 px-8 rounded-full bg-accent-beige hover:bg-accent-beige-hover text-primary-dark font-bold text-base transition-all transform hover:scale-105">
                        Discover Collection
                    </button>
                    <button className="h-12 px-8 rounded-full border border-white/30 hover:bg-white/10 text-white font-medium text-base transition-all backdrop-blur-sm">
                        View Lookbook
                    </button>
                </div>
                <div className="absolute bottom-10 animate-bounce">
                    <span className="material-symbols-outlined text-white/50 text-3xl">keyboard_arrow_down</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
