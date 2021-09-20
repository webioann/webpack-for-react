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
                <a name="home" href="#" className="col btn">
                    <button> {lang.navbar.home} </button>
                </a>
                <a href="#contacts" className="col btn">
                    <button> {lang.navbar.contacts} </button>
                </a>
                <a className="col btn"
                    href="https://drive.google.com/file/d/1Lr05RkXCVdrd4yoEPv1a5fQ3rwu-sVMN/view?usp=sharing" >
                    <button> {lang.navbar.resume} </button>
                </a>
                <div className="col">
                    <div className="lang-button row">
                        <span className={engButton} onClick={switchLangEng}>eng</span>
                        <span className={rusButton} onClick={switchLangRus}>rus</span>
                    </div>
                </div>
        </section>
    )
}

export default Navbar;
