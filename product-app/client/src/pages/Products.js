import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { ListItem } from "../components/List";
import {ProductConsumer} from '../context.js';
// import {productSeed} from "../script/seed";
import Product from "../components/Product/Product";
import Fade from 'react-reveal/Fade';

class Products extends Component {
//   constructor(props) {
//     super(props);

//     console.log(this.state);
//     console.log(this);
// }
  // state = {
  //   // products: [],
  //   products: productSeed
  //   // id: "",
  //   // name: "",
  //   // category: "",
  //   // cost: "",
  //   // brand: "",
  //   // size: "",
  //   // color: "",
  //   // img: ""
  // };

  // componentDidMount() {
  //   this.loadProducts();
  // }

  // loadProducts = () => {
  //   API.getProducts()
  //     .then(res =>
  //       this.setState({
  //         products: res.data, name: "", category: "", brand: "", cost: "", size: "", color: ""
  //       })
  //     )
  //     .catch(err => console.log(err));
  // };

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
    // console.log(this.state.products);

    return (
      <div>
       
       <div className="heart-bg">
          <h1>Product List</h1>
          </div>
        {/* <Jumbotron> */}
          
          <Fade up>
          {/* whatever I have in context consumer return here */}
          
          <ProductConsumer>
            {/* this caused error */}
            {value => {

              console.log(value.products);
              // value Here of seed data
              // since products is an array, we can map
              return value.products.map((product) => {
                return <Product key={product.id} product={product} />
            });

            }}
            
            {/* {value => { */}
                {/* // return <h1>{value}</h1> */}

              
          {/* // Product */}
           
              {/* /* <ListItem key={product.id}>
            //   <Link to={"/products/" + product.id}>
            //     <strong>
            //       {product.name} by {product.brand}
            //     </strong>
            //   </Link>
            // </ListItem>  */}
          </ProductConsumer>
          </Fade>
        {/* </Jumbotron> */}
        <Container>
          {/* <Jumbotron>
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
                  {/* </ListItem> */}
                {/* ))} */}
              {/* </List>

            ) : (
                <h3>No Results to Display</h3>
              )}
            </Col>
          </Row>
          </Jumbotron> */}
          <Jumbotron>
            <p className="text">By purchasing one of our pieces, you are helping someone in dire need. Anchor Relief partners with leading disaster relief foundations in order to help first-responders deliver needed goods immediately. Every penny counts - simply follow the Donate link below and get on your way knowing you made a difference.</p>
            <a href="https://www.crowdrise.com/o/en/campaign/anchor-relief" target="_blank" rel="noopener noreferrer" ><button style={{
              color: "white",
              backgroundColor: "red",
              width: "120px",
              height: "auto",
              padding: "10px",
              cursor: "pointer"
            }}>Donate <i className="fas fa-heart"></i></button></a>
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
