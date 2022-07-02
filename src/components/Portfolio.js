import React from 'react'
import useTranslator from '../hooks/useTranslator'
import { portfolio } from '../data/text_for_portfolio'
import { portfolio_githublink } from '../data/links_url'
import LinkToGithub from './LinkToGithub'
import '../CSS/pet-project.scss'

const Portfolio = () => {
    return (
        <section className="pet-project">
            <header className="g-subtitle">
                <h2>#3 Portfolio this site</h2>
            </header>
            <div className='discription'>
                <span className='header'>{useTranslator(portfolio.discr_span)}</span>
                <p>{useTranslator(portfolio.discr_text)}</p>
            </div>
            <div className='port-github-link'>
                <LinkToGithub link={ portfolio_githublink }/>
            </div>

            <div className='tools'>
                <span className='header'>{useTranslator(portfolio.used_tools_span)}</span>
                <p>{useTranslator(portfolio.used_tools_text)}</p>
            </div>
        </section> 
    )
}

export default Portfolio
