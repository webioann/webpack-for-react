import React from 'react';
import './navbar.scss';

function Navbar(props) {

    return (
        <div className='navbar-box'>
            <nav className="navbar">
                {props.children}
            </nav>
        </div>
    );
}
export default Navbar;
