import React from "react";

const How_It_Works = () => {
  return (
    <>
      <div className="w-full mx-auto bg-white p-12" id="how_it_works">
        <h1 className="text-black text-4xl font-bold mb-8">How It Works</h1>

        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="flex-1">
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold">
                  1
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-1">
                    Sign Up
                  </h2>
                  <p className="text-gray-600">
                    Complete our simple registration form and get approved
                    within 24 hours.
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold">
                  2
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-1">
                    Promote
                  </h2>
                  <p className="text-gray-600">
                    Share your links across social media, blogs, and other
                    channels to drive signups.
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold">
                  3
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-1">
                    Earn
                  </h2>
                  <p className="text-gray-600">
                    Get paid monthly for every successful referral with detailed
                    tracking.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex-1 bg-orange-100 p-12 rounded-lg">
            <h1 className="text-2xl font-bold text-black mb-6">
              Commission Structure
            </h1>
            <div className="space-y-4">
              <div className="flex justify-between bg-gray-100 p-4 rounded-lg shadow-sm">
                <h2 className="font-medium text-gray-800">
                  Individual Courses
                </h2>
                <h2 className="font-bold text-orange-600">20%</h2>
              </div>

              <div className="flex justify-between bg-gray-100 p-4 rounded-lg shadow-sm">
                <h2 className="font-medium text-gray-800">
                  Bootcamps Programs
                </h2>
                <h2 className="font-bold text-orange-600">25%</h2>
              </div>

              <div className="flex justify-between bg-gray-100 p-4 rounded-lg shadow-sm">
                <h2 className="font-medium text-gray-800">
                  Corporate Training
                </h2>
                <h2 className="font-bold text-orange-600">15%</h2>
              </div>

              <div className="flex justify-between bg-gray-100 p-4 rounded-lg shadow-sm">
                <h2 className="font-medium text-gray-800">Performance Bonus</h2>
                <h2 className="font-bold text-orange-600">Up to 5%</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default How_It_Works;
