import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { t } = useLanguage();

    return (
        <header className="fixed top-0 z-50 w-full bg-[#460566] border-b border-white/10 transition-all duration-300">
            <div className={`layout-container flex justify-center px-4 md:px-10 ${isMenuOpen ? 'py-6' : 'py-3'} md:py-6 transition-all duration-300`}>
                <div className="w-full max-w-7xl flex items-center justify-between relative">
                    {/* Left Navigation (Desktop) */}
                    <nav className="hidden lg:flex items-center gap-8">
                        <Link to="/about" className="text-white/80 hover:text-accent-beige text-base font-semibold transition-colors">{t('nav.about')}</Link>
                        <Link to="/collections" className="text-white/80 hover:text-accent-beige text-base font-semibold transition-colors">{t('nav.collection')}</Link>
                    </nav>

                    {/* Logo (Centered on Desktop, Left on Mobile) */}
                    <Link to="/" className="flex items-center justify-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 transition-transform duration-300 hover:scale-105 z-50">
                        <img
                            src={logo}
                            alt="Sonna Exxports"
                            className="h-16 md:h-24 w-auto object-contain"
                        />
                    </Link>

                    {/* Right Navigation (Desktop) & Mobile Toggle */}
                    <div className="flex items-center gap-8">
                        <nav className="hidden lg:flex items-center gap-8">
                            <Link to="/customization" className="text-white/80 hover:text-accent-beige text-base font-semibold transition-colors">{t('nav.customization')}</Link>
                            <Link to="/contact" className="text-white/80 hover:text-accent-beige text-base font-semibold transition-colors">{t('nav.contact')}</Link>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden flex items-center justify-center size-10 rounded-full hover:bg-white/10 text-white transition-colors z-50"
                        >
                            <span className="material-symbols-outlined text-3xl">
                                {isMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>

                    {/* Mobile Menu Overlay */}
                    <div className={`fixed inset-0 bg-[#460566] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        <div className="flex flex-col items-center gap-8">
                            <Link
                                to="/"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-white/90 hover:text-accent-beige text-2xl font-serif font-medium transition-colors"
                            >
                                {t('nav.home')}
                            </Link>
                            <Link
                                to="/about"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-white/90 hover:text-accent-beige text-2xl font-serif font-medium transition-colors"
                            >
                                {t('nav.about')}
                            </Link>
                            <Link
                                to="/collections"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-white/90 hover:text-accent-beige text-2xl font-serif font-medium transition-colors"
                            >
                                {t('nav.collection')}
                            </Link>
                            <Link
                                to="/customization"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-white/90 hover:text-accent-beige text-2xl font-serif font-medium transition-colors"
                            >
                                {t('nav.customization')}
                            </Link>
                            <Link
                                to="/contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-white/90 hover:text-accent-beige text-2xl font-serif font-medium transition-colors"
                            >
                                {t('nav.contact')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
