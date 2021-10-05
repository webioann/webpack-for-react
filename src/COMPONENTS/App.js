import React,{ useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import Navbar from './Navbar.js'
import Summary from './Summary.js'
import Projects from './Projects.js'
import Contacts from './Contacts.js'
import './app.scss'

function App() {

  const [lang,setLang] = useState( useSelector(state => state.langMode.lang) ) 
  const theme = useSelector(state => state.themeMode.theme) 
  const [langMode,setLangMode] = useState( 'ENG' ) 

  useEffect(() => { console.log("RENDER") },[])

  useEffect( () => {
    console.log(lang,langMode,theme);
  }, [lang,theme])

 

  return (
    <div className="portfolio-app">
      <div className="app container" style={theme}>
        <Navbar/>
        <Summary/>
        <Projects/>
        <Contacts/>
        <section className="footer">
          &copy;
          2021. Create by Webioann.
          &reg;
        </section>
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
