export const productCategories = ['All', 'SaaS', 'Cybersecurity', 'Automation', 'AI'];

export const products = [
  {
    slug: 'hanutask',
    name: 'HanuTask',
    category: 'SaaS',
    tagline: 'Workforce and task management platform',
    description:
      'A unified platform for managing teams, tasks, and operational workflows with real-time visibility and accountability.',
    shortDescription:
      'Streamline workforce operations with intelligent task management, team coordination, and performance tracking.',
    features: ['Task Management', 'Team Dashboards', 'Workflow Automation', 'Reporting', 'Role-Based Access'],
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
    color: 'blue',
    businessProblem:
      'Organizations struggle with fragmented task management across teams, leading to missed deadlines, poor visibility, and inefficient resource allocation.',
    solution:
      'HanuTask provides a centralized platform that connects teams, automates routine workflows, and delivers actionable insights for operational excellence.',
    keyFeatures: [
      { title: 'Smart Task Assignment', description: 'AI-assisted task routing based on workload, skills, and priority.' },
      { title: 'Real-Time Dashboards', description: 'Live visibility into team performance, bottlenecks, and project health.' },
      { title: 'Automated Workflows', description: 'Configurable automation rules for approvals, notifications, and escalations.' },
      { title: 'Advanced Reporting', description: 'Custom reports and analytics for data-driven decision making.' },
    ],
    architecture: 'Microservices architecture with event-driven communication, horizontal scaling, and multi-tenant data isolation.',
    security: ['End-to-end encryption', 'RBAC with granular permissions', 'Audit logging', 'SSO integration', 'Data residency options'],
    integrations: ['Slack', 'Microsoft Teams', 'Google Workspace', 'Jira', 'REST API'],
    useCases: ['Enterprise operations', 'Project management', 'Field workforce coordination', 'Agency client delivery'],
    benefits: ['40% reduction in task completion time', 'Improved team accountability', 'Centralized operational visibility'],
    faqs: [
      { question: 'Can HanuTask scale for large enterprises?', answer: 'Yes. HanuTask is built on a scalable microservices architecture designed for organizations of any size.' },
      { question: 'Does HanuTask support custom workflows?', answer: 'Absolutely. Workflows can be configured without code using our visual workflow builder.' },
    ],
  },
  {
    slug: 'hanusecure',
    name: 'HanuSecure',
    category: 'Cybersecurity',
    tagline: 'Cybersecurity and device management platform',
    description:
      'Enterprise-grade security platform for device management, threat detection, and compliance monitoring across your organization.',
    shortDescription:
      'Protect your organization with comprehensive device management, threat detection, and security compliance tools.',
    features: ['Device Management', 'Threat Detection', 'Compliance Monitoring', 'Access Control', 'Security Analytics'],
    technologies: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Redis', 'Docker'],
    color: 'cyan',
    businessProblem:
      'Growing organizations face increasing security risks from unmanaged devices, unauthorized access, and lack of visibility into their security posture.',
    solution:
      'HanuSecure delivers unified device management, real-time threat detection, and automated compliance monitoring in a single platform.',
    keyFeatures: [
      { title: 'Unified Device Management', description: 'Monitor and manage all endpoints from a single dashboard.' },
      { title: 'Real-Time Threat Detection', description: 'AI-powered anomaly detection and automated incident response.' },
      { title: 'Compliance Dashboard', description: 'Track security policies and generate compliance reports automatically.' },
      { title: 'Identity & Access Management', description: 'Granular access controls with MFA and SSO support.' },
    ],
    architecture: 'Zero-trust architecture with encrypted communication, isolated tenant environments, and real-time event processing.',
    security: ['Zero-trust model', 'End-to-end encryption', 'MFA enforcement', 'Continuous monitoring', 'Incident response automation'],
    integrations: ['Active Directory', 'Okta', 'Azure AD', 'SIEM platforms', 'Slack alerts'],
    useCases: ['Enterprise endpoint security', 'Remote workforce protection', 'Compliance management', 'Device lifecycle management'],
    benefits: ['Reduced security incidents', 'Automated compliance reporting', 'Centralized security visibility'],
    faqs: [
      { question: 'What types of devices does HanuSecure support?', answer: 'HanuSecure supports Windows, macOS, Linux, iOS, and Android devices.' },
      { question: 'Can HanuSecure integrate with existing security tools?', answer: 'Yes. HanuSecure offers API integrations with major SIEM, IAM, and ITSM platforms.' },
    ],
  },
  {
    slug: 'hanuflow',
    name: 'HanuFlow',
    category: 'Automation',
    tagline: 'Business workflow automation platform',
    description:
      'Automate complex business processes with visual workflow builder, integrations, and intelligent decision engines.',
    shortDescription:
      'Design, deploy, and monitor automated business workflows without writing code.',
    features: ['Visual Builder', 'Process Automation', 'Integration Hub', 'Analytics', 'Approval Flows'],
    technologies: ['Node.js', 'React', 'MongoDB', 'Redis', 'AWS'],
    color: 'teal',
    businessProblem:
      'Manual business processes create bottlenecks, errors, and inefficiencies that slow down operations and increase costs.',
    solution:
      'HanuFlow enables teams to automate repetitive processes, connect systems, and optimize operations with a visual, no-code approach.',
    keyFeatures: [
      { title: 'Visual Workflow Builder', description: 'Drag-and-drop interface for designing complex automation flows.' },
      { title: 'Integration Hub', description: 'Connect 100+ business applications and services seamlessly.' },
      { title: 'Smart Decision Engine', description: 'Rule-based and AI-assisted routing for intelligent process automation.' },
      { title: 'Process Analytics', description: 'Monitor workflow performance and identify optimization opportunities.' },
    ],
    architecture: 'Event-driven serverless architecture with queue-based processing and horizontal auto-scaling.',
    security: ['Encrypted data in transit and at rest', 'Role-based workflow permissions', 'Audit trails', 'Secure API gateway'],
    integrations: ['Salesforce', 'HubSpot', 'SAP', 'Custom REST APIs', 'Webhooks'],
    useCases: ['Invoice processing', 'Employee onboarding', 'Customer onboarding', 'Approval workflows'],
    benefits: ['60% faster process completion', 'Reduced manual errors', 'Improved operational efficiency'],
    faqs: [
      { question: 'Do I need coding skills to use HanuFlow?', answer: 'No. HanuFlow is designed for business users with a visual, no-code interface.' },
      { question: 'Can HanuFlow handle high-volume workflows?', answer: 'Yes. The platform auto-scales to handle enterprise-level workflow volumes.' },
    ],
  },
  {
    slug: 'hanulearn',
    name: 'HanuLearn',
    category: 'AI',
    tagline: 'AI-powered education platform',
    description:
      'Intelligent learning platform with personalized curricula, adaptive assessments, and AI-driven content recommendations.',
    shortDescription:
      'Transform education delivery with AI-powered personalization, adaptive learning paths, and intelligent analytics.',
    features: ['Adaptive Learning', 'AI Tutoring', 'Content Management', 'Analytics', 'Assessment Engine'],
    technologies: ['Python', 'FastAPI', 'React', 'LangChain', 'PostgreSQL', 'Redis'],
    color: 'green',
    businessProblem:
      'Educational institutions and training organizations struggle to deliver personalized learning experiences at scale.',
    solution:
      'HanuLearn leverages AI to create adaptive learning paths, automate content delivery, and provide actionable insights for educators and learners.',
    keyFeatures: [
      { title: 'Adaptive Learning Paths', description: 'AI-generated personalized curricula based on learner progress and goals.' },
      { title: 'Intelligent Assessments', description: 'Dynamic assessments that adapt difficulty based on learner performance.' },
      { title: 'Content Intelligence', description: 'AI-powered content recommendations and gap analysis.' },
      { title: 'Learning Analytics', description: 'Comprehensive dashboards for educators, administrators, and learners.' },
    ],
    architecture: 'Modular platform with AI inference layer, content delivery network, and real-time analytics pipeline.',
    security: ['FERPA-aware data handling', 'Student data privacy controls', 'Encrypted content delivery', 'Access logging'],
    integrations: ['LMS platforms', 'Video conferencing', 'SSO providers', 'Content libraries'],
    useCases: ['Corporate training', 'Higher education', 'K-12 digital learning', 'Certification programs'],
    benefits: ['Improved learner outcomes', 'Reduced content creation time', 'Scalable personalized education'],
    faqs: [
      { question: 'How does HanuLearn personalize learning?', answer: 'HanuLearn uses AI to analyze learner behavior, performance, and preferences to generate adaptive learning paths.' },
      { question: 'Can HanuLearn integrate with existing LMS platforms?', answer: 'Yes. HanuLearn supports LTI and API integrations with major LMS platforms.' },
    ],
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category) {
  if (!category || category === 'All') return products;
  return products.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}
