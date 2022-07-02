import React from 'react'
import './projects.scss';

function Projects({ children }) {

    return (
        <section className="projects">
            <h1 className="g-deep-title">Projects</h1>
            { children }
        </section>
    )
}

export default Projects;
{/* <section className="dashboard">
<h2 className="subtitle">#1 {useTranslator(dashboard.subtitle)} </h2>

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
        <LinkBox link={ randomUsersLink } type='site'/>
        <LinkBox link={ gitHubRandomUsers } type='github'/>
        <FalseLinkBox/>
    </div>
</div>
{props.children}
</section> 

<h2 className="subtitle">#2 {useTranslator(portfolio.subtitle)}</h2>
<section className="portfolio">
<div className="wrapper">
    <div className='discription'>
        <span>{useTranslator(portfolio.discr_span)}</span>
        <p>{useTranslator(portfolio.discr_text)}</p>
    </div>

    <div className='used-tools'>
        <span>{useTranslator(portfolio.used_tools_span)}</span>
        <p>{useTranslator(portfolio.used_tools_text)}</p>
    </div>
    <div className='link-row'>
        <LinkBox link={ gitHubPortfolio } type='github'/>
    </div>
</div>
</section> */}
