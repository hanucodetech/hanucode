import { createMetadata } from '@/lib/metadata';
import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';
import CTASection from '@/components/common/CTASection';
import { getIcon } from '@/lib/icons';
import { Shield, Lock, Eye, Server, FileText, KeyRound, Activity, Database, RefreshCw, AlertTriangle } from 'lucide-react';

export const metadata = createMetadata({
  title: 'HanuCode Security | Secure Software Engineering',
  description: 'Learn about HanuCode security practices — secure development lifecycle, application security, IAM, API security, data protection, and infrastructure security.',
  path: '/security',
});

const securitySections = [
  {
    title: 'Secure Development Lifecycle',
    icon: 'Shield',
    description: 'Security is integrated into every phase of our development process — from requirements and design through coding, testing, and deployment.',
    points: ['Threat modeling during design', 'Secure coding standards and reviews', 'Automated security scanning in CI/CD', 'Security testing before release'],
  },
  {
    title: 'Application Security',
    icon: 'Lock',
    description: 'We follow OWASP guidelines and industry best practices to protect applications from common vulnerabilities.',
    points: ['Input validation and output encoding', 'Protection against OWASP Top 10', 'Dependency vulnerability scanning', 'Regular penetration testing'],
  },
  {
    title: 'Identity & Access Management',
    icon: 'KeyRound',
    description: 'Robust authentication and authorization mechanisms ensure only authorized users access appropriate resources.',
    points: ['Multi-factor authentication support', 'Role-based access control (RBAC)', 'Single sign-on (SSO) integration', 'Session management best practices'],
  },
  {
    title: 'API Security',
    icon: 'Globe',
    description: 'APIs are protected with comprehensive security controls to prevent unauthorized access and abuse.',
    points: ['Authentication and authorization on all endpoints', 'Rate limiting and throttling', 'Input validation and sanitization', 'API versioning and deprecation policies'],
  },
  {
    title: 'Data Protection',
    icon: 'Database',
    description: 'Data is protected at every stage — in transit, at rest, and during processing.',
    points: ['Encryption in transit (TLS 1.2+)', 'Encryption at rest for sensitive data', 'Data classification and handling policies', 'Secure data backup procedures'],
  },
  {
    title: 'Infrastructure Security',
    icon: 'Server',
    description: 'Cloud infrastructure is hardened and monitored to maintain a strong security posture.',
    points: ['Network segmentation and firewalls', 'Least privilege access policies', 'Regular security patching', 'Infrastructure as code with security checks'],
  },
  {
    title: 'Logging & Audit',
    icon: 'FileText',
    description: 'Comprehensive logging enables security monitoring, incident investigation, and compliance support.',
    points: ['Centralized log aggregation', 'Authentication and authorization event logging', 'Audit trail for sensitive operations', 'Log retention and integrity policies'],
  },
  {
    title: 'Secrets Management',
    icon: 'Eye',
    description: 'Credentials, API keys, and sensitive configuration are managed securely throughout their lifecycle.',
    points: ['Encrypted secrets storage', 'Automated secret rotation', 'No secrets in source code', 'Environment-specific credential isolation'],
  },
  {
    title: 'Monitoring & Alerting',
    icon: 'Activity',
    description: 'Continuous monitoring detects anomalies and potential security incidents in real time.',
    points: ['Real-time security event monitoring', 'Automated alerting for suspicious activity', 'Performance and availability monitoring', 'Incident response procedures'],
  },
  {
    title: 'Backup & Recovery',
    icon: 'RefreshCw',
    description: 'Reliable backup and recovery procedures ensure business continuity in the event of data loss or system failure.',
    points: ['Automated regular backups', 'Tested recovery procedures', 'Geographic redundancy where appropriate', 'Recovery time objectives defined'],
  },
];

const principles = [
  'Defense in depth — multiple layers of security controls',
  'Least privilege — minimum access required for each role',
  'Security by design — not bolted on after development',
  'Continuous improvement — regular assessment and updates',
  'Transparency — clear communication about security practices',
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        badge="Security"
        title="Security Built Into Every Layer"
        description="We treat security as a fundamental engineering requirement — integrated into architecture, development, deployment, and operations."
      />

      <section className="section-padding bg-white">
        <Container>
          <div className="flex items-start gap-4 p-6 rounded-2xl border border-amber-200 bg-amber-50 mb-12">
            <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-amber-800">
              HanuCode implements industry-standard security practices. We do not claim specific compliance certifications
              (ISO, SOC 2, GDPR, PCI) unless formally achieved and verified. Our security approach is designed to support
              your compliance requirements.
            </p>
          </div>

          <div className="space-y-8">
            {securitySections.map((section) => {
              const Icon = getIcon(section.icon);
              return (
                <article key={section.title} className="p-6 md:p-8 rounded-2xl border border-border-light">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-brand-cyan" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-navy-900">{section.title}</h2>
                      <p className="mt-2 text-slate-600 leading-relaxed">{section.description}</p>
                      <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                        {section.points.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
                            <Shield className="h-4 w-4 text-brand-teal shrink-0 mt-0.5" aria-hidden="true" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-navy-900">
        <Container size="narrow">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Security Principles</h2>
          <ul className="space-y-4">
            {principles.map((p) => (
              <li key={p} className="flex items-start gap-3 text-slate-300">
                <Lock className="h-5 w-5 text-brand-cyan shrink-0 mt-0.5" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTASection
        title="Questions About Our Security Approach?"
        description="Contact our team to discuss how we can meet your organization's security requirements."
        primaryCta={{ label: 'Contact Us', href: '/contact' }}
        secondaryCta={{ label: 'View Products', href: '/products' }}
      />
    </>
  );
}
