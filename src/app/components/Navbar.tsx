'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// REEMPLAZA EL NÚMERO AQUÍ (incluye código de país, ej: 5212223334444)
const WHATSAPP_URL = "https://wa.me/522211873381?text=Hola!%20Me%20interesa%20unirme%20a%20Kraken%20Fitness%20y%20solicitar%20mi%20clase%20piloto.";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Disciplinas', href: '#disciplinas' },
    { name: 'Clases', href: '#clases' },
    { name: 'Horarios', href: '#horarios' },
    { name: 'Tarifas', href: '#tarifas' },
    { name: 'Comunidad', href: '#comunidad' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? 'bg-[#40A89D] py-4 shadow-2xl' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="relative z-[110] block w-32 md:w-40 transition-transform hover:scale-105">
            <img src="/logo_kraken.png" alt="Kraken Fitness Logo" className="w-full h-auto" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-xs tracking-[0.2em] uppercase font-bold text-white/70 hover:text-kraken-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0D1F20] text-white font-body text-[10px] font-black tracking-[0.2em] uppercase px-6 py-3 hover:bg-white hover:text-[#0D1F20] transition-colors rounded-sm"
            >
              Únete ahora
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden relative z-[210] p-2 transition-colors ${isMobileMenuOpen ? 'text-kraken-dark' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 transition-all ${isMobileMenuOpen ? 'bg-kraken-dark rotate-45 translate-y-2' : 'bg-white'}`} />
              <span className={`w-full h-0.5 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : 'bg-white'}`} />
              <span className={`w-full h-0.5 transition-all ${isMobileMenuOpen ? 'bg-kraken-dark -rotate-45 -translate-y-2' : 'bg-white'}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-kraken-accent/80 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1, type: 'spring', damping: 25, stiffness: 200 }}
              className="flex flex-col items-center gap-10"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display text-5xl text-kraken-dark tracking-tighter hover:opacity-70 transition-all"
                >
                  {link.name.toUpperCase()}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
