import Link from 'next/link';
import { getIcon } from '@/lib/icons';
import AnimatedArrow from '@/components/common/AnimatedArrow';

export default function ServiceCard({ service }) {
  const Icon = getIcon(service.icon);

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block p-6 rounded-2xl border border-border-light bg-white card-hover"
    >
      <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4 group-hover:bg-brand-blue/20 transition-colors">
        <Icon className="h-6 w-6 text-brand-blue" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold text-navy-900">{service.title}</h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{service.shortDescription || service.description}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-blue group-hover:text-brand-cyan transition-colors">
        Learn more
        <AnimatedArrow className="group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
