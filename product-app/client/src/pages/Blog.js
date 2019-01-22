import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import BlogComponent from '../components/Blog/Blog';
import Jumbotron from "../components/Jumbotron/index";

class Blog extends Component {

  render() {
    return (
      <div>
      <div className="heart-bg">
        <h1>News</h1>
      </div>
      <Container>
        <Row>
          <BlogComponent /><BlogComponent />
        </Row>
        <Row>
          <BlogComponent /><BlogComponent />
        </Row>
        <Jumbotron>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Home</Link>
          </Col>
        </Row>
        </Jumbotron>
      </Container>
      </div>
    );
  }
}

export default Blog;
