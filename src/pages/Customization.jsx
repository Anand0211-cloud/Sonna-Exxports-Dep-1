import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Customization = () => {
    const [activeCategory, setActiveCategory] = React.useState('school');

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
        <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 transition-colors duration-300 antialiased selection:bg-primary selection:text-white font-display">
            <Header />
            <main className="pt-20 min-h-screen">
                <div className="flex flex-col lg:flex-row h-full">
                    {/* Left Side - Fixed Image */}
                    <div className="lg:w-2/5 w-full lg:h-[calc(100vh-80px)] lg:sticky lg:top-20 relative h-[50vh] overflow-hidden self-start">
                        <div className="absolute inset-0 bg-black/10 dark:bg-black/40 z-10"></div>
                        <img
                            alt="High quality textile production line"
                            className="w-full h-full object-cover object-center"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4w8FAZohiUNpPQvARvq4AiiTbngy35u2QZN9-PJZdFvU7m3pjBAUrWUgEoF_xhmZZS0ZdiPM9tn6z0sx_8YUzmvorwByZkVjt_L89SgO32ShsDiNX6h4oqvN58voIPo3qPqusuFT80bLRIOn6Xpli6tbNSkJ6y3zJCA9YHonMXnQoyX2cjCYhsUg-1jF66Tq475Wxq4ZXu8MgQP68k03gz1JP_znKfPIQ06WkCBHVLGLiRrV5ddps_CmyWEhFRF4zRTJhHae5FQ"
                        />
                        <div className="absolute bottom-12 left-12 z-20 max-w-sm">
                            <p className="text-white text-xs uppercase tracking-[0.3em] mb-3 font-semibold opacity-90">Production Excellence</p>
                            <h2 className="text-white font-display text-4xl lg:text-5xl font-light leading-tight">Crafting Identity<br />In Every Stitch</h2>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="lg:w-3/5 w-full bg-background-light dark:bg-background-dark px-6 py-12 lg:px-20 lg:py-24">
                        <div className="max-w-4xl mx-auto animate-fade-in-up">
                            <div className="flex items-center space-x-2 mb-6">
                                <div className="h-[1px] w-12 bg-primary"></div>
                                <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Customization Services</span>
                            </div>
                            <h1 className="font-display text-4xl lg:text-6xl font-medium text-gray-900 dark:text-white mb-8 leading-tight">
                                Redefining Premium <br />Bespoke Manufacturing
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-20 text-lg font-light max-w-2xl">
                                Beyond standard production, SONNA EXXPORTS offers a specialized ecosystem for brands seeking distinction. We bridge the gap between industrial capacity and artisan precision, offering bespoke solutions, specialized uniforms, and custom fabrications.
                            </p>

                            {/* Customization Options Section */}
                            <section className="mb-20">
                                <h2 className="font-display text-3xl text-gray-900 dark:text-white mb-8">Customization Options</h2>

                                <div className="mb-8">
                                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">Available Base Colors</h3>
                                    <div className="flex items-center flex-wrap gap-4">
                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 rounded-full bg-red-600 border border-gray-200 shadow-sm" title="Red"></div>
                                            <div className="w-12 h-12 rounded-full bg-black border border-gray-700 shadow-sm" title="Black"></div>
                                            <div className="w-12 h-12 rounded-full bg-blue-700 border border-gray-700 shadow-sm" title="Blue"></div>
                                        </div>
                                        <span className="text-gray-500 dark:text-gray-400 text-base font-medium">+ Custom dyeing available</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-white text-[14px] font-bold">check</span>
                                        </div>
                                        <span className="text-gray-700 dark:text-gray-300 text-xl">Custom Labels & Hangtags</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-white text-[14px] font-bold">check</span>
                                        </div>
                                        <span className="text-gray-700 dark:text-gray-300 text-xl">Embroidery or Print detailing</span>
                                    </div>
                                </div>
                            </section>

                            {/* Section 1: Uniform Categories (Interactive Tabs) */}
                            <section className="mb-24">
                                <div className="flex items-end justify-between mb-10 border-b border-gray-200 dark:border-gray-800 pb-6">
                                    <h2 className="font-display text-3xl text-gray-900 dark:text-white uppercase tracking-tight">Uniform Categories</h2>
                                    <span className="text-primary text-xs font-bold tracking-widest uppercase pb-1">01 / Specialist Sectors</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                    {/* School Uniforms */}
                                    <div
                                        className={`group bg-white dark:bg-gray-900 p-6 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden cursor-pointer ${activeCategory === 'school' ? 'border-primary ring-1 ring-primary shadow-lg' : 'border-gray-100 dark:border-gray-800'}`}
                                        onMouseEnter={() => setActiveCategory('school')}
                                        onClick={() => setActiveCategory('school')}
                                    >
                                        <div className="aspect-w-1 aspect-h-1 w-full mb-6 overflow-hidden bg-gray-100 dark:bg-gray-800">
                                            <img
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbDZ5la_XcBYGKdWI2_VC1I4dtzZuo-kuZ-daCc0IpiV0Z8ziE78TPmPKYRQ_Jm3dHvL0MQI7kNporfhmP5MPexQjyyotJoMOlb3dp5XD1LvDWNtZj5GIMikyQ_KNE30yUFf78Ax6xLBRE52JPq9x7D7i2U6FDug36rSp7WlVQI_Vr5ckMSjEAnBUIqNqYrX9LXtk3tHbHoD-R4oPQweuPG8IQuSN8YYP5qWVTzlLW3iqJ_1u9xDHjPxHLRQnRlsF1Ds79au6kww"
                                                alt="School Uniforms"
                                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                        <h3 className={`font-display text-2xl mb-2 transition-colors ${activeCategory === 'school' ? 'text-primary' : 'text-gray-900 dark:text-white'}`}>School <br />Uniforms</h3>
                                    </div>
                                    {/* Industrial Uniforms */}
                                    <div
                                        className={`group bg-white dark:bg-gray-900 p-6 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden cursor-pointer ${activeCategory === 'industrial' ? 'border-primary ring-1 ring-primary shadow-lg' : 'border-gray-100 dark:border-gray-800'}`}
                                        onMouseEnter={() => setActiveCategory('industrial')}
                                        onClick={() => setActiveCategory('industrial')}
                                    >
                                        <div className="aspect-w-1 aspect-h-1 w-full mb-6 overflow-hidden bg-gray-100 dark:bg-gray-800">
                                            <img
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdO6S9dedDKE8jV_-c5UkDaskWSdFqzP6iyibHQWyABr5mpu0vl74NqDqvThtgIecuilcEsEaj8XpgXeeiPSWdVk4UKEtwPTDUl0BH5P94pmp1Dx_wudOSQ0djeoGmLGfwFZNdxAGRSOgeo_aetqQWqn3EinroQ6fZY0geT3m-grjWYpYX55itUsG08Fu6AAU4pzNVmwD2o8HtTIcmXu0_upiiawM6cO-mUVdJ1DS2CHcva66weXoQjS_5Nxifg19G2hgLKorPkw"
                                                alt="Industrial Uniforms"
                                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                        <h3 className={`font-display text-2xl mb-2 transition-colors ${activeCategory === 'industrial' ? 'text-primary' : 'text-gray-900 dark:text-white'}`}>Industrial <br />Uniforms</h3>
                                    </div>
                                    {/* Corporate Uniforms */}
                                    <div
                                        className={`group bg-white dark:bg-gray-900 p-6 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden cursor-pointer ${activeCategory === 'corporate' ? 'border-primary ring-1 ring-primary shadow-lg' : 'border-gray-100 dark:border-gray-800'}`}
                                        onMouseEnter={() => setActiveCategory('corporate')}
                                        onClick={() => setActiveCategory('corporate')}
                                    >
                                        <div className="aspect-w-1 aspect-h-1 w-full mb-6 overflow-hidden bg-gray-100 dark:bg-gray-800">
                                            <img
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbDZ5la_XcBYGKdWI2_VC1I4dtzZuo-kuZ-daCc0IpiV0Z8ziE78TPmPKYRQ_Jm3dHvL0MQI7kNporfhmP5MPexQjyyotJoMOlb3dp5XD1LvDWNtZj5GIMikyQ_KNE30yUFf78Ax6xLBRE52JPq9x7D7i2U6FDug36rSp7WlVQI_Vr5ckMSjEAnBUIqNqYrX9LXtk3tHbHoD-R4oPQweuPG8IQuSN8YYP5qWVTzlLW3iqJ_1u9xDHjPxHLRQnRlsF1Ds79au6kww"
                                                alt="Corporate Uniforms"
                                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                        <h3 className={`font-display text-2xl mb-2 transition-colors ${activeCategory === 'corporate' ? 'text-primary' : 'text-gray-900 dark:text-white'}`}>Corporate <br />Uniforms</h3>
                                    </div>
                                </div>

                                {/* Dynamic Content Section */}
                                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-8 border border-gray-100 dark:border-gray-800 transition-all duration-500 animate-fade-in">
                                    <div className="flex flex-col gap-10">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                                            <div>
                                                <h3 className="font-display text-2xl text-gray-900 dark:text-white mb-4">{uniformDetails[activeCategory].title} Overview</h3>
                                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                                    {uniformDetails[activeCategory].description}
                                                </p>
                                                <div className="space-y-3">
                                                    {uniformDetails[activeCategory].features.map((feature, index) => (
                                                        <div key={index} className="flex items-center text-lg text-gray-500 dark:text-gray-400">
                                                            <span className="material-symbols-outlined text-primary text-base mr-3">check_circle</span>
                                                            {feature}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                                                <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">Recommended Fabrics</span>
                                                <p className="font-display text-xl text-gray-900 dark:text-white">
                                                    {uniformDetails[activeCategory].fabric}
                                                </p>
                                                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                                                    <button className="text-sm font-medium text-gray-900 dark:text-white hover:text-primary transition-colors flex items-center group">
                                                        View Fabric Catalog
                                                        <span className="material-symbols-outlined ml-2 text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Visual Variants Gallery */}
                                        <div>
                                            <h4 className="font-display text-lg text-gray-900 dark:text-white mb-6 flex items-center">
                                                <span className="w-8 h-[1px] bg-primary mr-3"></span>
                                                Available Colors
                                                <div className="flex ml-4 gap-1">
                                                    <span className="size-4 rounded-full bg-navy-900 border border-gray-200"></span>
                                                    <span className="size-4 rounded-full bg-red-800 border border-gray-200"></span>
                                                    <span className="size-4 rounded-full bg-gray-500 border border-gray-200"></span>
                                                </div>
                                            </h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                                {uniformDetails[activeCategory].variants.map((variant, index) => (
                                                    <div key={index} className="group">
                                                        <div className="relative aspect-[4/5] overflow-hidden bg-gray-200 mb-3">
                                                            <img
                                                                src={variant.image}
                                                                alt={variant.name}
                                                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                                            />
                                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                                                        </div>
                                                        <p className="text-lg font-medium text-gray-900 dark:text-white text-center">{variant.name}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section 2: Finishing Techniques */}
                            <section className="mb-24">
                                <div className="flex items-end justify-between mb-10 border-b border-gray-200 dark:border-gray-800 pb-6">
                                    <h2 className="font-display text-3xl text-gray-900 dark:text-white uppercase tracking-tight">Finishing Techniques</h2>
                                    <span className="text-primary text-xs font-bold tracking-widest uppercase pb-1">02 / Technical Depth</span>
                                </div>
                                <div className="space-y-16">
                                    {/* Screen Printing */}
                                    <div className="flex flex-col md:flex-row gap-8 items-center group">
                                        <div className="w-full md:w-1/3 aspect-[4/3] overflow-hidden shadow-lg relative">
                                            <img
                                                src="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=600&auto=format&fit=crop"
                                                alt="Screen Printing Process"
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="w-full md:w-2/3">
                                            <div className="flex items-center space-x-3 text-primary mb-4">
                                                <span className="material-symbols-outlined text-3xl">palette</span>
                                                <h4 className="font-display text-2xl text-gray-900 dark:text-white">Screen Printing</h4>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6">
                                                Using high-fidelity eco-friendly inks, we achieve exceptional color vibrancy and durability. From plastisol to water-based high-density prints, our screen printing technology ensures your brand's colors pop with precision.
                                            </p>
                                            <div className="h-px w-full bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/30 transition-colors"></div>
                                        </div>
                                    </div>

                                    {/* Premium Embroidery */}
                                    <div className="flex flex-col md:flex-row gap-8 items-center group">
                                        <div className="w-full md:w-1/3 aspect-[4/3] overflow-hidden shadow-lg relative order-1 md:order-none">
                                            <img
                                                src="https://images.unsplash.com/photo-1618331835787-8c1f0d3b6f2d?q=80&w=600&auto=format&fit=crop"
                                                alt="Detailed Embroidery Work"
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="w-full md:w-2/3">
                                            <div className="flex items-center space-x-3 text-primary mb-4">
                                                <span className="material-symbols-outlined text-3xl">gesture</span>
                                                <h4 className="font-display text-2xl text-gray-900 dark:text-white">Premium Embroidery</h4>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6">
                                                Multi-head precision embroidery featuring 3D puff effects, metallic threading, and intricate applique work. We create tactile branding that adds a perceived high value to every garment.
                                            </p>
                                            <div className="h-px w-full bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/30 transition-colors"></div>
                                        </div>
                                    </div>

                                    {/* Private Labeling */}
                                    <div className="flex flex-col md:flex-row gap-8 items-center group">
                                        <div className="w-full md:w-1/3 aspect-[4/3] overflow-hidden shadow-lg relative">
                                            <img
                                                src="https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=600&auto=format&fit=crop"
                                                alt="Custom Labels and Packaging"
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="w-full md:w-2/3">
                                            <div className="flex items-center space-x-3 text-primary mb-4">
                                                <span className="material-symbols-outlined text-3xl">sell</span>
                                                <h4 className="font-display text-2xl text-gray-900 dark:text-white">Private Labeling</h4>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6">
                                                Full-suite branding starting from the neck label. We offer custom woven labels, printed care tags, laser-cut hang tags, and sustainable bespoke packaging solutions to make the product truly yours.
                                            </p>
                                            <div className="h-px w-full bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/30 transition-colors"></div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div className="pt-12 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row gap-6">
                                <button className="flex-[2] bg-primary hover:bg-primary-light text-white py-5 px-10 font-medium tracking-widest uppercase text-xs transition-all duration-300 shadow-xl shadow-primary/20 flex items-center justify-center rounded">
                                    Request a Consultation
                                    <span className="material-symbols-outlined ml-3 text-lg">arrow_forward</span>
                                </button>
                                <button className="flex-1 bg-transparent border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:border-primary hover:text-primary py-5 px-8 font-medium tracking-widest uppercase text-xs transition-all duration-300 flex items-center justify-center rounded">
                                    Catalog
                                    <span className="material-symbols-outlined ml-2 text-lg">download</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
            <Footer />
        </div >
    );
};

export default Customization;
