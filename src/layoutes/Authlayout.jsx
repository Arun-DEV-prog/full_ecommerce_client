import React from "react";
import { Outlet } from "react-router";
import authLogo from "../assets/banner/authImage.png";
import ProfastLogo from "../pages/Home/shared/ProfastLogo/ProfastLogo";
const Authlayout = () => {
  return (
    <div>
      <div className=" p-12 bg-base-200 m">
        <ProfastLogo />
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className=" flex-1">
            <img src={authLogo} className="max-w-sm rounded-lg shadow-2xl" />
          </div>
          <div className=" flex-1">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authlayout;
