import React, { useState } from 'react'
import { dataSkills } from './data-skills.js'
import { textContent } from './textContent.js'
import './app.scss'

function Summary() {
    const [classes,setClases] = useState('tool col-4 col-md-6 col-lg-4 on-start')
    // const [delay,setDelay] = useState('')


    return (
        <section className="summary row">
            <div className="title row">
                <h2>Summary</h2>
            </div>
            <div className="info row">
                <div className="aboutme col-md-8">
                    <div className="subtitle row">
                        <h3>about me</h3>
                    </div>
                    <div className="text row"> {textContent.aboutMeText}</div>
                </div>
                <div className="skills col-md-4">
                    <div className="subtitle row">
                        <h3>skills</h3>
                    </div>
                    <div className='tech-skills row'>
                        {dataSkills.map((data) => ( <div key={data.id}
                            className={classes}
                            style={{animationDelay: data.delay}}>
                            <p> {data.title} </p>
                        </div>))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Summary
// animationDelay: "200ms",