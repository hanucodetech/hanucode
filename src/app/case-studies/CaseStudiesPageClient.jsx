'use client';

import { useState } from 'react';
import Container from '@/components/common/Container';
import CaseStudyCard from '@/components/cards/CaseStudyCard';
import { caseStudyFilters } from '@/data/caseStudies';

export default function CaseStudiesPageClient({ caseStudies }) {
  const [industry, setIndustry] = useState('All');
  const [technology, setTechnology] = useState('All');
  const [solutionType, setSolutionType] = useState('All');

  const filtered = caseStudies.filter((cs) => {
    const matchIndustry = industry === 'All' || cs.industry === industry;
    const matchTech = technology === 'All' || cs.technologies.some((t) => t.includes(technology));
    const matchSolution = solutionType === 'All' || cs.solutionType === solutionType;
    return matchIndustry && matchTech && matchSolution;
  });

  const FilterGroup = ({ label, options, value, onChange }) => (
    <div>
      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 rounded-lg border border-border-light bg-white text-sm text-navy-900"
        aria-label={`Filter by ${label}`}
      >
        {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </div>
  );

  return (
    <section className="section-padding bg-surface">
      <Container>
        <div className="grid sm:grid-cols-3 gap-4 mb-10 p-6 rounded-2xl border border-border-light bg-white">
          <FilterGroup label="Industry" options={caseStudyFilters.industries} value={industry} onChange={setIndustry} />
          <FilterGroup label="Technology" options={caseStudyFilters.technologies} value={technology} onChange={setTechnology} />
          <FilterGroup label="Solution Type" options={caseStudyFilters.solutionTypes} value={solutionType} onChange={setSolutionType} />
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {filtered.map((cs) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-slate-500 py-12">No case studies match your filters.</p>
        )}
      </Container>
    </section>
  );
}
