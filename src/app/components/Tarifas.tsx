'use client';

import { motion } from 'framer-motion';

const tarifas = [
  { nombre: 'DROP IN', precio: '$150', detalle: '', destacada: false },
  { nombre: '2 VISITAS', precio: '$750', detalle: 'semanales / mes', destacada: false },
  { nombre: '3 VISITAS', precio: '$950', detalle: 'semanales / mes', destacada: false },
  { nombre: 'ILIMITADA', precio: '$1,150', detalle: '/ mes', destacada: true },
  { nombre: '3 MESES', precio: '$3,000', detalle: 'Ilimitada *', destacada: false },
  { nombre: '1 AÑO', precio: '$11,000', detalle: 'Ilimitada *', destacada: false },
];

export default function Tarifas() {
  return (
    <section id="tarifas" className="bg-kraken-primary/10 py-24 md:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 md:mb-20 text-center">
          <p className="font-body text-kraken-accent/70 text-xs tracking-[0.3em] uppercase mb-3 font-bold">
            Membresías
          </p>
          <h2 className="font-display text-6xl md:text-8xl text-white tracking-tighter">
            TARIFAS
          </h2>
        </div>

        <div className="space-y-4">
          {tarifas.map((t, i) => (
            <motion.div
              key={t.nombre}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative group flex items-center justify-between p-6 md:p-8 transition-all duration-300 ${
                t.destacada 
                  ? 'bg-kraken-accent text-kraken-dark' 
                  : 'bg-kraken-dark/40 border border-white/5 hover:border-kraken-accent/30'
              }`}
            >
              {/* Plan Name & Detail */}
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
                <h3 className={`font-display text-4xl md:text-5xl tracking-tighter ${t.destacada ? 'text-kraken-dark' : 'text-white'}`}>
                  {t.nombre}
                </h3>
                <span className={`font-body text-xs md:text-sm tracking-[0.1em] uppercase font-bold ${t.destacada ? 'text-kraken-dark/70' : 'text-white/40'}`}>
                  {t.detalle}
                </span>
              </div>

              {/* Price */}
              <div className="text-right">
                <span className={`font-display text-4xl md:text-5xl tracking-tight ${t.destacada ? 'text-kraken-dark' : 'text-kraken-accent'}`}>
                  {t.precio}
                </span>
              </div>

              {/* Decorative line for non-destacada items */}
              {!t.destacada && (
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-kraken-accent/50 group-hover:w-full transition-all duration-500" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center space-y-8">
          <div className="inline-block border-2 border-kraken-accent px-8 py-4">
            <p className="font-display text-2xl md:text-3xl text-white tracking-[0.15em] uppercase">
              SIN COSTO DE INSCRIPCIÓN
            </p>
          </div>

          <p className="font-body text-white/30 text-xs tracking-[0.2em] uppercase italic">
            * Membresías limitadas
          </p>
        </div>
      </div>
    </section>
  );
}
