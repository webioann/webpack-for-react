import React,{ useState } from 'react'
// import { content } from './textContent'
import { useSelector, useDispatch } from 'react-redux'
import { langEng,langRus } from '../Redux-toolkit/langModeSlice'
import './app.scss'
import { content } from './textContent'

function Navbar(props) {

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
        <section className='navbar container px-3'>
            <div className="box row">
                <a href="https://webref.ru/css" className="col-2 btn">
                    {lang.navbar.home}
                </a>
                <a href="https://webref.ru/css" className="col-2 btn">
                    {lang.navbar.projects}
                </a>
                <a href="#contacts" className="col-2 btn">
                    {lang.navbar.contacts}
                </a>
                <a href="https://drive.google.com/file/d/1Lr05RkXCVdrd4yoEPv1a5fQ3rwu-sVMN/view?usp=sharing" className="col-4 btn">
                    {lang.navbar.resume}
                </a>
                <div className="col-2">
                    <div className="lang-button row">
                        <div className={engButton} onClick={switchLangEng}>ENG</div>
                        <div className={rusButton} onClick={switchLangRus}>RUS</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar;
