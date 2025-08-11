import React from "react";

const Form = () => {
  return (
    <>
      <div
        className="w-full flex flex-col justify-center items-center bg-gray-50"
        id="form"
      >
        <div className="text-center mb-8 p-8 ">
          <h1 className="font-bold text-4xl mb-2 text-black">
            Join the Silicon Delta Affiliate Program
          </h1>
          <p className="text-xl text-gray-700 p-2 md:p-4">
            Start earning commissions by promoting quality tech education
          </p>

          <div className="max-w-2xl md:mx-auto bg-white p-8 rounded-xl shadow">
            <h1 className="font-bold text-2xl text-black mb-2">
              Affiliate Registration
            </h1>
            <p className="text-gray-500 mb-8">
              Fill out the form below to get started. We'll review your
              application within 24 hours.
            </p>
            <form>
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                {/* First Name */}
                <div className="flex flex-col w-full md:w-1/2">
                  <label
                    htmlFor="firstName"
                    className="font-semibold text-md text-black mb-1 text-left"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Enter your first name"
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Last Name */}
                <div className="flex flex-col w-full md:w-1/2">
                  <label
                    htmlFor="lastName"
                    className="font-semibold text-md text-black mb-1 text-left"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Enter your last name"
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full mb-4">
                <label
                  htmlFor="Emailaddress"
                  className="font-semibold text-md text-black mb-1 text-left w-full"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your last name"
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col w-full mb-4">
                <label
                  htmlFor="Emailaddress"
                  className="font-semibold text-md text-black mb-1 text-left w-full"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your last name"
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col w-full md:w-1/2 mb-4">
                <label
                  htmlFor="select"
                  className="font-semibold text-md text-black mb-1 text-left w-full"
                >
                  Minimum Target
                </label>
                <select
                  id="exampleSelect"
                  name="exampleSelect"
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  <option value="" className="px-2 text-black-500">
                    Select your minimum target
                  </option>
                  <option value="option1">1 - 20 target</option>
                  <option value="option2">20 - 40 target</option>
                  <option value="option3">40 - 60 target</option>
                  <option value="option4">60 - 80 target</option>
                  <option value="option5">80 - 100 target</option>
                </select>
              </div>

              <div className="flex flex-col w-full md:w-1/2 mb-4">
                <label
                  htmlFor="select"
                  className="font-semibold text-md text-black mb-1 text-left w-full"
                >
                  Affiliate Marketing Experience
                </label>
                <select
                  id="exampleSelect"
                  name="exampleSelect"
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  <option value="" className="px-2 text-black-500">
                    Select your experience level
                  </option>
                  <option value="option1">Beginner(0 - 1 years)</option>
                  <option value="option2">Intermediate(1 - 3 years)</option>
                  <option value="option3">Advanced( 3+ years)</option>
                </select>
              </div>

              <div className="flex flex-col w-full mb-4">
                <label
                  htmlFor="Emailaddress"
                  className="font-semibold text-md text-black mb-1 text-left w-full"
                >
                  How do you plan to promote Silicon Delta ?
                </label>

                <textarea
                  name="textarea"
                  rows="5"
                  cols="15 "
                  placeholder="Describe your promotion strategy (blog posts, social media, email marketing, etc.)"
                  className="p-2 border border-gray-500 rounded-lg"
                ></textarea>
              </div>

              <div className="flex justify-start items-center w-full mb-4 gap-8">
                <input type="checkbox" className="accent-black" />
                <p>
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-orange-500 font-bold hover:underline"
                  >
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-orange-500 font-bold hover:underline"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>

              <div className="flex justify-start items-center gap-8 mb-4">
                <input type="checkbox" className="accent-black" />
                <p>
                  I would like to receive marketing updates and affiliate
                  programs
                </p>
              </div>

              <button className="w-full p-2 rounded-lg font-bold text-white bg-orange-500 hover:bg-orange-700">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
