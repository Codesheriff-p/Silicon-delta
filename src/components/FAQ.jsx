import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const FAQ = () => {
  return (
    <>
      <div
        className="w-full flex flex-col justify-center items-center bg-white py-12 px-4"
        id="faq"
      >
        <h1 className="font-bold text-4xl mb-2 text-black mb-8 text-center">
          Frequently Asked Questions
        </h1>

        <div className="shadow-md border border-gray-300 w-3/5 mx-auto p-7 rounded-lg mb-4">
          <div className="flex items-center space-x-3 mb-4">
            <IoMdCheckmarkCircleOutline className="text-green-500 text-xl" />
            <h2 className="font-bold text-black mb-4">
              How much can I earn as an affiliate?
            </h2>
          </div>

          <p className="text-gray-500">
            Earnings vary based on your promotional efforts and audience. Our
            top affiliates earn $1,000+ monthly, with commissions ranging from
            15-25% depending on the product type.
          </p>
        </div>
        <div className="shadow-md border-[0.5px] border-gray-300 border-0.5 w-3/5 mx-auto p-7 rounded-lg mb-4">
          <div className="flex items-center space-x-3 mb-4">
            <IoMdCheckmarkCircleOutline className="text-green-500 text-xl" />
            <h2 className="font-bold text-black mb-4">When do I get paid?</h2>
          </div>
          <p className="text-gray-500">
            Commissions are paid monthly via PayPal or bank transfer. Payments
            are processed within the first week of each month for the previous
            month's earnings.
          </p>
        </div>
        <div className="shadow-md border-[0.5px] border-gray-300 border-0.5 w-3/5 mx-auto p-7 rounded-lg mb-4">
          <div className="flex items-center space-x-3 mb-4">
            <IoMdCheckmarkCircleOutline className="text-green-500 text-xl" />
            <h2 className="font-bold text-black mb-4">
              What marketing materials do you provide?
            </h2>
          </div>
          <p className="text-gray-500">
            We provide banners, email templates, course descriptions,
            promotional videos, and social media content. All materials are
            regularly updated and optimized for conversions.
          </p>
        </div>
        <div className="shadow-md border-[0.5px] border-gray-300 border-0.5 w-3/5 mx-auto p-7 rounded-lg mb-4">
          <div className="flex items-center space-x-3 mb-4">
            <IoMdCheckmarkCircleOutline className="text-green-500 text-xl" />
            <h2 className="font-bold text-black mb-4">
              Is there a minimum payout threshold?
            </h2>
          </div>
          <p className="text-gray-500">
            Yes, the minimum payout threshold is $50. If you don't reach this
            amount in a month, your earnings will roll over to the next month.
          </p>
        </div>
      </div>
    </>
  );
};

export default FAQ;
