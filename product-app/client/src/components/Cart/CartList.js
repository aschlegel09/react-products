import React from 'react';
// import CartItem from './CartItem';
import {Container} from '../Grid/index';

export default function CartList({ value }) {

    const {cart} = value;
    // console.log(value.cart, cart[0]);

    return(
                <Container fluid>
                    {/* hello from cart list */}
                    {cart.map((item) => {
                        return <p>HeLLO{item}</p>
                        // return console.log("CartItem Here")
                        // return <CartItem key={item.id} item={item} value={value.cart[0]} />;
                    })}
                </Container>
        );
    }