import React, { useState } from 'react';
import useTranslator from '../hooks/useTranslator';
import { GoArrowDown } from 'react-icons/go';
import { navbar } from '../data/text_for_navigation';
import '../CSS/resume-drop-down.scss';

const ResumeDropDown = () => {
    const [showClass, setShowClass] = useState('');
    const resumeUkr =
        'https://drive.google.com/file/d/15HixJLpXzjgl1TRtd2dEROAoQPJmr4iT/view?usp=drive_link';
    const resumeEng =
        'https://drive.google.com/file/d/125p7Jlomgp5hAqqxyOx_Ljo7FvaB0Uu9/view?usp=share_link';

    const showMe = () => {
        if (showClass === 'show') {
            setShowClass('');
        } else {
            setShowClass('show');
        }
    };

    const hiddeMe = () => {
        setShowClass('');
    };

    return (
        <div className="resume-links">
            <div className="resume-button" onClick={showMe}>
                <span>{useTranslator(navbar.resume)}</span>
                <i className="jump-arrow">
                    <GoArrowDown className="arrow" />
                </i>
            </div>
            <ul className={`resume-drop-down ${showClass}`}>
                <a href={resumeUkr} target="_blank" onClick={hiddeMe}>
                    {/* { useTranslator(navbar.resume) } */}
                    ukr CV
                </a>
                <a href={resumeEng} target="_blank" onClick={hiddeMe}>
                    {/* { useTranslator(navbar.resume) } */}
                    eng CV
                </a>
            </ul>
        </div>
    );
};

export default ResumeDropDown;
