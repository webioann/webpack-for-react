import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { langEng,langRus } from '../Redux-toolkit/langModeSlice'
import './navbar.scss'
import { content } from './textContent'


function Navy() {
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
        <ul className="navbar">
            <li><a name="home" href="#"> {lang.navbar.home} </a></li>
            <li><a href="#contacts"> {lang.navbar.contacts} </a></li>
            <li><a href={ resumeLink } target="_blank"> {lang.navbar.resume} </a></li>
            <li className="lang-button">
                <a href="#">
                    <span className={engButton} onClick={switchLangEng}>eng</span>
                    <span className={rusButton} onClick={switchLangRus}>rus</span>
                </a>
            </li>
        </ul>
    )
}

export default Navy
