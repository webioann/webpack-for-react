import React,{ useState,useEffect } from 'react';
import Container from './Container/Container.js';
// import Burger from './Burger/Burger.js';
import Navbar from './Navbar/Navbar.js';
import Menu from './Menu/Menu.js';
import LangButton from './LangButton/LangButton.js';
import ThemeToggler from './ThemeToggler/ThemeToggler.js';
import Summary from './Summary/Summary.js';
import Projects from './Projects/Projects.js';
import Contacts from './Contacts/Contacts.js';
import Footer from './Footer/Footer.js';
//========= hooks import ==========
import { useWindowWidth } from '../hooks/useWindowWidth'

function App() {

  const [move,setMove] = useState('0px')
  const windowWidth = useWindowWidth()

  useEffect(() => {
    windowWidth > 575 ? setMove('0px') : setMove('-370px')
  },[windowWidth])

  const move_navbar = () => {
    move === '-370px' ? setMove('0px') : setMove('-370px')
    console.log(`CLICK`);
  }



  return (
    <Container>
      <Navbar 
        move={move}
        move_navbar={move_navbar}
        >
        <Menu/>
        <LangButton/>
        <ThemeToggler/>
      </Navbar>
      <Summary/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </Container>
  )
}
export default App;

