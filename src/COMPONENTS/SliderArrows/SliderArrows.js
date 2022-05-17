import React from 'react'
import { useDispatch } from 'react-redux'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { arrowLeft,arrowRight } from '../../Redux-toolkit/reduxSlice'
import './slider-arrows.scss'

function SliderArrows() {

    const dispatch = useDispatch()
    
    return (
        <section className='slider-arrows'>
            <div className='arrows-wraper'>
                <MdOutlineArrowForwardIos className='arrow left'
                    onClick={() => {dispatch(arrowLeft())}}/>
                <MdOutlineArrowForwardIos className='arrow right'
                    onClick={() => {dispatch(arrowRight())}}/>
            </div>
        </section>
    )
}

export default SliderArrows;