import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home"
import AboutMe from "./About Me";
import CV from "./CV";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { Route, Link } from 'react-router-dom';



function App() {
  return (
  <div className="App">

    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/cv" component={CV} />
    <Route exact path="/portfolio" component={Portfolio} />
  </div>
  );
}

export default App;
