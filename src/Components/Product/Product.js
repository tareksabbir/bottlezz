import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, seller, price, img } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h5>{name}</h5>
                <p><small>Brand: {seller}</small></p>
                <p> Price : ${price}</p>

            </div>
            <button>ADD TO CART</button>
        </div>
    );
};

export default Product;