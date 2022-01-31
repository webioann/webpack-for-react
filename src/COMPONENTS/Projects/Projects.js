import React,{ useState,useEffect } from 'react';
import { useSelector } from "react-redux";
import useTranslator from '../../hooks/useTranslator';
import { projTitle,portfolio,dashboard } from '../../data/multiLang';
import { gitHubPortfolio,gitHubDashboard } from '../../data/constants';
import LinkBox from '../LinkBox/LinkBox';
// ======== image imports ==============================
import desktopDark from '../../assets/desktop-dk-eng.png'
import desktopLight from '../../assets/desktop-lt-rus.png'
import tabletDark from '../../assets/tablet-dk-eng.png'
import tabletLight from '../../assets/tablet-lt-rus.png'
import mobileDark from '../../assets/mobile-dk-eng.png'
import mobileLight from '../../assets/mobile-lt-eng.png'
import './projects.scss';

function Projects() {

    const theme = useSelector(state => state.redux.theme) 
    const [desktopImg,setDesktopImg] = useState(desktopDark)
    const [tabletImg,setTabletImg] = useState(tabletDark)
    const [mobileImg,setMobileImg] = useState(mobileDark)

    useEffect(() => {
        theme === 'light' ? setDesktopImg(desktopDark) : setDesktopImg(desktopLight)
        theme === 'light' ? setTabletImg(tabletDark) : setTabletImg(tabletLight)
        theme === 'light' ? setMobileImg(mobileDark) : setMobileImg(mobileLight)
    },[theme])

    return (
        <section className="projects">
            <h2 className="title">{useTranslator(projTitle)}</h2>

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
                        <LinkBox href={gitHubDashboard} type='github' margin={'10px'}/>
                    </div>
                </div>

                <div className='screenshot'>
                    <picture>
                        <source srcSet={tabletImg} media="(min-width: 500px) and (max-width: 767.999px)"  type='image/png'/>
                        <source  srcSet={desktopImg} media="(min-width: 768px)" type='image/png'/>
                        <img src={mobileImg} alt='img'/>
                    </picture>
                </div>

            </section> 

            <h3 className="subtitle">#2 {useTranslator(portfolio.subtitle)}</h3>
            <section className="portfolio">
                <div className="wrapper">
                    
                    {/* <div className='discription'>
                        <span>{useTranslator(portfolio.discr_span)}</span>
                        <p>{useTranslator(portfolio.discr_text)}</p>
                    </div> */}
                    
                    <div className='used-tools'>
                        <span>{useTranslator(portfolio.used_tools_span)}</span>
                        <p>{useTranslator(portfolio.used_tools_text)}</p>
                    </div>

                    <div className='link-row'>
                        <LinkBox href={gitHubPortfolio} type='github'/>
                    </div>
                </div>
            </section>

        </section>
    )
}

export default Projects;
