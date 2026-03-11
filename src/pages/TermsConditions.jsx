import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 font-body antialiased transition-colors duration-300">
            <Header />
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-32">
                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-primary-dark dark:text-gray-100">Terms & Conditions</h1>
                
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-8">
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-wide">🔹 INTRODUCTION</h2>
                        <p>
                            These Terms & Conditions govern the use of the Sonna Exxports website and any enquiries or business interactions conducted through it.
                            <br />By accessing this website or submitting an enquiry, you agree to be bound by the terms outlined below. If you do not agree with these terms, we request you not to use the website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-wide">🔹 BUSINESS NATURE</h2>
                        <p>
                            Sonna Exxports operates as a B2B garment manufacturer & exporter.
                            <br />All enquiries and transactions are subject to discussion, mutual agreement, and formal confirmation.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-wide">🔹 ENQUIRIES & COMMUNICATION</h2>
                        <ul className="list-disc pl-6 space-y-2 mt-2 text-gray-600 dark:text-gray-300">
                            <li>Submitting an enquiry does not constitute a confirmed order.</li>
                            <li>All manufacturing, pricing, timelines, and specifications will be discussed and agreed upon separately.</li>
                            <li>Sonna Exxports reserves the right to accept or decline enquiries at its discretion.</li>
                            <li>We may contact you using the communication method you select (WhatsApp or email) to respond to your enquiry.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-wide">🔹 CUSTOM MANUFACTURING</h2>
                        <ul className="list-disc pl-6 space-y-2 mt-2 text-gray-600 dark:text-gray-300">
                            <li>All garments are manufactured based on client-approved specifications.</li>
                            <li>Customisation details, samples, and approvals must be confirmed before production.</li>
                            <li>Sonna Exxports is not responsible for changes requested after final approval has been provided.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-wide">🔹 PRICING & PAYMENTS</h2>
                        <ul className="list-disc pl-6 space-y-2 mt-2 text-gray-600 dark:text-gray-300">
                            <li>Pricing is provided only after requirement assessment.</li>
                            <li>Prices may vary based on fabric, design, quantity, and customisation.</li>
                            <li>Payment terms will be communicated and agreed upon prior to order confirmation.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-wide">🔹 INTELLECTUAL PROPERTY</h2>
                        <p>
                            All content on this website, including text, images, designs, and branding, is the intellectual property of Sonna Exxports unless otherwise stated.
                            <br />Unauthorised use, reproduction, or distribution of any material is prohibited.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-wide">🔹 LIMITATION OF LIABILITY</h2>
                        <p>Sonna Exxports shall not be held liable for:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2 text-gray-600 dark:text-gray-300">
                            <li>Any indirect or consequential loss arising from the use of this website</li>
                            <li>Delays caused by factors beyond reasonable control</li>
                            <li>Misuse or misinterpretation of information provided on the website</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-wide">🔹 CONFIDENTIALITY</h2>
                        <p>
                            Any information shared by clients for the purpose of manufacturing or enquiry will be treated as confidential and used only for business evaluation and execution.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-wide">🔹 GOVERNING LAW</h2>
                        <p>
                            These Terms & Conditions shall be governed and interpreted in accordance with the laws of India.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-wide">🔹 CHANGES TO TERMS</h2>
                        <p>
                            Sonna Exxports reserves the right to update or modify these Terms & Conditions at any time without prior notice. Continued use of the website indicates acceptance of the updated terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-wide">🔹 CONTACT INFORMATION</h2>
                        <p>For any questions regarding these Terms & Conditions, you may contact us at:</p>
                        <p className="mt-2">Email: <a href="mailto:contact@sonnaexxports.com" className="text-primary hover:underline">contact@sonnaexxports.com</a><br/>Phone: +91 </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsConditions;
