import React from "react";
import { Helmet } from "react-helmet-async";
import Appli from "../../component/Service/App/Appli";
import Tech from "../../component/Service/App/Tech";
import Faq from "../../component/Service/App/Faq";
import Mainfaq from "../../component/Service/App/Mainfaq";
import logo from '../../assets/hanulogo.svg';

const Application = () => {
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
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <Helmet>
        <title>Application Development Services | HanuCode</title>
        <meta
          name="description"
          content="HanuCode offers expert application development services, creating robust and scalable mobile and web applications to help businesses grow and succeed."
        />
        <meta
          name="keywords"
          content="application development, mobile apps, web apps, app development services, HanuCode, hanucode, hanu code, scalable applications, custom app development, Chandigarh, Akbarpur Ambedkar Nagar"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Application Development Services | HanuCode" />
        <meta
          property="og:description"
          content="At HanuCode, we provide high-performance application development services for mobile and web platforms, tailored to your business needs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hanucode.com/app" />
        <meta property="og:image" content={`${window.location.origin}${logo}`} />

        {/* Add the JSON-LD schema inside the Helmet */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <div className="z-10 relative">
        <Appli />
        <Tech />
        <Faq />
        <Mainfaq />
      </div>
    </div>
  );
};

export default Application;
