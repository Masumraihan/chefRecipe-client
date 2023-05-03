import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation()

  if (loading) {
    return <Loader />;
  } else if (!user) {
    return <Navigate to='/login' state={{from:location}} replace/>;
  } else {
    return children;
  }
};

export default PrivateRoute;
