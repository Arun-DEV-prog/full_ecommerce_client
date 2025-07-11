import React from "react";
import Marquee from "react-fast-marquee";

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

      <Marquee speed={40} gradient={false} pauseOnHover={true} className="py-4">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="mx-8 flex justify-center items-center h-16"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="max-h-12 object-contain"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default TrustedBy;
