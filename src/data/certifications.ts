export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  category: 'AI/ML' | 'Development' | 'Academic / NPTEL' | 'Workshop';
  status: 'Completed' | 'In Progress' | 'Planned';
  description: string;
  skillsLearned: string[];
  date?: string;
  credentialUrl?: string;
}

export const certificationsData: CertificationItem[] = [
  {
    id: 'nptel-cert',
    title: 'NPTEL / SWAYAM Technical Courses',
    issuer: 'NPTEL - IIT / MHRD',
    category: 'Academic / NPTEL',
    status: 'In Progress',
    description: 'Foundational computer science coursework covering algorithmic thinking, data structures, and core engineering concepts.',
    skillsLearned: ['Data Structures', 'Algorithms', 'Core CS Fundamentals']
  },
  {
    id: 'ai-ml-course',
    title: 'AI / Machine Learning & RAG Foundations',
    issuer: 'Online Learning / Technical Certifications',
    category: 'AI/ML',
    status: 'Completed',
    description: 'Practical training on LLMs, vector search embeddings, LangChain pipelines, and generative AI application building.',
    skillsLearned: ['LangChain', 'Vector Databases', 'Prompt Engineering', 'Embeddings']
  },
  {
    id: 'dev-cert',
    title: 'Full-Stack Web Development & Modern React',
    issuer: 'Self-Paced & Developer Curriculum',
    category: 'Development',
    status: 'Completed',
    description: 'Comprehensive study and implementation of modern React patterns, TypeScript type systems, RESTful API architecture, and state management.',
    skillsLearned: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI']
  },
  {
    id: 'workshops-cert',
    title: 'Technical Workshops & Hackathon Participation',
    issuer: 'SRKR College & Developer Communities',
    category: 'Workshop',
    status: 'Completed',
    description: 'Hands-on technical workshops, coding challenges, and collaborative hackathons focusing on problem-solving and rapid software prototyping.',
    skillsLearned: ['Rapid Prototyping', 'Team Collaboration', 'System Architecture']
  }
];
