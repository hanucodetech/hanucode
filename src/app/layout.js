import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { organizationSchema, websiteSchema, JsonLd } from '@/lib/structured-data';
import { SITE_CONFIG } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'HanuCode | Building Ideas into Software',
    template: '%s | HanuCode',
  },
  description: SITE_CONFIG.description,
  keywords: ['software development', 'SaaS', 'cybersecurity', 'AI automation', 'cloud DevOps', 'technology consulting'],
  authors: [{ name: 'HanuCode' }],
  creator: 'HanuCode',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: 'HanuCode | Building Ideas into Software',
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HanuCode | Building Ideas into Software',
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans min-h-screen flex flex-col">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
