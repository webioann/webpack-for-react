import React from 'react';
import './navbar-mobile.scss';

function NavbarMobile(props) {

    return (
        <div id='fixed-top'>
            <div className='navbar-mobile-box'>
                <nav className="navbar-mobile">
                    {props.children}
                </nav>
            </div>
        </div>
    );
}
export default NavbarMobile;
