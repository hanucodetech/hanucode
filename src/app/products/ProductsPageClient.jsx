'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Container from '@/components/common/Container';
import ProductCard from '@/components/cards/ProductCard';
import { productCategories } from '@/data/products';

export default function ProductsPageClient({ products }) {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      const match = productCategories.find(
        (c) => c.toLowerCase() === cat.toLowerCase()
      );
      if (match) setActiveCategory(match);
    }
  }, [searchParams]);

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section className="section-padding bg-surface">
      <Container>
        <div className="flex flex-wrap gap-2 mb-10 justify-center" role="tablist" aria-label="Product categories">
          {productCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-slate-600 border border-border-light hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-slate-500 py-12">No products found in this category.</p>
        )}
      </Container>
    </section>
  );
}
