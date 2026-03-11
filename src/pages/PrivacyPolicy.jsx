import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 font-body antialiased transition-colors duration-300">
            <Header />
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-32">
                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-primary-dark dark:text-gray-100">Privacy Policy</h1>
                
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction</h2>
                        <p>
                            Sonna Exxports respects your privacy and is committed to protecting the personal information you share with us through this website.
                            This Privacy Policy explains how we collect, use, and safeguard your information when you submit an enquiry or interact with our website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
                        <p>We may collect the following information through our contact forms:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Name</li>
                            <li>Contact number (with country code)</li>
                            <li>Email address (if provided)</li>
                            <li>Message or enquiry details</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How We Use Your Information</h2>
                        <p>Your information is used solely to:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
                            <li>Respond to your enquiries</li>
                            <li>Understand your manufacturing requirements</li>
                            <li>Communicate with you regarding our services</li>
                        </ul>
                        <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Communication</h2>
                        <p>
                            We may contact you via WhatsApp or email based on the preference you select while submitting the enquiry.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Data Protection</h2>
                        <p>
                            We take reasonable measures to protect your information and ensure it is used only for legitimate business communication.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Updates</h2>
                        <p>
                            This Privacy Policy may be updated from time to time. Continued use of the website indicates acceptance of the updated policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact</h2>
                        <p>For privacy-related concerns, you may contact us at:</p>
                        <p className="mt-2">Email: <a href="mailto:yusra0026@gmail.com" className="text-primary hover:underline">yusra0026@gmail.com</a></p>
                    </section>

                    <div className="mt-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg border-l-4 border-primary">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">⚠️ DISCLAIMER — SONNA EXXPORTS</h3>
                        <p className="text-sm mb-3">
                            The information provided on this website is for general business and informational purposes only.
                        </p>
                        <p className="text-sm mb-3">
                            Sonna Exxports operates as a B2B garment manufacturer & exporter. Product images, descriptions, and content on this website are indicative and may vary based on customisation, specifications, and client requirements.
                        </p>
                        <p className="text-sm mb-3">
                            Submitting an enquiry through this website does not constitute a confirmed order or agreement. All manufacturing, pricing, timelines, and specifications are subject to discussion and formal approval.
                        </p>
                        <p className="text-sm">
                            Sonna Exxports shall not be liable for any actions taken based on the information available on this website without direct confirmation.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
