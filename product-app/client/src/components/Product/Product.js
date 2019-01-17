import React from "react";
import './product.css';
import Reveal from 'react-reveal/Reveal';
               
function Product() {
    return (
        <Reveal effect="fadeInUp">
        <div className="col-md-6">
            <div className="m-4 bg-light pt-3 px-3 pt-md-5 px-md-5 text-center overflow-= border">
                <div className="my-3 py-3">
                    <h2>Product Headline</h2>
                    <p>Witty subheading</p>
                </div>
                <div className="bg-white box-shadow mx-auto product-img">
                </div>
            </div>
        </div>
        </Reveal>
    )
};

export default Product;