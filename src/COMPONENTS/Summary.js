import React, { useState } from 'react'
import { dataSkills } from '../data/data-skills'
import { useSelector } from 'react-redux';
import useTranslator from '../hooks/useTranslator'
import { summary } from '../data/multiLang'

import './summary.scss'

function Summary() {
    
    const [classes,setClases] = useState('tool col-4 col-md-6 col-lg-4 on-start')
    const border = useSelector(state => state.redux.theme)

    return (
        <section className="summary row">
            <div className="title row">
                <h2> { useTranslator(summary.title) } </h2>
            </div>
            <div className="info row">
                <div className="aboutme col-md-7 col-xl-8">
                    <div className="subtitle row">
                        <h3>
                            { useTranslator(summary.aboutMeSubtitle) }
                        </h3>
                    </div>
                    <div className="text row">
                        { useTranslator(summary.aboutMeText) }
                    </div>
                </div>
                <div className="skills col-md-5 col-xl-4">
                    <div className="subtitle row">
                        <h3>
                            { useTranslator(summary.skills) }
                        </h3>
                    </div>
                    <div className='tech-skills row'>
                        { dataSkills.map((data) => ( <div key={data.id}
                            className={classes}
                            style={{ animationDelay: data.delay }}>
                            <p className={border}> { data.title } </p>
                        </div>))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Summary
// animationDelay: "200ms",