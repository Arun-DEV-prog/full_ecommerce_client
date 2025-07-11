import React from "react";
import cartlog from "../../../assets/brands/customer-top.png";

const CustomerReview = () => {
  return (
    <div>
      <>
        {/* Banner Section */}
        {/* <section className="bg-[#003E46] text-white rounded-3xl overflow-hidden py-16 px-8 md:px-24 mb-16">
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
                src="/path/to/your/image.png"
                alt="Courier Illustration"
                className="max-w-md"
              />
            </div>
          </div>
        </section> */}

        {/* Testimonials Section */}
        <section className="text-center py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto mb-12">
            <img src={cartlog} alt="Section Icon" className="mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#003E46] mb-4">
              What our customers are sayings
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Enhance posture, mobility, and well-being effortlessly with
              Posture Pro. Achieve proper alignment, reduce pain, and strengthen
              your body with ease!
            </p>
          </div>

          {/* Carousel of testimonials */}
          <div className="carousel space-x-4 flex items-stretch justify-center overflow-x-auto px-2 md:px-0">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="bg-white text-left rounded-2xl shadow-md p-6 max-w-sm min-w-[300px] mx-2"
              >
                <div className="text-4xl text-cyan-400 mb-4">“</div>
                <p className="text-gray-600 mb-6">
                  A posture corrector works by providing support and gentle
                  alignment to your shoulders, back, and spine, encouraging you
                  to maintain proper posture throughout the day.
                </p>
                <hr className="border-dashed border-t-2 border-cyan-300 mb-4" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#003E46] rounded-full"></div>
                  <div>
                    <p className="font-bold text-[#003E46]">
                      {index === 1
                        ? "Rasel Ahamed"
                        : index === 2
                        ? "Awlad Hossin"
                        : "Nasir Uddin"}
                    </p>
                    <p className="text-sm text-gray-500">
                      {index === 1
                        ? "CTO"
                        : index === 2
                        ? "Senior Product Designer"
                        : "CEO"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination & Navigation */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button className="bg-white text-[#003E46] w-10 h-10 rounded-full shadow flex items-center justify-center">
              ←
            </button>
            <div className="flex gap-2">
              <span className="w-2 h-2 bg-[#003E46] rounded-full"></span>
              <span className="w-2 h-2 bg-[#D9D9D9] rounded-full"></span>
              <span className="w-2 h-2 bg-[#D9D9D9] rounded-full"></span>
            </div>
            <button className="bg-lime-300 text-[#003E46] w-10 h-10 rounded-full shadow flex items-center justify-center">
              →
            </button>
          </div>
        </section>
      </>
    </div>
  );
};

export default CustomerReview;
