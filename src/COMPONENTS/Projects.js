import React from 'react'
import { useSelector } from 'react-redux'

import './app.scss'

function Projects() {

    const langMode = useSelector(state => state.langMode.lang)
    let lang = langMode;


    return (
        <section className="projects row">
            <div className="title row">
                <h2> { lang.projects.title } </h2>
            </div>
            {/* ============== USER DATABASE =============== */}
            <div className="user row">
                <div className="discr col-12">
                    <div className="subtitle row">
                        <h3> { lang.projects.user.subtitle } </h3>
                    </div>
                    <div className="link-box row mb-2">
                        <a href="#" target="_blank" className="link col-md-5"> 
                            { lang.projects.user.siteLink }
                        </a>
                        <a href="#" target="_blank" className="link col-md-5">
                            { lang.projects.user.githubLink }
                        </a>
                    </div>
                    <p>
                        <span> {lang.projects.user.spanTools } </span>
                        { lang.projects.user.textTools}
                    </p>
                    <p>
                        <span> {lang.projects.user.spanDiscript} </span>
                        { lang.projects.user.textDicript }
                    </p>
                </div>
                <div className="user-screenshot col-12">
                </div>
            </div>
            {/* ============= SKY WATCHER ==================== */}
            <div className="weather row">
                <div className="discr col-md-6 col-lg-8">
                    <div className="subtitle row">
                        <h3> { lang.projects.weather.subtitle } </h3>
                    </div>
                    <div className="link-box row mb-2">
                        <a href="#" target="_blank" className="link col-lg-8">
                            { lang.projects.weather.siteLink } 
                        </a>
                        <a href="#" target="_blank" className="link col-lg-8" >
                            {lang.projects.weather.githubLink}
                        </a>
                    </div>
                    <p>
                        <span> { lang.projects.weather.spanTools } </span>
                        { lang.projects.weather.textTools }
                    </p>
                    <p>
                        <span> { lang.projects.weather.spanDiscript } </span>
                        { lang.projects.weather.textDicript }
                    </p>
                </div>
                <div className="weather-screenshot col-md-6 col-lg-4"></div>
            </div>

        </section>
    )
}

export default Projects;
