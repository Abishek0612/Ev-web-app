import React from "react";
import { Link } from "react-router-dom";
import { MdElectricalServices } from "react-icons/md";

const Sidebar = ({ isOpen }) => {
  const navigation = [
    { name: "Consumption", icon: MdElectricalServices, path: "/" },
  ];

  return (
    <div
      className={`fixed z-90 inset-y-0 left-0 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0 transition duration-300 ease-in-out bg-indigo-800 shadow-lg w-64 space-y-6 py-7 px-2 min-h-screen`}
    >
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className="flex items-center text-white px-4 mt-14 py-2 hover:bg-indigo-700 rounded"
        >
          <item.icon className="w-6 h-6 mr-3" aria-hidden="true" />
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
