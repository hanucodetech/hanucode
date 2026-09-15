# HanuCode — Software Company Website

> **Building Ideas into Software**

HanuCode is a modern software and technology company website designed to present the company's SaaS products, cybersecurity solutions, software development capabilities, technology consulting services, and engineering portfolio.

The website is built with a strong focus on **professional B2B presentation, enterprise UX, SEO, performance, accessibility, and conversion optimization**.

---

## 🚀 Project Overview

This repository contains the **frontend-only implementation** of the HanuCode company website.

The website is designed to give HanuCode a professional software-company identity rather than a traditional freelancer or small agency appearance.

It presents:

- SaaS Products
- Cybersecurity Solutions
- Custom Software Development
- AI & Automation
- Cloud & DevOps
- Technology Consulting
- Industry Solutions
- Case Studies / Portfolio
- Technology Stack
- Security Practices
- Resources / Blog
- Careers
- Contact & Business Enquiries

The current implementation uses **mock/local data** and does not include a backend or database.

---

## 🎯 Goals

The primary goals of the website are to:

- Establish HanuCode as a professional technology company
- Showcase software products and solutions
- Present technical capabilities and expertise
- Build trust with potential B2B and enterprise clients
- Showcase completed projects through case studies
- Generate business enquiries and leads
- Provide a strong SEO foundation
- Deliver a fast and responsive user experience
- Create a scalable frontend architecture for future development

---

## 🛠️ Tech Stack

### Frontend

- Next.js
- React.js
- JavaScript
- Tailwind CSS

### UI & UX

- Responsive Design
- Modern B2B SaaS UI
- Enterprise UX patterns
- Reusable components
- Micro-interactions
- Accessible interface
- Mobile-first approach

### Icons

- Lucide React

### Data

- Local mock data
- No backend
- No database
- No external API dependency

---

## 📁 Project Structure

```text
src/
│
├── app/
│   ├── layout.js
│   ├── page.js
│   │
│   ├── about/
│   │   └── page.js
│   │
│   ├── products/
│   │   ├── page.js
│   │   └── [slug]/
│   │       └── page.js
│   │
│   ├── services/
│   │   ├── page.js
│   │   └── [slug]/
│   │       └── page.js
│   │
│   ├── solutions/
│   │   └── page.js
│   │
│   ├── case-studies/
│   │   ├── page.js
│   │   └── [slug]/
│   │       └── page.js
│   │
│   ├── technology/
│   │   └── page.js
│   │
│   ├── security/
│   │   └── page.js
│   │
│   ├── resources/
│   │   ├── page.js
│   │   └── [slug]/
│   │       └── page.js
│   │
│   ├── careers/
│   │   └── page.js
│   │
│   ├── contact/
│   │   └── page.js
│   │
│   ├── privacy-policy/
│   │   └── page.js
│   │
│   ├── terms-of-service/
│   │   └── page.js
│   │
│   ├── sitemap.js
│   └── robots.js
│
├── components/
│   ├── layout/
│   ├── common/
│   ├── cards/
│   ├── sections/
│   └── forms/
│
├── data/
│   ├── products.js
│   ├── services.js
│   ├── solutions.js
│   ├── caseStudies.js
│   ├── technologies.js
│   ├── testimonials.js
│   ├── blogPosts.js
│   ├── careers.js
│   └── faqs.js
│
├── lib/
│
└── styles/
│
public/
└── images/
    ├── brand/
    ├── products/
    ├── case-studies/
    ├── blog/
    └── technologies/