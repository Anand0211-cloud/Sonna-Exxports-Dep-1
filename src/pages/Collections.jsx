import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { products as Products } from '../data/products';

const Collections = () => {
    return (
        <div className="flex h-auto min-h-screen w-full flex-col font-display overflow-x-hidden antialiased bg-background-light dark:bg-background-dark text-text-dark dark:text-gray-100">
            <Header />
            <div className="w-full pt-32 pb-16 px-6 sm:px-10 lg:px-16">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
                    <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Our Work</span>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#460566] mb-6">Our Portfolio</h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg font-light leading-relaxed">
                        Explore our curated collection of premium garments, where craftsmanship meets contemporary design. Each piece tells a story of quality and dedication.
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {Products.map((product) => (
                        <Link key={product.id} to={`/product/${product.id}`} className="group block cursor-pointer">
                            <div className="relative aspect-[4/5] overflow-hidden bg-[#f8f8f8] mb-4 group rounded-md">
                                <img
                                    alt={product.alt}
                                    className="absolute inset-0 w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-[1.03] opacity-100 group-hover:opacity-0"
                                    src={product.image}
                                />
                                {product.hoverImage && (
                                    <img
                                        alt={product.alt}
                                        className="absolute inset-0 w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-[1.03] opacity-0 group-hover:opacity-100"
                                        src={product.hoverImage}
                                    />
                                )}
                            </div>
                            <h3 className="text-xl font-medium group-hover:text-primary transition-colors">{product.name}</h3>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Collections;
