import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070B14] border-t border-[#1E293B] py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1E293B]/60">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="w-7 h-7 rounded-lg bg-[#0D1321] border border-[#1E293B] flex items-center justify-center text-[#00D4FF]">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-[#F8FAFC]">Bharadwaj</span>
            </div>
            <p className="text-sm text-[#94A3B8]">
              "Building software. Learning continuously."
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Bharadwaj-source"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#0D1321] border border-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#2F6BFF]/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#0D1321] border border-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#2F6BFF]/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-[#00D4FF]" />
            </a>

            <a
              href="mailto:bharadwaj.workspace@gmail.com"
              className="p-2.5 rounded-xl bg-[#0D1321] border border-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#2F6BFF]/40 transition-colors"
              aria-label="Email Address"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#0D1321] border border-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#2F6BFF]/40 transition-colors ml-2"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B] font-mono">
          <div>
            &copy; 2026 Bharadwaj. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Built with React, TypeScript &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
