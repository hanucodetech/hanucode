import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Get in Touch With Us
            </h2>
          </div>
          <div className="mt-10 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className=" py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                  <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="text-center pb-6">
                      <h1 className="text-3xl">Contact Us!</h1>
                      <p className="text-gray-300">
                        Fill up the form below to send us a message.
                      </p>
                    </div>

                    <form>
                      <input
                        className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Name"
                        name="name"
                      />

                      <input
                        className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        placeholder="Email"
                        name="email"
                      />

                      <input
                        className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Subject"
                        name="_subject"
                      />

                      <textarea
                        className="shadow mb-4 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Type your message here..."
                        name="message"
                      ></textarea>

                      <div className="flex justify-between">
                        <input
                          className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="submit"
                          value="Send ➤"
                        />
                        <input
                          className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="reset"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-lg shadow-lg">
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      Our Address
                    </h3>
                    <p className="mt-1 mb-2 text-gray-600">
                      Sco. 52, Jlpl,
                      <br />
                      Sec. 82, Mohali, Chandigarh 140308
                    </p>
                    <hr/>
                    <p className="mt-2 text-gray-600">
                      Rampur Nonsila, Mathani
                      <br />
                      Maharua, AmbedkarNagar(UP) 224231
                    </p>
                  </div>
                  <div className="border-t border-gray-200">
                    <div className="p-6">
                      <h3 className="text-lg font-medium text-gray-900">
                        Hours
                      </h3>
                      <p className="mt-1 text-gray-600">
                        Monday - Friday: 10am - 7pm
                      </p>
                      <p className="mt-1 text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                  <div className="border-t border-gray-200">
                    <div className="p-6">
                      <h3 className="text-lg font-medium text-gray-900">
                        Contact
                      </h3>
                      <p className="mt-1 text-gray-600">
                        Email: hanu.code.tech@gmail.com
                      </p>
                      <p className="mt-1 text-gray-600">
                        Phone: +91 7905796216
                      </p>
                    </div>
                  </div>
                </div>
                <div class="md:block-hidden max-w-6xl mt-12 mx-auto rounded-3xl bg-gradient-to-r from-green-100 to-green-50 px-6 py-16 text-center">
                  <div class="relative m-auto max-w-xl">
                    <div class="flex flex-row items-center justify-center text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        class="h-auto w-10 fill-current"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        class="h-auto w-10 fill-current"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        class="h-auto w-10 fill-current"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        class="h-auto w-10 fill-current"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        class="h-auto w-10 fill-current"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                    <a href="" target="_blank">
                      {/* <h2 class="mt-4 font-dm-sans text-mobile-h3 font-semibold leading-snug sm:text-mobile-h2 md:text-desktop-h2">
                        An
                        <span class="font-bold underline underline-offset-2">
                          absolute 5/5
                        </span>
                      </h2> */}
                    </a>
                    <p class="mt-4 font-dm-sans text-desktop-paragraph text-slate-body">
                      Reviews are from our customers .
                    </p>
                  </div>

                  <div class="mt-6 flex flex-col items-center justify-center space-y-3">
                  <a
            href="tel:7905796216"
            className="inline-block px-6 py-2  bg-pink-600 text-white rounded-full"
           
          >
            Book a Call
          </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
