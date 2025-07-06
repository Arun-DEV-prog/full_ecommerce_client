import React from "react";
import {
  FaTruckMoving,
  FaGlobeAsia,
  FaWarehouse,
  FaMoneyBillAlt,
  FaHandshake,
  FaUndo,
} from "react-icons/fa";

const services = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    icon: <FaTruckMoving className="text-3xl text-[#00333B]" />,
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    highlight: true,
    icon: <FaGlobeAsia className="text-3xl text-[#00333B]" />,
  },
  {
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    icon: <FaWarehouse className="text-3xl text-[#00333B]" />,
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon: <FaMoneyBillAlt className="text-3xl text-[#00333B]" />,
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
    icon: <FaHandshake className="text-3xl text-[#00333B]" />,
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    icon: <FaUndo className="text-3xl text-[#00333B]" />,
  },
];

const Services = () => {
  return (
    <div className="bg-[#00333B] text-white px-4 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Our Services</h2>
        <p className="text-gray-200 mb-12">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 text-left bg-white shadow-md transition ${
                service.highlight ? "bg-lime-200 text-black" : "text-gray-800"
              }`}
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 mx-auto">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-sm text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
