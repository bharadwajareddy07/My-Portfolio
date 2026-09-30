import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Terminal } from 'lucide-react';

interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
}

const fallbackRepos: GitHubRepo[] = [
  {
    name: 'RAG',
    description: 'Retrieval-Augmented Generation application exploring document chunking, vector embeddings, and context retrieval.',
    language: 'Python',
    stars: 0,
    forks: 0,
    url: 'https://github.com/bharadwajareddy07/RAG',
  },
  {
    name: 'My-Portfolio',
    description: 'Personal developer portfolio website built with React, showcasing applications, RAG exploration, and technical skills.',
    language: 'JavaScript',
    stars: 0,
    forks: 0,
    url: 'https://github.com/bharadwajareddy07/My-Portfolio',
  },
  {
    name: 'Aqua-Feed-Management',
    description: 'Web application for aquaculture farm data tracking, agent field visits, and feeding records.',
    language: 'JavaScript',
    stars: 0,
    forks: 0,
    url: 'https://github.com/bharadwajareddy07',
  }
];

export const GitHubSection: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>(fallbackRepos);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const res = await fetch('https://api.github.com/users/bharadwajareddy07/repos?sort=updated&per_page=6');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const mapped: GitHubRepo[] = data.map((item: any) => ({
              name: item.name,
              description: item.description || 'Public repository focused on practical application development and RAG.',
              language: item.language || 'Code',
              stars: item.stargazers_count || 0,
              forks: item.forks_count || 0,
              url: item.html_url || 'https://github.com/bharadwajareddy07',
            }));
            setRepos(mapped.slice(0, 3));
          }
        }
      } catch {
        // Silently retain fallback
      }
    };

    fetchGithubData();
  }, []);

  return (
    <section id="github" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#0E0611]">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#542A52]/20 blur-[150px] rounded-full pointer-events-none" />

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
            <span>&lt;open source /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#FDF8F6]">
            More of my work
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#D6B8CE] max-w-xl">
            Explore my projects, experiments and learning journey on GitHub.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#FFB39A] to-[#542A52] rounded-full mt-4" />
        </motion.div>

        {/* GitHub Action Hub Card with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-3xl bg-[#170A1C] border border-[#3D1B3E] p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-10"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#3D1B3E]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#1F0E25] border border-[#3D1B3E] flex items-center justify-center text-[#FFB39A]">
                <Github className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#FDF8F6]">
                  bharadwajareddy07
                </h3>
                <p className="text-xs sm:text-sm text-[#D6B8CE]">
                  Open source software, applications, and RAG experiments
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/bharadwajareddy07"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#542A52] to-[#7E3D7B] hover:from-[#6A3467] hover:to-[#934890] text-[#FFD1C4] border border-[#FFB39A]/40 text-xs sm:text-sm font-medium transition-all shadow-md shadow-[#542A52]/25 hover:-translate-y-0.5"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Profile</span>
              </a>

              <a
                href="https://github.com/bharadwajareddy07?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0E0611] hover:bg-[#1F0E25] text-[#FDF8F6] text-xs sm:text-sm font-medium border border-[#3D1B3E] hover:border-[#FFB39A]/40 hover:-translate-y-0.5 transition-all"
              >
                <ExternalLink className="w-4 h-4 text-[#FFB39A]" />
                <span>View All Repositories</span>
              </a>
            </div>
          </div>

          {/* GitHub Activity Representation & Clean Grid */}
          <div className="pt-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#93748C]">
                Pinned Repositories &amp; Projects
              </span>
              <span className="text-xs font-mono text-[#FFB39A] flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5" />
                git commit &amp; push
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {repos.map((repo, idx) => (
                <motion.a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * idx }}
                  whileHover={{ y: -3, borderColor: 'rgba(255, 179, 154, 0.45)' }}
                  className="rounded-xl bg-[#0E0611] border border-[#3D1B3E] p-5 transition-all flex flex-col justify-between group block"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-[#FFB39A]" />
                        <h4 className="text-sm font-bold text-[#FDF8F6] group-hover:text-[#FFB39A] transition-colors truncate">
                          {repo.name}
                        </h4>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-[#93748C] group-hover:text-[#FDF8F6] transition-colors shrink-0" />
                    </div>

                    <p className="text-xs text-[#D6B8CE] leading-relaxed mb-4 line-clamp-2">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-[#93748C] pt-3 border-t border-[#3D1B3E]/60">
                    <span className="flex items-center gap-1.5 text-[#D6B8CE]">
                      <span className="w-2 h-2 rounded-full bg-[#FFB39A]" />
                      {repo.language}
                    </span>
                    <span className="text-[11px] text-[#93748C]">public</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
