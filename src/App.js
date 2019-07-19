import React, {Component} from 'react';
import './App.scss';
import Home from "./Containers/Home/Home";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Login from "./Containers/Login/Login";

class App extends Component {

    render() {
        if (localStorage.getItem('loggedIn') && localStorage.getItem('loggedIn') === 'YES') {
            localStorage.removeItem('loggedIn')
        }
        const authCheck = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : false;
        const view = authCheck ? <Route path={'/'} component={Home}/> : <Redirect to={{
            pathname: '/login'
        }} />;
        return (
            <BrowserRouter>
                {view}
                <Route path={'/login'} component={Login}/>
            </BrowserRouter>
        )
    }
}

export default App;
