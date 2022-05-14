import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { MdArrowBackIos,MdOutlineArrowForwardIos } from 'react-icons/md'
import { arrowLeft,arrowRight } from '../../Redux-toolkit/reduxSlice'

import './slider-arrows.scss'

function SliderArrows() {

    const dispatch = useDispatch()
    const arrow_int = useSelector(state => state.redux.arrow_into)

    return (
        <section className='slider-arrows'>
            <div className='arrows-wraper'>
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
        </section>
    )
}

export default SliderArrows;