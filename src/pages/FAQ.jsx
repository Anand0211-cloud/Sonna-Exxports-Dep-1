import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FAQ = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            question: "Q1. Do you work only with bulk orders?",
            answer: "We primarily work as a B2B apparel manufacturer, supporting bulk and scalable production requirements for international buyers."
        },
        {
            question: "Q2. Do you offer custom garment manufacturing?",
            answer: "Yes. We provide end-to-end custom garment manufacturing, including fabric, colour, prints, branding, and packaging."
        },
        {
            question: "Q3. Do you support private label manufacturing?",
            answer: "Yes. We work with brands seeking private label garment manufacturing, maintaining confidentiality and quality control."
        },
        {
            question: "Q4. Do you manufacture uniforms?",
            answer: "Yes. We manufacture Industrial based on custom requirements."
        },
        {
            question: "Q5. Do you export to Africa and Ghana?",
            answer: "Yes. We support international buyers and work with clients sourcing garments for Africa, including Ghana."
        },
        {
            question: "Q6. How can I start working with Sonna Exxports?",
            answer: "You can begin by submitting your requirements through the contact form. Our team will guide you through the next steps."
        }
    ];

    const [openIndex, setOpenIndex] = useState(0);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 font-body antialiased transition-colors duration-300">
            <Header />
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-32 min-h-screen">
                <div className="text-center mb-12">
                    <span className="text-primary font-bold tracking-widest text-sm uppercase">Support</span>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold mt-3 text-primary-dark dark:text-gray-100">Frequently Asked Questions</h1>
                </div>
                
                <div className="space-y-4 max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`border rounded-lg transition-all duration-300 overflow-hidden ${openIndex === index ? 'border-primary bg-primary/5 dark:bg-primary/10' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'}`}
                        >
                            <button
                                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                                onClick={() => toggleFaq(index)}
                            >
                                <h3 className="font-bold text-gray-900 dark:text-white pr-4">{faq.question}</h3>
                                <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    expand_more
                                </span>
                            </button>
                            <div 
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default FAQ;
