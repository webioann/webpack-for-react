import React from 'react'
import useTranslator from '../hooks/useTranslator'
import { dashboard } from '../data/multiLang'
import { portfolio_githublink } from '../data/constants'
import LinkToGithub from './LinkToGithub'
import '../CSS/pet-project.scss'

const Portfolio = () => {
    return (
        <section className="pet-project">
            <header className="g-subtitle">
                <h2>#3 Portfolio this site</h2>
            </header>
            <div className='discription'>
                <span className='header'>{useTranslator(dashboard.discr_span)}</span>
                <p>{useTranslator(dashboard.discr_text)}</p>
            </div>
            <div className='port-github-link'>
                <LinkToGithub link={ portfolio_githublink }/>
            </div>

            <div className='tools'>
                <span className='header'>{useTranslator(dashboard.used_tools_span)}</span>
                <p>{useTranslator(dashboard.used_tools_text)}</p>
            </div>

            {/* <div className='grids'>
                <div className='grid-left'>
                </div>
            </div> */}
        </section> 
    )
}

export default Portfolio
