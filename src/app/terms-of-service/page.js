import { createMetadata } from '@/lib/metadata';
import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';

export const metadata = createMetadata({
  title: 'Terms of Service | HanuCode',
  description: 'HanuCode terms of service — terms and conditions for using our website and services.',
  path: '/terms-of-service',
});

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero title="Terms of Service" description="Last updated: January 2026" />
      <section className="section-padding bg-white">
        <Container size="narrow">
          <div className="space-y-8 text-slate-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">Agreement to Terms</h2>
              <p>By accessing or using the HanuCode website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">Use of Services</h2>
              <p>Our website provides information about our software products and engineering services. Specific service engagements are governed by separate agreements between HanuCode and the client.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">Intellectual Property</h2>
              <p>All content on this website, including text, graphics, logos, and software, is the property of HanuCode and is protected by applicable intellectual property laws.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">Limitation of Liability</h2>
              <p>HanuCode provides this website and its content on an &quot;as is&quot; basis. We make no warranties, expressed or implied, regarding the accuracy or completeness of the information provided.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">Contact</h2>
              <p>For questions about these Terms of Service, contact us at hello@hanucode.com.</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
