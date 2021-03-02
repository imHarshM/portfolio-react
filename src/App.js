import React, { useEffect, useState } from "react";
import "./assets/css/App.scss";
import Loader from "./components/common/Loader";
import Home from "./components/porfolio/Home";
import Menu from "./components/porfolio/Menu";
import About from "./components/porfolio/About";
import Resume from "./components/porfolio/Resume";
import Work from "./components/porfolio/Work";
import Contact from "./components/porfolio/Contact";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [activeMenu, setActiveMenu] = useState("about");

  useEffect(() => {
    //show loader on load
    setTimeout(() => {
      setIsLoaded(false);
    }, 500);
  }, []);

  const handleActive = (e) => {
    document
      .getElementById(e + "-card")
      .scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    setActiveMenu(e);
  };

  return (
    <div class="page">
      {isLoaded && <Loader />}

      <div class="container opened" data-animation-in="fadeInLeft" data-animation-out="fadeOutLeft">
        <Menu handleActive={handleActive} activeMenu={activeMenu} />
        <Home />

        <About show={activeMenu === "about"} />
        <Resume show={activeMenu === "resume"} />
        <Work show={activeMenu === "work"} />
        <Contact show={activeMenu === "contact"} />
      </div>
    </div>
  );
};

export default App;
