import React, { useState } from "react";
import Image from "../assets/ekiti-logo.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Head() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-orange-600 p-5 flex justify-between items-center shadow-xl relative">
      
      {/* Left side - logo & title */}
      <div className="flex items-center gap-4">
        <img src={Image} alt="ekiti-logo" className="w-16 md:w-20" />
        <h1 className="font-extrabold text-2xl md:text-3xl text-white">
          EKITI MSME ICT HUB
        </h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-4 font-extrabold">
        <button className="bg-amber-300 h-10 px-4 rounded-xl transform transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg">
          Mark Attendance
        </button>

        <div className="h-10 border-l-2 border-dashed border-white"></div>

        {/* Admin Button — now links to Sign In page */}
        <Link to="/sign-in">
          <button className="bg-amber-300 h-10 px-6 rounded-xl transform transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg">
            Admin
          </button>
        </Link>
      </div>

      {/* Hamburger button (mobile only) */}
      <button
        className="md:hidden text-white transition-transform duration-200 hover:scale-110 active:scale-95"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="absolute top-20 right-5 bg-orange-600 shadow-lg rounded-lg p-5 flex flex-col gap-4 font-bold md:hidden z-50 transition-all duration-300">
          <button className="bg-amber-300 h-10 rounded-xl px-4 transform transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg">
            Mark Attendance
          </button>

          <div className="border-t-2 border-dashed border-white"></div>

          {/* Mobile Admin Button — links to Sign In */}
          <Link to="/sign-in">
            <button className="bg-amber-300 h-10 rounded-xl px-6 transform transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg">
              Admin
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Head;
