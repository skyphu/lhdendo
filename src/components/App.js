import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import HomePage from "./home/HomePage";
import BlogPage from "./blog/BlogPage";
import BlogAdminPage from "./blog/BlogAdminPage";
import AboutPage from "./about/AboutPage";
import SideDrawer from "./sideDrawer/SideDrawer";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <SideDrawer />
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
