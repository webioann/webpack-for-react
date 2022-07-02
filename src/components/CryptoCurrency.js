import React from 'react'
import crypto_img from '../assets/crypto-2.png'
import useTranslator from '../hooks/useTranslator'
import { portfolio,dashboard } from '../data/multiLang'
import { gitHubPortfolio,gitHubRandomUsers,randomUsersLink } from '../data/constants'
import LinkToGithub from './LinkToGithub'
import LinkSite from './LinkSite'
import '../CSS/pet-project.scss'

const CryptoCurrency = () => {
    return (
        <section className="pet-project">

            <header className="g-subtitle">
                <h2>#1 Crypto Currency</h2>
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
                    <img src={crypto_img} alt='pet project'/>
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

