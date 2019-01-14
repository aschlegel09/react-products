import React from "react";
import { Row, Container } from "../Grid/index";
import Jumbotron from "../Jumbotron";

function Cart() {
    return (
        <Container>
            <Jumbotron>
                <Row>
                    Your Cart Here
                </Row>
            </Jumbotron>
        </Container>
    )
};

export default Cart;