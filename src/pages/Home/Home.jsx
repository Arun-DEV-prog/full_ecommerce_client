import React from "react";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import HowItWorks from "./HowItWorks/HowItWorks";
import TrustedBy from "./TrustedBy/TrustedBy";
import DeliveryFeatures from "./DeliveryFeatures/DeliveryFeatures";

const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <Services />
      <section className="max-w-6xl mx-auto">
        <TrustedBy />
      </section>
      <DeliveryFeatures />
    </div>
  );
};

export default Home;
