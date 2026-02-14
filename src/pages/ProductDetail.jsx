import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { products } from '../data/products';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return (
            <div className="flex h-screen w-full flex-col font-display antialiased bg-background-light dark:bg-background-dark text-text-dark dark:text-gray-100">
                <Header />
                <div className="flex-1 flex items-center justify-center">
                    <h2 className="text-2xl font-bold">Product not found</h2>
                </div>
                <Footer />
            </div>
        );
    }

    // Similar products logic (simple: same category, not current product)
    const similarProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 font-body antialiased transition-colors duration-300">
            <Header />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pt-28">
                <nav aria-label="Breadcrumb" className="flex">
                    <ol className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <li><Link to="/" className="hover:text-primary dark:hover:text-primary">Home</Link></li>
                        <li><span className="material-symbols-outlined text-xs mx-1">chevron_right</span></li>
                        <li><Link to="/collections" className="hover:text-primary dark:hover:text-primary">Collections</Link></li>
                        <li><span className="material-symbols-outlined text-xs mx-1">chevron_right</span></li>
                        <li><span className="hover:text-primary dark:hover:text-primary">{product.category}</span></li>
                        <li><span className="material-symbols-outlined text-xs mx-1">chevron_right</span></li>
                        <li className="font-medium text-gray-900 dark:text-white">{product.name}</li>
                    </ol>
                </nav>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                    {/* Product Gallery */}
                    <div className="product-gallery space-y-4">
                        <div className="aspect-w-3 aspect-h-4 bg-gray-100 dark:bg-gray-800 overflow-hidden relative shadow-sm group">
                            <img
                                alt={product.alt}
                                className="w-full h-full object-cover object-center transform transition duration-500 group-hover:scale-105"
                                src={product.image}
                            />
                            <div className="absolute top-4 left-4 bg-white dark:bg-gray-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary shadow-sm rounded-sm">New Season</div>
                        </div>
                        {/* Thumbnails - placeholder reusing same image for now as we lack multiple angles */}
                        <div className="grid grid-cols-4 gap-4 mt-4">
                            {[1, 2, 3, 4].map((item) => (
                                <button key={item} className={`aspect-w-1 aspect-h-1 bg-gray-100 dark:bg-gray-800 overflow-hidden ${item === 1 ? 'ring-2 ring-primary ring-offset-2 dark:ring-offset-background-dark' : 'opacity-70 hover:opacity-100 transition-opacity'}`}>
                                    <img alt="Thumbnail" className="w-full h-full object-cover object-center" src={product.image} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="mt-10 px-0 sm:mt-16 lg:mt-0">
                        <div className="mb-6">
                            <h1 className="font-display text-4xl font-bold mb-2">{product.name}</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-mono tracking-wide">REF: {product.ref}</p>
                        </div>
                        <div className="prose prose-sm dark:prose-invert text-gray-600 dark:text-gray-300 mb-8">
                            <p>{product.description}</p>
                        </div>

                        <div className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8 shadow-sm">
                            <h3 className="font-display text-lg font-semibold mb-4 flex items-center">
                                <span className="material-symbols-outlined text-primary mr-2 text-xl">tune</span> Technical Specifications
                            </h3>
                            <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                                <div>
                                    <span className="block text-gray-700 dark:text-gray-300 text-sm uppercase tracking-wider mb-1">Fabric Composition</span>
                                    <span className="font-medium text-lg text-gray-900 dark:text-white">{product.specifications.fabric}</span>
                                </div>
                                <div>
                                    <span className="block text-gray-700 dark:text-gray-300 text-sm uppercase tracking-wider mb-1">GSM (Weight)</span>
                                    <span className="font-medium text-lg text-gray-900 dark:text-white">{product.specifications.gsm}</span>
                                </div>
                                <div>
                                    <span className="block text-gray-700 dark:text-gray-300 text-sm uppercase tracking-wider mb-1">Fit Type</span>
                                    <span className="font-medium text-lg text-gray-900 dark:text-white">{product.specifications.fit}</span>
                                </div>
                                <div>
                                    <span className="block text-gray-700 dark:text-gray-300 text-sm uppercase tracking-wider mb-1">Minimum Order Qty</span>
                                    <span className="font-medium text-lg text-gray-900 dark:text-white">{product.specifications.moq}</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 mb-10">
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                                <h3 className="font-display text-lg font-semibold mb-4">Customization Options</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-2">
                                        <span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                                        <p className="text-lg text-gray-800 dark:text-gray-200">Custom Labels & Hangtags</p>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                        <span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                                        <p className="text-lg text-gray-800 dark:text-gray-200">Embroidery or Print detailing</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                            <h4 className="text-base font-semibold mb-2">Ready to place a bulk order?</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Our dedicated export team will guide you through sampling, pricing, and logistics.</p>
                            <Link to="/contact" className="w-full flex items-center justify-center bg-primary text-white text-lg font-medium px-8 py-4 rounded-md shadow-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 transform hover:-translate-y-0.5">
                                <span className="material-symbols-outlined mr-2">chat</span>
                                Discuss Your Requirement
                            </Link>
                            <p className="text-center mt-3 text-xs text-gray-400 dark:text-gray-500">
                                Typical response time: Within 24 hours
                            </p>
                        </div>

                        <div className="mt-8 border-t border-gray-200 dark:border-gray-700">
                            <details className="group py-4 border-b border-gray-200 dark:border-gray-700">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-gray-900 dark:text-white">
                                    <span>Shipping & Logistics</span>
                                    <span className="transition group-open:rotate-180">
                                        <span className="material-symbols-outlined">expand_more</span>
                                    </span>
                                </summary>
                                <div className="text-gray-500 dark:text-gray-400 mt-3 text-sm">
                                    We ship globally via air and sea freight. FOB, CIF, and DDP terms available. Standard lead time for production is 45-60 days post-sample approval.
                                </div>
                            </details>
                            <details className="group py-4 border-b border-gray-200 dark:border-gray-700">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-gray-900 dark:text-white">
                                    <span>Sustainability Certification</span>
                                    <span className="transition group-open:rotate-180">
                                        <span className="material-symbols-outlined">expand_more</span>
                                    </span>
                                </summary>
                                <div className="text-gray-500 dark:text-gray-400 mt-3 text-sm">
                                    Our manufacturing partners are OEKO-TEX certified. We utilize eco-friendly dyes and offer organic cotton alternatives upon request.
                                </div>
                            </details>
                        </div>
                    </div>
                </div>

                {/* Similar Styles */}
                {similarProducts.length > 0 && (
                    <section className="mt-24">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-display font-bold">Similar Export Styles</h2>
                            <Link to="/collections" className="text-primary hover:text-opacity-80 font-medium flex items-center">
                                View Collection <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 xl:gap-x-8">
                            {similarProducts.map((simProduct) => (
                                <div key={simProduct.id} className="group relative">
                                    <div className="w-full aspect-w-3 aspect-h-4 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                                        <img
                                            alt={simProduct.alt}
                                            className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity"
                                            src={simProduct.image}
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-700 dark:text-gray-200">
                                                <Link to={`/product/${simProduct.id}`}>
                                                    <span aria-hidden="true" className="absolute inset-0"></span>
                                                    {simProduct.name}
                                                </Link>
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{simProduct.specifications.gsm} | {simProduct.specifications.fabric}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default ProductDetail;
