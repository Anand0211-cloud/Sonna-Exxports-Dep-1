import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Box, TrendingUp, ShieldCheck, Globe } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Customization = () => {
    const [activeCategory, setActiveCategory] = useState('school');

    const uniformDetails = {
        school: {
            id: 'school',
            title: "School Uniforms",
            description: "Durable and comfortable garments designed for everyday student wear.\nWe focus on breathable fabrics, reinforced stitching, and structured fits to ensure long-lasting performance while maintaining institutional presentation.",
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
            description: "Professional, refined uniforms tailored for corporate teams and service industries.\nWe ensure consistent color matching, precise branding, and premium finishing suitable for bulk corporate requirements.",
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
                <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-center">
                    <div className="flex justify-center mb-8">
                        <div className="h-1 w-20 bg-primary"></div>
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 text-[#460566]">End-to-End Custom Garment Manufacturing</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-4xl mx-auto font-light mb-12 whitespace-pre-line">
                        At Sonna Exxports, we provide complete <strong>end-to-end custom garment manufacturing</strong> tailored to your brand’s specifications.
                        From concept development and tech pack creation to fabric selection, production, finishing, and export coordination — every stage is managed with structured precision.<br></br>

                        We support <strong>100% custom product development from scratch.</strong><br></br>

                        If you already have a tech pack, we execute it accurately.

                        If not, our team can professionally develop one for you — ensuring clarity before bulk production begins.

                        As a trusted <strong>garment manufacturer & exporter,</strong> we deliver scalable production with export-grade quality standards.
                    </p>

                    {/* 3. Interactive Categories */}
                    <div id="categories" className="scroll-mt-24">
                        <div className="text-center mb-10">
                            <h2 className="font-serif text-4xl mt-3 text-[#460566]">Specialized Uniform Manufacturing</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 mb-4 max-w-2xl mx-auto">
                                We provide structured uniform manufacturing solutions designed for durability, comfort, and institutional identity.
                            </p>
                            <h2 className="font-serif text-3xl md:text-4xl mt-8 text-[#460566]">Our Customisation Specialties</h2>
                        </div>

                        {/* Category Tabs */}
                        <div className="flex flex-wrap justify-center gap-4 mb-10">
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
                            <div className="max-w-3xl mx-auto text-center mb-10">
                                <p className="text-xl text-gray-700 dark:text-gray-300 font-serif active-category-description whitespace-pre-line">
                                    {uniformDetails[activeCategory].description}
                                </p>
                            </div>

                            {/* 3-Card Product Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
                                            <h4 className="font-serif text-xl text-[#460566] mb-2">{variant.name}</h4>
                                            <p className="text-sm text-gray-500 uppercase tracking-widest">Available Layout</p>
                                        </div>
                                    </div>
                                ))}
                            </div>


                        </div>
                    </div>
                </section>

                {/* 4. Technical Depth Section (Alternating) */}
                <section className="py-20 px-6 md:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-4xl md:text-5xl mt-3 text-[#460566]">Customisation Techniques</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
                                Our custom apparel manufacturing services include:
                            </p>
                        </div>

                        {/* Techniques Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {[
                                {
                                    title: "Print",
                                    description: "Advanced screen printing and specialty print techniques for bulk garment production.\nWe ensure color accuracy, durability, and export-quality finishing across all orders.",
                                    image: "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=600&auto=format&fit=crop"
                                },
                                {
                                    title: "Embroidery",
                                    description: "High-precision embroidery for logos, badges, and detailed branding elements.\nSuitable for uniforms, private labels, and premium retail collections.",
                                    image: "https://images.unsplash.com/photo-1618331835787-8c1f0d3b6f2d?q=80&w=600&auto=format&fit=crop"
                                },
                                {
                                    title: "Private Labeling",
                                    description: "Complete private label garment manufacturing including:\n• Custom neck labels\n• Size & wash-care labels\n• Hangtags\n• Brand trims\n• Bespoke packaging\nWe ensure your brand identity is fully integrated into the final product.",
                                    image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=600&auto=format&fit=crop"
                                },
                                {
                                    title: "Colour Matching",
                                    description: "Accurate color development aligned with brand guidelines.\nWe offer structured dyeing processes and shade matching to maintain consistency across bulk orders.",
                                    image: "https://images.unsplash.com/photo-1558470598-a5dda9640f6b?q=80&w=600&auto=format&fit=crop"
                                },
                                {
                                    title: "Fabric Selection",
                                    description: "Extensive fabric sourcing including cotton, blends, fleece, pique, and performance fabrics.\nGSM customization available based on product and market requirement.",
                                    image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=600&auto=format&fit=crop"
                                },
                                {
                                    title: "Washing & Finishing",
                                    description: "Controlled washing processes including enzyme wash, soft wash, and special finishes.\nEach batch undergoes quality checks to maintain texture, color stability, and garment durability.",
                                    image: "https://images.unsplash.com/photo-1517677208171-0bc5e25a6c27?q=80&w=600&auto=format&fit=crop"
                                }
                            ].map((tech, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col h-full">
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={tech.image}
                                            alt={tech.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="font-serif text-2xl text-[#460566] mb-4">{tech.title}</h3>
                                        <div className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line flex-grow">
                                            {tech.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Scalable & Structured Production Section */}
                <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-background-dark overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="font-serif text-4xl md:text-5xl mb-8 text-[#460566]">Scalable & Structured Production</h2>
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 justify-center">
                            {[
                                {
                                    text: "Fast sampling for quicker approvals",
                                    icon: <Zap className="w-8 h-8 text-white" />,
                                    color: "bg-blue-500"
                                },
                                {
                                    text: "Convenient order quantities",
                                    icon: <Box className="w-8 h-8 text-white" />,
                                    color: "bg-purple-500"
                                },
                                {
                                    text: "Cost-effective manufacturing for larger orders",
                                    icon: <TrendingUp className="w-8 h-8 text-white" />,
                                    color: "bg-green-500"
                                },
                                {
                                    text: "Strict quality control systems",
                                    icon: <ShieldCheck className="w-8 h-8 text-white" />,
                                    color: "bg-red-500"
                                },
                                {
                                    text: "International export compliance",
                                    icon: <Globe className="w-8 h-8 text-white" />,
                                    color: "bg-indigo-500"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-2 flex flex-col items-center text-center overflow-hidden ${index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
                                >
                                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.color.replace('bg-', 'from-')}/10 to-transparent rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-150 duration-700 ease-out`}></div>

                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${item.color} shadow-lg shadow-${item.color.replace('bg-', '')}/30 mb-6 group-hover:rotate-6 transition-transform duration-300`}>
                                        {item.icon}
                                    </div>

                                    <h3 className="font-serif text-xl text-primary dark:text-gray-100 relative z-10 leading-snug">
                                        {item.text}
                                    </h3>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-center"
                        >
                            <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
                                We operate as a professional apparel export house, ensuring smooth production and global shipment coordination.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* 5. CTA Section */}
                <section className="py-20 bg-primary text-white text-center px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-serif text-4xl md:text-5xl mb-8 text-white">Ready to Create Your Collection?</h2>
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
