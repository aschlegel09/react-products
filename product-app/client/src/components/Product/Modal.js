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
                    const {img, name, cost} = value.modalProduct;
                    if(!modalOpen){
                        return null;
                    } else {
                        return (
                        <div className="modal-container">
                        <Row>
                            <div className="modal-card col-md-8 p-5 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                            <h5 className="text-white">
                                Item added to cart
                            </h5>
                            <hr />
                            <img src={img} className="img-fluid" alt="product" />
                            <h5 className="text-white">
                                {name}
                            </h5>
                            <h5 className="text-muted">
                                cost : $ {cost}
                            </h5>
                            <Link to="/products">
                                <button onClick={() => closeModal()}>
                                    Continue Shopping
                                </button>
                            </Link>
                            <Link to="/cart">
                                <button className="add-btn"
                                onClick={() => closeModal()}>
                                    Add to Cart
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