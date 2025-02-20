import React from "react";
import Step from "../../Choose/Step";
import mob from "../../../assets/mob.jpg";
const Appli = () => {
  return (
    <div>
      <section
        id="pricing"
        aria-label="Pricing"
        class="bg-slate-900 py-20 sm:py-32"
      >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl md:text-center">
            <h2 class="font-display text-3xl tracking-tight text-white sm:text-4xl">
              <span class="relative whitespace-nowrap">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 281 40"
                  class="absolute top-1/2 left-0 h-[1em] w-full fill-blue-400"
                  preserveAspectRatio="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
                  ></path>
                </svg>
                <span class="relative">Welcome to Our Mobile  </span>
              </span>
              Development .
            </h2>
            <p class="mt-4 text-lg text-slate-400">
              Crafting Digital Excellence : Your Vision, Our Innovation.
            </p>
          </div>
        </div>
      </section>
      <section class="overflow-hidden  py-8 sm:py-16">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div class="lg:pr-8 lg:pt-4">
              <div class="lg:max-w-lg">
                <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  <span className="text-blue-900 font-bold"> Mobile</span>{" "}
                  Development Company
                </h1>
                <p class="mt-6 text-lg leading-8 text-gray-600">
                  <b>
                    HanuCode - we excel in application development,
                    creating user-friendly and feature-rich apps tailored to
                    your specific needs. Our team combines creativity and
                    technical expertise to deliver solutions that not only
                    engage users but also drive business growth. Whether it’s a
                    website or an app, we’re dedicated to helping you make a
                    memorable first impression in the digital world. Let’s
                    transform your vision into reality!
                  </b>
                </p>
                <p class="mt-2 text-xl font-bold text-blue-900 tracking-tight text-gray-900 sm:text-2xl">
                  We’re a app design company with creative solutions
                </p>
                <p class="mt-6 text-lg leading-8 text-gray-600">
                  Your Digital Potential with HanuCode - It Solutions –
                  Your Premier App Development Partner. Stepping into the
                  digital realm or looking to elevate your online presence?
                  You've landed at the doorstep of India’s best website
                  development company. Your website is more than just a digital
                  space; it's your first impression on the world.
                </p>
              </div>
            </div>
            <img
              src={mob}
              alt="Product screenshot"
              class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width="2432"
              height="1442"
            />
          </div>
        </div>
      </section>

      {/* <div class="bg-white p-4">
        <h2 class="text-3xl text-center text-white font-bold mb-12">
          Project Completion Timeline
        </h2>
        <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
          <div class="flex md:contents flex-row-reverse">
            <div class="relative p-4 my-6 text-gray-800 bg-black rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
              <h3 class="text-lg text-white font-semibold lg:text-xl">
                Week 1: Project Kickoff
              </h3>
              <p class="mt-2 leading-6 text-white">
                Initial meetings with stakeholders to gather requirements and
                define project scope.
              </p>
              <span class="absolute text-sm text-black font-bold -top-5 left-2 whitespace-nowrap">
                Start Date: Day 1
              </span>
            </div>
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div class="flex items-center justify-center w-6 h-full">
                <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
              </div>
              <div class="absolute w-6 h-6 -mt-3 bg-black border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
          </div>

          <div class="flex md:contents">
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div class="flex items-center justify-center w-6 h-full">
                <div class="w-1 h-full bg-indigo-300"></div>
              </div>
              <div class="absolute w-6 h-6 -mt-3 bg-black border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
            <div class="relative p-4 my-6 text-gray-800 bg-black rounded-xl col-start-6 col-end-10 mr-auto">
              <h3 class="text-lg font-semibold text-white lg:text-xl">
                Week 2: Design Phase
              </h3>
              <p class="mt-2 leading-6 text-white">
                Create wireframes and prototypes based on the gathered
                requirements.
              </p>
              <span class="absolute text-sm text-black font-bold -top-5 left-2 whitespace-nowrap">
                Completion: Day 7
              </span>
            </div>
          </div>

          <div class="flex md:contents flex-row-reverse">
            <div class="relative p-4 my-6 text-gray-800 bg-black rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
              <h3 class="text-lg font-semibold text-white lg:text-xl">
                Week 3: Development
              </h3>
              <p class="mt-2 leading-6 text-white">
                Begin coding and implementing features based on the approved
                design.
              </p>
              <span class="absolute text-black font-bold text-sm  -top-5 left-2 whitespace-nowrap">
                Completion: Day 14
              </span>
            </div>
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div class="flex items-center justify-center w-6 h-full">
                <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
              </div>
              <div class="absolute w-6 h-6 -mt-3 bg-black border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
          </div>

          <div class="flex md:contents">
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div class="flex items-center justify-center w-6 h-full">
                <div class="w-1 h-full bg-indigo-300"></div>
              </div>
              <div class="absolute w-6 h-6 -mt-3 bg-black border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
            <div class="relative p-4 my-6 text-gray-800 bg-black rounded-xl col-start-6 col-end-10 mr-auto">
              <h3 class="text-lg font-semibold text-white lg:text-xl">
                Week 4: Testing & Launch
              </h3>
              <p class="mt-2 leading-6 text-white ">
                Conduct thorough testing, gather feedback, and finalize the
                project for launch.
              </p>
              <span class="absolute text-sm text-black font-bold  -top-5 left-2 whitespace-nowrap">
                Launch Date: Day 30
              </span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Appli;
