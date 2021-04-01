import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home"
/*import AboutMe from "./components/About Me";*/
import CV from "./components/CV";
import Portfolio from "./components/Portfolio";
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
