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
    <section id="github" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#070B14]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1321] border border-[#1E293B] text-xs font-mono text-[#00D4FF] mb-3">
            <span>&lt;open source /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
            More of my work
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#94A3B8] max-w-xl">
            Explore my projects, experiments and learning journey on GitHub.
          </p>
          <div className="w-12 h-1 bg-[#2F6BFF] rounded-full mt-4" />
        </motion.div>

        {/* GitHub Action Hub Card with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-3xl bg-[#0D1321] border border-[#1E293B] p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-10"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#1E293B]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#131B2E] border border-[#1E293B] flex items-center justify-center text-[#F8FAFC]">
                <Github className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#F8FAFC]">
                  bharadwajareddy07
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8]">
                  Open source software, applications, and RAG experiments
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/bharadwajareddy07"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2F6BFF] hover:bg-[#2557D6] text-white text-xs sm:text-sm font-medium transition-all shadow-md shadow-[#2F6BFF]/20 hover:-translate-y-0.5"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Profile</span>
              </a>

              <a
                href="https://github.com/bharadwajareddy07?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#070B14] hover:bg-[#131B2E] text-[#F8FAFC] text-xs sm:text-sm font-medium border border-[#1E293B] hover:-translate-y-0.5 transition-all"
              >
                <ExternalLink className="w-4 h-4 text-[#00D4FF]" />
                <span>View All Repositories</span>
              </a>
            </div>
          </div>

          {/* GitHub Activity Representation & Clean Grid */}
          <div className="pt-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#64748B]">
                Pinned Repositories &amp; Projects
              </span>
              <span className="text-xs font-mono text-[#00D4FF] flex items-center gap-1">
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
                  whileHover={{ y: -3, borderColor: 'rgba(47, 107, 255, 0.4)' }}
                  className="rounded-xl bg-[#070B14] border border-[#1E293B] p-5 transition-all flex flex-col justify-between group block"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-[#00D4FF]" />
                        <h4 className="text-sm font-bold text-[#F8FAFC] group-hover:text-[#00D4FF] transition-colors truncate">
                          {repo.name}
                        </h4>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#F8FAFC] transition-colors shrink-0" />
                    </div>

                    <p className="text-xs text-[#94A3B8] leading-relaxed mb-4 line-clamp-2">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-[#64748B] pt-3 border-t border-[#1E293B]/60">
                    <span className="flex items-center gap-1.5 text-[#94A3B8]">
                      <span className="w-2 h-2 rounded-full bg-[#2F6BFF]" />
                      {repo.language}
                    </span>
                    <span className="text-[11px] text-[#64748B]">public</span>
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
