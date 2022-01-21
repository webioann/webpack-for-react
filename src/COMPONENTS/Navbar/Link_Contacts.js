import React from 'react';
import useTranslator from '../../hooks/useTranslator'
import { navbar } from '../../data/multiLang'
import './navbar.scss'

function Link_Contacts() {

    return (
        <div className='link'>
            <a href='#contacts'>
                {useTranslator(navbar.contacts)}
            </a>
        </div>
    );
}
export default Link_Contacts;
