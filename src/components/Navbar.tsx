import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Terminal } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070B14]/85 backdrop-blur-md border-b border-[#1E293B] shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6BFF] rounded-lg p-1"
          >
            <div className="relative w-9 h-9 rounded-lg bg-[#0D1321] border border-[#1E293B] flex items-center justify-center overflow-hidden group-hover:border-[#2F6BFF]/50 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2F6BFF]/10 to-[#00D4FF]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Terminal className="w-5 h-5 text-[#00D4FF]" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold tracking-tight text-[#F8FAFC] text-base group-hover:text-[#00D4FF] transition-colors">
                Bharadwaj
              </span>
              <span className="text-[11px] text-[#94A3B8] font-mono leading-none">
                CS Engineering
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0D1321]/60 border border-[#1E293B]/80 rounded-full px-3 py-1.5 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-[#F8FAFC] bg-[#1E293B] shadow-sm'
                      : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.04]'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-lg bg-[#0D1321] border border-[#1E293B] text-[#F8FAFC] hover:border-[#2F6BFF]/50 hover:bg-[#131B2E] transition-all duration-200 group"
            >
              <FileDown className="w-3.5 h-3.5 text-[#00D4FF] group-hover:translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0D1321] border border-[#1E293B] text-[#F8FAFC]"
              aria-label="Download Resume"
            >
              <FileDown className="w-4 h-4 text-[#00D4FF]" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0D1321] border border-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#2F6BFF]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070B14]/95 backdrop-blur-xl border-b border-[#1E293B] px-4 pt-3 pb-6 transition-all animate-fadeIn">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#1E293B] text-[#00D4FF]'
                      : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.04]'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="pt-3 border-t border-[#1E293B] mt-2 flex flex-col gap-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold rounded-lg bg-[#2F6BFF] text-white hover:bg-[#2557D6] transition-colors"
              >
                <FileDown className="w-4 h-4" />
                Download Resume
              </a>
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#94A3B8] py-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Open to Internship Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
