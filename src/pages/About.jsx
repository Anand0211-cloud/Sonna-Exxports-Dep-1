import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import yusrahProfile from '../assets/team/yusrah-profile.jpg';
import yusrahSignature from '../assets/team/yusrah-signature.png';

const About = () => {
    return (
        <div className="bg-white text-gray-900 font-display overflow-x-hidden antialiased selection:bg-accent-beige selection:text-primary-dark transition-colors duration-300">
            <Header />
            {/* Added pt-20 to account for fixed header */}
            <main>
                <header className="relative pt-20 h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            alt="Fabric texture and fashion tools"
                            className="w-full h-full object-cover opacity-80"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5VqG0SsCD1Vz3n0843UWuzRsA6W6XJVOrxl1F92Z12SMXekC-bNthBuawn6gG7DmywVXuYSRWlI-xrlzwgizcZBIDVBSEkTngsK0iCbiqv7WGtWe1f98_VkM3divGZi-TotwUiECEoGESwC1iBSlb3x9eyjwlS1YD9nqq6uV2scxm5Yj3hhT7zY4H0Z6I__bgVg1T8q4c6ILb3ziwSkG7CuLqT2QIogb0xeEPt5wfMXbkqE706uFoNgiqQ-I0annHLSYirTcCQg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-purple-900/60 mix-blend-multiply"></div>
                    </div>
                    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                        <h1 className="font-serif text-5xl md:text-7xl text-white font-bold mb-6 tracking-tight text-shadow">Crafting Excellence</h1>
                        <p className="text-lg md:text-xl text-gray-100 font-light tracking-wide max-w-2xl mx-auto">
                            Where tradition meets modern innovation in global fashion exports.
                        </p>
                    </div>
                </header>

                {/* 1. About Sonna Exxports */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="font-serif text-4xl md:text-5xl mb-8">About Sonna Exxports</h2>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto text-justify md:text-center">
                            Established in the heart of India's textile heritage, Sonna Exxports has grown from a local workshop to a global leader in garment manufacturing. We combine traditional craftsmanship with modern technology to deliver exceptional quality to brands worldwide, ensuring every piece tells a story of excellence and integrity.
                        </p>
                    </div>
                </section>

                {/* 2. Leadership Section (Moved Up) */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest text-sm uppercase">Leadership</span>
                            <h2 className="font-serif text-4xl md:text-5xl mt-3">The Visionary Behind SONNA</h2>
                        </div>
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
                            <div className="w-full lg:w-1/2 relative">
                                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/30"></div>
                                <img
                                    alt="Founder Portrait"
                                    className="relative shadow-xl w-full h-[600px] object-cover object-top transition-all duration-500"
                                    src={yusrahProfile}
                                />
                            </div>
                            <div className="w-full lg:w-1/2 space-y-6">
                                <h3 className="font-serif text-5xl font-bold">Yusrah</h3>
                                <p className="text-gray-600 leading-loose">
                                    With over two decades of experience in the international fashion industry, Yusrah founded SONNA EXXPORTS with a simple yet profound belief: that luxury should never come at the cost of integrity.
                                </p>
                                <p className="text-gray-600 leading-loose">
                                    Starting her journey in a small tailoring workshop, she cultivated a deep appreciation for the tactile art of fabric making. Today, she leads a team of over 500 skilled professionals, bridging the gap between traditional craftsmanship and modern export demands.
                                </p>
                                <div className="pt-6">
                                    <img
                                        alt="Founder Signature"
                                        className="h-16 opacity-60 mb-2"
                                        src={yusrahSignature}
                                    />
                                    <p className="text-primary font-medium tracking-wide text-sm">FOUNDER & CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Vision / Mission Section (No Image, Split Layout) */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-light transition-colors duration-300">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                            <div className="bg-white p-10 rounded-lg shadow-sm border-l-4 border-gray-300">
                                <h2 className="font-serif text-3xl md:text-4xl mb-6">Our Mission</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    At SONNA EXXPORTS, we are dedicated to delivering premium apparel solutions. We strive to empower artisans, minimize our environmental footprint, and provide our partners with unparalleled textile innovation.
                                </p>
                            </div>
                            <div className="bg-white p-10 rounded-lg shadow-sm border-l-4 border-primary">
                                <h2 className="font-serif text-3xl md:text-4xl mb-6">Our Vision</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    To redefine the global textile landscape by seamlessly blending sustainable practices with haute couture craftsmanship, setting new benchmarks for quality and ethical manufacturing.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Core Values (Moved) */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="font-serif text-4xl md:text-5xl mb-12">Our Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <span className="material-symbols-outlined text-primary text-4xl mb-4">verified</span>
                                <h3 className="font-serif text-xl font-bold mb-3">Integrity</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">Honest partnerships and transparent practices in everything we do.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <span className="material-symbols-outlined text-primary text-4xl mb-4">lightbulb</span>
                                <h3 className="font-serif text-xl font-bold mb-3">Innovation</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">Embracing the latest in textile technology to stay ahead of the curve.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <span className="material-symbols-outlined text-primary text-4xl mb-4">eco</span>
                                <h3 className="font-serif text-xl font-bold mb-3">Sustainability</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">Commitment to eco-friendly manufacturing and reducing our footprint.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <span className="material-symbols-outlined text-primary text-4xl mb-4">diamond</span>
                                <h3 className="font-serif text-xl font-bold mb-3">Excellence</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">Uncompromising quality and attention to detail in every stitch.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Process Section */}
                <section className="py-24 bg-white relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            <div className="lg:col-span-5 flex flex-col justify-center">
                                <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2">Process</span>
                                <h2 className="font-serif text-4xl md:text-5xl mb-6">Behind The Seams</h2>
                                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                    Step inside our state-of-the-art facilities where creativity meets precision. From sourcing the finest raw organic cotton to the final stitch of quality assurance, witness the dedication that goes into every garment we export.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <span className="material-symbols-outlined text-primary mt-1 mr-4">check_circle</span>
                                        <div>
                                            <h4 className="font-serif text-lg font-semibold">Ethical Sourcing</h4>
                                            <p className="text-sm text-gray-500">100% traceabilty on all raw materials used in our supply chain.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="material-symbols-outlined text-primary mt-1 mr-4">check_circle</span>
                                        <div>
                                            <h4 className="font-serif text-lg font-semibold">Quality Control</h4>
                                            <p className="text-sm text-gray-500">Rigorous 5-point checking system ensuring zero-defect exports.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="material-symbols-outlined text-primary mt-1 mr-4">check_circle</span>
                                        <div>
                                            <h4 className="font-serif text-lg font-semibold">Global Logistics</h4>
                                            <p className="text-sm text-gray-500">Efficient distribution network reaching 30+ countries worldwide.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-7 relative">
                                <div className="relative w-full aspect-video overflow-hidden shadow-2xl bg-gray-900 group cursor-pointer">
                                    <img
                                        alt="Factory floor video thumbnail"
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQAu0XU3hHCsEcKNdZ7LmVW1OKZ0pN9nyoA6qulLiDVlC7WdNjfp9_Bf4lDYR6hqZ1bYSmSVvb_gNVY66lj_4GnXSlCP4O8iJVZEBu7FqBS5_WF62hFvUOaTfAVEQwC6PGSXZTaBRu-PdKNBPKU8msHTRRdg6FlQNPKRcGxJzeKNYbU_wf4JMMiiuy4ke4AS0xdRPbDiu6qdQHmauTHNDQUBXJwHQoGExZv_CAZn01o0b4wwuei8ZoKWLHnNYJCYIkdn78chuMQ"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/50">
                                            <span className="material-symbols-outlined text-white text-4xl pl-1">play_arrow</span>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <p className="uppercase text-xs tracking-wider font-bold mb-1">Watch Now</p>
                                        <p className="font-serif text-2xl">The Art of Manufacturing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Contact Section */}
                <section className="py-24 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="font-serif text-4xl md:text-5xl mb-6">Ready to Collaborate?</h2>
                        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
                            Partner with SONNA EXXPORTS for your next collection. Let's create something extraordinary together.
                        </p>
                        <a
                            href="#"
                            className="inline-block bg-primary hover:bg-primary-light text-white px-10 py-4 rounded font-medium tracking-widest transition-colors duration-300 shadow-lg hover:shadow-xl"
                        >
                            CONTACT US
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div >
    );
};

export default About;
