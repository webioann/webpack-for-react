import React,{ useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { langEng,langRus } from '../../Redux-toolkit/reduxSlice'
import './lang-button.scss'

function LangButton() {

    const dispatch = useDispatch()
    const theme = useSelector(state => state.redux.theme)
    const lang = useSelector(state => state.redux.lang)
    const [margin,setMargin] = useState(0) //margin it is half of width "switcher-box"

    const toggler = (event) => {
        let id = event.target.id
        if( margin === 0 && id === 'rus') {
            setMargin(40)
            dispatch(langRus())
        }
        else if( margin === 40 && id === 'eng') {
            setMargin(0)
            dispatch(langEng())
        }
    }

    return (
        <div className={`lang-button-${theme}`}>
            <div className="switcher-box">
                <span className={ lang === 'eng' ? `switcher shade-${theme}` : 'switcher'}
                    id = 'eng' 
                    onClick={toggler}>
                    eng
                </span>
                <span className={ lang === 'rus' ? `switcher shade-${theme}` : 'switcher'}
                    id = 'rus'
                    onClick={toggler}>
                    rus
                </span>
            </div>
            <div className="slider-box">
                <span className={`slider-${theme}`} 
                    style={{marginLeft: `${margin}px`}}>
                </span>
            </div>
        </div>
    )
}
export default LangButton;
