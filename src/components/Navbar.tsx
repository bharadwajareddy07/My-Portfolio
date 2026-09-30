import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'RAG', href: '#rag' },
  { name: 'Projects', href: '#projects' },
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
          ? 'bg-[#0E0611]/90 backdrop-blur-md border-b border-[#3D1B3E] shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB39A] rounded-lg p-1"
          >
            <div className="w-8 h-8 rounded-lg bg-[#1F0E25] border border-[#3D1B3E] overflow-hidden flex-shrink-0 group-hover:border-[#FFB39A]/60 transition-colors shadow-sm">
              <img
                src="/profile.jpg"
                alt="Bharadwaj"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold tracking-tight text-[#FDF8F6] text-sm sm:text-base group-hover:text-[#FFB39A] transition-colors leading-tight">
                Bharadwaj
              </span>
              <span className="text-[10px] text-[#D6B8CE] font-mono leading-none">
                Application &amp; RAG Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#170A1C]/80 border border-[#3D1B3E]/90 rounded-full px-3 py-1.5 backdrop-blur-sm shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-[#FFD1C4] bg-[#542A52]/80 border border-[#FFB39A]/30 shadow-sm'
                      : 'text-[#D6B8CE] hover:text-[#FDF8F6] hover:bg-white/[0.05]'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Action / Resume Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-[#1F0E25] border border-[#3D1B3E] text-[#FDF8F6] hover:border-[#FFB39A]/60 hover:bg-[#2A1432] transition-all duration-200 group"
            >
              <FileDown className="w-3.5 h-3.5 text-[#FFB39A] group-hover:translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Actions */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#1F0E25] border border-[#3D1B3E] text-[#FDF8F6]"
              aria-label="Download Resume"
            >
              <FileDown className="w-4 h-4 text-[#FFB39A]" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#1F0E25] border border-[#3D1B3E] text-[#D6B8CE] hover:text-[#FDF8F6] focus:outline-none focus:ring-2 focus:ring-[#FFB39A]"
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
        <div className="md:hidden bg-[#0E0611]/98 backdrop-blur-xl border-b border-[#3D1B3E] px-4 pt-3 pb-6 transition-all animate-fadeIn">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#542A52] text-[#FFB39A]'
                      : 'text-[#D6B8CE] hover:text-[#FDF8F6] hover:bg-white/[0.04]'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="pt-3 border-t border-[#3D1B3E] mt-2 flex flex-col gap-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold rounded-lg bg-[#542A52] text-[#FFD1C4] border border-[#FFB39A]/40 hover:bg-[#6E376B] transition-colors"
              >
                <FileDown className="w-4 h-4 text-[#FFB39A]" />
                View Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
