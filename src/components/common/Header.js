import React from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../../images/lhd logo.png";
import "./header.css";
import NavBar from "./NavBar";

function Header({ t }) {
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
            <p class="lead">{t("endocrinology")}</p>
          </div>
        </div>
      </div>
      <NavBar />
    </>
  );
}

export default withTranslation()(Header);
