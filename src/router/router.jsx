import { createBrowserRouter } from "react-router";
import Rootlayout from "../layoutes/Rootlayout";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
