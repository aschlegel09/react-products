import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
// import SignIn from "../components/SignIn/SignIn";
import {Link} from 'react-router-dom';

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>404 
            <br /></h1>
            <h1>
              Page Not Found
              </h1>
            <h1>
              <span role="img" aria-label="Ghost Emoji">
              👻
              </span>
            </h1>
          </Jumbotron>
          <Jumbotron>
          <Row>
          <Col size="md-2">
            <Link to="/">← Back to Home</Link>
          </Col>
        </Row>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
