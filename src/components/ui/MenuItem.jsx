import React from "react";
import { NavLink } from "react-router";

const MenuItem = ({ path, text, Icon }) => {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `btn btn-ghost font-semibold text-lg py-6 px-5 rounded-md flex items-center justify-center transition-all ${isActive ? "bg-[#244d3f] text-[#FFFFFF]" : "text-black"}`
        }
      >
        <Icon size={22} />
        {text}
      </NavLink>
    </li>
  );
};

export default MenuItem;
