import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="fixed top-0 z-50 w-full glass-nav border-b border-white/10 transition-all duration-300">
            <div className="layout-container flex justify-center px-4 md:px-10 py-6">
                <div className="w-full max-w-7xl flex items-center justify-between relative">
                    {/* Left Navigation (Desktop) */}
                    <nav className="hidden lg:flex items-center gap-8">
                        <Link to="/about" className="text-white/80 hover:text-accent-beige text-base font-semibold transition-colors">About</Link>
                        <Link to="/collections" className="text-white/80 hover:text-accent-beige text-base font-semibold transition-colors">Portfolio</Link>
                    </nav>

                    {/* Logo (Centered on Desktop, Left on Mobile) */}
                    <Link to="/" className="flex items-center justify-center text-white group lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                        <h2 className="text-white text-xl lg:text-2xl font-serif font-bold tracking-tight">SONNA EXXPORTS</h2>
                    </Link>

                    {/* Right Navigation (Desktop) & Mobile Toggle */}
                    <div className="flex items-center gap-8">
                        <nav className="hidden lg:flex items-center gap-8">
                            <Link to="/customization" className="text-white/80 hover:text-accent-beige text-base font-semibold transition-colors">Customization</Link>
                            <Link to="/contact" className="text-white/80 hover:text-accent-beige text-base font-semibold transition-colors">Contact</Link>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button className="lg:hidden flex items-center justify-center size-10 rounded-full hover:bg-white/10 text-white transition-colors">
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
