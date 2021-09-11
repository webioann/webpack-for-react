import React from 'react'
import './app.scss'

function Navbar() {


    return (
        <section className='navbar'>
            <div className="row">
                <a href="https://webref.ru/css" className="col-3 btn">Home</a>
                <a href="https://webref.ru/css" className="col-3 btn">Projects</a>
                <a href="#contacts" className="col-3 btn">Contact</a>
                <a href="https://drive.google.com/file/d/1Lr05RkXCVdrd4yoEPv1a5fQ3rwu-sVMN/view?usp=sharing" className="col-3 btn">Resume</a>
            </div>
            {/* <span className="cross">&#10006;</span> */}
        </section>
    )
}

export default Navbar;
