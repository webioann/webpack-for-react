import React from 'react';
import { useSelector } from 'react-redux';
import useTranslator from '../../hooks/useTranslator';
import { projTitle,portfolio,dashboard,weather } from '../../data/multiLang';
import { gitHubPortfolio,gitHubDashboard,gitHubWeather } from '../../data/constants';
import { VscGithub } from 'react-icons/vsc';
import { CgWebsite } from 'react-icons/cg';
import './projects.scss';

function Projects() {

    return (
        <section className="projects">
            <h2 className="title">{ useTranslator(projTitle) }</h2>

            <section className="portfolio">
                <div className="wrapper">
                    <h3 className="subtitle">#1 { useTranslator(portfolio.subtitle) }</h3>

                    <div className='discription'>
                        <span>{ useTranslator(dashboard.spanDiscript) }</span>
                        <p>{ useTranslator(portfolio.textDicript) }</p>
                    </div>
                    
                    <div className='used-tools'>
                        <span>{ useTranslator(dashboard.spanTools) }</span>
                        <p>{ useTranslator(portfolio.textTools) }</p>
                    </div>

                        <a href={gitHubPortfolio} 
                            target="_blank"
                            className='link-box'>
                            <VscGithub className='icon'/>
                            <span className='link-text'>
                                see my code
                            </span>
                        </a>

                </div>

            </section>

            <section className="dashboard">
                <div className="wrapper">
                    <h3 className="subtitle">#2 { useTranslator(dashboard.subtitle) } </h3>
                    
                    <div className='discription'>
                        <span>{ useTranslator(dashboard.spanDiscript) }</span>
                        <p>{ useTranslator(dashboard.textDicript) }</p>
                    </div>

                    <div className='used-tools'>
                        <span>{ useTranslator(dashboard.spanTools) }</span>
                        <p>{ useTranslator(dashboard.textTools) }</p>
                    </div>


                    <a href={gitHubDashboard} 
                        target="_blank"
                        className='link-box'>
                        <VscGithub className='icon'/>
                        <span className='link-text'>
                            see my code
                        </span>
                    </a>

                    <a href='#' 
                        target="_blank"
                        className='link-box'>
                        <CgWebsite className='icon'/>
                        <span className='link-text'>
                            visit my site
                        </span>
                    </a>

                </div>

                <div className='screenshot'>

                </div>

            </section>

            <section className="weather">
                <div className="wrapper">
                    <h3 className="subtitle">#3 { useTranslator(weather.subtitle) } </h3>

                    <div className='discription'>
                        <span>{ useTranslator(weather.spanDiscript) }</span>
                        <p>{ useTranslator(weather.textDicript) }</p>
                    </div>

                    <div className='used-tools'>
                        <span>{ useTranslator(weather.spanTools) }</span>
                        <p>{ useTranslator(weather.textTools) }</p>
                    </div>


                    <div className="link-box-tt">
                        <a href="#" target="_blank" className="link">
                            <CgWebsite className='icon'/>  
                        </a>
                        <a href={gitHubWeather} target="_blank" className="link" >
                            <VscGithub className='icon'/>
                        </a>
                    </div>
                </div>

                <div className='screenshot'>

                </div>
            </section>

        </section>
    )
}

export default Projects;
