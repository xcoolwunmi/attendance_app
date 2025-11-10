import React from "react";
import Image from "../assets/Component.png";

function Body() {
  return (
    <div className="flex justify-center items-center h-[75vh] bg-white px-4">
      {/* Main container */}
      <div className="flex bg-blue-300 flex-col md:flex-row rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full form">
        
        {/* Left section - form */}
        <div className="flex flex-col justify-center items-center md:w-1/2 p-10">
          <h2 className="font-extrabold  text-3xl text-orange-600 mb-6">
            Sign up
          </h2>

          <form className="flex  flex-col w-full max-w-sm space-y-5 font-extrabold">
            {/* Email field */}
            <div className="flex flex-col">
              <label htmlFor="name" className=" mb-1 text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Full Name"
                className="bg-white border-none rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200"
              />
            </div>

           

            {/* Sign in button */}
            <button
              type="submit"
              className="bg-orange-600 text-white font-bold py-2 rounded-lg mt-2 hover:bg-orange-700 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md"
            >
              Sign In
            </button>

            {/* Sign up link */}
            <p className="text-sm text-center mt-3 text-gray-700">
              Don’t have an account?{" "}
              <a
                href="#"
                className="text-orange-600 font-semibold hover:underline hover:text-orange-700"
              >
                Sign Up
              </a>
            </p>
          </form>
        </div>

        {/* Right section - image */}
        <div className="hidden md:flex md:w-1/2 justify-center items-center">
          <img
            src={Image}
            alt="Admin dashboard illustration"
            className="w-80 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
