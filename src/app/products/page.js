import { Suspense } from 'react';
import { createMetadata } from '@/lib/metadata';
import PageHero from '@/components/common/PageHero';
import ProductsPageClient from './ProductsPageClient';
import { products } from '@/data/products';

export const metadata = createMetadata({
  title: 'HanuCode Products | SaaS & Cybersecurity Solutions',
  description: 'Explore HanuCode software products — SaaS platforms, cybersecurity tools, automation systems, and AI-powered solutions.',
  path: '/products',
  keywords: ['SaaS products', 'cybersecurity platform', 'workflow automation', 'AI education'],
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        badge="Products"
        title="Software Products Built for Modern Organizations"
        description="Purpose-built platforms addressing workforce management, security, automation, and intelligent learning."
      />
      <Suspense fallback={<div className="section-padding bg-surface text-center text-slate-500">Loading products...</div>}>
        <ProductsPageClient products={products} />
      </Suspense>
    </>
  );
}
