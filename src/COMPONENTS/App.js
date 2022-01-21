import React,{ useState,useEffect } from 'react'
import Container from './container/Container.js';
import Navbar from './Navbar.js'
import Summary from './Summary.js'
import Projects from './Projects.js'
import Contacts from './Contacts.js'

function App() {

  return (
    <Container>
      {/* <Navbar/>
      <Summary/> */}
      <Projects/>
      <Contacts/>
      <footer> &copy; 2021. Create by Webioann. &reg; </footer>
    </Container>
  )
}
export default App;

