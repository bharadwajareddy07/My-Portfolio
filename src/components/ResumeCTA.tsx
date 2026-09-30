import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Eye, Sparkles, CheckCircle2 } from 'lucide-react';

export const ResumeCTA: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#0E0611]">
      <div className="max-w-5xl mx-auto relative">
        {/* Background plum and peach glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#542A52]/30 via-transparent to-[#FFB39A]/20 blur-2xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative rounded-3xl bg-[#170A1C] border border-[#3D1B3E] p-8 sm:p-12 text-center shadow-2xl"
        >
          {/* Availability pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F0E25] border border-[#FFB39A]/40 text-xs font-mono text-[#FFB39A] mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open for Internship &amp; Project Opportunities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#FDF8F6] max-w-2xl mx-auto">
            Interested in my work?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#D6B8CE] max-w-2xl mx-auto leading-relaxed">
            Take a closer look at my skills, projects and experience.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#542A52] to-[#7E3D7B] hover:from-[#6A3467] hover:to-[#934890] text-[#FFD1C4] border border-[#FFB39A]/40 font-medium text-sm transition-all shadow-lg shadow-[#542A52]/30 hover:shadow-[#542A52]/45 hover:-translate-y-0.5 group"
            >
              <Eye className="w-4 h-4 text-[#FFB39A]" />
              <span>View Resume</span>
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0E0611] hover:bg-[#1F0E25] text-[#FDF8F6] font-medium text-sm border border-[#3D1B3E] hover:border-[#FFB39A]/40 hover:-translate-y-0.5 transition-all"
            >
              <FileDown className="w-4 h-4 text-[#FFB39A]" />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-[#3D1B3E]/60 flex flex-wrap items-center justify-center gap-6 text-xs text-[#D6B8CE] font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB39A]" />
              Application Development
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB39A]" />
              RAG Architecture
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB39A]" />
              Python &bull; React &bull; APIs &bull; SQL
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
