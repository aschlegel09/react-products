import React, {Component} from 'react';
import './product.css';
import {ProductConsumer} from '../../context';
import {Link} from 'react-router-dom';
import {Row} from '../Grid/index';
import { FormBtn } from '../Form/index';

export default class Modal extends Component {
    render() {

        return(
            <ProductConsumer>
                {value => {
                    // accessed via value
                    const {modalOpen, closeModal} = value;
                    // accessed in object via detailproduct
                    const {img, name, id, cost} = value.modalProduct;
                    if(!modalOpen){
                        return null;
                    } else {
                        return (
                        <div className="modal-container">
                        <Row>
                            <div className="modal-card p-5 mx-auto col-md-8 col-lg-8 text-center text-capitalize">
                            <h5 className="text-white">
                                Item added to cart
                            </h5>
                            <hr />
                            <img src={img} className="img-fluid" alt="product" />
                            <h5 className="m-4 text-white">
                                {name}
                            </h5>
                            <h5 className="text-white">
                                cost : $ {cost}
                            </h5>
                            <Link to="/products">
                                <button onClick={() => closeModal()}>
                                    Continue Shopping
                                </button>
                            </Link>
                            <Link to="/cart">
                                <button 
                                key={id}
                                className="add-btn"
                                onClick={() => 
                                    closeModal()}>
                                    Checkout
                                </button>
                            </Link>
                            
                        <FormBtn onClick={closeModal}>Close <i className="text-white fas fa-times"></i></FormBtn>
                            </div>

                        </Row> 

                        {/* <Row> */}


                            {/* </Row> */}
                        </div>
                        )
                    }
                }}
                {/* need below commented out or app breaks */}
            {/* <div>
                <h1>Modal</h1>
            </div> */}
            
            </ProductConsumer>
        )
    }
}