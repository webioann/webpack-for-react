import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { themeLight,themeDark } from '../Redux-toolkit/themeReducer'
import './navbar.scss'
import { FaRegSun } from "react-icons/fa"
import { FaMoon } from "react-icons/fa"


function ThemSwitcher() {

    const dispatch = useDispatch()
    const[theme,setTheme] = useState('dark')

    if( theme === 'dark') {
        return (
            <span onClick={ () => {
                dispatch(themeLight())
                setTheme('light')
                console.log("DARK");
            }}>
                <FaRegSun/>
            </span>
        )
    } else {
        return (
            <span onClick={ () => {
                dispatch(themeDark())
                setTheme('dark')
                console.log("LIGHT");
            }}>
                <FaMoon/>
            </span>
        )
    }
}

export default ThemSwitcher
