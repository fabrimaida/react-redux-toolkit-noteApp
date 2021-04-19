import React, { useState } from 'react'
import "./Form.css"
import {useDispatch} from 'react-redux'
import {saveNote} from '../redux/notesReducer'


export default function Form() {

    const dispatch = useDispatch()

    const [newNote,setNewNote] = useState("");

    function log() {
        console.log(newNote);
    }

    function dispatchNote() {
        dispatch(saveNote({
            text: newNote,
            date: '11:45',
            key: Date.now().toString()
        }))
    }


    return (
        <div className="boxForm">
            <div className="Form">
                <div>
                   <textarea className='textArea' rows='30' cols='30' onChange={(e) => {setNewNote(e.target.value)}} placeholder="write here...."></textarea>
                </div>
                <div>
                   <button className='button' onClick={dispatchNote}>Inserisci la nota</button>
                </div>
            </div>
        </div>
    )
}

