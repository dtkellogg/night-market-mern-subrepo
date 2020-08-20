import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "rgba(187,46,31",
};

export default function Nav() {
  return (
    <nav className="row space-between">
      <NavLink to="/" exact activeStyle={activeStyle} className="nav-link">
        Home
      </NavLink>
      <ul className="row nav">
        <li>
          <NavLink to="/about" activeStyle={activeStyle} className="nav-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/team" activeStyle={activeStyle} className="nav-link">
            Team
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/involved"
            activeStyle={activeStyle}
            className="nav-link"
          >
            Involved
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeStyle={activeStyle} className="nav-link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
