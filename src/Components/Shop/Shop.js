import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddToCartEvent = (product) => {

        const newCart = [...cart, product];
        setCart(newCart);

    }
    const handleAddToCartEventClear = () => {
        setCart([]);
    }


    return (
        <div className='shop-container'>
            <div className='cart-position '>
                <Cart cart={cart}
                    handleAddToCartEventClear={handleAddToCartEventClear}
                ></Cart>
            </div>

            <div className='product-grid'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCartEvent={handleAddToCartEvent}

                    ></Product>)
                }
            </div>



        </div>
    );
};

export default Shop;