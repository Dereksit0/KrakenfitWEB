'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const WHATSAPP_URL = "https://wa.me/5212223334444?text=Hola!%20Me%20interesa%20unirme%20a%20Kraken%20Fitness%20y%20solicitar%20mi%20clase%20piloto.";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

export default function CTAFinal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="contacto"
      className="relative bg-kraken-dark py-32 md:py-48 overflow-hidden"
    >
      {/* Remove technological glow, use more solid background or subtle texture if needed */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />

      {/* Top border accent - more solid */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-kraken-accent/30" />

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <motion.p
          variants={item}
          className="font-body text-kraken-accent text-xs tracking-[0.4em] uppercase mb-8 font-black"
        >
          DA EL PRIMER PASO
        </motion.p>

        <motion.h2
          variants={item}
          className="font-display text-[clamp(4rem,12vw,10rem)] leading-none tracking-tighter text-white mb-8"
        >
          TU PRIMERA
          <br />
          <span className="text-kraken-accent">CLASE ES GRATIS</span>
        </motion.h2>

        <motion.p
          variants={item}
          className="font-body text-white/70 text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto mb-16 font-medium"
        >
          Ven a conocer Kraken sin compromiso. Una clase piloto con coach dedicado para que
          veas de qué está hecha la mejor comunidad de Puebla.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-kraken-accent text-kraken-dark font-body font-black text-lg px-14 py-6 tracking-[0.25em] uppercase transition-all duration-300 hover:bg-white hover:text-kraken-dark hover:scale-105 shadow-2xl"
          >
            Reserva tu clase
          </a>
          <a
            href="https://www.instagram.com/kraken_fitness_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 border-2 border-white/20 text-white/80 font-body font-bold text-lg px-12 py-6 tracking-[0.2em] uppercase hover:border-kraken-accent hover:text-white transition-all duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @kraken_fitness_
          </a>
        </motion.div>

        {/* Location note */}
        <motion.p
          variants={item}
          className="font-body text-white/30 text-sm mt-16 tracking-[0.2em] font-bold"
        >
          PUEBLA, MÉXICO 🇲🇽
        </motion.p>
      </motion.div>
    </section>
  );
}
