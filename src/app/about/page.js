import { createMetadata } from '@/lib/metadata';
import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import CTASection from '@/components/common/CTASection';
import { aboutValues } from '@/data/faqs';
import { teamMembers } from '@/data/careers';
export const metadata = createMetadata({
  title: 'About HanuCode | Our Mission & Engineering Philosophy',
  description: 'Learn about HanuCode — our mission, values, engineering philosophy, and commitment to building secure, scalable software.',
  path: '/about',
});

const philosophy = [
  { title: 'Security by Design', description: 'Security considerations are embedded from the first architecture decision, not added later.' },
  { title: 'Scalable Foundations', description: 'We build systems that can grow from MVP to enterprise scale without fundamental rewrites.' },
  { title: 'Pragmatic Technology', description: 'We choose proven technologies that fit the problem, avoiding hype-driven decisions.' },
  { title: 'Transparent Delivery', description: 'Regular communication, clear milestones, and shared visibility into every phase of development.' },
];

const howWeWork = [
  { step: 'Discover', description: 'Deep dive into your business requirements, constraints, and success criteria.' },
  { step: 'Design', description: 'Architecture and UX design aligned with scalability, security, and user needs.' },
  { step: 'Build', description: 'Iterative development with continuous testing, reviews, and stakeholder feedback.' },
  { step: 'Deliver', description: 'Production deployment with documentation, monitoring, and knowledge transfer.' },
  { step: 'Support', description: 'Ongoing maintenance, optimization, and feature development as your partner.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="Building Software That Matters"
        description="HanuCode is a technology company focused on engineering secure, scalable software products and custom solutions for organizations that demand reliability."
      />

      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-navy-900">Who We Are</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                HanuCode is a software technology company specializing in SaaS products, cybersecurity solutions,
                AI-powered systems, and custom enterprise software. We combine product engineering expertise with
                deep technical knowledge to deliver solutions that organizations can depend on.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Our team brings together experience across frontend, backend, cloud infrastructure, AI, and security
                disciplines — working as a unified engineering organization focused on client outcomes.
              </p>
            </div>
            <div className="space-y-8">
              <div className="p-6 rounded-2xl border border-border-light bg-surface">
                <h3 className="text-lg font-bold text-navy-900">Our Mission</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  To transform ideas into reliable, secure software that empowers organizations to operate
                  efficiently, innovate confidently, and scale sustainably.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-border-light bg-surface">
                <h3 className="text-lg font-bold text-navy-900">Our Vision</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  To be the trusted engineering partner for organizations building technology that makes
                  a meaningful difference — known for quality, security, and long-term commitment.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-surface">
        <Container>
          <SectionHeading title="Our Engineering Philosophy" align="left" className="max-w-none mb-10" />
          <div className="grid sm:grid-cols-2 gap-6">
            {philosophy.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border border-border-light bg-white">
                <h3 className="font-bold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <SectionHeading title="Our Values" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutValues.map((value) => (
              <div key={value.title} className="p-6 rounded-2xl border border-border-light">
                <h3 className="font-bold text-navy-900">{value.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-surface">
        <Container>
          <SectionHeading title="How We Work" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {howWeWork.map((item, i) => (
              <div key={item.step} className="relative p-6 rounded-2xl border border-border-light bg-white text-center">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white text-sm font-bold mb-3">{i + 1}</span>
                <h3 className="font-bold text-navy-900">{item.step}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <SectionHeading title="Leadership Team" description="Placeholder team structure — replace with actual team members when ready." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.role} className="p-6 rounded-2xl border border-border-light text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-blue/20 to-brand-cyan/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl font-bold text-brand-blue">{member.role.charAt(0)}</span>
                </div>
                <h3 className="font-bold text-navy-900">{member.role}</h3>
                <p className="text-sm text-brand-blue mt-1">{member.department}</p>
                <p className="mt-2 text-sm text-slate-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-surface">
        <Container size="narrow">
          <SectionHeading title="Technology Mindset" />
          <p className="text-slate-600 leading-relaxed text-center">
            We stay current with evolving technology while maintaining a pragmatic approach. Every technology
            choice is evaluated against project requirements, team capabilities, long-term maintainability,
            and total cost of ownership. We invest in continuous learning and knowledge sharing to ensure
            our engineering practices remain effective and our solutions remain competitive.
          </p>
        </Container>
      </section>

      <CTASection
        title="Ready to Work Together?"
        description="Let's discuss how HanuCode can help you build secure, scalable software."
        primaryCta={{ label: "Let's Talk", href: '/contact' }}
        secondaryCta={{ label: 'View Case Studies', href: '/case-studies' }}
        variant="default"
      />
    </>
  );
}
