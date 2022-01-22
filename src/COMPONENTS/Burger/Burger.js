import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import './burger.scss';

function Burger() {

    return (
        <div className='burger-box'>
            <GiHamburgerMenu className='burger-icon'/>
        </div>
    );
}
export default Burger;
