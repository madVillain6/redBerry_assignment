import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./constants";
import LandingPage from "./LandingPage/LandingPage";
import Main from "./Main/Main";
import Education from "./Main/Form/Education";

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
