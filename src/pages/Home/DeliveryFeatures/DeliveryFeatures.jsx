import React from "react";
import { FaBox, FaPhoneAlt, FaTruck } from "react-icons/fa";

const features = [
  {
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    icon: <FaTruck className="text-4xl text-primary" />,
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    icon: <FaBox className="text-4xl text-primary" />,
  },
  {
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    icon: <FaPhoneAlt className="text-4xl text-primary" />,
  },
];

export default function DeliveryFeatures() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 grid gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center gap-6 p-6 shadow-md rounded-2xl bg-white border border-gray-100"
        >
          <div className="bg-gray-100 p-4 rounded-full shadow-md">
            {feature.icon}
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-base text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
