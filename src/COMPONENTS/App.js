import React from 'react'
import Navbar from './Navbar.js'
import Summary from './Summary.js'
import Projects from './Projects.js'
import Contacts from './Contacts.js'
import './app.scss'

function App() {


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

