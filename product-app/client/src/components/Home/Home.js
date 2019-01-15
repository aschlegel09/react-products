import React from "react";
import './Home.css';
// import Jumbotron from "../Jumbotron/index";
import { Col, Row } from "../Grid/index";
import cloudyimage from "../../images/cloudy.png";
import anchorimage from "../../images/anchor.png";

function HomeComponent() {
    return (
        <Row>
            <Col size="md-12 sm-12">
                <div className="jumbotron jumbo fullscreen-bg">

                <img src={cloudyimage} className="cloudy" alt="" />
                <img src={anchorimage} className="homepage-bg" alt=""/>
                  
                    <span style={{ zIndex: 500, marginTop: 300, marginRight: 300, marginLeft: -180, position: "absolute" }}><h1>ANCHOR
                    <i className="fas fa-anchor mx-auto mt-3"></i>RELIEF</h1>
                    <p>All proceeds benefit local charities</p>
                    <a href="https://chrislongfoundation.org/" target="_blank" rel="noopener noreferrer"><img className="chris-long" alt="" /></a>
                    </span>
                </div>
            </Col>
        </Row>
    );
}

export default HomeComponent;
