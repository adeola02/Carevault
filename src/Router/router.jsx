import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Error from "../pages/Error";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        // path: "/",
        // element: ,
      },
      {
        // path: "/",
        // element: ,
      },
      {
        // path: "",
        // element: ,
      },
    ],
  },
]);
