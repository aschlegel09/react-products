import React, {Component} from "react";
import './product.css';
import Reveal from 'react-reveal/Reveal';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../../context';
import PropTypes from 'prop-types';

export default class Product extends Component {

    
    render() {
        // why is props.products undefined
        // and why is this.state.products null
        // db is empty
    const { 
         id,
         name,
        //   category,
           cost,
            // brand,
            //  size,
            //   color,
               img,
                inCart } = this.props.product;
        
    return (
        
        <Reveal effect="fadeInUp">
        <div className="col-md-6 mx-auto col-9 col-lg-3 my-3">
            <div className="card" name="our" title="products"
            onClick={() => console.log(`clicked on card: ${id}`)}>


<ProductConsumer>
            {value => (
                <div className="img-container p-5" 
                 onClick={() =>{
                    // console.log(`clicked on img container id is: ${id}`)}
                    value.handleDetail(id);
                    value.openModal(id);
                }}>

                   <Link to="/details">
                        <img src={img} className="card-img-top" alt="product"
                        onClick={()=> console.log('image clicked')}/>
                    </Link>

                    <Link to="/cart">
                          <button className="cart-btn" alt="cart" 
                          disabled={inCart ? true : false} 
                          onClick={()=> 
                            // console.log(`added to cart! id is: ${id}`)
                            value.addToCart(id)
                           }>
                                 {inCart ? "inCart" :  <i className="fas fa-cart-plus" />}
               
                           </button>
                    </Link>

                </div>
            )}
</ProductConsumer>


            {/* card footer */}
            <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">
                {name}
            </p>
            <h5 className="text-blue font-italic mb-0">
                <span className="mr-1">$</span>
                {cost}
            </h5>
            </div>
        
            </div>
        </div>
        </Reveal>
    );
}
} 

// proptypes will check data type inserted
// careful of capital P
Product.propTypes = {
    product:PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    name:PropTypes.string,
    cost:PropTypes.number,
    inCart:PropTypes.boolean,
    category:PropTypes.string, 
    brand:PropTypes.string, 
    size:PropTypes.string, 
    color:PropTypes.string
})
};