import { createSlice } from '@reduxjs/toolkit'
import { content } from '../COMPONENTS/textContent'

const dark = {color: '#ffffff', backgroundColor: '#202124'}
const light = {color: '#474747', backgroundColor: '#ffffff'}
const borderLight = {border: '1px solid #ffffff'}
const borderDark = {border: '1px solid #474747'}

export const globeSlicer = createSlice({
    name: 'slicer',
    initialState: {
        lang: content.eng,
        theme: dark,
        border: borderLight
    },
    reducers: {
        langEng: state => { state.lang = content.eng },
        langRus: state => { state.lang = content.rus },
        themeLight: state => { 
            state.theme = light,
            state.border = borderDark
        },
        themeDark: state => {
            state.theme = dark,
            state.border = borderLight
         }
    }
})

export const { langEng,langRus,themeLight,themeDark } = globeSlicer.actions

export default globeSlicer.reducer
