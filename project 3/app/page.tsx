import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import FeaturedProjects from '@/components/FeaturedProjects';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <FeaturedProjects />
      <Contact />
      <Footer />
    </main>
  );
}