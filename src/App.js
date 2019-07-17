import React from 'react';
import './App.scss';
import Home from "./Containers/Home/Home";
import {BrowserRouter, Redirect} from "react-router-dom";
import {Route} from "react-router";
import Login from "./Containers/Login/Login";

function App() {
    const authCheck = localStorage.getItem('loggedIn');
    return (
        <BrowserRouter>
            {
                authCheck && authCheck === 'YES' ? <Route path={'/'} exact component={Home}/> : <Redirect to='/login'/>
            }
            <Route path={'/login'} component={Login}/>
        </BrowserRouter>
    );
}

export default App;
