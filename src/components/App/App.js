import React from 'react';
import { Route, Switch } from "react-router-dom";

import '../../index.css';
import Main from "../Main/main";


function App() {
    return (
        <div className="page">
        <Switch>
            <Route exact path ='/'>
                <Main />
            </Route>
            <Route  path ='/movies'>
            </Route>
            <Route path ='/saved-movies'>
            </Route>
            <Route path ='/profile'>
            </Route>
            <Route path ='/signin'>
            </Route>
            <Route path ='/signup'>
            </Route>
            <Route path ='*'>
            </Route>
        </Switch>
        </div>
    );
}

export default App;
