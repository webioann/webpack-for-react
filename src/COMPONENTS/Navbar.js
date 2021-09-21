import React,{ useState } from 'react'
// import { content } from './textContent'
import { useSelector, useDispatch } from 'react-redux'
import { langEng,langRus } from '../Redux-toolkit/langModeSlice'
import './app.scss'
import { content } from './textContent'

function Navbar(props) {
    let resumeLink = "https://drive.google.com/file/d/1Lr05RkXCVdrd4yoEPv1a5fQ3rwu-sVMN/view?usp=sharing"
    const langMode = useSelector(state => state.langMode.lang)
    const dispatch = useDispatch()
    let lang = langMode;
    const[engButton,setEngButton] = useState("active lang col-6")
    const[rusButton,setRusButton] = useState("lang col-6")


    const switchLangRus = () => {
        if( langMode === content.eng ) {
            dispatch(langRus())
            setEngButton("lang col-6")
            setRusButton("active lang col-6")
        }
    }
    const switchLangEng = () => {
        if( langMode === content.rus ) {
            dispatch(langEng())
            setRusButton("lang col-6")
            setEngButton("active lang col-6")
        }
    }
    return (
        <section className='navbar row'>
            <div className="col-3">
                <a name="home" href="#"> {lang.navbar.home} </a>
            </div>
            <div className="col-3">
                <a href="#contacts"> {lang.navbar.contacts} </a>
            </div>
            <div className="col-3">
                <a href={resumeLink} > {lang.navbar.resume} </a>
            </div>
            <div className="col-3">
                <span className={engButton} onClick={switchLangEng}>eng</span>
                <span className={rusButton} onClick={switchLangRus}>rus</span>
            </div>
        </section>
    )
}

export default Navbar;
