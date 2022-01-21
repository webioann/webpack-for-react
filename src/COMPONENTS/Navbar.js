import React,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { langEng,langRus } from '../Redux-toolkit/langModeSlice'
import { langEngs,langRuss } from '../Redux-toolkit/reduxSlicer'
import './navbar.scss'
import { content } from './textContent'
import ThemeToggler from './ThemeToggler'
import useTranslator from '../hooks/useTranslator'
import { navbarText } from '../data/textContent'

function Navbar() {


    let resumeLink = "https://drive.google.com/file/d/1Lr05RkXCVdrd4yoEPv1a5fQ3rwu-sVMN/view?usp=sharing"

    const lang = useSelector(state => state.langMode.lang)
    const dispatch = useDispatch()
    const[engButton,setEngButton] = useState("active")
    const[rusButton,setRusButton] = useState("not-active")

    useEffect(() => {
      const localLang = localStorage.getItem("lang")
      if(localLang === undefined) {
        localStorage.setItem("lang", 'ENG')
      }else if(localLang === 'ENG') {
        dispatch(langEng())
        dispatch(langEngs())
        setRusButton("not-active")
        setEngButton("active")
      }else if(localLang === 'RUS') {
        dispatch(langRus())
        dispatch(langRuss())
        setEngButton("not-active")
        setRusButton("active")
      }
    },[])

    const switchLangRus = () => {
        dispatch(langRus())
        setEngButton("not-active")
        setRusButton("active")
        localStorage.setItem("lang", 'RUS')
    }
    const switchLangEng = () => {
        dispatch(langEng())
        setRusButton("not-active")
        setEngButton("active")
        localStorage.setItem("lang", 'ENG')
    }

    return (
        <ul className="navbar container">
          <div className="row gy-0">
            <li className="col-3">
              <a name="home" href="#">{useTranslator(navbarText.home)}</a>
            </li>
            <li className="col-3">
              <a href="#contacts"> {lang.navbar.contacts} </a>
            </li>
            <li className="col-3">
              <a href={resumeLink} target="_blank">{lang.navbar.resume}</a>
            </li>
            <li className="col-2 lang-button">
                <span className={engButton} onClick={switchLangEng}> eng </span>
                <span className={rusButton} onClick={switchLangRus}> rus </span>
            </li>
            <li className="sun-moon col-1">
              <ThemeToggler/>
            </li>

          </div>
        </ul>
    );
}
export default Navbar;
