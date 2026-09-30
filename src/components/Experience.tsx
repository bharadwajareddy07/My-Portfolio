import React from 'react';
import { Calendar, Code, Trophy, CheckCircle2 } from 'lucide-react';
import { practicalExperienceData } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1321] border border-[#1E293B] text-xs font-mono text-[#00D4FF] mb-3">
            <span>&lt;timeline /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
            Experience &amp; Practical Work
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#94A3B8] max-w-xl">
            Project-based engineering, end-to-end software implementations, and hackathon technical initiatives.
          </p>
          <div className="w-12 h-1 bg-[#2F6BFF] rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-[#1E293B] ml-4 md:ml-32 space-y-12">
          {practicalExperienceData.map((item) => {
            const isHackathon = item.type === 'Hackathon';
            return (
              <div key={item.id} className="relative pl-8 md:pl-10 group">
                {/* Timeline Node Icon */}
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-[#0D1321] border-2 border-[#2F6BFF] flex items-center justify-center text-[#00D4FF] group-hover:scale-110 group-hover:border-[#00D4FF] transition-all">
                  {isHackathon ? (
                    <Trophy className="w-3.5 h-3.5" />
                  ) : (
                    <Code className="w-3.5 h-3.5" />
                  )}
                </div>

                {/* Experience Card */}
                <div className="rounded-2xl bg-[#0D1321] border border-[#1E293B] p-6 sm:p-8 hover:border-[#2F6BFF]/40 transition-all duration-200 shadow-lg">
                  {/* Top Meta Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-[#131B2E] border border-[#2F6BFF]/30 text-[#00D4FF]">
                        {item.type}
                      </span>
                      <span className="text-xs font-semibold text-[#94A3B8]">
                        {item.organizationOrContext}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#64748B]">
                      <Calendar className="w-3.5 h-3.5" />
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
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94A3B8]">
                        <CheckCircle2 className="w-4 h-4 text-[#2F6BFF] mt-0.5 shrink-0" />
                        <span className="leading-normal">{bullet}</span>
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
