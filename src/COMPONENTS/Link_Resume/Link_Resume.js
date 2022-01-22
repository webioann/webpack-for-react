import React from 'react';
import useTranslator from '../../hooks/useTranslator'
import { navbar } from '../../data/multiLang'
import './link-resume.scss'

function Link_Resume() {

    const resumeLink = "https://drive.google.com/file/d/1Lr05RkXCVdrd4yoEPv1a5fQ3rwu-sVMN/view?usp=sharing"

    return (
        <div className='link'>
            <a href={resumeLink}>
                {useTranslator(navbar.resume)}
            </a>
        </div>
    );
}
export default Link_Resume;
