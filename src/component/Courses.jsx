import React from "react";
import { FaDatabase, FaShieldAlt, FaServer, FaLaptopCode, FaCloud, FaPhotoVideo } from "react-icons/fa";

export default function Courses() {
  const courses = [
    {
      title: "Data Analysis",
      color: "bg-yellow-400",
      icon: <FaDatabase size={30} />,
      description:
        "The demand for data analysts has been on the rise due to the increasing reliance on big data and predictive analytics in driving business growth.",
    },
    {
      title: "Cyber Security",
      color: "bg-orange-500",
      icon: <FaShieldAlt size={30} />,
      description:
        "Cybersecurity is the practice of protecting networks, systems, hardware, and data from digital attacks. It involves strong security protocols and proactive defense.",
    },
    {
      title: "Backend Development",
      color: "bg-green-400",
      icon: <FaServer size={30} />,
      description:
        "Learn to develop server-side software with an emphasis on databases, back-end logic, APIs, architecture, and servers.",
    },
    {
      title: "Full Stack Development",
      color: "bg-green-400",
      icon: <FaLaptopCode size={30} />,
      description:
        "Become a software and application developer, working on all aspects of an application—from its front-end design to its back-end.",
    },
    {
      title: "Cloud Computing",
      color: "bg-yellow-400",
      icon: <FaCloud size={30} />,
      description:
        "Learn how to tackle the business challenges of cloud architecture and the flexibility of cloud computing as a cloud engineer.",
    },
    {
      title: "Visual Arts & Media Production",
      color: "bg-orange-500",
      icon: <FaPhotoVideo size={30} />,
      description: "Coming Soon",
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-6 md:px-12">
      {/* Top Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-orange-600">Courses</h2>
        <div className="w-24 h-1 bg-black mx-auto mt-2"></div>
        <p className="mt-4 text-black-700 max-w-3xl mx-auto leading-relaxed">
          Gain in-demand tech skills and unlock exciting job opportunities locally and globally.
          Our expert-led training prepares you for success in the ever-evolving tech industry.
          Explore our courses below!
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-250 ml-100">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`${course.color} p-6 rounded-2xl shadow-md hover:scale-105 transition transform duration-300`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-black">{course.icon}</span>
              <h3 className="text-xl font-bold text-black">{course.title}</h3>
            </div>

            <p className="text-black/80 leading-relaxed mb-4">
              {course.description}
            </p>

            <button className="bg-orange-600 text-white px-4 py-1 rounded-lg text-sm font-semibold hover:bg-orange-700 transition">
              Enroll
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
