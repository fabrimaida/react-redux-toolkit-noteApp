import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ListNotes from "./Screens/ListNotes"
import Main from "./Screens/Main"
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import notesReducer from './redux/notesReducer'

const store = createStore(notesReducer)


function App() {
  return (
    <Provider store={store}>

    <Router>
      <div className="container">
        <div className="Navbar">
          <div>
            <Link to="/" className="link">Main!</Link>
          </div>
          <div>
            <Link to="ListNotes" className="link" >List of all notes in DB here!</Link>
          </div>
        </div>

        <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/ListNotes">
              <ListNotes />
            </Route>
        </Switch>

      </div>
    </Router>

    </Provider>

  );
}

export default App;
