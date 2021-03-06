import React from "react";
import { withTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./navBar.css";
import { DrawerToggleButton } from "./sideDrawer/DrawerToggleButton";

const activeStyle = {
  color: "#FFF",
  backgroundColor: "",
};
function NavBar(props) {
  const t = props.t;
  return (
    <div className="topnav">
      <div className="drawer-toggle">
        <DrawerToggleButton click={props.click} />
      </div>
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
