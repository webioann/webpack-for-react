import React,{ useState,useEffect } from 'react'
import Container from './Container.js'
import FixedTop from './FixedTop.js'
import Burger from './Burger.js'
import Navbar from './Navbar.js'
import Menu from './Menu.js'
import LangSwitch from './LangSwitch.js'
import Summary from './Summary.js'
import Projects from './Projects.js'
import Contacts from './Contacts.js'
import Footer from './Footer.js'
import CryptoCurrency from './CryptoCurrency.js'
import RandomUsers from './RandomUsers.js'
//========= hooks import ==========
import { useWindowWidth } from '../hooks/useWindowWidth'

function App() {

  // === logic for adaptive navbar and burger menu ===
  const [move,setMove] = useState('0px')
  const windowWidth = useWindowWidth()

  useEffect(() => {
      windowWidth > 575 ? setMove('0px') : setMove('-770px')
  },[windowWidth])

  const move_navbar = () => {
    move === '-770px' ? setMove('0px') : setMove('-770px')
  }

  return (
    <Container>
      <FixedTop>
        <Navbar move={move}>
          <Menu/>
          <LangSwitch/>
        </Navbar>
        <Burger move_navbar={move_navbar} move={move}/>
      </FixedTop>
      <Summary/>
      <Projects>
        <CryptoCurrency/>
        <RandomUsers/>
      </Projects>
      <Contacts/>
      <Footer/>
    </Container>
  )
}

export default App;

