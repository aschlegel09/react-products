import React from "react";
import { Col, Row, Container } from "../Grid/index";
import Jumbotron from "../Jumbotron";
import './About.css';
import { Link } from "react-router-dom";

function AboutComponent() {
    return (
            <Container>
                <Jumbotron>
                    <Row>
                        <i className="fas fa-anchor mx-auto mb-3"></i>
                        <p className="text">Started in 2019, Anchor Relief's primary focus is to sell prints of paintings and give relief by donating to local charities making a difference.
                    </p>
                        <i className="fas fa-anchor mx-auto mt-3"></i>
                    </Row>
                </Jumbotron>
                <Jumbotron>
                    <Row>
                        <i className="fas fa-anchor mx-auto mb-3"></i>
                        <p className="text">Our company mission is to bring fresh, local goods and clean, sanitized water to children in need.
                            100% of every donation will benefit a child near you.
                            For every purchase made, we will donate 75% of the revenue to local charities like The Chris Long Foundation, led by the 2017 Walter Payton Man of the Year &amp; 2-Time Super Bowl Champion, Chris Long.
                    </p>
                        <i className="fas fa-anchor mx-auto mt-3"></i>
                    </Row>
                </Jumbotron>
                <Jumbotron>
                    <Row>
                        <Col size="md-2">
                            <Link to="/">← Back to Home</Link>
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>
    )
};

export default AboutComponent;