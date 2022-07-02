import React from 'react'
import randomusers_img from '../assets/desktop-1.png'
import useTranslator from '../hooks/useTranslator'
import { dashboard } from '../data/multiLang'
import { gitHubRandomUsers,randomUsersLink } from '../data/constants'
import LinkToGithub from './LinkToGithub'
import LinkSite from './LinkSite'
import '../CSS/pet-project.scss'

const CryptoCurrency = () => {
    return (
        <section className="pet-project">

            <header className="g-subtitle">
                <h2>#2 Random Users </h2>
            </header>

            <div className='grids'>
                <div className='grid-left'>
                    <div className='discription'>
                        <span className='header'>{useTranslator(dashboard.discr_span)}</span>
                        <p>{useTranslator(dashboard.discr_text)}</p>
                    </div>

                    <div className='tools'>
                        <span className='header'>{useTranslator(dashboard.used_tools_span)}</span>
                        <p>{useTranslator(dashboard.used_tools_text)}</p>
                    </div>

                </div>

                <div className='image'>
                    <img src={randomusers_img} alt='pet project'/>
                    <div className='project-links'>
                        <LinkSite link={ randomUsersLink }/>
                        <LinkToGithub link={ gitHubRandomUsers }/>
                    </div>

                </div>

            </div>


        </section> 
    )
}

export default CryptoCurrency
