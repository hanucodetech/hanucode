import React from "react";
const Serv = () => {
  return (
    <section class="overflow-hidden  py-8 sm:py-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pr-8 lg:pt-4">
            <div class="lg:max-w-lg">
              <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                How we work
              </p>
              <p class="mt-6 text-lg leading-8 text-gray-600">
                We've built an API that allows you to scale your podcast
                production workflow.
              </p>
              <p>
                At HanuCode, we believe in pushing the boundaries of
                technology to deliver exceptional products that resonate with
                users. Our mission is to empower you in crafting and launching
                customized, innovative solutions that truly captivate. To bring
                your ideas to life, we blend an agile methodology with proven
                frameworks and deep industry expertise. This dynamic combination
                of flexibility and experience ensures that your product not only
                meets market demands but thrives in it.
                <br />
                Our approach mirrors that of a dedicated in-house team,
                fostering a partnership built on transparency and shared vision.
                You’ll collaborate closely with our passionate team of
                specialists, who are committed to your success.
              </p>
              <p>
                <b>
                  Together, we’ll turn your aspirations into a flourishing
                  reality, all while adhering to our core principles of
                  timeliness and budget-consciousness. At HanuCode, your
                  vision is our blueprint for success.
                </b>
              </p>
            </div>
            {/* <div class="mt-10 flex items-center gap-x-6">
                <a href="#"
                  class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Start
                  for free
                </a>
                <a href="#" class="text-sm font-semibold leading-6 text-gray-700">Schedule a demo
                  <span aria-hidden="true">→</span>
                </a>
              </div> */}
          </div>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb21wdXRlcnxlbnwwfDB8fHwxNjkxODE2NjY3fDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Product screenshot"
            class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width="2432"
            height="1442"
          />
        </div>
      </div>
    </section>
  );
};
const Services = () => {
  return (
    <div className="mt-20">
      <div class="bg-gray-200 px-2 py-10">
        <div id="features" class="mx-auto max-w-6xl">
          <h2 class="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            We design & build innovative products focused on user’s needs
          </h2>

          <Serv />
          <ul class="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
            <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
              <a href="/web-development" class="group">
                <img
                  src="https://www.svgrepo.com/show/530440/machine-vision.svg"
                  alt=""
                  class="mx-auto h-10 w-10"
                />
                <h3 class="my-3 font-display font-medium">
                  Website Development
                </h3>
                <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                  the cutting-edge language model that makes interactions a
                  breeze. With its user-friendly interface, effortlessly tap
                  into the world of AI-generated text.
                </p>
              </a>
            </li>
            <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
              <a href="/app" class="group">
                <img
                  src="https://www.svgrepo.com/show/530438/ddos-protection.svg"
                  alt=""
                  class="mx-auto h-10 w-10"
                />
                <h3 class="my-3 font-display font-medium group-hover:text-primary-500">
                  Android App
                </h3>
                <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                  Our product is compatible with multiple platforms including
                  Web, Chrome, Windows and Mac, you can use MagickPen anywhere.
                </p>
              </a>
            </li>
            <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
              <a href="/app" class="group">
                <img
                  src="https://www.svgrepo.com/show/530438/ddos-protection.svg"
                  alt=""
                  class="mx-auto h-10 w-10"
                />
                <h3 class="my-3 font-display font-medium group-hover:text-primary-500">
                  IOS App
                </h3>
                <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                  Our product is compatible with multiple platforms including
                  Web, Chrome, Windows and Mac, you can use MagickPen anywhere.
                </p>
              </a>
            </li>
            <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
              <a href="/seo" class="group">
                <img
                  src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='100' height='100'%3E%3Crect x='10' y='10' width='44' height='44' fill='%2342A5F5' rx='5'/%3E%3Ctext x='32' y='36' font-family='Arial' font-size='18' fill='%23FFFFFF' text-anchor='middle'%3ESEO%3C/text%3E%3C/svg%3E"
                  alt="Search Engine Optimization Icon"
                  class="mx-auto h-10 w-10"
                />

                <h3 class="my-3 font-display font-medium group-hover:text-primary-500">
                  SEO Services
                </h3>
                <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                  Our product is compatible with multiple platforms including
                  Web, Chrome, Windows and Mac, you can use MagickPen anywhere.
                </p>
              </a>
            </li>
            <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
              <a href="#ui-ux" class="group">
                <img
                  src="https://www.svgrepo.com/show/530442/port-detection.svg"
                  alt=""
                  class="mx-auto h-10 w-10"
                />
                <h3 class="my-3 font-display font-medium">UI / UX </h3>
                <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                  Simply input your subject, click the generate button, and the
                  result will appear in seconds just like magick.
                </p>
              </a>
            </li>
            <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
              <a href="/web-development" class="group">
                <img
                  src="https://www.svgrepo.com/show/530444/availability.svg"
                  alt=""
                  class="mx-auto h-10 w-10"
                />
                <h3 class="my-3 font-display font-medium">
                  Website Maintanance
                </h3>
                <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                  We offer advanced customization. You can freely combine
                  options like roles, languages, publish, tones, lengths, and
                  formats.
                </p>
              </a>
            </li>
            <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
              <a href="#software" class="group">
                <img
                  src="https://www.svgrepo.com/show/530440/machine-vision.svg"
                  alt=""
                  class="mx-auto h-10 w-10"
                />
                <h3 class="my-3 font-display font-medium group-hover:text-primary-500">
                  Software Development
                </h3>
                <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                  We offer a free trial service without login. We provide many
                  payment options including pay-as-you-go and subscription.
                </p>
              </a>
            </li>
            <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
              <a href="#digital" class="group">
                <img
                  src="https://www.svgrepo.com/show/530450/page-analysis.svg"
                  alt=""
                  class="mx-auto h-10 w-10"
                />
                <h3 class="my-3 font-display font-medium group-hover:text-primary-500">
                  Digital Marketing
                </h3>
                <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                  We offer many templates covering areas such as writing,
                  education, lifestyle and creativity to inspire your potential.{" "}
                </p>
              </a>
            </li>

            <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
              <a href="#smm" class="group">
                <img
                  src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='100' height='100'%3E%3Crect x='10' y='10' width='44' height='44' fill='%2342A5F5' rx='5'/%3E%3Ctext x='32' y='36' font-family='Arial' font-size='18' fill='%23FFFFFF' text-anchor='middle'%3ESEO%3C/text%3E%3C/svg%3E"
                  alt="Search Engine Optimization Icon"
                  class="mx-auto h-10 w-10"
                />

                <h3 class="my-3 font-display font-medium group-hover:text-primary-500">
                  Social Media Management
                </h3>
                <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                  Our product is compatible with multiple platforms including
                  Web, Chrome, Windows and Mac, you can use MagickPen anywhere.
                </p>
              </a>
            </li>

            <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
              <a href="#graphic" class="group">
                <img
                  src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='100' height='100'%3E%3Crect x='10' y='10' width='44' height='44' fill='%2393C5EA' rx='5'/%3E%3Ctext x='32' y='36' font-family='Arial' font-size='18' fill='%23FFFFFF' text-anchor='middle'%3EGraphic Design%3C/text%3E%3C/svg%3E"
                  alt="Graphic Design Icon"
                  class="mx-auto h-10 w-10"
                />

                <h3 class="my-3 font-display font-medium group-hover:text-primary-500">
                  Graphic Design
                </h3>
                <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                  Our product is compatible with multiple platforms including
                  Web, Chrome, Windows and Mac, you can use MagickPen anywhere.
                </p>
              </a>
            </li>

            <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
              <a href="#video" class="group">
                <img
                  src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='100' height='100'%3E%3Crect x='10' y='10' width='44' height='44' fill='%2393C5EA' rx='5'/%3E%3Ctext x='32' y='36' font-family='Arial' font-size='18' fill='%23FFFFFF' text-anchor='middle'%3EVideo Editing%3C/text%3E%3C/svg%3E"
                  alt="Video Editing Icon"
                  class="mx-auto h-10 w-10"
                />

                <h3 class="my-3 font-display font-medium group-hover:text-primary-500">
                  Video Editing
                </h3>
                <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                  Our product is compatible with multiple platforms including
                  Web, Chrome, Windows and Mac, you can use MagickPen anywhere.
                </p>
              </a>
            </li>
          </ul>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Services;
