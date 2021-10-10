import React,{ useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import Navbar from './Navbar.js'
import Summary from './Summary.js'
import Projects from './Projects.js'
import Contacts from './Contacts.js'
import './app.scss'

function App() {
  const theme = useSelector(state => state.themeMode.theme) 

  useEffect(() => { console.log("RENDER") },[])

  return (
    <div className="portfolio-app">
      <div className={`container ${theme}`}>
        <Navbar/>
        <Summary/>
        <Projects/>
        <Contacts/>
        <footer> &copy; 2021. Create by Webioann. &reg; </footer>
      </div>
    </div>
  );
}

export default App;

// if( langMode === "ENG" ) {
//   setLang( content.eng )
//   console.log(lang,langMode);
// }
// else if( langMode === "RUS" ) {
//   setLang( content.rus )
//   console.log(lang,langMode);
// }
