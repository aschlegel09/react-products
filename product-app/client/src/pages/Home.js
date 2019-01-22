import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import HomeComponent from "../components/Home/Home";
// import BlogComponent from "../components/Blog/Blog";
import Reveal from 'react-reveal/Reveal';
// import API from "../utils/API";
// import { List, ListItem } from "../components/List/index";
// import { Link } from "react-router-dom";
import graph from '../images/disaster-events.png';


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

                        <Col size="md-12">
                            <h3 className="mt-5">Our World in Data reports several key statistics<br />regarding world natural disasters and the cost on human life:</h3>
                            <a href="https://ourworldindata.org/natural-disasters">
                                <img src={graph} className="img-fluid" target="_blank" alt="natural-disaster graph"
                                    style={{
                                        minWwidth: "500px",
                                        width: "75%",
                                        marginTop: "50px",
                                        marginBottom: "50px"
                                    }} />
                            </a>
                        </Col>
                    </Row>
                </Reveal>
            </Container>
        );
    }
}

export default Home;
