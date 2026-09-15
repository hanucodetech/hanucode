import Link from 'next/link';
import Badge from '@/components/common/Badge';
import AnimatedArrow from '@/components/common/AnimatedArrow';

export default function CaseStudyCard({ caseStudy }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-border-light bg-white p-6 card-hover">
      <div className="flex items-center gap-2 mb-4">
        <Badge variant="navy">{caseStudy.industry}</Badge>
        <Badge>{caseStudy.solutionType}</Badge>
      </div>
      <h3 className="text-xl font-bold text-navy-900">{caseStudy.title}</h3>
      <div className="mt-4 space-y-3 flex-1">
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Challenge</p>
          <p className="mt-1 text-sm text-slate-600 line-clamp-2">{caseStudy.challenge}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Result</p>
          <p className="mt-1 text-sm font-medium text-brand-teal">{caseStudy.result}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {caseStudy.technologies.slice(0, 4).map((tech) => (
          <span key={tech} className="text-xs text-slate-500 bg-surface-alt px-2 py-1 rounded-md">{tech}</span>
        ))}
      </div>
      <Link
        href={`/case-studies/${caseStudy.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-blue hover:text-brand-cyan transition-colors group/link"
      >
        Read Case Study
        <AnimatedArrow className="group-hover/link:translate-x-1" />
      </Link>
    </article>
  );
}
