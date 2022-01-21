import React from 'react'
import Container from './Container/Container.js';
import Navbar from './Navbar/Navbar.js';
import Link_Home from './Navbar/Link_Home.js';
import Link_Contacts from './Navbar/Link_Contacts.js';
import Link_Resume from './Navbar/Link_Resume.js';
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
      <Summary/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </Container>
  )
}
export default App;

