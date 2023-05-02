import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const PrivateRoute = ({ children }) => {
    const {user} = useContext(AuthContext)
    if (!user) {
        
    }
  return <div></div>;
};

export default PrivateRoute;
