import React from "react";
import Image from "../assets/Component.png"; // Replace with your image

function Signup() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#EAF5F4] px-6 py-10">
      {/* Main container */}
      <div className="flex flex-col md:flex-row  rounded-2xl shadow-2xl overflow-hidden max-w-6xl w-full">
        
        {/* Left section - form */}
        <div className="flex flex-col justify-center items-center md:items-start md:w-1/2 px-8 md:px-14 py-10">
          <h2 className="font-extrabold text-3xl text-orange-600 mb-8 self-start">
            Sign Up
          </h2>

          <form className="flex flex-col w-full space-y-5 font-semibold">
            {/* Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Full Name"
                className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Example@Email.Com"
                className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Track */}
            <div className="flex flex-col">
              <label htmlFor="track" className="text-gray-700 mb-1">
                Track
              </label>
              <select
                id="track"
                className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="">Select Track</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="uiux">UI/UX Design</option>
                <option value="data">Data Science</option>
              </select>
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label htmlFor="password" className="text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="At Least 8 Characters"
                className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Re-enter Password */}
            <div className="flex flex-col">
              <label htmlFor="repassword" className="text-gray-700 mb-1">
                Re-Enter Password
              </label>
              <input
                type="password"
                id="repassword"
                placeholder="Re-Enter Password"
                className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="bg-orange-600 text-white font-bold py-2 rounded-lg mt-4 hover:bg-orange-700 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md"
            >
              Sign Up
            </button>

            {/* Sign In link */}
            <p className="text-sm text-center mt-4 text-gray-600">
              Already Have An Account?{" "}
              <a
                href="#"
                className="text-orange-600 font-semibold hover:underline hover:text-orange-700"
              >
                Sign In
              </a>
            </p>
          </form>
        </div>

        {/* Right section - image */}
        <div className="hidden md:flex md:w-1/2 justify-center items-center bg-[#EAF5F4] relative p-10">
          {/* Orange shape behind image */}
          <div className="absolute w-[300px] h-[380px] bg-orange-500 rounded-[60%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"></div>
          
          <img
            src={Image}
            alt="Signup illustration"
            className="w-[800px] h-auto object-contain relative z-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
