import Link from 'next/link';
import Badge from '@/components/common/Badge';
import AnimatedArrow from '@/components/common/AnimatedArrow';
import ProductVisual from '@/components/common/ProductVisual';

const colorMap = {
  blue: 'from-brand-blue/20 to-brand-blue/5 border-brand-blue/20',
  cyan: 'from-brand-cyan/20 to-brand-cyan/5 border-brand-cyan/20',
  teal: 'from-brand-teal/20 to-brand-teal/5 border-brand-teal/20',
  green: 'from-brand-green/20 to-brand-green/5 border-brand-green/20',
};

export default function ProductCard({ product }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-border-light bg-white overflow-hidden card-hover">
      <div className={`p-6 bg-gradient-to-br ${colorMap[product.color] || colorMap.blue}`}>
        <ProductVisual name={product.name} color={product.color} />
      </div>
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="brand">{product.category}</Badge>
        </div>
        <h3 className="text-xl font-bold text-navy-900">{product.name}</h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">{product.shortDescription}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.features.slice(0, 3).map((feature) => (
            <span key={feature} className="text-xs text-slate-500 bg-surface-alt px-2 py-1 rounded-md">{feature}</span>
          ))}
        </div>
        <Link
          href={`/products/${product.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-blue hover:text-brand-cyan transition-colors group/link"
        >
          Explore Product
          <AnimatedArrow className="group-hover/link:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
