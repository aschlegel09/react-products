import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CheckoutComponent from "../components/Checkout/Checkout";
import Jumbotron from "../components/Jumbotron/index";

function Checkout() {
    return (
        <Container fluid>
            <Jumbotron>
                <Row>
                    <Col size="md-12">
                        <CheckoutComponent />
                    </Col>

                </Row>
            </Jumbotron>
        </Container>
    );
}

export default Checkout;
