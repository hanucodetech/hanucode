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
    logo: `${window.location.origin}${logo}`,
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
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development Services",
          description: "Custom web development, responsive design, frontend and backend solutions by HanuCode.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "App Development Services",
          description: "iOS, Android, and cross-platform app development by HanuCode.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Graphic Design Services",
          description: "Creative graphic design, branding, logo design, and UI/UX solutions by HanuCode.",
        },
      },
    ],
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <Helmet>
        <title>About Us - HanuCode | Your Trusted Technology Partner</title>
        <meta
          name="description"
          content="Learn more about HanuCode, a leading provider of web development, application development, and digital solutions for businesses. Discover our mission, values, and expertise in custom development."
        />
        <meta
          name="keywords"
          content="HanuCode, web development, app development, graphic design, UI/UX, digital solutions, software development, business solutions, custom development, mobile app development, Hanu Code services"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Us - HanuCode" />
        <meta
          property="og:description"
          content="HanuCode offers expert web, app, and graphic design development services. Learn more about our journey, services, and what drives our success in empowering businesses."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hanucode.com/us" />
        <meta property="og:image" content={`${window.location.origin}${logo}`} />

        {/* Additional service and location-based metadata */}
        <meta
          name="keywords"
          content="HanuCode web development services, HanuCode app development, custom website development, responsive web design, frontend development, backend development, iOS app development, Android app development, graphic design HanuCode, UI/UX design, branding services, web development near me, app development near me"
        />
        <meta
          name="description"
          content="HanuCode offers web development, app development, and graphic design services, including frontend, backend, responsive design, mobile apps, and custom solutions for businesses."
        />

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
