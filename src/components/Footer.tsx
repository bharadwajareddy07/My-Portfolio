import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070B14] border-t border-[#1E293B] py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1E293B]/60">
          {/* Brand & Role */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="w-7 h-7 rounded-lg bg-[#0D1321] border border-[#1E293B] overflow-hidden flex-shrink-0">
                <img
                  src="/profile.jpg"
                  alt="Bharadwaj"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-bold text-[#F8FAFC]">Bharadwaj</span>
            </div>
            <p className="text-sm text-[#94A3B8]">
              Application Developer | RAG Application Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/bharadwajareddy07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#0D1321] border border-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#2F6BFF]/40 transition-colors"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#0D1321] border border-[#1E293B] text-[#94A3B8] hover:text-[#00D4FF] hover:border-[#2F6BFF]/40 transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="mailto:bharadwaj.workspace@gmail.com"
              className="p-2.5 rounded-xl bg-[#0D1321] border border-[#1E293B] text-[#94A3B8] hover:text-[#00D4FF] hover:border-[#2F6BFF]/40 transition-colors"
              aria-label="Email Address"
              title="Email"
            >
              <Mail className="w-4 h-4" />
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

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B] font-mono">
          <div>
            &copy; {new Date().getFullYear()} Bharadwaj. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Built with React &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
