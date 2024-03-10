import React from "react";
import { FaBars } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { useTheme } from "../../contexts/ThemeContext";
import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import { MdElectricBolt } from "react-icons/md";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-white text-black flex justify-between items-center z-100 relative p-4 shadow-md   ">
      <Link to="/" className="hover:bg-indigo-600 p-2 rounded gap-2 flex">
        <MdElectricBolt size={26} color="currentColor" />
        <div className="text-3xl font-bold ">EV </div>
      </Link>

      <div className="md:flex space-x-4 items-center ">
        <button
          onClick={toggleTheme}
          className="text-xl p-2  bg-black rounded hover:bg-indigo-600"
        >
          {theme === "dark" ? (
            <BsSun className="w-6 h-6  text-white" />
          ) : (
            <MdDarkMode className="w-6 h-6  text-white" />
          )}
        </button>

        <Link to="/about" className="hover:bg-indigo-600 p-2 rounded">
          About
        </Link>
      </div>

      {isSidebarOpen ? (
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden block  text-xl"
        >
          <IoIosCloseCircle className="w-6 h-6" />
        </button>
      ) : (
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden block"
        >
          <FaBars className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
