import React, { PureComponent } from "react";
import { Row } from "../Grid/index";
import Jumbotron from "../Jumbotron";
import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import {
    Cart,
    Product,
    CheckoutButton,
    cartLocalization,
    cartReducer,
    setCartCurrency,
} from 'react-shopping-cart';
import Reveal from 'react-reveal/Reveal';
                <Reveal effect="fadeInUp"></Reveal>
const { getDefaultLocalization } = cartLocalization;
// You may take localization object from wherever you want, that's just an example
// For more information, see localization section
const iPadCaseLocalization = {
    color: 'Color',
    iPadCase: 'iPad case',
    red: 'Red',
    green: 'Green',
    yellow: 'Yellow',
    GBP: '£',
    EUR: '€',
    USD: '$',
  };
   
//   const iPadPropertiesWithAdditionalCostLocalization = {
//     yellow: 'Yellow (+{cost}{localizedCurrency}',
//   };
   
  const store = createStore(
    combineReducers(
      {
        cart: cartReducer,
        // Your own reducers, sir
      }
    )
  );
   
  const localization = {
    GBP: '£',
    USD: '$',
  };

  store.dispatch(
    setCartCurrency('USD'),
  );

class CartComponent extends PureComponent {
    state = {
        product: {
            name: 'iPadCase',
            id: 'ipad-case',
            path: '/shop/ipad-case/',
            properties: {
                color: ['red', 'green', {
                    additionalCost: {
                        GBP: 1,
                        EUR: 2,
                        USD: 3.50,
                    },
                    value: 'yellow',
                }],
            },
            propertiesToShowInCart: ['color'],
            prices: { GBP: 70, EUR: 80, USD: 90 },
            currency: 'GBP',
            imageSrc: '1-483x321.jpeg',
        },
        getProductLocalization:
            getDefaultLocalization(
                'product',
                'en',
                {
                    ...iPadCaseLocalization,
                    // ...iPadPropertiesWithAdditionalCostLocalization
                }
            ),
        getCheckoutButtonLocalization:
            getDefaultLocalization(
                'checkoutButton',
                'en',
                iPadCaseLocalization,
            ),
        getCartLocalization:
            getDefaultLocalization(
                'cart',
                'en',
                iPadCaseLocalization
            )
    };

    render() {
        const {
            product,
            getCheckoutButtonLocalization,
            getProductLocalization,
            // getCartLocalization,
          } = this.state;
       
          const checkoutButtonElement =
            <CheckoutButton
              getLocalization={
                getCheckoutButtonLocalization
              }
              checkoutURL="/checkout"
            />;
        return (
            // <Container>
                <Jumbotron>
                    <Row>
                        <h1 className="mx-auto">Your Cart</h1>
                    </Row>
                    <hr></hr>
                    <Row>
                    <Provider store={store}>
                        <div className="container">
                            <Product
                                {...product}
                                checkoutButton={checkoutButtonElement}
                                getLocalization={
                                    getProductLocalization
                                }

                            />
                            <Cart
                                checkoutButton={checkoutButtonElement}
                                // getLocalization={
                                //     getCartLocalization
                                // }
                                getLocalization={getDefaultLocalization('cart', 'en', localization)}
                            />
                        </div>
                    </Provider>
                    </Row>
                </Jumbotron>
            // </Container>
        )
    }
};

export default CartComponent;