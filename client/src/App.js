import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Nav/Navbar";
import Home from "./pages/Home";
import newCart from "./components/Cart";
import {Link} from 'react-router-dom';
// import Cart from "./pages/Cart";
import { Col, Row } from "./components/Grid/index";
import About from "./pages/About";
// import Checkout from "./pages/Checkout";
// import User from "./pages/User";
import Profile from "./pages/Profile";
import ScrollToTop from "./components/Scroll/Scroll";
import Modal from "./components/Product/Modal";
import footerImage from './images/logo.png';
// import {ProductProvider} from './context.js';
// import LoginModal from "./components/SignIn/LoginModal";

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
      // <ProductProvider>
      <Router>
      <ScrollToTop>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/details" component={Detail} />
            <Route path="/blog" component={Blog} />
            <Route path="/profile" component={Profile} />
            {/* <Route path="/profile/:id" component={User} /> */}
            <Route path="/cart" component={newCart} />
            {/* <Route path="/cart/:id" component={Checkout} /> */}
            <Route path="/about" component={About} />
            <Route component={NoMatch} />
            {/* <Route exact path="/profile" component={Profile} /> */}
          </Switch>

        {/* displayed when state set to true */}
        <Modal />


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
            {/* <Col size="md-12"> */}
              <Link to="/"><span className="text-white">ANCHOR <img src={footerImage} href="/" className="footer-logo img-fluid" alt="logo"/> RELIEF</span></Link>
            {/* </Col> */}
            <Row>
            <Col size="md-3">
                <a href="/about" className="pt-4 foot-text">About Anchor Relief</a><br />
                {/* <a href="/blog" className="pb-4 foot-text">News Articles</a ><br /> */}
            </Col>
            {/* <Col size="md-3">
                <LoginModal className="login-footer" />
            </Col> */}
            <Col size="md-2">
                <a href="/profile" className="pt-4 foot-text">Your Profile</a >
            </Col>
            <Col size="md-2">
                <a href="/products" className="pt-4 foot-text">View All Products</a >
            </Col>
            <Col size="md-2">
                <a href="/cart" className="pt-4 foot-text">Checkout</a >
            </Col>
            <Col size="md-3">
                <a href="https://www.crowdrise.com/o/en/campaign/anchor-relief" target="_blank" rel="noopener noreferrer" className="pt-4 foot-text">Donate</a >
            </Col>
            </Row>
            </div>
          {/* </Container> */}
        </div>
        </ScrollToTop>
      </Router>
      // </ProductProvider>
    );
  }
}

export default App;
