import { configureStore } from '@reduxjs/toolkit'
import langModeReducer from './langModeSlice'
import themeReducer from './themeReducer'
// import globeReducer from './globeSlicer'

export default configureStore({
    reducer: {
        langMode: langModeReducer,
        themeMode: themeReducer
    }
})

// langMode: langModeReducer,
// themeMode: themeModeReducer,
