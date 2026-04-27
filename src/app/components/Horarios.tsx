'use client';

import { useState } from 'react';

const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const horarios = [
  '6:00-7:00',
  '7:00-8:00',
  '8:00-9:00',
  '9:00-10:00',
  '10:00-11:00',
  '11:00-13:00',
  '17:00-18:00',
  '18:00-19:00',
  '19:00-20:00',
  '20:00-21:00',
  '21:00-22:00',
];

interface Sesion {
  nombre: string;
  tipo?: 'especial' | 'open' | 'normal' | 'hyrox';
}

const data: Record<string, Record<string, Sesion[]>> = {
  '6:00-7:00': {
    Lunes: [{ nombre: 'Cross' }],
    Martes: [{ nombre: 'Cross' }],
    Miércoles: [{ nombre: 'Cross' }],
    Jueves: [{ nombre: 'Cross' }],
    Viernes: [{ nombre: 'Cross' }],
  },
  '7:00-8:00': {
    Lunes: [{ nombre: 'Cross' }],
    Martes: [{ nombre: 'HYROX', tipo: 'hyrox' }],
    Miércoles: [{ nombre: 'Cross' }],
    Jueves: [{ nombre: 'HYROX', tipo: 'hyrox' }],
    Viernes: [{ nombre: 'Cross' }],
  },
  '8:00-9:00': {
    Lunes: [{ nombre: 'Cross' }],
    Martes: [{ nombre: 'Cross' }],
    Miércoles: [{ nombre: 'Cross' }],
    Jueves: [{ nombre: 'Halterofilia', tipo: 'especial' }, { nombre: 'Cross' }],
    Viernes: [{ nombre: 'Gymnastics', tipo: 'especial' }, { nombre: 'Cross' }],
    Sábado: [{ nombre: 'Gymnastics', tipo: 'especial' }, { nombre: 'Partner WOD', tipo: 'especial' }],
  },
  '9:00-10:00': {
    Lunes: [{ nombre: 'Cross' }],
    Martes: [{ nombre: 'Cross' }],
    Miércoles: [{ nombre: 'Cross' }],
    Jueves: [{ nombre: 'Cross' }],
    Viernes: [{ nombre: 'Cross' }],
    Sábado: [{ nombre: 'HYROX', tipo: 'hyrox' }],
  },
  '10:00-11:00': {
    Lunes: [{ nombre: 'Open Box', tipo: 'open' }],
    Martes: [{ nombre: 'Open Box', tipo: 'open' }],
    Miércoles: [{ nombre: 'Open Box', tipo: 'open' }],
    Jueves: [{ nombre: 'Open Box', tipo: 'open' }],
    Viernes: [{ nombre: 'Open Box', tipo: 'open' }],
    Sábado: [{ nombre: 'Yoga', tipo: 'especial' }, { nombre: 'Open Box', tipo: 'open' }],
  },
  '11:00-13:00': {
    Lunes: [{ nombre: 'Open Box', tipo: 'open' }],
    Martes: [{ nombre: 'Open Box', tipo: 'open' }],
    Miércoles: [{ nombre: 'Open Box', tipo: 'open' }],
    Jueves: [{ nombre: 'Open Box', tipo: 'open' }],
    Viernes: [{ nombre: 'Open Box', tipo: 'open' }],
    Sábado: [{ nombre: 'Open Box', tipo: 'open' }],
  },
  '17:00-18:00': {
    Lunes: [{ nombre: 'Cross' }],
    Martes: [{ nombre: 'Cross' }],
    Miércoles: [{ nombre: 'Cross' }],
    Jueves: [{ nombre: 'Cross' }],
    Viernes: [{ nombre: 'Cross' }],
  },
  '18:00-19:00': {
    Lunes: [{ nombre: 'Cross' }],
    Martes: [{ nombre: 'Cross' }],
    Miércoles: [{ nombre: 'Cross' }],
    Jueves: [{ nombre: 'Halterofilia', tipo: 'especial' }, { nombre: 'Cross' }],
    Viernes: [{ nombre: 'Cross' }],
  },
  '19:00-20:00': {
    Lunes: [{ nombre: 'Stretching', tipo: 'especial' }, { nombre: 'HYROX', tipo: 'hyrox' }],
    Martes: [{ nombre: 'Halterofilia', tipo: 'especial' }, { nombre: 'HYROX', tipo: 'hyrox' }],
    Miércoles: [{ nombre: 'Stretching', tipo: 'especial' }, { nombre: 'HYROX', tipo: 'hyrox' }],
    Jueves: [{ nombre: 'HYROX', tipo: 'hyrox' }],
    Viernes: [{ nombre: 'Cross' }],
  },
  '20:00-21:00': {
    Lunes: [{ nombre: 'Cross' }],
    Martes: [{ nombre: 'Cross' }],
    Miércoles: [{ nombre: 'Cross' }],
    Jueves: [{ nombre: 'Cross' }],
    Viernes: [{ nombre: 'Cross' }],
  },
  '21:00-22:00': {
    Lunes: [{ nombre: 'Cross' }],
    Martes: [{ nombre: 'Cross' }],
    Miércoles: [{ nombre: 'Cross' }],
    Jueves: [{ nombre: 'Cross' }],
  },
};

export default function Horarios() {
  const [diaActivo, setDiaActivo] = useState('Lunes');

  return (
    <section id="horarios" className="bg-kraken-dark py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 md:mb-20 text-center">
          <p className="font-body text-kraken-accent/70 text-xs tracking-[0.3em] uppercase mb-3 font-bold">
            Planifica tu entreno
          </p>
          <h2 className="font-display text-6xl md:text-8xl text-white tracking-tighter">
            HORARIOS
          </h2>
        </div>

        {/* Mobile View: Tabs for days */}
        <div className="md:hidden mb-8 flex overflow-x-auto pb-4 gap-2 no-scrollbar">
          {dias.map((dia) => (
            <button
              key={dia}
              onClick={() => setDiaActivo(dia)}
              className={`flex-shrink-0 px-6 py-3 font-display text-lg tracking-wider border-2 transition-all duration-200 ${
                diaActivo === dia
                  ? 'bg-kraken-accent border-kraken-accent text-kraken-dark'
                  : 'border-white/10 text-white/40'
              }`}
            >
              {dia.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Desktop View: Full Grid */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 border-2 border-white/5 bg-kraken-dark/50 text-kraken-accent font-display text-xl tracking-widest text-left w-32">
                  HORA
                </th>
                {dias.map((dia) => (
                  <th key={dia} className="p-4 border-2 border-white/5 bg-kraken-primary/20 text-white font-display text-xl tracking-widest">
                    {dia.toUpperCase()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {horarios.map((hora) => (
                <tr key={hora}>
                  <td className="p-4 border-2 border-white/5 bg-kraken-dark/50 text-white/50 font-body text-sm font-bold">
                    {hora}
                  </td>
                  {dias.map((dia) => {
                    const sesiones = data[hora]?.[dia] || [];
                    return (
                      <td key={dia} className="p-2 border-2 border-white/5 min-w-[120px]">
                        <div className="flex flex-col gap-1.5">
                          {sesiones.map((s, i) => (
                            <div
                              key={i}
                              className={`p-2 text-center font-body text-[10px] font-black tracking-widest uppercase transition-all duration-300 ${
                                s.tipo === 'hyrox'
                                  ? 'bg-white text-kraken-dark'
                                  : s.tipo === 'especial'
                                  ? 'bg-kraken-accent text-kraken-dark'
                                  : s.tipo === 'open'
                                  ? 'border border-kraken-accent/30 text-kraken-accent'
                                  : 'bg-kraken-primary/30 text-white/90'
                              }`}
                            >
                              {s.nombre}
                            </div>
                          ))}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View: Vertical list for active day */}
        <div className="md:hidden space-y-3">
          {horarios.map((hora) => {
            const sesiones = data[hora]?.[diaActivo] || [];
            if (sesiones.length === 0) return null;
            return (
              <div key={hora} className="flex gap-4 items-center bg-kraken-primary/10 border-l-4 border-kraken-accent p-4">
                <span className="w-24 font-body text-sm font-black text-kraken-accent/60 flex-shrink-0">
                  {hora}
                </span>
                <div className="flex flex-col gap-2 flex-1">
                  {sesiones.map((s, i) => (
                    <span
                      key={i}
                      className={`text-sm font-display tracking-widest uppercase ${
                        s.tipo === 'hyrox' ? 'text-white' : 'text-white/80'
                      }`}
                    >
                      {s.nombre}
                      {s.tipo === 'hyrox' && <span className="ml-2 text-[8px] bg-white text-kraken-dark px-1.5 py-0.5 font-black">OFFICIAL</span>}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center">
          <p className="font-body text-white/30 text-[10px] tracking-[0.2em] uppercase max-w-2xl mx-auto italic">
            [1] Yoga: Clases cada 14 días, consultar programación semanal en historias destacadas.
          </p>
        </div>
      </div>
    </section>
  );
}
