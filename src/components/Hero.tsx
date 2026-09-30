import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Github, Mail, Sparkles, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Subtle Gradient & Technical Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#2F6BFF]/12 blur-[140px] rounded-full pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, delay: 0.2, ease: 'easeOut' }}
        className="absolute top-1/3 right-1/4 w-[350px] h-[250px] bg-[#00D4FF]/10 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introductions & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Availability Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0D1321] border border-[#1E293B] shadow-sm mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
                <span className="text-xs font-medium text-[#94A3B8] tracking-wide font-mono">
                  Application Developer &bull; RAG Focus
                </span>
              </div>
            </motion.div>

            {/* Greeting & Main Headline */}
            <motion.div variants={itemVariants} className="space-y-3">
              <span className="text-[#00D4FF] font-mono text-base sm:text-lg font-medium tracking-wide block">
                Hi, I'm Bharadwaj
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F8FAFC] leading-[1.12]">
                Building Applications.{' '}
                <span className="text-gradient-accent block mt-1">Exploring RAG.</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl"
            >
              I build modern applications and explore Retrieval-Augmented Generation to create applications that can work with real-world information.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto"
            >
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2F6BFF] hover:bg-[#2557D6] text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-[#2F6BFF]/25 hover:shadow-[#2F6BFF]/35 hover:-translate-y-0.5 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="https://github.com/bharadwajareddy07"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#0D1321] hover:bg-[#131B2E] text-[#F8FAFC] font-medium text-sm border border-[#1E293B] hover:border-[#2F6BFF]/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#0D1321] hover:bg-[#131B2E] text-[#94A3B8] hover:text-[#00D4FF] font-medium text-sm border border-[#1E293B] hover:border-[#00D4FF]/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Focus Tags */}
            <motion.div
              variants={itemVariants}
              className="mt-10 pt-6 border-t border-[#1E293B]/80 w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#94A3B8]"
            >
              <span className="text-[#64748B] font-mono uppercase tracking-wider text-[11px]">
                Core Focus:
              </span>
              <div className="flex items-center gap-1.5 text-[#F8FAFC]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]"></span>
                Web &amp; Application Development (React &bull; APIs)
              </div>
              <div className="flex items-center gap-1.5 text-[#F8FAFC]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2F6BFF]"></span>
                Retrieval-Augmented Generation (LangChain &bull; Vector DBs)
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Image with Animated Developer Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer Pulsing Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#2F6BFF]/25 via-transparent to-[#00D4FF]/25 blur-2xl opacity-75 pointer-events-none animate-pulse" />

              {/* Developer Frame */}
              <div className="relative rounded-3xl bg-[#0D1321] border border-[#1E293B] p-4 sm:p-5 shadow-2xl max-w-sm">
                <div className="relative rounded-2xl overflow-hidden aspect-square border border-[#1E293B]">
                  <img
                    src="/profile.jpg"
                    alt="Bharadwaj"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/90 via-transparent to-transparent pointer-events-none" />

                  {/* Badges on image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                    <div className="px-3 py-1 rounded-lg bg-[#0D1321]/90 backdrop-blur-md border border-[#2F6BFF]/40 font-mono text-[#00D4FF]">
                      Bharadwaj
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#070B14]/90 backdrop-blur-md border border-emerald-500/30 text-emerald-400 font-mono text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      App &amp; RAG Builder
                    </div>
                  </div>
                </div>

                {/* Sub Card Meta */}
                <div className="mt-4 pt-3 border-t border-[#1E293B]/70 flex items-center justify-between text-xs text-[#94A3B8] font-mono">
                  <span>CSE Undergraduate</span>
                  <span className="text-[#00D4FF] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Practical Projects
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-8 flex justify-center w-full"
      >
        <a
          href="#about"
          onClick={(e) => scrollToSection(e, 'about')}
          className="flex flex-col items-center gap-1 text-[#64748B] hover:text-[#00D4FF] transition-colors text-xs font-mono"
        >
          <span>scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};
