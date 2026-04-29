'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Disciplina {
  nombre: string;
  descripcion: string;
  icon: React.ReactNode;
  tag: string;
}

const disciplinas: Disciplina[] = [
  {
    nombre: 'Cross',
    tag: 'Functional',
    descripcion:
      'Entrenamiento funcional de alta intensidad. Combinamos fuerza, cardio y movimiento atlético con programación inteligente pensada para llevarte al siguiente nivel.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path
          d="M8 24h32M24 8v32M14.34 14.34l19.32 19.32M33.66 14.34L14.34 33.66"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    nombre: 'HYROX',
    tag: 'Official Gym',
    descripcion:
      'El deporte de fitness más exigente del mundo. Combina running y estaciones funcionales en una competencia que pone a prueba tu resistencia y fuerza.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path
          d="M12 36L24 12l12 24M17 27h14"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    nombre: 'Weightlifting',
    tag: 'Olímpico',
    descripcion:
      'Arrancada y envión bajo la guía de entrenadores especializados. Técnica depurada, fuerza explosiva y la disciplina que define a los atletas de élite.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="4" y="21" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="3" />
        <rect x="38" y="21" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="3" />
        <rect x="10" y="18" width="5" height="12" rx="1" stroke="currentColor" strokeWidth="3" />
        <rect x="33" y="18" width="5" height="12" rx="1" stroke="currentColor" strokeWidth="3" />
        <line x1="15" y1="24" x2="33" y2="24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

export default function Disciplinas() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="disciplinas" className="bg-kraken-primary py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <p className="font-body text-kraken-accent/70 text-xs tracking-[0.3em] uppercase mb-3 font-bold">
            Lo que hacemos
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-white tracking-tighter">
            DISCIPLINAS
          </h2>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {disciplinas.map((d) => (
            <motion.div
              key={d.nombre}
              variants={card}
              className="group relative bg-kraken-dark/60 border-t-2 border-white/5 p-8 md:p-10 hover:bg-kraken-dark/80 transition-all duration-300 shadow-2xl"
            >
              {/* Tag */}
              <span className="inline-block font-body text-[10px] text-kraken-accent tracking-[0.25em] uppercase mb-6 font-black">
                {d.tag}
              </span>

              {/* Icon */}
              <div className="text-kraken-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                {d.icon}
              </div>

              {/* Name */}
              <h3 className="font-display text-4xl md:text-5xl text-white tracking-tighter mb-4">
                {d.nombre}
              </h3>

              {/* Description */}
              <p className="font-body text-white/70 text-base leading-relaxed">
                {d.descripcion}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-kraken-accent group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
