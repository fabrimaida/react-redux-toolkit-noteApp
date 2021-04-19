import React, { Component } from 'react';
import "./Main.css"
import Form from "../Components/Form"
import NotesListHome from '../Components/NotesListHome';

export default class Home extends Component {
  render() {
    return (
        <div className="homeContainer">
            <div className="FormBox">
                <Form />
            </div>
            <div className="NotesListHome">
                <NotesListHome />
            </div>
 
        </div>

    );
  }
}

