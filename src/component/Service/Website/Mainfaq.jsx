

import React from 'react';

const Mainfaq = () => {
  const toggleAnswer = (index) => {
    const answer = document.getElementById(`answer${index}`);
    const arrow = document.getElementById(`arrow${index}`);
    if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'block';
      arrow.style.transform = 'rotate(0deg)';
    } else {
      answer.style.display = 'none';
      arrow.style.transform = 'rotate(-180deg)';
    }
  };

  return (
    <section class="bg-[#1D1D1D] text-gray-100 py-32 min-h-screen">
  <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
    <h2 class="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2>
    <div class="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">What is the website development process?</summary>
        <div class="px-4 pb-4">
          <p>Our process typically includes discovery, design, development, testing, and launch. We prioritize collaboration and feedback to ensure the final product aligns with your vision.
</p>
        </div>
      </details>
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">How long does it take to develop a website? </summary>
        <div class="px-4 pb-4">
          <p>Project timelines vary based on complexity, but most websites are completed within 4 to 6 weeks. We’ll provide a detailed timeline during our initial consultation.</p>
        </div>
      </details>
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">Will my website be mobile-friendly?</summary>
        <div class="px-4 pb-4">
          <p>Absolutely! All our websites are designed to be fully responsive, ensuring a seamless experience across all devices.</p>
        </div>
      </details>
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">Can I update my website after it’s launched?</summary>
        <div class="px-4 pb-4">
          <p>Yes, you will have full access to your website’s content management system, allowing you to make updates as needed.</p>
        </div>
      </details>
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">What if I need help after my website is live?</summary>
        <div class="px-4 pb-4">
          <p>We offer ongoing maintenance and support packages, including updates, security checks, and troubleshooting assistance.

</p>
        </div>
      </details>
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">How do you ensure my website is secure? </summary>
        <div class="px-4 pb-4">
          <p>We implement best practices for website security, including SSL certificates, regular updates, and security plugins to protect against threats.

</p>
        </div>
      </details>
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">What makes your website development services unique?</summary>
        <div class="px-4 pb-4">
          <p>Our personalized approach, commitment to quality, and focus on understanding your business goals set us apart. We tailor each project to meet your specific needs.

</p>
        </div>
      </details>
    </div>
  </div>
</section>

  );
};

export default Mainfaq;
