export default function TechnologyCard({ tech }) {
  return (
    <div className="p-4 rounded-xl border border-border-light bg-white hover:border-brand-cyan/30 hover:shadow-md transition-all duration-200">
      <h4 className="font-semibold text-navy-900">{tech.name || tech}</h4>
      {tech.description && (
        <p className="mt-1 text-sm text-slate-600">{tech.description}</p>
      )}
    </div>
  );
}
