import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Image from "../assets/Component.png";

function Signin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://attendance-demo.onrender.com/api/v1/auth/sign-in",
        {
          email: formData.email,
          password: formData.password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Sign In response:", response.data);
      setMessage("✅ Login successful! Redirecting to Dashboard...");

      // Save token (optional)
      localStorage.setItem("token", response.data.token);

      // Clear form
      setFormData({ email: "", password: "" });

      // Redirect to dashboard
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (error) {
      console.error("Sign In error:", error);
      if (error.response) {
        setMessage(`❌ ${error.response.data.message || "Login failed."}`);
      } else {
        setMessage("❌ Network error. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-[75vh] bg-white px-4">
      <div className="flex bg-blue-300 flex-col md:flex-row rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full form">
        {/* Left section - form */}
        <div className="flex flex-col justify-center items-center md:w-1/2 p-10">
          <h2 className="font-extrabold text-3xl text-orange-600 mb-6">
            Hello Admin
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full max-w-sm space-y-5 font-extrabold"
          >
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                required
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="mb-1 text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="At least 8 characters"
                required
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200"
              />
            </div>

            {message && (
              <p
                className={`text-sm text-center font-medium ${
                  message.startsWith("✅") ? "text-green-600" : "text-red-500"
                }`}
              >
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-orange-600 text-white font-bold py-2 rounded-lg mt-2 hover:bg-orange-700 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md disabled:opacity-50"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>

            <p className="text-sm text-center mt-3 text-gray-700">
              Don’t have an account?{" "}
              <Link
                to="/signup"
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

export default Signin;
