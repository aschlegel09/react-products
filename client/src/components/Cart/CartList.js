import React, {Component} from 'react';
import CartItem from './CartItem';
import {Container} from '../Grid/index';

export default class CartList extends Component {
    render() {
      const { value } = this.props;
      const { cart } = this.props.value;

    return(
                <Container fluid>
                    {/* hello from cart list */}
                    {cart.map(item => (
                        // return <p>HeLLO{item}</p>
                        // return console.log("CartItem Here")
                         <CartItem key={item.id} item={item} value={value}/>
                    ))}
                </Container>
        );
    }
}
