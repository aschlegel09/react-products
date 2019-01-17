import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Col, Row } from "../components/Grid";
import AboutComponent from '../components/About/About';
import Jumbotron from "../components/Jumbotron/index";
import Fade from "react-reveal/Fade";

class About extends Component {

    render() {
        return (
            <div>
                <Jumbotron>
                    <Fade top>
                        <h1>ANCHOR<i className="fas fa-anchor"></i>RELIEF</h1>
                    </Fade>
                </Jumbotron>

                <AboutComponent />
              
            </div>
        );
    }
}

export default About;
