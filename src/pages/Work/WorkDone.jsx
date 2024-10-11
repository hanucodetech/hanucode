import React from 'react';
import { Helmet } from 'react-helmet-async';
import logo from '../../assets/hanulogo.svg';
import Completd from '../../component/CompletdWork/Completd';

const WorkDone = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HanuCode",
    alternateName: "hanucode, hanu code, hancode, han code, huncode, code, hanu, han, hainucode, hanucodes, hanu codes, HanuCode, huncode",
    url: "https://www.hanucode.com",
    logo: `${window.location.origin}${logo}`,
    sameAs: [
      "https://www.linkedin.com/company/hanucode",
      "https://www.instagram.com/hanucode",
      "https://m.facebook.com/61554289650556/",
      "https://www.twitter.com/hanucode",
    ],
    description: "HanuCode specializes in software development, web development, app development, web design, UI/UX, SEO, and business consulting services. We empower businesses in Chandigarh and Akbarpur Ambedkar Nagar to succeed with our innovative solutions.",
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
        <title>PortFolio - HanuCode | Your Trusted Technology Partner</title>
        <meta
          name="description"
          content="Explore the successful projects completed by HanuCode, a leading provider of web development, application development, and digital solutions."
        />
        <meta
          name="keywords"
          content="HanuCode, completed projects, web development, application development, digital solutions"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Portfolio - HanuCode" />
        <meta
          property="og:description"
          content="Discover the successful projects that showcase HanuCode's expertise in web and application development."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hanucode.com/work" />

        {/* Add the JSON-LD schema inside the Helmet */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <div className="z-10 relative">
        <Completd />
      </div>
    </div>
  );
};

export default WorkDone;
