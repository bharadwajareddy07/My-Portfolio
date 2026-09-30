import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Clock } from 'lucide-react';
import { certificationsData } from '../data/certifications';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#070B14] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1321] border border-[#1E293B] text-xs font-mono text-[#00D4FF] mb-3">
            <span>&lt;certifications &amp; courses /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
            Certifications &amp; Continuous Learning
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#94A3B8] max-w-xl">
            Structured coursework, specialized technical training, and workshop participation.
          </p>
          <div className="w-12 h-1 bg-[#2F6BFF] rounded-full mt-4" />
        </motion.div>

        {/* Certifications Cards Grid with Staggered Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert, index) => {
            const isCompleted = cert.status === 'Completed';
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, borderColor: 'rgba(47, 107, 255, 0.45)' }}
                className="rounded-2xl bg-[#0D1321] border border-[#1E293B] p-6 transition-all duration-200 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-[#131B2E] border border-[#1E293B] flex items-center justify-center text-[#00D4FF]">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B]">
                          {cert.category}
                        </span>
                        <h3 className="text-base font-bold text-[#F8FAFC]">
                          {cert.title}
                        </h3>
                      </div>
                    </div>

                    <span
                      className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full flex items-center gap-1 shrink-0 ${
                        isCompleted
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-3 h-3" />
                      ) : (
                        <Clock className="w-3 h-3" />
                      )}
                      {cert.status}
                    </span>
                  </div>

                  <p className="text-xs text-[#00D4FF] font-medium mb-2">
                    {cert.issuer}
                  </p>

                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1E293B]/60 flex flex-wrap gap-1.5">
                  {cert.skillsLearned.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-[#070B14] border border-[#1E293B] text-[10px] font-mono text-[#94A3B8]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
