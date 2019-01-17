import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import Product from '../components/Product/Product';

class Products extends Component {
  state = {
    products: [],
    name: "",
    category: "",
    cost: "",
    brand: "",
    size: "",
    color: ""
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    API.getProducts()
      .then(res =>
        this.setState({
          products: res.data, name: "", category: "", brand: "", cost: "", size: "", color: ""
        })
      )
      .catch(err => console.log(err));
  };

  // deleteProduct = id => {
  //   API.deleteProduct(id)
  //     .then(res => this.loadProducts())
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveProduct({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadProducts())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <div>
        {/* // <Container fluid> */}
        {/* <Row> */}
        {/* <Col size="md-6"> */}
        {/* <Jumbotron>
              <h1>What Products Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form> */}
        {/* </Col> */}
        {/* <Col size="md-12 sm-12"> */}
        <Jumbotron>
          <h1>Product List</h1>
        </Jumbotron>
        <Container>
          <Jumbotron>
            <Row>
            <Col size="md-12">
            {this.state.products.length ? (
              <List>
                {this.state.products.map(product => (
                  <ListItem key={product._id}>
                    <Link to={"/products/" + product._id}>
                      <strong>
                        {product.name} by {product.brand}
                      </strong>
                    </Link>
                    {/* <DeleteBtn onClick={() => this.deleteProduct(product._id)} /> */}
                  </ListItem>
                ))}
              </List>

            ) : (
                <h3>No Results to Display</h3>
              )}
            </Col>
          </Row>
          </Jumbotron>
          <Jumbotron>
            <a href="https://www.crowdrise.com/o/en/campaign/anchor-relief" target="_blank" rel="noopener noreferrer" ><button style={{
              color: "white",
              backgroundColor: "red",
              width: "120px",
              height: "auto",
              padding: "10px"
            }}>Donate<i className="fas fa-heart"></i></button></a>
          </Jumbotron>
          <Jumbotron>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Home</Link>
          </Col>
        </Row>
        </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default Products;
