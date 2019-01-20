import React, {Component} from 'react';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context.js';
import { Col, Row } from "../Grid/index";
import { Link } from 'react-router-dom';
import Jumbotron from '../Jumbotron/index';
import CartList from './CartList';

class newCart extends Component {
    render() {
        return (
        <div className="cart-div">
        
                {/* need contitional rendering */}
                
            <ProductConsumer>
                {value => {
                    const {cart} = value;
                    if (cart.length > 0) {
                        return (
                        <React.Fragment>
                            <h1 value="Your Cart">
                                 Your Cart
                            </h1>
                         <CartColumns />
                         <CartList value={value}/>
                        </React.Fragment>
                    )} else {
                        return <EmptyCart />
                    }
                }}
                
            </ProductConsumer>
            <Jumbotron>
                     <Row>
                       <Col size="md-2">
                         <Link to="/">← Back to Home</Link>
                       </Col>
                     </Row>
            </Jumbotron>
        </div>
        )
    };
}

export default newCart;