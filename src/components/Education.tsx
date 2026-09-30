import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle } from 'lucide-react';
import { educationData } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#070B14]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1321] border border-[#1E293B] text-xs font-mono text-[#00D4FF] mb-3">
            <span>&lt;academics /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
            Education
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#94A3B8] max-w-xl">
            Academic foundations in Computer Science and Engineering.
          </p>
          <div className="w-12 h-1 bg-[#2F6BFF] rounded-full mt-4" />
        </div>

        {/* Education Timeline / Card */}
        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#0D1321] border border-[#1E293B] p-6 sm:p-8 hover:border-[#2F6BFF]/40 transition-all duration-300 shadow-xl relative overflow-hidden"
            >
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2F6BFF] to-[#00D4FF]" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#131B2E] border border-[#1E293B] flex items-center justify-center text-[#00D4FF] shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#F8FAFC]">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-[#00D4FF] mt-0.5">
                      {edu.fieldOfStudy}
                    </p>
                    <p className="text-sm text-[#94A3B8] font-semibold mt-1">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-[#64748B]">
                  <span className="flex items-center gap-1.5 text-[#94A3B8] bg-[#070B14] px-3 py-1 rounded-md border border-[#1E293B]">
                    <Calendar className="w-3.5 h-3.5 text-[#2F6BFF]" />
                    {edu.period}
                  </span>
                  {edu.location && (
                    <span className="flex items-center gap-1 text-[11px] mt-1 text-[#64748B]">
                      <MapPin className="w-3 h-3 text-[#64748B]" />
                      {edu.location}
                    </span>
                  )}
                </div>
              </div>

              {/* Highlights List */}
              <div className="mt-6 pt-5 border-t border-[#1E293B]/70 space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#00D4FF]" />
                  <span>Academic Focus &amp; Coursework Highlights</span>
                </div>
                {edu.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94A3B8]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#2F6BFF] mt-1 shrink-0" />
                    <span className="leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
