import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({children,to}) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "text-primary tracking-wide" : ""
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
