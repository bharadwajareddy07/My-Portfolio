import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#0E0611] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#170A1C] border border-[#3D1B3E] text-xs font-mono text-[#FFB39A] mb-3">
            <span>&lt;get in touch /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#FDF8F6]">
            Let's Build Something
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#D6B8CE] max-w-xl">
            Have an application project, RAG use case, or internship opportunity? I'd love to connect.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#FFB39A] to-[#542A52] rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#FDF8F6]">
                Direct Contact Channels
              </h3>
              <p className="text-sm text-[#D6B8CE] leading-relaxed">
                Feel free to email me directly or explore my open-source work on GitHub. I respond promptly to inquiries.
              </p>

              {/* Direct Info Cards */}
              <div className="space-y-3 pt-2">
                {/* Email item */}
                <motion.div
                  whileHover={{ y: -2 }}
                  className="rounded-2xl bg-[#170A1C] border border-[#3D1B3E] p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#1F0E25] border border-[#3D1B3E] flex items-center justify-center text-[#FFB39A]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-[#93748C]">EMAIL</div>
                      <a
                        href={`mailto:${directEmail}`}
                        className="text-xs sm:text-sm font-medium text-[#FDF8F6] hover:text-[#FFB39A] transition-colors"
                      >
                        {directEmail}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-[#0E0611] border border-[#3D1B3E] text-[#D6B8CE] hover:text-[#FDF8F6] transition-colors"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-[#FFB39A]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </motion.div>

                {/* GitHub item */}
                <motion.a
                  whileHover={{ y: -2 }}
                  href="https://github.com/bharadwajareddy07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-[#170A1C] border border-[#3D1B3E] p-4 flex items-center justify-between hover:border-[#FFB39A]/50 transition-colors group block"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#1F0E25] border border-[#3D1B3E] flex items-center justify-center text-[#FDF8F6] group-hover:text-[#FFB39A] transition-colors">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-[#93748C]">GITHUB</div>
                      <div className="text-xs sm:text-sm font-medium text-[#FDF8F6]">
                        github.com/bharadwajareddy07
                      </div>
                    </div>
                  </div>
                </motion.a>

                {/* LinkedIn item */}
                <motion.a
                  whileHover={{ y: -2 }}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-[#170A1C] border border-[#3D1B3E] p-4 flex items-center justify-between hover:border-[#FFB39A]/50 transition-colors group block"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#1F0E25] border border-[#3D1B3E] flex items-center justify-center text-[#FFB39A]">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-[#93748C]">LINKEDIN</div>
                      <div className="text-xs sm:text-sm font-medium text-[#FDF8F6]">
                        Connect on LinkedIn
                      </div>
                    </div>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Quick response badge */}
            <div className="rounded-xl bg-[#170A1C]/80 border border-[#3D1B3E] p-3 flex items-center gap-2.5 text-xs text-[#D6B8CE]">
              <span className="w-2 h-2 rounded-full bg-[#FFB39A]" />
              <span>Open to internship opportunities &bull; Quick response</span>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl bg-[#170A1C] border border-[#3D1B3E] p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FFB39A] mb-6">
                <MessageSquare className="w-4 h-4" />
                <span>DIRECT MESSAGE FORM</span>
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 rounded-xl bg-[#542A52]/40 border border-[#FFB39A]/40 flex items-center gap-3 text-xs text-[#FFD1C4]"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-[#FFB39A]" />
                  <span>Your email client has been prepared with your message. Thank you!</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-[#D6B8CE] mb-1.5 uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-[#0E0611] border border-[#3D1B3E] text-sm text-[#FDF8F6] placeholder-[#93748C] focus:outline-none focus:border-[#FFB39A] focus:ring-1 focus:ring-[#FFB39A] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-[#D6B8CE] mb-1.5 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#0E0611] border border-[#3D1B3E] text-sm text-[#FDF8F6] placeholder-[#93748C] focus:outline-none focus:border-[#FFB39A] focus:ring-1 focus:ring-[#FFB39A] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-[#D6B8CE] mb-1.5 uppercase">
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
                    className="w-full px-4 py-3 rounded-xl bg-[#0E0611] border border-[#3D1B3E] text-sm text-[#FDF8F6] placeholder-[#93748C] focus:outline-none focus:border-[#FFB39A] focus:ring-1 focus:ring-[#FFB39A] transition-all resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#542A52] to-[#7E3D7B] hover:from-[#6A3467] hover:to-[#934890] text-[#FFD1C4] border border-[#FFB39A]/40 text-sm font-semibold transition-all shadow-lg shadow-[#542A52]/30 hover:shadow-[#542A52]/50 group"
                >
                  <Send className="w-4 h-4 text-[#FFB39A] group-hover:translate-x-0.5 transition-transform" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
