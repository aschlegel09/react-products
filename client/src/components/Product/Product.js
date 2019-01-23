import React, {Component} from "react";
import './product.css';
import Reveal from 'react-reveal/Reveal';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../../context';
import PropTypes from 'prop-types';
// import {Row} from '../Grid/index';

export default class Product extends Component {

    
    render() {
        // why is props.products undefined
        // and why is this.state.products null
        // db is empty
    const { 
         id,
         name,
          category,
           cost,
            // brand,
             size,
            //   color,
               img,
                inCart } = this.props.product;
        
    return (
        
        <Reveal effect="fadeInUp">
         {/* <Row> */}
            <div className="card mx-auto" name="our" title="products"
            onClick={() => console.log(`clicked on card: ${id}`)}>


    <ProductConsumer>
            {value => (
                <div className="img-container" 
                 onClick={() =>{
                    // console.log(`clicked on img container id is: ${id}`)}
                    value.handleDetail(id);
                    value.openModal(id);
                }}>

                   <Link to="/details">
                        <img src={img} className="card-img-top" alt="product"
                        // onClick={()=> console.log('image clicked')}
                        />
                    </Link>

                           {/* cart button on product page */}
                    <Link to="/cart">
                          <button className="cart-btn" alt="cart" 
                          disabled={inCart ? true : false} 
                          onClick={()=> 
                            // console.log(`added to cart! id is: ${id}`)
                            value.addToCart(id)
                           }>
                                 {inCart ? "In Cart" :  <i className="fas fa-cart-plus" />}
               
                           </button>
                    </Link>
                {/* card footer */}
                        <div className="card-footer justify-content-between">
                            <p className="align-self-center mb-0">
                                "{name}" <br />{category} <br />${cost} <br />Dimensions: {size}
                            </p>
                            {/* <h5 className="text-blue font-italic mb-0">
                                <span className="mr-1">$</span>
                                {cost}
                            </h5> */}
                            </div>
                        
                        </div>
            )}
    </ProductConsumer>
                     </div>
  </Reveal>
    );
}}
// proptypes will check data type inserted
// careful of capital P */}
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
    color:PropTypes.string,
    info:PropTypes.info
})
}