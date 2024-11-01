import React from 'react';
import Navbar from '../Navbar';
import Image from 'next/image';

export const Project = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center">
      {/* Background Image */}
      <Image
        src="/main2.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-[-2]" // Lower z-index for background image
      />

      {/* Optional: Dark overlay to improve text readability */}
      <div className="absolute inset-0 bg-black opacity-30 z-[-1]"></div>

      {/* Navbar with higher z-index to ensure it's clickable */}
      <Navbar className="relative z-10" />
      {/* content sections  */}
      <div className="container mx-auto flex-col  items-center justify-center px-4 py-10 relative z-10">
        <h1 className='text-4xl text-white'> My Projects</h1>
      </div>
    </div>
  );
};
