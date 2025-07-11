import { createBrowserRouter } from "react-router";
import Rootlayout from "../layoutes/Rootlayout";
import Home from "../pages/Home/Home";
import Authlayout from "../layoutes/Authlayout";
import Login from "../pages/Home/Authtication/Login";
import Register from "../pages/Home/Authtication/Register";
import Coverage from "../pages/Home/Coverage/Coverage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "coverage",
        Component: Coverage,
      },
    ],
  },
  {
    path: "/",
    Component: Authlayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);
