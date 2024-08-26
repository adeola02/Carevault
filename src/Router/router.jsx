import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/Layout";
import Error from "../Pages/Error";

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
