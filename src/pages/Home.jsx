import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Collections from '../components/Collections';
import VideoSection from '../components/VideoSection';
import Manufacturing from '../components/Manufacturing';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import Certifications from '../components/Certifications';
import InstagramFeed from '../components/InstagramFeed';
import yusrahProfile from '../assets/team/yusrah-profile.jpg';
import yusrahSignature from '../assets/team/yusrah-signature.png';

const Home = () => {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-primary-dark text-white font-display overflow-x-hidden antialiased selection:bg-accent-beige selection:text-primary-dark">
            <Header />
            <main className="flex-grow">
                <Hero />

                {/* Leadership Section */}
                <section className="py-20 bg-background-light text-gray-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest text-sm uppercase">Leadership</span>
                            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mt-3">The Visionary Behind SONNA</h2>
                        </div>
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
                            <div className="w-full lg:w-1/2 relative">
                                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/30"></div>
                                <img
                                    alt="Founder Portrait"
                                    className="relative shadow-xl w-full h-[600px] object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                                    src={yusrahProfile}
                                />
                            </div>
                            <div className="w-full lg:w-1/2 space-y-6">
                                <h3 className="font-serif text-5xl font-bold text-gray-900">Yusrah</h3>
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

                <Collections />
                <VideoSection />
                <Manufacturing />
                <Testimonials />
                <Certifications />
                <InstagramFeed />
                <Newsletter />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
