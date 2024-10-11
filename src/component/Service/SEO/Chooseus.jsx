import React from "react";

const Chooseus = () => {
  return (
    <div className="bg-black">
      <h1 className="mb-12 mt-10 text-4xl text-white font-bold leading-tight text-center sm:text-5xl">
        Why Choose Us?
      </h1>
      <div className="bg-black">
      <div className="container mx-auto max-w-5xl flex gap-12 flex-wrap items-start justify-center md:justify-between">
        <div className="grid gap-4 mb-4 justify-items-center text-center md:flex-1">
          <div className="rounded-full border-8 border-amber-400 p-4">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-14 h-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              ></path>
            </svg>
          </div>
          <h3 className="text-3xl text-white font-bold">Proven Results</h3>
          <p className="text-white">
            Our track record speaks for itself, with numerous clients achieving
            significant improvements in their online visibility.
          </p>
        </div>
        
        <div className="grid gap-4 mb-4 justify-items-center text-center md:flex-1">
          <div className="rounded-full border-8 border-amber-400 p-4">
          <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  className="w-14 h-14"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 14c4.418 0 8 3.582 8 8H4c0-4.418 3.582-8 8-8zM12 12c-2.5 0-4.5-2-4.5-4.5S9.5 3 12 3s4.5 2 4.5 4.5S14.5 12 12 12z"
  />
</svg>

          </div>
          <h3 className="text-3xl text-white font-bold">Personalized Approach</h3>
          <p className="text-white">
            We treat every client uniquely, tailoring our services to meet your
            specific needs.
          </p>
        </div>
        
        <div className="grid gap-4 mb-4 justify-items-center text-center md:flex-1">
  <div className="rounded-full border-8 border-amber-400 p-4">
    {/* Replace the previous SVG here */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-14 h-14"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 8a3 3 0 106 0 3 3 0 00-6 0zm8 0a3 3 0 106 0 3 3 0 00-6 0zM5 12a6 6 0 00-6 6v2h18v-2a6 6 0 00-6-6H5z"
      />
    </svg>
  </div>
  <h3 className="text-3xl text-white font-bold">Expert Team</h3>
  <p className="text-white">
    Our dedicated SEO specialists are always on hand to provide support
    and insights.
  </p>
</div>

      </div>
      </div>
    </div>
  );
};

export default Chooseus;
