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
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#0E0611] overflow-hidden">
      {/* Background Accent Plum and Peach Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#542A52]/20 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#FFB39A]/10 blur-[150px] rounded-full pointer-events-none" />

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
            <span>&lt;featured projects /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FDF8F6]">
            Projects Showcase
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#D6B8CE] max-w-2xl">
            Practical web applications and RAG-powered systems built with real-world architectures.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#FFB39A] to-[#542A52] rounded-full mt-4" />
        </motion.div>

        {/* Projects Cards List */}
        <div className="space-y-16">
          {projectsData.map((project, index) => {
            const isRAG = project.id === 'rag-application';
            const isLegal = project.id === 'legal-metrology-app';
            const isAqua = project.id === 'aqua-feed-system';
            const isThink = project.id === 'think-twice';

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
                className="rounded-3xl bg-[#170A1C] border border-[#3D1B3E] overflow-hidden shadow-2xl hover:border-[#FFB39A]/50 transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Left Column: Project Overview */}
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#3D1B3E]">
                    <div>
                      {/* Badge and Tag */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 rounded-md bg-[#542A52]/40 border border-[#FFB39A]/40 text-xs font-mono text-[#FFB39A]">
                          {project.badge}
                        </span>
                        <span className="text-xs font-mono text-[#93748C]">
                          Project 0{index + 1}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#FDF8F6] tracking-tight mb-2 group-hover:text-[#FFB39A] transition-colors">
                        {project.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-sm font-medium text-[#FFD1C4] mb-5 font-mono">
                        {project.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-[#D6B8CE] leading-relaxed mb-6 font-normal">
                        {project.description}
                      </p>

                      {/* Key Features Quick List */}
                      <div className="mb-6">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-[#93748C] mb-3">
                          Key Capabilities
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#D6B8CE]">
                          {project.keyFeatures.slice(0, 4).map((feat) => (
                            <li key={feat} className="flex items-start gap-2">
                              <CheckCircle className="w-3.5 h-3.5 text-[#FFB39A] mt-0.5 shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Footer Tech Stack and Action Buttons */}
                    <div className="pt-6 border-t border-[#3D1B3E]/80">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-[#0E0611] border border-[#3D1B3E] text-xs font-mono text-[#D6B8CE]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#542A52] to-[#7E3D7B] hover:from-[#6A3467] hover:to-[#934890] text-[#FFD1C4] border border-[#FFB39A]/40 text-xs font-medium shadow-md shadow-[#542A52]/30 hover:-translate-y-0.5 transition-all"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>View Case Details</span>
                        </button>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1F0E25] hover:bg-[#2A1432] text-[#FDF8F6] text-xs font-medium border border-[#3D1B3E] hover:border-[#FFB39A]/40 hover:-translate-y-0.5 transition-all"
                        >
                          <Github className="w-4 h-4 text-[#D6B8CE]" />
                          <span>GitHub</span>
                        </a>

                        {project.liveDemoUrl && project.liveDemoUrl !== '#' && (
                          <a
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0E0611] hover:bg-[#1F0E25] text-[#FDF8F6] text-xs font-medium border border-[#3D1B3E] hover:-translate-y-0.5 transition-all"
                          >
                            <ExternalLink className="w-4 h-4 text-[#FFB39A]" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visual Mockup / Interface Preview */}
                  <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 bg-[#120816] flex flex-col justify-center overflow-hidden">
                    {/* Project Specific Interactive Preview */}
                    {isRAG && (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-2xl bg-[#170A1C] border border-[#3D1B3E] p-5 shadow-inner"
                      >
                        <div className="flex items-center justify-between pb-3 border-b border-[#3D1B3E] mb-4">
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-[#FFB39A]" />
                            <span className="text-xs font-mono font-medium text-[#FDF8F6]">
                              RAG Document Processing Pipeline
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-[#FFD1C4] bg-[#542A52]/40 px-2 py-0.5 rounded border border-[#FFB39A]/30">
                            Context Retrieval
                          </span>
                        </div>

                        <div className="space-y-2">
                          <div className="p-2.5 rounded-xl bg-[#0E0611] border border-[#3D1B3E] flex items-center justify-between text-xs">
                            <span className="text-[#D6B8CE]">1. Ingest &amp; Semantic Chunking</span>
                            <span className="text-[#FFB39A] font-mono text-[11px]">LangChain</span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#0E0611] border border-[#3D1B3E] flex items-center justify-between text-xs">
                            <span className="text-[#D6B8CE]">2. Embeddings &amp; Vector Index</span>
                            <span className="text-[#FFD1C4] font-mono text-[11px]">Vector Database</span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#0E0611] border border-[#3D1B3E] flex items-center justify-between text-xs">
                            <span className="text-[#D6B8CE]">3. Similarity Search &amp; Context</span>
                            <span className="text-[#FFB39A] font-mono text-[11px]">Cosine Distance</span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#0E0611] border border-[#3D1B3E] flex items-center justify-between text-xs">
                            <span className="text-[#D6B8CE]">4. Grounded Output Response</span>
                            <span className="text-[#FFE6DF] font-mono text-[11px]">LLM Synthesis</span>
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-[#3D1B3E] text-[11px] font-mono text-[#93748C] flex items-center justify-between">
                          <span>Python &bull; LangChain &bull; Vector DB</span>
                          <span className="text-[#FFB39A]">Click card to inspect</span>
                        </div>
                      </motion.div>
                    )}

                    {isAqua && (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-2xl bg-[#170A1C] border border-[#3D1B3E] p-5 shadow-inner"
                      >
                        <div className="flex items-center justify-between pb-3 border-b border-[#3D1B3E] mb-4">
                          <div className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-[#FFB39A]" />
                            <span className="text-xs font-mono font-medium text-[#FDF8F6]">
                              AquaFeed Management Application
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-[#FFD1C4] bg-[#542A52]/40 px-2 py-0.5 rounded border border-[#FFB39A]/30">
                            Operations UI
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="p-3 rounded-xl bg-[#0E0611] border border-[#3D1B3E]">
                            <span className="text-[10px] text-[#93748C] block font-mono">Agent Field Logs</span>
                            <span className="text-sm font-bold text-[#FDF8F6]">Visit Forms</span>
                          </div>
                          <div className="p-3 rounded-xl bg-[#0E0611] border border-[#3D1B3E]">
                            <span className="text-[10px] text-[#93748C] block font-mono">Pond Records</span>
                            <span className="text-sm font-bold text-[#FFB39A]">Feeding Schedule</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-[#0E0611] border border-[#3D1B3E] text-xs">
                          <div className="text-[11px] font-mono text-[#93748C] mb-1">Architecture Flow</div>
                          <div className="text-[#D6B8CE] text-[11px]">
                            React Web Interface &rarr; Python Backend APIs &rarr; SQL Relational Store
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {isLegal && (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-2xl bg-[#170A1C] border border-[#3D1B3E] p-5 shadow-inner"
                      >
                        <div className="flex items-center justify-between pb-3 border-b border-[#3D1B3E] mb-4">
                          <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-[#FFB39A]" />
                            <span className="text-xs font-mono font-medium text-[#FDF8F6]">
                              Legal Metrology Inspection App
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-[#FFD1C4] bg-[#542A52]/40 px-2 py-0.5 rounded border border-[#FFB39A]/30">
                            Verification Portal
                          </span>
                        </div>

                        <div className="p-3 rounded-xl bg-[#0E0611] border border-[#3D1B3E] mb-3 text-xs">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="font-semibold text-[#FDF8F6]">Inspection Form Verification</span>
                            <span className="text-[#FFB39A] font-mono text-[10px]">Active</span>
                          </div>
                          <p className="text-[11px] text-[#D6B8CE]">
                            Digital logging for field officers with compliance checklist verification.
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-[#0E0611] border border-[#3D1B3E] text-xs flex items-center justify-between">
                          <span className="text-[#D6B8CE]">Location Coordinates</span>
                          <span className="text-[#FFB39A] font-mono text-[11px] flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            GPS Logged
                          </span>
                        </div>
                      </motion.div>
                    )}

                    {isThink && (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-2xl bg-[#170A1C] border border-[#3D1B3E] p-5 shadow-inner"
                      >
                        <div className="flex items-center justify-between pb-3 border-b border-[#3D1B3E] mb-4">
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-[#FFB39A]" />
                            <span className="text-xs font-mono font-medium text-[#FDF8F6]">
                              Decision Analysis Engine
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-[#FFD1C4] bg-[#542A52]/40 px-2 py-0.5 rounded border border-[#FFB39A]/30">
                            Reflection Portal
                          </span>
                        </div>

                        <div className="space-y-2 mb-3">
                          <div className="p-2.5 rounded-xl bg-[#0E0611] border border-[#3D1B3E] flex items-center justify-between text-xs">
                            <span className="text-[#D6B8CE]">1. Scenario Simulation</span>
                            <span className="text-[#FFB39A] font-mono text-[11px]">Risk Checked</span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#0E0611] border border-[#3D1B3E] flex items-center justify-between text-xs">
                            <span className="text-[#D6B8CE]">2. Trade-Off Comparison</span>
                            <span className="text-[#FFD1C4] font-mono text-[11px]">Multi-Criteria</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-[#0E0611] border border-[#3D1B3E] text-xs">
                          <div className="text-[11px] font-mono text-[#93748C] mb-1">Architecture Flow</div>
                          <div className="text-[#D6B8CE] text-[11px]">
                            React Client &rarr; Evaluation Engine &rarr; Decision History Store
                          </div>
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
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-3xl rounded-3xl bg-[#170A1C] border border-[#3D1B3E] p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-[#0E0611] border border-[#3D1B3E] text-[#D6B8CE] hover:text-[#FDF8F6] hover:border-[#FFB39A]/40 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="pr-12 mb-6">
                <span className="px-3 py-1 rounded-md bg-[#542A52]/40 border border-[#FFB39A]/40 text-xs font-mono text-[#FFB39A] mb-2 inline-block">
                  {selectedProject.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#FDF8F6]">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-[#FFD1C4] font-mono mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Modal Body Sections */}
              <div className="space-y-6 text-sm text-[#D6B8CE]">
                {/* 1. Problem & Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#0E0611] border border-[#3D1B3E]">
                    <h4 className="text-xs font-mono uppercase text-[#FFD1C4] mb-2 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#FFB39A]" />
                      The Problem
                    </h4>
                    <p className="text-xs leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#0E0611] border border-[#3D1B3E]">
                    <h4 className="text-xs font-mono uppercase text-[#FFB39A] mb-2 flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-[#FFB39A]" />
                      The Solution
                    </h4>
                    <p className="text-xs leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* 2. Architecture */}
                <div className="p-4 rounded-2xl bg-[#0E0611] border border-[#3D1B3E]">
                  <h4 className="text-xs font-mono uppercase text-[#FDF8F6] mb-2">
                    Application Architecture
                  </h4>
                  <p className="text-xs font-mono text-[#FFB39A]">
                    {selectedProject.architecture}
                  </p>
                </div>

                {/* 3. Key Features */}
                <div>
                  <h4 className="text-xs font-mono uppercase text-[#93748C] mb-3">
                    Implemented Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.keyFeatures.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs">
                        <CheckCircle className="w-3.5 h-3.5 text-[#FFB39A] mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Technologies */}
                <div>
                  <h4 className="text-xs font-mono uppercase text-[#93748C] mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg bg-[#0E0611] border border-[#3D1B3E] text-xs font-mono text-[#FFD1C4]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer CTAs */}
              <div className="mt-8 pt-6 border-t border-[#3D1B3E] flex items-center justify-between">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#542A52] to-[#7E3D7B] hover:from-[#6A3467] hover:to-[#934890] text-[#FFD1C4] border border-[#FFB39A]/40 text-xs font-medium transition-all shadow-md shadow-[#542A52]/25"
                >
                  <Github className="w-4 h-4" />
                  <span>View Code on GitHub</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2.5 rounded-xl bg-[#0E0611] hover:bg-[#1F0E25] text-[#D6B8CE] hover:text-[#FDF8F6] text-xs border border-[#3D1B3E] transition-colors"
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
