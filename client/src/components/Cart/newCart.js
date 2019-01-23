import React, {Component} from 'react';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context.js';
import { Container } from "../Grid/index";
// import { Link } from 'react-router-dom';
// import Jumbotron from '../Jumbotron/index';
import CartList from './CartList';
import PayPal from './PayPal';
// import CartItem from './CartItem';

export default class newCart extends Component {
    render() {
        return (
          <Container fluid>
        <section className="cart-div">
        
                {/* need contitional rendering */}
                <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <div className="heart-bg">
                    <h1>Your Cart</h1>
                  <CartColumns />
                  <CartList value={value} />
                  <PayPal value={value} 
                  // history={this.props.history} 
                  />
                </div>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>


{/*            
            <Jumbotron>
                     <Row>
                       <Col size="md-2">
                         <Link to="/products">← Back to Products</Link>
                       </Col>
                     </Row>
            </Jumbotron> */}
        </section>
        </Container>
        )
    };
}

// export default newCart;