import { createSlice } from '@reduxjs/toolkit'

export const reduxSlice = createSlice({
    name: 'redux',
    initialState: {
        lang: 'eng',
        theme: 'light',
        slide_number: 1,
    },
    reducers: {
        langEng: state => { state.lang = 'eng' },
        langUkr: state => { state.lang = 'ukr' },
        themeLight: state => { state.theme = 'light' },
        themeDark: state => { state.theme = 'dark' },
        arrowLeft: state => { 
            if(state.slide_number > 1 && state.slide_number <= 7) {
                state.slide_number -= 1
            }
            console.log(`ARROW LEFT = ${state.slide_number}`); 
        },
        arrowRight: state => {
            if(state.slide_number >= 1 && state.slide_number < 7) {
                state.slide_number += 1
            }
            console.log(`ARROW RIGHT = ${state.slide_number}`); 
        },
    }
})
export const { 
    langEng,langUkr,themeLight,themeDark,arrowLeft,arrowRight, 
} = reduxSlice.actions

export default reduxSlice.reducer;
