import React from 'react';
import useTranslator from '../../hooks/useTranslator';
import { navbar } from '../../data/multiLang'

import './menu.scss'

function Menu() {

    const resumeLink = "https://drive.google.com/file/d/1Lr05RkXCVdrd4yoEPv1a5fQ3rwu-sVMN/view?usp=sharing"

    return (
        <div className='menu'>
            <div className='link'>
                <a name='home' href='#'>
                    { useTranslator(navbar.home) }
                </a>
            </div>
            <div className='link'>
                <a href='#contacts'>
                    { useTranslator(navbar.contacts) }
                </a>
            </div>
            <div className='link'>
                <a href={resumeLink}>
                    { useTranslator(navbar.resume) }
                </a>
            </div>
        </div>
    )
}
export default Menu;
