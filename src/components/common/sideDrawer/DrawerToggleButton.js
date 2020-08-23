import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./sideDrawer.css";

export const DrawerToggleButton = (props) => (
  <div onClick={props.click}>
    <FontAwesomeIcon
      icon={faBars}
      size="2x"
      pull="left"
      style={{ color: "white" }}
    />
  </div>
);
