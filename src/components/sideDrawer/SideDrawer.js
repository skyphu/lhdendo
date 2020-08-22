import React from "react";
import { NavLink } from "react-router-dom";
import { withTranslation } from "react-i18next";
import Backdrop from "../common/Backdrop";

import "./sideDrawer.css";

function SideDrawer({ t }) {
  const activeStyle = {};
  return (
    <nav className="side-drawer">
      <ul>
        <li>
          <NavLink to="/" className="nav-item" activeStyle={activeStyle} exact>
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
      <Backdrop />
    </nav>
  );
}

export default withTranslation()(SideDrawer);
