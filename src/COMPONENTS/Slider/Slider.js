import React from 'react';
import './slider.scss';

function Slider(props) {

    return (
        <div className='slider'>
            { props.children }
        </div>
    );
}
export default Slider;
