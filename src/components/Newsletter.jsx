import React from 'react';
import { getMailtoLink } from '../utils/emailUtils';

const Newsletter = () => {
    return (
        <section className="py-20 border-t border-gray-200 relative overflow-hidden bg-background-light">
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-accent-beige/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 layout-container flex flex-col items-center justify-center px-4 md:px-10 text-center gap-8">
                <h2 className="text-3xl md:text-5xl font-serif text-primary">Start Your Manufacturing Partnership</h2>

                <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
                    <a 
                        href={getMailtoLink('customization')}
                        className="h-14 px-8 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-base flex items-center justify-center transition-all shadow-md transform hover:-translate-y-1"
                    >
                        Discuss Your Requirement
                    </a>
                    <a 
                        href="https://drive.google.com/file/d/1tzwGu-CNx0mRinHnRDcXBDNQnA6YyJzO/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-14 px-8 rounded-full bg-accent-beige hover:bg-accent-beige-hover text-primary-dark font-bold text-base flex items-center justify-center transition-all shadow-md transform hover:-translate-y-1"
                    >
                        Catalogue
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
