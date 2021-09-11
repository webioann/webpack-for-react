import React, { useState } from 'react'
import { dataSkills } from './data-skills.js'
import './app.scss'

function Summary() {
    const [classes,setClases] = useState('tool col-4 col-sm-4 col-md-6 col-lg-4 on-start')
    const [delay,setDelay] = useState('')


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
                    <div className="text row">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem blanditiis eveniet totam odit vitae dolores voluptatibus facere soluta aliquam libero quidem nulla repellendus est rerum minus unde aperiam, facilis corrupti quae quibusdam dolor in perferendis. Voluptatem eligendi vitae quae, illum amet ea! Similique, et doloremque ratione dolores sed obcaecati rerum iste fuga pariatur porro officia consequatur laborum provident animi iusto distinctio ea repellendus expedita quasi ut aperiam! Officia aliquid, saepe velit quasi ratione voluptatibus at adipisci aut reiciendis omnis voluptas?</div>
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