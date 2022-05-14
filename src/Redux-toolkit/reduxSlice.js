import { createSlice } from '@reduxjs/toolkit'

export const reduxSlice = createSlice({
    name: 'redux',
    initialState: {
        lang: 'eng',
        theme: 'light',
        arrow_into: '',
        slide_number: 1,
    },
    reducers: {
        langEng: state => { state.lang = 'eng' },
        langUkr: state => { state.lang = 'ukr' },
        themeLight: state => { state.theme = 'light' },
        themeDark: state => { state.theme = 'dark' },
        arrowLeft: state => { state.arrow_into = 'left' },
        arrowRight: state => { state.arrow_into = 'right' },
        changeSliderNumber: state => { state.slide_number = actions.payload }
    }
})
export const { 
    langEng,langUkr,themeLight,themeDark,arrowLeft,arrowRight,changeSliderNumber 
} = reduxSlice.actions

export default reduxSlice.reducer;
