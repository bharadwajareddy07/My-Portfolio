export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  category: 'RAG Application' | 'Web Application';
  badge: string;
  accentColor: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  pipelineNodes?: { step: number; name: string; desc: string }[];
}

export const projectsData: ProjectDetail[] = [
  {
    id: 'rag-application',
    title: 'RAG Application',
    subtitle: 'Context-Aware Document Question-Answering Application',
    category: 'RAG Application',
    badge: 'RAG Focus',
    accentColor: '#2F6BFF',
    description:
      'A Retrieval-Augmented Generation application that processes documents, creates embeddings, stores them in a vector database, retrieves relevant information, and uses it to generate context-aware responses.',
    problem:
      'Standard language models lack awareness of custom, private, or domain-specific documents. Users need accurate answers that are directly grounded in their own uploaded documents without hallucination.',
    solution:
      'Built a RAG application that extracts text from documents, chunks the content with semantic overlap, stores high-dimensional embeddings in a vector database, retrieves top relevant passages for any query, and synthesizes accurate responses.',
    architecture:
      'Document Processing & Chunking → Vector Embeddings & Indexing → Semantic Retrieval → Context-Injected Response Generation.',
    technologies: ['Python', 'LangChain', 'RAG', 'Vector Database', 'APIs'],
    keyFeatures: [
      'Document ingestion and clean text extraction',
      'Context-preserving document chunking',
      'Vector database storage and similarity indexing',
      'Semantic retrieval for user questions',
      'Context-aware response generation with source grounding'
    ],
    pipelineNodes: [
      { step: 1, name: 'Documents', desc: 'Raw document input and text ingestion' },
      { step: 2, name: 'Processing', desc: 'Text cleaning and extraction' },
      { step: 3, name: 'Chunking', desc: 'Breaking text into overlapping semantic segments' },
      { step: 4, name: 'Embeddings', desc: 'Generating numerical vector representations' },
      { step: 5, name: 'Vector DB', desc: 'Storing and indexing vectors for fast lookup' },
      { step: 6, name: 'Retrieval', desc: 'Searching for relevant context using similarity' },
      { step: 7, name: 'LLM', desc: 'Augmenting model prompt with retrieved context' },
      { step: 8, name: 'Response', desc: 'Delivering accurate, context-grounded response' }
    ],
    githubUrl: 'https://github.com/bharadwajareddy07/RAG',
    liveDemoUrl: '#'
  },
  {
    id: 'legal-metrology-app',
    title: 'Legal Metrology Application',
    subtitle: 'Digital Inspection & Workflow Management Application',
    category: 'Web Application',
    badge: 'Software Application',
    accentColor: '#38BDF8',
    description:
      'A software application developed around the Legal Metrology domain, designed to support digital verification workflows, inspection scheduling, and structured report management.',
    problem:
      'Physical inspection processes for commercial verification involve paper-heavy records, delayed field reporting, and lack of streamlined tracking for field verification officers.',
    solution:
      'Engineered an application interface for verification workflows, enabling digital record submission, rule-guided validation, and structured compliance reporting.',
    architecture:
      'React Frontend Client → API Routing & Backend Service Layer → Structured Database Storage & Report Generator.',
    technologies: ['React', 'JavaScript', 'Python', 'APIs', 'HTML5', 'CSS'],
    keyFeatures: [
      'Digital inspection entry and verification forms',
      'Inspection workflow and task tracking',
      'Structured compliance summary generation',
      'Location coordinate logging support',
      'Clean dashboard navigation for inspection officers'
    ],
    githubUrl: 'https://github.com/bharadwajareddy07/My-Portfolio',
    liveDemoUrl: '#'
  },
  {
    id: 'aqua-feed-system',
    title: 'Aqua Feed Performance Management System',
    subtitle: 'Aquaculture Operations & Farm Data Management Web Application',
    category: 'Web Application',
    badge: 'Application Development',
    accentColor: '#00D4FF',
    description:
      'A practical web application designed to help aquaculture farms organize farmer records, field agent visits, daily feeding schedules, and operational farm data in a unified dashboard.',
    problem:
      'Aquaculture farm management often relies on manual logs and fragmented notes, making it difficult to maintain consistent feeding records, visit logs, and pond tracking across multiple farms.',
    solution:
      'Developed a responsive application with interactive management interfaces for agents and farm coordinators to log visit data, record daily feeding, and monitor pond operational status.',
    architecture:
      'React Web Interface → API Layer → Relational Database (SQL) for persistent farm records and operational data calculation.',
    technologies: ['React', 'JavaScript', 'Python', 'APIs', 'SQL', 'HTML5', 'CSS'],
    keyFeatures: [
      'Agent farm-visit workflow and record logging',
      'Farmer and pond management views',
      'Daily feeding schedules and data entry forms',
      'Farm data summaries and operational reports',
      'Responsive, user-friendly interface for mobile and desktop'
    ],
    githubUrl: 'https://github.com/bharadwajareddy07/My-Portfolio',
    liveDemoUrl: '#'
  },
  {
    id: 'think-twice',
    title: 'Think-Twice',
    subtitle: 'Decision Analysis & Cognitive Reflection Web Application',
    category: 'Web Application',
    badge: 'Web Application',
    accentColor: '#2F6BFF',
    description:
      'An interactive web application designed to help users evaluate critical decisions, analyze potential outcomes, reduce cognitive biases, and review structured reasoning before taking action.',
    problem:
      'Impulsive decision-making and cognitive oversights frequently lead to avoidable mistakes in planning, development, and daily workflows without a structured reflection pause.',
    solution:
      'Built an intuitive application featuring structured evaluation frameworks, outcome risk assessments, and scenario analysis to systematically inspect decisions from multiple perspectives.',
    architecture:
      'React Frontend Client → API Integration Layer → Decision Evaluation Engine & Structured State Management.',
    technologies: ['React', 'JavaScript', 'Python', 'APIs', 'HTML5', 'CSS'],
    keyFeatures: [
      'Multi-perspective decision evaluation workflow',
      'Cognitive bias and risk assessment checklists',
      'Scenario simulation and trade-off comparison',
      'Structured reasoning logs and decision history',
      'Responsive, distraction-free user interface'
    ],
    githubUrl: 'https://github.com/bharadwajareddy07/My-Portfolio',
    liveDemoUrl: '#'
  }
];
