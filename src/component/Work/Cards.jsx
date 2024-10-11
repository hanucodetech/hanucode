import React from "react";
// import what from "../../assets/what.webp";
import MainProduct from "../Cards/MainProduct";

const ContentCards = () => {
  return (
    <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-4 p-4">
      <div class="bg-gray-200  shadow-white p-4">UI/UX Design</div>
      <div class="bg-gray-200  shadow-white p-4">Software Development</div>
      <div class="bg-gray-200  shadow-white p-4">Website Development</div>
      <div class="bg-gray-200  shadow-white p-4">Application Development</div>
      <div class="bg-gray-200  shadow-white p-4">Desktop Appilication</div>
      <div class="bg-gray-200  shadow-white p-4">Video Editing</div>
      <div class="bg-gray-200  shadow-white p-4">Graphic Design</div>
      <div class="bg-gray-200  shadow-white p-4">SEO Services</div>
      <div class="bg-gray-200  shadow-white p-4">Social Media Management</div>
      <div class="bg-gray-200  shadow-white p-4">Logo Design</div>
      <div class="bg-gray-200  shadow-white p-4">Template/Poster Design</div>
      {/* <div class="bg-gray-100 p-4"></div>
    <div class="bg-gray-100 p-4"></div>
    <div class="bg-gray-100 p-4"></div> */}
    </div>
  );
};

const Cards = () => {
  return (
    <div>
      <div className="h-full  w-full bg-white pt-12 p-4">
        <div className="grid mb-5 gap-8 md:grid-cols-3 md:gap-5">
          <div className="rounded-xl bg-white p-6 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
              >
                <path
                  d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm0 44c-11.046 0-20-8.954-20-20S12.954 4 24 4s20 8.954 20 20-8.954 20-20 20z"
                  fill="white"
                />
                <path d="M18 20h12v4H18z" fill="white" />
                <path d="M18 28h12v4H18z" fill="white" />
              </svg>
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              PRODUCT SCOPE
            </h1>
            <p className="px-4 text-gray-500">
              The Product Scope includes a comprehensive range of services
              designed to meet customer needs. From initial consultation to
              final delivery, we ensure that every aspect of your project is
              covered.
            </p>
          </div>

          <div
            data-aos-delay="150"
            className="rounded-xl bg-white p-6 text-center shadow-xl"
          >
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40">
              {/* Replace this SVG with your UI/UX icon */}
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
              >
                {/* Example SVG for UI/UX icon, replace with actual icon */}
                <path
                  d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm-6 36V12h12v24H18zm6-30c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"
                  fill="white"
                />
              </svg>
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              SOCIAL MEDIA MANAGEMENT
            </h1>
            <p className="px-4 text-gray-500">
              Our social media management services help you build and engage
              your online community. We create tailored strategies to enhance
              your brand presence across various platforms.
            </p>
          </div>

          <div
            data-aos-delay="300"
            className="rounded-xl bg-white p-6 text-center shadow-xl"
          >
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/40">
              {/* Replace this SVG with your Website Development icon */}
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
              >
                {/* Example SVG for a website icon, replace with actual icon */}
                <path
                  d="M0 4C0 1.79 1.79 0 4 0h40c2.21 0 4 1.79 4 4v40c0 2.21-1.79 4-4 4H4c-2.21 0-4-1.79-4-4V4zm4 0h40v40H4V4zm8 8h24v4H12v-4zm0 8h24v4H12v-4zm0 8h24v4H12v-4zm0 8h24v4H12v-4z"
                  fill="white"
                />
              </svg>
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              DEDICATED TEAM
            </h1>
            <p className="px-4 text-gray-500">
              Our dedicated team provides specialized support tailored to your
              project needs. We ensure seamless communication and collaboration
              for successful outcomes.
            </p>
          </div>
        </div>

        {/* <div className="grid mb-5 mt-10 gap-14 md:grid-cols-3 md:gap-5">
          <div className="rounded-xl bg-white p-6 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
        
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
              >
              
                <path
                  d="M12 0C10.895 0 10 0.895 10 2v44c0 1.105.895 2 2 2h24c1.105 0 2-.895 2-2V2c0-1.105-.895-2-2-2H12zm0 4h24v40H12V4zm6 2h12v4H18V6zm0 8h12v4H18v-4zm0 8h12v4H18v-4zm0 8h12v4H18v-4z"
                  fill="white"
                />
              </svg>
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              APP DEVELOPMENT
            </h1>
            <p className="px-4 text-gray-500">
              Our App Development services provide you with custom mobile
              applications tailored to your business needs. We focus on user
              experience and performance to ensure your app stands out in the
              market.
            </p>
          </div>

          <div
            data-aos-delay="150"
            className="rounded-xl bg-white p-6 text-center shadow-xl"
          >
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40">
             
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
              >
          
                <path
                  d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm-4 34l-6-6h4v-4h4v4h4l-6 6zm0-20l-6-6h4V4h4v4h4l-6 6z"
                  fill="white"
                />
              </svg>
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              SEO SERVICES
            </h1>
            <p className="px-4 text-gray-500">
              Our SEO services are designed to improve your website's visibility
              on search engines. We focus on keyword optimization, content
              strategy, and performance analysis to drive organic traffic to
              your site.
            </p>
          </div>

          <div
            data-aos-delay="300"
            className="rounded-xl bg-white p-6 text-center shadow-xl"
          >
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/40">
    
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
              >
             
                <path
                  d="M44 0H4C1.79 0 0 1.79 0 4v40c0 2.21 1.79 4 4 4h40c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4zm-6 32l-10-6 10-6v12zm-28-2V14h24v18H10z"
                  fill="white"
                />
              </svg>
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              VIDEO EDITING
            </h1>
            <p className="px-4 text-gray-500">
              Our video editing services help bring your footage to life. We
              provide professional editing, color grading, and sound design to
              ensure your videos captivate your audience.
            </p>
          </div>
        </div>
        <div className="grid mb-5 mt-10 gap-14 md:grid-cols-3 md:gap-5">
          <div className="rounded-xl bg-white p-6 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
         
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
              >
              
                <path
                  d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm-6 36H8V12h10v24zm12 0h-10V12h10v24z"
                  fill="white"
                />
              </svg>
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              GRAPHIC DESIGN
            </h1>
            <p className="px-4 text-gray-500">
              Our graphic design services focus on creating stunning visuals
              that effectively communicate your brand message. We provide
              tailored design solutions for all your marketing needs.
            </p>
          </div>

          <div
            data-aos-delay="150"
            className="rounded-xl bg-white p-6 text-center shadow-xl"
          >
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40">
      
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
              >
               
                <path
                  d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm0 44c-11.046 0-20-8.954-20-20S12.954 4 24 4s20 8.954 20 20-8.954 20-20 20z"
                  fill="white"
                />
                <path d="M18 20h12v4H18z" fill="white" />
                <path d="M18 28h12v4H18z" fill="white" />
                <path d="M18 36h12v4H18z" fill="white" />
              </svg>
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              SOCIAL MEDIA MANAGEMENT
            </h1>
            <p className="px-4 text-gray-500">
              Our social media management services help you build and engage
              your online community. We create tailored strategies to enhance
              your brand presence across various platforms.
            </p>
          </div>

          <div
            data-aos-delay="300"
            className="rounded-xl bg-white p-6 text-center shadow-xl"
          >
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/40">
        
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
              >
             
                <path
                  d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm-6 36V12h12v24H18zm6-30c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"
                  fill="white"
                />
                <path d="M18 28h12v4H18z" fill="white" />
                <path d="M18 20h12v4H18z" fill="white" />
              </svg>
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              DEDICATED TEAM
            </h1>
            <p className="px-4 text-gray-500">
              Our dedicated team provides specialized support tailored to your
              project needs. We ensure seamless communication and collaboration
              for successful outcomes.
            </p>
          </div>
        </div> */}
      </div>
      <ContentCards />

      <MainProduct />
      <div className="h-full md:block hidden">
        {/* Card */}
        <div className="max-w-6xl mt-10 mx-auto bg-indigo-600 shadow-lg rounded-lg">
          <div className="px-6 py-5">
            <div className="flex items-start">
              {/* Icon */}
              <svg
                className="fill-current flex-shrink-0 mr-5"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path
                  className="text-indigo-300"
                  d="m16 14.883 14-7L14.447.106a1 1 0 0 0-.895 0L0 6.883l16 8Z"
                />
                <path
                  className="text-indigo-200"
                  d="M16 14.619v15l13.447-6.724A.998.998 0 0 0 30 22V7.619l-14 7Z"
                />
                <path
                  className="text-indigo-500"
                  d="m16 14.619-16-8V21c0 .379.214.725.553.895L16 29.619v-15Z"
                />
              </svg>
              {/* Card content */}
              <div className="flex-grow truncate">
                {/* Card header */}
                <div className="w-full sm:flex justify-center items-center mb-3">
                  {/* Title */}
                  <h1 className="text-4xl  leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0">
                    100% Client Satisfaction
                  </h1>
                </div>
                {/* Card body */}
                <div className="flex items-end justify-center whitespace-normal">
                  {/* Paragraph */}
                  <div className="max-w-md text-indigo-100">
                    <p className="mb-2 text-2xl">
                      We are always here to serve you and work until you are
                      satisfied.
                    </p>
                  </div>
                  {/* More link */}
                  <a
                    className="flex-shrink-0 flex items-center justify-center text-indigo-600 w-10 h-10 rounded-full bg-gradient-to-b from-indigo-50 to-indigo-100 hover:from-white hover:to-indigo-50 focus:outline-none focus-visible:from-white focus-visible:to-white transition duration-150 ml-2"
                    href="#0"
                  >
                    <span className="block font-bold">
                      <span className="sr-only">Read more</span> &rarr;
                    </span>
                  </a>
                  <a
                    className="flex-shrink-0 gap-8 ml-10 flex items-center justify-center text-indigo-600 w-10 h-10 rounded-full bg-gradient-to-b from-indigo-50 to-indigo-100 hover:from-white hover:to-indigo-50 focus:outline-none focus-visible:from-white focus-visible:to-white transition duration-150 ml-2"
                    href="#0"
                  >
                    <span className="block font-bold">
                      <span className="sr-only">Book Call Now</span> 📞
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
