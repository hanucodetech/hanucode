import { notFound } from 'next/navigation';
import { createMetadata } from '@/lib/metadata';
import { getBlogPostBySlug, getRelatedPosts, blogPosts } from '@/data/blogPosts';
import { articleSchema, breadcrumbSchema, JsonLd } from '@/lib/structured-data';
import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';
import Badge from '@/components/common/Badge';
import BlogCard from '@/components/cards/BlogCard';
import CTASection from '@/components/common/CTASection';

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/resources/${slug}`,
    type: 'article',
  });
}

function renderContent(content) {
  return content.trim().split('\n').map((line, i) => {
    if (line.startsWith('## ')) {
      return <h2 key={i} className="text-2xl font-bold text-navy-900 mt-8 mb-4">{line.replace('## ', '')}</h2>;
    }
    if (line.startsWith('### ')) {
      return <h3 key={i} className="text-xl font-bold text-navy-900 mt-6 mb-3">{line.replace('### ', '')}</h3>;
    }
    if (line.startsWith('- ')) {
      return <li key={i} className="text-slate-600 ml-4 list-disc">{line.replace('- ', '')}</li>;
    }
    if (/^\d+\./.test(line)) {
      return <li key={i} className="text-slate-600 ml-4 list-decimal">{line.replace(/^\d+\.\s*/, '')}</li>;
    }
    if (line.trim() === '') return null;
    return <p key={i} className="text-slate-600 leading-relaxed mb-4">{line}</p>;
  });
}

export default async function ResourceDetailPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, post.category);
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Resources', href: '/resources' },
    { name: post.title },
  ];

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <PageHero breadcrumbs={breadcrumbs} badge={post.category} title={post.title} description={post.excerpt}>
        <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
          <span>{post.author}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </time>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime}</span>
        </div>
      </PageHero>

      <article className="section-padding bg-white">
        <Container size="narrow">
          <div className="aspect-[2/1] rounded-2xl bg-gradient-to-br from-navy-900/5 to-brand-cyan/10 mb-10 flex items-center justify-center border border-border-light">
            <Badge variant="brand" className="text-base px-4 py-2">{post.category}</Badge>
          </div>
          <div className="prose-custom">{renderContent(post.content)}</div>
        </Container>
      </article>

      {related.length > 0 && (
        <section className="section-padding bg-surface">
          <Container>
            <h2 className="text-2xl font-bold text-navy-900 mb-8">Related Articles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection variant="default" />
    </>
  );
}
