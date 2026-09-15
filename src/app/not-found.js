import Link from 'next/link';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

export const metadata = {
  title: 'Page Not Found | HanuCode',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <section className="section-padding bg-white min-h-[60vh] flex items-center">
      <Container>
        <div className="text-center max-w-lg mx-auto">
          <p className="text-6xl font-bold text-gradient">404</p>
          <h1 className="mt-4 text-2xl font-bold text-navy-900">Page Not Found</h1>
          <p className="mt-2 text-slate-600">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/" variant="gradient" showArrow className="group">Go Home</Button>
            <Button href="/contact" variant="outline">Contact Us</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
