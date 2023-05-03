import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const {user} = useContext(AuthContext)
    if (!user) {
        <Navigate to="/login"/>
    }
  return <div></div>;
};

export default PrivateRoute;
