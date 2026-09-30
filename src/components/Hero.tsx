import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Github, Mail, Sparkles, ChevronDown, Layers, Terminal, Database, Code } from 'lucide-react';

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
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut' },
    },
  };

  const floatBadge1: Variants = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  const floatBadge2: Variants = {
    initial: { y: 0 },
    animate: {
      y: [5, -5, 5],
      transition: { duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#070B14]"
    >
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-[#2F6BFF]/12 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[280px] bg-[#00D4FF]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-[#2F6BFF]/8 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Availability / Specialization Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0D1321]/90 border border-[#1E293B] shadow-inner backdrop-blur-md mb-6 hover:border-[#00D4FF]/40 transition-colors">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
                <span className="text-xs font-medium text-[#94A3B8] font-mono tracking-wide">
                  Application Developer &bull; <span className="text-[#00D4FF]">RAG Explorer</span>
                </span>
              </div>
            </motion.div>

            {/* Greeting & Headline */}
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="inline-flex items-center gap-2 text-[#00D4FF] font-mono text-sm sm:text-base font-semibold tracking-wide">
                <Terminal className="w-4 h-4 text-[#00D4FF]" />
                <span>Hi, I'm Bharadwaj</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.12]">
                Building Applications.{' '}
                <span className="bg-gradient-to-r from-[#00D4FF] via-[#38BDF8] to-[#2F6BFF] bg-clip-text text-transparent block mt-1.5 drop-shadow-sm">
                  Exploring RAG.
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl font-normal"
            >
              I build modern applications and explore Retrieval-Augmented Generation to create systems that connect LLMs with real-world knowledge bases and structured APIs.
            </motion.p>

            {/* Action CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto"
            >
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#2F6BFF] to-[#1E50D8] hover:from-[#3B77FF] hover:to-[#245AE0] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#2F6BFF]/25 hover:shadow-[#2F6BFF]/40 hover:-translate-y-0.5 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://github.com/bharadwajareddy07"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#0D1321] hover:bg-[#131B2E] text-[#F8FAFC] font-medium text-sm border border-[#1E293B] hover:border-[#2F6BFF]/60 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                <Github className="w-4 h-4 text-[#94A3B8]" />
                <span>GitHub</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#0D1321] hover:bg-[#131B2E] text-[#94A3B8] hover:text-[#00D4FF] font-medium text-sm border border-[#1E293B] hover:border-[#00D4FF]/40 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Interactive Focus Chips */}
            <motion.div
              variants={itemVariants}
              className="mt-10 pt-6 border-t border-[#1E293B]/80 w-full flex flex-wrap items-center gap-2.5"
            >
              <span className="text-[#64748B] font-mono uppercase tracking-wider text-[11px] mr-1">
                Core Focus:
              </span>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0D1321] border border-[#1E293B] text-xs text-[#F8FAFC] font-medium hover:border-[#00D4FF]/40 transition-colors">
                <Code className="w-3.5 h-3.5 text-[#00D4FF]" />
                <span>React &amp; Web Applications</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0D1321] border border-[#1E293B] text-xs text-[#F8FAFC] font-medium hover:border-[#2F6BFF]/40 transition-colors">
                <Layers className="w-3.5 h-3.5 text-[#2F6BFF]" />
                <span>RAG &amp; LangChain</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0D1321] border border-[#1E293B] text-xs text-[#F8FAFC] font-medium hover:border-[#38BDF8]/40 transition-colors">
                <Database className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Vector Databases &amp; SQL</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Profile Presentation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm">
              
              {/* Outer Ambient Glow Ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#2F6BFF]/30 via-[#00D4FF]/20 to-[#2F6BFF]/30 blur-2xl opacity-70 pointer-events-none animate-pulse" />

              {/* Main Profile Showcase Card */}
              <div className="relative rounded-3xl bg-[#0D1321]/90 border border-[#1E293B] p-6 sm:p-7 shadow-2xl backdrop-blur-xl flex flex-col items-center">
                
                {/* Clean Circular Portrait with Glowing Ring */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-5">
                  {/* Rotating Dual Accent Ring */}
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#2F6BFF] via-[#00D4FF] to-[#2F6BFF] opacity-75 blur-[1px]" />
                  
                  {/* Portrait Container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#070B14] shadow-2xl bg-[#070B14]">
                    <img
                      src="/profile.jpg"
                      alt="Bharadwaj"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Corner Status Badge */}
                  <div className="absolute -bottom-1 right-2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D1321] border border-emerald-500/40 text-emerald-400 font-mono text-[11px] shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Open to Internships</span>
                  </div>
                </div>

                {/* Floating Micro Tech Badges */}
                <motion.div
                  variants={floatBadge1}
                  initial="initial"
                  animate="animate"
                  className="absolute -top-3 -right-3 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0D1321]/95 border border-[#00D4FF]/40 text-[#00D4FF] text-xs font-mono shadow-xl backdrop-blur-md"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>RAG Systems</span>
                </motion.div>

                <motion.div
                  variants={floatBadge2}
                  initial="initial"
                  animate="animate"
                  className="absolute bottom-16 -left-4 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0D1321]/95 border border-[#2F6BFF]/40 text-[#F8FAFC] text-xs font-mono shadow-xl backdrop-blur-md"
                >
                  <Code className="w-3.5 h-3.5 text-[#2F6BFF]" />
                  <span>React &bull; APIs</span>
                </motion.div>

                {/* Profile Identity Info */}
                <div className="text-center mt-2 w-full">
                  <h3 className="text-xl font-bold text-[#F8FAFC] tracking-tight">
                    Bharadwaj
                  </h3>
                  <p className="text-xs text-[#00D4FF] font-mono mt-0.5 font-medium">
                    Application Developer &bull; RAG Developer
                  </p>
                </div>

                {/* Bottom Meta Card */}
                <div className="mt-4 pt-3.5 border-t border-[#1E293B]/80 w-full flex items-center justify-between text-xs text-[#94A3B8] font-mono">
                  <span className="text-[#64748B]">2nd-Year CSE</span>
                  <span className="text-[#F8FAFC] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#00D4FF]" />
                    Building Real Apps
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
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-10 flex justify-center w-full"
      >
        <a
          href="#about"
          onClick={(e) => scrollToSection(e, 'about')}
          className="flex flex-col items-center gap-1.5 text-[#64748B] hover:text-[#00D4FF] transition-colors text-xs font-mono group"
        >
          <span className="tracking-widest uppercase text-[10px]">Scroll Down</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#00D4FF]/70 group-hover:text-[#00D4FF]" />
        </a>
      </motion.div>
    </section>
  );
};
