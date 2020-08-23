import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import HomePage from "./home/HomePage";
import BlogPage from "./blog/BlogPage";
import BlogAdminPage from "./blog/BlogAdminPage";
import AboutPage from "./about/AboutPage";
import SideDrawer from "./common/sideDrawer/SideDrawer";
import Backdrop from "./common/Backdrop";

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };
  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }
  return (
    <div className="container-fluid m-0 p-0" style={{ height: "100%" }}>
      <Header drawerClickHandler={drawerToggleHandler} />
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/admin" component={BlogAdminPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
