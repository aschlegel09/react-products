import React, {Component} from "react";
import { Link } from 'react-router-dom';
import { Col, Row } from "../components/Grid";
import CheckoutComponent from "../components/Checkout/Checkout";
import Jumbotron from "../components/Jumbotron/index";
import API from "../utils/API";

class Checkout extends Component {
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
        <div style={{
            minHeight:"600px"
        }}>
        {/* <Container fluid> */}
            <Jumbotron>
                {/* <Row> */}
                    {/* <Col size="md-12"> */}
                        <CheckoutComponent />
                    {/* </Col> */}

                {/* </Row> */}
            </Jumbotron>
            <Jumbotron>
            <Row>
          <Col size="md-12">
          <Link to={"/products/" + this.state.product._id}>
            Return to the {this.state.product.name} Details page
            </Link>
          </Col>
          </Row>
          <Row>
          <Col size="md-2">
            <Link to="/">← Back to Home</Link>
          </Col>
          </Row>
        </Jumbotron>
        </div>
    );
}
}

export default Checkout;
