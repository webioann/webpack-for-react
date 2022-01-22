import React from 'react';
import './navbar.scss';

function Navbar(props) {

    return (
        <div id='fixed-top'>
            <div className='wrapper'>
                <nav className="navbar">
                    {props.children}
                </nav>
            </div>
        </div>
    );
}
export default Navbar;


