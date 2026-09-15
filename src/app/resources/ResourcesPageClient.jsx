'use client';

import { useState } from 'react';
import Container from '@/components/common/Container';
import BlogCard from '@/components/cards/BlogCard';
import { blogCategories } from '@/data/blogPosts';

export default function ResourcesPageClient({ posts }) {
  const [category, setCategory] = useState('All');

  const filtered = category === 'All' ? posts : posts.filter((p) => p.category === category);

  return (
    <section className="section-padding bg-surface">
      <Container>
        <div className="flex flex-wrap gap-2 mb-10 justify-center" role="tablist" aria-label="Blog categories">
          {blogCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={category === cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                category === cat
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-slate-600 border border-border-light hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-slate-500 py-12">No articles found in this category.</p>
        )}
      </Container>
    </section>
  );
}
