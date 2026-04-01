import React, { useState, useMemo, useRef, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import contactImage from '../assets/Contact.png';
import { useLanguage } from '../context/LanguageContext';
import 'react-phone-input-2/lib/style.css';

const Contact = () => {
    const { t } = useLanguage();
    const countryCodes = useMemo(() => [
        { code: '+93', iso: 'af', name: 'Afghanistan' },
        { code: '+355', iso: 'al', name: 'Albania' },
        { code: '+213', iso: 'dz', name: 'Algeria' },
        { code: '+376', iso: 'ad', name: 'Andorra' },
        { code: '+244', iso: 'ao', name: 'Angola' },
        { code: '+54', iso: 'ar', name: 'Argentina' },
        { code: '+374', iso: 'am', name: 'Armenia' },
        { code: '+61', iso: 'au', name: 'Australia' },
        { code: '+43', iso: 'at', name: 'Austria' },
        { code: '+994', iso: 'az', name: 'Azerbaijan' },
        { code: '+973', iso: 'bh', name: 'Bahrain' },
        { code: '+880', iso: 'bd', name: 'Bangladesh' },
        { code: '+375', iso: 'by', name: 'Belarus' },
        { code: '+32', iso: 'be', name: 'Belgium' },
        { code: '+501', iso: 'bz', name: 'Belize' },
        { code: '+229', iso: 'bj', name: 'Benin' },
        { code: '+975', iso: 'bt', name: 'Bhutan' },
        { code: '+591', iso: 'bo', name: 'Bolivia' },
        { code: '+387', iso: 'ba', name: 'Bosnia and Herzegovina' },
        { code: '+267', iso: 'bw', name: 'Botswana' },
        { code: '+55', iso: 'br', name: 'Brazil' },
        { code: '+673', iso: 'bn', name: 'Brunei' },
        { code: '+359', iso: 'bg', name: 'Bulgaria' },
        { code: '+226', iso: 'bf', name: 'Burkina Faso' },
        { code: '+257', iso: 'bi', name: 'Burundi' },
        { code: '+855', iso: 'kh', name: 'Cambodia' },
        { code: '+237', iso: 'cm', name: 'Cameroon' },
        { code: '+1', iso: 'ca', name: 'Canada' },
        { code: '+236', iso: 'cf', name: 'Central African Republic' },
        { code: '+235', iso: 'td', name: 'Chad' },
        { code: '+56', iso: 'cl', name: 'Chile' },
        { code: '+86', iso: 'cn', name: 'China' },
        { code: '+57', iso: 'co', name: 'Colombia' },
        { code: '+269', iso: 'km', name: 'Comoros' },
        { code: '+242', iso: 'cg', name: 'Congo' },
        { code: '+243', iso: 'cd', name: 'Congo (DRC)' },
        { code: '+506', iso: 'cr', name: 'Costa Rica' },
        { code: '+225', iso: 'ci', name: "CÃ´te d'Ivoire" },
        { code: '+385', iso: 'hr', name: 'Croatia' },
        { code: '+53', iso: 'cu', name: 'Cuba' },
        { code: '+357', iso: 'cy', name: 'Cyprus' },
        { code: '+420', iso: 'cz', name: 'Czech Republic' },
        { code: '+45', iso: 'dk', name: 'Denmark' },
        { code: '+253', iso: 'dj', name: 'Djibouti' },
        { code: '+593', iso: 'ec', name: 'Ecuador' },
        { code: '+20', iso: 'eg', name: 'Egypt' },
        { code: '+503', iso: 'sv', name: 'El Salvador' },
        { code: '+240', iso: 'gq', name: 'Equatorial Guinea' },
        { code: '+291', iso: 'er', name: 'Eritrea' },
        { code: '+372', iso: 'ee', name: 'Estonia' },
        { code: '+268', iso: 'sz', name: 'Eswatini' },
        { code: '+251', iso: 'et', name: 'Ethiopia' },
        { code: '+679', iso: 'fj', name: 'Fiji' },
        { code: '+358', iso: 'fi', name: 'Finland' },
        { code: '+33', iso: 'fr', name: 'France' },
        { code: '+241', iso: 'ga', name: 'Gabon' },
        { code: '+220', iso: 'gm', name: 'Gambia' },
        { code: '+995', iso: 'ge', name: 'Georgia' },
        { code: '+49', iso: 'de', name: 'Germany' },
        { code: '+233', iso: 'gh', name: 'Ghana' },
        { code: '+30', iso: 'gr', name: 'Greece' },
        { code: '+502', iso: 'gt', name: 'Guatemala' },
        { code: '+224', iso: 'gn', name: 'Guinea' },
        { code: '+245', iso: 'gw', name: 'Guinea-Bissau' },
        { code: '+592', iso: 'gy', name: 'Guyana' },
        { code: '+509', iso: 'ht', name: 'Haiti' },
        { code: '+504', iso: 'hn', name: 'Honduras' },
        { code: '+852', iso: 'hk', name: 'Hong Kong' },
        { code: '+36', iso: 'hu', name: 'Hungary' },
        { code: '+354', iso: 'is', name: 'Iceland' },
        { code: '+91', iso: 'in', name: 'India' },
        { code: '+62', iso: 'id', name: 'Indonesia' },
        { code: '+98', iso: 'ir', name: 'Iran' },
        { code: '+964', iso: 'iq', name: 'Iraq' },
        { code: '+353', iso: 'ie', name: 'Ireland' },
        { code: '+972', iso: 'il', name: 'Israel' },
        { code: '+39', iso: 'it', name: 'Italy' },
        { code: '+1', iso: 'jm', name: 'Jamaica' },
        { code: '+81', iso: 'jp', name: 'Japan' },
        { code: '+962', iso: 'jo', name: 'Jordan' },
        { code: '+7', iso: 'kz', name: 'Kazakhstan' },
        { code: '+254', iso: 'ke', name: 'Kenya' },
        { code: '+965', iso: 'kw', name: 'Kuwait' },
        { code: '+996', iso: 'kg', name: 'Kyrgyzstan' },
        { code: '+856', iso: 'la', name: 'Laos' },
        { code: '+371', iso: 'lv', name: 'Latvia' },
        { code: '+961', iso: 'lb', name: 'Lebanon' },
        { code: '+266', iso: 'ls', name: 'Lesotho' },
        { code: '+231', iso: 'lr', name: 'Liberia' },
        { code: '+218', iso: 'ly', name: 'Libya' },
        { code: '+423', iso: 'li', name: 'Liechtenstein' },
        { code: '+370', iso: 'lt', name: 'Lithuania' },
        { code: '+352', iso: 'lu', name: 'Luxembourg' },
        { code: '+853', iso: 'mo', name: 'Macau' },
        { code: '+261', iso: 'mg', name: 'Madagascar' },
        { code: '+265', iso: 'mw', name: 'Malawi' },
        { code: '+60', iso: 'my', name: 'Malaysia' },
        { code: '+960', iso: 'mv', name: 'Maldives' },
        { code: '+223', iso: 'ml', name: 'Mali' },
        { code: '+356', iso: 'mt', name: 'Malta' },
        { code: '+222', iso: 'mr', name: 'Mauritania' },
        { code: '+230', iso: 'mu', name: 'Mauritius' },
        { code: '+52', iso: 'mx', name: 'Mexico' },
        { code: '+373', iso: 'md', name: 'Moldova' },
        { code: '+377', iso: 'mc', name: 'Monaco' },
        { code: '+976', iso: 'mn', name: 'Mongolia' },
        { code: '+382', iso: 'me', name: 'Montenegro' },
        { code: '+212', iso: 'ma', name: 'Morocco' },
        { code: '+258', iso: 'mz', name: 'Mozambique' },
        { code: '+95', iso: 'mm', name: 'Myanmar' },
        { code: '+264', iso: 'na', name: 'Namibia' },
        { code: '+977', iso: 'np', name: 'Nepal' },
        { code: '+31', iso: 'nl', name: 'Netherlands' },
        { code: '+64', iso: 'nz', name: 'New Zealand' },
        { code: '+505', iso: 'ni', name: 'Nicaragua' },
        { code: '+227', iso: 'ne', name: 'Niger' },
        { code: '+234', iso: 'ng', name: 'Nigeria' },
        { code: '+850', iso: 'kp', name: 'North Korea' },
        { code: '+389', iso: 'mk', name: 'North Macedonia' },
        { code: '+47', iso: 'no', name: 'Norway' },
        { code: '+968', iso: 'om', name: 'Oman' },
        { code: '+92', iso: 'pk', name: 'Pakistan' },
        { code: '+970', iso: 'ps', name: 'Palestine' },
        { code: '+507', iso: 'pa', name: 'Panama' },
        { code: '+675', iso: 'pg', name: 'Papua New Guinea' },
        { code: '+595', iso: 'py', name: 'Paraguay' },
        { code: '+51', iso: 'pe', name: 'Peru' },
        { code: '+63', iso: 'ph', name: 'Philippines' },
        { code: '+48', iso: 'pl', name: 'Poland' },
        { code: '+351', iso: 'pt', name: 'Portugal' },
        { code: '+974', iso: 'qa', name: 'Qatar' },
        { code: '+40', iso: 'ro', name: 'Romania' },
        { code: '+7', iso: 'ru', name: 'Russia' },
        { code: '+250', iso: 'rw', name: 'Rwanda' },
        { code: '+966', iso: 'sa', name: 'Saudi Arabia' },
        { code: '+221', iso: 'sn', name: 'Senegal' },
        { code: '+381', iso: 'rs', name: 'Serbia' },
        { code: '+232', iso: 'sl', name: 'Sierra Leone' },
        { code: '+65', iso: 'sg', name: 'Singapore' },
        { code: '+421', iso: 'sk', name: 'Slovakia' },
        { code: '+386', iso: 'si', name: 'Slovenia' },
        { code: '+252', iso: 'so', name: 'Somalia' },
        { code: '+27', iso: 'za', name: 'South Africa' },
        { code: '+82', iso: 'kr', name: 'South Korea' },
        { code: '+211', iso: 'ss', name: 'South Sudan' },
        { code: '+34', iso: 'es', name: 'Spain' },
        { code: '+94', iso: 'lk', name: 'Sri Lanka' },
        { code: '+249', iso: 'sd', name: 'Sudan' },
        { code: '+597', iso: 'sr', name: 'Suriname' },
        { code: '+46', iso: 'se', name: 'Sweden' },
        { code: '+41', iso: 'ch', name: 'Switzerland' },
        { code: '+963', iso: 'sy', name: 'Syria' },
        { code: '+886', iso: 'tw', name: 'Taiwan' },
        { code: '+992', iso: 'tj', name: 'Tajikistan' },
        { code: '+255', iso: 'tz', name: 'Tanzania' },
        { code: '+66', iso: 'th', name: 'Thailand' },
        { code: '+228', iso: 'tg', name: 'Togo' },
        { code: '+216', iso: 'tn', name: 'Tunisia' },
        { code: '+90', iso: 'tr', name: 'Turkey' },
        { code: '+993', iso: 'tm', name: 'Turkmenistan' },
        { code: '+256', iso: 'ug', name: 'Uganda' },
        { code: '+380', iso: 'ua', name: 'Ukraine' },
        { code: '+971', iso: 'ae', name: 'United Arab Emirates' },
        { code: '+44', iso: 'gb', name: 'United Kingdom' },
        { code: '+1', iso: 'us', name: 'United States' },
        { code: '+598', iso: 'uy', name: 'Uruguay' },
        { code: '+998', iso: 'uz', name: 'Uzbekistan' },
        { code: '+58', iso: 've', name: 'Venezuela' },
        { code: '+84', iso: 'vn', name: 'Vietnam' },
        { code: '+967', iso: 'ye', name: 'Yemen' },
        { code: '+260', iso: 'zm', name: 'Zambia' },
        { code: '+263', iso: 'zw', name: 'Zimbabwe' }
    ], []);

    const [ccDropdownOpen, setCcDropdownOpen] = useState(false);
    const [ccSearch, setCcSearch] = useState('');
    const ccRef = useRef(null);
    const ccSearchRef = useRef(null);

    // Close country code dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ccRef.current && !ccRef.current.contains(e.target)) {
                setCcDropdownOpen(false);
                setCcSearch('');
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Focus search when dropdown opens
    useEffect(() => {
        if (ccDropdownOpen && ccSearchRef.current) {
            ccSearchRef.current.focus();
        }
    }, [ccDropdownOpen]);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneCountryCode: '+91',
        phone: '',
        interest: '',
        message: ''
    });

    const selectedCountry = useMemo(() => {
        return countryCodes.find(c => c.code === formData.phoneCountryCode) || countryCodes.find(c => c.iso === 'in');
    }, [formData.phoneCountryCode, countryCodes]);

    const filteredCountries = useMemo(() => {
        if (!ccSearch) return countryCodes;
        const s = ccSearch.toLowerCase();
        return countryCodes.filter(c => c.name.toLowerCase().includes(s) || c.code.includes(s) || c.iso.includes(s));
    }, [ccSearch, countryCodes]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const destination = "contact@sonnaexxports.com";
        const subject = `New Inquiry from ${formData.fullName}`;
        const body = `Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phoneCountryCode} ${formData.phone}
Preferred Communication: ${formData.interest}

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
                    <div className="text-center max-w-3xl mx-auto mt-10 mb-16 animate-fade-in">
                        <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-3 block">{t('contact.title')}</span>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#460566] mb-6">{t('contact.subtitle')}</h1>
                        <p className="text-gray-600 dark:text-gray-400 text-lg font-light leading-relaxed">
                            {t('contact.desc')}
                        </p>
                    </div>

                    {/* Main Interaction Card */}
                    <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col-reverse lg:flex-row animate-fade-in-up">

                        {/* Left Panel: Contact Info & Brand */}
                        <div className="lg:w-2/5 bg-[#460566] text-white p-6 sm:p-10 lg:p-16 flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                            <div className="relative z-10 space-y-12">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-58 h-58 shrink-0 rounded-2xl overflow-hidden shadow-l mb-4">
                                        <img src={contactImage} alt="Sonna Exxports" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold uppercase tracking-wider text-white">Sonna Exxport</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-serif text-3xl mb-8 text-white">{t('contact.info_title')}</h3>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <span className="material-symbols-outlined text-accent-beige mt-1">call</span>
                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-widest text-purple-200 mb-1">{t('contact.phone')}</p>
                                                <p className="font-serif text-xl">+91 22 4567 8900</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <span className="material-symbols-outlined text-accent-beige mt-1">mail</span>
                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-widest text-purple-200 mb-1">{t('contact.email')}</p>
                                                <a href="mailto:contact@sonnaexxports.com" className="font-serif text-xl hover:text-accent-beige transition-colors">contact@sonnaexxports.com</a>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <span className="material-symbols-outlined text-accent-beige mt-1">location_on</span>
                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-widest text-purple-200 mb-1">{t('contact.address_main')}</p>
                                                <p className="font-light opacity-90 leading-relaxed">
                                                    A 504 Lodha bel Air, Patel Estate,<br />
                                                    Mumbai, Maharashtra - 400102
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <span className="material-symbols-outlined text-accent-beige mt-1">location_on</span>
                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-widest text-purple-200 mb-1">{t('contact.address_hq')}</p>
                                                <p className="font-light opacity-90 leading-relaxed">
                                                    A- 17 New Janpath complex, Ashok Marg,<br />
                                                    Lucknow, Uttar Pradesh 226001
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Panel: Form */}
                        <div className="lg:w-3/5 p-6 sm:p-10 lg:p-16">
                            <form className="space-y-10" onSubmit={handleSubmit}>
                                {/* Name */}
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-bold text-primary mb-2 tracking-wide">
                                        {t('contact.form.name')} <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-primary-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-400"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Email & Phone Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold text-primary mb-2 tracking-wide">
                                            {t('contact.form.email')} <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-primary-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-400"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-bold text-primary mb-2 tracking-wide">
                                            {t('contact.form.phone')} <span className="text-red-500">*</span>
                                        </label>
                                        <div className="flex items-center gap-3">
                                            <div className="relative" ref={ccRef} style={{ minWidth: '100px' }}>
                                                <button
                                                    type="button"
                                                    onClick={() => { setCcDropdownOpen(!ccDropdownOpen); setCcSearch(''); }}
                                                    className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-3 py-3 text-primary-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all flex items-center gap-2 cursor-pointer"
                                                >
                                                    <img src={`https://flagcdn.com/w40/${selectedCountry.iso}.png`} alt={selectedCountry.name} className="w-6 h-4 object-cover rounded-sm shadow-sm flex-shrink-0" />
                                                    <span className="text-sm font-medium">{selectedCountry.code}</span>
                                                    <span className="material-symbols-outlined text-gray-400 text-base ml-auto">expand_more</span>
                                                </button>
                                                {ccDropdownOpen && (
                                                    <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden" style={{ maxHeight: '280px' }}>
                                                        <div className="sticky top-0 bg-white p-2 border-b border-gray-100">
                                                            <input
                                                                ref={ccSearchRef}
                                                                type="text"
                                                                value={ccSearch}
                                                                onChange={(e) => setCcSearch(e.target.value)}
                                                                placeholder="Search country..."
                                                                className="w-full px-3 py-2 text-sm bg-gray-50 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-gray-700 placeholder:text-gray-400"
                                                            />
                                                        </div>
                                                        <div className="overflow-y-auto" style={{ maxHeight: '230px' }}>
                                                            {filteredCountries.map((c) => (
                                                                <button
                                                                    key={`${c.iso}-${c.code}`}
                                                                    type="button"
                                                                    onClick={() => {
                                                                        setFormData(prev => ({ ...prev, phoneCountryCode: c.code }));
                                                                        setCcDropdownOpen(false);
                                                                        setCcSearch('');
                                                                    }}
                                                                    className={`w-full flex items-center gap-3 px-3 py-2.5 text-left text-sm transition-colors hover:bg-purple-50 ${
                                                                        formData.phoneCountryCode === c.code && selectedCountry.iso === c.iso ? 'bg-purple-50 font-semibold text-primary' : 'text-gray-700'
                                                                    }`}
                                                                >
                                                                    <img src={`https://flagcdn.com/w40/${c.iso}.png`} alt={c.name} className="w-6 h-4 object-cover rounded-sm shadow-sm flex-shrink-0" />
                                                                    <span className="truncate">{c.name}</span>
                                                                    <span className="text-gray-400 ml-auto flex-shrink-0">{c.code}</span>
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="flex-1 bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-primary-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-400"
                                                placeholder="000 000 0000"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Interest/Subject */}
                                <div>
                                    <label htmlFor="interest" className="block text-sm font-bold text-primary mb-4 tracking-wide">
                                        {t('contact.form.pref')}
                                    </label>
                                    <div className="flex flex-wrap gap-4">
                                        {['Email', 'Phone', 'WhatsApp'].map((option) => (
                                            <button
                                                key={option}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, interest: option })}
                                                className={`px-6 py-2 rounded-full border text-sm font-medium transition-all ${formData.interest === option
                                                        ? 'bg-primary border-primary text-white shadow-md'
                                                        : 'border-gray-200 text-gray-600 hover:border-primary/50'
                                                    }`}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-primary mb-2 tracking-wide">
                                        {t('contact.form.message')} <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full bg-gray-50/50 border border-gray-200 rounded-2xl px-4 py-4 text-primary-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none placeholder:text-gray-400"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="bg-primary text-white hover:bg-primary-dark transition-colors px-10 py-4 rounded-full font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 group w-full sm:w-auto mt-4"
                                >
                                    {t('contact.form.submit')}
                                    <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">send</span>
                                </button>
                            </form>

                            <div className="mt-12 sm:mt-20 rounded-3xl overflow-hidden shadow-xl h-[250px] sm:h-[400px] animate-fade-in-up delay-200">
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
