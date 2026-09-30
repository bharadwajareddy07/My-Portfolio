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
    <div className="min-h-screen bg-[#070B14] text-[#F8FAFC] selection:bg-[#2F6BFF]/30 selection:text-[#00D4FF]">
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
