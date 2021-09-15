import { configureStore } from '@reduxjs/toolkit'
import langModeReducer from './langModeSlice'

export default configureStore({
    reducer: {
        langMode: langModeReducer
    }
})