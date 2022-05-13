import React,{useEffect} from 'react'
import { MdArrowBackIos,MdOutlineArrowForwardIos } from 'react-icons/md'
import { arrowLeft,arrowRight } from '../../Redux-toolkit/reduxSlice'
import { useDispatch,useSelector } from 'react-redux'

import './slider.scss'

function Arrows() {

    const dispatch = useDispatch()
    const arrow_int = useSelector(state => state.redux.arrow_into)

    return (
        <div className='arrows-container'>
            <div className='wraper'>
                <MdArrowBackIos className='arrow left'
                onClick={() => {
                    dispatch(arrowLeft())
                    console.log(`ARROW INTO => left`);
                    }}/>
                <MdOutlineArrowForwardIos className='arrow right'
                    onClick={() => {
                        dispatch(arrowRight())
                        console.log(`ARROW INTO => right`);
                    }}/>
            </div>
        </div>
    )
}
export default Arrows;