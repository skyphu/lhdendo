import React from "react";
import { withTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./navBar.css";

const activeStyle = {
  color: "#FFF",
  backgroundColor: "",
};
function NavBar({ t }) {
  return (
    <div className="topnav" id="app-topnav">
      <nav className="topnav-banner">
        <ul>
          <li>
            <NavLink
              to="/"
              className="nav-item"
              activeStyle={activeStyle}
              exact
            >
              {t("home")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-item" activeStyle={activeStyle}>
              {t("about")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="nav-item" activeStyle={activeStyle}>
              {t("blog")}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default withTranslation()(NavBar);
