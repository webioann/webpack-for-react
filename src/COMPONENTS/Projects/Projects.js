import React from 'react';
import { useSelector } from 'react-redux';
import useTranslator from '../../hooks/useTranslator';
import { projTitle,portfolio,dashboard,weather } from '../../data/multiLang';
import { VscGithub } from 'react-icons/vsc';
import { CgWebsite } from 'react-icons/cg';
import './projects.scss';

function Projects() {

    return (
        <section className="projects">
            <h2 className="title">{ useTranslator(projTitle) }</h2>
            <section className="portfolio-box">
                <div className="discr col-12">
                    <div className="subtitle row">
                        <h3>#1 { useTranslator(portfolio.subtitle) } </h3>
                    </div>
                    <div className="link-box row mb-3">
                        <a href="https://github.com/webioann/portfolio/" target="_blank" className="link col-md-5">
                            githubLink 
                        </a>
                    </div>
                    <p>
                        <span> { useTranslator(dashboard.spanTools) } </span>
                        { useTranslator(portfolio.textTools) }
                    </p>
                    <p>
                        <span> { useTranslator(dashboard.spanDiscript) } </span>
                        { useTranslator(portfolio.textDicript) }
                    </p>
                </div>
            </section>

            <section className="dashboard">
                <div className="discr col-12">
                    <div className="subtitle row">
                        <h3>#2 { useTranslator(dashboard.subtitle) } </h3>
                    </div>
                    <div className="link-box row mb-3">
                        <a href="#" target="_blank" className="link col-md-5"> 
                            siteLink 
                        </a>
                        <a href="https://github.com/webioann/users-database/" target="_blank" className="link col-md-5">
                            githubLink 
                        </a>
                    </div>
                    <p>
                        <span> { useTranslator(dashboard.spanTools) } </span>
                        { useTranslator(dashboard.textTools) }
                    </p>
                    <p>
                        <span> { useTranslator(dashboard.spanDiscript) } </span>
                        { useTranslator(dashboard.textDicript) }
                    </p>
                </div>
                <div className="user-screenshot col-12">
                </div>
            </section>

            <section className="weather row mt-3 py-3">
                <div className="discr col-md-6 col-lg-8">
                    <div className="subtitle row">
                        <h3>#3 { useTranslator(weather.subtitle) } </h3>
                    </div>
                    <div className="link-box row mb-3">
                        <a href="#" target="_blank" className="link col-lg-8">
                            siteLink  
                        </a>
                        <a href="https://github.com/webioann/sky-watcher/" target="_blank" className="link col-lg-8" >
                            githubLink
                        </a>
                    </div>
                    <p>
                        <span> { useTranslator(weather.spanTools) } </span>
                        { useTranslator(weather.textTools) }
                    </p>
                    <p>
                        <span> { useTranslator(weather.spanDiscript) } </span>
                        { useTranslator(weather.textDicript) }
                    </p>
                </div>
                <div className="weather-screenshot col-md-6 col-lg-4"></div>
            </section>

        </section>
    )
}

export default Projects;
