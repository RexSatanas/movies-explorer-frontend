import React from 'react';
import { Route, Switch } from "react-router-dom";

import '../../index.css';
import Main from "../Main/main";
import Movies from "../Movies/movies";
import SavedMovies from '../SavedMovies/savedMovies';
import Profile from '../Profile/profile';
import Register from '../Register/register';
import Login from '../Login/login';
import NotFound from '../NotFound/notFound';
import Header from '../Header/header'


function App() {
    const [loggedIn] = React.useState(true);

    return (
        <div className="page">
        <Switch>
            <Route exact path ='/'>
                <Header  loggedIn={loggedIn}/>
                <Main />
            </Route>
            <Route  path ='/movies'>
                <Header  loggedIn={loggedIn}/>
                <Movies />
            </Route>
            <Route path ='/saved-movies'>
                <Header  loggedIn={loggedIn}/>
                <SavedMovies />
            </Route>
            <Route path ='/profile'>
                <Header  loggedIn={loggedIn}/>
                <Profile />
            </Route>
            <Route path ='/signin'>
                <Login />
            </Route>
            <Route path ='/signup'>
                <Register />
            </Route>
            <Route path ='*'>
                <NotFound />
            </Route>
        </Switch>
        </div>
    );
}

export default App;
