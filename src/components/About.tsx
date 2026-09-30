import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Bot, Layers, Sparkles, MapPin, Terminal } from 'lucide-react';

const stats = [
  {
    label: 'Academic Track',
    value: 'CSE Student',
    subtext: 'B.Tech Undergrad',
    icon: GraduationCap,
    accent: '#00D4FF',
  },
  {
    label: 'Core Focus',
    value: 'Application Dev',
    subtext: 'Web Apps & APIs',
    icon: Code2,
    accent: '#2F6BFF',
  },
  {
    label: 'Specialization',
    value: 'RAG Applications',
    subtext: 'Document Retrieval',
    icon: Bot,
    accent: '#38BDF8',
  },
  {
    label: 'Mindset',
    value: 'Continuous',
    subtext: 'Learning by Building',
    icon: Sparkles,
    accent: '#34D399',
  },
];

const pillars = [
  { name: 'Application Development', icon: Code2 },
  { name: 'Web Technologies & React', icon: Layers },
  { name: 'APIs & Integration', icon: Terminal },
  { name: 'RAG Architecture & LangChain', icon: Bot },
  { name: 'Vector Databases', icon: Sparkles },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#070B14]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1321] border border-[#1E293B] text-xs font-mono text-[#00D4FF] mb-3">
            <span>&lt;about me /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
            About Me
          </h2>
          <div className="w-12 h-1 bg-[#2F6BFF] rounded-full mt-3" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Summary Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#2F6BFF]/20 via-transparent to-[#00D4FF]/20 blur-xl opacity-60 pointer-events-none" />
              
              <div className="relative rounded-2xl bg-[#0D1321] border border-[#1E293B] p-6 shadow-xl text-center">
                <div className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52 mb-5">
                  <img
                    src="/profile.jpg"
                    alt="Bharadwaj"
                    className="w-full h-full object-cover rounded-2xl border border-[#1E293B] shadow-inner"
                  />
                  <div className="absolute -bottom-2 -right-2 px-3 py-1 bg-[#131B2E] border border-[#2F6BFF]/50 rounded-lg text-xs font-mono text-[#00D4FF] shadow-lg">
                    CS Student
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#F8FAFC]">Bharadwaj</h3>
                <p className="text-sm text-[#94A3B8] mt-1 font-medium">
                  Application Developer &bull; RAG Developer
                </p>

                <div className="mt-4 pt-4 border-t border-[#1E293B] flex items-center justify-center gap-2 text-xs text-[#94A3B8]">
                  <MapPin className="w-3.5 h-3.5 text-[#00D4FF]" />
                  <span>Computer Science Engineering Student</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Focused Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <div className="prose prose-invert max-w-none text-[#94A3B8] space-y-4 text-base sm:text-lg leading-relaxed">
              <p className="text-[#F8FAFC] font-normal">
                I'm a Computer Science student who enjoys building applications and learning how different technologies work together. My current focus is application development, web technologies, APIs, and Retrieval-Augmented Generation (RAG).
              </p>
              <p>
                I believe in understanding software by implementing practical projects: creating modular frontend interfaces with React, integrating backend logic and APIs in Python, handling data with SQL, and exploring vector databases with LangChain to build context-aware document applications.
              </p>
              <p>
                My goal is to continue sharpening my software engineering fundamentals while building reliable, clean, and useful applications.
              </p>
            </div>

            {/* Interest Badges */}
            <div className="pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#64748B] mb-3">
                Focus Areas
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {pillars.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.08 * idx }}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0D1321] border border-[#1E293B] text-xs font-medium text-[#F8FAFC] hover:border-[#2F6BFF]/40 hover:bg-[#131B2E] transition-all cursor-default"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#00D4FF]" />
                      <span>{item.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * idx }}
                whileHover={{ y: -4, borderColor: 'rgba(47, 107, 255, 0.4)' }}
                className="rounded-xl bg-[#0D1321] border border-[#1E293B] p-5 flex flex-col items-start transition-all duration-200 group shadow-md"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-[#131B2E] border border-[#1E293B] group-hover:border-[#2F6BFF]/40 transition-colors"
                >
                  <Icon className="w-5 h-5" style={{ color: stat.accent }} />
                </div>
                <div className="text-xl font-bold text-[#F8FAFC] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-[#94A3B8] mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[#64748B] font-mono mt-1">
                  {stat.subtext}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
