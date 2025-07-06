import React from "react";
import casioImg from "../../../assets/brands/casio.png";
import Img2 from "../../../assets/brands/amazon_vector.png";
import casioImg3 from "../../../assets/brands/moonstar.png";
import casioImg4 from "../../../assets/brands/start.png";
import casioImg5 from "../../../assets/brands/amazon.png";
import casioImg6 from "../../../assets/brands/randstad.png";

// Brand logos array
const logos = [
  { name: "Casio", src: casioImg },
  { name: "Amazon", src: Img2 },
  { name: "Moonstar", src: casioImg3 },
  { name: "Star", src: casioImg4 },
  { name: "Cog", src: casioImg5 },
  { name: "People", src: casioImg6 },
];

const TrustedBy = () => {
  return (
    <section className="px-4 py-12 text-center bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-[#00333B] mb-10">
        We've helped thousands of sales teams
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center max-w-6xl mx-auto">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-full h-16 transition hover:scale-105 duration-300"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="max-h-12 object-contain grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
