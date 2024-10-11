import React from "react";
import Team from "./Team";
import Feature from "./Feature";

const Vision = () => {
  return (
    <section class="bg-white py-16">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-gray-900">Our Vision</h2>
        <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                />
              </svg>
            </div>
            <div class="mt-5">
              <h3 class="text-lg font-medium text-gray-900">Mission</h3>
              <p class="mt-2 text-base text-gray-500">
                We aim to leverage innovative technologies to empower businesses
                and improve the quality of life for individuals. Our mission is
                to deliver high-quality solutions that drive success and foster
                collaboration in every project we undertake.
              </p>
            </div>
          </div>
          <div>
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            </div>
            <div class="mt-5">
              <h3 class="text-lg font-medium text-gray-900">Values</h3>
              <p class="mt-2 text-base text-gray-500">
                <ul>
                  <li>
                    We believe in being honest and transparent in all our
                    dealings. Trust is the foundation of our relationships with
                    clients and team members.
                  </li>
                  <li>
                    We value teamwork and open communication. By working
                    together, we can achieve more and innovate better solutions.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div>
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div class="mt-5">
              <h3 class="text-lg font-medium text-gray-900">Vision</h3>
              <p class="mt-2 text-base text-gray-500">
                We envision a future where technology seamlessly integrates into
                everyday life, solving critical challenges and enhancing human
                experiences. Our goal is to be a leader in creating solutions
                that promote sustainability, inclusivity, and progress for all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <div>
      <section class="pt-10 overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <h2 class="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                Hey 👋 We are team
                <br class="block sm:hidden" /> Berrybraintech
              </h2>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                At Berrybraintech, we are dedicated to providing innovative
                solutions that empower businesses and enhance user experiences.
                Our team of experts is committed to excellence and driven by a
                passion for technology and creativity.
              </p>

              <p class="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                <span class="relative inline-block">
                  <span class="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                  <span class="relative"> Have a question? </span>
                </span>
                <br class="block sm:hidden" />
                Ask me{" "}
                <a
                  href="#"
                  title=""
                  class="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
                >
                  
                  <a
                    href="tel:7905796216"
                    className="inline-block px-6 py-2 bg-pink-600 text-white rounded-full"
                  >
                    Book a Call
                  </a>
                </a>
              </p>
            </div>

            <div class="relative">
              <img
                class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt=""
              />

              <img
                class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <Vision />
      <Team />
      <Feature/>
    </div>
  );
};

export default About;
