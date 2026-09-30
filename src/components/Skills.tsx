import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Layout,
  Cpu,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { skillCategories } from '../data/skills';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Layout,
  Cpu,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#070B14] overflow-hidden">
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
            <span>&lt;skills &amp; technologies /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
            Technical Skills
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#94A3B8] max-w-xl">
            My verified toolkit across programming, web development, and RAG application development.
          </p>
          <div className="w-12 h-1 bg-[#2F6BFF] rounded-full mt-4" />
        </motion.div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.iconName] || Code2;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{
                  y: -6,
                  borderColor: 'rgba(47, 107, 255, 0.5)',
                  boxShadow: '0 12px 30px -10px rgba(0, 0, 0, 0.5), 0 0 25px -5px rgba(47, 107, 255, 0.2)'
                }}
                className="rounded-3xl bg-[#0D1321] border border-[#1E293B] p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden"
              >
                {/* Subtle Hover Gradient Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#2F6BFF]/10 rounded-full blur-2xl group-hover:bg-[#00D4FF]/15 transition-all pointer-events-none" />

                <div>
                  {/* Card Header */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="w-11 h-11 rounded-2xl bg-[#131B2E] border border-[#1E293B] flex items-center justify-center text-[#00D4FF] group-hover:border-[#2F6BFF]/60 group-hover:text-[#F8FAFC] transition-colors shrink-0 shadow-inner"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                    <div>
                      <h3 className="text-base font-bold text-[#F8FAFC]">
                        {category.title}
                      </h3>
                      <span className="text-[11px] font-mono text-[#64748B]">
                        {category.skills.length} core skills
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#94A3B8] mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Badges with detailed descriptions */}
                  <div className="space-y-2.5">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ x: 3 }}
                        className="rounded-xl bg-[#070B14]/90 border border-[#1E293B]/80 p-3 hover:border-[#2F6BFF]/40 transition-all group/skill"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                            <span className="text-xs font-semibold text-[#F8FAFC] group-hover/skill:text-[#00D4FF] transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-[#64748B] px-2 py-0.5 rounded bg-[#131B2E] border border-[#1E293B]">
                            {skill.tag}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#94A3B8] mt-1 pl-3.5 leading-normal">
                          {skill.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="mt-6 pt-3 border-t border-[#1E293B]/60 flex items-center justify-between text-[11px] text-[#64748B] font-mono">
                  <span className="flex items-center gap-1 text-[#00D4FF]">
                    <Sparkles className="w-3 h-3" />
                    verified skill
                  </span>
                  <span className="text-emerald-400/90 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    applied in projects
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
