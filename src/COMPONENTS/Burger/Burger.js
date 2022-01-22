import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import './burger.scss';

function Burger() {

    return (
        <div id='fixed-top'>
            <div className='wrapper-burger'>
                <div className='burger-box'>
                    <GiHamburgerMenu className='burger-icon'/>
                </div>
            </div>
        </div>
    );
}
export default Burger;
