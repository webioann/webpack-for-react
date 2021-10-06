import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { themeLight,themeDark } from '../Redux-toolkit/themeReducer'
import './navbar.scss'
import { FaRegSun } from "react-icons/fa"
import { FaMoon } from "react-icons/fa"


function ThemSwitcher() {

    const dispatch = useDispatch()
    const[theme,setTheme] = useState("dark")
    console.log(theme);

    useEffect(() => {
        const localTheme = localStorage.getItem('theme')
        if(localTheme) {
            setTheme(localTheme)
        }
    },[])

    if( theme === 'dark') {
        return (
            <span onClick={ () => {
                dispatch(themeLight())
                setTheme('light')
                localStorage.setItem("theme", "light")
            }}>
                <FaRegSun/>
            </span>
        )
    } else {
        return (
            <span onClick={ () => {
                dispatch(themeDark())
                setTheme('dark')
                localStorage.setItem("theme", "dark")
            }}>
                <FaMoon/>
            </span>
        )
    }
}

export default ThemSwitcher
