import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import HomeComponent from "../components/Home/Home";
import BlogComponent from "../components/Blog/Blog";
import Reveal from 'react-reveal/Reveal';
// import API from "../utils/API";
// import { List, ListItem } from "../components/List/index";
// import { Link } from "react-router-dom";
// import Product from '../components/Product/Product';

class Home extends Component {
    // state = {
    //     products: [],
    //     name: "",
    //     category: "",
    //     cost: "",
    //     brand: "",
    //     size: "",
    //     color: ""
    // };

    // componentDidMount() {
    //     this.loadProducts();
    // }

    // loadProducts = () => {
    //     API.getProducts()
    //         .then(res =>
    //             this.setState({ products: res.data, name: "", category: "", brand: "", cost: "", size: "", color: "" })
    //         )
    //         .catch(err => console.log(err));
    // };
      
    componentDidMount() {
        window.scrollTo(0, 0)
      }

      

    render() {
        
        return (
            <Container fluid className="homepage-bg">
                <HomeComponent />

                <Row>
                    {/* <Product>
                        {this.state.products.length ? (
                            <List>
                                {this.state.products.map(product => (
                                    <ListItem key={product._id}>
                                        <Link to={"/products/" + product._id}>
                                            <strong>
                                                {product.name} by {product.brand}
                                            </strong>
                                        </Link>
                                    </ListItem>))}
                            </List>
                            ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Product> */}
                    {/* <Product>
                        <ListItem key={product._id}>
                            <Link to={"/products/" + product._id}>
                                <strong>
                                    {product.name} by {product.brand}
                                </strong>
                            </Link>
                        </ListItem>
                    </Product> */}
                </Row>                
                <Reveal effect="fadeInUp">
                <Row>
                    {/* <Product />
                    <Product /> */}
                </Row>
                </Reveal>
                <Reveal effect="fadeInUp">
                <Row>
                    <BlogComponent /><BlogComponent />
                </Row>
                </Reveal>
            </Container>
        );
    }
}

export default Home;
