import React, { useState } from "react";
import { ChevronDown, LogOut, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ user }) {
  const [open, setOpen] = useState(false);

  // Dynamic Date
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex justify-between items-center py-4 px-6 border-b bg-white shadow-sm">
      {/* Title */}
      <h2 className="text-xl font-bold text-orange-600">Admin Dashboard</h2>

      {/* Right */}
      <div className="flex items-center gap-6">
        {/* Dynamic Date */}
        <p className="text-orange-500 font-medium hidden md:block">
          {date}
        </p>

        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src={user.image}
              alt="profile"
              className="w-10 h-10 rounded-full border"
            />
            <div className="text-left hidden sm:block">
              <p className="font-semibold text-sm">{user.name}</p>
              <p className="text-xs text-gray-500">{user.role}</p>
            </div>
            <ChevronDown size={18} className="text-gray-600" />
          </button>

          {/* Dropdown */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-2 w-40 bg-white shadow-xl rounded-md border z-50"
              >
                <button className="w-full flex items-center px-4 py-2 text-sm hover:bg-gray-100 gap-2">
                  <User size={16} /> Profile
                </button>
                <button className="w-full flex items-center px-4 py-2 text-sm hover:bg-gray-100 gap-2 text-red-600">
                  <LogOut size={16} /> Logout
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
