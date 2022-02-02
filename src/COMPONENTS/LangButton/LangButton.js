import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { langEng,langRus } from '../../Redux-toolkit/reduxSlice'
import './lang-button.scss'

function LangButton() {

    const dispatch = useDispatch()
    const lang = useSelector(state => state.redux.lang)

    const toggler = (event) => {
        let id = event.target.id
        id === 'eng' ? dispatch(langEng()) : dispatch(langRus())
    }

    return (
        <div className='lang-button'>
            <div className="switcher-box">
                <span className={lang === 'eng' ? 'switcher active' : 'switcher'}
                    id = 'eng' 
                    onClick={toggler}>
                    eng
                </span>
                <span className={lang === 'rus' ? 'switcher active' : 'switcher'}
                    id = 'rus'
                    onClick={toggler}>
                    rus
                </span>
            </div>
        </div>
    )
}
export default LangButton;
