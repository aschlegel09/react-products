// import React, { PureComponent } from "react";
// import { Row } from "../Grid/index";
// import Jumbotron from "../Jumbotron";
// import 'animate.css/animate.min.css';
// import 'font-awesome/css/font-awesome.min.css';
// import {Provider } from 'react-redux';
// // bindActionCreators
// import { createStore, combineReducers,  } from 'redux';
// import {
//     Cart,
//     Product,
//     CheckoutButton,
//     cartLocalization,
//     cartReducer,
//     setCartCurrency,
// } from 'react-shopping-cart';
// import Reveal from 'react-reveal/Reveal';
// import UserReducer from './reducers/user-reducer.js';
// // import {selectUser} from './actions/index';
               
// const { getDefaultLocalization } = cartLocalization;
// // You may take localization object from wherever you want, that's just an example
// // For more information, see localization section
// const iPadCaseLocalization = {
//     color: 'Color',
//     iPadCase: 'iPad case',
//     red: 'Red',
//     green: 'Green',
//     yellow: 'Yellow',
//     // GBP: '£',
//     // EUR: '€',
//     USD: '$',
//   };
   
// //   cart reducer
//   const store = createStore(
//     combineReducers(
//       {
//         cart: cartReducer,
//         users: UserReducer,
//     }
//     )
//   );
   
//   const localization = {
//     // GBP: '£',
//     USD: '$',
//   };

//   store.dispatch(
//     setCartCurrency('USD'),
//   );

// class CartComponent extends PureComponent {

//     createListItems() {
//         return this.props.users.map((user, key) => {
//             return (
//                 <li key={user.id}
//                 onClick={() => this.props.selectUser(user)}
//                 >{user.name}</li>
//             );
//         });
//     }

//     state = {
//         product: {
//             name: 'iPadCase',
//             id: 'ipad-case',
//             path: '/shop/ipad-case/',
//             properties: {
//                 color: ['red', 'green'
//                 // {
//                     // additionalCost: {
//                     //     // GBP: 1,
//                     //     // EUR: 2,
//                     //     USD: 3.50,
//                     // },
//                     // value: 'yellow',
//                 // }
//             ],
//             },
//             propertiesToShowInCart: ['color'],
//             prices: { USD: 90 },
//             // currency: 'GBP',
//             imageSrc: '1-483x321.jpeg',//////////////////////
//         },
//         getProductLocalization:
//             getDefaultLocalization(
//                 'product',
//                 'en',
//                 {
//                     ...iPadCaseLocalization,
//                 }
//             ),
//         getCheckoutButtonLocalization:
//             getDefaultLocalization(
//                 'checkoutButton',
//                 'en',
//                 iPadCaseLocalization,
//             ),
//         getCartLocalization:
//             getDefaultLocalization(
//                 'cart',
//                 'en',
//                 iPadCaseLocalization
//             )
//     };

//     render() {
//         const {
//             product,
//             getCheckoutButtonLocalization,
//             getProductLocalization,
//             // getCartLocalization,
//           } = this.state;
       
//           const checkoutButtonElement =
//             <CheckoutButton
//               getLocalization={
//                 getCheckoutButtonLocalization
//               }
//               checkoutURL="/checkout"
//             />;
//         return (
//             // <Container>
//             <div style={{
//                 minHeight:"600px"
//             }}>
//                 <Jumbotron>
//                     <Row>
//                         <h1 className="mx-auto">Your Cart</h1>
//                         {/* {this.createListItemS()} */}
//                     </Row>
//                     <hr></hr>
//                     <Row>
//                     <Provider store={store}>
//                         <div className="container">
//                             <Product
//                                 {...product}
//                                 checkoutButton={checkoutButtonElement}
//                                 getLocalization={
//                                     getProductLocalization
//                                 }

//                             />
//                             <Reveal effect="fadeInUp">
//                              <Cart
//                                 checkoutButton={checkoutButtonElement}
//                                 // getLocalization={
//                                 //     getCartLocalization
//                                 // }
//                                 getLocalization={getDefaultLocalization('cart', 'en', localization)}
//                             />
//                             </Reveal>
//                         </div>
//                     </Provider>
//                     </Row>
//                 </Jumbotron>
//             </div>
//         )
//     }
// };

// // function mapStateToProps(state) {
// //     return {
// //         users: state.users
// //     };
// // }

// // function matchDispatchToProps(dispatch) {
// //     return bindActionCreators({ selectUser: selectUser }, dispatch)
// // }

// // export default connect(mapStateToProps, matchDispatchToProps)(CartComponent);
// export default CartComponent;