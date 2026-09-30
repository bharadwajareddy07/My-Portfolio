import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  ArrowRight,
  Github,
  ChevronDown,
  Sparkles,
  FileText,
  Database,
  Search,
  MessageSquare,
  Layers,
  X,
  ShieldCheck,
  ExternalLink,
  CheckCircle
} from 'lucide-react';
import { projectsData, type ProjectDetail } from '../data/projects';

// RAG project data
const ragProject: ProjectDetail = projectsData.find((p) => p.id === 'rag-application') || projectsData[0];

// 6-step compact RAG pipeline for the hero card
const pipelineStages = [
  { id: 1, name: 'Documents', icon: FileText, color: '#FFB39A' },
  { id: 2, name: 'Chunking', icon: Layers, color: '#FFD1C4' },
  { id: 3, name: 'Embeddings', icon: Sparkles, color: '#D6B8CE' },
  { id: 4, name: 'Vector DB', icon: Database, color: '#A44E9B' },
  { id: 5, name: 'Retrieval', icon: Search, color: '#FFB39A' },
  { id: 6, name: 'Response', icon: MessageSquare, color: '#FFE6DF' },
];

export const Hero: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [activePipelineStep, setActivePipelineStep] = useState<number>(0);

  // Subtle cyclic pulse along the pipeline
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActivePipelineStep((prev) => (prev + 1) % pipelineStages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0E0611]"
    >
      {/* Background Animated Subtle Gradients & Grid with Plum & Peach Ambient Lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/6 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#542A52]/25 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[250px] bg-[#FFB39A]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[250px] bg-[#542A52]/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center text-center my-auto">
        
        {/* TOP / CENTER: Staggered Introduction Sequence */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-3xl mb-8 sm:mb-10"
        >
          {/* 1. "Hi, I'm" */}
          <motion.span
            variants={itemVariants}
            className="text-xs sm:text-sm font-mono tracking-widest text-[#FFB39A] uppercase font-semibold mb-1"
          >
            Hi, I'm
          </motion.span>

          {/* 2. Name: Bharadwaj */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#FDF8F6] leading-none mb-3"
          >
            <span className="bg-gradient-to-b from-[#FFFFFF] via-[#FFD1C4] to-[#D6B8CE] bg-clip-text text-transparent drop-shadow-sm">
              Bharadwaj
            </span>
          </motion.h1>

          {/* 3. Role: Application Developer | RAG Application Developer */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1F0E25]/90 border border-[#3D1B3E] shadow-inner backdrop-blur-md mb-4 hover:border-[#FFB39A]/40 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#FFB39A] animate-pulse" />
            <span className="text-xs sm:text-sm font-medium font-mono text-[#FDF8F6]">
              Application Developer <span className="text-[#93748C]">|</span>{' '}
              <span className="text-[#FFB39A]">RAG Application Developer</span>
            </span>
          </motion.div>

          {/* 4. Short Concise Introduction */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#D6B8CE] leading-relaxed max-w-2xl"
          >
            I build modern applications and explore Retrieval-Augmented Generation to create applications that can work with real-world information.
          </motion.p>
        </motion.div>

        {/* BOTTOM PORTION: MAIN FEATURED PROJECT CARD (RAG APPLICATION) */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
          className="w-full max-w-4xl"
        >
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative rounded-3xl bg-[#170A1C]/90 border border-[#3D1B3E] hover:border-[#FFB39A]/60 p-5 sm:p-7 shadow-2xl backdrop-blur-xl text-left group transition-all duration-300"
          >
            {/* Ambient Card Backlight Glow in Velvet Plum & Peach */}
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#542A52]/40 via-[#FFB39A]/20 to-[#542A52]/40 blur-xl opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div className="relative z-10">
              {/* Card Top Meta: Badge & Technologies */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3.5 border-b border-[#3D1B3E]/80">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-md bg-[#542A52]/40 border border-[#FFB39A]/40 text-[11px] font-mono font-semibold text-[#FFB39A] uppercase tracking-wider">
                    Main Featured Project
                  </span>
                  <span className="text-xs font-mono text-[#93748C]">
                    Project 01
                  </span>
                </div>

                {/* Exact Verified Technologies */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-[#D6B8CE]">
                  {ragProject.technologies.map((tech, idx) => (
                    <span key={tech} className="flex items-center">
                      <span className="text-[#FDF8F6] font-medium">{tech}</span>
                      {idx < ragProject.technologies.length - 1 && (
                        <span className="text-[#93748C] mx-1.5">&bull;</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body: Title, Subtitle, Description & Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Info Column */}
                <div className="lg:col-span-6 space-y-2.5">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FDF8F6] tracking-tight group-hover:text-[#FFB39A] transition-colors">
                    {ragProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-[#FFD1C4]">
                    {ragProject.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#D6B8CE] leading-relaxed">
                    A RAG-powered application that processes documents, retrieves relevant information using a vector database, and generates context-aware responses.
                  </p>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(ragProject)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#542A52] to-[#7E3D7B] hover:from-[#6A3467] hover:to-[#934890] text-[#FFD1C4] border border-[#FFB39A]/40 font-medium text-xs transition-all duration-200 shadow-md shadow-[#542A52]/30 hover:shadow-[#542A52]/50 group/btn"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#FFB39A]" />
                      <span>View Project</span>
                    </button>

                    <a
                      href={ragProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#1F0E25] hover:bg-[#2A1432] text-[#FDF8F6] font-medium text-xs border border-[#3D1B3E] hover:border-[#FFB39A]/50 transition-all duration-200 group/git"
                    >
                      <Github className="w-3.5 h-3.5 text-[#D6B8CE] group-hover/git:text-[#FDF8F6]" />
                      <span>GitHub Repository</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FFB39A] group-hover/git:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Visual Representation Column: Animated RAG Pipeline */}
                <div className="lg:col-span-6 rounded-2xl bg-[#0E0611]/90 border border-[#3D1B3E] p-4 sm:p-5">
                  <div className="flex items-center justify-between mb-3 text-[11px] font-mono text-[#93748C]">
                    <span className="flex items-center gap-1.5 text-[#FFB39A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFB39A] animate-ping" />
                      RAG Architecture Pipeline
                    </span>
                    <span>6-Stage Flow</span>
                  </div>

                  {/* 6 Stage Compact Visual Grid */}
                  <div className="grid grid-cols-3 gap-2">
                    {pipelineStages.map((stage, idx) => {
                      const Icon = stage.icon;
                      const isHighlighted = activePipelineStep === idx;
                      return (
                        <div
                          key={stage.id}
                          className={`p-2.5 rounded-xl border transition-all duration-300 flex flex-col items-center text-center ${
                            isHighlighted
                              ? 'bg-[#2A1432] border-[#FFB39A] shadow-sm shadow-[#542A52]/40'
                              : 'bg-[#170A1C] border-[#3D1B3E]/70'
                          }`}
                        >
                          <Icon
                            className="w-4 h-4 mb-1 transition-colors"
                            style={{ color: isHighlighted ? '#FFB39A' : '#D6B8CE' }}
                          />
                          <span
                            className={`text-[11px] font-mono font-medium leading-tight ${
                              isHighlighted ? 'text-[#FDF8F6]' : 'text-[#93748C]'
                            }`}
                          >
                            {stage.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-[#3D1B3E]/60 flex items-center justify-between text-[10px] font-mono text-[#93748C]">
                    <span>Documents &rarr; Embeddings</span>
                    <span className="text-[#FFB39A]">&rarr; Vector Search &rarr; Grounded Output</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-6 flex justify-center w-full z-10"
      >
        <a
          href="#about"
          onClick={(e) => scrollToSection(e, 'about')}
          className="flex flex-col items-center gap-1 text-[#93748C] hover:text-[#FFB39A] transition-colors text-xs font-mono group"
        >
          <span className="tracking-widest uppercase text-[10px]">Scroll Down</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#FFB39A]/70 group-hover:text-[#FFB39A]" />
        </a>
      </motion.div>

      {/* Case Study Modal Triggered from Hero */}
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
              className="relative w-full max-w-3xl rounded-3xl bg-[#170A1C] border border-[#3D1B3E] p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto text-left"
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
                <span className="px-3 py-1 rounded-md bg-[#542A52]/50 border border-[#FFB39A]/40 text-xs font-mono text-[#FFB39A] mb-2 inline-block">
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProject.keyFeatures.map((feat) => (
                      <div
                        key={feat}
                        className="flex items-start gap-2 p-2.5 rounded-xl bg-[#0E0611] border border-[#3D1B3E] text-xs text-[#FDF8F6]"
                      >
                        <CheckCircle className="w-4 h-4 text-[#FFB39A] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Technologies Used */}
                <div>
                  <h4 className="text-xs font-mono uppercase text-[#93748C] mb-2.5">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-[#0E0611] border border-[#3D1B3E] text-xs font-mono text-[#FFB39A]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 5. Footer Actions */}
                <div className="pt-4 border-t border-[#3D1B3E] flex items-center justify-end gap-3">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#542A52] to-[#7E3D7B] hover:from-[#6A3467] hover:to-[#934890] text-[#FFD1C4] border border-[#FFB39A]/40 font-medium text-xs transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Repository</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
