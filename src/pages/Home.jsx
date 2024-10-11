import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../component/Hero/Hero";
import Work from "../component/Work/Work";
import Cards from "../component/Work/Cards";
import Product from "../component/Cards/Product";
import Step from "../component/Choose/Step";
import Test from "../component/Testinomial/Test";
import Contact from "../component/contact/Contact";
import LiveProject from "../component/Cards/LiveProject";
import logo from "../assets/hanulogo.svg";

const Home = () => {
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
        <title>
          HanuCode - Best Software, Web, and App Development Company in
          Chandigarh & Akbarpur Ambedkar Nagar | Empower Your Business
        </title>
        <meta
          name="description"
          content="HanuCode provides top-notch software development, web development, app development, UI/UX design, SEO, and business consulting services. Empower your business with our innovative solutions in Chandigarh and Akbarpur Ambedkar Nagar."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="best web design company, top software development company, app development, SEO services, business consulting, web development, mobile app development, UI/UX design, Mohali, Chandigarh, Akbarpur Ambedkar Nagar, hanucode, best software company, web design services, custom software development, top web development agency, HanuCode"
        />
        <meta
          property="og:title"
          content="HanuCode - Best Software, Web, and App Development Company in Chandigarh & Akbarpur Ambedkar Nagar | Empower Your Business"
        />
        <meta
          property="og:description"
          content="HanuCode offers premium services in software development, web development, app development, UI/UX, SEO, and business consulting to elevate your business."
        />
        <meta property="og:url" content="https://hanucode.com" />
        <meta property="og:type" content="website" />

        {/* Add the JSON-LD schema inside the Helmet */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <div className="z-10 relative">
        <Hero />
        <Work />
        <Cards />
        <Product />
        <Step />
        <LiveProject />
        <Test />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
