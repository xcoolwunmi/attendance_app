import React from "react";
import ProgramImg from "../assets/Mask group.png"; // <-- replace with your image path

function AboutProgram() {
  return (
    <div className="w-full bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* LEFT: TEXT SECTION */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-600 mb-6">
            About The Program
          </h2>

          <p className="text-black-700 leading-relaxed mb-4 font-bold">
            The Ekiti State MSME ICT Skill Acquisition Hub is a transformative
            initiative developed in collaboration with Wakocode Technologies.
            This program is dedicated to empowering the youth of Ekiti State by
            providing them with in-demand ICT skills that are critical for
            success in today’s global digital economy.
          </p>

          <p className="text-black-700 leading-relaxed mb-6 font-bold">
            Through this initiative, participants will gain hands-on training in
            Full Stack Development, Cloud Computing, Cybersecurity, Backend
            Development, and Data Analytics — skills that are vital to thrive in
            both local and international job markets.
          </p>

          <button className="bg-yellow-400 text-black font-semibold px-5 py-2 rounded-md shadow hover:bg-yellow-500 transition">
            Learn More
          </button>
        </div>

        {/* RIGHT: IMAGE SECTION */}
        <div className="md:w-1/2 flex justify-center">
          <div className="">
            <img
              src={ProgramImg}
              alt="Program"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutProgram;
