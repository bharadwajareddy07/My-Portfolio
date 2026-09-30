export interface EducationItem {
  degree: string;
  fieldOfStudy: string;
  institution: string;
  period: string;
  location?: string;
  highlights: string[];
}

export const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    fieldOfStudy: 'Computer Science and Engineering',
    institution: 'SRKR Engineering College',
    period: '2024 – 2028',
    location: 'Bhimavaram, Andhra Pradesh, India',
    highlights: [
      'Core coursework in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, and Software Engineering principles.',
      'Active focus on full-stack web architectures, applied AI/ML pipelines, and problem-solving through practical software building.',
      '2nd-year undergraduate actively preparing for software engineering and AI internship opportunities.'
    ]
  }
];
