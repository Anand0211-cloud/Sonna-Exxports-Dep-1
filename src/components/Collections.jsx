import React from 'react';

const CollectionItem = ({ image, title, subtitle, description, tag }) => {
    return (
        <div className="group relative flex-1 hover:flex-[2] transition-all duration-700 ease-in-out cursor-pointer overflow-hidden">
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
    // Original data
    const baseCollections = [
        {
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnj3A_EwBs65_yb8EVWlwho3S7_mwDj1-e_4V4Q7Yi5uzqfX632vyRM9-Xnj2kqajCQpwb-HqCHTxLibaBhagSbaNHfQq_fpz4qP1_8KZ9IYqfnynE0PW26TPuxvJliLU_HBSfauAdcH7zbjtIqRyfYGec2V7LKqkki_iDxvJvFXYHuixvQ4idQ3FsS8J7tsWBMwE_7JcN5Dat0i8n8sz0DbRPyhb-zgZhufGPF6ZxFQA3ei2H1OHvlBxbmDjprbZcJSaXOi_Eew",
            title: "Women's Wear",
            tag: "New Season",
            description: "Elegant silhouettes and premium fabrics designed for the modern woman."
        },
        {
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDx5r0RyJkVe9Dh85BjmKFPFCIOWT9KQVT1-yeeJV5due3AL2gem1IezVIa5mf2fOqsgnR-8gdVj5rJWjNxluRSY6XnKpCrTBExKfKnmZPfUvfCbmjt6Uvz5nOc8gyB-v2OTuZDRnsacgvq4wOnSquK8tAOCyBcQXLEiKLtizo-qr9kPTSiFj5ezvesg9XFugXFBqOtx2IpwWebgX1q-6hkackJ50yoZMux6dxKukJn8pIRvCCZQgUAp_PXge60soBBEjLc6a8AKw",
            title: "Men's Tailoring",
            tag: "Bespoke",
            description: "Timeless cuts meet contemporary comfort in our latest menswear line."
        },
        {
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzZQtZWy5jCRHxtdOskrw98GVFPJhzvIaqxDAsz7E3rcSPEb-STornx6GZDSxqgdG9cZHhDNr4jSbUaoEjxDPoYDB0Ph--v_OXvF2Meg7K1JuwnJT5EN8c2sWPhIIISFNFBT4Q9YYNO2gDBSJiAmyt0r3xgcrSAZtMK90erRvw6cSL3TOzqnDEyZkx48xiIvC7AGgHBnT0IV-3-V6aBE4Fk3twk6i69GT64s4hs_n29qSMwToEF5nrsEsbosi7PTjsxTqtCrTcWQ",
            title: "Sustainable Textiles",
            tag: "Eco-Conscious",
            description: "Future-forward fabrics sourced with integrity and environmental care."
        },
        {
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAduibqbeD8aHiEOj8Wk85sQM-N--MHrTVNEWl6kLOEiGukPuGPXCwQ2MTuY_rsxGpgsq6Iq34LkvF_gWQsexAkY4lWxDKny-_lGFGe489k6Icj9xLXYagZtZxB9pabAbFD06S5DQ-HAO0KmqOpjD1CXU4Gb6pbty9eXocYZzwclqd0WbHAdF6tHr4Mn8_Vr5q6ZRFoIDhDBqJJj4GWrJDFgFCfXP45NrTD0euuCMCnzQbhuk6KsyJh2FiLN7gx_EgwIkSQMwV7hQ",
            title: "Luxury Goods",
            tag: "Accessories",
            description: "The finishing touches that define a complete and polished look."
        }
    ];

    // Duplicate the data to get 8 items (2 rows of 4)
    const collections = [...baseCollections, ...baseCollections].map((item, index) => ({
        ...item,
        id: index // add unique id for React keys
    }));

    const row1 = collections.slice(0, 4);
    const row2 = collections.slice(4, 8);

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
