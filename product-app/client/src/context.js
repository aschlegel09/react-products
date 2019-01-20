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
        modalProduct: false,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    };

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        productSeed.forEach(item => {
            // copying values not just referencing
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        })

        this.setState(() => {
            return {products:tempProducts}
        })
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };

    handleDetail = id => {
        console.log(`detail prop hello ${id}`);
        const product =  this.getItem(id);
        this.setState(() => {
            return { detailProduct: product }
        })
    };

    // single ticks to access id
    addToCart = id => {
        console.log(`hello from cart. id is. ${id}`); 
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index]
        product.inCart = true;
        product.count = 1;
        const cost = product.cost;
        product.total = cost;

        this.setState(
            () => {
            return { products: tempProducts, cart: [[...this.state.cart, product]]};
        },
        () => {
            // this logs the new Cart state
            console.log(this.state);
                }
        );
    };

    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {modalProduct: product, modalOpen: true}
        })
    }

    closeModal = () => {
        this.setState(() => {
            return {modalOpen: false}
        })
    }

    increment = (id) => {
        console.log("increment method");
    }

    decrement = (id) => {
        console.log("decrement method");
    }

    removeItem = (id) => {
        console.log("remove item from cart");
    }

    clearCart = (id) => {
        console.log("clear your cart");
    }

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
//     }

    render() {
        return (
            // value can be an object
            <ProductContext.Provider value={{
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
            }}>
            {/* //     
            // }}> */}
            {/* // test button for state change */}
            {/* // <button onClick={this.tester}>Test here</button> */}

            {/* //     return all children */}
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer=ProductContext.Consumer;

export {ProductProvider,ProductConsumer};