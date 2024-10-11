import React from "react";

const Count = () =>{
    return(
        <div class=" dark:bg-gray-800 flex justify-center items-center">
    <section class="grid gap-6 md:grid-cols-3 p-4 md:p-8 max-w-5xl mx-auto w-full ">
        <div class="p-6 bg-white shadow rounded-2xl dark:bg-gray-900">
            <dl class="space-y-2">
                <dt class="text-sm font-bold text-gray-500 dark:text-gray-400">Total Team Member</dt>

                <dd class="text-5xl font-light md:text-6xl dark:text-white">15 +</dd>

                <dd class="flex items-center space-x-1 text-sm font-medium text-green-500 dark:text-green-400">
                 

                    <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M17.25 15.25V6.75H8.75"></path>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M17 7L6.75 17.25"></path>
                    </svg>
                </dd>
            </dl>
        </div>

        <div class="p-6 bg-white shadow rounded-2xl dark:bg-gray-900">
            <dl class="space-y-2">
                <dt class="text-sm font-bold text-gray-500 dark:text-gray-400">Happy Clients</dt>

                <dd class="text-5xl font-light md:text-6xl dark:text-white">17 +</dd>

                <dd class="flex items-center space-x-1 text-sm font-medium text-green-500 dark:text-green-400">
                 

                 <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                         d="M17.25 15.25V6.75H8.75"></path>
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                         d="M17 7L6.75 17.25"></path>
                 </svg>
             </dd>
            </dl>
        </div>

        <div class="p-6 bg-white shadow rounded-2xl dark:bg-gray-900">
            <dl class="space-y-2">
                <dt class="text-sm font-bold text-gray-500 dark:text-gray-400">Total Completed Project</dt>

                <dd class="text-5xl font-light md:text-6xl dark:text-white">20+</dd>

                <dd class="flex items-center space-x-1 text-sm font-medium text-green-500 dark:text-green-400">
                    

                    <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M17.25 15.25V6.75H8.75"></path>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M17 7L6.75 17.25"></path>
                    </svg>
                </dd>
            </dl>
        </div>
    </section>

</div>
    )
}

const StepCount = () => {
  return (
    <div>
  <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
    <h2 class="font-headline text-2xl font-semibold sm:text-3xl text-center">
      Revamp Your Website in Three Steps
    </h2>
    <p class="text-center mt-4 text-gray-600">
      Transform your online presence and boost engagement with our streamlined process!
    </p>

    <div class="grid sm:grid-cols-3 gap-16 sm:gap-8 mt-16 sm:mt-24">
      <div class="text-center">
        <div class="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
          <div class="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="0.5"
              stroke="currentColor"
              class="text-gray-500 w-1/2 h-1/2"
              alt="Import icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              ></path>
            </svg>
          </div>
          <div class="absolute inset-0 -translate-x-2 -translate-y-2 bg-blue-500 rounded-full"></div>
        </div>
        <h3 class="font-headline text-xl sm:text-2xl mt-6 sm:mt-10">
          1. Reimagine
        </h3>
        <p class="text-left leading-relaxed mt-4 ">
          Begin by envisioning the new look and features for your website. This is your chance to rethink your brand’s online identity and align it with your business goals.
        </p>
        <p class="text-left text-gray-500 mt-2">
          *Discover fresh ideas and inspiration to captivate your audience.*
        </p>
      </div>

      <div class="text-center">
        <div class="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
          <div class="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="0.5"
              stroke="currentColor"
              class="text-gray-500 w-1/2 h-1/2"
              alt="Translate icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              ></path>
            </svg>
          </div>
          <div class="absolute inset-0 -translate-x-2 -translate-y-2 bg-blue-500 rounded-full"></div>
        </div>
        <h3 class="font-headline text-xl sm:text-2xl mt-6 sm:mt-10">
          2. Redesign
        </h3>
        <p class="text-left leading-relaxed mt-4">
          Collaborate with your design and development team to give your website a fresh and modern design. Focus on user experience and responsiveness to keep your visitors engaged.
        </p>
        <p class="text-left text-gray-500 mt-2">
          *Elevate your brand's image with a professional and visually appealing website.*
        </p>
      </div>

      <div class="text-center">
        <div class="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
          <div class="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width=".5"
              stroke="currentColor"
              class="text-gray-500 w-1/2 h-1/2"
              alt="Export icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              ></path>
            </svg>
          </div>
          <div class="absolute inset-0 -translate-x-2 -translate-y-2 bg-blue-500 rounded-full"></div>
        </div>
        <h3 class="font-headline text-xl sm:text-2xl mt-6 sm:mt-10">
          3. Relaunch
        </h3>
        <p class="text-left leading-relaxed mt-4">
          After the redesign, relaunch your website and welcome your audience to the new experience. Celebrate your brand's evolution and leverage it to attract more visitors.
        </p>
        <p class="text-left text-gray-500 mt-2">
          *Gain a competitive edge and enhance user engagement with your revitalized online presence.*
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

const Step = () => {
  return (
    <div>
      <StepCount />
      {/* <div class="bg-black p-4">
        <h2 class="text-3xl text-center text-white font-bold mb-12">
          Why Choose Us ?
        </h2>
        <p></p>
        <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
          <div class="flex md:contents flex-row-reverse">
            <div class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
              <h3 class="text-lg font-semibold lg:text-xl">New Event 1</h3>
              <p class="mt-2 leading-6">Description of the first event.</p>
              <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">
                Date 1
              </span>
            </div>
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div class="flex items-center justify-center w-6 h-full">
                <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
              </div>
              <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
          </div>

          <div class="flex md:contents">
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div class="flex items-center justify-center w-6 h-full">
                <div class="w-1 h-full bg-indigo-300"></div>
              </div>
              <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
            <div class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
              <h3 class="text-lg font-semibold lg:text-xl">New Event 2</h3>
              <p class="mt-2 leading-6">Description of the second event.</p>
              <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">
                Date 2
              </span>
            </div>
          </div>

          <div class="flex md:contents flex-row-reverse">
            <div class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
              <h3 class="text-lg font-semibold lg:text-xl">New Event 3</h3>
              <p class="mt-2 leading-6">Description of the first event.</p>
              <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">
                Date 3
              </span>
            </div>
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div class="flex items-center justify-center w-6 h-full">
                <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
              </div>
              <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
          </div>

          <div class="flex md:contents">
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div class="flex items-center justify-center w-6 h-full">
                <div class="w-1 h-full bg-indigo-300"></div>
              </div>
              <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
            <div class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
              <h3 class="text-lg font-semibold lg:text-xl">New Event 4</h3>
              <p class="mt-2 leading-6">Description of the second event.</p>
              <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">
                Date 4
              </span>
            </div>
          </div>
        </div>
      </div> */}

      <div class="bg-black p-4">
    <h2 class="text-3xl text-center text-white font-bold mb-12">
        Project Completion Timeline
    </h2>
    <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
       
        <div class="flex md:contents flex-row-reverse">
            <div class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                <h3 class="text-lg font-semibold lg:text-xl">Week 1: Project Kickoff</h3>
                <p class="mt-2 leading-6">Initial meetings with stakeholders to gather requirements and define project scope.</p>
                <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">
                    Start Date: Day 1
                </span>
            </div>
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div class="flex items-center justify-center w-6 h-full">
                    <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
                </div>
                <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
        </div>

   
        <div class="flex md:contents">
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div class="flex items-center justify-center w-6 h-full">
                    <div class="w-1 h-full bg-indigo-300"></div>
                </div>
                <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
            <div class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                <h3 class="text-lg font-semibold lg:text-xl">Week 2: Design Phase</h3>
                <p class="mt-2 leading-6">Create wireframes and prototypes based on the gathered requirements.</p>
                <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">
                    Completion: Day 7
                </span>
            </div>
        </div>

      
        <div class="flex md:contents flex-row-reverse">
            <div class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                <h3 class="text-lg font-semibold lg:text-xl">Week 3: Development</h3>
                <p class="mt-2 leading-6">Begin coding and implementing features based on the approved design.</p>
                <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">
                    Completion: Day 14
                </span>
            </div>
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div class="flex items-center justify-center w-6 h-full">
                    <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
                </div>
                <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
        </div>

       
        <div class="flex md:contents">
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div class="flex items-center justify-center w-6 h-full">
                    <div class="w-1 h-full bg-indigo-300"></div>
                </div>
                <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
            <div class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                <h3 class="text-lg font-semibold lg:text-xl">Week 4: Testing & Launch</h3>
                <p class="mt-2 leading-6">Conduct thorough testing, gather feedback, and finalize the project for launch.</p>
                <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">
                    Launch Date: Day 30
                </span>
            </div>
        </div>
    </div>
</div>
<Count/>

    </div>
  );
};

export default Step;
