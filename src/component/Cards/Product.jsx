import React from 'react'
import what from '../../assets/what.png';
import school from '../../assets/school.png';
import clg from '../../assets/collage.webp';
import com from '../../assets/com.webp';
import hosp from '../../assets/hosp.png';
import hot from '../../assets/hot.jpeg';
import real from '../../assets/real.jpeg';
import rec from '../../assets/rec.jpeg';
import dai from '../../assets/dai.jpeg';
import res from '../../assets/res.jpg';
import inv from '../../assets/inv.jpg';
import gst from '../../assets/gst.jpg';
import trav from '../../assets/trav.png';
import soc from '../../assets/soc.png';
import acc from '../../assets/acc.png';
import gra from '../../assets/gra.png';
import coa from '../../assets/coa.png';
import cru from '../../assets/cru.jpg';
import mlm from '../../assets/mlm.jpg';
import MainProduct from './MainProduct';
const Product = () => {
  return (
    <div>
        <section id="features" class="container mx-auto px-4 space-y-6 bg-slate-50 py-8 md:py-12 lg:py-20">

<div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">

    <h2 class="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Product</h2>

    <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
    Our Platform enhances decision-making and efficiency across various industries, allowing you to optimize operations seamlessly.
    </p>

</div>

<div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-6">

<div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
  <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
    {/* First image for large screens */}
    <img src={school} className="hidden md:block w-full h-auto" alt="Description" />
    {/* Second image for medium and small screens */}
    <img src={school} className="md:hidden w-full h-1/2" alt="Description" />
    <div className="space-y-2">
      <h3 className="text-center font-bold">School Management</h3>
    </div>
  </div>
</div>
<div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
  <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
    {/* First image for large screens */}
    <img src={hosp} className="hidden md:block w-full h-auto" alt="Description" />
    {/* Second image for medium and small screens */}
    <img src={hosp} className="md:hidden w-full h-1/2" alt="Description" />
    <div className="space-y-2">
      <h3 className="text-center font-bold">Hospital Management</h3>
    </div>
  </div>
</div>

<div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
  <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
    {/* First image for large screens */}
    <img src={clg} className="hidden md:block w-full h-auto" alt="Description" />
    {/* Second image for medium and small screens */}
    <img src={clg} className="md:hidden w-full h-1/2" alt="Description" />
    <div className="space-y-2">
      <h3 className="text-center font-bold">Collage Management</h3>
    </div>
  </div>
</div>

<div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
  <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
    {/* First image for large screens */}
    <img src={hot} className="hidden md:block w-full h-auto" alt="Description" />
    {/* Second image for medium and small screens */}
    <img src={hot} className="md:hidden w-full h-1/2" alt="Description" />
    <div className="space-y-2">
      <h3 className="text-center font-bold">Hotel Management</h3>
    </div>
  </div>
</div>

<div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
  <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
    {/* First image for large screens */}
    <img src={res} className="hidden md:block w-full h-auto" alt="Description" />
    {/* Second image for medium and small screens */}
    <img src={res} className="md:hidden w-full h-1/2" alt="Description" />
    <div className="space-y-2">
      <h3 className="text-center font-bold">Restaurant Management</h3>
    </div>
  </div>
</div>

<div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
  <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
    {/* First image for large screens */}
    <img src={gst} className="hidden md:block w-full h-auto" alt="Description" />
    {/* Second image for medium and small screens */}
    <img src={gst} className="md:hidden w-full h-1/2" alt="Description" />
    <div className="space-y-2">
      <h3 className="text-center font-bold">GST Billing System</h3>
    </div>
  </div>
</div>

    {/* from this not show in small screen */}
    <div
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2 md:block hidden">
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
           <img src={trav}></img>
            <div class="space-y-2">
                <h3 class="font-bold">Travel Software</h3>
                  </div>
        </div>
    </div>
    <div
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2 md:block hidden">
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
           <img src={soc}></img>
            <div class="space-y-2">
                <h3 class="font-bold">Co. Operative Society Software</h3>
                  </div>
        </div>
    </div>
    <div
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2 md:block hidden">
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
           <img src={cru}></img>
            <div class="space-y-2">
                <h3 class="font-bold">Crusher Management System</h3>
                  </div>
        </div>
    </div>
    <div
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2 md:block hidden">
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
           <img src={mlm}></img>
            <div class="space-y-2">
                <h3 class="font-bold">MLM Software</h3>
                  </div>
        </div>
    </div>
    <div
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2 md:block hidden">
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
           <img src={coa}></img>
            <div class="space-y-2">
                <h3 class="font-bold">Coaching Institute  Software</h3>
                  </div>
        </div>
    </div>
    <div
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2 md:block hidden">
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
           <img src={dai}></img>
            <div class="space-y-2">
                <h3 class="font-bold">Daily Collection</h3>
                  </div>
        </div>
    </div>
    <div
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2 md:block hidden">
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
           <img src={rec}></img>
            <div class="space-y-2">
                <h3 class="font-bold">Online Recharge</h3>
                  </div>
        </div>
    </div>
    <div
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2 md:block hidden">
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
           <img src={gra}></img>
            <div class="space-y-2">
                <h3 class="font-bold">Geaphic Design</h3>
                  </div>
        </div>
    </div>
    <div
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2 md:block hidden">
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
           <img src={inv}></img>
            <div class="space-y-2">
                <h3 class="font-bold">Inventory Management Software</h3>
                  </div>
        </div>
    </div>
    <div
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2 md:block hidden">
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
           <img src={acc}></img>
            <div class="space-y-2">
                <h3 class="font-bold">Account Management Software</h3>
                  </div>
        </div>
    </div>
    <div
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2 md:block hidden">
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
           <img src={com}></img>
            <div class="space-y-2">
                <h3 class="font-bold">Community Management Software</h3>
                  </div>
        </div>
    </div>
    <div
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2 md:block hidden">
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
           <img src={real}></img>
            <div class="space-y-2">
                <h3 class="font-bold">Real State Management</h3>
                  </div>
        </div>
    </div>

</div>

</section>
    </div>
  )
}

export default Product