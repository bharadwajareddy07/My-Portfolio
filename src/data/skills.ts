export interface SkillItem {
  name: string;
  category: string;
  tag: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    description: 'Core languages used for building applications, backend scripts, and data handling.',
    iconName: 'Code2',
    skills: [
      { name: 'Python', category: 'Programming', tag: 'Core', description: 'Application logic, data processing, and RAG script development' },
      { name: 'JavaScript', category: 'Programming', tag: 'Web', description: 'Client-side scripting, DOM interaction, and asynchronous operations' },
      { name: 'C', category: 'Programming', tag: 'Systems', description: 'Programming fundamentals, memory concepts, and algorithmic problem solving' },
      { name: 'SQL', category: 'Programming', tag: 'Database', description: 'Relational data querying, data filtering, and schema operations' }
    ]
  },
  {
    id: 'web-development',
    title: 'Web',
    description: 'Frontend and web technologies for building interactive, responsive user interfaces.',
    iconName: 'Layout',
    skills: [
      { name: 'HTML5 & CSS', category: 'Web', tag: 'Markup & Styling', description: 'Semantic structure, modern layouts, Flexbox, Grid, and visual design' },
      { name: 'React', category: 'Web', tag: 'UI Library', description: 'Component-based architecture, state management, and interactive UIs' },
      { name: 'APIs', category: 'Web', tag: 'Integration', description: 'Connecting frontend interfaces with backend services and REST endpoints' }
    ]
  },
  {
    id: 'rag-application-development',
    title: 'RAG Architecture & AI',
    description: 'Architectures and toolchains for building context-aware, document-grounded applications.',
    iconName: 'Cpu',
    skills: [
      { name: 'RAG Architecture', category: 'RAG', tag: 'Architecture', description: 'End-to-end retrieval-augmented generation workflow design' },
      { name: 'LangChain', category: 'RAG', tag: 'Framework', description: 'Document loading, text chunking, and prompt orchestration' },
      { name: 'Vector Databases', category: 'RAG', tag: 'Storage', description: 'Vector embeddings indexing, similarity search, and retrieval' }
    ]
  }
];

export const languagesData = [
  { name: 'English', proficiency: 'Professional Working Proficiency' },
  { name: 'Telugu', proficiency: 'Native / Fluent' }
];
