import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    notesList: []
}

let noteID = 0

const notesSlice = createSlice({
    name: 'notesAction',
    initialState,
    reducers: {
        saveNote: (state, action) => {
            state.notesList.push(action.payload)
        },
        deleteNote(state, { index }) {
            state.notesList.splice(index, 1)
        }
    }
});

export const { saveNote, deleteNote } = notesSlice.actions


export const selectNotes = state => state.notesList


export default notesSlice.reducer