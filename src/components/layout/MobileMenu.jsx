'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainNavigation } from '@/data/navigation';
import Button from '@/components/common/Button';

export default function MobileMenu({ isOpen, onClose }) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <div className="fixed inset-0 bg-navy-900/50 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <nav className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-xl overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-lg font-bold text-navy-900">Menu</span>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-surface-alt transition-colors"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="space-y-1">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    pathname === item.href || pathname.startsWith(item.href + '/')
                      ? 'bg-brand-blue/10 text-brand-blue'
                      : 'text-slate-700 hover:bg-surface-alt hover:text-navy-900'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-6 border-t border-border-light">
            <Button href="/contact" variant="gradient" size="lg" className="w-full group" showArrow onClick={onClose}>
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
