import React from 'react';

const InstagramFeed = () => {
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
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <span className="text-primary font-bold tracking-widest text-sm uppercase">Process & Lifestyle</span>
                            <h2 className="font-serif text-4xl md:text-5xl mt-3 text-primary-dark">Follow @SonnaExxports</h2>
                        </div>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors border-b-2 border-primary/20 hover:border-primary pb-1">
                            <span className="material-symbols-outlined text-xl">camera_alt</span>
                            View Instagram
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
