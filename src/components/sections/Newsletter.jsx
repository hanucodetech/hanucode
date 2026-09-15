'use client';

import { useState } from 'react';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section className="section-padding bg-surface">
      <Container size="narrow">
        <div className="text-center p-8 md:p-12 rounded-2xl border border-border-light bg-white">
          <h2 className="text-2xl font-bold text-navy-900">Stay Updated</h2>
          <p className="mt-2 text-slate-600">Get insights on software engineering, security, and technology.</p>
          {submitted ? (
            <p className="mt-6 text-brand-teal font-medium">Thank you for subscribing!</p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 focus:border-brand-cyan"
                aria-label="Email address"
                aria-invalid={!!error}
              />
              <Button type="submit" variant="primary">Subscribe</Button>
              {error && <p className="text-sm text-red-500 sm:col-span-2" role="alert">{error}</p>}
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
