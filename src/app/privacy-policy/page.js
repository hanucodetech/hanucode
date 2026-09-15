import { createMetadata } from '@/lib/metadata';
import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';

export const metadata = createMetadata({
  title: 'Privacy Policy | HanuCode',
  description: 'HanuCode privacy policy — how we collect, use, and protect your personal information.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" description="Last updated: January 2026" />
      <section className="section-padding bg-white">
        <Container size="narrow">
          <div className="space-y-8 text-slate-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">Introduction</h2>
              <p>HanuCode (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">Information We Collect</h2>
              <p>We may collect information you provide directly, such as your name, email address, company name, phone number, and project details when you contact us through our website forms.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">How We Use Your Information</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>To respond to your inquiries and provide requested services</li>
                <li>To send relevant communications about our services</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at hello@hanucode.com.</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
