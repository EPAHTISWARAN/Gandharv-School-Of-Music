import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../../pages/Home";
import Courses from "../../pages/Courses";
import About from "../../pages/About";
import Events from "../../pages/Events";
import Enquiry from "../../pages/Enquiry";

import VocalMusic from "../../pages/Courses/VocalMusic";
import InstrumentalMusic from "../../pages/Courses/InstrumentalMusic";
import Dance from "../../pages/Courses/Dance";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "courses/vocal",
        element: <VocalMusic />,
      },
      {
        path: "courses/instrumental",
        element: <InstrumentalMusic />,
      },
      {
        path: "courses/dance",
        element: <Dance />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "enquiry",
        element: <Enquiry />,
      },
    ],
  },
]);