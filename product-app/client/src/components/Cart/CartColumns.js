import React, {Component} from 'react';
import {Container, Row} from "../Grid/index";

export default class CartColumns extends Component {
    render(){
        return(
                <Container fluid>
                <div  className="text-center d-none d-lg-block">
                    <Row>
                        <div className="col-10 mx-auto col-lg-2">
                            <p className="text-uppercase">
                                Products
                            </p>
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <p className="text-uppercase">
                                Name of Product
                            </p>
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <p className="text-uppercase">
                                Cost
                            </p>
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <p className="text-uppercase">
                                Quantity
                            </p>
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <p className="text-uppercase">
                                Remove
                            </p>
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <p className="text-uppercase">
                                Total
                            </p>
                        </div>
                    </Row>
                </div>
                </Container>

        );
    }
}