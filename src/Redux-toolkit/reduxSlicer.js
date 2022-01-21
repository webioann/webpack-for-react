import { createSlice } from '@reduxjs/toolkit'
import { content } from '../components/textContent'

export const langModeSlice = createSlice({
    name: 'redux',
    initialState: {
        lang: 'eng',
        theme: 'dark'
    },
    reducers: {
        langEngs: state => { state.lang = 'eng' },
        langRuss: state => { state.lang = 'rus' },
        themeLight: state => { state.theme = 'light' },
        themeDark: state => { state.theme = 'dark' },
    }
})
export const { langEngs,langRuss,themeLight,themeDark } = langModeSlice.actions

export default langModeSlice.reducer
