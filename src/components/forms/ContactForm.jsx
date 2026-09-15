'use client';

import { useState } from 'react';
import Button from '@/components/common/Button';
import { CheckCircle } from 'lucide-react';

const serviceOptions = [
  'Software Development',
  'AI & Automation',
  'Cybersecurity',
  'Cloud & DevOps',
  'Technology Consulting',
  'SaaS Product Engineering',
];

const projectTypes = ['New Project', 'Modernization', 'Product Development', 'Consulting', 'Other'];
const budgetRanges = ['Under $25k', '$25k - $50k', '$50k - $100k', '$100k+', 'Not sure yet'];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', service: '', projectType: '', budget: '', message: '',
  });

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email address';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  if (submitted) {
    return (
      <div className="text-center py-12 px-6 rounded-2xl border border-brand-teal/30 bg-brand-teal/5">
        <CheckCircle className="h-12 w-12 text-brand-teal mx-auto mb-4" aria-hidden="true" />
        <h3 className="text-xl font-bold text-navy-900">Thank You for Reaching Out</h3>
        <p className="mt-2 text-slate-600">
          We&apos;ve received your message and will get back to you within one business day.
        </p>
      </div>
    );
  }

  const inputClass = (field) =>
    `w-full px-4 py-2.5 rounded-lg border ${errors[field] ? 'border-red-400' : 'border-border-light'} bg-white text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 focus:border-brand-cyan transition-colors`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-1.5">Name *</label>
          <input type="text" id="name" name="name" value={form.name} onChange={handleChange} className={inputClass('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
          {errors.name && <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-navy-900 mb-1.5">Company</label>
          <input type="text" id="company" name="company" value={form.company} onChange={handleChange} className={inputClass('company')} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-1.5">Email *</label>
          <input type="email" id="email" name="email" value={form.email} onChange={handleChange} className={inputClass('email')} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
          {errors.email && <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-navy-900 mb-1.5">Phone</label>
          <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} className={inputClass('phone')} />
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-5">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-navy-900 mb-1.5">Service</label>
          <select id="service" name="service" value={form.service} onChange={handleChange} className={inputClass('service')}>
            <option value="">Select a service</option>
            {serviceOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-navy-900 mb-1.5">Project Type</label>
          <select id="projectType" name="projectType" value={form.projectType} onChange={handleChange} className={inputClass('projectType')}>
            <option value="">Select type</option>
            {projectTypes.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-navy-900 mb-1.5">Budget</label>
          <select id="budget" name="budget" value={form.budget} onChange={handleChange} className={inputClass('budget')}>
            <option value="">Select range</option>
            {budgetRanges.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-1.5">Message *</label>
        <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} className={inputClass('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} />
        {errors.message && <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">{errors.message}</p>}
      </div>
      <Button type="submit" variant="gradient" size="lg" showArrow className="group w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}
