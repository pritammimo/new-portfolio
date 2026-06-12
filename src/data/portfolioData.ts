import type { Project } from '../components/ProjectCard';
import type { TimelineEvent } from '../components/TimelineItem';

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'AI Project Manager',
    description: 'AI-powered project management platform with autonomous agents, semantic search, and document intelligence. Automates requirement analysis, document generation, task planning, and team workflow orchestration through agentic AI.',
    category: 'AI / Full Stack',
    tags: ['Next.js', 'PostgreSQL', 'Prisma', 'Kafka', 'LangChain', 'Agentic AI', 'RAG', 'Vector DB'],
    gradient: 'from-violet-600 via-indigo-600 to-blue-600',
  },
  {
    id: '2',
    title: 'MyTurn',
    description: 'Recruitment platform built with microservices architecture and real-time communication. Features event-driven messaging with Kafka and RabbitMQ, gRPC inter-service communication, and Redis caching.',
    category: 'Microservices',
    tags: ['Next.js', 'Node.js', 'TypeScript', 'Kafka', 'RabbitMQ', 'gRPC', 'Redis'],
    gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
  },
  {
    id: '3',
    title: 'SecretSelf',
    description: 'Print-on-demand platform with interactive 3D product customization using React Three Fiber, AI-powered search capabilities, and robust form validation with Zod and React Hook Form.',
    category: 'E-Commerce / 3D',
    tags: ['Next.js', 'Prisma', 'NeonDB', 'React Three Fiber', 'Zod', 'AI Search'],
    gradient: 'from-pink-500 via-rose-600 to-red-600',
  },
  {
    id: '4',
    title: 'OttoGousto',
    description: 'Automotive parts marketplace with advanced search, inventory management, and a streamlined ordering workflow. Built with server-side rendering and optimistic UI updates.',
    category: 'Marketplace',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'React Query', 'React Hook Form'],
    gradient: 'from-amber-500 via-orange-600 to-rose-600',
  },
  {
    id: '5',
    title: 'EasyDepo',
    description: 'AI-assisted legal services platform supporting 10 different role-management tiers. Features GraphQL and tRPC APIs for flexible data fetching and type-safe server communication.',
    category: 'Legal Tech',
    tags: ['Next.js', 'Prisma', 'GraphQL', 'tRPC'],
    gradient: 'from-blue-600 via-indigo-600 to-purple-600',
  },
  {
    id: '6',
    title: 'Zicarta',
    description: 'Real-estate transaction platform with Stripe payment integration, property listing management, and customer relationship tools.',
    category: 'Real Estate',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Stripe'],
    gradient: 'from-cyan-500 via-blue-600 to-indigo-600',
  },
];

export const mockTimelineEvents: TimelineEvent[] = [
  {
    id: '1',
    type: 'work',
    period: 'Dec 2021 - Present',
    title: 'Software Engineer',
    organization: 'Capital Numbers Infotech, Kolkata',
    description: 'Designed AI-powered project management apps with LangGraph & LLMs. Built multilingual restaurant management systems, law-services platforms with 10 role tiers, and integrated Redis caching for 20% faster page loads.',
  },
  {
    id: '2',
    type: 'work',
    period: 'Mar 2021 - Nov 2021',
    title: 'Software Developer',
    organization: 'Webskitters Technology Solutions, Kolkata',
    description: 'Developed house rental management and multilingual e-learning applications. Integrated third-party payment gateways, migrated CMS platforms, and built customer loyalty programs increasing retention by 15%.',
  },
  {
    id: '3',
    type: 'work',
    period: 'Dec 2019 - Feb 2021',
    title: 'Software Developer',
    organization: 'Digital Onion, Kolkata',
    description: 'Developed and maintained CRM web applications, integrated third-party authentication systems, and improved customer service workflows.',
  },
  {
    id: '4',
    type: 'education',
    period: '2016 - 2020',
    title: 'B.Tech in Computer Science',
    organization: 'RCC Institute of Information Technology',
    description: 'Bachelor of Technology degree. Built a strong foundation in software engineering, data structures, algorithms, and system design.',
  },
];

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
  gradient: string;
}

export const mockSkills: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js / Next.js', level: 95 },
      { name: 'TypeScript / JavaScript', level: 92 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'React Query / Hook Form', level: 88 },
    ],
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Backend & Data',
    skills: [
      { name: 'Node.js / REST / GraphQL', level: 90 },
      { name: 'PostgreSQL / Prisma', level: 88 },
      { name: 'Kafka / RabbitMQ / Redis', level: 85 },
      { name: 'Docker / AWS / gRPC', level: 80 },
    ],
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'AI & Tools',
    skills: [
      { name: 'LangChain / Agentic AI', level: 85 },
      { name: 'RAG / Vector Databases', level: 82 },
      { name: 'Semantic Search', level: 80 },
      { name: 'Git / CI-CD / Testing', level: 88 },
    ],
    gradient: 'from-amber-500 to-orange-500',
  },
];
