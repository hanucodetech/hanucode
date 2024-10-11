import React from "react";

const Mainfaq = () => {
  const toggleAnswer = (index) => {
    const answer = document.getElementById(`answer${index}`);
    const arrow = document.getElementById(`arrow${index}`);
    if (answer.style.display === "none" || answer.style.display === "") {
      answer.style.display = "block";
      arrow.style.transform = "rotate(0deg)";
    } else {
      answer.style.display = "none";
      arrow.style.transform = "rotate(-180deg)";
    }
  };

  return (
    <section class="bg-[#1D1D1D] text-gray-100 py-32 min-h-screen">
      <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 class="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div class="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <details>
            <summary class="py-2 outline-none cursor-pointer focus:underline">
              What is SEO, and why is it important for my business?
            </summary>
            <div class="px-4 pb-4">
              <p>
                SEO (Search Engine Optimization) is the process of optimizing
                your website to rank higher in search engine results, making it
                easier for potential customers to find you. It drives organic
                traffic, increases brand visibility, and ultimately boosts
                sales.
              </p>
            </div>
          </details>
          <details>
            <summary class="py-2 outline-none cursor-pointer focus:underline">
              How long does it take to see results from SEO?
            </summary>
            <div class="px-4 pb-4">
              <p>
                SEO is a long-term strategy. While some improvements can be seen
                within a few months, significant results often take 6 to 12
                months, depending on your industry, competition, and the
                strategies implemented.
              </p>
            </div>
          </details>
          <details>
            <summary class="py-2 outline-none cursor-pointer focus:underline">
              How do you determine which keywords to target?
            </summary>
            <div class="px-4 pb-4">
              <p>
                Our team conducts thorough keyword research, analyzing search
                volume, competition, and relevance to your business. We use a
                mix of tools and industry insights to identify the best keywords
                that will attract qualified traffic.
              </p>
            </div>
          </details>
          <details>
            <summary class="py-2 outline-none cursor-pointer focus:underline">
              Will my website be penalized for SEO practices?
            </summary>
            <div class="px-4 pb-4">
              <p>
                No! We follow ethical SEO practices (white-hat SEO) that comply
                with search engine guidelines. Our focus is on building
                sustainable strategies that improve your ranking without risking
                penalties.
              </p>
            </div>
          </details>
          <details>
            <summary class="py-2 outline-none cursor-pointer focus:underline">
              Can you guarantee top rankings on Google?
            </summary>
            <div class="px-4 pb-4">
              <p>
                While we cannot guarantee specific rankings due to the
                ever-changing nature of search algorithms, we commit to using
                proven strategies to improve your visibility and rankings over
                time.
              </p>
            </div>
          </details>
          <details>
            <summary class="py-2 outline-none cursor-pointer focus:underline">
              How do you measure SEO success?
            </summary>
            <div class="px-4 pb-4">
              <p>
                We measure success through various metrics, including organic
                traffic, keyword rankings, conversion rates, and engagement
                metrics. We provide regular reports to keep you informed of our
                progress and adjustments.
              </p>
            </div>
          </details>
          <details>
            <summary class="py-2 outline-none cursor-pointer focus:underline">
              Do you provide local SEO services?
            </summary>
            <div class="px-4 pb-4">
              <p>
                Yes, we specialize in local SEO to help businesses attract
                customers in their geographic area. This includes optimizing
                your Google My Business profile, local citations, and targeted
                local keywords.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Mainfaq;
