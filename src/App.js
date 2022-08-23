import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact.js";
import About from "./Components/About.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Set up the Router */}
        <Route exact path="/" component={Projects} />
        <Route path="/articles" component={Contact} />
        <Route path="/about" component={About} />
        <div className="navigation">
          <img src={logo} className="logo-image" alt="Logo Image" />
          <div className="navigation-sub">
            {/* set up links */}
            <Link to="/" className="item">
              Projects
            </Link>
            <Link to="/contact" className="item">
              Contact
            </Link>
            <Link to="/about" className="item">
              About
            </Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
