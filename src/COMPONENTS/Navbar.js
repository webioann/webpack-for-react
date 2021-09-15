import React,{ useState } from 'react'
import { content } from './textContent';
import './app.scss'

function Navbar() {
    
    const [lang,setLang] = useState( content.eng )  

    function rus() {
        if( lang === content.eng ) {
            setLang( content.rus )
        }
        else{ setLang( content.eng )}
    }
    
    return (
        <section className='navbar'>
            <div className="row">
                <a href="https://webref.ru/css" className="col-3 btn">
                    {lang.navbar.home}
                </a>
                <a href="https://webref.ru/css" className="col-3 btn">
                    {lang.navbar.projects}
                </a>
                <a href="#contacts" className="col-3 btn">
                    {lang.navbar.contacts}
                </a>
                <a href="https://drive.google.com/file/d/1Lr05RkXCVdrd4yoEPv1a5fQ3rwu-sVMN/view?usp=sharing" className="col-3 btn">
                    {lang.navbar.resume}
                </a>
            </div>
            <span className="cross" onClick={rus} >&#10006;</span>
        </section>
    )
}

export default Navbar;
