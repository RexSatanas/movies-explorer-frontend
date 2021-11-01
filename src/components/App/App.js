import React from 'react';
import { Route, Switch } from "react-router-dom";

import '../../index.css';
import Main from "../Main/main";
import Movies from "../Movies/movies";
import SavedMovies from '../SavedMovies/savedMovies';
import Profile from '../Profile/profile';
import Register from '../Register/register'


function App() {
    return (
        <div className="page">
        <Switch>
            <Route exact path ='/'>
                <Main />
            </Route>
            <Route  path ='/movies'>
                <Movies />
            </Route>
            <Route path ='/saved-movies'>
                <SavedMovies />
            </Route>
            <Route path ='/profile'>
                <Profile />
            </Route>
            <Route path ='/signin'>
            </Route>
            <Route path ='/signup'>
                <Register />
            </Route>
            <Route path ='*'>
            </Route>
        </Switch>
        </div>
    );
}

export default App;
