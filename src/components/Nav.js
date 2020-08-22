import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/svg/logo.svg";
import logoMain from "../img/svg/logo_main.svg";

const activeStyle = {
  color: "#03e9f4",
  background_color: "black"
};

export default function Nav() {
  return (
    <div>
      <img src={logoMain} className="logo" alt="logo" />
      <nav className="row space-between">
        <div>
          <img src={logo} className="logo__nav" alt="logo" />
          <NavLink to="/" exact activeStyle={activeStyle} className="nav-link">
            Home
          </NavLink>
        </div>
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
            <NavLink
              to="/contact"
              activeStyle={activeStyle}
              className="nav-link"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
