import { createSlice } from '@reduxjs/toolkit'

const dark = {color: '#ffffff', backgroundColor: '#202124'}
const light = {color: '#474747', backgroundColor: '#ffffff'}
const borderLight = {border: '1px solid #ffffff'}
const borderDark = {border: '1px solid #474747'}

export const themeReducer = createSlice({
    name: 'themeMode',
    initialState: {
        theme: dark,
        border: borderLight
    },
    reducers: {
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

export const { themeLight,themeDark } = themeReducer.actions

export default themeReducer.reducer