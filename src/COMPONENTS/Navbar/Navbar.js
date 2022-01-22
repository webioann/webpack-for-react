import React from 'react';
import { useDispatch,useSelector } from 'react-redux'

import './navbar.scss';

function Navbar({ move,children }) {

    const theme = useSelector(state => state.redux.theme)

    return (
        <div id='fixed-top'>
            <div className='wrapper'>
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


