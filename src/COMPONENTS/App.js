import React,{ useState,useEffect } from 'react'
import { content } from './textContent'
import { useSelector, useDispatch } from 'react-redux'
// import Navbar from './Navbar.js'
import Navy from './Navy.js'
import Summary from './Summary.js'
import Projects from './Projects.js'
import Contacts from './Contacts.js'
import './app.scss'

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
      <div className="app container">
        <div className="row">
          <Navy/>
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
    </div>
  );
}

export default App;

