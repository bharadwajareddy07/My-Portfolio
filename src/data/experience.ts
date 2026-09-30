export interface ExperienceItem {
  id: string;
  type: 'Project Engineering' | 'Hackathon Initiative' | 'Technical Development';
  role: string;
  context: string;
  period: string;
  description: string;
  highlights: string[];
  techStack: string[];
}

export const practicalExperienceData: ExperienceItem[] = [
  {
    id: 'exp-aqua-system',
    type: 'Project Engineering',
    role: 'Full-Stack Developer (Independent Project)',
    context: 'Aqua Feed Management System',
    period: '2024 - Present',
    description:
      'Engineered an end-to-end aquaculture operations platform solving complex data tracking for farm visits, feed distribution, and biological metric calculations.',
    highlights: [
      'Architected responsive user interfaces in React & TypeScript with role-tailored dashboards for farm agents and owners.',
      'Designed normalized PostgreSQL schema hosted on Supabase to track farmers, ponds, daily feed weights, and harvest timelines.',
      'Constructed FastAPI endpoints to compute key biological ratios including FCR (Feed Conversion Ratio), ABW, and biomass estimations.',
      'Implemented robust form validations and state management to handle offline-capable farm visit logs.'
    ],
    techStack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'exp-rag-system',
    type: 'Project Engineering',
    role: 'AI / LLM Systems Developer (Independent Project)',
    context: 'RAG Document Intelligence Pipeline',
    period: '2024',
    description:
      'Researched and implemented a complete Retrieval-Augmented Generation (RAG) system to perform grounded natural language reasoning over custom domain documents.',
    highlights: [
      'Integrated LangChain document processing chains with recursive text splitting and semantic overlap mechanisms.',
      'Implemented ChromaDB vector store indexing with high-dimensional text embeddings for fast similarity lookups.',
      'Connected high-throughput Groq LLM inference for near instantaneous contextual response generation.',
      'Benchmarked retrieval precision and reduced context dilution using targeted chunk size tuning.'
    ],
    techStack: ['Python', 'LangChain', 'ChromaDB', 'Groq API', 'Embeddings']
  },
  {
    id: 'exp-sih-legal-metrology',
    type: 'Hackathon Initiative',
    role: 'Full-Stack & ML Contributor (Smart India Hackathon Focus)',
    context: 'Legal Metrology Inspection & Compliance Platform',
    period: '2024',
    description:
      'Collaborated on building a problem-focused digital inspection portal for the Legal Metrology domain to streamline verification compliance and geo-tagged field audits.',
    highlights: [
      'Developed frontend views with Next.js & TypeScript for verification officer schedules and inspection report submission.',
      'Integrated GPS/map-based coordinates logging to verify physical inspection presence at vendor establishments.',
      'Implemented automated compliance rule checks to flag equipment calibration discrepancies and generate audit-ready inspection certificates.',
      'Delivered an interactive presentation and functional demo under tight problem-statement timelines.'
    ],
    techStack: ['Next.js', 'TypeScript', 'Python', 'ML', 'PostgreSQL', 'Map APIs']
  }
];
