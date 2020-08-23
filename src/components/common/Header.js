import React from "react";
import { withTranslation } from "react-i18next";
import logo from "../../images/lhd logo.png";
import "./header.css";
import NavBar from "./NavBar";

function Header(props) {
  const t = props.t;

  return (
    <>
      <div className="jumbotron jumbotron-custom-bg mb-0 p-2">
        <div className="row">
          <div className="col-2">
            <img src={logo} alt="LHD Logo" width="200" />{" "}
          </div>
          <div className="col p-5">
            <h1>Leticia Hernández Dávila, MD FACE</h1>
            <hr />
            <p className="lead">{t("endocrinology")}</p>
          </div>
        </div>
      </div>
      <NavBar click={props.drawerClickHandler} />
    </>
  );
}

export default withTranslation()(Header);
