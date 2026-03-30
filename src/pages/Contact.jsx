import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import contactImage from '../assets/Contact.png';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        communication: [],
        message: ''
    });

    const handlePhoneChange = (value) => {
        setFormData(prev => ({ ...prev, phone: value }));
    };

    const handleCheckboxChange = (method) => {
        setFormData(prev => {
            const methods = prev.communication.includes(method)
                ? prev.communication.filter(m => m !== method)
                : [...prev.communication, method];
            return { ...prev, communication: methods };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const destination = "contact@sonnaexxports.com";
        const subject = `New Inquiry from ${formData.fullName}`;
        const body = `Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred Communication: ${formData.communication.join(', ') || 'Not specified'}

Message:
${formData.message}`;

        const mailtoUrl = `mailto:${destination}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
    };

    return (
        <div className="flex flex-col min-h-screen font-display bg-gray-50 dark:bg-background-dark">
            <Header />

            <main className="flex-grow pt-24 pb-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">

                    {/* Header Text */}
                    <div className="text-center max-w-3xl mx-auto  mt-10 mb-16 animate-fade-in">
                        <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Get in Touch</span>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#460566] mb-6">Let's Start a Conversation</h1>
                        <p className="text-gray-600 dark:text-gray-400 text-lg font-light leading-relaxed">
                            Whether you're looking for bespoke manufacturing or have a question about our premium collections, we're here to help you craft your identity.
                        </p>
                    </div>

                    {/* Main Interaction Card */}
                    <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col-reverse lg:flex-row animate-fade-in-up">

                        {/* Left Panel: Contact Info & Brand */}
                        <div className="lg:w-2/5 bg-[#460566] text-white p-10 lg:p-16 flex flex-col justify-between relative overflow-hidden">
                            {/* Background Texture */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                            <div className="relative z-10 space-y-12">
                                {/* Owner Profile - Square - Moved Up */}

                                <div className="flex flex-col items-center text-center">
                                    <div className="w-58 h-58 shrink-0 rounded-2xl overflow-hidden shadow-l mb-4">
                                        <img src={contactImage} alt="Sonna Exxports" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold uppercase tracking-wider text-white">Sonna Exxport</p>
                                    </div>

                                </div>

                                <div>
                                    <h3 className="font-serif text-3xl mb-8 text-white">Contact Information</h3>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <span className="material-symbols-outlined text-accent-beige mt-1">call</span>
                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-widest text-purple-200 mb-1">Phone</p>
                                                <p className="font-serif text-xl">+91 22 4567 8900</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <span className="material-symbols-outlined text-accent-beige mt-1">mail</span>
                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-widest text-purple-200 mb-1">Email</p>
                                                <a href="mailto:contact@sonnaexxports.com" className="font-serif text-xl hover:text-accent-beige transition-colors">contact@sonnaexxports.com</a>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <span className="material-symbols-outlined text-accent-beige mt-1">location_on</span>
                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-widest text-purple-200 mb-1">Main Branch</p>
                                                <p className="font-light opacity-90 leading-relaxed">
                                                    A 504 Lodha bel Air, Patel Estate,<br />
                                                    Mumbai, Maharashtra - 400102
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <span className="material-symbols-outlined text-accent-beige mt-1">location_on</span>
                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-widest text-purple-200 mb-1">Headquarters</p>
                                                <p className="font-light opacity-90 leading-relaxed">
                                                    A- 17 New Janpath complex, Ashok Marg,<br />
                                                    Lucknow, Uttar Pradesh 226001
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="relative z-10 mt-12 flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 group" aria-label="Facebook">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 group" aria-label="Instagram">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 group" aria-label="LinkedIn">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9H12.909v1.632h.051c.495-.939 1.708-1.932 3.518-1.932 3.765 0 4.46 2.478 4.46 5.703v6.049zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 group" aria-label="Twitter">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-14.986 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Right Panel: Form */}
                        <div className="lg:w-3/5 p-10 lg:p-16">
                            <form className="space-y-10">
                                <div className="group">
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-primary transition-colors">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        className="w-full bg-transparent border-0 border-b border-gray-300 px-0 py-3 text-lg focus:ring-0 focus:border-primary transition-all placeholder-gray-300"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="group">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-primary transition-colors">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-transparent border-0 border-b border-gray-300 px-0 py-3 text-lg focus:ring-0 focus:border-primary transition-all placeholder-gray-300"
                                            placeholder="name@company.com"
                                        />
                                    </div>
                                    <div className="group phone-input-container">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-primary transition-colors">Phone Number</label>
                                        <div className="border-b border-gray-300 group-focus-within:border-primary transition-all">
                                            <PhoneInput
                                                country={'in'}
                                                value={formData.phone}
                                                onChange={handlePhoneChange}
                                                enableSearch={true}
                                                buttonStyle={{
                                                    background: 'transparent',
                                                    border: 'none',
                                                    padding: '0',
                                                    width: '40px'
                                                }}
                                                inputStyle={{
                                                    background: 'transparent',
                                                    border: 'none',
                                                    width: '100%',
                                                    padding: '12px 0 12px 50px',
                                                    fontSize: '1.125rem',
                                                    color: '#6b7280'
                                                }}
                                                dropdownStyle={{
                                                    width: '300px',
                                                    fontFamily: 'inherit'
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Preferred Communication</label>
                                    <div className="flex flex-wrap gap-6">
                                        {['Email', 'WhatsApp', 'Call'].map((method) => (
                                            <label key={method} className="inline-flex items-center cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.communication.includes(method)}
                                                    onChange={() => handleCheckboxChange(method)}
                                                    className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary focus:ring-offset-0 transition-all cursor-pointer"
                                                />
                                                <span className="ml-3 text-gray-600 group-hover:text-primary transition-colors">{method}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="group">
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-primary transition-colors">
                                        Message <span className="text-gray-300 font-normal normal-case ml-1">(Optional)</span>
                                    </label>
                                    <textarea
                                        rows="3"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-transparent border-0 border-b border-gray-300 px-0 py-3 text-lg focus:ring-0 focus:border-primary transition-all resize-none placeholder-gray-300"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="group relative w-full sm:w-auto overflow-hidden bg-[#460566] text-white py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <span className="relative z-10 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                                        Send Inquiry
                                        <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </span>
                                </button>
                            </form>

                            <div className="mt-20 rounded-3xl overflow-hidden shadow-xl h-[400px] animate-fade-in-up delay-200">
                                <iframe
                                    src="https://maps.google.com/maps?q=Lodha%20Bel%20Air%20Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Sonna Exxports Location"
                                ></iframe>
                            </div>
                        </div>

                    </div>

                    {/* Map Section */}


                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
