import { getIcon } from '@/lib/icons';

export default function IndustryCard({ industry }) {
  const Icon = getIcon(industry.icon);

  return (
    <div className="p-6 rounded-2xl border border-border-light bg-white card-hover">
      <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center mb-4">
        <Icon className="h-5 w-5 text-brand-teal" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold text-navy-900">{industry.title}</h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{industry.description}</p>
    </div>
  );
}
