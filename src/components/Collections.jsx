import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

const CollectionItem = ({ image, title, subtitle, description, tag, id }) => {
    const navigate = useNavigate();
    const { t } = useLanguage();

    return (
        <div
            onClick={() => navigate(`/product/${id}`)}
            className="group relative flex-1 min-h-[300px] hover:flex-[2] transition-all duration-700 ease-in-out cursor-pointer overflow-hidden"
        >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end h-full">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-accent-beige text-xs font-bold tracking-wider uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity delay-100">{tag}</span>
                    <h3 className="text-3xl font-serif text-white mb-2">{title}</h3>
                    <p className="text-white/80 line-clamp-2 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 h-0 group-hover:h-auto overflow-hidden">
                        {description}
                    </p>
                    <button className="mt-4 flex items-center gap-2 text-white border-b border-white pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                        {t('collections.explore')} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                </div>
            </div>
        </div>
    );
};



const Collections = () => {
    const { t } = useLanguage();
    // Map products to portfolio items
    // Using products 1-12 for the three rows
    const portfolioItems = products.slice(0, 12).map(product => ({
        id: product.id,
        image: product.image, // Use the main product image
        title: t(`pname.${product.id}`),
        tag: t(`cat.${product.category}`),
        description: t(`pdesc.${product.id}`)
    }));

    const row1 = portfolioItems.slice(0, 4);
    const row2 = portfolioItems.slice(4, 8);
    const row3 = portfolioItems.slice(8, 12);

    return (
        <section className="py-20 w-full bg-background-light">
            <div className="px-4 md:px-10 max-w-[1600px] mx-auto flex flex-col gap-10">
                <div className="flex justify-between items-end px-2">
                    <div>
                        <h3 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">{t('collections.tag')}</h3>
                        <h2 className="text-4xl md:text-5xl font-serif text-primary-dark">{t('collections.title')}</h2>
                    </div>
                </div>

                <div className="flex flex-col gap-2 animate-fade-in">
                    {/* Row 1 */}
                    <div className="flex flex-col lg:flex-row lg:h-[600px] gap-2 w-full">
                        {row1.map((item) => (
                            <CollectionItem key={item.id} {...item} />
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col lg:flex-row lg:h-[600px] gap-2 w-full">
                        {row2.map((item) => (
                            <CollectionItem key={item.id} {...item} />
                        ))}
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-col lg:flex-row lg:h-[600px] gap-2 w-full">
                        {row3.map((item) => (
                            <CollectionItem key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Collections;
