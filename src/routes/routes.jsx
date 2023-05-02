import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Blogs from "../components/Blogs/Blogs";
import Home from "../components/Home/Home";
import LoginLayout from "../layout/LoginLayout";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import RecipeLayout from "../layout/RecipeLayout";
import Recipes from "../components/Recipes/Recipes";


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
      path:"login",
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
    },
    {
      path:"recipes",
      element:<RecipeLayout/>,
      children:[
        {
          path:":id",
          element:<Recipes/>,
          loader:({params}) => fetch(`https://chef-recipe-assignment-server-masumraihan.vercel.app/recipes/${params.id}`)
        }
      ]
    }
  ]);

export default router;
