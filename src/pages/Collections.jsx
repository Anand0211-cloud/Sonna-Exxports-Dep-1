import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { products as Products } from '../data/products';

const Collections = () => {
    return (
        <div className="flex h-auto min-h-screen w-full flex-col font-display overflow-x-hidden antialiased bg-background-light dark:bg-background-dark text-text-dark dark:text-gray-100">
            <Header />
            <div className="w-full max-w-[1440px] mx-auto pt-24 pb-16 px-6 lg:px-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-10 border-b border-gray-200 pb-4">
                    <p className="text-sm text-gray-500 font-medium">Showing all {Products.length} results</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer hover:text-gray-900 transition-colors">
                        <span>Sort by popularity</span>
                        <span className="material-symbols-outlined text-[18px]">expand_more</span>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
                    {Products.map((product) => (
                        <Link key={product.id} to={`/product/${product.id}`} className="group block cursor-pointer">
                            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                                <img
                                    alt={product.alt}
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 opacity-100 group-hover:opacity-0"
                                    src={product.image}
                                />
                                {product.hoverImage && (
                                    <img
                                        alt={product.alt}
                                        className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 opacity-0 group-hover:opacity-100"
                                        src={product.hoverImage}
                                    />
                                )}
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 group-hover:text-primary transition-colors">{product.name}</h3>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Collections;
