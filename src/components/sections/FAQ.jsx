'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';

export default function FAQ({ faqs, title = 'Frequently Asked Questions', description }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section-padding bg-white">
      <Container size="narrow">
        <SectionHeading title={title} description={description} />
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border-light rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-surface-alt transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-navy-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
