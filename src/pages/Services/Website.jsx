import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../component/Navbar/Navbar";
import Services from "../../component/Service/Services";
import Footer from "../../component/Footer/Footer";
import Web from "../../component/Service/Website/Web";
import Tech from "../../component/Service/Website/Tech";
import Faq from "../../component/Service/Website/Faq";
import Mainfaq from "../../component/Service/Website/Mainfaq";
import logo from "../../assets/hanulogo.svg";

const Website = () => {
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
        <title>Website Development - HanuCode | Custom Web Solutions</title>
        <meta
          name="description"
          content="Get custom web development services with HanuCode. We offer dynamic, responsive websites built to empower your business and boost online presence."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="website development, custom websites, responsive design, web development services, HanuCode"
        />
        <meta property="og:title" content="Website Development - HanuCode" />
        <meta
          property="og:description"
          content="HanuCode specializes in building cutting-edge websites that drive business success. Learn more about our web development services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hanucode.com/web-development" />
        {/* Add the JSON-LD schema inside the Helmet */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <div className="z-10 relative">
        <Web />
        <Tech />
        <Faq />
        <Mainfaq />
      </div>
    </div>
  );
};

export default Website;
