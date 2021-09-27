import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { langEng,langRus } from '../Redux-toolkit/langModeSlice'
import './navbar.scss'
import { content } from './textContent'


function Navbar() {

    let resumeLink = "https://drive.google.com/file/d/1Lr05RkXCVdrd4yoEPv1a5fQ3rwu-sVMN/view?usp=sharing"
    const langMode = useSelector(state => state.langMode.lang)
    const dispatch = useDispatch()
    let lang = langMode;
    const[engButton,setEngButton] = useState("active")
    const[rusButton,setRusButton] = useState("not-active")

    const switchLangRus = () => {
        if( langMode === content.eng ) {
            dispatch(langRus())
            setEngButton("not-active")
            setRusButton("active")
        }
    }
    const switchLangEng = () => {
        if( langMode === content.rus ) {
            dispatch(langEng())
            setRusButton("not-active")
            setEngButton("active")
        }
    }

    return (
        <ul className="row navbar container">
            <li className="col-3"><a name="home" href="#"> 
                &nbsp;&nbsp;&nbsp;&nbsp;{lang.navbar.home}&nbsp;&nbsp;&nbsp;&nbsp; </a>
            </li>
            <li className="col-3"><a href="#contacts"> {lang.navbar.contacts} </a></li>
            <li className="col-3"><a href={ resumeLink } target="_blank"> &nbsp;&nbsp;{lang.navbar.resume}&nbsp;&nbsp; </a></li>
            <li className="col-3 lang-button">
                <a href="#">
                    <span className={engButton} onClick={switchLangEng}>eng</span>
                    <span className={rusButton} onClick={switchLangRus}>rus</span>
                </a>
            </li>
        </ul>
    )
}
export default Navbar;
