import { configureStore } from '@reduxjs/toolkit'
import langModeReducer from './langModeSlice'
import themeModeReducer from './themeReducer'

export default configureStore({
    reducer: {
        langMode: langModeReducer,
        themeMode: themeModeReducer
    }
})