import Image from "next/image";
import Button from "@/components/global/Button";
import Navbar from "@/components/global/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cover bg-center">
      {/* Background Image */}
      <Image
        src="/background.jpg"
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

      {/* Content Section */}
      <div className="container mx-auto flex items-center justify-center px-4 py-10 relative z-10">
        <div className="pt-20">
          <h4 className="text-white text-[20px] font-bold">Hello</h4>
          <h1 className="text-white text-[5rem] font-bold">I am Franklin Mike</h1>
          <p className="text-white text-sm font-semibold">- Frontend Software Engineer</p>
          <h3 className="text-white text-2xl w-[600px] font-semibold">
            I Build Beautiful Web Apps With Blazing Fast Speed And Incredible
            Performance In Record Time.
          </h3>
          <div className="w-[350px] flex items-center justify-between mt-3">
            <Button text="Hire Me" className="!bg-white !text-purple-600" />
            <Button text="Resume" />
          </div>
        </div>
      </div>
    </div>
  );
}
