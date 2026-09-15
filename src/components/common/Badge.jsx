export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-surface-alt text-slate-600 border-border-light',
    brand: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20',
    cyan: 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20',
    navy: 'bg-navy-900/10 text-navy-900 border-navy-900/20',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
