import React,{ useState,useEffect } from 'react'
import { content } from './textContent'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from './Navbar.js'
import Summary from './Summary.js'
import Projects from './Projects.js'
import Contacts from './Contacts.js'
import './app.scss'

function App() {

  const langMode = useSelector(state => state.langMode.lang)
  const [lang,setLang] = useState( content.eng ) 


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
    <div className="container">
      <div className="app row">
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

