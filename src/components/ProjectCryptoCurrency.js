import React from 'react'
import pet_img from '../assets/crypto-2.png'
import useTranslator from '../hooks/useTranslator'
import { portfolio,dashboard } from '../data/multiLang'
import { gitHubPortfolio,gitHubRandomUsers,randomUsersLink } from '../data/constants'
import LinkToGithub from './LinkToGithub'
import LinkSite from './LinkSite'
import '../CSS/project-cryptocurrency.scss'

const ProjectCryptoCurrency = () => {
    return (
        <section className="pet-project">

            <header className="g-subtitle">
                <h2>#1 Subtitle </h2>

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
                    <img src={pet_img} alt='pet project'/>
                    <div className='project-links'>
                        <LinkSite link={ randomUsersLink }/>
                        <LinkToGithub link={ gitHubRandomUsers }/>
                    </div>

                </div>

            </div>


        </section> 
    )
}

export default ProjectCryptoCurrency
{/* <div className='screen'>
<div className='descr'>
    <h3></h3>
    <p>  The application gets users from the fake API "randomuser.me". Implemented filtering, on the clients side, by nationality and gender of the user. The two interface languages ​​are English and Ukrainian. Switch color theme. Statistics are displayed in a custom graph in three implementations - random, increasing and decreasing the number of users of a certain nationality, as well as the ratio of men and women. Pagination on the client side, with an interesting interface. Change the size of the request to the server (three options). Full adaptability of the application. Custom interface design. No third-party libraries.       </p>
</div>
</div> */}

