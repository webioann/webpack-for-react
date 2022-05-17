import React from 'react';
import { MdOutlineSubdirectoryArrowLeft } from 'react-icons/md'
import useTranslator from '../../hooks/useTranslator'
import { linkText } from '../../data/multiLang'
import './link-box.scss'

function FalseLinkBox() {

    return (
        <span className='link-box false'>
            <span className='link-text'>
                { useTranslator(linkText.falseLink) }
            </span>
            <MdOutlineSubdirectoryArrowLeft className='icon arrow-down'/>
        </span>
    )
}

export default FalseLinkBox;
