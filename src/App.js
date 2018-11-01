import React, { Component } from "react";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import jupiter from "./jupiter.png";
import "./App.css";
import Footer from "./Footer.js";

import Home from "./Home";
import Asteroides from "./Asteroides";

class App extends Component {
  render() {
    return (
      
        <div className="App">
          <header className="header">
            <img src={jupiter} className="App-logo" alt="logo" />
            <h1>StarDust</h1>
            <img src={jupiter} className="App-logo" alt="logo" />
          </header>
          <BrowserRouter>
            <div>
              <div className="navbar">
                <NavLink className="Home" exact to="/">
                  Home
                </NavLink>
                <NavLink className="Asteroides" to="/Asteroides">
                  Asteroides
                </NavLink>
              </div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Asteroides" component={Asteroides} />
              </Switch>
            </div>
          </BrowserRouter>
        
        <Footer />
      </div>
    );
  }
}

export default App;
