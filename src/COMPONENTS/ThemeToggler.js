import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { themeLight,themeDark } from '../Redux-toolkit/themeReducer'
import './navbar.scss'
import { FaRegSun } from "react-icons/fa"
import { FaMoon } from "react-icons/fa"


function ThemeToggler() {

    const dispatch = useDispatch()
    const theme = useSelector(state => state.themeMode.theme)

    useEffect(() => {
        const localTheme = localStorage.getItem('theme')
        if(localTheme === undefined) {
            localStorage.setItem('theme','light')
        }else if(localTheme !== undefined) {
            localTheme === 'light' ?  dispatch(themeLight()): dispatch(themeDark())
        }
    },[])

    if( theme === 'dark' ) {
        return (
            <span onClick={ () => {
                dispatch(themeLight())
                localStorage.setItem("theme", 'light')
            }}>
                <FaRegSun/>
            </span>
        )
    } else if ( theme === 'light' ) {
        return (
            <span onClick={ () => {
                dispatch(themeDark())
                localStorage.setItem("theme", 'dark')
            }}>
                <FaMoon color='white'/>
            </span>
        )
    }
}

export default ThemeToggler
