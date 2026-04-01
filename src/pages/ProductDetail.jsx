import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { products } from '../data/products';
import { getMailtoLink } from '../utils/emailUtils';
import { useLanguage } from '../context/LanguageContext';

const ProductDetail = () => {
    const { id } = useParams();
    const { t } = useLanguage();
    const product = products.find(p => p.id === parseInt(id));
    const [selectedImage, setSelectedImage] = React.useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (product) {
            setSelectedImage(product.image);
        }
    }, [id, product]);

    if (!product) {
        return (
            <div className="flex h-screen w-full flex-col font-display antialiased bg-background-light dark:bg-background-dark text-text-dark dark:text-gray-100">
                <Header />
                <div className="flex-1 flex items-center justify-center">
                    <h2 className="text-2xl font-bold">{t('product.not_found')}</h2>
                </div>
                <Footer />
            </div>
        );
    }

    // Translated product fields
    const productName = t(`pname.${product.id}`);
    const productDesc = t(`pdesc.${product.id}`);
    const productCategory = t(`cat.${product.category}`);

    // Similar products logic: prioritize same category, then others, to always show 4
    const categoryProducts = products.filter(p => p.category === product.category && p.id !== product.id);
    const otherProducts = products.filter(p => p.category !== product.category && p.id !== product.id);
    const similarProducts = [...categoryProducts, ...otherProducts].slice(0, 4);

    return (
        <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 font-body antialiased transition-colors duration-300">
            <Header />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pt-28">
                <nav aria-label="Breadcrumb" className="flex overflow-hidden">
                    <ol className="flex items-center flex-wrap gap-y-1 text-sm text-gray-500 dark:text-gray-400">
                        <li><Link to="/" className="hover:text-primary dark:hover:text-primary">{t('nav.home')}</Link></li>
                        <li><span className="material-symbols-outlined text-xs mx-1">chevron_right</span></li>
                        <li><Link to="/collections" className="hover:text-primary dark:hover:text-primary">{t('nav.collection')}</Link></li>
                        <li><span className="material-symbols-outlined text-xs mx-1">chevron_right</span></li>
                        <li><span className="hover:text-primary dark:hover:text-primary">{productCategory}</span></li>
                        <li><span className="material-symbols-outlined text-xs mx-1">chevron_right</span></li>
                        <li className="font-medium text-gray-900 dark:text-white">{productName}</li>
                    </ol>
                </nav>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                    {/* Product Gallery */}
                    <div className="product-gallery space-y-4">
                        {/* Main Image - fixed size container */}
                        {(() => {
                            const lbImg = product.lbImage || (product.images && product.images.length === 7 ? product.images[6] : null);
                            const isLBSelected = lbImg && selectedImage === lbImg;
                            return (
                                <div className="aspect-w-3 aspect-h-4 bg-gray-100 dark:bg-gray-800 overflow-hidden relative shadow-sm group">
                                    <img
                                        alt={product.alt}
                                        className={`w-full h-full object-center transform transition duration-500 group-hover:scale-105 ${isLBSelected ? 'object-contain' : 'object-cover'}`}
                                        src={selectedImage || product.image}
                                    />
                                    <div className="absolute top-4 left-4 bg-white dark:bg-gray-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary shadow-sm rounded-sm">{t('product.new_season')}</div>
                                </div>
                            );
                        })()}
                        {/* Thumbnails */}
                        {product.lbImage ? (
                            /* 4-image products: 2x2 grid + full-width LB below */
                            <>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    {(product.images || []).map((img, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImage(img)}
                                            className={`aspect-w-1 aspect-h-1 bg-gray-100 dark:bg-gray-800 overflow-hidden ${(selectedImage || product.image) === img ? 'ring-2 ring-primary ring-offset-2 dark:ring-offset-background-dark' : ''}`}
                                        >
                                            <img alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover object-center" src={img} />
                                        </button>
                                    ))}
                                </div>
                                <div className="w-full mt-4 bg-gray-100 dark:bg-gray-800 overflow-hidden">
                                    <img alt="Lookbook" className="w-full h-auto object-cover object-center" src={product.lbImage} />
                                </div>
                            </>
                        ) : (
                            /* 7-image products: first 6 in 3-column grid + LB full-width below */
                            <>
                                <div className="grid grid-cols-3 gap-4 mt-4">
                                    {(product.images || []).slice(0, 6).map((img, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImage(img)}
                                            className={`aspect-w-1 aspect-h-1 bg-gray-100 dark:bg-gray-800 overflow-hidden ${(selectedImage || product.image) === img ? 'ring-2 ring-primary ring-offset-2 dark:ring-offset-background-dark' : ''}`}
                                        >
                                            <img alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover object-center" src={img} />
                                        </button>
                                    ))}
                                </div>
                                {product.images && product.images.length === 7 && (
                                    <div className="w-full mt-4 bg-gray-100 dark:bg-gray-800 overflow-hidden">
                                        <img alt="Lookbook" className="w-full h-auto object-cover object-center" src={product.images[6]} />
                                    </div>
                                )}
                            </>
                        )}
                    </div>

                    {/* Product Info */}
                    <div className="mt-10 px-0 sm:mt-16 lg:mt-0">
                        <div className="mb-6">
                            <h1 className="font-display text-4xl font-bold mb-2">{productName}</h1>
                        </div>
                        <div className="prose prose-sm dark:prose-invert text-gray-600 dark:text-gray-300 mb-8">
                            <p>{productDesc}</p>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 mb-8">
                            <h4 className="text-base font-semibold mb-2">{t('product.ready')}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{t('product.guide')}</p>
                            <a 
                                href={getMailtoLink('product', { name: product.name, ref: product.ref })}
                                className="w-full flex items-center justify-center bg-primary text-white text-lg font-medium px-8 py-4 rounded-md shadow-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 transform hover:-translate-y-0.5"
                            >
                                <span className="material-symbols-outlined mr-2">chat</span>
                                {t('product.discuss')}
                            </a>
                            <p className="text-center mt-3 text-xs text-gray-400 dark:text-gray-500">
                                {t('product.response')}
                            </p>
                        </div>

                        <div className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8 shadow-sm">
                            <h3 className="font-display text-lg font-semibold mb-4 flex items-center">
                                <span className="material-symbols-outlined text-primary mr-2 text-xl">tune</span> {t('product.tech')}
                            </h3>
                            <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                                {Object.entries(product.specifications).map(([key, value]) => (
                                    <div key={key}>
                                        <span className="block text-gray-700 dark:text-gray-300 text-sm uppercase tracking-wider mb-1">{t(`spec.${key}`)}</span>
                                        <span className="font-medium text-lg text-gray-900 dark:text-white">{t(`specval.${value}`)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6 mb-10">
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                                <h3 className="font-display text-lg font-semibold mb-4">{t('product.custom_opts')}</h3>
                                <div className="space-y-4">
                                    {
                                        (product.customization || [
                                            'Custom Labels & Hangtags',
                                            'Embroidery or Print detailing'
                                        ]).map((option, index) => (
                                            <div key={index} className="flex items-start space-x-2">
                                                <span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                                                <p className="text-lg text-gray-800 dark:text-gray-200">{t(`cust.${option}`)}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>


                        <div className="mt-8 border-t border-gray-200 dark:border-gray-700">
                            <details className="group py-4 border-b border-gray-200 dark:border-gray-700">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-gray-900 dark:text-white">
                                    <span>{t('product.shipping_title')}</span>
                                    <span className="transition group-open:rotate-180">
                                        <span className="material-symbols-outlined">expand_more</span>
                                    </span>
                                </summary>
                                <div className="text-gray-500 dark:text-gray-400 mt-3 text-sm">
                                    {t('product.shipping_desc')}
                                </div>
                            </details>
                            <details className="group py-4 border-b border-gray-200 dark:border-gray-700">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-gray-900 dark:text-white">
                                    <span>{t('product.sust_title')}</span>
                                    <span className="transition group-open:rotate-180">
                                        <span className="material-symbols-outlined">expand_more</span>
                                    </span>
                                </summary>
                                <div className="text-gray-500 dark:text-gray-400 mt-3 text-sm">
                                    {t('product.sust_desc')}
                                </div>
                            </details>
                        </div>
                    </div>
                </div>

                {/* Similar Styles */}
                {
                    similarProducts.length > 0 && (
                        <section className="mt-24">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-display font-bold">{t('product.similar')}</h2>
                                <Link to="/collections" className="text-primary hover:text-opacity-80 font-medium flex items-center">
                                    {t('product.view_collection')} <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
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
                                                <h3 className="text-sm text-primary dark:text-gray-200">
                                                    <Link to={`/product/${simProduct.id}`}>
                                                        <span aria-hidden="true" className="absolute inset-0"></span>
                                                        {t(`pname.${simProduct.id}`)}
                                                    </Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )
                }
            </main >
            <Footer />
        </div >
    );
};

export default ProductDetail;
