import React from 'react';
import { dataSkills } from '../../data/data-skills';
import useTranslator from '../../hooks/useTranslator';
import { about,skills } from '../../data/multiLang';
import './summary.scss';

function Summary() {

    return (
        <section className="summary">
            <h1 className='deep-title'>Summary</h1>
            <div className="wrapper">
                <div className="about-box">
                    <h3 className="subtitle">{useTranslator(about.subtitle)}</h3>
                    <ul className="about">
                        <li className='intro'>{useTranslator(about.intro)}</li>
                        <li className='study'>{useTranslator(about.study)}</li>
                        <li className='html-css'>{useTranslator(about.html_css)}</li>
                        <li className='js'>{useTranslator(about.js)}</li>
                        <li className='react'>{useTranslator(about.react)}</li>
                        <li className='webpack'>{useTranslator(about.webpack)}</li>
                        <li className='tools'>{useTranslator(about.tools)}</li>
                        <li className='languages'>{useTranslator(about.languages)}</li>
                        <li className='patterns'>{useTranslator(about.patterns)}</li>
                        <li className='studying-now'>{useTranslator(about.studying_now)}</li>
                        <li className='plan'>{useTranslator(about.plan)}</li>
                        <li className='soft-skills'>{useTranslator(about.soft_skills)}</li>
                    </ul>
                </div>
                <div className="skills-box">
                    <h3 className="subtitle">{useTranslator(skills.subtitle)}</h3>
                    <ul className='skills'>
                        { dataSkills.map((data) => ( 
                            <li key={data.id}
                                className='tool on-start'
                                style={{ animationDelay: data.delay }}>
                                <p className='tool-text'>
                                    { data.title } 
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                
            </div>
        </section>
    )
}
export default Summary;
