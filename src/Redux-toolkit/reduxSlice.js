import { createSlice } from '@reduxjs/toolkit'

export const reduxSlice = createSlice({
    name: 'redux',
    initialState: {
        lang: 'eng',
        theme: 'light',
        arrow_into: '',
    },
    reducers: {
        langEng: state => { state.lang = 'eng' },
        langUkr: state => { state.lang = 'ukr' },
        themeLight: state => { state.theme = 'light' },
        themeDark: state => { state.theme = 'dark' },
        arrowLeft: state => { state.arrow_into = 'left' },
        arrowRight: state => { state.arrow_into = 'right' },
    }
})
export const { 
    langEng,langUkr,themeLight,themeDark,arrowLeft,arrowRight 
} = reduxSlice.actions

export default reduxSlice.reducer;
