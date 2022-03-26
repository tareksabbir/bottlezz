import React, { useState } from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    const [carts, setCarts] = useState([])
    console.log(carts);
    const randomItem = (cart) => {
        const showRandomItem = [...cart]
        const randomIndex = Math.floor(Math.random() * showRandomItem.length);
        const items = showRandomItem[randomIndex];
        setCarts(items)
    }
    return (
        <div className='cart-view'>
            <h5> View Carts</h5>
            {
                cart.slice(0, 4).map((item) => (
                    <div key={item.id}>
                        <img id='view-cart-img' src={item.img} alt="" />
                        <p>{item.name} ${item.price}</p>

                    </div>
                ))
            }
            <h5>Choose This One</h5>
            <p>{carts.name} price: ${carts.price}</p>
            <button id='random-pic' onClick={() => {
                randomItem(cart);
            }}>Choose One</button>
            <br />
            <button id='clear-data' onClick={() => window.location.reload(false)}>Choose Again</button>
        </div>
    );
};
export default Cart;