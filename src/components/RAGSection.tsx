import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Cpu, Database, Search, Sparkles, MessageSquare, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

interface RAGStep {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ElementType;
  badge: string;
  color: string;
}

const ragSteps: RAGStep[] = [
  {
    id: 1,
    title: 'Documents',
    shortDesc: 'Source Document Ingestion',
    fullDesc: 'Raw domain documents (such as PDFs, documentation, reports, or text files) containing knowledge not available in standard models.',
    icon: FileText,
    badge: 'Input',
    color: '#38BDF8'
  },
  {
    id: 2,
    title: 'Document Processing',
    shortDesc: 'Parsing & Extraction',
    fullDesc: 'Extracting clean textual information from various file formats and stripping out formatting noise and artifacts.',
    icon: Layers,
    badge: 'Preprocessing',
    color: '#00D4FF'
  },
  {
    id: 3,
    title: 'Chunking',
    shortDesc: 'Semantic Segmentation',
    fullDesc: 'Dividing long documents into manageable, semantically coherent chunks with overlap to retain context across boundaries.',
    icon: Cpu,
    badge: 'Chunking',
    color: '#2F6BFF'
  },
  {
    id: 4,
    title: 'Embeddings',
    shortDesc: 'Vector Representation',
    fullDesc: 'Passing text chunks through an embedding model to convert semantic concepts into dense high-dimensional vectors.',
    icon: Sparkles,
    badge: 'Vectorization',
    color: '#60A5FA'
  },
  {
    id: 5,
    title: 'Vector Database',
    shortDesc: 'Indexing & Storage',
    fullDesc: 'Storing vectors alongside metadata to allow high-speed similarity and nearest-neighbor search.',
    icon: Database,
    badge: 'Storage',
    color: '#38BDF8'
  },
  {
    id: 6,
    title: 'Retrieval',
    shortDesc: 'Similarity Search',
    fullDesc: 'When a user submits a question, it is vectorized and the top-k most relevant document chunks are retrieved using cosine distance.',
    icon: Search,
    badge: 'Search',
    color: '#00D4FF'
  },
  {
    id: 7,
    title: 'LLM',
    shortDesc: 'Prompt Augmentation',
    fullDesc: 'The user query and the retrieved context chunks are packed into a structured prompt sent to the language model.',
    icon: Cpu,
    badge: 'Generation',
    color: '#2F6BFF'
  },
  {
    id: 8,
    title: 'Response',
    shortDesc: 'Context-Aware Output',
    fullDesc: 'The model produces a factually accurate, hallucination-resistant answer grounded strictly in the retrieved source documents.',
    icon: MessageSquare,
    badge: 'Result',
    color: '#34D399'
  }
];

export const RAGSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const currentStep = ragSteps.find((s) => s.id === activeStep) || ragSteps[0];

  return (
    <section id="rag" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#070B14] overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#2F6BFF]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#00D4FF]/8 blur-[120px] rounded-full pointer-events-none" />

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
            <span>&lt;core interest /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F8FAFC]">
            Exploring RAG Applications
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#94A3B8] max-w-2xl leading-relaxed">
            Understanding the architecture of Retrieval-Augmented Generation to build applications that ground language model responses in verified real-world documents.
          </p>
          <div className="w-12 h-1 bg-[#2F6BFF] rounded-full mt-4" />
        </motion.div>

        {/* Interactive Pipeline Showcase */}
        <div className="rounded-3xl bg-[#0D1321] border border-[#1E293B] p-6 sm:p-10 shadow-2xl overflow-hidden">
          {/* Top Bar Description */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1E293B]/80 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#64748B]">
                Architectural Flow
              </span>
              <h3 className="text-lg font-bold text-[#F8FAFC] mt-0.5">
                The 8-Stage RAG Pipeline
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00D4FF] bg-[#131B2E] px-3 py-1.5 rounded-xl border border-[#2F6BFF]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Workflow Visualizer</span>
            </div>
          </div>

          {/* Stepper Pipeline Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-8">
            {ragSteps.map((step, idx) => {
              const isActive = activeStep === step.id;
              const Icon = step.icon;
              return (
                <motion.button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(step.id)}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -2 }}
                  className={`p-3 rounded-2xl text-left border transition-all relative flex flex-col justify-between min-h-[110px] ${
                    isActive
                      ? 'bg-[#131B2E] border-[#2F6BFF] shadow-lg shadow-[#2F6BFF]/20 ring-1 ring-[#2F6BFF]'
                      : 'bg-[#070B14] border-[#1E293B] hover:border-[#2F6BFF]/40'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className="text-[10px] font-mono text-[#64748B]">
                      0{step.id}
                    </span>
                    <Icon className="w-4 h-4" style={{ color: isActive ? '#00D4FF' : '#94A3B8' }} />
                  </div>

                  <div>
                    <div className={`text-xs font-bold leading-tight ${isActive ? 'text-[#00D4FF]' : 'text-[#F8FAFC]'}`}>
                      {step.title}
                    </div>
                    <div className="text-[10px] text-[#64748B] font-mono mt-0.5 truncate">
                      {step.badge}
                    </div>
                  </div>

                  {/* Active Indicator bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeRAGPill"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#00D4FF] rounded-full"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Active Stage Deep Dive Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl bg-[#070B14] border border-[#1E293B] p-6 sm:p-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-md bg-[#131B2E] border border-[#2F6BFF]/40 text-xs font-mono text-[#00D4FF]">
                      Stage 0{currentStep.id} &bull; {currentStep.badge}
                    </span>
                    <h4 className="text-xl font-bold text-[#F8FAFC]">
                      {currentStep.title} — {currentStep.shortDesc}
                    </h4>
                  </div>
                  <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                    {currentStep.fullDesc}
                  </p>
                </div>

                {/* Next Step CTA */}
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={() => setActiveStep((prev) => (prev % ragSteps.length) + 1)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#131B2E] hover:bg-[#1E293B] text-[#F8FAFC] text-xs font-medium border border-[#1E293B] hover:border-[#2F6BFF]/40 transition-colors"
                  >
                    <span>Next Stage ({activeStep === 8 ? 'Loop to 1' : `0${activeStep + 1}`})</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#00D4FF]" />
                  </button>
                </div>
              </div>

              {/* Architecture Summary Badges */}
              <div className="mt-6 pt-5 border-t border-[#1E293B]/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
                <div className="flex items-center gap-2 text-[#94A3B8]">
                  <CheckCircle2 className="w-4 h-4 text-[#2F6BFF]" />
                  <span>Pipeline Flow: Ingestion &rarr; Vector Index &rarr; Semantic Context &rarr; Generation</span>
                </div>
                <span className="text-emerald-400">Zero Hallucination Grounding</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
