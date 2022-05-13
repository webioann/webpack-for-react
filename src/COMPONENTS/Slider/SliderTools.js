import React from 'react'
import { MdArrowBackIos,MdOutlineArrowForwardIos } from 'react-icons/md'
import { arrowLeft,arrowRight } from '../../Redux-toolkit/reduxSlice'
import { useDispatch,useSelector } from 'react-redux'
import { gallery } from '../../data/gallery'

import './slider.scss';

function SliderTools(props) {

    const dispatch = useDispatch()
    const arrow_int = useSelector(state => state.redux.arrow_into)
    console.log(`gallery => ${gallery[0].number}`);

    return (
        <div className='slider-tools'>
            {/* slider arrows */}
            <section className='arrows-wraper'>
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
            </section>
            {/* massege over gallery */}
            <section className='message-wraper'> 
                <p className='message'>
                    message 
                </p>
            </section>
            {/* progress */}
            <ul className='progress'>
                { gallery.map(item => (
                    <li key={item.number}
                        className='circul'>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default SliderTools;
