import React from 'react';
import logo from './logo.png';
import './Header.css'

const Header = () => {
    return (

        <div className='head-bar'>
            <nav className='navbar-part fixed-top' >
                <a id='logo' href=""><img src={logo} alt="" />Bottlezzz</a>
                <div>
                    <a href="">Shop</a>
                    <a href="">Cart</a>
                    <a href="">About</a>
                </div>
            </nav>

        </div>


    );
};

export default Header;