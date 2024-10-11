import React from 'react';
import { Helmet } from 'react-helmet-async';
import About from '../../component/About/About';
import logo from '../../assets/hanulogo.svg';


const Us = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HanuCode",
    alternateName:
      "hanucode, hanu code, hancode, han code, huncode, code, hanu, han, hainucode, hanucodes, hanu codes, HanuCode, huncode",
    url: "https://www.hanucode.com",
    logo: `${window.location.origin}${logo}`,  // Corrected line
    sameAs: [
      "https://www.linkedin.com/company/hanucode",
      "https://www.instagram.com/hanucode",
      "https://m.facebook.com/61554289650556/",
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
        <title>About Us - HanuCode | Your Trusted Technology Partner</title>
        <meta
          name="description"
          content="Learn more about hanucode, a leading provider of web development, application development, and digital solutions. Discover our mission, values, and commitment to empowering businesses."
        />
        <meta
          name="keywords"
          content="About HanuCode, Hanu Code, web development, business solutions, hanucode, hanu code, application development, han code, hancode, digital transformation"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Us - HanuCode" />
        <meta
          property="og:description"
          content="HanuCode offers expert web and application development services. Learn more about our journey and what drives our success."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hanucode.com/us" />

        {/* Add the JSON-LD schema inside the Helmet */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <div className="z-10 relative">
        <About />
      </div>
    </div>
  );
};

export default Us;
