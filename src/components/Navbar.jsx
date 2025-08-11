import React from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between p-4 sm:px-14 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          {/* <div className="px-2 w-8 h-8 bg-gradient-to-br rotate-45 from-orange-400 to-red-500 rounded-sm"></div> */}
          <img
            src={logo}
            alt="Silicon logo"
            width="30"
            height="auto"
            srcset=""
          />
          <h1 className="font-bold text-xl">Silicon Delta</h1>
        </div>

        {/* Navigation links */}
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <a
              href="#form"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              Program Details
            </a>
          </li>
          <li>
            <a
              href="#benefits"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              Benefits
            </a>
          </li>
          <li>
            <a
              href="#form"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              Register
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              FAQ
            </a>
          </li>
        </ul>

        {/* Right-side actions */}
        <div className="flex items-center space-x-4">
          <a
            href="https://silicondelta.io/"
            className="hover:text-orange-500 transition"
          >
            Main Site
          </a>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
            Login
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
