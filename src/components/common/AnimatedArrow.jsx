import { ArrowRight } from 'lucide-react';

export default function AnimatedArrow({ className = '' }) {
  return (
    <ArrowRight
      className={`h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 ${className}`}
      aria-hidden="true"
    />
  );
}
