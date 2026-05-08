export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
};

export const certificates: Certificate[] = [
  { id: 'frontend-engineering', title: 'Frontend Engineering Fundamentals', issuer: 'Professional Learning', year: '2025', image: '/certificates/frontend-engineering.svg' },
  { id: 'ai-product-building', title: 'AI Product Building', issuer: 'AI Learning Track', year: '2025', image: '/certificates/ai-product-building.svg' },
  { id: 'full-stack-development', title: 'Full Stack Development', issuer: 'Developer Program', year: '2024', image: '/certificates/full-stack-development.svg' },
  { id: 'typescript-practice', title: 'TypeScript for Web Apps', issuer: 'Code Practice Lab', year: '2024', image: '/certificates/typescript-practice.svg' },
  { id: 'react-systems', title: 'React Component Systems', issuer: 'Frontend Lab', year: '2024', image: '/certificates/react-systems.svg' },
  { id: 'database-basics', title: 'Database Design Basics', issuer: 'Backend Learning', year: '2024', image: '/certificates/database-basics.svg' }
];
