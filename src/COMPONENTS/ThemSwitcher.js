import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './navbar.scss'
import { FaRegSun } from "react-icons/fa"
import { FaMoon } from "react-icons/fa"


function ThemSwitcher() {
    return (
        <div>
            <FaRegSun/>
            <FaMoon/>
        </div>
    )
}

export default ThemSwitcher
