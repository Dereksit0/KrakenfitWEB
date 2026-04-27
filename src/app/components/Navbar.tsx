'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// REEMPLAZA EL NÚMERO AQUÍ (incluye código de país, ej: 5212223334444)
const WHATSAPP_URL = "https://wa.me/5212223334444?text=Hola!%20Me%20interesa%20unirme%20a%20Kraken%20Fitness%20y%20solicitar%20mi%20clase%20piloto.";

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

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Disciplinas', href: '#disciplinas' },
    { name: 'Clases', href: '#clases' },
    { name: 'Horarios', href: '#horarios' },
    { name: 'Tarifas', href: '#tarifas' },
    { name: 'Comunidad', href: '#comunidad' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-kraken-dark/95 backdrop-blur-md py-4 shadow-2xl' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="relative z-10 block w-32 md:w-40 transition-transform hover:scale-105">
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
            className="bg-kraken-accent text-kraken-dark font-body text-[10px] font-black tracking-[0.2em] uppercase px-6 py-3 hover:bg-white transition-colors"
          >
            Únete ahora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-kraken-dark flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-display text-4xl text-white tracking-tighter hover:text-kraken-accent transition-colors"
              >
                {link.name.toUpperCase()}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 bg-kraken-accent text-kraken-dark font-body text-sm font-black tracking-[0.2em] uppercase px-10 py-4"
            >
              Únete ahora
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
