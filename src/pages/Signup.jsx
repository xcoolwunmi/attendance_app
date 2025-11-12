import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import Image from "../assets/Component.png";
import { Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate(); // ✅ initialize navigate hook

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    track: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://attendance-demo.onrender.com/api/v1/auth/sign-up",
        {
          name: formData.name,
          email: formData.email,
          track: formData.track,
          password: formData.password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Signup response:", response.data);
      setMessage("✅ Signup successful! Redirecting to Sign In...");

      // Clear form
      setFormData({ name: "", email: "", track: "", password: "" });

      // ✅ Redirect after 2 seconds
      setTimeout(() => {
        navigate("/sign-in");
      }, 2000);
    } catch (error) {
      console.error("Signup error:", error);
      if (error.response) {
        setMessage(`❌ ${error.response.data.message || "Signup failed."}`);
      } else {
        setMessage("❌ Network error. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#EAF5F4] px-6 py-10">
      {/* Main container */}
      <div className="flex flex-col md:flex-row rounded-2xl shadow-2xl overflow-hidden max-w-6xl w-full">
        {/* Left section - form */}
        <div className="flex flex-col justify-center items-center md:items-start md:w-1/2 px-8 md:px-14 py-10">
          <h2 className="font-extrabold text-3xl text-orange-600 mb-8 self-start">
            Sign Up
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full space-y-5 font-semibold"
          >
            {/* Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Full Name"
                required
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
                value={formData.email}
                onChange={handleChange}
                placeholder="Example@Email.Com"
                required
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
                value={formData.track}
                onChange={handleChange}
                required
                className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="">Select Track</option>
                <option value="Fullstack Development">
                  Fullstack Development
                </option>
                <option value="Backend Development">Backend Development</option>
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
                value={formData.password}
                onChange={handleChange}
                placeholder="At Least 8 Characters"
                required
                className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Feedback Message */}
            {message && (
              <p
                className={`text-sm text-center font-medium ${
                  message.startsWith("✅") ? "text-green-600" : "text-red-500"
                }`}
              >
                {message}
              </p>
            )}

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-orange-600 text-white font-bold py-2 rounded-lg mt-4 hover:bg-orange-700 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md disabled:opacity-50"
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>

            {/* Sign In link */}
            <p className="text-sm text-center mt-4 text-gray-600">
              Already Have An Account?{" "}
              <Link
                to="/sign-in"
                className="text-orange-600 font-semibold hover:underline hover:text-orange-700"
              >
                Sign In
              </Link>
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
