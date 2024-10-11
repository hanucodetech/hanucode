

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
        <summary class="py-2 outline-none cursor-pointer focus:underline">Which platforms do you develop for?</summary>
        <div class="px-4 pb-4">
          <p>We develop apps for both iOS and Android platforms, as well as cross-platform solutions.
</p>
        </div>
      </details>
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">What types of mobile apps do you create?</summary>
        <div class="px-4 pb-4">
          <p>We create native, hybrid, and cross-platform apps, tailored to meet your specific needs.</p>
        </div>
      </details>
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">How do you ensure app security?</summary>
        <div class="px-4 pb-4">
          <p>We implement best practices for security, including data encryption, secure APIs, and regular updates.</p>
        </div>
      </details>
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">Can you help with app design?</summary>
        <div class="px-4 pb-4">
          <p>Yes, we provide UI/UX design services to ensure your app is user-friendly and visually appealing.</p>
        </div>
      </details>
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">How do you handle app updates and maintenance?</summary>
        <div class="px-4 pb-4">
          <p>We offer ongoing maintenance services to keep your app updated with the latest features and security patches.

</p>
        </div>
      </details>
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">What is your development process?</summary>
        <div class="px-4 pb-4">
          <p>Our process includes requirement analysis, design, development, testing, and deployment, followed by maintenance.

</p>
        </div>
      </details>
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">How long does it take to develop an app?

</summary>
        <div class="px-4 pb-4">
          <p>The timeline varies based on complexity, but most apps take several weeks to a few months to develop.

</p>
        </div>
      </details>
    </div>
  </div>
</section>

  );
};

export default Mainfaq;
