import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Blogs from "../components/Blogs/Blogs";
import Home from "../components/Home/Home";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/blogs",
            element:<Blogs/>
        }
      ]
    },
  ]);

export default router;
