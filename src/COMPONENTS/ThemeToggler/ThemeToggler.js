import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { themeLight,themeDark } from '../../Redux-toolkit/reduxSlice'
import { FaMoon,FaRegSun } from "react-icons/fa"
import './theme-toggler.scss'

function ThemeToggle({ type }) {

    const dispatch = useDispatch()
    const theme = useSelector(state => state.redux.theme)

    const switchThemeMode = () => {
        theme === 'light' ? dispatch(themeDark()) : dispatch(themeLight())
    }

    return (
        <div className={ type === 'mobile' ? 'theme-toggler-mobile' : 'theme-toggler'}
            onClick={switchThemeMode}>
            {theme === 'light' 
                ? <FaMoon className='icon moon'/>
                : <FaRegSun className='icon sun'/>}
        </div>
    )
}
ThemeToggle.defaultProps = {
    type: '',
}
export default ThemeToggle;
