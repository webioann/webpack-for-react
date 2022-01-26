import React from 'react';
import { useSelector } from 'react-redux'
import './navbar.scss';

function Navbar({ move,children }) {

    const theme = useSelector(state => state.redux.theme)

    return (
        <nav 
            className={theme === 'light' ? 'navbar-light' : 'navbar-dark'}
            style={{transform: `translateX(${move})`}}>
            { children }
        </nav>
    );
}
export default Navbar;


