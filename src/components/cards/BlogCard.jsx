import Link from 'next/link';
import Badge from '@/components/common/Badge';
import AnimatedArrow from '@/components/common/AnimatedArrow';

export default function BlogCard({ post }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-border-light bg-white overflow-hidden card-hover">
      <div className="aspect-[16/9] bg-gradient-to-br from-navy-900/5 to-brand-cyan/10 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-white/80 shadow-sm flex items-center justify-center">
            <span className="text-2xl font-bold text-gradient">{post.category.charAt(0)}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="brand">{post.category}</Badge>
          <span className="text-xs text-slate-400">{post.readingTime}</span>
        </div>
        <h3 className="text-lg font-bold text-navy-900 group-hover:text-brand-blue transition-colors">{post.title}</h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1 line-clamp-2">{post.excerpt}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-slate-400">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          <Link href={`/resources/${post.slug}`} className="inline-flex items-center gap-1 text-sm font-medium text-brand-blue hover:text-brand-cyan transition-colors">
            Read
            <AnimatedArrow />
          </Link>
        </div>
      </div>
    </article>
  );
}
