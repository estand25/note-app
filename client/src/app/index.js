import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { 
  NotesList, 
  NotesInsert, 
  NotesUpdate, 
  NoteAppAbout,
  UserProfile,
  UserSignIn,
  UserSignOut,
  UserSignUp
} from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={NoteAppAbout} />
        <Route path="/notes/about" exact component={NoteAppAbout} />
        <Route path="/notes/list" exact component={NotesList} />
        <Route path="/notes/create" exact component={NotesInsert} />
        <Route path="/notes/update/:id" exact component={NotesUpdate} />
        <Route path="/user/signUp" exact component={UserSignUp} />
        <Route path="/user/signOut" exact component={UserSignOut} />
        <Route path="/user/signIn" exact component={UserSignIn} />
        <Route path="/user/userProfile" exact component={UserProfile} />
      </Switch>
    </Router>
  );
}

export default App;
