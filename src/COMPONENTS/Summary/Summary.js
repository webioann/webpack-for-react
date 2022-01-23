import React, { useState } from 'react'
import { dataSkills } from '../../data/data-skills'
import { useSelector } from 'react-redux';
import useTranslator from '../../hooks/useTranslator'
import { summary } from '../../data/multiLang'

import './summary.scss'

function Summary() {
    
    const [classes,setClases] = useState('tool on-start')
    const border = useSelector(state => state.redux.theme)

    return (
        <section className="summary">
            <h2 className="title row"> { useTranslator(summary.title) } </h2>
            <div className="wrapper">

                <div className="about-box">
                    <h3 className="subtitle">{ useTranslator(summary.aboutMeSubtitle) }</h3>
                    <p className="about">
                        { useTranslator(summary.aboutMeText) }
                    </p>
                </div>

                <div className="skills-box">
                    <h3 className="subtitle">{ useTranslator(summary.skills) }</h3>
                    <ul className='skills'>
                        { dataSkills.map((data) => ( 
                            <li key={data.id}
                                className='tool on-start'
                                style={{ animationDelay: data.delay }}>
                                <p className={border}> { data.title } </p>
                            </li>))
                        }
                    </ul>
                </div>
                
            </div>
        </section>
    )
}
export default Summary;
