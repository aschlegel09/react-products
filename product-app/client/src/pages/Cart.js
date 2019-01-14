import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CartComponent from "../components/Cart/Cart";

function Cart() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
            <CartComponent />
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
