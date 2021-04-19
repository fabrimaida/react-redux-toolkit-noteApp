import {configureStore} from '@reduxjs/toolkit'
import notesReducer from './notesReducer'

const store = configureStore({
    reducer: {
        notesAction : notesReducer
    }
})