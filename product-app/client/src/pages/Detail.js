import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
import {ProductConsumer} from "../context.js";

class Detail extends Component {
  // state = {
  //   products: []
  // };
  // // When this component mounts, grab the product with the _id of this.props.match.params.id
  // componentDidMount() {
  //   API.getProduct(this.props.match.params.id)
  //     .then(res => this.setState({ product: res.data }))
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <div>
      {/* <Container fluid> */}
        {/* // <Row> */}
          {/* // <Col size="md-12"> */}
            <Jumbotron>
              {/* <h1>
                {this.state.product.name} by {this.state.product.brand}
              </h1> */}
              <ProductConsumer>
                {value => {
                  const {
                    id, 
                    brand, 
                    img, 
                    cost, 
                    category, 
                    size, 
                    color, 
                    inCart, 
                    name, 
                    info
                  } = 
                  value.detailProduct;
                  return (
                    <Container>
                      {/* name   */}
                      <Row>
                        <div className="col-md-10 mx-auto text-center text-blue my-5 text-uppercase">
                          <h1>Name: {name}
                          </h1>
                        </div>
                      </Row>
                      {/* end of name  */}
                      {/* product info */}
                      <Row>
                      <div className="col-md-10 mx-auto text-center text-blue my-5">
                        <img src={img} className="img-fluid" alt="product"
                        />
                        
                        </div>
                        {/* product text */}
                        <div className="col-md-10 mx-auto text-center text-blue my-5">
                        {/* <h1 className="text-capitalize">
                          category: {category}
                        </h1> */}
                        <h3 className="text-title text-uppercase text-muted mt-3 mb-2">
                          made by: <span className="text-uppercase">{brand}</span>
                          </h3>
                          <h3>
                            <strong>
                              price: <span>$</span>
                              {cost}
                              </strong>
                            </h3>
                            <p className="text-capitalize font-weight-bold mt-3 mb-0">
                              more about this product: 
                              </p>
                              <p className="text-muted lead">
                              {info}
                                </p>
                        </div>
                        </Row>
                        <Row>
                          <Col size="md-12">
                        <button 
                        className="add-btn"
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                        >
                          {inCart ? "In Cart" : "Add to Your Cart"}
                          </button>
                          </Col>
                          </Row>
                          <Row>
                            <Col size="md-12">
                          <article>

              <h1>
                Details
              </h1>
              <hr />
              <h2>Size</h2>
              <p>
              {size}
              </p>
              <hr />
              <h2>Color</h2>
              <p>
              {color}
                </p>
                <hr />
              <h2>Cost</h2>
              <p>
                ${cost}
              </p>
                 <hr />
              <h2>Category</h2>
              <p>
                {category}
              </p>
              <hr />
            </article>
                          </Col>
                        </Row>
                    </Container>
                  )
                }}
                {/* <Jumbotron>
        <Row>
          <Col size="md-4">
           
          </Col>
          <Col size="md-8">
            <article>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <Link to="/cart">
            Add {this.state.product.name} to Your Cart
            </Link>
          </Col>
          </Row>
        </Jumbotron> */}
              </ProductConsumer>
            </Jumbotron>
          {/* // </Col> */}
        {/* // </Row> */}
        <Container>
          
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
