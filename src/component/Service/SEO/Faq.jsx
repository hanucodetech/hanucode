
import React, { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    { question: " On-Page SEO" },
    { question: " Off-Page SEO " },
    { question: " Technical SEO " },
    { question: "Local SEO" },
    { question: " E-commerce SEO" },
    { question: "  Content SEO" },
    { question: "Mobile SEO" },
    { question: " Voice Search SEO" },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Types of SEO services  We Offer
          </h2>
        </div>
        <div className="flex flex-wrap justify-between mt-8">
          <div className="w-full md:w-1/2 px-2">
            {faqData.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50 mb-4"
              >
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="flex text-lg font-semibold text-black">
                    {item.question}
                  </span>
                </button>
               
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2 px-2">
            {faqData.slice(4).map((item, index) => (
              <div
                key={index + 4} // Adjust the key for the second half
                className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50 mb-4"
              >
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                  onClick={() => toggleFAQ(index + 4)} // Adjust index for the second half
                >
                  <span className="flex text-lg font-semibold text-black">
                    {item.question}
                  </span>
                </button>
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
