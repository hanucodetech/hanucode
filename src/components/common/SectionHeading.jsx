import Badge from './Badge';

export default function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignments = {
    center: 'text-center mx-auto',
    left: 'text-left',
  };

  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignments[align]} ${className}`}>
      {badge && (
        <Badge variant="brand" className="mb-4">
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
