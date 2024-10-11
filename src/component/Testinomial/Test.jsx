import React from 'react'

const Test = () => {
  return (
    <div>
        <div class="bg-gray-200">
  <section class="max-w-5xl mx-auto w-full px-10 py-10">
    <div class="flex items-center justify-center flex-col gap-y-2 py-5">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold max-w-md mx-auto text-center text-gray-900">Here's what our
        <span class="text-[#45B3BA]">customers</span> have to say
      </h2>
     </div>
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
      <div
        class="border p-7 rounded-xl bg-white drop-shadow-md border-neutral-800/50 col-span-2 flex flex-col gap-y-10 justify-between">
        <div class="flex flex-col gap-y-3.5">
          <p class="font-bold text-xl text-black">Efficient customer support</p>
          <p class="font-medium text-black">The customer support team at our service is incredibly responsive and
            helpful. They went above and beyond to assist me with my issue.</p>
        </div>
        <div class="flex flex-col">
         {/* <p class="pt-2 text-sm font-semibold text-black">Emily Smith</p> */}
          <p class="text-sm font-medium text-blk">Director S.Vatsalya Academy </p>
        </div>
      </div>
      <div
        class="border p-7 rounded-xl bg-white drop-shadow-md border-neutral-800/50 col-span-3 flex flex-col gap-y-10 justify-between">
        <div class="flex flex-col gap-y-3.5">
          <p class="font-bold text-xl text-black">Excellent product features</p>
          <p class="font-medium text-black">The features offered by our service are outstanding. They have greatly
            improved our workflow and efficiency.</p>
        </div>
        <div class="flex flex-col">
          <p class="pt-2 text-sm font-semibold text-black">Richa Garg</p>
          <p class="text-sm font-medium text-black">Bussiness of Bags</p>
        </div>
      </div>
      <div
        class="border p-7 rounded-xl bg-white drop-shadow-md border-neutral-800/50 col-span-3 flex flex-col gap-y-10 justify-between">
        <div class="flex flex-col gap-y-3.5">
          <p class="font-bold text-xl text-black">Seamless integration process</p>
          <p class="font-medium text-black">Integrating our systems with our service was smooth and hassle-free. The
            support team guided us through every step of the process.</p>
        </div>
        <div class="flex flex-col">
         <p class="pt-2 text-sm font-semibold text-black">Anita Mani Tripathi</p>
          <p class="text-sm font-medium text-black">Principle of Oriental Senior School</p>
        </div>
      </div>
      <div
        class="border p-7 rounded-xl bg-white drop-shadow-md border-neutral-800/50 col-span-2 flex flex-col gap-y-10 justify-between">
        <div class="flex flex-col gap-y-3.5">
          <p class="font-bold text-xl text-black">Reliable service uptime</p>
          <p class="font-medium text-black">The service has consistently maintained high uptime, ensuring that our
            operations run smoothly without any disruptions.</p>
        </div>
        <div class="flex flex-col">
          <p class="pt-2 text-sm font-semibold text-black">Vanktesh Shukla</p>
          <p class="text-sm font-medium text-black">A successfull Lawyer</p>
        </div>
      </div>
    </div>
  </section>
</div>
    </div>
  )
}

export default Test