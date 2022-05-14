import React from 'react'
import { slider_data } from '../../data/slider_data'

import './slider.scss';

function SliderTools(props) {

    return (
        <div className='slider-tools'>
            { props.children }
            {/* massege over gallery */}
            <section className='message-wraper'> 
                <p className='message'>
                    { slider_data[0].message } 
                </p>
            </section>
            {/* progress */}
            <ul className='progress'>
                { slider_data.map(item => (
                    <li key={item.number}
                        className='circle'>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default SliderTools;
