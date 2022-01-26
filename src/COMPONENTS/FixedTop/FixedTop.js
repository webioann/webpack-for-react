import React from 'react';
import './fixed-top.scss';

function FixedTop(props) {

    return (
        <div id='fixed-top'>
            <div className='fixed-wrapper'>
                { props.children }
            </div>
        </div>
    )
}

export default FixedTop;
