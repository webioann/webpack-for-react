import { createSlice } from '@reduxjs/toolkit'

export const reduxSlice = createSlice({
    name: 'redux',
    initialState: {
        lang: 'eng',
        theme: 'dark'
    },
    reducers: {
        langEng: state => { state.lang = 'eng' },
        langRus: state => { state.lang = 'rus' },
        themeLight: state => { state.theme = 'light' },
        themeDark: state => { state.theme = 'dark' },
    }
})
export const { langEng,langRus,themeLight,themeDark } = reduxSlice.actions

export default reduxSlice.reducer
