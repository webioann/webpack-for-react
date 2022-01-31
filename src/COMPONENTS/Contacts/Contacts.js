import React from 'react';
import { phone,linkedInLink,email,gitHubLink } from '../../data/constants';
import { useSelector } from 'react-redux';
import { FaViber,FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { VscGithub } from 'react-icons/vsc';
import './contacts.scss';

function Contacts() {

    const theme = useSelector(state => state.redux.theme)

    return (
        <div id='contacts' className="contacts">

            <div className={`viber box-${theme}`}>
                <FaViber className='icon not-link'/>
                <p>{ phone }</p>
            </div>

            <a className={`linkedin box-${theme}`} href={ linkedInLink } target="_blank">
                <FaLinkedin className='icon'/>
                <p>linkedin/alexander-ve...</p>
            </a>

            <div className={`email box-${theme}`}>
                <HiOutlineMail className='icon not-link'/>
                <p>{ email }</p>
            </div>

            <a className={`git-hub box-${theme}`} href={ gitHubLink } target="_blank">
                <VscGithub className='icon'/>
                <p>github.com/webioann</p>
            </a>
        </div>
    )
}

export default Contacts;
