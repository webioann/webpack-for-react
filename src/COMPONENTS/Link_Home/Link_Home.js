import React from 'react';
import useTranslator from '../../hooks/useTranslator'
import { navbar } from '../../data/multiLang'
import './link-home.scss'

function Link_Home() {

    return (
        <div className='link'>
            <a name='home' href='#'>
                {useTranslator(navbar.home)}
            </a>
        </div>
    );
}
export default Link_Home;
