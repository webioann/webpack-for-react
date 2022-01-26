import React from 'react';
import { VscGithub } from 'react-icons/vsc';
import { CgWebsite } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import './link-box.scss'

function LinkBox({ href,type,margin }) {

    const theme = useSelector(state => state.redux.theme)

    return (
        <a href={ href }
            style={{marginLeft: margin}}
            target="_blank"
            className={`link-box-${theme}`}>
                { type === 'site' ?  <CgWebsite className='icon'/> : <VscGithub className='icon'/> }
            <span className='link-text'>
                { type === 'site' ?  'visit my site' : 'see my code' }
            </span>
        </a>
    )
}
LinkBox.defaultProps = {
    href: 'https://github.com/webioann',
    type: 'site',
    margin: '0px'
}
export default LinkBox;
