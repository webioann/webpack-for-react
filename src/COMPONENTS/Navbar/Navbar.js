import React from 'react';
import { useDispatch,useSelector } from 'react-redux'
import Burger from '../Burger/Burger';
import './navbar.scss';

function Navbar({ move,move_navbar,children }) {

    const theme = useSelector(state => state.redux.theme)

    return (
        <div id='fixed-top'>
            <div className='nav-wrapper'>
                <Burger move_navbar={move_navbar}/>
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


