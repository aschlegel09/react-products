import React from "react";
import './Home.css';
// import Jumbotron from "../Jumbotron/index";
import { Col, Row } from "../Grid/index";
import cloudyimage from "../../images/cloudy.png";
import anchorimage from "../../images/anchor.png";
import Fade from 'react-reveal/Fade';
import Donate from '../Button/Button.js';

function HomeComponent() {
    return (
        <Row>
           
            <div className="jumbo fullscreen-bg">

                <img src={cloudyimage} className="cloudy" alt="" />
                <img src={anchorimage} className="homepage-bg" alt="" />
                
                <Fade top>
                    <span style={{ zIndex: 500, marginTop: 300, marginRight: 300, marginLeft: -300, position: "absolute" }}><h1 className="anchor-font">ANCHOR
                    <i className="fas fa-anchor mx-auto mt-3"></i>RELIEF</h1>
                        <p>Anchor is a collaborative design project to raise money for disaster relief efforts around the world. All proceeds from print purchases and gallery donations go to </p>

                        <Row>
                            <Col size="md-6">
                                <a href="https://chrislongfoundation.org/" target="_blank" rel="noopener noreferrer"><img className="chris-long" alt="" /></a>
                            </Col>
                            <Col size="md-6">
                                <a href="https://www.humanityroad.org/" target="_blank" rel="noopener noreferrer"><img className="humanity-road" alt="" /></a>
                            </Col>
                           
                        </Row>
                        
                    </span>
                 
                </Fade>
                
            </div>
            <Donate />
        </Row>
    );
}

export default HomeComponent;
