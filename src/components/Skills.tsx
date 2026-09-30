import React from 'react';
import {
  Code2,
  Layout,
  Server,
  Cpu,
  Database,
  Wrench,
  CheckCircle2,
} from 'lucide-react';
import { skillCategories } from '../data/skills';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Layout,
  Server,
  Cpu,
  Database,
  Wrench,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#070B14]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1321] border border-[#1E293B] text-xs font-mono text-[#00D4FF] mb-3">
            <span>&lt;skills &amp; competencies /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
            Technical Skills
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#94A3B8] max-w-xl">
            Technologies and frameworks I actively use to develop full-stack applications and AI pipelines.
          </p>
          <div className="w-12 h-1 bg-[#2F6BFF] rounded-full mt-4" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.iconName] || Code2;
            return (
              <div
                key={category.title}
                className="rounded-2xl bg-[#0D1321] border border-[#1E293B] p-6 hover:border-[#2F6BFF]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#131B2E] border border-[#1E293B] flex items-center justify-center text-[#00D4FF] group-hover:border-[#2F6BFF]/50 group-hover:text-[#F8FAFC] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#F8FAFC]">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-[#94A3B8] mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Badges / Mini Cards */}
                  <div className="space-y-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="rounded-xl bg-[#070B14]/80 border border-[#1E293B]/70 p-3 hover:border-[#2F6BFF]/30 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                            <span className="text-xs font-semibold text-[#F8FAFC]">
                              {skill.name}
                            </span>
                          </div>
                        </div>
                        {skill.description && (
                          <p className="text-[11px] text-[#94A3B8] mt-1 pl-3.5 leading-normal">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer tag */}
                <div className="mt-5 pt-3 border-t border-[#1E293B]/60 flex items-center justify-between text-[11px] text-[#64748B] font-mono">
                  <span>{category.skills.length} competencies</span>
                  <span className="text-emerald-400/80 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    practical usage
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
