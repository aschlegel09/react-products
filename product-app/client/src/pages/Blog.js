import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import BlogComponent from '../components/Blog/Blog';
import Jumbotron from "../components/Jumbotron/index";

class Blog extends Component {

  render() {
    return (
      <div>
      <Jumbotron>
        <h1>Blog</h1>
      </Jumbotron>
      <Container>
        <Row>
          <BlogComponent /><BlogComponent />
        </Row>
        <Row>
          <BlogComponent /><BlogComponent />
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Home</Link>
          </Col>
        </Row>

      </Container>
      </div>
    );
  }
}

export default Blog;
