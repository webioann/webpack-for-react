import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { themeLight,themeDark } from '../Redux-toolkit/globeSlicer'
import './navbar.scss'
import { FaRegSun } from "react-icons/fa"
import { FaMoon } from "react-icons/fa"


function ThemeToggler() {

    const dispatch = useDispatch()
    const theme = useSelector(state => state.slicer.theme)
    const [themeMode,setThemeMode] = useState( 'dark')

    useEffect(() => {
        const localTheme = localStorage.getItem('theme','dark')
        if(localTheme === undefined) {
            setThemeMode('dark')
            localStorage.setItem('theme','dark')
        }else if(localTheme !== undefined) {
            setThemeMode(localTheme)
            localTheme === 'dark' ? dispatch(themeDark()) : dispatch(themeLight())
        }
    },[])

    if( themeMode === 'dark') {
        return (
            <span onClick={ () => {
                dispatch(themeLight())
                setThemeMode( 'light' )
                localStorage.setItem("theme", 'light')
            }}>
                <FaRegSun/>
            </span>
        )
    }
     else {
        return (
            <span onClick={ () => {
                dispatch(themeDark())
                setThemeMode( 'dark' )
                localStorage.setItem("theme", 'dark')
            }}>
                <FaMoon/>
            </span>
        )
    }
}

export default ThemeToggler
