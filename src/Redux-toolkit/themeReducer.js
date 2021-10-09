import { createSlice } from '@reduxjs/toolkit'

export const themeReducer = createSlice({
    name: 'themeMode',
    initialState: {
        theme: 'dark'
    },
    reducers: {
        themeLight: state => { state.theme = 'light' },
        themeDark: state => { state.theme = 'dark' }
    }
})

export const { themeLight,themeDark } = themeReducer.actions

export default themeReducer.reducer
