import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  CheckCircle,
  Sparkles,
  Activity,
  MapPin,
  ShieldCheck,
  Layers,
  X,
  Maximize2
} from 'lucide-react';
import { projectsData, type ProjectDetail } from '../data/projects';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#070B14] overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#2F6BFF]/8 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00D4FF]/6 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1321] border border-[#1E293B] text-xs font-mono text-[#00D4FF] mb-3">
            <span>&lt;featured projects /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F8FAFC]">
            Projects Showcase
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#94A3B8] max-w-2xl">
            Practical web applications and RAG-powered systems built with real-world architectures.
          </p>
          <div className="w-12 h-1 bg-[#2F6BFF] rounded-full mt-4" />
        </motion.div>

        {/* Projects Cards List */}
        <div className="space-y-16">
          {projectsData.map((project, index) => {
            const isRAG = project.id === 'rag-application';
            const isAqua = project.id === 'aqua-feed-system';
            const isLegal = project.id === 'legal-metrology-app';

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
                className="rounded-3xl bg-[#0D1321] border border-[#1E293B] overflow-hidden shadow-2xl hover:border-[#2F6BFF]/45 transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Left Column: Project Overview */}
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#1E293B]">
                    <div>
                      {/* Badge and Tag */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 rounded-md bg-[#131B2E] border border-[#2F6BFF]/30 text-xs font-mono text-[#00D4FF]">
                          {project.badge}
                        </span>
                        <span className="text-xs font-mono text-[#64748B]">
                          Project 0{index + 1}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight mb-2 group-hover:text-[#00D4FF] transition-colors">
                        {project.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-sm font-medium text-[#94A3B8] mb-5 font-mono">
                        {project.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-[#F8FAFC]/90 leading-relaxed mb-6 font-normal">
                        {project.description}
                      </p>

                      {/* Key Features Quick List */}
                      <div className="mb-6">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-[#64748B] mb-3">
                          Key Capabilities
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#94A3B8]">
                          {project.keyFeatures.slice(0, 4).map((feat) => (
                            <li key={feat} className="flex items-start gap-2">
                              <CheckCircle className="w-3.5 h-3.5 text-[#2F6BFF] mt-0.5 shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Footer Tech Stack and Action Buttons */}
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

                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2F6BFF] hover:bg-[#2557D6] text-white text-xs font-medium shadow-md shadow-[#2F6BFF]/20 hover:-translate-y-0.5 transition-all"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>View Case Details</span>
                        </button>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#131B2E] hover:bg-[#1E293B] text-[#F8FAFC] text-xs font-medium border border-[#1E293B] hover:border-[#2F6BFF]/40 hover:-translate-y-0.5 transition-all"
                        >
                          <Github className="w-4 h-4" />
                          <span>GitHub</span>
                        </a>

                        {project.liveDemoUrl && project.liveDemoUrl !== '#' && (
                          <a
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#070B14] hover:bg-[#131B2E] text-[#F8FAFC] text-xs font-medium border border-[#1E293B] hover:-translate-y-0.5 transition-all"
                          >
                            <ExternalLink className="w-4 h-4 text-[#00D4FF]" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visual Mockup / Interface Preview */}
                  <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 bg-[#090E1A] flex flex-col justify-center overflow-hidden">
                    {/* Project Specific Interactive Preview */}
                    {isRAG && (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-2xl bg-[#0D1321] border border-[#1E293B] p-5 shadow-inner"
                      >
                        <div className="flex items-center justify-between pb-3 border-b border-[#1E293B] mb-4">
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-[#00D4FF]" />
                            <span className="text-xs font-mono font-medium text-[#F8FAFC]">
                              RAG Document Processing Pipeline
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                            Context Retrieval
                          </span>
                        </div>

                        <div className="space-y-2">
                          <div className="p-2.5 rounded-xl bg-[#070B14] border border-[#1E293B] flex items-center justify-between text-xs">
                            <span className="text-[#94A3B8]">1. Ingest &amp; Semantic Chunking</span>
                            <span className="text-[#00D4FF] font-mono text-[11px]">LangChain</span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#070B14] border border-[#1E293B] flex items-center justify-between text-xs">
                            <span className="text-[#94A3B8]">2. Embeddings &amp; Vector Index</span>
                            <span className="text-[#2F6BFF] font-mono text-[11px]">Vector Database</span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#070B14] border border-[#1E293B] flex items-center justify-between text-xs">
                            <span className="text-[#94A3B8]">3. Similarity Search &amp; Context</span>
                            <span className="text-emerald-400 font-mono text-[11px]">Cosine Distance</span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#070B14] border border-[#1E293B] flex items-center justify-between text-xs">
                            <span className="text-[#94A3B8]">4. Grounded Output Response</span>
                            <span className="text-cyan-300 font-mono text-[11px]">LLM Synthesis</span>
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-[#1E293B] text-[11px] font-mono text-[#64748B] flex items-center justify-between">
                          <span>Python &bull; LangChain &bull; Vector DB</span>
                          <span className="text-[#00D4FF]">Click card to inspect</span>
                        </div>
                      </motion.div>
                    )}

                    {isAqua && (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-2xl bg-[#0D1321] border border-[#1E293B] p-5 shadow-inner"
                      >
                        <div className="flex items-center justify-between pb-3 border-b border-[#1E293B] mb-4">
                          <div className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-[#00D4FF]" />
                            <span className="text-xs font-mono font-medium text-[#F8FAFC]">
                              AquaFeed Management Application
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                            Operations UI
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="p-3 rounded-xl bg-[#070B14] border border-[#1E293B]">
                            <span className="text-[10px] text-[#64748B] block font-mono">Agent Field Logs</span>
                            <span className="text-sm font-bold text-[#F8FAFC]">Visit Forms</span>
                          </div>
                          <div className="p-3 rounded-xl bg-[#070B14] border border-[#1E293B]">
                            <span className="text-[10px] text-[#64748B] block font-mono">Pond Records</span>
                            <span className="text-sm font-bold text-[#00D4FF]">Feeding Schedule</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-[#070B14] border border-[#1E293B] text-xs">
                          <div className="text-[11px] font-mono text-[#64748B] mb-1">Architecture Flow</div>
                          <div className="text-[#94A3B8] text-[11px]">
                            React Web Interface &rarr; Python Backend APIs &rarr; SQL Relational Store
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {isLegal && (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-2xl bg-[#0D1321] border border-[#1E293B] p-5 shadow-inner"
                      >
                        <div className="flex items-center justify-between pb-3 border-b border-[#1E293B] mb-4">
                          <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                            <span className="text-xs font-mono font-medium text-[#F8FAFC]">
                              Legal Metrology Inspection App
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                            Verification Portal
                          </span>
                        </div>

                        <div className="p-3 rounded-xl bg-[#070B14] border border-[#1E293B] mb-3 text-xs">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="font-semibold text-[#F8FAFC]">Inspection Form Verification</span>
                            <span className="text-emerald-400 font-mono text-[10px]">Active</span>
                          </div>
                          <p className="text-[11px] text-[#94A3B8]">
                            Digital logging for field officers with compliance checklist verification.
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-[#070B14] border border-[#1E293B] text-xs flex items-center justify-between">
                          <span className="text-[#94A3B8]">Location Coordinates</span>
                          <span className="text-[#00D4FF] font-mono text-[11px] flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            GPS Logged
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Detailed Interactive Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-3xl rounded-3xl bg-[#0D1321] border border-[#1E293B] p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-[#070B14] border border-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#2F6BFF]/40 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="pr-12 mb-6">
                <span className="px-3 py-1 rounded-md bg-[#131B2E] border border-[#2F6BFF]/40 text-xs font-mono text-[#00D4FF] mb-2 inline-block">
                  {selectedProject.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-[#00D4FF] font-mono mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Modal Body Sections */}
              <div className="space-y-6 text-sm text-[#94A3B8]">
                {/* 1. Problem & Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#070B14] border border-[#1E293B]">
                    <h4 className="text-xs font-mono uppercase text-[#38BDF8] mb-2 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      The Problem
                    </h4>
                    <p className="text-xs leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#070B14] border border-[#1E293B]">
                    <h4 className="text-xs font-mono uppercase text-[#00D4FF] mb-2 flex items-center gap-1.5">
                      <Layers className="w-4 h-4" />
                      The Solution
                    </h4>
                    <p className="text-xs leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* 2. Architecture */}
                <div className="p-4 rounded-2xl bg-[#070B14] border border-[#1E293B]">
                  <h4 className="text-xs font-mono uppercase text-[#F8FAFC] mb-2">
                    Application Architecture
                  </h4>
                  <p className="text-xs font-mono text-[#00D4FF]">
                    {selectedProject.architecture}
                  </p>
                </div>

                {/* 3. Key Features */}
                <div>
                  <h4 className="text-xs font-mono uppercase text-[#64748B] mb-3">
                    Implemented Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.keyFeatures.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs">
                        <CheckCircle className="w-3.5 h-3.5 text-[#2F6BFF] mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Technologies */}
                <div>
                  <h4 className="text-xs font-mono uppercase text-[#64748B] mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg bg-[#070B14] border border-[#1E293B] text-xs font-mono text-[#F8FAFC]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer CTAs */}
              <div className="mt-8 pt-6 border-t border-[#1E293B] flex items-center justify-between">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2F6BFF] hover:bg-[#2557D6] text-white text-xs font-medium transition-all shadow-md shadow-[#2F6BFF]/25"
                >
                  <Github className="w-4 h-4" />
                  <span>View Code on GitHub</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2.5 rounded-xl bg-[#070B14] hover:bg-[#131B2E] text-[#94A3B8] hover:text-[#F8FAFC] text-xs border border-[#1E293B] transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
