import React, { useState } from "react";
import { Router, Link } from "react-router-dom";
import History from "../common/History";

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState("about");

  return (
    <Router history={History}>
      <header className="header">
        <div className="top-menu">
          <ul>
            <li
              className={activeIndex === "about" ? "active" : ""}
              onClick={() => setActiveIndex("about")}
            >
              <Link to="/">
                <i className="fa fa-user"></i>
                <span className="link">About</span>
              </Link>
            </li>
            <li
              className={activeIndex === "resume" ? "active" : ""}
              onClick={() => setActiveIndex("resume")}
            >
              <Link to="/resume">
                <i className="fa fa-list-alt"></i>
                <span className="link">Resume</span>
              </Link>
            </li>
            <li
              className={activeIndex === "work" ? "active" : ""}
              onClick={() => setActiveIndex("work")}
            >
              <Link to="/work">
                <i className="fa fa-paint-brush"></i>
                <span className="link">Work</span>
              </Link>
            </li>
            <li
              className={activeIndex === "contact" ? "active" : ""}
              onClick={() => setActiveIndex("contact")}
            >
              <Link to="/contact">
                <i className="fa fa-address-card"></i>
                <span className="link">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </Router>
  );
};

export default Menu;
