import React from 'react';
import { FileDown, Mail, Sparkles, CheckCircle2 } from 'lucide-react';

export const ResumeCTA: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        {/* Background glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#2F6BFF]/15 via-transparent to-[#00D4FF]/15 blur-2xl pointer-events-none" />

        <div className="relative rounded-3xl bg-[#0D1321] border border-[#1E293B] p-8 sm:p-12 text-center shadow-2xl">
          {/* Availability pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131B2E] border border-[#2F6BFF]/40 text-xs font-mono text-[#00D4FF] mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Available for Summer / Semester Internships</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] max-w-2xl mx-auto">
            Interested in working together?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            I'm currently looking for internship opportunities where I can contribute, learn, and build real-world software.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2F6BFF] hover:bg-[#2557D6] text-white font-medium text-sm transition-all shadow-lg shadow-[#2F6BFF]/25 hover:shadow-[#2F6BFF]/35 group"
            >
              <FileDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              <span>Download Resume (PDF)</span>
            </a>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#070B14] hover:bg-[#131B2E] text-[#F8FAFC] font-medium text-sm border border-[#1E293B] hover:border-[#2F6BFF]/40 transition-all"
            >
              <Mail className="w-4 h-4 text-[#00D4FF]" />
              <span>Contact Me</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-[#1E293B]/60 flex flex-wrap items-center justify-center gap-6 text-xs text-[#94A3B8] font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Quick Learner &amp; Problem Solver
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Full-Stack &amp; AI Fundamentals
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Immediate Availability
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
