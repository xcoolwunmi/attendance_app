import { HomeIcon, ClipboardListIcon } from "lucide-react";
import logo from "../assets/ekiti-logo.png";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 h-screen p-5 flex flex-col border-r">
      <div className="flex justify-center mb-8">
        <img src={logo} alt="logo" className="w-24" />
      </div>

      <div className="space-y-4">
        <button className="flex items-center gap-3 text-orange-600 font-semibold">
          <HomeIcon size={20} />
          Dashboard
        </button>

        <button className="flex items-center gap-3 text-gray-500 hover:text-orange-600">
          <ClipboardListIcon size={20} />
          Manage Attendance
        </button>
      </div>
    </div>
  );
}