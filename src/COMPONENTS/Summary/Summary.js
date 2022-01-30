import React, { useState } from 'react'
import { dataSkills } from '../../data/data-skills'
import { useSelector } from 'react-redux';
import useTranslator from '../../hooks/useTranslator'
import { summary,about,skills } from '../../data/multiLang';
// import Tooltip from '../Tooltip/Tooltip'

import './summary.scss'

function Summary() {
    
    // const [classes,setClases] = useState('tool on-start')
    const theme = useSelector(state => state.redux.theme)

    return (
        <section className="summary">
            <h2 className="title row"> { useTranslator(summary.title) } </h2>
            <div className="wrapper">
                <div className="about-box">
                    <h3 className="subtitle">{ useTranslator(about.subtitle) }</h3>
                    <ul className="about">
                        <li className='intro'>{useTranslator(about.intro)}</li>
                        <li className='html-css'>{useTranslator(about.html_css)}</li>
                        <li className='js'>{useTranslator(about.js)}</li>
                        <li className='react'>{useTranslator(about.react)}</li>
                        <li className='webpack'>{useTranslator(about.webpack)}</li>
                        <li className='prepros'>{useTranslator(about.prepros)}</li>
                        <li className='languages'>{useTranslator(about.languages)}</li>
                        <li className='patterns'>{useTranslator(about.patterns)}</li>
                        <li className='studying-now'>{useTranslator(about.studying_now)}</li>
                        <li className='plan'>{useTranslator(about.plan)}</li>
                        <li className='soft-skills'>{useTranslator(about.soft_skills)}</li>
                    </ul>
                </div>

                <div className="skills-box">
                    <h3 className="subtitle">{ useTranslator(skills.subtitle) }</h3>
                    <ul className='skills'>
                        { dataSkills.map((data) => ( 
                            <li key={data.id}
                                className='tool on-start'
                                style={{ animationDelay: data.delay }}>
                                <p className={`tool-text-${theme}`}>
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
