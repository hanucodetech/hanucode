import Link from 'next/link';
import { X } from 'lucide-react';
import { announcement } from '@/data/navigation';

export default function AnnouncementBar({ onDismiss }) {
  return (
    <div className="bg-navy-900 text-white text-sm" role="banner">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-center gap-2 relative">
        <p className="text-center pr-8">
          <span className="text-slate-300">{announcement.text}</span>{' '}
          <Link
            href={announcement.link}
            className="font-medium text-brand-cyan hover:text-white transition-colors underline underline-offset-2"
          >
            {announcement.linkText}
          </Link>
        </p>
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="absolute right-4 p-1 rounded hover:bg-white/10 transition-colors"
            aria-label="Dismiss announcement"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
