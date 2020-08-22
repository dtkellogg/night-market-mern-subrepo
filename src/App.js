import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Home from "./components/Home";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Involved from "./components/Involved";
import Footer from "./components/Footer";
// import group from "./img/svg/group.svg";


export default function App() {
  return (
    <Router>
      <div className="container__main">
        <Nav />
        <div className="container__body">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/involved">
              <Involved />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/*">404 Page not found</Route>
          </Switch>
        </div>
      </div>
        <Footer className="footer"/>
    </Router>
  );
}
