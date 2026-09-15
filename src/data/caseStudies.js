export const caseStudyFilters = {
  industries: ['All', 'Financial Services', 'Education', 'Enterprise', 'Healthcare', 'Technology'],
  technologies: ['All', 'React', 'Node.js', 'Python', 'AWS', 'AI/ML'],
  solutionTypes: ['All', 'Platform Development', 'Automation', 'Security', 'AI Integration'],
};

export const caseStudies = [
  {
    slug: 'enterprise-payment-platform',
    title: 'Enterprise Payment Platform',
    industry: 'Financial Services',
    solutionType: 'Platform Development',
    challenge: 'A growing financial services organization needed a secure, scalable payment processing platform to replace fragmented legacy systems.',
    solution: 'Designed and built a microservices-based payment platform with real-time transaction processing, multi-currency support, and comprehensive audit trails.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    result: 'Reduced transaction processing time by 65% and improved system reliability to 99.9% uptime.',
    overview: 'This project involved building a modern payment processing platform from the ground up, replacing multiple legacy systems with a unified, secure solution.',
    architecture: 'Event-driven microservices architecture with dedicated services for payment processing, fraud detection, reporting, and notification.',
    keyFeatures: ['Real-time transaction processing', 'Multi-currency support', 'Automated reconciliation', 'Comprehensive reporting dashboard'],
    security: ['PCI-aware architecture', 'End-to-end encryption', 'Fraud detection algorithms', 'Complete audit logging'],
    implementation: 'Delivered in phased releases over 8 months, starting with core payment processing and expanding to advanced features.',
    results: [
      '65% faster transaction processing',
      '99.9% system uptime achieved',
      'Unified reporting across all payment channels',
      'Reduced operational overhead by 40%',
    ],
    clientDescription: 'Mid-size financial services organization',
  },
  {
    slug: 'education-data-platform',
    title: 'Education Data Platform',
    industry: 'Education',
    solutionType: 'Platform Development',
    challenge: 'An educational institution needed a centralized platform to manage student data, academic records, and institutional analytics.',
    solution: 'Built a comprehensive data management platform with role-based access, automated reporting, and integration with existing academic systems.',
    technologies: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    result: 'Consolidated data from 5 legacy systems into a single platform, reducing administrative workload by 50%.',
    overview: 'A unified education data platform that centralizes student information, academic records, and institutional analytics.',
    architecture: 'Modular monolith with API-first design, enabling gradual migration from legacy systems.',
    keyFeatures: ['Centralized student records', 'Automated grade reporting', 'Institutional analytics dashboard', 'Legacy system integration'],
    security: ['Role-based data access', 'FERPA-aware data handling', 'Encrypted data storage', 'Access audit trails'],
    implementation: 'Phased migration approach over 6 months, integrating one legacy system at a time.',
    results: [
      '50% reduction in administrative workload',
      'Single source of truth for student data',
      'Real-time institutional analytics',
      'Improved data accuracy and consistency',
    ],
    clientDescription: 'Regional educational institution',
  },
  {
    slug: 'ai-learning-platform',
    title: 'AI Learning Platform',
    industry: 'Education',
    solutionType: 'AI Integration',
    challenge: 'A training organization wanted to deliver personalized learning experiences at scale using AI-powered content adaptation.',
    solution: 'Developed an AI-enhanced learning platform with adaptive curricula, intelligent assessments, and personalized content recommendations.',
    technologies: ['React', 'Python', 'LangChain', 'PostgreSQL', 'Redis', 'AWS'],
    result: 'Improved learner completion rates by 35% through personalized learning paths and adaptive assessments.',
    overview: 'An intelligent learning platform that uses AI to personalize education delivery and improve learner outcomes.',
    architecture: 'Platform with dedicated AI inference layer, content delivery system, and real-time analytics pipeline.',
    keyFeatures: ['Adaptive learning paths', 'AI-powered assessments', 'Content recommendation engine', 'Learner progress analytics'],
    security: ['Student data privacy controls', 'Secure content delivery', 'AI decision audit logging'],
    implementation: 'MVP delivered in 10 weeks, followed by iterative AI model improvements based on learner data.',
    results: [
      '35% improvement in completion rates',
      'Personalized paths for 10,000+ learners',
      'Reduced content creation time by 45%',
      'Actionable insights for educators',
    ],
    clientDescription: 'Corporate training organization',
  },
  {
    slug: 'workflow-automation-platform',
    title: 'Workflow Automation Platform',
    industry: 'Enterprise',
    solutionType: 'Automation',
    challenge: 'An enterprise organization struggled with manual approval processes and disconnected systems causing delays and errors.',
    solution: 'Built a custom workflow automation platform connecting HR, finance, and operations systems with visual process designer.',
    technologies: ['Node.js', 'React', 'MongoDB', 'Redis', 'Docker', 'AWS'],
    result: 'Automated 80% of routine approval workflows, reducing processing time from days to hours.',
    overview: 'A custom workflow automation platform that connects business systems and eliminates manual process bottlenecks.',
    architecture: 'Event-driven workflow engine with visual designer, integration hub, and real-time monitoring dashboard.',
    keyFeatures: ['Visual workflow designer', 'Multi-system integration', 'Automated approval routing', 'Process analytics'],
    security: ['Workflow-level permissions', 'Encrypted data exchange', 'Complete process audit trails'],
    implementation: 'Started with highest-impact workflows, expanding automation coverage over 5 months.',
    results: [
      '80% of approval workflows automated',
      'Processing time reduced from days to hours',
      'Eliminated manual data entry errors',
      'Full process visibility for management',
    ],
    clientDescription: 'Large enterprise organization',
  },
];

export function getCaseStudyBySlug(slug) {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function filterCaseStudies({ industry, technology, solutionType }) {
  return caseStudies.filter((cs) => {
    const matchIndustry = !industry || industry === 'All' || cs.industry === industry;
    const matchTech = !technology || technology === 'All' || cs.technologies.some((t) => t.includes(technology));
    const matchSolution = !solutionType || solutionType === 'All' || cs.solutionType === solutionType;
    return matchIndustry && matchTech && matchSolution;
  });
}
