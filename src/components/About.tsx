import React from 'react';
import { GraduationCap, Code2, Bot, Layers, Sparkles, MapPin, Terminal } from 'lucide-react';

const stats = [
  {
    label: 'Academic Year',
    value: '2nd Year',
    subtext: 'B.Tech CSE Student',
    icon: GraduationCap,
    accent: '#00D4FF',
  },
  {
    label: 'Practical Building',
    value: 'Multiple',
    subtext: 'End-to-End Projects',
    icon: Code2,
    accent: '#2F6BFF',
  },
  {
    label: 'AI & Systems',
    value: 'AI / ML',
    subtext: 'RAG & Vector Pipelines',
    icon: Bot,
    accent: '#38BDF8',
  },
  {
    label: 'Architecture',
    value: 'Full-Stack',
    subtext: 'React, APIs & DBs',
    icon: Layers,
    accent: '#60A5FA',
  },
];

const interests = [
  { name: 'Software Development', icon: Code2 },
  { name: 'Artificial Intelligence', icon: Bot },
  { name: 'Machine Learning', icon: Sparkles },
  { name: 'Full-Stack Development', icon: Layers },
  { name: 'AI-Powered Applications', icon: Terminal },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1321] border border-[#1E293B] text-xs font-mono text-[#00D4FF] mb-3">
            <span>&lt;about /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
            About Me
          </h2>
          <div className="w-12 h-1 bg-[#2F6BFF] rounded-full mt-3" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait & Profile Summary Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#2F6BFF]/20 via-transparent to-[#00D4FF]/20 blur-xl opacity-60 pointer-events-none" />
              
              <div className="relative rounded-2xl bg-[#0D1321] border border-[#1E293B] p-6 shadow-xl text-center">
                <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 mb-5">
                  <img
                    src="/profile.jpg"
                    alt="Bharadwaj portrait"
                    className="w-full h-full object-cover rounded-2xl border-2 border-[#1E293B] shadow-inner"
                  />
                  <div className="absolute -bottom-2.5 -right-2.5 px-3 py-1 bg-[#131B2E] border border-[#2F6BFF]/50 rounded-lg text-xs font-mono text-[#00D4FF] shadow-lg">
                    CSE '28
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#F8FAFC]">Bharadwaj</h3>
                <p className="text-sm text-[#94A3B8] mt-1 font-medium">
                  Computer Science &amp; Engineering Student
                </p>

                <div className="mt-4 pt-4 border-t border-[#1E293B] flex items-center justify-center gap-2 text-xs text-[#94A3B8]">
                  <MapPin className="w-3.5 h-3.5 text-[#00D4FF]" />
                  <span>SRKR Engineering College, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative & Focus Areas */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="prose prose-invert max-w-none text-[#94A3B8] space-y-4 text-base sm:text-lg leading-relaxed">
              <p>
                I am a 2nd-year Computer Science Engineering student at SRKR Engineering College with a strong passion for building software that solves concrete, real-world problems.
              </p>
              <p>
                My technical interests center on{' '}
                <span className="text-[#F8FAFC] font-medium">Software Development</span>,{' '}
                <span className="text-[#F8FAFC] font-medium">Artificial Intelligence</span>,{' '}
                <span className="text-[#F8FAFC] font-medium">Machine Learning</span>,{' '}
                <span className="text-[#F8FAFC] font-medium">Full-Stack Development</span>, and{' '}
                <span className="text-[#F8FAFC] font-medium">AI-powered applications</span>.
              </p>
              <p>
                I firmly believe the best way to master modern engineering is by getting hands-on: architecting database schemas, implementing robust REST endpoints, wiring reactive user interfaces, and experimenting with LLM pipelines. I am constantly sharpening my fundamental computer science knowledge and software engineering craft to be a high-impact contributor.
              </p>
            </div>

            {/* Core Interest Badges */}
            <div className="pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#64748B] mb-3">
                Core Focus Areas
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {interests.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0D1321] border border-[#1E293B] text-xs font-medium text-[#F8FAFC] hover:border-[#2F6BFF]/40 hover:bg-[#131B2E] transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#00D4FF]" />
                      <span>{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Highlighted Statistics Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-xl bg-[#0D1321] border border-[#1E293B] p-5 flex flex-col items-start hover:border-[#2F6BFF]/40 transition-all duration-200 group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-[#131B2E] border border-[#1E293B] group-hover:border-[#2F6BFF]/40 transition-colors"
                >
                  <Icon className="w-5 h-5" style={{ color: stat.accent }} />
                </div>
                <div className="text-2xl font-bold text-[#F8FAFC] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-[#94A3B8] mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[#64748B] font-mono mt-1">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
