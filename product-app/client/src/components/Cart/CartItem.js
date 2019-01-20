import React from 'react';
import {Row} from '../Grid/index';

export default function CartItem({ item, value }) {
    
    const { img, 
        // title, 
        cost, name, 
        // key,
        // category, info, 
        id, count, total } = item;
    console.log(item);

    const { increment, decrement, removeItem } = value;
    console.log(value);

    return (
                <Row>
                    {/* this is cart item */}
                    <div className="col-10 mx-auto col-lg-2">
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
                         <span className="d-lg-none">quantity : </span>
                        {name}
                    </div>

                    <div className="col-10 mx-auto col-lg-2 my-lg-0 my-2">
                          <div className="d-flex justify-content-center">

                             <span className="btn btn-block mx-1" onClick={() => decrement(id)}>
                            -
                             </span>

                             <span className="btn btn-block mx-1">{count}</span>

                             <span className="btn btn-block mx-1" onClick={() => increment(id)}>
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
        );
    }