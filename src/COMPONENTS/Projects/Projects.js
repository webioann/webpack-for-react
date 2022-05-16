import React from 'react';
import useTranslator from '../../hooks/useTranslator';
import { portfolio,dashboard } from '../../data/multiLang';
import { gitHubPortfolio,gitHubDashboard } from '../../data/constants';
import LinkBox from '../LinkBox/LinkBox';
import './projects.scss';

function Projects(props) {

    return (
        <section className="projects">
            <h1 className="deep-title">Projects</h1>
            <h3 className="subtitle">#1 {useTranslator(dashboard.subtitle)} </h3>
            <section className="dashboard">
                <div className="wrapper">
                    <div className='discription'>
                        <span>{useTranslator(dashboard.discr_span)}</span>
                        <p>{useTranslator(dashboard.discr_text)}</p>
                    </div>
                    <div className='used-tools'>
                        <span>{useTranslator(dashboard.used_tools_span)}</span>
                        <p>{useTranslator(dashboard.used_tools_text)}</p>
                    </div>
                    <div className='link-row'>
                        <LinkBox href={'#'} type='site'/>
                        <LinkBox href={ gitHubDashboard } type='github' margin={'1rem'}/>
                    </div>
                </div>
                {props.children}
            </section> 

            <h3 className="subtitle">#2 {useTranslator(portfolio.subtitle)}</h3>
            <section className="portfolio">
                <div className="wrapper">
                    <div className='used-tools'>
                        <span>{useTranslator(portfolio.used_tools_span)}</span>
                        <p>{useTranslator(portfolio.used_tools_text)}</p>
                    </div>
                    <div className='link-row'>
                        <LinkBox href={ gitHubPortfolio } type='github'/>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Projects;
