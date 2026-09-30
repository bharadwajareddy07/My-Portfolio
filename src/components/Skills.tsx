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
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#0E0611] overflow-hidden">
      {/* Background Accent Glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#542A52]/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFB39A]/8 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#170A1C] border border-[#3D1B3E] text-xs font-mono text-[#FFB39A] mb-3">
            <span>&lt;skills &amp; technologies /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#FDF8F6]">
            Technical Skills
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#D6B8CE] max-w-xl">
            My verified toolkit across programming, web development, and RAG application development.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#FFB39A] to-[#542A52] rounded-full mt-4" />
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
                  borderColor: 'rgba(255, 179, 154, 0.45)',
                  boxShadow: '0 12px 30px -10px rgba(0, 0, 0, 0.6), 0 0 25px -5px rgba(84, 42, 82, 0.4)'
                }}
                className="rounded-3xl bg-[#170A1C] border border-[#3D1B3E] p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden"
              >
                {/* Subtle Hover Gradient Glow in Plum & Peach */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#542A52]/20 rounded-full blur-2xl group-hover:bg-[#FFB39A]/15 transition-all pointer-events-none" />

                <div>
                  {/* Card Header */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="w-11 h-11 rounded-2xl bg-[#1F0E25] border border-[#3D1B3E] flex items-center justify-center text-[#FFB39A] group-hover:border-[#FFB39A]/60 group-hover:text-[#FDF8F6] transition-colors shrink-0 shadow-inner"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                    <div>
                      <h3 className="text-base font-bold text-[#FDF8F6]">
                        {category.title}
                      </h3>
                      <span className="text-[11px] font-mono text-[#93748C]">
                        {category.skills.length} core skills
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#D6B8CE] mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Badges with detailed descriptions */}
                  <div className="space-y-2.5">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ x: 3 }}
                        className="rounded-xl bg-[#0E0611]/90 border border-[#3D1B3E]/80 p-3 hover:border-[#FFB39A]/40 transition-all group/skill"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FFB39A]" />
                            <span className="text-xs font-semibold text-[#FDF8F6] group-hover/skill:text-[#FFB39A] transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-[#D6B8CE] px-2 py-0.5 rounded bg-[#1F0E25] border border-[#3D1B3E]">
                            {skill.tag}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#D6B8CE]/90 mt-1 pl-3.5 leading-normal">
                          {skill.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="mt-6 pt-3 border-t border-[#3D1B3E]/60 flex items-center justify-between text-[11px] text-[#93748C] font-mono">
                  <span className="flex items-center gap-1 text-[#FFB39A]">
                    <Sparkles className="w-3 h-3" />
                    verified skill
                  </span>
                  <span className="text-[#FFD1C4] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#FFB39A]" />
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
