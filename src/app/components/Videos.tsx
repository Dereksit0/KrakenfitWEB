'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const videos = [
  { id: 1, src: '/entrenamiento1.mp4' },
  { id: 2, src: '/entrenamiento2.mp4' },
  { id: 3, src: '/entrenamiento3.mp4' },
];

function VideoItem({ video, index }: { video: { id: number, src: string }, index: number }) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative aspect-[9/16] bg-kraken-primary/10 overflow-hidden group shadow-2xl"
    >
      <video
        ref={videoRef}
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

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-10 w-12 h-12 bg-black/50 hover:bg-kraken-accent text-white hover:text-black rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300"
        aria-label={isMuted ? "Activar sonido" : "Desactivar sonido"}
      >
        {isMuted ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </button>
    </motion.div>
  );
}

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
            <VideoItem key={video.id} video={video} index={i} />
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
