export interface EducationItem {
  degree: string;
  fieldOfStudy: string;
  institution: string;
  period: string;
  location?: string;
  relevantFocus?: string[];
  highlights: string[];
}

export const educationData: EducationItem[] = [
  {
    degree: 'B.Tech — Computer Science and Engineering',
    fieldOfStudy: 'Computer Science and Engineering',
    institution: 'SRKR Engineering College',
    period: '2025 – 2029',
    location: 'Bhimavaram, Andhra Pradesh, India',
    relevantFocus: [
      'Programming',
      'Web Development',
      'APIs',
      'RAG Architecture',
      'Databases'
    ],
    highlights: [
      'Relevant Focus: Programming, Web Development, APIs, RAG Architecture, and Databases.',
      'Active focus on full-stack web architectures, applied AI/RAG pipelines, and problem-solving through practical software building.',
      'Undergraduate actively preparing for software engineering and RAG application development opportunities.'
    ]
  }
];
