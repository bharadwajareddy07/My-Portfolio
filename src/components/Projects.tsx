import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  CheckCircle,
  Sparkles,
  Activity,
  MapPin,
  ShieldCheck
} from 'lucide-react';
import { projectsData } from '../data/projects';

type FilterType = 'All' | 'Web' | 'AI/ML' | 'Full Stack';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const [selectedPipelineStep, setSelectedPipelineStep] = useState<number>(1);

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.categories.includes(activeFilter as any);
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#070B14]">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#2F6BFF]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#00D4FF]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1321] border border-[#1E293B] text-xs font-mono text-[#00D4FF] mb-3">
            <span>&lt;featured works /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F8FAFC]">
            Featured Projects
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#94A3B8] max-w-2xl">
            Real-world systems, AI architectures, and full-stack applications engineered to solve genuine domain challenges.
          </p>
          <div className="w-12 h-1 bg-[#2F6BFF] rounded-full mt-4" />
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {(['All', 'Full Stack', 'AI/ML', 'Web'] as FilterType[]).map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[#2F6BFF] text-white shadow-lg shadow-[#2F6BFF]/25 border border-[#2F6BFF]'
                    : 'bg-[#0D1321] text-[#94A3B8] hover:text-[#F8FAFC] border border-[#1E293B] hover:border-[#2F6BFF]/30'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Projects List Showcase */}
        <div className="space-y-16">
          {filteredProjects.map((project, index) => {
            const isRAG = project.id === 'rag-ai-application';
            const isAqua = project.id === 'aqua-feed-system';
            const isLegal = project.id === 'legal-metrology-sih';

            return (
              <div
                key={project.id}
                className="rounded-3xl bg-[#0D1321] border border-[#1E293B] overflow-hidden shadow-2xl hover:border-[#2F6BFF]/40 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Left / Top Details Column */}
                  <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#1E293B]">
                    <div>
                      {/* Badge and Tag */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-md bg-[#131B2E] border border-[#2F6BFF]/30 text-xs font-mono text-[#00D4FF]">
                          {project.badge}
                        </span>
                        <span className="text-xs font-mono text-[#64748B]">
                          Project #{index + 1}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight mb-4">
                        {project.title}
                      </h3>

                      {/* Short Description */}
                      <p className="text-sm sm:text-base text-[#F8FAFC]/90 leading-relaxed mb-6 font-normal">
                        {project.shortDescription}
                      </p>

                      {/* Problem Solved Callout */}
                      <div className="rounded-xl bg-[#070B14] border border-[#1E293B] p-4 mb-6">
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#00D4FF] mb-1.5 uppercase tracking-wider font-mono">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Problem Solved</span>
                        </div>
                        <p className="text-xs text-[#94A3B8] leading-relaxed">
                          {project.problemSolved}
                        </p>
                      </div>

                      {/* Key Features Bullet List */}
                      <div className="mb-6">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-[#64748B] mb-3">
                          Key Capabilities &amp; Highlights
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#94A3B8]">
                          {project.keyFeatures.map((feat) => (
                            <li key={feat} className="flex items-start gap-2">
                              <CheckCircle className="w-3.5 h-3.5 text-[#2F6BFF] mt-0.5 shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Footer Tech Stack and Links */}
                    <div className="pt-6 border-t border-[#1E293B]/80">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-[#070B14] border border-[#1E293B] text-xs font-mono text-[#94A3B8]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#131B2E] hover:bg-[#1E293B] text-[#F8FAFC] text-xs font-medium border border-[#1E293B] hover:border-[#2F6BFF]/40 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            <span>GitHub Repository</span>
                          </a>
                        )}
                        {project.liveDemoUrl && (
                          <a
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2F6BFF] hover:bg-[#2557D6] text-white text-xs font-medium shadow-md shadow-[#2F6BFF]/20 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Custom Visual System UI / Pipeline Showcase */}
                  <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 bg-[#090E1A] flex flex-col justify-center">
                    {/* Visual Interface Component based on Project Type */}
                    {isAqua && (
                      <div className="rounded-2xl bg-[#0D1321] border border-[#1E293B] p-5 shadow-inner">
                        {/* Mock Dashboard Top Bar */}
                        <div className="flex items-center justify-between pb-3.5 border-b border-[#1E293B] mb-4">
                          <div className="flex items-center gap-2.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                            <span className="text-xs font-mono font-medium text-[#F8FAFC]">
                              AquaFeed Management Console
                            </span>
                          </div>
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            Live Sync Active
                          </span>
                        </div>

                        {/* Metric Cards Mockup */}
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          <div className="rounded-xl bg-[#070B14] p-3 border border-[#1E293B]">
                            <span className="text-[10px] text-[#64748B] font-mono block">FCR Index</span>
                            <span className="text-base font-bold text-[#00D4FF]">1.28</span>
                            <span className="text-[9px] text-emerald-400 block mt-0.5">Optimal Range</span>
                          </div>
                          <div className="rounded-xl bg-[#070B14] p-3 border border-[#1E293B]">
                            <span className="text-[10px] text-[#64748B] font-mono block">Biomass</span>
                            <span className="text-base font-bold text-[#2F6BFF]">4,850 kg</span>
                            <span className="text-[9px] text-cyan-400 block mt-0.5">Pond Sector A-C</span>
                          </div>
                          <div className="rounded-xl bg-[#070B14] p-3 border border-[#1E293B]">
                            <span className="text-[10px] text-[#64748B] font-mono block">ABW Metric</span>
                            <span className="text-base font-bold text-emerald-400">28.4 g</span>
                            <span className="text-[9px] text-[#94A3B8] block mt-0.5">Growth +3.2g/wk</span>
                          </div>
                        </div>

                        {/* Operational Feed & Farm Visit Stream Preview */}
                        <div className="space-y-2">
                          <div className="text-[11px] font-mono uppercase text-[#64748B] flex items-center justify-between">
                            <span>Agent Field Visit Logs &amp; Feed Allocations</span>
                            <Activity className="w-3.5 h-3.5 text-[#00D4FF]" />
                          </div>

                          <div className="rounded-lg bg-[#070B14] border border-[#1E293B]/70 p-2.5 flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-cyan-400" />
                              <span className="text-[#F8FAFC] font-medium">Farm #04 - Pond 2 Visit</span>
                            </div>
                            <span className="font-mono text-[11px] text-[#94A3B8]">120kg Feed Logged</span>
                          </div>

                          <div className="rounded-lg bg-[#070B14] border border-[#1E293B]/70 p-2.5 flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-400" />
                              <span className="text-[#F8FAFC] font-medium">Mortality &amp; Health Check</span>
                            </div>
                            <span className="font-mono text-[11px] text-emerald-400">Normal (0.2%)</span>
                          </div>

                          <div className="rounded-lg bg-[#070B14] border border-[#1E293B]/70 p-2.5 flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#2F6BFF]" />
                              <span className="text-[#F8FAFC] font-medium">Yield Harvest Forecast</span>
                            </div>
                            <span className="font-mono text-[11px] text-[#00D4FF]">Est. Harvest 18 Days</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {isRAG && project.pipeline && (
                      <div className="rounded-2xl bg-[#0D1321] border border-[#1E293B] p-5 shadow-inner">
                        {/* RAG Visual Pipeline Header */}
                        <div className="flex items-center justify-between pb-3.5 border-b border-[#1E293B] mb-4">
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-[#00D4FF]" />
                            <span className="text-xs font-mono font-medium text-[#F8FAFC]">
                              End-to-End RAG Pipeline Architecture
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-[#64748B]">
                            Step {selectedPipelineStep} of {project.pipeline.length}
                          </span>
                        </div>

                        {/* Interactive Step-by-Step Flow Nodes */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
                          {project.pipeline.map((p) => {
                            const isSelected = selectedPipelineStep === p.step;
                            return (
                              <button
                                key={p.step}
                                type="button"
                                onClick={() => setSelectedPipelineStep(p.step)}
                                className={`p-2.5 rounded-xl text-left border transition-all duration-200 ${
                                  isSelected
                                    ? 'bg-[#131B2E] border-[#2F6BFF] shadow-sm'
                                    : 'bg-[#070B14] border-[#1E293B] hover:border-[#1E293B]/80'
                                }`}
                              >
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-[10px] font-mono text-[#64748B]">
                                    0{p.step}
                                  </span>
                                  {isSelected && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                                  )}
                                </div>
                                <div className={`text-xs font-semibold truncate ${isSelected ? 'text-[#00D4FF]' : 'text-[#F8FAFC]'}`}>
                                  {p.title}
                                </div>
                              </button>
                            );
                          })}
                        </div>

                        {/* Selected Pipeline Step Deep-Dive Box */}
                        <div className="rounded-xl bg-[#070B14] border border-[#1E293B] p-4">
                          <div className="flex items-center gap-2 text-xs font-mono text-[#00D4FF] mb-1">
                            <span>STAGE {project.pipeline[selectedPipelineStep - 1].step}:</span>
                            <span className="text-[#F8FAFC] font-semibold">
                              {project.pipeline[selectedPipelineStep - 1].title}
                            </span>
                          </div>
                          <p className="text-xs text-[#94A3B8] leading-relaxed">
                            {project.pipeline[selectedPipelineStep - 1].desc}
                          </p>

                          {/* Visual ASCII Flow Indicator */}
                          <div className="mt-3 pt-3 border-t border-[#1E293B] flex items-center justify-between text-[10px] font-mono text-[#64748B]">
                            <span>Docs &rarr; ChromaDB &rarr; Groq</span>
                            <span className="text-emerald-400">Contextual Precision &gt; 96%</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {isLegal && (
                      <div className="rounded-2xl bg-[#0D1321] border border-[#1E293B] p-5 shadow-inner">
                        {/* Legal Metrology Verification Portal Mockup */}
                        <div className="flex items-center justify-between pb-3.5 border-b border-[#1E293B] mb-4">
                          <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                            <span className="text-xs font-mono font-medium text-[#F8FAFC]">
                              Legal Metrology Field Inspector
                            </span>
                          </div>
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            GPS Verified
                          </span>
                        </div>

                        {/* Map GPS & Inspection Coordinate Tile */}
                        <div className="rounded-xl bg-[#070B14] border border-[#1E293B] p-3 mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-medium text-[#F8FAFC] flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5 text-[#00D4FF]" />
                              Commercial Zone Verification #402
                            </span>
                            <span className="text-[10px] font-mono text-[#64748B]">16.5449° N, 81.5212° E</span>
                          </div>
                          <div className="h-16 rounded-lg bg-[#0D1321] border border-[#1E293B] flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-grid-pattern opacity-40" />
                            <div className="relative z-10 flex items-center gap-2 text-xs text-[#94A3B8]">
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                              <span className="font-mono text-emerald-300">Target Establishment Geo-Tagged</span>
                            </div>
                          </div>
                        </div>

                        {/* Rules Engine Checklist Preview */}
                        <div className="space-y-2">
                          <span className="text-[11px] font-mono uppercase text-[#64748B] block">
                            Automated Compliance Rules Engine
                          </span>
                          <div className="rounded-lg bg-[#070B14] border border-[#1E293B]/70 p-2.5 flex items-center justify-between text-xs">
                            <span className="text-[#94A3B8]">Weighing Scale Calibration (Sec 15)</span>
                            <span className="text-emerald-400 font-mono text-[11px] flex items-center gap-1">
                              <CheckCircle className="w-3 h-3" />
                              Passed
                            </span>
                          </div>
                          <div className="rounded-lg bg-[#070B14] border border-[#1E293B]/70 p-2.5 flex items-center justify-between text-xs">
                            <span className="text-[#94A3B8]">Standard Packaging &amp; MRP Display</span>
                            <span className="text-emerald-400 font-mono text-[11px] flex items-center gap-1">
                              <CheckCircle className="w-3 h-3" />
                              Verified
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
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
