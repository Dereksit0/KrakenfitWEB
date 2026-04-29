'use client';

const WHATSAPP_URL = "https://wa.me/522211873381?text=Hola!%20Me%20interesa%20unirme%20a%20Kraken%20Fitness%20y%20solicitar%20mi%20clase%20piloto.";

export default function CrossSection() {
  return (
    <section id="cross" className="bg-kraken-primary py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — decorative stat block */}
          <div className="relative order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              {[
                { numero: '+15', label: 'WODs a la semana' },
                { numero: '100%', label: 'Enfoque funcional' },
                { numero: 'PRs', label: 'Progresión constante' },
                { numero: 'TOP', label: 'Nivel técnico' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-kraken-dark/20 p-8 md:p-10 text-center border-2 border-white/5"
                >
                  <p className="font-display text-6xl md:text-7xl text-white leading-none mb-3">
                    {stat.numero}
                  </p>
                  <p className="font-body text-white/60 text-xs tracking-[0.2em] uppercase leading-tight font-black">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right content */}
          <div className="order-1 md:order-2">
            {/* Main badge */}
            <div className="inline-flex items-center gap-2 bg-kraken-dark text-kraken-accent text-xs font-body font-black px-6 py-3 tracking-[0.25em] uppercase mb-10 shadow-lg">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
              Disciplina Principal
            </div>

            <h2 className="font-display text-6xl md:text-9xl text-white tracking-tighter leading-none mb-8">
              CROSS
            </h2>

            <p className="font-body text-white/90 text-lg md:text-xl leading-relaxed mb-10 max-w-md font-medium">
              Nuestra alma y motor. Un método de entrenamiento que combina gimnasia, halterofilia y acondicionamiento metabólico para prepararte para cualquier reto.
            </p>

            <ul className="space-y-5 mb-12">
              {[
                'Programación exclusiva enfocada en rendimiento',
                'Comunidad que te motiva en cada repetición',
                'Coaching de élite con atención personalizada',
                'Escalable para todos los niveles y edades',
              ].map((punto) => (
                <li key={punto} className="flex items-start gap-4 font-body text-white text-base font-bold">
                  <span className="mt-1 w-6 h-6 rounded-full bg-kraken-dark text-kraken-accent flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3" viewBox="0 0 10 10" fill="currentColor">
                      <path d="M1.5 5.5L4 8l4.5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </span>
                  {punto}
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-kraken-dark text-kraken-accent font-body font-black text-base px-12 py-5 tracking-[0.25em] uppercase transition-all duration-300 hover:bg-white hover:text-kraken-dark hover:scale-105 shadow-xl"
            >
              Prueba una clase
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
