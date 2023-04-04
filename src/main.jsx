import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./index.scss";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const Applayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter(
  [
    {
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ],
  { basename: "/reactv-gprui/" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
