import React from 'react';
import { Helmet } from 'react-helmet-async';
import Services from '../../component/Service/Services';
import logo from '../../assets/hanulogo.svg';

const Serv = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HanuCode",
    alternateName: "hanucode, hanu code, hancode, han code, huncode, code, hanu, han, hainucode, hanucodes, hanu codes, HanuCode, huncode",
    url: "https://www.hanucode.com",
    logo: `${window.location.origin}${logo}`,
    sameAs: [
      "https://www.linkedin.com/company/hanu-code",
      "https://www.instagram.com/hanucode",
      "https://m.facebook.com/hanucode",
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
        <title>Our Services - HanuCode | Web Development, App Development & More</title>
        <meta
          name="description"
          content="Explore the range of services offered by HanuCode, including web development, mobile application development, SEO, and digital marketing solutions."
        />
        <meta
          name="keywords"
          content="services, web development, app development, SEO, digital marketing, HanuCode"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Our Services - HanuCode" />
        <meta
          property="og:description"
          content="Discover the wide array of services HanuCode offers, from custom web development to innovative mobile app solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hanucode.com/service" />
        {/* Add the JSON-LD schema inside the Helmet */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <div className="z-10 relative">
        <Services />
      </div>
    </div>
  );
};

export default Serv;
