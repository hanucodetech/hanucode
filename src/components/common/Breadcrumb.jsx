import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
        {items.map((item, index) => (
          <li key={item.name} className="flex items-center gap-1">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
            )}
            {item.href && index < items.length - 1 ? (
              <Link
                href={item.href}
                className="hover:text-brand-blue transition-colors"
              >
                {item.name}
              </Link>
            ) : (
              <span className={index === items.length - 1 ? 'text-navy-900 font-medium' : ''}>
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
