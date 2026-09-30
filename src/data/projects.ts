export interface Project {
  id: string;
  title: string;
  category: 'Full Stack' | 'AI/ML' | 'Web';
  categories: ('Full Stack' | 'AI/ML' | 'Web')[];
  shortDescription: string;
  problemSolved: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  badge?: string;
  pipeline?: { step: number; title: string; desc: string }[];
  accentColor: string;
}

export const projectsData: Project[] = [
  {
    id: 'aqua-feed-system',
    title: 'Aqua Feed Performance Management System',
    category: 'Full Stack',
    categories: ['Full Stack', 'Web'],
    badge: 'Featured System',
    accentColor: '#00D4FF',
    shortDescription:
      'A management platform designed to help aquaculture farms manage farmers, agents, farm visits, feeding data, biomass, FCR, mortality, and harvest information.',
    problemSolved:
      'Aquaculture farms often struggle with manual paper logs and delayed field reporting, leading to inaccurate feed estimates, unchecked mortality, and poor yield visibility. This system digitizes the entire agent-farmer cycle with real-time field logs and automated biological analytics.',
    technologies: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'FastAPI'],
    keyFeatures: [
      'Agent farm-visit workflow & verification',
      'Farmer and multi-pond farm management',
      'Daily feeding records & feed schedule logs',
      'Automated FCR, ABW, and biomass growth analytics',
      'Mortality monitoring & anomaly alerts',
      'Harvest cycle management and yield forecasts',
      'Role-based dashboards & analytical export reports'
    ],
    githubUrl: 'https://github.com/Bharadwaj-source',
    liveDemoUrl: '#'
  },
  {
    id: 'rag-ai-application',
    title: 'Retrieval-Augmented Generation Application',
    category: 'AI/ML',
    categories: ['AI/ML'],
    badge: 'AI Architecture',
    accentColor: '#2F6BFF',
    shortDescription:
      'An AI application that processes documents, creates embeddings, stores them in a vector database, retrieves relevant information, and generates contextual answers using an LLM.',
    problemSolved:
      'Standard LLMs hallucinate or lack awareness of private unstructured documents. This RAG system enables grounded, fact-accurate question-answering over custom PDFs and documentation with fast vector retrieval and verifiable source citations.',
    technologies: ['Python', 'LangChain', 'ChromaDB', 'Embeddings', 'Groq'],
    pipeline: [
      { step: 1, title: 'PDF / Documents', desc: 'Ingestion of multi-format unstructured files' },
      { step: 2, title: 'Text Extraction', desc: 'Document parsing & clean text sanitization' },
      { step: 3, title: 'Chunking', desc: 'Recursive character chunking with overlap' },
      { step: 4, title: 'Embeddings', desc: 'High-dimensional semantic vector generation' },
      { step: 5, title: 'Vector Database', desc: 'ChromaDB indexing for similarity search' },
      { step: 6, title: 'Retrieval', desc: 'Top-K semantic similarity matching & re-ranking' },
      { step: 7, title: 'LLM (Groq)', desc: 'Ultra-low latency contextual synthesis' },
      { step: 8, title: 'Answer & Citations', desc: 'Grounded response with exact source page links' }
    ],
    keyFeatures: [
      'Multi-document vector indexing with ChromaDB',
      'Semantic chunking strategy preserving header context',
      'Ultra-fast inference powered by Groq LPU acceleration',
      'Contextual query synthesis with verifiable source attribution',
      'Memory-efficient local vector storage & persistent indexing'
    ],
    githubUrl: 'https://github.com/Bharadwaj-source',
    liveDemoUrl: '#'
  },
  {
    id: 'legal-metrology-sih',
    title: 'Legal Metrology / SIH Project',
    category: 'Full Stack',
    categories: ['Full Stack', 'Web', 'AI/ML'],
    badge: 'Hackathon / Domain Project',
    accentColor: '#38BDF8',
    shortDescription:
      'A problem-focused application developed around the Legal Metrology domain, designed to support digital inspection and workflow management.',
    problemSolved:
      'Regulatory weights & measures verification traditionally involves cumbersome physical paperwork, lack of location validation, and inconsistent compliance auditing. This application provides a tamper-evident digital inspection workflow with GPS verification and automated rules engine.',
    technologies: ['Next.js', 'TypeScript', 'Python/Backend', 'ML', 'PostgreSQL'],
    keyFeatures: [
      'Digital inspection workflow for field verification officers',
      'Regulatory compliance rules verification engine',
      'Map & GPS-based inspection geo-tagging and route coordination',
      'Automated discrepancy flags and violation reporting',
      'Task allocation & officer work management portal',
      'Tamper-evident audit logs and downloadable compliance certs'
    ],
    githubUrl: 'https://github.com/Bharadwaj-source',
    liveDemoUrl: '#'
  }
];
