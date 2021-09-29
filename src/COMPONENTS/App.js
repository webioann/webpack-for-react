import React,{ useState,useEffect } from 'react'
import { content } from './textContent'
import { useSelector } from 'react-redux'
import Navbar from './Navbar.js'
import Summary from './Summary.js'
import Projects from './Projects.js'
import Contacts from './Contacts.js'
import './app.scss'

import blob from '../assets/blob.svg'
import blob3 from '../assets/blob3.svg'

function App() {

  const langMode = useSelector(state => state.langMode.lang)
  const [lang,setLang] = useState( content.eng ) 

  useEffect(() => { console.log("RENDER") },[])

  useEffect( () => {
    if( langMode === "ENG" ) {
      setLang( content.eng )
    }
    else if( langMode === "RUS" ) {
      setLang( content.rus )
    }
  }, [lang])
  console.log(langMode,lang);
  return (
    <div className="portfolio-app">
      <div className="container blob-box">
        <div className="blob"></div>
          <img src={blob} className="blob-svg" alt="blob svg" />
          <img src={blob3} className="blob3-svg" alt="blob2 svg" />
      </div>
      <Navbar/>
      <div className="app container">
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

