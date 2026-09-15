import { createMetadata } from '@/lib/metadata';
import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';
import ContactForm from '@/components/forms/ContactForm';
import { SITE_CONFIG } from '@/lib/constants';
import { Mail, MapPin, Clock } from 'lucide-react';

export const metadata = createMetadata({
  title: 'Contact HanuCode | Start a Conversation',
  description: 'Get in touch with HanuCode to discuss your software project, product requirements, or technology consulting needs.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact"
        title="Let's Build Something Valuable"
        description="Tell us about your project, challenge, or idea. Our team will respond within one business day."
      />
      <section className="section-padding bg-surface">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="p-6 md:p-8 rounded-2xl border border-border-light bg-white">
                <h2 className="text-xl font-bold text-navy-900 mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
            <aside className="space-y-6">
              <div className="p-6 rounded-2xl border border-border-light bg-white">
                <Mail className="h-6 w-6 text-brand-blue mb-3" aria-hidden="true" />
                <h3 className="font-bold text-navy-900">Email</h3>
                <a href={`mailto:${SITE_CONFIG.email}`} className="mt-2 block text-brand-blue hover:text-brand-cyan transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="p-6 rounded-2xl border border-border-light bg-white">
                <MapPin className="h-6 w-6 text-brand-blue mb-3" aria-hidden="true" />
                <h3 className="font-bold text-navy-900">Location</h3>
                <p className="mt-2 text-slate-600">{SITE_CONFIG.location}</p>
              </div>
              <div className="p-6 rounded-2xl border border-border-light bg-white">
                <Clock className="h-6 w-6 text-brand-blue mb-3" aria-hidden="true" />
                <h3 className="font-bold text-navy-900">Business Hours</h3>
                <p className="mt-2 text-slate-600">{SITE_CONFIG.businessHours}</p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
