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
        <section className='navbar row'>
                <a name="home" href="#" className="col-2 col-sm-3 btn">
                    {lang.navbar.home}
                </a>
                {/* <a href="https://webref.ru/css" className="col-2 btn">
                    {lang.navbar.projects}
                </a> */}
                <a href="#contacts" className="col-3 col-sm-3 btn">
                    {lang.navbar.contacts}
                </a>
                <a href="https://drive.google.com/file/d/1Lr05RkXCVdrd4yoEPv1a5fQ3rwu-sVMN/view?usp=sharing" className="col-3 col-sm-3 btn">
                    {lang.navbar.resume}
                </a>
                <div className="col-4 col-sm-3">
                    <div className="lang-button row">
                        <span className={engButton} onClick={switchLangEng}>eng</span>
                        <span className={rusButton} onClick={switchLangRus}>rus</span>
                    </div>
                </div>
        </section>
    )
}

export default Navbar;
