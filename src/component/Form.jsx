
import Image from "../assets/Component.png";
import { Link } from "react-router-dom";

function Form() {
  return (
    <div className="flex justify-center items-center h-[75vh] bg-white px-4">
      {/* Main container */}
      <div className="flex bg-blue-300 flex-col md:flex-row rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full form">
        
        {/* Left section - form */}
        <div className="flex flex-col justify-center items-center md:w-1/2 p-10">
          <h2 className="font-extrabold text-3xl text-orange-600 mb-6">
            Hello Admin 
          </h2>

          <form className="flex  flex-col w-full max-w-sm space-y-5 font-extrabold">
            {/* Email field */}
            <div className="flex flex-col">
              <label htmlFor="email" className=" mb-1 text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@email.com"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200"
              />
            </div>

            {/* Password field */}
            <div className="flex flex-col">
              <label htmlFor="password" className=" mb-1 text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="At least 8 characters"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200"
              />
            </div>

            {/* Forgot password */}
            <div className="text-right">
              <a
                href="#"
                className="text-sm text-orange-600 hover:underline hover:text-orange-700 transition-colors"
              >
                Forgot Password?
              </a>
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
  <Link
    to="/Signup"
    className="text-orange-600 font-semibold hover:underline hover:text-orange-700"
  >
    Sign Up
  </Link>
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

export default Form;
