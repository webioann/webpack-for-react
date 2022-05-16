import React from 'react'
import { slider_data } from '../../data/slider_data'
import { useSelector } from 'react-redux'
import './slider.scss'

function SliderTools(props) {

    const slide_number = useSelector(state => state.redux.slide_number)

    return (
        <div className='slider-tools'>
            { props.children }
            {/* massege over gallery */}
            <section className='message-wrapper'> 
                <span className='message'>
                    { slider_data[slide_number - 1].message } 
                </span>
            </section>
            {/* progress */}
            <ul className='progress'>
                { slider_data.map(item => (
                    <li key={item.number}
                        className={ slide_number === item.number ? 'active-circle' : 'circle' }>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default SliderTools;
