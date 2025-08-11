import React from "react";
import logo from "../images/logo.png";

const Footers = () => {
  return (
    <>
      <div className="bg-slate-900" id="footer">
        {/* Footer content */}
        <div className="flex flex-col md:flex-row md:items-start justify-center w-full mx-auto py-12 mb-10 gap-8 px-6">
          {/* Logo + Description */}
          <div className="w-full md:w-80">
            <div className="flex items-center space-x-2 py-4">
              {/* <div className="px-2 w-8 h-8 bg-gradient-to-br rotate-45 from-orange-400 to-red-500 rounded-sm mr-4"></div> */}
              <img
                src={logo}
                alt="Silicon logo"
                width="30"
                height="auto bg-none"
              />
              <h1 className="font-bold text-xl text-white">Silicon Delta</h1>
            </div>
            <p className="text-gray-400">
              Empowering individuals for the future of technology through
              innovative education and training programs.
            </p>
          </div>

          {/* Affiliate Programs */}
          <div>
            <h1 className="font-bold text-xl text-white py-4">
              Affiliate Programs
            </h1>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white text-gray-400">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-gray-400">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-gray-400">
                  Register
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-gray-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h1 className="font-bold text-xl text-white py-4">Support</h1>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white text-gray-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-gray-400">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-gray-400">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-gray-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h1 className="font-bold text-xl text-white py-4">Connect</h1>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white text-gray-400">
                  Main Website
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-gray-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-gray-400">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-gray-400">
                  Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="w-4/5 mx-auto text-center pb-6">
          <hr className="py-4 border-gray-700" />
          <p className="text-gray-400 pb-4 font-bold">
            © 2024 Silicon Delta. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footers;
