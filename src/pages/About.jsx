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
                        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto text-justify md:text-center space-y-4">
                            <span className="block">India’s textile strength is unmatched. The difference lies in systems.</span>
                            <span className="block">Sonna Exxports operates as a structured garment manufacturer & exporter, focused on stable GSM, controlled shrinkage, precise sizing, and consistent finishing across bulk production.</span>
                            <span className="block">We don’t chase transactions. We build long-term supply reliability.</span>
                        </p>
                    </div>
                </section>

                {/* 2. Leadership Section (Moved Up) */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest text-sm uppercase">Leadership</span>
                            <h2 className="font-serif text-4xl md:text-5xl mt-3">The Founder</h2>
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
                                <h3 className="font-serif text-5xl font-bold">Yusrah Ahmad</h3>
                                <p className="text-gray-600 leading-loose">
                                    Yusrah Ahmad established Sonna Exxports with one clear focus — to bring discipline, structure, and repeatable standards into export garment manufacturing.
                                </p>
                                <p className="text-gray-600 leading-loose">
                                    Her approach is simple:<br />
                                    <strong>Deliver the same quality in bulk — every single time.</strong>
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
                                    To deliver scalable garment manufacturing supported by disciplined quality systems and long-term supply partnerships.
                                </p>
                            </div>
                            <div className="bg-white p-10 rounded-lg shadow-sm border-l-4 border-primary">
                                <h2 className="font-serif text-3xl md:text-4xl mb-6">Our Vision</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    To position Indian textile manufacturing as a global benchmark for consistency, reliability, and export-grade excellence.
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
                                <h3 className="font-serif text-xl font-bold mb-3">Reliability</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">We build systems that ensure repeatable production standards across bulk orders.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <span className="material-symbols-outlined text-primary text-4xl mb-4">sync</span>
                                <h3 className="font-serif text-xl font-bold mb-3">Consistency</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">Every shipment follows controlled processes for stable quality output.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <span className="material-symbols-outlined text-primary text-4xl mb-4">playlist_add_check</span>
                                <h3 className="font-serif text-xl font-bold mb-3">Structured Quality Testing</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">Each product undergoes fabric inspection, stitching checks, measurement verification, finishing control, and final audit before dispatch.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <span className="material-symbols-outlined text-primary text-4xl mb-4">lock</span>
                                <h3 className="font-serif text-xl font-bold mb-3">Brand Privacy</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">We respect client confidentiality. Designs, specifications, and private labels remain fully protected.</p>
                            </div>
                        </div>
                    </div>
                </section>



                {/* 5. Contact Section */}
                <section className="py-24 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="font-serif text-4xl md:text-5xl mb-10">Struggling with Inconsistent Bulk Supply?</h2>
                        <a
                            href="/contact"
                            className="inline-block bg-primary hover:bg-primary-light text-white px-10 py-4 rounded font-medium tracking-widest transition-colors duration-300 shadow-lg hover:shadow-xl"
                        >
                            Discuss Your Requirement
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div >
    );
};

export default About;
