import React from "react";
import { FaNairaSign } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { GiAchievement } from "react-icons/gi";

const Benefits = () => {
  return (
    <div className="w-full mx-auto bg-gray-50 py-12" id="benefits">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="font-bold text-4xl mb-2 text-black">
          Why Join Our Affiliate Program?
        </h1>
        <p className="text-xl text-gray-700 p-2 md:p-2">
          Partner with Silicon Delta and unlock exclusive benefits while helping
          others advance their tech careers
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 py-4 mb-10">
        <div className="text-center rounded-lg p-8 w-72 shadow-md bg-white transform transition duration-300 hover:scale-95 hover:shadow-lg">
          <div className="bg-orange-100 text-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <FaNairaSign className="text-2xl" />
          </div>
          <h2 className="font-semibold text-lg mb-2">High Commission</h2>
          <p className="text-gray-500 text-md">
            Earn up to 35% commission on every successful referral with no cap
            on earnings
          </p>
        </div>

        <div className="text-center rounded-lg p-8 w-72 shadow-md bg-white transform transition duration-300 hover:scale-95 hover:shadow-lg">
          <div className="bg-orange-100 text-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <FaChartLine className="text-2xl" />
          </div>
          <h2 className="font-semibold text-lg mb-2">Growing Market</h2>
          <p className="text-gray-500 text-md">
            Tech education is booming with increasing demand for skilled
            professionals
          </p>
        </div>

        <div className="text-center rounded-lg p-8 w-72 shadow-md bg-white transform transition duration-300 hover:scale-95 hover:shadow-lg">
          <div className="bg-orange-100 text-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <IoPeople className="text-2xl" />
          </div>
          <h2 className="font-semibold text-lg mb-2">Marketing Support</h2>
          <p className="text-gray-500 text-md">
            Access to marketing materials, banners, and dedicated affiliate
            support team
          </p>
        </div>

        <div className="text-center rounded-lg p-8 w-72 shadow-md bg-white transform transition duration-300 hover:scale-95 hover:shadow-lg">
          <div className="bg-orange-100 text-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <GiAchievement className="text-2xl" />
          </div>
          <h2 className="font-semibold text-lg mb-2">Performance Bonuses</h2>
          <ul className="text-gray-500 text-md">
            <li>iPhone</li>
            <li>Macbook</li>
            <li>Generator</li>
            <li>55-inches TV</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
