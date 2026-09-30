export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    description?: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Core languages used for algorithms, systems, and full-stack development',
    iconName: 'Code2',
    skills: [
      { name: 'Python', description: 'Data structures, backend APIs, AI/ML pipelines' },
      { name: 'Java', description: 'Object-oriented programming, core CS fundamentals' },
      { name: 'TypeScript', description: 'Type-safe scalable application development' },
      { name: 'JavaScript', description: 'ES6+, asynchronous programming, DOM APIs' },
      { name: 'SQL', description: 'Relational querying, schema design, joins & indexing' }
    ]
  },
  {
    title: 'Frontend Development',
    description: 'Modern component-driven web architectures and responsive interfaces',
    iconName: 'Layout',
    skills: [
      { name: 'React', description: 'Hooks, state management, modern component patterns' },
      { name: 'Next.js', description: 'Server components, routing, SSR/SSG workflows' },
      { name: 'Tailwind CSS', description: 'Utility-first styling, custom design systems' },
      { name: 'HTML5', description: 'Semantic markup, accessibility (a11y), SEO' },
      { name: 'CSS3', description: 'Flexbox, CSS Grid, responsive design, animations' }
    ]
  },
  {
    title: 'Backend Development',
    description: 'High-performance API construction and microservice patterns',
    iconName: 'Server',
    skills: [
      { name: 'FastAPI', description: 'Asynchronous Python REST APIs, Pydantic validation' }
    ]
  },
  {
    title: 'AI & Machine Learning',
    description: 'Generative AI architectures, vector retrieval, and intelligent systems',
    iconName: 'Cpu',
    skills: [
      { name: 'Machine Learning', description: 'Supervised/unsupervised models, evaluation metrics' },
      { name: 'RAG Architecture', description: 'Retrieval-augmented generation pipelines' },
      { name: 'LangChain', description: 'LLM orchestration, prompt chains, document loaders' },
      { name: 'Embeddings', description: 'High-dimensional semantic vector representations' },
      { name: 'Vector Databases', description: 'ChromaDB, similarity indexing & vector search' }
    ]
  },
  {
    title: 'Databases & Storage',
    description: 'Relational data modeling, cloud datastores, and query optimization',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL', description: 'ACID compliance, relational schemas, indexing' },
      { name: 'Supabase', description: 'Backend-as-a-service, PostgreSQL, Auth & Realtime' },
      { name: 'MySQL', description: 'Relational database management, stored procedures' }
    ]
  },
  {
    title: 'Developer Tools & Workflow',
    description: 'Essential developer tooling for version control and development speed',
    iconName: 'Wrench',
    skills: [
      { name: 'Git', description: 'Branching strategies, version tracking, merge workflows' },
      { name: 'GitHub', description: 'Collaboration, pull requests, issue tracking, CI/CD basics' },
      { name: 'VS Code', description: 'Primary IDE, debugging, extension ecosystem' }
    ]
  }
];
