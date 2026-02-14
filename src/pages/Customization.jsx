import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Customization = () => {
    const [activeCategory, setActiveCategory] = useState('school');

    const uniformDetails = {
        school: {
            id: 'school',
            title: "School Uniforms",
            description: "Durable, heritage-inspired attire designed to foster institutional pride and daily comfort. Our school uniforms catch the spirit of your institution while ensuring students stay comfortable throughout their active days.",
            features: [
                "Stain-resistant & easy-care fabrics",
                "Reinforced stitching for durability",
                "Breathable cotton blends for all-day comfort",
                "Custom badging and embroidery"
            ],
            fabric: "Poly-Viscose / High-Grade Cotton",
            variants: [
                {
                    name: "Classic Navy",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbDZ5la_XcBYGKdWI2_VC1I4dtzZuo-kuZ-daCc0IpiV0Z8ziE78TPmPKYRQ_Jm3dHvL0MQI7kNporfhmP5MPexQjyyotJoMOlb3dp5XD1LvDWNtZj5GIMikyQ_KNE30yUFf78Ax6xLBRE52JPq9x7D7i2U6FDug36rSp7WlVQI_Vr5ckMSjEAnBUIqNqYrX9LXtk3tHbHoD-R4oPQweuPG8IQuSN8YYP5qWVTzlLW3iqJ_1u9xDHjPxHLRQnRlsF1Ds79au6kww"
                },
                {
                    name: "Heritage Grey",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnEpYgIqIlDIoU3RonE0xQsaY_NcL3hggTX9gJQgm287l4nCqIYMv-tObNvFCFioSA0SbqnDAY2-JhJ9Bykr3w4B3hyoIhtejeYvV_c13WItyoQp7omZ0avvB22pTFbBJj4vk1KKMoMFrXQbvh0wncsjTf5j_FttTbSUOWjlsKmo8s3smu1KG_jcRO01TMvyPf7oO0g8snnMa_23Oev0ullGAi7kXsHSYaxbBRltnGHv8bG3BHLMZL3Ck-GFFE66nrLzwjf0E3jw"
                },
                {
                    name: "Crimson Red",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPonUOwHr2Ie0YKk3mY0AcYNdYpiIZASW20iU4JmF38IBl1EKXxLxhrOQIQetMLu_5Jl8rzZpFMqXxIucUZEZQKxNniw9B4jEqq3MZmOoruB_uks0PaCAj6dFDQEE8EZFQyhIQuv6De4O3Q5LBoIAwivG4ALlJNBdOSIgK7QvL5beHS4ud51iqwaruLi58aiePvCC3wXHeuAdKCCKrNAwWtmqBAcDR1Wrm7FHlwNmE3SL2tiZXwWTIL8P2Z_QeWX5rKMKvHoT7rg"
                }
            ]
        },
        industrial: {
            id: 'industrial',
            title: "Industrial Uniforms",
            description: "High-performance utility wear engineered for safety, durability, and professional consistency. Designed to withstand rigorous work environments while protecting your most valuable asset—your workforce.",
            features: [
                "Fire-retardant & chemical-resistant options",
                "High-visibility reflective taping",
                "Reinforced knees and stress points",
                "Moisture-wicking industrial blends"
            ],
            fabric: "Heavy-duty Twill / Treated Cotton",
            variants: [
                {
                    name: "Safety Orange",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdO6S9dedDKE8jV_-c5UkDaskWSdFqzP6iyibHQWyABr5mpu0vl74NqDqvThtgIecuilcEsEaj8XpgXeeiPSWdVk4UKEtwPTDUl0BH5P94pmp1Dx_wudOSQ0djeoGmLGfwFZNdxAGRSOgeo_aetqQWqn3EinroQ6fZY0geT3m-grjWYpYX55itUsG08Fu6AAU4pzNVmwD2o8HtTIcmXu0_upiiawM6cO-mUVdJ1DS2CHcva66weXoQjS_5Nxifg19G2hgLKorPkw"
                },
                {
                    name: "Utility Blue",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAnLndt2iQ_9JI6nccq2C0vYdaJHws6Ej7GyKvXmgE5-lMPeKz_pPORlHzJJT7K8eV1WSOXJ49gtqKaUddChUPV5b7iKhNSPHLcLZoKYQgyyUU1jUg28z4WvMfkExD9HIvwR3ckzEGRNvZtKnkZoiMytzyIpEZxzqsYsJJb4KCb9KbYhK7OcgsXDgusNZjCE7GvZ-VlhRf6PhJa_QLrH5AwN4VePP6INPdEdyAlv_3OgxsD1xrh04MHG_kHuMQt1QRkUjBxA_fJQ"
                },
                {
                    name: "Slate Grey",
                    image: "https://images.unsplash.com/photo-1542272617-08f086303294?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                }
            ]
        },
        corporate: {
            id: 'corporate',
            title: "Corporate Uniforms",
            description: "Polished, professional attire reflecting corporate identity with premium fabrics and fits. Elevate your brand image with tailored solutions that exude professionalism and style.",
            features: [
                "Wrinkle-free premium shirting",
                "Modern tailored cuts for men and women",
                "Subtle branding integration",
                "Color-fast long-lasting fabrics"
            ],
            fabric: "Fine Cotton / Linen Blends",
            variants: [
                {
                    name: "Executive White",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbDZ5la_XcBYGKdWI2_VC1I4dtzZuo-kuZ-daCc0IpiV0Z8ziE78TPmPKYRQ_Jm3dHvL0MQI7kNporfhmP5MPexQjyyotJoMOlb3dp5XD1LvDWNtZj5GIMikyQ_KNE30yUFf78Ax6xLBRE52JPq9x7D7i2U6FDug36rSp7WlVQI_Vr5ckMSjEAnBUIqNqYrX9LXtk3tHbHoD-R4oPQweuPG8IQuSN8YYP5qWVTzlLW3iqJ_1u9xDHjPxHLRQnRlsF1Ds79au6kww"
                },
                {
                    name: "Modern Blue",
                    image: "https://images.unsplash.com/photo-1593030761757-71bd90dbe3e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                },
                {
                    name: "Charcoal Black",
                    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                }
            ]
        }
    };

    return (
        <div className="bg-white dark:bg-background-dark text-gray-900 dark:text-gray-100 font-display">
            <Header />

            {/* 1. Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4w8FAZohiUNpPQvARvq4AiiTbngy35u2QZN9-PJZdFvU7m3pjBAUrWUgEoF_xhmZZS0ZdiPM9tn6z0sx_8YUzmvorwByZkVjt_L89SgO32ShsDiNX6h4oqvN58voIPo3qPqusuFT80bLRIOn6Xpli6tbNSkJ6y3zJCA9YHonMXnQoyX2cjCYhsUg-1jF66Tq475Wxq4ZXu8MgQP68k03gz1JP_znKfPIQ06WkCBHVLGLiRrV5ddps_CmyWEhFRF4zRTJhHae5FQ"
                        alt="Textile Production"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
                    <span className="block text-accent-beige uppercase tracking-[0.3em] text-sm font-bold mb-4 animate-fade-in">Production Excellence</span>
                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight animate-fade-in-up !text-white">
                        Crafting Identity <br /> <span className="italic font-light !text-white">In Every Stitch</span>
                    </h1>
                </div>
            </section>

            <main id="content" className="bg-background-light dark:bg-background-dark">

                {/* 2. Intro Section */}
                <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-center">
                    <div className="flex justify-center mb-8">
                        <div className="h-1 w-20 bg-primary"></div>
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 text-[rgb(67,34,87)]">Redefining Bespoke Manufacturing</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-4xl mx-auto font-light mb-16">
                        Beyond standard production, SONNA EXXPORTS offers a specialized ecosystem for brands seeking distinction. We bridge the gap between industrial capacity and artisan precision.
                    </p>

                    {/* 3. Interactive Categories */}
                    <div id="categories" className="scroll-mt-24">
                        <div className="text-center mb-12">
                            <span className="text-primary font-bold tracking-widest text-sm uppercase">Our Expertise</span>
                            <h2 className="font-serif text-4xl mt-3 text-[rgb(67,34,87)]">Specialized Uniforms</h2>
                        </div>

                        {/* Category Tabs */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {Object.keys(uniformDetails).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveCategory(key)}
                                    className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeCategory === key
                                        ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                        : 'bg-white dark:bg-gray-800 text-gray-500 hover:bg-gray-100 border border-gray-200 dark:border-gray-700'
                                        }`}
                                >
                                    {uniformDetails[key].title}
                                </button>
                            ))}
                        </div>

                        {/* Dynamic Content Area */}
                        <div className="animate-fade-in">
                            {/* Category Description */}
                            <div className="max-w-3xl mx-auto text-center mb-12">
                                <p className="text-xl text-gray-700 dark:text-gray-300 font-serif active-category-description">
                                    {uniformDetails[activeCategory].description}
                                </p>
                            </div>

                            {/* 3-Card Product Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                                {uniformDetails[activeCategory].variants.map((variant, index) => (
                                    <div key={index} className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-800">
                                        <div className="relative aspect-[4/5] overflow-hidden bg-gray-200">
                                            <img
                                                src={variant.image}
                                                alt={variant.name}
                                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                                        </div>
                                        <div className="p-6 text-center">
                                            <h4 className="font-serif text-xl text-[rgb(67,34,87)] mb-2">{variant.name}</h4>
                                            <p className="text-sm text-gray-500 uppercase tracking-widest">Available Layout</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Features Footer for Category */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up delay-200">
                                {/* Features Card */}
                                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-white dark:bg-gray-700 rounded-xl shadow-sm text-primary">
                                            <span className="material-symbols-outlined text-2xl">stars</span>
                                        </div>
                                        <h4 className="font-serif text-xl text-gray-900 dark:text-gray-100">Distinguishing Features</h4>
                                    </div>
                                    <ul className="space-y-4">
                                        {uniformDetails[activeCategory].features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                                                <div className="min-w-[24px] h-6 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 mr-3 mt-0.5">
                                                    <span className="material-symbols-outlined text-sm font-bold">check</span>
                                                </div>
                                                <span className="text-base font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Fabric Card */}
                                <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                                    <div className="absolute inset-0 bg-[rgb(67,34,87)] transition-transform duration-500 group-hover:scale-105"></div>
                                    <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-8 -translate-y-8">
                                        <span className="material-symbols-outlined text-[150px] text-white">texture</span>
                                    </div>
                                    <div className="relative p-8 h-full flex flex-col justify-between text-white">
                                        <div>
                                            <div className="flex items-center gap-3 mb-4 opacity-90">
                                                <span className="material-symbols-outlined">fiber_manual_record</span>
                                                <h4 className="font-bold text-sm uppercase tracking-widest">Premium Fabrication</h4>
                                            </div>
                                            <p className="font-serif text-3xl md:text-4xl leading-tight mb-2">{uniformDetails[activeCategory].fabric}</p>
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between">
                                            <span className="text-sm font-light tracking-wider opacity-90">Engineered for durability & comfort</span>
                                            <span className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors cursor-help" title="Fabric Details">
                                                <span className="material-symbols-outlined text-sm">info</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Technical Depth Section (Alternating) */}
                <section className="py-24 px-6 md:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <span className="text-primary font-bold tracking-widest text-sm uppercase">Craftsmanship</span>
                            <h2 className="font-serif text-4xl md:text-5xl mt-3 text-[rgb(67,34,87)]">Finishing Techniques</h2>
                        </div>

                        {/* Tech 1: Screen Printing */}
                        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center mb-24">
                            <div className="w-full md:w-1/2">
                                <div className="aspect-video overflow-hidden rounded-lg shadow-xl relative group">
                                    <img
                                        src="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=600&auto=format&fit=crop"
                                        alt="Screen Printing"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="p-3 bg-white shadow-sm rounded-full text-primary material-symbols-outlined text-2xl">palette</span>
                                    <h3 className="font-serif text-3xl text-[rgb(67,34,87)]">Screen Printing</h3>
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    Using high-fidelity eco-friendly inks, we achieve exceptional color vibrancy and durability. From plastisol to water-based high-density prints, our screen printing technology ensures your brand's colors pop with precision.
                                </p>
                                <ul className="space-y-2 text-gray-500">
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>Eco-friendly inks</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>High-density styling</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>Color matching guarantee</li>
                                </ul>
                            </div>
                        </div>

                        {/* Tech 2: Embroidery (Reversed) */}
                        <div className="flex flex-col md:flex-row-reverse gap-12 lg:gap-24 items-center mb-24">
                            <div className="w-full md:w-1/2">
                                <div className="aspect-video overflow-hidden rounded-lg shadow-xl relative group">
                                    <img
                                        src="https://images.unsplash.com/photo-1618331835787-8c1f0d3b6f2d?q=80&w=600&auto=format&fit=crop"
                                        alt="Embroidery"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="p-3 bg-white shadow-sm rounded-full text-primary material-symbols-outlined text-2xl">gesture</span>
                                    <h3 className="font-serif text-3xl text-[rgb(67,34,87)]">Premium Embroidery</h3>
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    Multi-head precision embroidery featuring 3D puff effects, metallic threading, and intricate applique work. We create tactile branding that adds a perceived high value to every garment.
                                </p>
                                <ul className="space-y-2 text-gray-500">
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>3D Puff effects</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>Metallic threading</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>Precision detailing</li>
                                </ul>
                            </div>
                        </div>

                        {/* Tech 3: Private Labeling */}
                        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
                            <div className="w-full md:w-1/2">
                                <div className="aspect-video overflow-hidden rounded-lg shadow-xl relative group">
                                    <img
                                        src="https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=600&auto=format&fit=crop"
                                        alt="Private Labeling"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="p-3 bg-white shadow-sm rounded-full text-primary material-symbols-outlined text-2xl">sell</span>
                                    <h3 className="font-serif text-3xl text-[rgb(67,34,87)]">Private Labeling</h3>
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    Full-suite branding starting from the neck label. We offer custom woven labels, printed care tags, laser-cut hang tags, and sustainable bespoke packaging solutions to make the product truly yours.
                                </p>
                                <ul className="space-y-2 text-gray-500">
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>Custom woven labels</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>Bespoke packaging</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>Laser-cut tags</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. CTA Section */}
                <section className="py-24 bg-primary text-white text-center px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-serif text-4xl md:text-5xl mb-8">Ready to Create Your Collection?</h2>
                        <p className="text-white/80 text-xl font-light mb-12 max-w-2xl mx-auto">
                            Transform your vision into reality with our premium customization services. Let's discuss your specific requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <button className="bg-white text-primary hover:bg-gray-100 py-4 px-10 rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Request Consultation
                            </button>
                            <button className="bg-transparent border-2 border-white/30 hover:border-white text-white py-4 px-10 rounded-full font-bold uppercase tracking-widest text-sm transition-all">
                                Download Catalog
                            </button>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default Customization;
