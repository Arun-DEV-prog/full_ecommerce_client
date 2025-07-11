import React from "react";
import marcent from "../../../assets/brands/location-merchant.png";

const Marcent = () => {
  return (
    <div>
      <section className="bg-[#003E46] text-white rounded-3xl overflow-hidden py-16 px-8 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Merchant and Customer Satisfaction
              <br />
              is Our First Priority
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. Pathao courier delivers your
              parcels in every corner of Bangladesh right on time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-lime-300 text-black font-semibold text-lg px-6 py-3 rounded-full shadow-md">
                Become a Merchant
              </button>
              <button className="border border-lime-300 text-lime-300 font-semibold text-lg px-6 py-3 rounded-full shadow-md">
                Earn with Profast Courier
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src={marcent}
              alt="Courier Illustration"
              className="max-w-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marcent;
