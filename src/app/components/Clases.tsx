'use client';

import { motion } from 'framer-motion';

const clases = [
  {
    nombre: 'HALTEROFILIA',
    descripcion: 'Domina los levantamientos olímpicos. Técnica, potencia y fuerza explosiva bajo supervisión experta.',
    imagen: '/clase_halterofilia.jpg',
    nueva: false,
  },
  {
    nombre: 'GYMNASTICS',
    descripcion: 'Control total de tu peso corporal. Mejora tu fuerza, coordinación y técnica en ejercicios de gimnasia aplicados al Cross.',
    imagen: '/clase_gymnastics.png',
    nueva: false,
  },
  {
    nombre: 'YOGA',
    descripcion: 'Equilibrio y movilidad. El complemento perfecto para recuperar tu cuerpo y enfocar tu mente.',
    imagen: '/clase_yoga.png',
    nueva: false,
  },
  {
    nombre: 'PARTNER WOD',
    descripcion: 'Comunidad en acción. WODs diseñados para trabajar en equipo y superar límites juntos.',
    imagen: '/clase_partner.jpg',
    nueva: false,
  },
  {
    nombre: 'STRETCH',
    descripcion: 'Recuperación inteligente. Optimiza tu movilidad y acelera la recuperación post-entrenamiento.',
    imagen: '/clase_stretch.png',
    nueva: false,
  },
  {
    nombre: 'HYROX',
    descripcion: 'Resistencia sin límites. Prepárate para el evento de fitness más grande del mundo.',
    imagen: '/clase_hyrox.jpg',
    nueva: false,
  },
];

export default function Clases() {
  return (
    <section id="clases" className="bg-kraken-dark py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p className="font-body text-kraken-accent/70 text-xs tracking-[0.3em] uppercase mb-3 font-bold">
            Entrenamientos específicos
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-white tracking-tighter">
            NUESTRAS CLASES
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clases.map((clase, i) => (
            <motion.div
              key={clase.nombre}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[3/4] overflow-hidden bg-kraken-primary/20"
            >
              {/* Background Image */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <img
                  src={clase.imagen}
                  alt={clase.nombre}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kraken-dark via-kraken-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              </div>

              {/* "NUEVA" Badge */}
              {clase.nueva && (
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-white text-kraken-dark font-display text-sm px-4 py-1.5 tracking-widest uppercase font-black shadow-xl">
                    CLASE NUEVA
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-10">
                <h3 className="font-display text-4xl md:text-5xl text-white tracking-tighter mb-4 leading-none group-hover:text-kraken-accent transition-colors duration-300">
                  {clase.nombre}
                </h3>
                <p className="font-body text-white/70 text-sm md:text-base leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {clase.descripcion}
                </p>
                
                {/* Bottom decorative bar */}
                <div className="mt-6 h-1 w-0 bg-kraken-accent group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
