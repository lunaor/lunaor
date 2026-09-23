import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompanyOverview } from './components/CompanyOverview';
import { ProductSpheres } from './components/ProductSpheres';
import { NoosaStory } from './components/NoosaStory';
import { InteractiveSandbar } from './components/InteractiveSandbar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-coastal-sand selection:bg-pastel-coral selection:text-white">
      {/* Navigation */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Sections */}
      <main className="grow">
        {/* Hero Section */}
        <Hero onOpenContact={() => setIsContactOpen(true)} />

        {/* Section 1: The Independent Model & Central Hub */}
        <section id="overview">
          <CompanyOverview />
        </section>

        {/* Section 2: What We Build (High-Level Web App Spheres & Independent Domains) */}
        <ProductSpheres />

        {/* Section 3: Noosa Lifestyle & Engineering Roots */}
        <NoosaStory />

        {/* Section 4: Interactive Sandbar Playground */}
        <InteractiveSandbar />
      </main>

      {/* Footer with "Made in Noosa with ❤️" */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default App;
