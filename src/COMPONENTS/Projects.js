import React from 'react'
import { useSelector } from 'react-redux'

import './projects.scss'

function Projects() {

    const lang = useSelector(state => state.langMode.lang)

    return (
        <section className="projects row">
            <div className="title row">
                <h2> { lang.projects.title } </h2>
            </div>
            <div className="portfolio row mt-3 py-3">
                <div className="discr col-12">
                    <div className="subtitle row">
                        <h3>#1 { lang.projects.portfolio.subtitle } </h3>
                    </div>
                    <div className="link-box row mb-3">
                        <a href="https://github.com/webioann/portfolio/" target="_blank" className="link col-md-5">
                            { lang.projects.portfolio.githubLink }
                        </a>
                    </div>
                    <p>
                        <span> {lang.projects.user.spanTools } </span>
                        { lang.projects.portfolio.textTools}
                    </p>
                    <p>
                        <span> {lang.projects.user.spanDiscript} </span>
                        { lang.projects.portfolio.textDicript }
                    </p>
                </div>
            </div>

            <div className="user row mt-3 py-3">
                <div className="discr col-12">
                    <div className="subtitle row">
                        <h3>#2 { lang.projects.user.subtitle } </h3>
                    </div>
                    <div className="link-box row mb-3">
                        <a href="#" target="_blank" className="link col-md-5"> 
                            { lang.projects.user.siteLink }
                        </a>
                        <a href="https://github.com/webioann/users-database/" target="_blank" className="link col-md-5">
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

            <div className="weather row mt-3 py-3">
                <div className="discr col-md-6 col-lg-8">
                    <div className="subtitle row">
                        <h3>#3 { lang.projects.weather.subtitle } </h3>
                    </div>
                    <div className="link-box row mb-3">
                        <a href="#" target="_blank" className="link col-lg-8">
                            { lang.projects.weather.siteLink } 
                        </a>
                        <a href="https://github.com/webioann/sky-watcher/" target="_blank" className="link col-lg-8" >
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
