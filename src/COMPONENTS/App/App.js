import React,{ useState,useEffect } from 'react'
import Container from '../Container/Container.js'
import Star from '../Star/Star.js'
import FixedTop from '../FixedTop/FixedTop.js'
import Burger from '../Burger/Burger.js'
import Navbar from '../Navbar/Navbar.js'
import Menu from '../Menu/Menu.js'
import LangSwitch from '../LangSwitch/LangSwitch.js'
import Summary from '../Summary/Summary.js'
import Projects from '../Projects/Projects.js'
import Contacts from '../Contacts/Contacts.js'
import Footer from '../Footer/Footer.js'
import Slider from '../Slider/Slider.js'
import SliderTools from '../Slider/SliderTools.js'
import SliderArrows from '../SliderArrows/SliderArrows.js'
import SliderGallery from '../SliderGallery/SliderGallery.js'
//========= hooks import ==========
import { useWindowWidth } from '../../hooks/useWindowWidth'

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
      <Star/>
      <FixedTop>
        <Navbar move={move}>
          <Menu/>
          <LangSwitch/>
        </Navbar>
        <Burger move_navbar={move_navbar} move={move}/>
      </FixedTop>
      <Summary/>
      <Projects>
        <Slider>
          <SliderGallery/>
          <SliderArrows/>
          <SliderTools/>
        </Slider>
      </Projects>
      <Contacts/>
      <Footer/>
    </Container>
  )
}
export default App;

