import React, { useEffect, useState } from "react";
import { Router, Switch, Route } from "react-router-dom";
import "./assets/css/App.scss";

import Loader from "./components/common/Loader";
import Home from "./components/porfolio/Home";
import Menu from "./components/porfolio/Menu";
import About from "./components/porfolio/About";
import Resume from "./components/porfolio/Resume";
import Work from "./components/porfolio/Work";
import Contact from "./components/porfolio/Contact";
import History from "./components/common/History";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    //show loader on load
    setTimeout(() => {
      setIsLoaded(false);
    }, 500);
  }, []);

  return (
    <div class="page has-scroll">
      {isLoaded && <Loader />}

      <div class="container opened" data-animation-in="fadeInLeft" data-animation-out="fadeOutLeft">
        <Menu />
        <Home />
        <Router history={History}>
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
