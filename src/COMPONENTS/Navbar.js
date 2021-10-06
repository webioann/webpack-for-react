import React,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { langEng,langRus } from '../Redux-toolkit/langModeSlice'
import './navbar.scss'
import { content } from './textContent'
import ThemSwitcher from './ThemSwitcher'
import { useLocalStorage } from '../hooks/useLocalStorage'

function Navbar() {


    let resumeLink = "https://drive.google.com/file/d/1Lr05RkXCVdrd4yoEPv1a5fQ3rwu-sVMN/view?usp=sharing"

    const lang = useSelector(state => state.langMode.lang)
    const dispatch = useDispatch()
    const[engButton,setEngButton] = useState("active")
    const[rusButton,setRusButton] = useState("not-active")

    // localStorage.setItem("langContent", JSON.stringify( content.eng ));
    // const newLang = JSON.parse(localStorage.getItem("content");

    useEffect(() => {localStorage.setItem("content", JSON.stringify( content.eng ))},[])

    const switchLangRus = () => {
      if( lang === content.eng ) {
        dispatch(langRus())
        setEngButton("not-active")
        setRusButton("active")
        localStorage.setItem("content", JSON.stringify( content.rus ))
      }
    }
    const switchLangEng = () => {
      if( lang === content.rus ) {
        dispatch(langEng())
        setRusButton("not-active")
        setEngButton("active")
        localStorage.setItem("content", JSON.stringify( content.eng ))
      }
    }

    return (
        <ul className="navbar container row gy-0">
          <li className="col-3">
            <a name="home" href="#">{lang.navbar.home}</a>
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
            <ThemSwitcher/>
          </li>
        </ul>
    );
}
export default Navbar;
