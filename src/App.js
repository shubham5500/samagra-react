import React, {Component} from 'react';
import './App.scss';
import Home from "./Containers/Home/Home";
import {BrowserRouter, Redirect} from "react-router-dom";
import {Route} from "react-router";
import Login from "./Containers/Login/Login";

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (localStorage.getItem('loggedIn') && localStorage.getItem('loggedIn') === 'YES') {
            localStorage.removeItem('loggedIn')
        }
        const authCheck = localStorage.getItem('loggedIn');
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
