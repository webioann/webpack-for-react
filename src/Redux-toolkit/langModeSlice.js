import { createSlice } from '@reduxjs/toolkit'
import { content } from '../COMPONENTS/textContent'

export const langModeSlice = createSlice({
    name: 'langMode',
    initialState: {
        lang: content.eng
    },
    reducers: {
        langEng: state => { state.lang = content.eng },
        langRus: state => { state.lang = content.rus },
    }
})

export const { langEng,langRus } = langModeSlice.actions

export default langModeSlice.reducer


// JSON.parse(localStorage.getItem("content"))