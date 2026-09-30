import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { RAGSection } from './components/RAGSection';
import { Projects } from './components/Projects';
import { GitHubSection } from './components/GitHub';
import { ResumeCTA } from './components/ResumeCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0E0611] text-[#FDF8F6] selection:bg-[#542A52] selection:text-[#FFB39A]">
      {/* Sticky Top Navigation */}
      <Navbar />

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Skills */}
        <Skills />

        {/* 4. Dedicated RAG Section */}
        <RAGSection />

        {/* 5. Projects Showcase */}
        <Projects />

        {/* 6. GitHub / More of My Work */}
        <GitHubSection />

        {/* 7. Resume Call To Action */}
        <ResumeCTA />

        {/* 8. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
