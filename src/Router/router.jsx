import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
// import Header from "../components/Header/Header";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        // path: "",
        // element: ,
      },
    ],
  },
]);
