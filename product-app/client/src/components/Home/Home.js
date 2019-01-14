import React from "react";
import './Home.css';
// import Jumbotron from "../Jumbotron/index";
import { Col, Row } from "../Grid/index";

function HomeComponent() {
    return (
        <Row>
            <Col size="md-12 sm-12">
                <div
                    style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
                    className="jumbotron homepage-bg"
                >
                    <h1>Home Page</h1>
                    <p>All proceeds go to The Chris Long Foundation.</p>
                    <a href="https://chrislongfoundation.org/" target="_blank" rel="noopener noreferrer"><img className="chris-long" alt="" /></a>
                </div>

            </Col>
        </Row>
    );
}

export default HomeComponent;
