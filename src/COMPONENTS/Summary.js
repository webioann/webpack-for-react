import React, { useState } from 'react'
import { dataSkills } from './data-skills.js'
import { text } from './text.js'
import { content } from './textContent.js'
import './app.scss'

function Summary() {
    const [classes,setClases] = useState('tool col-4 col-md-6 col-lg-4 on-start')
    // const [delay,setDelay] = useState('')

    const lang = content.eng;

    return (
        <section className="summary row">
            <div className="title row">
                <h2> { lang.summary.title } </h2>
            </div>
            <div className="info row">
                <div className="aboutme col-md-7 col-xl-8">
                    <div className="subtitle row">
                        <h3> { lang.summary.aboutMe.subtitle } </h3>
                    </div>
                    <div className="text row">
                        { lang.summary.aboutMe.aboutMeText }
                    </div>
                </div>
                <div className="skills col-md-5 col-xl-4">
                    <div className="subtitle row">
                        <h3> { lang.summary.skills.subtitle }</h3>
                    </div>
                    <div className='tech-skills row'>
                        { dataSkills.map((data) => ( <div key={data.id}
                            className={classes}
                            style={{ animationDelay: data.delay }}>
                            <p> { data.title } </p>
                        </div>))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Summary
// animationDelay: "200ms",