import { configureStore } from '@reduxjs/toolkit'
import langModeReducer from './langModeSlice'
// import themeModeReducer from './themeReducer'
import globeReducer from './globeSlicer'

export default configureStore({
    reducer: {
        langMode: langModeReducer,
        slicer: globeReducer
    }
})

// langMode: langModeReducer,
// themeMode: themeModeReducer,
