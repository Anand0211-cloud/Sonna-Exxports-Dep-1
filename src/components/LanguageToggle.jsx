import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage, LANGUAGES, getFlagUrl } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-[45] flex flex-col items-end gap-3">
      {/* Language Options Popup */}
      <div className={`mb-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-100 overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-4 pointer-events-none'}`}
        style={{ boxShadow: '0 20px 60px rgba(70, 5, 102, 0.25), 0 8px 20px rgba(0,0,0,0.1)' }}>
        <div className="px-5 pt-4 pb-2">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Select Language</p>
        </div>
        <div className="px-2 pb-3">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => { setLanguage(lang.code); setIsOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${language === lang.code
                ? 'bg-[#460566] text-white shadow-lg'
                : 'hover:bg-purple-50 text-gray-700'
              }`}
            >
              <img src={getFlagUrl(lang.iso)} alt={lang.label} className="w-7 h-5 object-cover rounded-sm shadow-sm" />
              <span className="font-semibold text-sm tracking-wide">{lang.label}</span>
              {language === lang.code && (
                <span className="material-symbols-outlined ml-auto text-base">check</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Globe Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-14 h-14 rounded-full bg-gradient-to-br from-[#460566] to-[#7b1fa2] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        style={{ boxShadow: '0 8px 30px rgba(70, 5, 102, 0.4)' }}
        aria-label="Change language"
      >
        <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform duration-300">language</span>
        <span className="absolute -top-1 -right-1 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-[#460566]/20 overflow-hidden">
          <img src={getFlagUrl(currentLang.iso)} alt={currentLang.label} className="w-5 h-3.5 object-cover rounded-sm" />
        </span>
      </button>
    </div>
  );
};

export default LanguageToggle;
