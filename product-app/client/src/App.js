import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./pages/Products";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Nav/index";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
