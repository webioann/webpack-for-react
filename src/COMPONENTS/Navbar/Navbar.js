import React from 'react';
import { useSelector } from 'react-redux'
import './navbar.scss';

function Navbar({ move,children,Burger }) {

    const theme = useSelector(state => state.redux.theme)

    return (
        <div id='fixed-top'>
            <div className='nav-wrapper'>
                { Burger }
                <nav 
                    className={theme === 'light' ? 'navbar-light' : 'navbar-dark'}
                    style={{transform: `translateX(${move})`}}>
                    { children }
                </nav>
            </div>
        </div>
    );
}
export default Navbar;


