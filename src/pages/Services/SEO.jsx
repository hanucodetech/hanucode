import React from 'react';
import { Helmet } from 'react-helmet-async';
import Seo from '../../component/Service/SEO/Seo';
import Chooseus from '../../component/Service/SEO/Chooseus';
import Stepseo from '../../component/Service/SEO/Stepseo';
import Faq from '../../component/Service/SEO/Faq';
import Mainfaq from '../../component/Service/SEO/Mainfaq';
import logo from '../../assets/hanulogo.svg';

const SEO = () => {
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
        streetAddress: "Sector 66, Near Sector 59 Metro Station",
        addressLocality: "Gautam Buddh Nagar",
        addressRegion: "Noida",
        postalCode: "201301",
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
    <div>
      <Helmet>
        <title>SEO Services - Boost Your Online Presence | HanuCode</title>
        <meta
          name="description"
          content="Leverage HanuCode's expert SEO services to enhance your search engine rankings, drive organic traffic, and improve your online presence. Tailored solutions for your business."
        />
        <meta
          name="keywords"
          content="SEO services, search engine optimization, organic traffic, HanuCode, online presence, improve SEO, digital marketing"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="SEO Services - Boost Your Online Presence | HanuCode" />
        <meta
          property="og:description"
          content="HanuCode offers expert SEO services to help businesses improve their online visibility and attract more organic traffic."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hanucode.com/seo" />
        <meta property="og:image" content={`${window.location.origin}${logo}`} />

        {/* Add the JSON-LD schema inside the Helmet */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <Seo />
      <Stepseo />
      <Chooseus />
      <Faq />
      <Mainfaq />
    </div>
  );
};

export default SEO;
