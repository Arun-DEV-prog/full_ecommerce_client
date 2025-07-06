import React from "react";
import { Outlet } from "react-router";
import Navber from "../pages/Home/shared/navber/Navber";
import Footer from "../pages/Home/shared/Footer/Footer";

const Rootlayout = () => {
  return (
    <div>
      <Navber />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Rootlayout;
