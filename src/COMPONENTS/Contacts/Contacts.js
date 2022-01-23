import React from 'react';
import { phone,linkedInLink,email,gitHubLink } from '../../data/constants';
import { FaViber,FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { VscGithub } from 'react-icons/vsc'
import './contacts.scss';

function Contacts() {

    return (
        <div id='contacts' className="contacts">

            <div className="viber box">
                <FaViber className='icon'/>
                <p>{ phone }</p>
            </div>

            <div className="linkedin box">
                <a href={ linkedInLink } target="_blank">
                    <FaLinkedin className='icon'/>
                </a>
                <p>linkedin./alexander-veles</p>
            </div>

            <div className="email box">
                <HiOutlineMail className='icon'/>
                <p>{ email }</p>
            </div>

            <div className="git-hub box">
                <a href={ gitHubLink } target="_blank">
                    <VscGithub className='icon'/>
                </a>
                <p>github.com/webioann</p>
            </div>
        </div>
    )
}

export default Contacts;
