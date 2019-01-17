import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Nav/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Col, Row } from "./components/Grid/index";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import User from "./pages/User";
import Profile from "./pages/Profile";
import ScrollToTop from "./components/Scroll/Scroll";

// const passport = require('passport');
// const session = require('express-session');

// app.use(passport.initialize());
// // const socket = io(API_URL);
// // const providers = ['google', 'facebook'];
// app.use(session({
//   secret: 's3cr3t',
//   resave: true,
//   saveUninitialized: true
// }));
// app.use(passport.initialize());
// app.use(passport.session());


class App extends Component {

  render() {
    return (
      <Router>
      <ScrollToTop>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/:id" component={Detail} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profile/:id" component={User} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/about" component={About} />
            <Route component={NoMatch} />
            {/* <Route exact path="/profile" component={Profile} /> */}
          </Switch>

          {/* <div className={'container'}>
            {providers.map(provider =>
              <OAuth
                provider={provider}
                key={provider}
                socket={socket}
              />
            )}
          </div> */}
          {/* <Container fluid> */}
          <div className="footer mx-auto">
          <Row>
            <Col size="md-12">
            <p className="text-white">Newsletter_______________________________</p>
            </Col>
          </Row>
            <Row>
            <Col size="md-3">
                <a href="/about" className="text-white">About</a>
            </Col>
            <Col size="md-3">
                <p className="text-white">2019</p>
            </Col>
            <Col size="md-3">
                <p className="text-white">2019</p>
            </Col>
            <Col size="md-3">
                <p className="text-white">2019</p>
            </Col>
            </Row>
            </div>
          {/* </Container> */}
        </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
