import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    product: []
  };
  // When this component mounts, grab the product with the _id of this.props.match.params.id
  componentDidMount() {
    API.getProduct(this.props.match.params.id)
      .then(res => this.setState({ product: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
      {/* <Container fluid> */}
        {/* // <Row> */}
          {/* // <Col size="md-12"> */}
            <Jumbotron>
              <h1>
                {this.state.product.name} by {this.state.product.brand}
              </h1>
            </Jumbotron>
          {/* // </Col> */}
        {/* // </Row> */}
        <Container>
          <Jumbotron>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Category</h1>
              <p>
                {this.state.product.category}
              </p>
            </article>
          </Col>
        </Row>
        </Jumbotron>
        <Jumbotron>
        <Row>
          <Col size="md-2">
            <Link to="/products">← Back to Products</Link>
          </Col>
        </Row>
        </Jumbotron>
      </Container>
      </div>
    );
  }
}

export default Detail;
