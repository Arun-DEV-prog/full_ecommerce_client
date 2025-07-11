import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "aos/dist/aos.css";
import AOS from "aos";
// You can also use <link> for styles
// ..
AOS.init();
import { RouterProvider } from "react-router";
import { router } from "./router/router.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <div className="font-urbanist max-w-7xl  mx-auto">
        <RouterProvider router={router}></RouterProvider>
      </div>
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
