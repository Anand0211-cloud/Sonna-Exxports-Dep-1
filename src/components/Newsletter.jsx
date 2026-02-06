import React from 'react';

const Newsletter = () => {
    return (
        <section className="py-20 border-t border-gray-200 relative overflow-hidden bg-background-light">
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-accent-beige/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 layout-container flex flex-col items-center justify-center px-4 md:px-10 text-center gap-8">
                <h2 className="text-3xl md:text-5xl font-serif text-primary">Join the Inner Circle</h2>
                <p className="text-gray-600 max-w-md">Subscribe to receive early access to new collections and exclusive export insights.</p>
                <form className="flex w-full max-w-md items-center border-b border-gray-300 focus-within:border-primary transition-colors py-2">
                    <input
                        type="email"
                        className="bg-transparent border-none text-gray-900 placeholder:text-gray-400 focus:ring-0 w-full px-4 text-lg focus:outline-none"
                        placeholder="Email Address"
                    />
                    <button
                        type="button"
                        className="text-primary font-bold uppercase text-sm tracking-wider whitespace-nowrap px-4 hover:text-primary-dark transition-colors"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
