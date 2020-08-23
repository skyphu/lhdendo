import React from "react";
import { NavLink } from "react-router-dom";
import { withTranslation } from "react-i18next";

import "./sideDrawer.css";

function SideDrawer(props) {
  const t = props.t;
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  const activeStyle = {};
  return (
    <>
      <nav className={drawerClasses}>
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
    </>
  );
}

export default withTranslation()(SideDrawer);
