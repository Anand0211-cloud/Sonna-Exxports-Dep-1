import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';

const CollectionItem = ({ image, title, subtitle, description, tag, id }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/product/${id}`)}
            className="group relative flex-1 hover:flex-[2] transition-all duration-700 ease-in-out cursor-pointer overflow-hidden"
        >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
                        Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                </div>
            </div>
        </div>
    );
};



const Collections = () => {
    // Map products to portfolio items
    // Using products 1-8 for the two rows
    const portfolioItems = products.slice(0, 8).map(product => ({
        id: product.id,
        image: product.image, // Use the main product image
        title: product.name,
        tag: product.category,
        description: product.description
    }));

    const row1 = portfolioItems.slice(0, 4);
    const row2 = portfolioItems.slice(4, 8);

    return (
        <section className="py-20 px-4 md:px-10 w-full max-w-[1600px] mx-auto bg-background-light">
            <div className="flex flex-col gap-10">
                <div className="flex justify-between items-end px-2">
                    <div>
                        <h3 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Collections</h3>
                        <h2 className="text-4xl md:text-5xl font-serif text-primary-dark">Curated Categories</h2>
                    </div>
                </div>

                <div className="flex flex-col gap-2 animate-fade-in">
                    {/* Row 1 */}
                    <div className="flex flex-col lg:flex-row h-[1200px] lg:h-[600px] gap-2 w-full">
                        {row1.map((item) => (
                            <CollectionItem key={item.id} {...item} />
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col lg:flex-row h-[1200px] lg:h-[600px] gap-2 w-full">
                        {row2.map((item) => (
                            <CollectionItem key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Collections;
