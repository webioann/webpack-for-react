import React from 'react'
import Container from './Container/Container.js';
import Burger from './Burger/Burger.js';
import Navbar from './Navbar/Navbar.js';
import NavbarMobile from './NavbarMobile/NavbarMobile.js';
import Link_Home from './Link_Home/Link_Home.js';
import Link_Contacts from './Link_Contacts/Link_Contacts.js';
import Link_Resume from './Link_Resume/Link_Resume.js';
import LangButton from './LangButton/LangButton.js';
import ThemeToggler from './ThemeToggler/ThemeToggler.js';
import Summary from './Summary.js'
import Projects from './Projects.js'
import Contacts from './Contacts.js';
import Footer from './Footer/Footer.js';

function App() {

  return (
    <Container>
      <Navbar>
        <Link_Home/>
        <Link_Contacts/>
        <Link_Resume/>
        <LangButton/>
        <ThemeToggler/>
      </Navbar>
      <Burger/>
      <Summary/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </Container>
  )
}
export default App;

