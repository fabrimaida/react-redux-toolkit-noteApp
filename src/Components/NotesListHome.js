import React from 'react'
import "./NotesListHome.css"

import { useSelector } from 'react-redux'
import { selectNotes } from '../redux/notesReducer'
import { deleteNote } from '../redux/notesReducer'
import { useDispatch } from 'react-redux'


export default function NotesListHome() {


    const notesList = useSelector(selectNotes)

    const dispatch = useDispatch()


    const fakeNotes = [
        { key: 1, date: '14:32', text: "John Doe" },
        { key: 2, date: '20:30', text: "Victor Wayne" },
        { key: 3, date: '13:45', text: "Jane Doe" },
        { key: 4, date: '13:45', text: "Jane Doe" },
        { key: 5, date: '13:45', text: "Jane Doe" },
        { key: 6, date: '13:45', text: "Jane Doe" },
        { key: 7, date: '13:45', text: "Jane Doe" },
        { key: 8, date: '13:45', text: "Jane Doe" },
    ]

    return (
        <div className="containerList">
            <div className="titleBox">
                <h1 className="title">Ugo Notes here</h1>
            </div>
            <div className="listOfNotes">
                {
                    notesList.length === 0 &&
                    <h1>No Notes Here Yet!</h1>
                }

                {
                    notesList.length > 0 &&
                    notesList.map((item, index) => (
                        <div key={item.key} className="singleNote">
                            <div className='dateBox'>
                                <p className='dateMessage'>{item.date}</p>
                                <button className='deleteBtn' onClick={() => dispatch(deleteNote(index))}>x</button>
                            </div>
                            <div className='descBox'>
                                <p className='descriptionText'>{item.text}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}




// {
//     notesList.length === 1 &&
//         <h1>No notes here!</h1>
// }

// {
//     notesList.map((item) => (
//         <div key={item.key} className="singleNote">
//             <div className='dateBox'>
//                 <p className='dateMessage'>{item.date}</p>
//                 <button className='deleteBtn' onClick={logdelete}>x</button>
//             </div>
//             <div className='descBox'> <p className='descriptionText'>{item.text}</p>  </div>
//         </div>

//     ))
// }