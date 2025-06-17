import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Menu, X } from "lucide-react"; // Optional: use any icon lib

export default function Navbar() {
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white/30 backdrop-blur-md shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-800">
          Smart Task <span className="text-indigo-600">Scheduler</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            to="/calendar"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Calendar
          </Link>
          <Link
            to="/tasks"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Tasks
          </Link>
          <button
            onClick={logout}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium transition"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3 px-2">
          <Link
            to="/calendar"
            className="text-gray-700 hover:text-indigo-600 transition"
            onClick={toggleMenu}
          >
            Calendar
          </Link>
          <Link
            to="/tasks"
            className="text-gray-700 hover:text-indigo-600 transition"
            onClick={toggleMenu}
          >
            Tasks
          </Link>
          <button
            onClick={() => {
              logout();
              toggleMenu();
            }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium transition"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
