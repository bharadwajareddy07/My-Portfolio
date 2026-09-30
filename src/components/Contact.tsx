import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, Copy, Check, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const directEmail = 'bharadwaj.workspace@gmail.com';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto URI as direct reliable fallback
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${directEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#070B14]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1321] border border-[#1E293B] text-xs font-mono text-[#00D4FF] mb-3">
            <span>&lt;get in touch /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
            Contact Me
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#94A3B8] max-w-xl">
            Have an internship opening, software project, or technical question? Feel free to reach out.
          </p>
          <div className="w-12 h-1 bg-[#2F6BFF] rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#F8FAFC]">
                Let's discuss opportunities
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                I am actively seeking software development &amp; AI internships. I am eager to join high-caliber teams, take on technical challenges, and ship quality features.
              </p>

              {/* Direct Info Cards */}
              <div className="space-y-3 pt-2">
                {/* Email item */}
                <div className="rounded-2xl bg-[#0D1321] border border-[#1E293B] p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#131B2E] border border-[#1E293B] flex items-center justify-center text-[#00D4FF]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-[#64748B]">EMAIL</div>
                      <a
                        href={`mailto:${directEmail}`}
                        className="text-xs sm:text-sm font-medium text-[#F8FAFC] hover:text-[#00D4FF] transition-colors"
                      >
                        {directEmail}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-[#070B14] border border-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* GitHub item */}
                <a
                  href="https://github.com/Bharadwaj-source"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-[#0D1321] border border-[#1E293B] p-4 flex items-center justify-between hover:border-[#2F6BFF]/40 transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#131B2E] border border-[#1E293B] flex items-center justify-center text-[#F8FAFC] group-hover:text-[#00D4FF] transition-colors">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-[#64748B]">GITHUB</div>
                      <div className="text-xs sm:text-sm font-medium text-[#F8FAFC]">
                        github.com/Bharadwaj-source
                      </div>
                    </div>
                  </div>
                </a>

                {/* LinkedIn item */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-[#0D1321] border border-[#1E293B] p-4 flex items-center justify-between hover:border-[#2F6BFF]/40 transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#131B2E] border border-[#1E293B] flex items-center justify-center text-[#00D4FF]">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-[#64748B]">LINKEDIN</div>
                      <div className="text-xs sm:text-sm font-medium text-[#F8FAFC]">
                        Connect on LinkedIn
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick response badge */}
            <div className="rounded-xl bg-[#0D1321]/60 border border-[#1E293B] p-3 flex items-center gap-2.5 text-xs text-[#94A3B8]">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Fast response time &bull; Typically within 24 hours</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0D1321] border border-[#1E293B] p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00D4FF] mb-6">
                <MessageSquare className="w-4 h-4" />
                <span>DIRECT MESSAGE FORM</span>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-xs text-emerald-300">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Your email client has been prepared with your message. Thank you for reaching out!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-[#94A3B8] mb-1.5 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-4 py-3 rounded-xl bg-[#070B14] border border-[#1E293B] text-sm text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#2F6BFF] focus:ring-1 focus:ring-[#2F6BFF] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-[#94A3B8] mb-1.5 uppercase">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#070B14] border border-[#1E293B] text-sm text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#2F6BFF] focus:ring-1 focus:ring-[#2F6BFF] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-[#94A3B8] mb-1.5 uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Bharadwaj, I came across your portfolio and would like to discuss..."
                    className="w-full px-4 py-3 rounded-xl bg-[#070B14] border border-[#1E293B] text-sm text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#2F6BFF] focus:ring-1 focus:ring-[#2F6BFF] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#2F6BFF] hover:bg-[#2557D6] text-white text-sm font-semibold transition-all shadow-lg shadow-[#2F6BFF]/25 hover:shadow-[#2F6BFF]/35 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
