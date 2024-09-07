import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Error from "../pages/Error";
import Header from "../components/Header/Header";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import DashBoard from "../components/DashBoard/DashBoard";
import Records from "../components/Records/Records";
import ImageUpload from "../components/Upload/Image/ImageUpload";
import PdfUpload from "../components/Upload/Pdf/PdfUpload";
import ManualUpload from "../components/Upload/Manual/ManualUpload";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Header />,
      },
      {
        // path: "",
        // element: ,
      },
    ],
  },
  {

    element: <DashBoardLayout/>,
    children:[
      {
        path:"/dashBoard",
        element:<DashBoard/>
      },
      {
        path:"/records",
        element:<Records/>
      },
      {
        path:"/uploadImage",
        element:<ImageUpload/>
      },
      {
        path:"/uploadPdf",
        element:<PdfUpload/>
      },
      {
        path:"uploadManual",
        element:<ManualUpload/>
      }
    ]
  },
]);
