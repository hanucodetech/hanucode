import React from 'react'
import hanu from "../../assets/hanu.jpeg";
const Blogs = () => {
  return (
<div>
<div class="w-full h-full bg-white dark:bg-gray-800">
    <div class="w-full mx-auto py-10 bg-white dark:bg-gray-800">
            
        <h1 class="w-[92%] mx-auto lg:text-4xl md:text-3xl xs:text-2xl text-center font-serif font-semibold pb-4 pt-8 dark:text-white">Why
        Your Ultimate Guide with HanuCode</h1>

       
        <img src={hanu} alt="Blog Cover" class="xl:w-[80%] xs:w-[96%] mx-auto lg:h-[560px] md:h-[480px] rounded-lg" />

        <h1 class="w-[92%] mx-auto lg:text-4xl md:text-3xl xs:text-2xl text-center font-serif font-semibold pb-4 pt-8 dark:text-white">
        Latest Blog</h1>

       
   

<div class="flex flex-col p-5 lg:px-48 lg:py-11">
<div class="bg-gray-100 p-5 mb-10">
    <h1 class="font-bold text-2xl mb-2">Emerging Trends in Technology and Their Impact on Businesses</h1>
    <p class="my-3">In an era where technology evolves at lightning speed, businesses must adapt to stay competitive. As new innovations emerge, they reshape industries and redefine operational strategies. This blog post explores key technological trends and their profound impact on modern businesses, providing insights into how these advancements can lead to improved efficiency, enhanced customer experiences, and increased profitability.</p>
    <a href="/blog-tech" class="text-white font-semibold bg-blue-600 hover:bg-blue-800 p-2 my-1 rounded inline-block">Read More...</a>
</div>

<div class="bg-gray-100 p-5 mb-10">
    <h1 class="font-bold text-2xl mb-2">Unlocking the Power of SEO: A Comprehensive Guide to Boosting Your Digital Marketing Strategy</h1>
    <p class="my-3">In the digital age, a robust online presence is crucial for business success. Search Engine Optimization (SEO) plays a pivotal role in digital marketing, helping businesses increase their visibility on search engines and drive organic traffic to their websites. This blog post explores the importance of SEO in digital marketing and provides a detailed strategy for creating an effective SEO plan.</p>
    <a href="/blog-unlock" class="text-white font-semibold bg-blue-600 hover:bg-blue-800 p-2 my-1 rounded inline-block">Read More...</a>
</div>

</div>

    </div>
</div>
</div>
  )
}

export default Blogs