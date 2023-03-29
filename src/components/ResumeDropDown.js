import React, { useState } from 'react';
import useTranslator from '../hooks/useTranslator';
import { GoArrowDown } from 'react-icons/go';
import { navbar } from '../data/text_for_navigation';
import '../CSS/resume-drop-down.scss';

const ResumeDropDown = () => {
    const [showClass, setShowClass] = useState('');
    const resumeUkr =
        'https://drive.google.com/file/d/1lIctZUQFPNrR6zXFb3bkN1KeYl49eLMb/view?usp=sharing';
    const resumeRus =
        'https://drive.google.com/file/d/1-vYFzP7qe7KcnWvx8KgMncAK4CZ8m9IP/view?usp=sharing';
    const resumeEng =
        'https://drive.google.com/file/d/1zLr6kiEIl1GC7waMx9X2PaVuwgSgX6_D/view?usp=sharing';

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
                <a href={resumeRus} target="_blank" onClick={hiddeMe}>
                    {/* { useTranslator(navbar.resume) } */}
                    rus CV
                </a>
            </ul>
        </div>
    );
};

export default ResumeDropDown;
