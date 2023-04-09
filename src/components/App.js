import React, { useState, useEffect } from 'react';
import Container from './Container.js';
import Navigation from './Navigation.js';
import LangSwitch from './LangSwitch.js';
import Summary from './Summary.js';
import Projects from './Projects.js';
import PetProject from './PetProject.js';
import Contacts from './Contacts.js';
import Footer from './Footer.js';
import Portfolio from './Portfolio.js';
import { useWindowWidth } from '../hooks/useWindowWidth';
import { crypto } from '../data/crypto_data.js';
import { netflix } from '../data/netflix_data.js';
import { dashboard } from '../data/dashboard_data.js';
import { portfolio } from '../data/portfolio_data.js';
import crypto_img from '../assets/crypto-screen.png';
import dashboard_img from '../assets/users-screen.png';
import netflix_img from '../assets/netflix-screen.png';

function App() {
    // === logic for adaptive navbar and burger menu ===
    const [move, setMove] = useState('0px');
    const windowWidth = useWindowWidth();

    useEffect(() => {
        windowWidth > 575 ? setMove('0px') : setMove('-770px');
    }, [windowWidth]);

    const move_navbar = () => {
        move === '-770px' ? setMove('0px') : setMove('-770px');
    };

    return (
        <Container>
            <Navigation move={move} move_navbar={move_navbar}>
                <LangSwitch />
            </Navigation>
            <Summary />
            <Projects>
                <PetProject
                    header="#1 Cryptocurrency"
                    data={crypto}
                    img={crypto_img}
                />
                <PetProject
                    header="#2 Netflix clone - in progress"
                    data={netflix}
                    img={netflix_img}
                />
                <PetProject
                    header="#3 Random Users Dashboard"
                    data={dashboard}
                    img={dashboard_img}
                />
                <Portfolio header="#4 My Portfolio Site" data={portfolio} />
            </Projects>
            <Contacts />
            <Footer />
        </Container>
    );
}

export default App;
