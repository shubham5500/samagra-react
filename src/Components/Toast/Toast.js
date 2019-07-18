import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {amber, green} from '@material-ui/core/colors';
import clsx from "clsx";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Icon from "@material-ui/core/Icon";


const useStyles1 = makeStyles(theme => ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));
export default function Toast({message, toastClassName, open, handleClose}) {
    const classes = useStyles1();

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
            ContentProps={{
                'aria-describedby': 'message-id',
            }}>
            <SnackbarContent
                className={clsx(classes[toastClassName])}
                aria-describedby="client-snackbar"
                message={
                    <span id="client-snackbar text-uppercase" className={classes.message}>
                      <Icon className={clsx(classes.icon, classes.iconVariant)}/>
                                    {message}
                    </span>
                }
                action={[
                    <IconButton key="close" aria-label="Close" color="inherit" onClick={handleClose}>
                        <CloseIcon/>
                    </IconButton>,
                ]}
            />
        </Snackbar>
    );
}
