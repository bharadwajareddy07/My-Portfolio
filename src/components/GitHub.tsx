import React, { useState, useEffect } from 'react';
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
    name: 'aqua-feed-management',
    description: 'Aquaculture farm, agent visit, feeding analytics, and FCR tracking system.',
    language: 'TypeScript',
    stars: 0,
    forks: 0,
    url: 'https://github.com/Bharadwaj-source',
  },
  {
    name: 'rag-document-intelligence',
    description: 'RAG architecture with LangChain, ChromaDB embeddings, and Groq LLM inference.',
    language: 'Python',
    stars: 0,
    forks: 0,
    url: 'https://github.com/Bharadwaj-source',
  },
  {
    name: 'legal-metrology-inspection',
    description: 'Digital inspection workflow & GPS compliance logging application.',
    language: 'TypeScript',
    stars: 0,
    forks: 0,
    url: 'https://github.com/Bharadwaj-source',
  }
];

export const GitHubSection: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>(fallbackRepos);

  useEffect(() => {
    // Optional public GitHub API fetch with graceful fallback
    const fetchGithubData = async () => {
      try {
        const res = await fetch('https://api.github.com/users/Bharadwaj-source/repos?sort=updated&per_page=6');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const mapped: GitHubRepo[] = data.map((item: any) => ({
              name: item.name,
              description: item.description || 'Public repository focused on practical software and AI engineering.',
              language: item.language || 'Code',
              stars: item.stargazers_count || 0,
              forks: item.forks_count || 0,
              url: item.html_url || 'https://github.com/Bharadwaj-source',
            }));
            setRepos(mapped.slice(0, 3));
          }
        }
      } catch {
        // Silently retain fallbackRepos on network or rate limit failure
      }
    };

    fetchGithubData();
  }, []);

  return (
    <section id="github" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1321] border border-[#1E293B] text-xs font-mono text-[#00D4FF] mb-3">
            <span>&lt;open source /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
            Building in Public
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#94A3B8] max-w-xl">
            Exploring new technologies, contributing to open repositories, and writing clean, reproducible code.
          </p>
          <div className="w-12 h-1 bg-[#2F6BFF] rounded-full mt-4" />
        </div>

        {/* GitHub Action Hub Card */}
        <div className="rounded-3xl bg-[#0D1321] border border-[#1E293B] p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#1E293B]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#131B2E] border border-[#1E293B] flex items-center justify-center text-[#F8FAFC]">
                <Github className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#F8FAFC]">
                  Bharadwaj-source
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8]">
                  Open source software, AI pipelines, and web experiments
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/Bharadwaj-source"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2F6BFF] hover:bg-[#2557D6] text-white text-xs sm:text-sm font-medium transition-all shadow-md shadow-[#2F6BFF]/20"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>

              <a
                href="https://github.com/Bharadwaj-source?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#070B14] hover:bg-[#131B2E] text-[#F8FAFC] text-xs sm:text-sm font-medium border border-[#1E293B] transition-all"
              >
                <ExternalLink className="w-4 h-4 text-[#00D4FF]" />
                <span>View Repositories</span>
              </a>
            </div>
          </div>

          {/* GitHub Activity Representation & Clean Grid */}
          <div className="pt-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#64748B]">
                Repository Highlights
              </span>
              <span className="text-xs font-mono text-[#00D4FF] flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5" />
                git commit &amp; push
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {repos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-[#070B14] border border-[#1E293B] p-5 hover:border-[#2F6BFF]/40 transition-all flex flex-col justify-between group"
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
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
