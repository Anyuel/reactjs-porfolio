import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './utils/i18n';
import './main.scss';
import Home from "./pages/Home";
import Works from "./pages/Works";
import AboutMe from "./pages/AboutMe";
import Contacts from "./pages/Contacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/works",
    element: <Works />
  },
  {
    path: "/about-me",
    element: <AboutMe />
  },
  {
    path: "/contacts",
    element: <Contacts />
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);