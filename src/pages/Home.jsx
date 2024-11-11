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
    alternateName: "hanu code, Hanu Code, HanuCode web development, HanuCode app development, Hanu Code graphic design, Hanu Code website",
    url: "https://www.hanucode.com",
    logo: `${window.location.origin}${logo}`,
    sameAs: [
      "https://www.linkedin.com/company/hanu-code",
      "https://www.instagram.com/hanucode",
      "https://m.facebook.com/hanucode",
      "https://www.twitter.com/hanucode",
    ],
    description: "HanuCode specializes in software development, web development, app development, web design, UI/UX, SEO, and business consulting services. We empower businesses with innovative digital solutions.",
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
    potentialAction: [
      {
        "@type": "WebSite",
        name: "About Us",
        url: "https://www.hanucode.com/us",
      },
      {
        "@type": "WebSite",
        name: "Services",
        url: "https://www.hanucode.com/service",
      },
      {
        "@type": "WebSite",
        name: "Portfolio",
        url: "https://www.hanucode.com/work",
      },
      {
        "@type": "WebSite",
        name: "Web Development",
        url: "https://www.hanucode.com//web-development",
      },
    ],
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <Helmet>
        {/* Title updated for brand and service-based searches */}
        <title>
          HanuCode - Best Web & App Development & Graphic Design
        </title>
        <meta
          name="description"
          content="HanuCode offers web development, app development, and graphic design services in Chandigarh and Akbarpur Ambedkar Nagar. Get custom solutions for your business."
        />
        <meta name="robots" content="index, follow" />

        {/* Updated keywords for brand name, service-based, location-based, and problem-based searches */}
        <meta
          name="keywords"
          content="HanuCode, Hanu Code, HanuCode web development, HanuCode app development, Hanu Code graphic design, HanuCode website, web development services, app development services, custom website development,Hanu code mobile app development, graphic design services, web design, SEO-friendly web development, React.js development, Node.js developers, Chandigarh, Akbarpur Ambedkar Nagar, fast-loading websites, e-commerce development, small business web development, HanuCode customer reviews"
        />

        {/* Open Graph Metadata */}
        <meta
          property="og:title"
          content="HanuCode - Web, App Development & Graphic Design in Chandigarh & Akbarpur Ambedkar Nagar"
        />
        <meta
          property="og:description"
          content="Get expert web development, app development, and graphic design services at HanuCode. Serving businesses in Chandigarh and Akbarpur Ambedkar Nagar."
        />
        <meta property="og:url" content="https://hanucode.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${window.location.origin}${logo}`} />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="HanuCode - Web, App Development & Graphic Design | Chandigarh & Akbarpur Ambedkar Nagar"
        />
        <meta
          name="twitter:description"
          content="HanuCode provides top-tier web development, app development, and graphic design solutions for businesses. Serving Chandigarh and Akbarpur Ambedkar Nagar."
        />
        <meta name="twitter:image" content={`${window.location.origin}${logo}`} />

        {/* JSON-LD structured data */}
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
