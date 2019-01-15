import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import AboutComponent from '../components/About/About';
import Jumbotron from "../components/Jumbotron/index";

class About extends Component {

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>ANCHOR<i className="fas fa-anchor"></i>RELIEF</h1>
                </Jumbotron>
                <Container>
                    <Row>
                        <AboutComponent />
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

export default About;
