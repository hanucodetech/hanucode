import React from 'react';
import { Helmet } from 'react-helmet-async';
import logo from '../../assets/hanulogo.svg';
import Career from '../../component/Careers/Career';

const Careers = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HanuCode",
    alternateName:
      "hanucode, hanu code, hancode, han code, huncode, code, hanu, han, hainucode, hanucodes, hanu codes, HanuCode, huncode",
    url: "https://www.hanucode.com",
    logo: `${window.location.origin}${logo}`,  // Corrected line
    sameAs: [
      "https://www.linkedin.com/company/hanu-code",
      "https://www.instagram.com/hanucode",
      "https://m.facebook.com/hanucode",
      "https://www.twitter.com/hanucode",
    ],
    description:
      "HanuCode specializes in software development, web development, app development, web design, UI/UX, SEO, and business consulting services. We empower businesses in Chandigarh and Akbarpur Ambedkar Nagar to succeed with our innovative solutions.",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Sco. 52, Sector 82, JLPL Industrial Area",
        addressLocality: "Sahibzada Ajit Singh Nagar",
        addressRegion: "Mohali",
        postalCode: "140308",
        addressCountry: "India",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Rampur Nonsila, Maharua Road Dostpur",
        addressLocality: "Akbarpur Ambedkar Nagar",
        addressRegion: "UP",
        postalCode: "224231",
        addressCountry: "India",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7905796216",
      contactType: "Customer Support",
    },
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <Helmet>
        <title>Careers at HanuCode - Join Our Team</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at HanuCode. Join our team and help businesses in Chandigarh and Akbarpur Ambedkar Nagar thrive with innovative software, web, and app development solutions."
        />
        <meta
          name="keywords"
          content="HanuCode careers, frontend developer jobs, backend development jobs, software development jobs, web development jobs, UI/UX jobs, app development jobs, job opportunities in Chandigarh, jobs in Akbarpur Ambedkar Nagar, HanuCode job openings, join HanuCode team"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Careers at HanuCode - Join Our Team" />
        <meta
          property="og:description"
          content="Looking for career opportunities? Explore job openings at HanuCode and join our team to drive innovation in software development, web design, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hanucode.com/career" />
        <meta property="og:image" content={`${window.location.origin}${logo}`} />

        {/* Add the JSON-LD schema inside the Helmet */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <div className="z-10 relative">
        <Career />
      </div>
    </div>
  );
};

export default Careers;
