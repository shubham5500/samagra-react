import React, {Component, useState} from 'react';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import {withRouter} from "react-router";


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
    const classes = useStyles();
    console.log(props);
    const emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const onLogin = (e) => {
        props.history.replace('/');
        localStorage.setItem('loggedIn', JSON.stringify(email));
        window.location.reload();
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
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        error={!emailReg.test(email.value)}
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={email.value}
                        onChange={onChange.bind(this, 'EMAIL')}
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        error={!(password.value.length > 6)}
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
                        disabled={!(emailReg.test(email.value) && (password.value.length > 6))}
                        className={classes.submit}>
                        Sign In
                    </Button>
                </form>
            </div>
        </Container>
    );
};
