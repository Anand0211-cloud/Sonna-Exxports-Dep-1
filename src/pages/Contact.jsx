
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import yusrahProfile from '../assets/team/yusrah-profile.jpg';

const Contact = () => {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col font-display overflow-x-hidden antialiased">
            <Header />
            <main className="flex-grow pt-20">
                <div className="relative flex flex-col lg:flex-row min-h-[calc(100vh-5rem)]">
                    <div className="w-full lg:w-1/2 px-8 py-12 lg:px-20 lg:py-20 bg-surface-light dark:bg-surface-dark flex flex-col justify-center">
                        <div className="max-w-md mx-auto w-full">
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2 block">Reach Out</span>
                            <h1 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">Let's Discuss Your Needs</h1>
                            <p className="text-gray-600 dark:text-gray-400 mb-12 font-light">
                                Specializing in premium textile exports. Whether you have a question about our collections, materials, or custom manufacturing capabilities, our team is ready to assist.
                            </p>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2" htmlFor="full-name">Full Name</label>
                                    <input className="block w-full border-0 border-b-2 border-gray-200 dark:border-gray-700 bg-transparent py-2 px-0 text-gray-900 dark:text-white placeholder-gray-400 focus:border-primary focus:ring-0 transition-colors sm:text-sm" id="full-name" placeholder="Jane Doe" type="text" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2" htmlFor="email">Email Address</label>
                                        <input className="block w-full border-0 border-b-2 border-gray-200 dark:border-gray-700 bg-transparent py-2 px-0 text-gray-900 dark:text-white placeholder-gray-400 focus:border-primary focus:ring-0 transition-colors sm:text-sm" id="email" placeholder="jane@company.com" type="email" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2" htmlFor="contact">Contact Number</label>
                                        <div className="flex">
                                            <select className="border-0 border-b-2 border-gray-200 dark:border-gray-700 bg-transparent py-2 pl-0 pr-8 text-gray-900 dark:text-white focus:border-primary focus:ring-0 transition-colors sm:text-sm w-20">
                                                <option>+91</option>
                                                <option>+1</option>
                                                <option>+44</option>
                                                <option>+971</option>
                                            </select>
                                            <input className="block w-full border-0 border-b-2 border-gray-200 dark:border-gray-700 bg-transparent py-2 px-0 text-gray-900 dark:text-white placeholder-gray-400 focus:border-primary focus:ring-0 transition-colors sm:text-sm ml-2" id="contact" placeholder="99999 99999" type="tel" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-4">Communication Preference</label>
                                    <div className="flex flex-wrap gap-6">
                                        <label className="inline-flex items-center cursor-pointer group">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary bg-transparent transition duration-150 ease-in-out" />
                                            <span className="ml-2 text-gray-700 dark:text-gray-300 text-sm group-hover:text-primary transition-colors">Email</span>
                                        </label>
                                        <label className="inline-flex items-center cursor-pointer group">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary bg-transparent transition duration-150 ease-in-out" />
                                            <span className="ml-2 text-gray-700 dark:text-gray-300 text-sm group-hover:text-primary transition-colors">WhatsApp</span>
                                        </label>
                                        <label className="inline-flex items-center cursor-pointer group">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary bg-transparent transition duration-150 ease-in-out" />
                                            <span className="ml-2 text-gray-700 dark:text-gray-300 text-sm group-hover:text-primary transition-colors">Call</span>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2" htmlFor="message">Message <span className="normal-case font-normal text-gray-400 text-[10px] ml-1">(Optional)</span></label>
                                    <textarea className="block w-full border-0 border-b-2 border-gray-200 dark:border-gray-700 bg-transparent py-2 px-0 text-gray-900 dark:text-white placeholder-gray-400 focus:border-primary focus:ring-0 transition-colors sm:text-sm" id="message" placeholder="Tell us about your project..." rows="4"></textarea>
                                </div>
                                <div className="pt-4">
                                    <button className="group relative w-full sm:w-auto overflow-hidden bg-primary text-white py-4 px-10 shadow-lg transition-all duration-300 hover:bg-primary-hover hover:shadow-xl" type="button">
                                        <span className="relative z-10 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                                            Send Inquiry
                                            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 bg-primary relative flex flex-col justify-between overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 rounded-full bg-white opacity-5 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 rounded-full bg-purple-900 opacity-20 blur-3xl"></div>
                        <div className="relative z-10 px-8 py-16 lg:px-20 lg:py-20 h-full flex flex-col justify-center text-white">
                            <div className="mb-16">
                                <span className="inline-block w-12 h-1 bg-white/30 mb-8"></span>
                                <div className="flex items-center justify-between mb-0">
                                    <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight">Get in<br />Touch</h2>
                                    <div className="hidden sm:block text-right mr-4">
                                        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/20 mb-2 ml-auto shadow-xl">
                                            <img src={yusrahProfile} alt="Yusrah - Sonna Exxports" className="w-full h-full object-cover object-top" />
                                        </div>
                                        <p className="font-display text-xl tracking-wide uppercase leading-tight">Sonna<br />Exxports</p>
                                    </div>
                                </div>
                                <p className="text-purple-100 text-lg max-w-sm font-light leading-relaxed">
                                    Connecting global markets with <br />exquisite craftsmanship. Visit our <br />headquarters or reach out for inquiries.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3 text-purple-200 mb-2">
                                        <span className="material-symbols-outlined">location_on</span>
                                        <h3 className="font-bold uppercase tracking-widest text-sm">Headquarters</h3>
                                    </div>
                                    <address className="not-italic text-purple-50 font-light leading-relaxed">
                                        123 Fashion Avenue<br />
                                        Textile District, Mumbai<br />
                                        Maharashtra, 400001<br />
                                        India
                                    </address>
                                </div>
                            </div>
                            <div className="mt-12 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-xs text-purple-300 mb-3">Direct Contact</h4>
                                    <p className="text-xl font-display text-white mb-1">+91 22 4567 8900</p>
                                    <p className="text-purple-200 text-sm">Mon-Fri, 9am - 6pm IST</p>
                                </div>
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-xs text-purple-300 mb-3">Email Us</h4>
                                    <a className="text-xl font-display text-white hover:text-purple-200 transition-colors border-b border-transparent hover:border-purple-200 inline-block" href="mailto:hello@sonnaexxports.com">hello@sonnaexxports.com</a>
                                </div>
                            </div>
                            <div className="mt-12 relative h-48 w-full rounded-lg overflow-hidden bg-purple-900/50 border border-white/10 group cursor-pointer">
                                <img alt="Map texture showing global connections" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 grayscale mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW_YV1Kk2sTVaU5ZK3RhTrhokN6sDOKRAHOHpGRprR2IFOUNCoZchF923qxkQ3yMFWJqIkbf8Y4sCo7MxOPcLfTlsGmHVgTlHOismuuMjlOTgc5OEYILNSc7wKDq6a-tBHOMoTAg52uUxiZs9dslpnpN1_OElAJlWN-tk8ZEMs2IJd3OaEaFR8HU14KGT00pU1dKvdYzTwufNCp56rdDCgZfEVceUbsCDLh2MNPBTJC7qMK1wRr5klAfwqLj57yJnQy1e1ccM8kQ" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white/20 transition-colors flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">map</span> View on Map
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
