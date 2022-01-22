import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import './burger.scss';

function Burger({ move_navbar }) {

    return (
        <div id='fixed-top'>
            <div className='wrapper-burger'>
                <div className='burger-box'>
                    <GiHamburgerMenu 
                        className='burger-icon'
                        onClick={() => move_navbar()}
                    />
                </div>
            </div>
        </div>
    );
}
export default Burger;
