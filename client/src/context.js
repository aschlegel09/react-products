import React, {Component} from 'react';
import {productSeed, detailProduct} from './script/seed';

const ProductContext = React.createContext();
// provider
// consumer

class ProductProvider extends Component {
    
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    };
    
// // value should be false to begin, and true at end of function
//     tester = () => {
//         console.log("state products: ", this.state.products[0].inCart);
//         console.log("Data products: ", productSeed[0].inCart);

//         const tempProducts = [...this.state.products];
//         tempProducts[0].inCart = true;
//         this.setState(() => {
//             return {products:tempProducts}
//         }, () => {            
//         console.log("state products: ", this.state.products[0].inCart);
//         console.log("Data products: ", productSeed[0].inCart);
//         })

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let products = [];
        productSeed.forEach(item => {
            // copying values not just referencing
            const singleItem = { ...item };
            products = [...products, singleItem];
        });

        this.setState(() => {
            return {products};

        });
    };

    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };

    handleDetail = id => {
        // console.log(`detail prop hello ${id}`);
        const product =  this.getItem(id);
        this.setState(() => {
            return { detailProduct: product };
        });
    };
    addToCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const cost = product.cost;
        product.total = cost;
    
        this.setState(() => {
          return {
            products: [...tempProducts],
            cart: [...this.state.cart, product],
            detailProduct: { ...product }
          };
        });
        // , this.addTotals
      };

    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalProduct: product, modalOpen: true };
        });
    };

    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false };
        });
    };

    increment = id => {
        console.log("increment method");

        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => {
          return item.id === id;
        });
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;

        product.total = (product.count * product.cost);

        this.setState(() => {
          return {
            cart: [...tempCart]
          };
        }, this.addTotals);
      };
    
    decrement = id => {
        console.log("decrement method");

        let tempCart = [...this.state.cart];

        const selectedProduct = tempCart.find(item => {
          return item.id === id;
        });

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count - 1;

        if (product.count === 0) {
          this.removeItem(id);

        } else {
          product.total = (product.count * product.cost);
          this.setState(() => {

            return { cart: [...tempCart] };
          }, this.addTotals);
        }
      };
    
    removeItem = id => {
        console.log("remove item from cart");

        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
    
        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
    
        tempCart = tempCart.filter(item => {
          return item.id !== id;
        });
    
        this.setState(() => {
          return {
            cart: [...tempCart],
            products: [...tempProducts]
          };
        }, this.addTotals);
      };

    clearCart = () => {
        console.log("clear your cart");

        this.setState(
          () => {
            return { cart: [] };
          },
          () => {
            //   important to copy them over in this method
            this.setProducts();
            this.addTotals();
          }
        );
      };

    getTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        return {
          subTotal,
          tax,
          total
        };
      };

    addTotals = () => {
        const totals = this.getTotals();
        this.setState(
          () => {
            return {
              cartSubTotal: totals.subTotal,
              cartTax: totals.tax,
              cartTotal: totals.total
            };
          },
          () => {
            console.log(this.state);
          }
        );
      };
    
    render() {
        return (
            // value can be an object
            <ProductContext.Provider 
                value={{
                // includes all values
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};