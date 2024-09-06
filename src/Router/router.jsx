import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Error from "../pages/Error";
import SignUp from "../Auth/SignUp";
import Login from "../Auth/Login";
import ForgotPassword from "../Auth/ForgotPassword";
import ResetPassword from "../Auth/ResetPassword";
import SuccessPage from "../Auth/SuccessPage";
import Verification from "../Auth/Verification";
import { Otp } from "../Auth/Otp";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
// import Header from "../components/Header/Header";

export const router = createBrowserRouter([
  {
    path: "sign- up",
    element: <SignUp />,
  },

  {
    path: "login",
    element: <Login />,
  },

  {
    path: "forgotpassword",
    element: <ForgotPassword />,
  },

  {
    path: "resetpassword",
    element: <ResetPassword />,
  },

  {
    path: "successpage",
    element: <SuccessPage />,
  },

  {
    path: "verification",
    element: <Verification />,
  },

  {
    path: "otp",
    element: <Otp />,
  },

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
