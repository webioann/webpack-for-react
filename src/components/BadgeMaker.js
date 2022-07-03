import React from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

import '../CSS/badge-maker.scss'

const BadgeMaker = ({ data, animation }) => {

    if (animation) {
        return (
            <ul className='skills'>
                { data.map((item) => ( 
                    <li key={item.id}
                        className='skill on-start'
                        style={{ animationDelay: item.delay }}>
                        <p className='skill-text'>
                            { item.title } 
                        </p>
                    </li>
                ))}
            </ul>
        )
    }
    else {
        return (
            <ul className='badges'>
                <div className='path'>
                    <span>used tools</span>
                    <MdOutlineArrowForwardIos className='double-arrow'/>
                </div>
                { data.map((item) => ( 
                    <li key={item.id} className='tool'>
                        <p className='tool-text'>
                            { item.title } 
                        </p>
                    </li>
                ))}
            </ul>
        )
    }
}

export default BadgeMaker;