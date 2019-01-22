import React, {Component} from 'react';
import {Row} from '../Grid/index';

export default class CartItem extends Component {
    render() {
        // pass down the functions into props.value and the key value pairs in item
      const { id, name, img, cost, total, count } = this.props.item;
      const { increment, decrement, removeItem } = this.props.value;
  
return (
               <Row>
                    <div className="col-10 mx-auto col-lg-2">
                       
                    {/* this is cart item */}
                        <img src={img} className="img-fluid" alt="product" style={{
                            width: '5rem',
                            height: '5rem'
                        }}
                        />
                    </div>
                    
                    <div className="col-10 mx-auto col-lg-2">
                         <span className="d-lg-none">product : </span>
                        {name}
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                            <span className="d-lg-none">cost : </span>
                        {cost}
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                         <span className="d-lg-none">Quantity : </span>
                        {count}
                    </div>

                    <div className="col-10 mx-auto col-lg-2 my-lg-0 my-2">
                          <div className="d-flex justify-content-center">

                             <span className="btn btn-block mx-1 px-3" onClick={() => {
                                 decrement(id)
                                 }}>
                            -
                             </span>

                             <span className="btn btn-block mx-1 px-3">{count}</span>

                             <span className="btn btn-block mx-1 px-3" onClick={() => {
                                    increment(id)
                                }}>
                            +
                              </span>
                         </div>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                          <div className="cart-icon"
                             onClick={() => {
                                 removeItem(id)
                            }}>
                                 <i className="fas fa-trash" />
                          </div>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                         <strong>item total : $ {total}</strong>
                    </div>

                </Row>      
                    )
                }
            }