// src/components/Hero.jsx
import React from 'react';
import videoSrc from '../../assets/video.mp4';
const Hero = () => {
  return (
    <section className="relative h-screen text-white">
      {/* Background Video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover" 
        src={videoSrc}// Replace with the actual online video link
        autoPlay 
        loop 
        muted 
        playsInline
      />

      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 h-full  flex flex-col justify-center items-start text-left px-4">
        <h1 className="text-5xl md:text-5xl  font-bold leading-tight mt-20">
          Custom Product &<br /> Software Development
        </h1>
        <p className="mt-4 text-2xl md:text-5xl font-medium">
          Focused On Your Success
        </p>
        <a
  href="tel:7905796216"
  className="mt-8 inline-block px-6 py-2 border-2 border-pink-600 text-lg font-semibold rounded-full bg-transparent hover:bg-pink-600 hover:text-white transition duration-300"
>
  Book a Call
</a>

      </div>
    </section>
  );
};

export default Hero;