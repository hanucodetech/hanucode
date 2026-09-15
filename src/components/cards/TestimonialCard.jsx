import { Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <blockquote className="flex flex-col p-6 md:p-8 rounded-2xl border border-border-light bg-white h-full">
      <Quote className="h-8 w-8 text-brand-cyan/40 mb-4" aria-hidden="true" />
      <p className="text-slate-600 leading-relaxed flex-1">&ldquo;{testimonial.quote}&rdquo;</p>
      <footer className="mt-6 pt-6 border-t border-border-light">
        <cite className="not-italic">
          <p className="font-semibold text-navy-900">{testimonial.role}</p>
          <p className="text-sm text-slate-500">{testimonial.company}</p>
        </cite>
      </footer>
    </blockquote>
  );
}
