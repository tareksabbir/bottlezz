import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({ handleAddToCartEvent, product }) => {
    const { name, seller, price, img } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h5>{name}</h5>
                <p><small>Brand: {seller}</small></p>
                <p> Price : ${price}</p>

            </div>
            <button onClick={() => handleAddToCartEvent(product)}>Add To Cart
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;