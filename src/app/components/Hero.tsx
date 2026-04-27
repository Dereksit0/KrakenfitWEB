'use client';

import { motion } from 'framer-motion';

const WHATSAPP_URL = "https://wa.me/5212223334444?text=Hola!%20Me%20interesa%20unirme%20a%20Kraken%20Fitness%20y%20solicitar%20mi%20clase%20piloto.";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-kraken-dark flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/kraken_fitness_hero.png"
          alt="Kraken Fitness Gym"
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-kraken-dark/80 via-kraken-dark/40 to-kraken-dark" />
      </div>

      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Main title */}
        <motion.h1
          className="font-display text-[clamp(6rem,20vw,18rem)] leading-none tracking-tighter text-white"
          variants={item}
        >
          KRAKEN
        </motion.h1>

        {/* Fitness subtitle */}
        <motion.p
          className="font-display text-[clamp(1.5rem,4vw,3.5rem)] leading-none tracking-[0.4em] text-kraken-accent mt-2"
          variants={item}
        >
          FITNESS
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="font-body text-base md:text-xl text-white/80 mt-8 mb-4 tracking-[0.3em] uppercase font-bold"
          variants={item}
        >
          La mejor comunidad de Puebla
        </motion.p>

        {/* Disciplines pill */}
        <motion.p
          className="font-body text-sm text-kraken-accent/80 tracking-[0.25em] uppercase mb-16"
          variants={item}
        >
          CrossFit · HYROX · Weightlifting
        </motion.p>

        {/* CTA */}
        <motion.div variants={item}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-kraken-accent text-kraken-dark font-body font-black text-base md:text-lg px-14 py-5 tracking-[0.25em] uppercase transition-all duration-300 hover:scale-105 hover:bg-white hover:text-kraken-dark shadow-[0_0_40px_rgba(77,166,160,0.2)]"
          >
            Reserva tu clase piloto
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/40">
        <span className="text-[10px] font-body tracking-[0.4em] uppercase font-bold">
          Scroll
        </span>
        <div className="w-[2px] h-16 bg-gradient-to-b from-kraken-accent to-transparent" />
      </div>
    </section>
  );
}
