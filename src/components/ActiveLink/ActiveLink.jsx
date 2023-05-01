import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({children,to}) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "text-primary" : ""
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
