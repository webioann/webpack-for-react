import React,{ useState,useEffect } from 'react'
import Container from './Container/Container.js';
import Burger from './Burger/Burger.js';
import Navbar from './Navbar/Navbar.js';
import Menu from './Menu/Menu.js';
import LangButton from './LangButton/LangButton.js';
import ThemeToggler from './ThemeToggler/ThemeToggler.js';
import Summary from './Summary.js'
import Projects from './Projects.js'
import Contacts from './Contacts.js';
import Footer from './Footer/Footer.js';

function App() {

  const [move,setMove] = useState('-370px')

  const move_navbar = () => {
    move === '-370px' ? setMove('0px') : setMove('-370px')
    console.log(`CLICK`);
  }

  return (
    <Container>
      <Navbar move={move}>
        <Menu/>
        <LangButton/>
        <ThemeToggler/>
      </Navbar>
      <Burger move_navbar={move_navbar}/>
      <Summary/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </Container>
  )
}
export default App;

