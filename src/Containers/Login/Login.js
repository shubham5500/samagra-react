import React, {Component, useEffect, useState} from 'react';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import {withRouter} from "react-router";
import {baseUrl} from "../../Shared/utils";
import Toast from "../../Components/Toast/Toast";

class Login extends Component {
    render() {
        return (<Container maxWidth="sm">
            <Inputs {...this.props}/>
        </Container>)
    }
}

export default withRouter(Login);

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Inputs = (props) => {
    const [toastData, setToastData] = React.useState({
        message: '',
        className: '',
        isOpen: false
    });

    function handleClose(event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        setToastData({
            message: '',
            className: '',
            isOpen: false
        })
    }

    function handleOpen(message, className) {
        setToastData({
            message,
            className,
            isOpen: true
        });
    }

    const classes = useStyles();

    const onLogin = (e) => {
        e.preventDefault();
        const o = {
            username: email.value,
            password: password.value
        };
        fetch(`${baseUrl}/api/authenticate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(o)
        }).then((success) => success.json()).then((data) => {
            if (data && data.error) {
                throw data.error
            }
            if (data && data.data && data.data.token) {
                const o = {
                    username: email.value,
                    token: data.data.token
                };
                localStorage.setItem('userData', JSON.stringify(o));
                handleOpen('Login Success', 'success');
                props.history.push('/');
                window.location.reload();
            }
        }).catch((error) => {
            handleOpen(error, 'error');
        })
    };

    const [email, setEmail] = useState({
        value: ''
    });

    const [password, setPassword] = useState({
        value: ''
    });

    const onChange = (type, e) => {
        type === 'EMAIL' ? setEmail({value: e.target.value}) : setPassword({value: e.target.value})
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <div>
                    <img width={'100%'} src={require('../../static/logo.png')}/>
                </div>
                <Toast message={toastData.message} handleClose={handleClose} open={toastData.isOpen}
                       toastClassName={toastData.className}/>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Username"
                        name="username"
                        value={email.value}
                        onChange={onChange.bind(this, 'EMAIL')}
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={password.value}
                        onChange={onChange.bind(this, 'PASSWORD')}
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={onLogin.bind(this)}
                        className={classes.submit}>
                        Sign In
                    </Button>
                </form>
            </div>
        </Container>
    );
};
