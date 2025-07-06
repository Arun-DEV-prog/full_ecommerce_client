import React from "react";
import { FaTruckMoving } from "react-icons/fa"; // Example icon from react-icons

const steps = [
  {
    title: "Booking Pick & Drop",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Cash On Delivery",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Delivery Hub",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Booking SME & Corporate",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
];

const HowItWorks = () => {
  return (
    <section className="px-4 py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-[#00333B] mb-10">How it Works</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md text-center border border-gray-100"
          >
            <div className="flex justify-center mb-4">
              <FaTruckMoving className="w-10 h-10 text-[#00333B]" />
            </div>
            <h3 className="text-lg font-semibold text-[#00333B] mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
