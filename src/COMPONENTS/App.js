import React,{ useState,useEffect } from 'react'
import Container from './Container/Container.js';
import Navbar from './Navbar.js'
import Summary from './Summary.js'
import Projects from './Projects.js'
import Contacts from './Contacts.js';
import Footer from './Footer/Footer.js';

function App() {

  return (
    <Container>
      <Navbar/>
      <Summary/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </Container>
  )
}
export default App;

