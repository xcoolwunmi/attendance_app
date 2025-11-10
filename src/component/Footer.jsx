import React from "react";
import Image from "../assets/ekiti-logo.png";

function Footer() {
  return (
    <footer className="bg-green-700 text-white py-6 flex justify-center items-center font-extrabold">
      <div className="flex flex-row justify-center items-center gap-6 text-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Image} alt="ekiti-logo" className="w-16 h-auto" />
          <span>Powered by Wakacode</span>
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-white opacity-50"></div>

        {/* Terms */}
        <p>Terms & Conditions</p>

        {/* Divider */}
        <div className="h-6 w-px bg-white opacity-50"></div>

        {/* Rights */}
        <p>© 2025 All Rights Reserved</p>

      </div>
    </footer>
  );
}

export default Footer;
