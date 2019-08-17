import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { NotesList, NotesInsert, NotesUpdate} from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/notes/list" exact component={NotesList} />
        <Route path="/notes/create" exact component={NotesInsert} />
        <Route path="/notes/update/:id" exact component={NotesUpdate} />
      </Switch>
    </Router>
  );
}

export default App;
