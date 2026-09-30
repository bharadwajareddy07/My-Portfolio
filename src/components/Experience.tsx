import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Code, Trophy, CheckCircle2, Cpu } from 'lucide-react';
import { practicalExperienceData } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#070B14] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1321] border border-[#1E293B] text-xs font-mono text-[#00D4FF] mb-3">
            <span>&lt;practical trajectory /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
            Experience &amp; Activities
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#94A3B8] max-w-xl">
            Project-based engineering implementations, hackathon initiatives, and technical learning workflows.
          </p>
          <div className="w-12 h-1 bg-[#2F6BFF] rounded-full mt-4" />
        </motion.div>

        {/* Timeline Container with Self-Drawing Vertical Line */}
        <div className="relative ml-4 md:ml-28 space-y-12">
          {/* Animated SVG / Div line that draws itself on scroll */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ originY: 0 }}
            className="absolute left-0 top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#2F6BFF] via-[#00D4FF] to-[#1E293B]"
          />

          {practicalExperienceData.map((item, index) => {
            const isHackathon = item.type === 'Hackathon Initiative';
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-8 md:pl-10 group"
              >
                {/* Timeline Node Icon with Pop-in spring animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20, delay: index * 0.15 + 0.2 }}
                  className="absolute -left-[15px] top-1 w-8 h-8 rounded-full bg-[#0D1321] border-2 border-[#2F6BFF] flex items-center justify-center text-[#00D4FF] group-hover:scale-110 group-hover:border-[#00D4FF] transition-all shadow-md shadow-[#2F6BFF]/20"
                >
                  {isHackathon ? (
                    <Trophy className="w-3.5 h-3.5" />
                  ) : item.type === 'Project Engineering' ? (
                    <Code className="w-3.5 h-3.5" />
                  ) : (
                    <Cpu className="w-3.5 h-3.5" />
                  )}
                </motion.div>

                {/* Experience Card */}
                <motion.div
                  whileHover={{ y: -3, borderColor: 'rgba(47, 107, 255, 0.45)' }}
                  className="rounded-2xl bg-[#0D1321] border border-[#1E293B] p-6 sm:p-8 transition-all duration-200 shadow-xl"
                >
                  {/* Top Meta Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-[#131B2E] border border-[#2F6BFF]/30 text-[#00D4FF]">
                        {item.type}
                      </span>
                      <span className="text-xs font-semibold text-[#94A3B8]">
                        {item.context}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#64748B]">
                      <Calendar className="w-3.5 h-3.5 text-[#2F6BFF]" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Role Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#F8FAFC] mb-3">
                    {item.role}
                  </h3>

                  {/* Context Description */}
                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2.5 mb-6">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94A3B8]">
                        <CheckCircle2 className="w-4 h-4 text-[#2F6BFF] mt-0.5 shrink-0" />
                        <span className="leading-normal">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1E293B]/70">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-[#070B14] border border-[#1E293B] text-[11px] font-mono text-[#94A3B8]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
