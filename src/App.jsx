import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./constants";
import LandingPage from "./pages/LandingPage/LandingPage";
import Main from "./pages/Main/Main";

const router = createBrowserRouter([
  {
    path: ROUTES.landingPage,
    element: <LandingPage />,
  },
  {
    path: ROUTES.personalInfo,
    element: <Main />,
  },
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
