import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Blogs from "../components/Blogs/Blogs";
import Home from "../components/Home/Home";
import LoginLayout from "../layout/LoginLayout";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";


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
    {
      path:"/login",
      element:<LoginLayout/>,
      children:[
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:"login/signup",
          element:<SignUp/>
        }
      ]
    }
  ]);

export default router;
