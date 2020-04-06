import React from 'react';
import logo from '../yoga-logo.png'
import './Navigation.css'
//sfc
const Navigation = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;
