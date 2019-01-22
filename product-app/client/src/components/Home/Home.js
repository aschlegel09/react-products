import React from "react";
import './Home.css';
// import Jumbotron from "../Jumbotron/index";
import { Col, Row } from "../Grid/index";
import cloudyimage from "../../images/cloudy.png";
import anchorimage from "../../images/anchor.png";
import Fade from 'react-reveal/Fade';
import Donate from '../Button/Button.js';
// import Jumbotron from "../Jumbotron";
// import Product from '../Product/Product';
// import {ProductConsumer} from '../../context';

function HomeComponent() {
    return (
        <Row>
           
            <div className="jumbo fullscreen-bg">

                <img src={cloudyimage} className="cloudy" alt="" />
                <img src={anchorimage} className="homepage-bg" alt="" />
                
                <Fade top>
              
                    <span
                    style={{ zIndex: 500, marginTop: 300, marginRight: 300, marginLeft: -300, position: "absolute" }}><h1 className="homespan anchor-font">ANCHOR
                    <i className="homespan fas fa-anchor mx-auto mt-3"></i>RELIEF</h1>
                        <p className="home-font">Anchor is a collaborative design project to raise money for disaster relief efforts around the world. All proceeds from print purchases and gallery donations go to charities like:</p>
                     
                        <Row>
                            <Col size="md-6">
                                <a href="https://chrislongfoundation.org/" target="_blank" rel="noopener noreferrer"><img className="homespan chris-long" alt="" /></a>
                            </Col>
                            <Col size="md-6">
                                <a href="https://www.humanityroad.org/" target="_blank" rel="noopener noreferrer"><img className="homespan humanity-road" alt="" /></a>
                            </Col>
                           
                        </Row>
                        
                    </span>
                 
                </Fade>
                
            </div>
            <div className="heart-bg-donate">
            <Donate />
            </div>
            {/* <Jumbotron>
            <ProductConsumer> */}
            {/* this caused error */}
            {/* {value => {
              // return <h1>{hello}</h1>;
              console.log(value.products);
              // value Here of seed data
              // since products is an array, we can map
              return value.products.map((product) => {
                return <Product key={product.id} product={product} />
            
              })
            }} */}
                {/* </ProductConsumer>
            </Jumbotron> */}
        </Row>
    );
}

export default HomeComponent;
