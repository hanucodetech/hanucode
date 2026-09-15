export const technologyCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Modern, responsive user interfaces built for performance and accessibility.',
    whyWeUse: 'We choose frontend technologies that deliver exceptional user experiences while maintaining code quality and developer productivity.',
    useCases: ['Enterprise dashboards', 'Customer-facing applications', 'Admin panels', 'Progressive web apps'],
    architecture: 'Component-based architecture with server-side rendering for SEO and performance, client-side hydration for interactivity.',
    technologies: [
      { name: 'React', description: 'Component-based UI library for building interactive interfaces.' },
      { name: 'Next.js', description: 'Full-stack React framework with SSR, routing, and optimization.' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'Robust server-side systems handling business logic, APIs, and data processing.',
    whyWeUse: 'Backend technology selection is driven by performance requirements, team expertise, and integration needs.',
    useCases: ['REST and GraphQL APIs', 'Microservices', 'Background job processing', 'Real-time systems'],
    architecture: 'Service-oriented design with clear API boundaries, caching layers, and horizontal scaling capabilities.',
    technologies: [
      { name: 'Node.js', description: 'JavaScript runtime for scalable network applications.' },
      { name: 'Python', description: 'Versatile language for APIs, data processing, and AI integration.' },
      { name: 'FastAPI', description: 'High-performance Python framework for building APIs.' },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile',
    description: 'Cross-platform mobile applications with native performance and consistent UX.',
    whyWeUse: 'Cross-platform development accelerates time-to-market while maintaining quality across iOS and Android.',
    useCases: ['Field workforce apps', 'Customer mobile apps', 'Internal enterprise tools'],
    architecture: 'Shared codebase with platform-specific optimizations and offline-first capabilities where needed.',
    technologies: [
      { name: 'Flutter', description: 'Cross-platform framework for beautiful native apps.' },
      { name: 'React Native', description: 'JavaScript framework for native mobile development.' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    description: 'Reliable data storage and retrieval systems optimized for application requirements.',
    whyWeUse: 'Database selection depends on data structure, query patterns, scalability needs, and consistency requirements.',
    useCases: ['Transactional systems', 'Analytics platforms', 'Caching layers', 'Document storage'],
    architecture: 'Polyglot persistence with primary databases, caching layers, and search indexes as needed.',
    technologies: [
      { name: 'PostgreSQL', description: 'Advanced open-source relational database.' },
      { name: 'MongoDB', description: 'Flexible document database for dynamic schemas.' },
      { name: 'Redis', description: 'In-memory data store for caching and real-time features.' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud',
    description: 'Scalable cloud infrastructure enabling reliable, globally distributed applications.',
    whyWeUse: 'Cloud platforms provide the elasticity, managed services, and global reach needed for modern applications.',
    useCases: ['Application hosting', 'Serverless functions', 'Content delivery', 'Data storage'],
    architecture: 'Cloud-native design with auto-scaling, multi-region deployment, and managed services where appropriate.',
    technologies: [
      { name: 'AWS', description: 'Comprehensive cloud platform with extensive service catalog.' },
      { name: 'Docker', description: 'Containerization for consistent deployment environments.' },
    ],
  },
  {
    id: 'ai',
    title: 'AI',
    description: 'Artificial intelligence and machine learning capabilities integrated into business applications.',
    whyWeUse: 'AI enhances applications with intelligent automation, personalization, and data-driven insights.',
    useCases: ['Intelligent automation', 'Content generation', 'Predictive analytics', 'Natural language processing'],
    architecture: 'AI inference layer with model serving, prompt management, and fallback mechanisms for reliability.',
    technologies: [
      { name: 'LangChain', description: 'Framework for building LLM-powered applications.' },
      { name: 'LLMs', description: 'Large language models for natural language understanding and generation.' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps',
    description: 'Automated pipelines and infrastructure practices for reliable software delivery.',
    whyWeUse: 'DevOps practices reduce deployment risk, accelerate delivery, and improve system reliability.',
    useCases: ['CI/CD pipelines', 'Infrastructure automation', 'Monitoring and alerting', 'Container orchestration'],
    architecture: 'GitOps workflow with infrastructure as code, automated testing, and progressive deployment strategies.',
    technologies: [
      { name: 'GitHub Actions', description: 'Automated CI/CD workflows integrated with source control.' },
      { name: 'Docker', description: 'Containerization for reproducible deployments.' },
      { name: 'Kubernetes', description: 'Container orchestration for scalable deployments.' },
    ],
  },
  {
    id: 'security',
    title: 'Security',
    description: 'Security tools and practices protecting applications, data, and infrastructure.',
    whyWeUse: 'Security is integrated throughout our engineering process, not treated as a separate concern.',
    useCases: ['Vulnerability scanning', 'Access management', 'Encryption', 'Security monitoring'],
    architecture: 'Defense-in-depth with network segmentation, encryption at every layer, and continuous security monitoring.',
    technologies: [
      { name: 'OWASP', description: 'Security standards and best practices for web applications.' },
      { name: 'Vault', description: 'Secrets management and secure credential storage.' },
    ],
  },
];

export const homeTechnologies = [
  'React', 'Next.js', 'Node.js', 'Python', 'FastAPI', 'Flutter',
  'MongoDB', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'GitHub Actions', 'LangChain', 'LLMs',
];
