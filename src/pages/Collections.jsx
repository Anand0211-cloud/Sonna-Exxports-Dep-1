import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { products as Products } from '../data/products';
import bannerImg from '../assets/Portfolio banner.png';

const Collections = () => {
    return (
        <div className="flex h-auto min-h-screen w-full flex-col font-display overflow-x-hidden antialiased bg-background-light dark:bg-background-dark text-text-dark dark:text-gray-100">
            <Header />

            {/* Banner Section */}
            <div className="w-full h-64 md:h-96 lg:h-[500px] relative">
                <img src={bannerImg} alt="Portfolio Banner" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white px-4">
                    <span className="text-accent-beige font-bold tracking-[0.2em] text-sm md:text-base uppercase mb-4 block">Our Work</span>
                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 text-center text-white drop-shadow-md">Our Portfolio</h1>
                    <p className="text-white/90 text-lg md:text-xl font-light text-center max-w-2xl hidden md:block">
                        Explore our curated collection of premium garments, where craftsmanship meets contemporary design. Each piece tells a story of quality and dedication.
                    </p>
                </div>
            </div>

            <div className="w-full pt-16 pb-16 px-6 sm:px-10 lg:px-16">
                {/* Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {Products.map((product) => (
                        <Link key={product.id} to={`/product/${product.id}`} className="group block cursor-pointer">
                            <div className="relative aspect-[4/5] overflow-hidden bg-[#f8f8f8] mb-4 group rounded-md">
                                <img
                                    alt={product.alt}
                                    className={`absolute inset-0 w-full h-full transition-transform duration-700 opacity-100 group-hover:opacity-0 ${[4, 8, 12].includes(product.id) ? 'object-contain object-center scale-[1.05] group-hover:scale-[1.08] mix-blend-multiply' : 'object-cover object-top transform group-hover:scale-[1.03]'}`}
                                    src={product.image}
                                />
                                {product.hoverImage && (
                                    <img
                                        alt={product.alt}
                                        className={`absolute inset-0 w-full h-full transition-transform duration-700 opacity-0 group-hover:opacity-100 ${[4, 8, 12].includes(product.id) ? 'object-contain object-center scale-[1.05] group-hover:scale-[1.08] mix-blend-multiply' : 'object-cover object-top transform group-hover:scale-[1.03]'}`}
                                        src={product.hoverImage}
                                    />
                                )}
                            </div>
                            <h3 className="text-xl font-medium group-hover:text-primary transition-colors">{product.name}</h3>
                        </Link>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-24 mb-12 flex flex-col items-center justify-center text-center gap-6 max-w-3xl mx-auto p-10 md:p-14 bg-white border border-primary/10 rounded-2xl shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-serif text-primary-dark leading-tight">Partner with a Reliable Manufacturer</h2>
                    <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full justify-center">
                        <button className="h-14 px-8 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-base transition-all shadow-md transform hover:-translate-y-1">
                            Let's Build Long-Term Supply
                        </button>
                        <button className="h-14 px-8 rounded-full bg-accent-beige hover:bg-accent-beige-hover text-primary-dark font-bold text-base transition-all shadow-md transform hover:-translate-y-1">
                            Catalogue
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Collections;
