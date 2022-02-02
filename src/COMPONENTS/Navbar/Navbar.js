import React from 'react';
import './navbar.scss';

function Navbar({ move,children }) {

    return (
        <nav className='navbar'
            style={{transform: `translateX(${move})`}}>
            { children }
        </nav>
    );
}
export default Navbar;


