'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const MAPS_URL = 'https://maps.app.goo.gl/nHTypGR6wsEd8wUT6';
const MAPS_EMBED_SRC =
  'https://www.google.com/maps?q=19.0467292,-98.2496381&z=16&output=embed';
const WHATSAPP_URL =
  "https://wa.me/522211873381?text=Hola!%20Me%20interesa%20unirme%20a%20Kraken%20Fitness%20y%20solicitar%20mi%20clase%20piloto.";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

const datos = [
  {
    label: 'Horario',
    valor: 'Lun-Vie 6:00-21:00\nSáb 8:00-13:00',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    ),
  },
  {
    label: 'Instalaciones',
    valor: 'Cross Training\nHYROX Official Gym',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"
      />
    ),
  },
];

export default function Ubicacion() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="ubicacion" className="relative bg-kraken-dark py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-kraken-accent/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={item} className="mb-16 md:mb-20 max-w-xl">
            <p className="font-body text-kraken-accent/70 text-xs tracking-[0.3em] uppercase mb-3 font-bold">
              Encuéntranos
            </p>
            <h2 className="font-display text-5xl md:text-7xl text-white tracking-tighter leading-none">
              NUESTRA
              <br />
              <span className="text-kraken-accent">UBICACIÓN</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-stretch">
            {/* Info panel */}
            <motion.div
              variants={item}
              className="flex flex-col justify-between border border-white/10 bg-kraken-primary/10 p-8 md:p-12"
            >
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <svg
                    className="w-7 h-7 text-kraken-accent flex-shrink-0 mt-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C7.589 2 4 5.589 4 9.995 4 16.44 11.12 21.54 11.424 21.752a1 1 0 0 0 1.152 0C12.88 21.54 20 16.44 20 9.995 20 5.589 16.411 2 12 2zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  <div>
                    <p className="font-display text-3xl md:text-4xl text-white tracking-tight leading-none">
                      Kraken Fitness
                    </p>
                    <p className="font-body text-white/50 text-sm mt-2 tracking-[0.1em] uppercase font-bold">
                      Puebla, México 🇲🇽
                    </p>
                  </div>
                </div>

                <p className="font-body text-white/60 text-base leading-relaxed mb-10 max-w-md">
                  Ven a conocer nuestras instalaciones sin compromiso. Te
                  esperamos para que vivas la experiencia Kraken en primera
                  persona.
                </p>

                {/* Quick facts */}
                <div className="grid sm:grid-cols-2 gap-px bg-white/10 mb-10">
                  {datos.map((d) => (
                    <div key={d.label} className="bg-kraken-dark p-6">
                      <svg
                        className="w-5 h-5 text-kraken-accent mb-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.8}
                      >
                        {d.icon}
                      </svg>
                      <p className="font-body text-white/30 text-[10px] tracking-[0.2em] uppercase font-bold mb-2">
                        {d.label}
                      </p>
                      <p className="font-body text-white/80 text-sm leading-relaxed whitespace-pre-line">
                        {d.valor}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-kraken-accent text-kraken-dark font-body font-black text-sm px-8 py-4 tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white hover:scale-105"
                >
                  Cómo llegar
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7V16" />
                  </svg>
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 border-2 border-white/20 text-white/80 font-body font-bold text-sm px-8 py-4 tracking-[0.2em] uppercase hover:border-kraken-accent hover:text-white transition-all duration-300"
                >
                  Escríbenos
                </a>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div variants={item}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir la ubicación de Kraken Fitness en Google Maps"
                className="group relative block h-full min-h-[420px] border border-white/10 overflow-hidden"
              >
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{
                    filter:
                      'grayscale(0.4) invert(90%) contrast(85%) hue-rotate(175deg) brightness(0.95)',
                  }}
                >
                  <iframe
                    title="Ubicación de Kraken Fitness en Google Maps"
                    src={MAPS_EMBED_SRC}
                    className="w-full h-full pointer-events-none"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Overlay tint + border accent on hover */}
                <div className="absolute inset-0 bg-kraken-dark/10 group-hover:bg-kraken-dark/0 transition-colors duration-300" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-kraken-accent transition-colors duration-300 pointer-events-none" />

                {/* Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-kraken-dark/90 backdrop-blur-sm px-4 py-2.5 pointer-events-none">
                  <span className="w-2 h-2 bg-kraken-accent rounded-full animate-pulse" />
                  <span className="font-body text-white text-xs tracking-[0.15em] uppercase font-bold">
                    Ver en Google Maps
                  </span>
                </div>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
