import React from 'react';
import useTranslator from '../hooks/useTranslator';
import { navbar } from '../data/multiLang';
import { resumeLink } from '../data/constants';
import '../CSS/menu.scss';

function Menu() {

    return (
        <div className='menu'>
            <div className='link'>
                <a href='#top' >
                    { useTranslator(navbar.home) }
                </a>
            </div>
            <div className='link'>
                <a href='#contacts' >
                    { useTranslator(navbar.contacts) }
                </a>
            </div>
            <div className='link'>
                <a href={ resumeLink }  target="_blank">
                    { useTranslator(navbar.resume) }
                </a>
            </div>
        </div>
    )
}
export default Menu;
