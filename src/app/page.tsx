import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Disciplinas from './components/Disciplinas';
import Clases from './components/Clases';
import Horarios from './components/Horarios';
import Tarifas from './components/Tarifas';
import PorQueKraken from './components/PorQueKraken';
import HyroxSection from './components/HyroxSection';
import CrossSection from './components/CrossSection';
import Videos from './components/Videos';
import Testimonios from './components/Testimonios';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Disciplinas />
      <Clases />
      <Horarios />
      <Tarifas />
      <PorQueKraken />
      <CrossSection />
      <HyroxSection />
      <Videos />
      <Testimonios />
      <CTAFinal />
      <Footer />
    </main>
  );
}
