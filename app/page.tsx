import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ProjectsSection from '@/components/ProjectsSection';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Suspense
        fallback={
          <div className="py-20 bg-gray-800 text-center">
            <p className="text-white">Chargement des projets...</p>
          </div>
        }
      >
        <ProjectsSection />
      </Suspense>
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
