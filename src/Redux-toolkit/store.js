import { configureStore } from '@reduxjs/toolkit'
import langModeReducer from './langModeSlice'
import themeReducer from './themeReducer'
import reduxSlicer from './reduxSlicer'

export default configureStore({
    reducer: {
        redux: reduxSlicer,
        langMode: langModeReducer,
        themeMode: themeReducer
    }
})
