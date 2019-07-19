import React, {Component} from 'react';
import './App.scss';
import Home from "./Containers/Home/Home";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
import Login from "./Containers/Login/Login";

class App extends Component {

    render() {
        if (localStorage.getItem('loggedIn') && localStorage.getItem('loggedIn') === 'YES') {
            localStorage.removeItem('loggedIn')
        }
        return (
            <Router>
                <PrivateRoute path={'/'} exact component={Home}/>
                <Route path={'/login'} component={Login}/>
            </Router>
        )
    }
}

function PrivateRoute({ component, ...rest }) {
    const authCheck = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : false;
    console.log();
    return (
        <Route
            {...rest}
            render={props =>
                authCheck ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login"
                        }}
                    />
                )
            }
        />
    );
}

export default App;
