export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-kraken-dark border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="w-48 mb-6">
              <img src="/logo_kraken.png" alt="Kraken Fitness Logo" className="w-full h-auto" />
            </div>
            <p className="font-body text-white/50 text-sm leading-relaxed max-w-xs">
              La mejor comunidad de fitness en Puebla. CrossFit Affiliate y HYROX Official Gym.
            </p>
          </div>

          {/* Disciplines */}
          <div>
            <p className="font-body text-white/30 text-[10px] tracking-[0.3em] uppercase mb-5 font-bold">
              Disciplinas
            </p>
            <ul className="space-y-3">
              {['CrossFit', 'HYROX', 'Weightlifting'].map((d) => (
                <li key={d}>
                  <a
                    href="#disciplinas"
                    className="font-body text-white/60 text-sm hover:text-kraken-accent transition-colors duration-200"
                  >
                    {d}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <p className="font-body text-white/30 text-[10px] tracking-[0.3em] uppercase mb-5 font-bold">
              Síguenos
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.instagram.com/kraken_fitness_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-white/60 text-sm hover:text-kraken-accent transition-colors duration-200"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  @kraken_fitness_
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/hyroxmx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-white/60 text-sm hover:text-kraken-accent transition-colors duration-200"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  @hyroxmx
                </a>
              </li>
            </ul>

            <div className="mt-8 flex items-center gap-2 text-white/30">
              <span className="text-base">🇲🇽</span>
              <span className="font-body text-xs tracking-[0.15em] uppercase font-bold">
                Puebla, México
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/30 text-xs tracking-[0.1em]">
            © {year} KRAKEN Fitness. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <span className="font-body text-white/30 text-[10px] tracking-[0.2em] uppercase font-bold">
              CrossFit Affiliate
            </span>
            <span className="font-body text-white/30 text-[10px] tracking-[0.2em] uppercase font-bold">
              HYROX Official Gym
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
