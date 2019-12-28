import './App.css';
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/containers/Home";
import About from "./components/containers/About"
import Order from "./components/containers/order/Order"

class App extends Component {

  renderRouter() {
    return(
      <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/orders" component={Order} />
      </Switch>
    )
  }
  

  render() {
 
      return (
        <BrowserRouter>{this.renderRouter()}</BrowserRouter>
         );
    }
}

export default App;
