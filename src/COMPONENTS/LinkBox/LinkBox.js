import React from 'react'
import { VscGithub } from 'react-icons/vsc'
import { CgWebsite } from 'react-icons/cg'
import useTranslator from '../../hooks/useTranslator'
import { linkText } from '../../data/multiLang'
import './link-box.scss'

function LinkBox({ link,type,margin }) {

    return (
        <a href={ link }
            target="blank"
            className='link-box'>
                { type === 'site' ?  <CgWebsite className='icon'/> : <VscGithub className='icon'/> }
            <span className='link-text'>
                { type === 'site' 
                    ? useTranslator(linkText.site)
                    : useTranslator(linkText.github) }
            </span>
        </a>
    )
}
LinkBox.defaultProps = {
    link: 'https://github.com/webioann',
    type: 'site',
}
export default LinkBox;
