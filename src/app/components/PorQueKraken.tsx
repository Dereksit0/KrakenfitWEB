interface Valor {
  numero: string;
  titulo: string;
  descripcion: string;
}

const valores: Valor[] = [
  {
    numero: '01',
    titulo: 'Comunidad real',
    descripcion:
      'No solo entrenas, perteneces. Una comunidad de atletas que se empujan entre sí, que celebran tus PRs y que están ahí cuando los días son difíciles.',
  },
  {
    numero: '02',
    titulo: 'Coaching de élite',
    descripcion:
      'Entrenadores certificados con experiencia en competencia. Técnica correcta desde el día uno, progresión estructurada, feedback constante.',
  },
  {
    numero: '03',
    titulo: 'Programación inteligente',
    descripcion:
      'Ciclos de entrenamiento periodizados para atletas de todos los niveles. Sin improvisación: cada sesión tiene un propósito claro dentro de tu progreso.',
  },
  {
    numero: '04',
    titulo: 'Ambiente competitivo',
    descripcion:
      'Nos preparamos para competir. Desde tu primera clase te exponemos a la mentalidad atlética que separa a los buenos de los grandes.',
  },
];

export default function PorQueKraken() {
  return (
    <section id="nosotros" className="bg-kraken-dark py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 md:mb-20 max-w-xl">
          <p className="font-body text-kraken-accent/70 text-xs tracking-[0.3em] uppercase mb-3 font-bold">
            Nuestra diferencia
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-white tracking-tighter leading-none">
            ¿POR QUÉ
            <br />
            <span className="text-kraken-accent">KRAKEN?</span>
          </h2>
        </div>

        {/* Asymmetric grid */}
        <div className="grid md:grid-cols-2 gap-0 border border-white/10">
          {valores.map((v, i) => (
            <div
              key={v.numero}
              className={`p-10 md:p-12 border-white/10 ${
                i % 2 === 0 ? 'md:border-r' : ''
              } ${i < 2 ? 'border-b' : ''} group hover:bg-kraken-primary/20 transition-colors duration-300`}
            >
              <span className="font-display text-7xl md:text-8xl text-white/5 group-hover:text-kraken-accent/10 transition-colors duration-300 leading-none block mb-4">
                {v.numero}
              </span>
              <h3 className="font-display text-3xl md:text-4xl text-white tracking-tighter mb-4 -mt-8">
                {v.titulo}
              </h3>
              <p className="font-body text-white/60 text-base leading-relaxed max-w-sm">
                {v.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
