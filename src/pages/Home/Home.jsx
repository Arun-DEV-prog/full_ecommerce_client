import React from "react";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import HowItWorks from "./HowItWorks/HowItWorks";
import TrustedBy from "./TrustedBy/TrustedBy";
import DeliveryFeatures from "./DeliveryFeatures/DeliveryFeatures";
import Marcent from "./MarcentBanner/Marcent";
import CustomerReview from "./CustorReview/CustomerReview,";
import FAQ from "./FAQ/FAQ";

const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <div data-aos="flip-right">
        <Services />
      </div>
      <section className="max-w-6xl mx-auto">
        <TrustedBy />
      </section>
      <div data-aos="fade-up-right">
        <DeliveryFeatures />
      </div>
      <div data-aos="zoom-out-right" className="max-w-6xl mx-auto mb-4">
        <Marcent />
      </div>

      <div data-aos="fade-left">
        {" "}
        <CustomerReview />{" "}
      </div>

      <div>
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
