import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { themeLight,themeDark } from '../../Redux-toolkit/reduxSlice'
import { FaMoon,FaRegSun } from "react-icons/fa"
import './theme-toggler.scss'

function ThemeToggle() {

    const dispatch = useDispatch()
    const themeMode = useSelector(state => state.redux.theme)

    const switchThemeMode = () => {
        themeMode === 'light' ? dispatch(themeDark()) : dispatch(themeLight())
    }

    return (
        <div className={`theme-switcher-${themeMode}`}
            onClick={switchThemeMode}>
            {themeMode === 'light' 
                ? <FaMoon className={`icon-${themeMode}`}/>
                : <FaRegSun className={`icon-${themeMode}`}/>}
        </div>
    )
}
export default ThemeToggle;
