import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {



    return (
        <div className='cart-view'>
            <h5> View Carts</h5>
            {
                cart.slice(0, 4).map((item) => (
                    <div key={item.id}>
                        <img id='view-cart-img' src={item.img} alt="" />
                        <p>{item.name} ${item.price}</p>
                    </div>

                ))}

            <button id='random-pic'>Choose One</button>
            <br />
            <button id='clear-data'>Choose Again</button>

        </div>
    );
};

export default Cart;