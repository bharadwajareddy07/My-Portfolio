import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileDown,
  Printer,
  Phone,
  Mail,
  Github,
  Linkedin,
  GraduationCap,
  Briefcase,
  Layers,
  Code2,
  Sparkles,
  Globe,
  CheckCircle2,
  Copy,
  Check,
  Target,
  UserCheck
} from 'lucide-react';

export const ResumeSection: React.FC = () => {
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
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#070B14] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#2F6BFF]/10 via-[#00D4FF]/10 to-[#2F6BFF]/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1321] border border-[#1E293B] text-xs font-mono text-[#00D4FF] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>&lt;curriculum_vitae /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F8FAFC]">
            Resume &amp; Credentials
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#94A3B8] max-w-2xl">
            Detailed breakdown of technical expertise, verified project implementations, academic background, and career focus.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#2F6BFF] to-[#00D4FF] rounded-full mt-4" />

          {/* Action Toolbar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2F6BFF] hover:bg-[#2557D6] text-white font-medium text-xs sm:text-sm transition-all shadow-lg shadow-[#2F6BFF]/25 hover:shadow-[#2F6BFF]/35 hover:-translate-y-0.5"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0D1321] hover:bg-[#131B2E] text-[#F8FAFC] font-medium text-xs sm:text-sm border border-[#1E293B] hover:border-[#2F6BFF]/50 transition-all hover:-translate-y-0.5"
            >
              <FileDown className="w-4 h-4 text-[#00D4FF]" />
              <span>Download PDF File</span>
            </a>

            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0D1321] hover:bg-[#131B2E] text-[#94A3B8] hover:text-[#F8FAFC] font-medium text-xs sm:text-sm border border-[#1E293B] hover:border-[#00D4FF]/40 transition-all"
            >
              <Mail className="w-4 h-4 text-[#00D4FF]" />
              <span>Email Directly</span>
            </a>
          </div>
        </motion.div>

        {/* Interactive Full Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          id="printable-resume"
          className="rounded-3xl bg-[#0D1321]/95 border border-[#1E293B] shadow-2xl overflow-hidden backdrop-blur-xl relative"
        >
          {/* Top Decorative Border Accent */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#2F6BFF] via-[#00D4FF] to-[#2F6BFF]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#1E293B]">
            {/* LEFT COLUMN: Profile, Contact, Expertise, Languages */}
            <div className="lg:col-span-4 p-6 sm:p-8 bg-[#090E1A]/80 flex flex-col space-y-7">
              {/* Photo & Identity */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-[#2F6BFF] to-[#00D4FF] shadow-xl mb-4">
                  <img
                    src="/profile.jpg"
                    alt="Vanukuri Sai bharadwaja Reddy"
                    className="w-full h-full object-cover rounded-full bg-[#070B14]"
                  />
                </div>
                <div className="px-3 py-1 rounded-full bg-[#131B2E] border border-[#2F6BFF]/40 text-[11px] font-mono text-[#00D4FF] mt-1">
                  Available for Opportunities
                </div>
              </div>

              {/* CONTACT SECTION */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#00D4FF] font-semibold mb-3.5 flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Contact</span>
                </h4>

                <div className="space-y-3 text-xs">
                  {/* Phone */}
                  <div className="flex items-center justify-between p-2 rounded-lg bg-[#0D1321] border border-[#1E293B]/80 group">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <Phone className="w-3.5 h-3.5 text-[#2F6BFF] shrink-0" />
                      <div className="flex flex-col min-w-0">
                        <span className="text-[10px] text-[#64748B] font-mono uppercase">Phone</span>
                        <a href={`tel:${phone}`} className="text-[#F8FAFC] hover:text-[#00D4FF] truncate font-medium">
                          {phone}
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(phone, 'phone')}
                      className="p-1 rounded text-[#64748B] hover:text-[#F8FAFC]"
                      title="Copy Phone"
                      aria-label="Copy Phone Number"
                    >
                      {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Email */}
                  <div className="flex items-center justify-between p-2 rounded-lg bg-[#0D1321] border border-[#1E293B]/80 group">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <Mail className="w-3.5 h-3.5 text-[#00D4FF] shrink-0" />
                      <div className="flex flex-col min-w-0">
                        <span className="text-[10px] text-[#64748B] font-mono uppercase">Email</span>
                        <a href={`mailto:${email}`} className="text-[#F8FAFC] hover:text-[#00D4FF] truncate font-medium">
                          {email}
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(email, 'email')}
                      className="p-1 rounded text-[#64748B] hover:text-[#F8FAFC]"
                      title="Copy Email"
                      aria-label="Copy Email Address"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* GitHub */}
                  <div className="flex items-center justify-between p-2 rounded-lg bg-[#0D1321] border border-[#1E293B]/80 group">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <Github className="w-3.5 h-3.5 text-[#F8FAFC] shrink-0" />
                      <div className="flex flex-col min-w-0">
                        <span className="text-[10px] text-[#64748B] font-mono uppercase">GitHub</span>
                        <a
                          href={githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#F8FAFC] hover:text-[#00D4FF] truncate font-medium"
                        >
                          github.com/bharadwajareddy07
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-center justify-between p-2 rounded-lg bg-[#0D1321] border border-[#1E293B]/80 group">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <Linkedin className="w-3.5 h-3.5 text-[#00D4FF] shrink-0" />
                      <div className="flex flex-col min-w-0">
                        <span className="text-[10px] text-[#64748B] font-mono uppercase">LinkedIn</span>
                        <a
                          href={linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#F8FAFC] hover:text-[#00D4FF] truncate font-medium"
                        >
                          linkedin.com/in/sai-bharadwajareddy
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* EXPERTISE SECTION */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#00D4FF] font-semibold mb-3.5 flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Expertise</span>
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {expertiseList.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-1.5 p-1.5 rounded-md bg-[#0D1321] border border-[#1E293B]/60 text-[#F8FAFC]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* LANGUAGES SECTION */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#00D4FF] font-semibold mb-3 flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Languages</span>
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 rounded-lg bg-[#0D1321] border border-[#1E293B] text-[#F8FAFC] font-medium flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* PROFILE (Sidebar Summary) */}
              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#00D4FF] font-semibold mb-2 flex items-center gap-2">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Profile Overview</span>
                </h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed bg-[#0D1321] p-3 rounded-xl border border-[#1E293B]/70">
                  Computer Science student focused on application development and RAG-powered applications.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: Header, Profile, Projects, Education, Core Skills, Objective */}
            <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col space-y-8 bg-[#0D1321]/60">
              {/* Header: Name and Title */}
              <div className="border-b border-[#1E293B]/90 pb-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
                  Vanukuri Sai bharadwaja Reddy
                </h3>
                <p className="text-sm sm:text-base font-mono text-[#00D4FF] mt-1 font-semibold">
                  Application Developer <span className="text-[#64748B]">|</span> RAG Application Developer
                </p>
              </div>

              {/* PROFILE SECTION */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-bold mb-2">
                  <span className="w-2 h-2 rounded-sm bg-[#2F6BFF]" />
                  <span>Profile</span>
                </div>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  Computer Science Engineering student interested in building modern applications and RAG-powered solutions. Currently developing skills in React, JavaScript, Python, APIs, LangChain, vector databases and SQL.
                </p>
              </div>

              {/* PROJECTS SECTION */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-bold mb-4">
                  <Briefcase className="w-3.5 h-3.5 text-[#2F6BFF]" />
                  <span>Projects</span>
                </div>

                <div className="space-y-4">
                  {projects.map((proj, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#070B14]/80 border border-[#1E293B] hover:border-[#2F6BFF]/40 transition-colors"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <h5 className="text-sm sm:text-base font-bold text-[#F8FAFC]">
                          {proj.title}
                        </h5>
                      </div>
                      <p className="text-xs text-[#94A3B8] leading-relaxed mb-3">
                        {proj.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {proj.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-md bg-[#131B2E] border border-[#2F6BFF]/30 text-[11px] font-mono text-[#00D4FF]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* EDUCATION SECTION */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-bold mb-3">
                  <GraduationCap className="w-4 h-4 text-[#2F6BFF]" />
                  <span>Education</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#070B14]/80 border border-[#1E293B]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h5 className="text-sm sm:text-base font-bold text-[#F8FAFC]">
                      B.Tech — Computer Science and Engineering
                    </h5>
                    <span className="text-xs font-mono text-[#00D4FF] bg-[#131B2E] px-2.5 py-0.5 rounded border border-[#2F6BFF]/30 w-fit">
                      2025 – 2029
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-[#94A3B8] mb-2">
                    SRKR Engineering College
                  </p>
                  <div className="pt-2 border-t border-[#1E293B]/70 text-xs font-mono text-[#94A3B8] flex items-start gap-2">
                    <span className="text-[#00D4FF] font-semibold shrink-0">Relevant Focus:</span>
                    <span>Programming &bull; Web Development &bull; APIs &bull; RAG Architecture &bull; Databases</span>
                  </div>
                </div>
              </div>

              {/* CORE SKILLS SECTION */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-bold mb-3">
                  <Layers className="w-3.5 h-3.5 text-[#2F6BFF]" />
                  <span>Core Skills</span>
                </div>

                <div className="space-y-2">
                  {coreSkills.map((cs) => (
                    <div
                      key={cs.category}
                      className="p-3 rounded-xl bg-[#070B14]/80 border border-[#1E293B] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                    >
                      <span className="font-mono font-bold text-[#F8FAFC] min-w-[120px] text-[#00D4FF]">
                        {cs.category}:
                      </span>
                      <span className="font-mono text-[#94A3B8]">
                        {cs.skills}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CAREER OBJECTIVE SECTION */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-bold mb-2">
                  <Target className="w-3.5 h-3.5 text-[#2F6BFF]" />
                  <span>Career Objective</span>
                </div>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed bg-[#070B14]/80 p-3.5 rounded-xl border border-[#1E293B]">
                  To contribute to application development projects while strengthening my skills in software development, APIs, web applications and RAG-based systems.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
