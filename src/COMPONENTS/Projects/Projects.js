import React,{ useState,useEffect } from 'react';
import { useSelector } from "react-redux";
import useTranslator from '../../hooks/useTranslator';
import { projTitle,portfolio,dashboard,weather } from '../../data/multiLang';
import { gitHubPortfolio,gitHubDashboard,gitHubWeather } from '../../data/constants';
import LinkBox from '../LinkBox/LinkBox';
import desktop from '../../assets/desk.png'
import tabletDark from '../../assets/tablet.png'
import tabletLight from '../../assets/tablet-lt.png'
import mobile from '../../assets/mobile-dark.png'
import './projects.scss';

function Projects() {

    const theme = useSelector(state => state.redux.theme) 
    const [tabletImg,setTabletImg] = useState(tabletDark)

    useEffect(() => {
        theme === 'light' ? setTabletImg(tabletDark) : setTabletImg(tabletLight)
    },[theme])


    return (
        <section className="projects">
            <h2 className="title">{ useTranslator(projTitle) }</h2>

            <h3 className="subtitle">#1 { useTranslator(dashboard.subtitle) } </h3>
            <section className="dashboard">
                <div className="wrapper">
                    <p className='discription'>
                        <span>{ useTranslator(dashboard.spanDiscript) }</span>
                        { useTranslator(dashboard.textDicript) }
                    </p>
                        
                    <p className='used-tools'>
                        <span>{ useTranslator(dashboard.spanTools) }</span>
                        { useTranslator(dashboard.textTools) }
                    </p>

                    <div className='link-row'>
                        <LinkBox href={'#'} type='site'/>
                        <LinkBox href={gitHubDashboard} type='github' margin={'10px'}/>
                    </div>
                </div>

                <div className='screenshot'>
                    <picture>
                        <source srcSet={tabletImg} media="(min-width: 500px) and (max-width: 767.999px)"  type='image/png'/>
                        <source  srcSet={desktop} media="(min-width: 768px)" type='image/png'/>
                        <img src={mobile} alt='img'/>
                    </picture>
                </div>

            </section>

            <h3 className="subtitle">#2 { useTranslator(portfolio.subtitle) }</h3>
            <section className="portfolio">
                <div className="wrapper">
                    

                    <p className='discription'>
                        <span>{ useTranslator(dashboard.spanDiscript) }</span>
                        { useTranslator(portfolio.textDicript) }
                    </p>
                    
                    <p className='used-tools'>
                        <span>{ useTranslator(dashboard.spanTools) }</span>
                        { useTranslator(portfolio.textTools) }
                    </p>
                    <div className='link-row'>
                        <LinkBox href={gitHubPortfolio} type='github'/>
                    </div>
                </div>

            </section>

            <h3 className="subtitle">#3 { useTranslator(weather.subtitle) } </h3>
            <section className="weather">
                <div className="wrapper">
                    
                        
                    <p className='discription'>
                        <span>{ useTranslator(weather.spanDiscript) }</span>
                        { useTranslator(weather.textDicript) }
                    </p>
                        
                    <p className='used-tools'>
                        <span>{ useTranslator(weather.spanTools) }</span>
                        { useTranslator(weather.textTools) }
                    </p>

                    <div className='link-row'>
                        <LinkBox href={'#'} type='site'/>
                        <LinkBox href={gitHubWeather} type='github' margin={'10px'}/>
                    </div>

                </div>

                <div className='screenshot'>

                </div>
            </section>

        </section>
    )
}

export default Projects;
