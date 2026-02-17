import React from 'react';

const VideoSection = () => {
    return (
        <section className="w-full relative bg-black overflow-hidden">
            <div className="relative w-full h-[60vh] md:h-[80vh] group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center">
                    <button className="size-24 md:size-32 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:scale-110 hover:bg-white hover:text-primary transition-all duration-300 shadow-xl border border-white/30">
                        <span className="material-symbols-outlined text-5xl md:text-6xl translate-x-1">play_arrow</span>
                    </button>
                </div>
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzZQtZWy5jCRHxtdOskrw98GVFPJhzvIaqxDAsz7E3rcSPEb-STornx6GZDSxqgdG9cZHhDNr4jSbUaoEjxDPoYDB0Ph--v_OXvF2Meg7K1JuwnJT5EN8c2sWPhIIISFNFBT4Q9YYNO2gDBSJiAmyt0r3xgcrSAZtMK90erRvw6cSL3TOzqnDEyZkx48xiIvC7AGgHBnT0IV-3-V6aBE4Fk3twk6i69GT64s4hs_n29qSMwToEF5nrsEsbosi7PTjsxTqtCrTcWQ"
                    alt="Craftsman working on garment"
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent z-20"></div>
            </div>
        </section>
    );
};

export default VideoSection;
