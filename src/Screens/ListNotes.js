import { map } from 'lodash';
import React, { Component } from 'react';

import { useSelector } from 'react-redux'
import { selectNotes } from '../redux/notesReducer'



function ListNotes() {

  const notesList = useSelector(selectNotes)

  return (
    <>
      <div> List of notes in database here! </div>

    </>
  )
}


export default ListNotes