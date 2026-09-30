import React from 'react';
import { ArrowRight, FileDown, Github, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-[#2F6BFF]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[250px] bg-[#00D4FF]/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0D1321] border border-[#1E293B] shadow-sm mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-[#94A3B8] tracking-wide">
                Open to Internship Opportunities
              </span>
            </div>

            {/* Greeting & Name */}
            <div className="space-y-3">
              <span className="text-[#00D4FF] font-mono text-base sm:text-lg font-medium tracking-wide">
                Hi, I'm Bharadwaj
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-[#F8FAFC] leading-[1.15]">
                Computer Science Student &amp;{' '}
                <span className="text-gradient-accent">Aspiring Software Engineer</span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="mt-5 text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
              I build practical web applications and AI-powered solutions while continuously
              improving my software engineering skills.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#2F6BFF] hover:bg-[#2557D6] text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-[#2F6BFF]/20 hover:shadow-[#2F6BFF]/30 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#0D1321] hover:bg-[#131B2E] text-[#F8FAFC] font-medium text-sm border border-[#1E293B] hover:border-[#2F6BFF]/50 transition-all duration-200"
              >
                <FileDown className="w-4 h-4 text-[#00D4FF]" />
                <span>Download Resume</span>
              </a>

              <a
                href="https://github.com/Bharadwaj-source"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#0D1321] hover:bg-[#131B2E] text-[#94A3B8] hover:text-[#F8FAFC] font-medium text-sm border border-[#1E293B] transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Quick Tech Highlights */}
            <div className="mt-10 pt-6 border-t border-[#1E293B]/70 w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#94A3B8]">
              <span className="text-[#64748B] font-mono uppercase tracking-wider text-[11px]">
                Primary Focus:
              </span>
              <div className="flex items-center gap-1.5 text-[#F8FAFC]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]"></span>
                Full-Stack Systems
              </div>
              <div className="flex items-center gap-1.5 text-[#F8FAFC]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2F6BFF]"></span>
                AI &amp; RAG Architecture
              </div>
              <div className="flex items-center gap-1.5 text-[#F8FAFC]">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                FastAPI &amp; React
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code / Tech Card Preview with authentic avatar */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Decorative background glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#2F6BFF]/20 to-[#00D4FF]/20 blur-xl opacity-70 pointer-events-none" />

              {/* Developer Terminal Card */}
              <div className="relative rounded-2xl bg-[#0D1321] border border-[#1E293B] p-5 shadow-2xl overflow-hidden">
                {/* Window Controls */}
                <div className="flex items-center justify-between pb-4 border-b border-[#1E293B]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#94A3B8]">
                    <Terminal className="w-3.5 h-3.5 text-[#00D4FF]" />
                    <span>bharadwaj@dev:~</span>
                  </div>
                  <div className="w-10" />
                </div>

                {/* Profile Header within Card */}
                <div className="pt-4 pb-3 flex items-center gap-3.5 border-b border-[#1E293B]/60">
                  <div className="relative">
                    <img
                      src="/profile.jpg"
                      alt="Bharadwaj"
                      className="w-14 h-14 rounded-xl object-cover border border-[#2F6BFF]/40 shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#0D1321] flex items-center justify-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-[#F8FAFC]">Bharadwaj</h2>
                    <p className="text-xs text-[#94A3B8]">B.Tech CSE &bull; 2nd Year</p>
                    <p className="text-[11px] text-[#00D4FF] font-mono">SRKR Engineering College</p>
                  </div>
                </div>

                {/* Code Terminal Output */}
                <div className="pt-4 font-mono text-xs space-y-2 text-[#94A3B8]">
                  <div className="text-[#64748B]">// Developer Profile Object</div>
                  <div>
                    <span className="text-[#2F6BFF]">const</span>{' '}
                    <span className="text-[#F8FAFC]">engineer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-[#94A3B8]">role:</span>{' '}
                    <span className="text-[#00D4FF]">'Full-Stack &amp; AI Builder'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#94A3B8]">stack:</span> [
                    <span className="text-emerald-400">'React'</span>,{' '}
                    <span className="text-emerald-400">'FastAPI'</span>,{' '}
                    <span className="text-emerald-400">'Python'</span>,{' '}
                    <span className="text-emerald-400">'RAG'</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-[#94A3B8]">status:</span>{' '}
                    <span className="text-amber-300">'Ready for Software Internships'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#94A3B8]">mindset:</span>{' '}
                    <span className="text-[#00D4FF]">'Learn by building practical software'</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* Micro Badges */}
                <div className="mt-4 pt-3 border-t border-[#1E293B]/60 flex items-center justify-between text-[11px] text-[#94A3B8]">
                  <span className="flex items-center gap-1 text-emerald-400 font-mono">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    verified-code
                  </span>
                  <span className="font-mono text-[#64748B]">v2026.1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
