import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Image from "../assets/component.png";

function Signin() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);
const navigate = useNavigate();

const handleSubmit = async (e) => {
e.preventDefault();
setError("");
setLoading(true);


try {
  const response = await fetch(
    "https://attendance-demo.onrender.com/api/v1/auth/sign-in",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  localStorage.setItem("token", data.token);
  navigate("/dashboard");
} catch (err) {
  setError(err.message);
} finally {
  setLoading(false);
}


};

return ( <div className="flex justify-center items-center h-[75vh] bg-white px-4"> <div className="flex bg-blue-300 flex-col md:flex-row rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full form">
{/* Form Section */} <div className="flex flex-col justify-center items-center md:w-1/2 p-10"> <h2 className="font-extrabold text-3xl text-orange-600 mb-6">
Hello Admin </h2>


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
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1 text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="At least 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200"
            required
          />
        </div>

        {error && <p className="text-red-600 font-semibold">{error}</p>}

        <div className="text-right">
          <a
            href="#"
            className="text-sm text-orange-600 hover:underline hover:text-orange-700 transition-colors"
          >
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-orange-600 text-white font-bold py-2 rounded-lg mt-2 hover:bg-orange-700 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>

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

    {/* Image Section */}
    <div className="hidden md:flex md:w-1/2 justify-center items-center">
      <img
        src={Image}
        alt="Admin dashboard illustration"
        className="object-contain"
      />
    </div>
  </div>
</div>


);
}

export default Signin;
