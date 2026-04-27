'use client';

import { motion } from 'framer-motion';

const videos = [
  { id: 1, src: '/entrenamiento1.mp4' },
  { id: 2, src: '/entrenamiento2.mp4' },
  { id: 3, src: '/entrenamiento3.mp4' },
];

export default function Videos() {
  return (
    <section id="comunidad" className="bg-kraken-dark py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-body text-kraken-accent/70 text-xs tracking-[0.3em] uppercase mb-3 font-bold">
              En Acción
            </p>
            <h2 className="font-display text-5xl md:text-7xl text-white tracking-tighter leading-none">
              NUESTRA COMUNIDAD
            </h2>
          </div>
          <p className="font-body text-white/50 text-sm max-w-sm leading-relaxed">
            No solo entrenamos, construimos la comunidad más fuerte de Puebla. 
            Echa un vistazo a lo que se vive cada día en el box.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-[9/16] bg-kraken-primary/10 overflow-hidden group shadow-2xl"
            >
              <video
                src={video.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Overlay styling */}
              <div className="absolute inset-0 border-[12px] border-kraken-dark/20 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-kraken-dark/60 via-transparent to-transparent opacity-60 pointer-events-none" />
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-kraken-accent/40 m-6 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-kraken-accent/40 m-6 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-16 text-center">
          <a
            href="https://www.instagram.com/kraken_fitness_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 group"
          >
            <span className="font-body text-white/40 text-xs tracking-[0.3em] uppercase font-bold group-hover:text-kraken-accent transition-colors">
              Ver más en Instagram
            </span>
            <div className="w-12 h-[1px] bg-white/20 group-hover:bg-kraken-accent transition-all duration-300 group-hover:w-20" />
          </a>
        </div>
      </div>
    </section>
  );
}
