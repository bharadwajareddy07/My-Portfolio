import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Printer,
  FileDown,
  Phone,
  Mail,
  Github,
  Linkedin,
  GraduationCap,
  Briefcase,
  Layers,
  Code2,
  Globe,
  CheckCircle2,
  Copy,
  Check,
  Target,
  UserCheck
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const phone = '9121006439';
  const email = 'v.s.bharadwajareddy@gmail.com';
  const githubUrl = 'https://github.com/bharadwajareddy07';
  const linkedinUrl = 'https://www.linkedin.com/in/sai-bharadwajareddy-vanukuri-34180038b/';

  const handleCopy = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const expertiseList = [
    'Python',
    'JavaScript',
    'C',
    'SQL',
    'HTML5 & CSS',
    'React',
    'APIs',
    'RAG Architecture',
    'LangChain',
    'Vector Databases'
  ];

  const languages = ['English', 'Telugu'];

  const coreSkills = [
    { category: 'Programming', skills: 'Python, JavaScript, C, SQL' },
    { category: 'Web', skills: 'HTML5, CSS, React, APIs' },
    { category: 'RAG', skills: 'RAG Architecture, LangChain, Vector Databases' }
  ];

  const projects = [
    {
      title: 'RAG Application',
      description:
        'Retrieval-Augmented Generation application focused on document processing, retrieval and context-aware responses using RAG architecture, LangChain and a vector database.',
      tags: ['Python', 'LangChain', 'RAG', 'Vector Database', 'APIs']
    },
    {
      title: 'Legal Metrology Application',
      description:
        'Software application project developed around digital inspection and workflow requirements for a Legal Metrology use case.',
      tags: ['Web Application', 'APIs', 'SQL']
    },
    {
      title: 'Aqua Feed Performance Management System [on going]',
      description:
        'Application for aquaculture farm operations and performance management, designed around field data, farm records, monitoring and reporting workflows.',
      tags: ['React', 'JavaScript', 'APIs', 'SQL']
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-4xl max-h-[92vh] rounded-3xl bg-[#0D1321] border border-[#1E293B] shadow-2xl flex flex-col z-10 overflow-hidden"
          >
            {/* Modal Top Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#1E293B] bg-[#070B14]/80 backdrop-blur-md shrink-0">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00D4FF] animate-pulse" />
                <h3 className="text-sm sm:text-base font-bold text-[#F8FAFC]">
                  Resume &bull; Vanukuri Sai bharadwaja Reddy
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#2F6BFF] hover:bg-[#2557D6] text-white text-xs font-semibold transition-all shadow-sm"
                  title="Print or Save as PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / PDF</span>
                </button>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#131B2E] border border-[#1E293B] hover:border-[#2F6BFF]/40 text-[#F8FAFC] text-xs font-medium transition-colors"
                  title="Open file in new tab"
                >
                  <FileDown className="w-3.5 h-3.5 text-[#00D4FF]" />
                  <span className="hidden xs:inline">Download</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="p-1.5 rounded-lg bg-[#131B2E] border border-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#2F6BFF]/40 transition-colors ml-1"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body - Scrollable Resume */}
            <div className="overflow-y-auto p-4 sm:p-8 space-y-6">
              <div className="rounded-2xl bg-[#090E1A] border border-[#1E293B] shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#1E293B]">
                  
                  {/* Left Column */}
                  <div className="lg:col-span-4 p-5 sm:p-6 bg-[#070B14]/90 flex flex-col space-y-6">
                    {/* Photo & Identity */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-[#2F6BFF] to-[#00D4FF] shadow-lg mb-3">
                        <img
                          src="/profile.jpg"
                          alt="Vanukuri Sai bharadwaja Reddy"
                          className="w-full h-full object-cover rounded-full bg-[#070B14]"
                        />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#131B2E] border border-[#2F6BFF]/40 text-[10px] font-mono text-[#00D4FF]">
                        CSE Undergraduate
                      </span>
                    </div>

                    {/* CONTACT */}
                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#00D4FF] font-bold mb-3 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5" />
                        <span>Contact</span>
                      </h4>
                      <div className="space-y-2 text-xs">
                        {/* Phone */}
                        <div className="flex items-center justify-between p-2 rounded-lg bg-[#0D1321] border border-[#1E293B]/80">
                          <div className="min-w-0">
                            <span className="text-[9px] text-[#64748B] font-mono uppercase block">Phone</span>
                            <a href={`tel:${phone}`} className="text-[#F8FAFC] hover:text-[#00D4FF] truncate font-medium block">
                              {phone}
                            </a>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleCopy(phone, 'phone')}
                            className="p-1 text-[#64748B] hover:text-[#F8FAFC]"
                          >
                            {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>

                        {/* Email */}
                        <div className="flex items-center justify-between p-2 rounded-lg bg-[#0D1321] border border-[#1E293B]/80">
                          <div className="min-w-0">
                            <span className="text-[9px] text-[#64748B] font-mono uppercase block">Email</span>
                            <a href={`mailto:${email}`} className="text-[#F8FAFC] hover:text-[#00D4FF] truncate font-medium text-[11px] block">
                              {email}
                            </a>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleCopy(email, 'email')}
                            className="p-1 text-[#64748B] hover:text-[#F8FAFC]"
                          >
                            {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>

                        {/* GitHub */}
                        <div className="p-2 rounded-lg bg-[#0D1321] border border-[#1E293B]/80">
                          <span className="text-[9px] text-[#64748B] font-mono uppercase block">GitHub</span>
                          <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#F8FAFC] hover:text-[#00D4FF] truncate text-[11px] block font-medium"
                          >
                            github.com/bharadwajareddy07
                          </a>
                        </div>

                        {/* LinkedIn */}
                        <div className="p-2 rounded-lg bg-[#0D1321] border border-[#1E293B]/80">
                          <span className="text-[9px] text-[#64748B] font-mono uppercase block">LinkedIn</span>
                          <a
                            href={linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#F8FAFC] hover:text-[#00D4FF] truncate text-[11px] block font-medium"
                          >
                            linkedin.com/in/sai-bharadwajareddy
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* EXPERTISE */}
                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#00D4FF] font-bold mb-2.5 flex items-center gap-1.5">
                        <Code2 className="w-3.5 h-3.5" />
                        <span>Expertise</span>
                      </h4>
                      <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                        {expertiseList.map((item) => (
                          <div
                            key={item}
                            className="p-1.5 rounded bg-[#0D1321] border border-[#1E293B]/60 text-[#F8FAFC] truncate"
                          >
                            &bull; {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* LANGUAGES */}
                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#00D4FF] font-bold mb-2 flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5" />
                        <span>Languages</span>
                      </h4>
                      <div className="flex flex-wrap gap-1.5 text-xs">
                        {languages.map((lang) => (
                          <span
                            key={lang}
                            className="px-2.5 py-0.5 rounded bg-[#0D1321] border border-[#1E293B] text-[#F8FAFC] text-[11px] flex items-center gap-1"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* PROFILE SUMMARY */}
                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#00D4FF] font-bold mb-1.5 flex items-center gap-1.5">
                        <UserCheck className="w-3.5 h-3.5" />
                        <span>Profile</span>
                      </h4>
                      <p className="text-[11px] text-[#94A3B8] leading-relaxed bg-[#0D1321] p-2.5 rounded-lg border border-[#1E293B]/60">
                        Computer Science student focused on application development and RAG-powered applications.
                      </p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="lg:col-span-8 p-5 sm:p-7 flex flex-col space-y-6 bg-[#0D1321]/70">
                    {/* Header */}
                    <div className="border-b border-[#1E293B] pb-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">
                        Vanukuri Sai bharadwaja Reddy
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-[#00D4FF] mt-0.5 font-semibold">
                        Application Developer <span className="text-[#64748B]">|</span> RAG Application Developer
                      </p>
                    </div>

                    {/* PROFILE */}
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-bold mb-1.5">
                        Profile
                      </div>
                      <p className="text-xs text-[#94A3B8] leading-relaxed">
                        Computer Science Engineering student interested in building modern applications and RAG-powered solutions. Currently developing skills in React, JavaScript, Python, APIs, LangChain, vector databases and SQL.
                      </p>
                    </div>

                    {/* PROJECTS */}
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-bold mb-3">
                        <Briefcase className="w-3.5 h-3.5 text-[#2F6BFF]" />
                        <span>Projects</span>
                      </div>

                      <div className="space-y-3">
                        {projects.map((proj, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-xl bg-[#070B14] border border-[#1E293B]"
                          >
                            <h5 className="text-xs sm:text-sm font-bold text-[#F8FAFC] mb-1">
                              {proj.title}
                            </h5>
                            <p className="text-[11px] text-[#94A3B8] leading-relaxed mb-2">
                              {proj.description}
                            </p>
                            <div className="flex flex-wrap items-center gap-1">
                              {proj.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-0.5 rounded bg-[#131B2E] border border-[#2F6BFF]/30 text-[10px] font-mono text-[#00D4FF]"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* EDUCATION */}
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-bold mb-2">
                        <GraduationCap className="w-3.5 h-3.5 text-[#2F6BFF]" />
                        <span>Education</span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#070B14] border border-[#1E293B]">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-0.5">
                          <h5 className="text-xs sm:text-sm font-bold text-[#F8FAFC]">
                            B.Tech — Computer Science and Engineering
                          </h5>
                          <span className="text-[10px] font-mono text-[#00D4FF] bg-[#131B2E] px-2 py-0.5 rounded border border-[#2F6BFF]/30 w-fit">
                            2025 – 2029
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-[#94A3B8] mb-1.5">
                          SRKR Engineering College
                        </p>
                        <div className="text-[11px] font-mono text-[#94A3B8] pt-1.5 border-t border-[#1E293B]/70">
                          <span className="text-[#00D4FF]">Relevant Focus:</span> Programming &bull; Web Development &bull; APIs &bull; RAG Architecture &bull; Databases
                        </div>
                      </div>
                    </div>

                    {/* CORE SKILLS */}
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-bold mb-2">
                        <Layers className="w-3.5 h-3.5 text-[#2F6BFF]" />
                        <span>Core Skills</span>
                      </div>

                      <div className="space-y-1.5 text-xs">
                        {coreSkills.map((cs) => (
                          <div
                            key={cs.category}
                            className="p-2.5 rounded-lg bg-[#070B14] border border-[#1E293B] flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                          >
                            <span className="font-mono font-bold text-[#00D4FF] text-[11px]">
                              {cs.category}:
                            </span>
                            <span className="font-mono text-[#94A3B8] text-[11px]">
                              {cs.skills}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CAREER OBJECTIVE */}
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-bold mb-1.5">
                        <Target className="w-3.5 h-3.5 text-[#2F6BFF]" />
                        <span>Career Objective</span>
                      </div>
                      <p className="text-xs text-[#94A3B8] leading-relaxed bg-[#070B14] p-3 rounded-xl border border-[#1E293B]">
                        To contribute to application development projects while strengthening my skills in software development, APIs, web applications and RAG-based systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
