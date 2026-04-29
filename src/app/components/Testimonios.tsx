interface Testimonio {
  nombre: string;
  disciplina: string;
  texto: string;
  inicial: string;
}

const testimonios: Testimonio[] = [
  {
    nombre: 'Mariana Torres',
    disciplina: 'Cross · 14 meses',
    inicial: 'M',
    texto:
      'Llegué sin saber lo que era un thruster y hoy compito en Open. La programación es seria, los coaches te exigen pero siempre con intención. Kraken cambió completamente mi relación con el entrenamiento.',
  },
  {
    nombre: 'Rodrigo Meza',
    disciplina: 'HYROX · 8 meses',
    inicial: 'R',
    texto:
      'Terminé mi primer HYROX en menos de una hora. No hubiera sido posible sin la preparación específica de aquí. El gym tiene las estaciones reales y los coaches saben exactamente cómo prepararte para competir.',
  },
  {
    nombre: 'Sofía Guerrero',
    disciplina: 'Weightlifting · 2 años',
    inicial: 'S',
    texto:
      'Entreno weightlifting desde hace dos años y el nivel técnico de los coaches es de otro nivel. Me han llevado de no poder hacer una arrancada limpia a competir en estatal. La comunidad aquí es única en Puebla.',
  },
];

export default function Testimonios() {
  return (
    <section id="comunidad" className="bg-kraken-primary py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p className="font-body text-kraken-accent/70 text-xs tracking-[0.3em] uppercase mb-3 font-bold">
            Lo que dicen
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-white tracking-tighter">
            COMUNIDAD
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonios.map((t) => (
            <div
              key={t.nombre}
              className="bg-kraken-dark/50 border-l-4 border-kraken-accent p-8 md:p-10 flex flex-col gap-6"
            >
              {/* Quote mark */}
              <span className="font-display text-6xl text-kraken-accent/30 leading-none -mb-4">
                &ldquo;
              </span>

              {/* Text */}
              <p className="font-body text-white/80 text-base leading-relaxed flex-1">
                {t.texto}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-kraken-accent/20 border border-kraken-accent/30 flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-kraken-accent text-lg leading-none">
                    {t.inicial}
                  </span>
                </div>
                <div>
                  <p className="font-body font-bold text-white text-sm tracking-wide">{t.nombre}</p>
                  <p className="font-body text-kraken-accent/60 text-xs tracking-[0.1em] uppercase">
                    {t.disciplina}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
