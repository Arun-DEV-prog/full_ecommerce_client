import React from "react";
import CoverageMap from "./CoverageMap";

const Coverage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        We are available in 64 districts
      </h2>

      {/* Later you will add your Search Box here */}
      {/* <SearchDistrict /> */}

      <CoverageMap />
    </div>
  );
};

export default Coverage;
