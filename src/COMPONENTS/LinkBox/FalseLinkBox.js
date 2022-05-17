import React from 'react';
import { MdOutlineSubdirectoryArrowLeft } from 'react-icons/md';
import './link-box.scss'

function FalseLinkBox() {

    return (
        <span className='link-box false'>
            <span className='link-text'>
                view the design in the slider
            </span>
            <MdOutlineSubdirectoryArrowLeft className='icon arrow-down'/>
        </span>
    )
}

export default FalseLinkBox;
