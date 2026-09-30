import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
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
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Technical Skills */}
        <Skills />

        {/* Projects Showcase (Central Showcase) */}
        <Projects />

        {/* Practical Experience & Timeline */}
        <Experience />

        {/* Education */}
        <Education />

        {/* Certifications & Continuous Learning */}
        <Certifications />

        {/* Building in Public / GitHub Activity */}
        <GitHubSection />

        {/* Resume Call To Action */}
        <ResumeCTA />

        {/* Contact & Inquiry */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
