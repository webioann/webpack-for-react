import React from 'react';
import useTranslator from '../../hooks/useTranslator';
import { useSelector } from 'react-redux';
import { navbar } from '../../data/multiLang';
import { resumeLink } from '../../data/constants';
import './menu.scss';

function Menu() {

    const theme = useSelector(state => state.redux.theme)

    return (
        <div className={theme === 'light' ? 'menu-light' : 'menu-dark'}>
            <div className='link'>
                <a href='#top'>
                    { useTranslator(navbar.home) }
                </a>
            </div>
            <div className='link'>
                <a href='#contacts'>
                    { useTranslator(navbar.contacts) }
                </a>
            </div>
            <div className='link'>
                <a href={ resumeLink } target="_blank">
                    { useTranslator(navbar.resume) }
                </a>
            </div>
        </div>
    )
}
export default Menu;
