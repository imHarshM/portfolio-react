import React from "react";

const Menu = ({ handleActive, activeMenu }) => {
  return (
    <header className="header">
      <div className="top-menu">
        <ul>
          <li
            className={activeMenu === "about" ? "active" : ""}
            onClick={() => handleActive("about")}
          >
            <a href="#/">
              <i className="fa fa-user"></i>
              <span className="link">About</span>
            </a>
          </li>
          <li
            className={activeMenu === "resume" ? "active" : ""}
            onClick={() => handleActive("resume")}
          >
            <a href="#/">
              <i className="fa fa-list-alt"></i>
              <span className="link">Resume</span>
            </a>
          </li>
          <li
            className={activeMenu === "work" ? "active" : ""}
            onClick={() => handleActive("work")}
          >
            <a href="#/">
              <i className="fa fa-paint-brush"></i>
              <span className="link">Work</span>
            </a>
          </li>
          <li
            className={activeMenu === "contact" ? "active" : ""}
            onClick={() => handleActive("contact")}
          >
            <a href="#/">
              <i className="fa fa-address-card"></i>
              <span className="link">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Menu;
