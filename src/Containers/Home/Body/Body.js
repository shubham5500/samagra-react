import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

export const Body = ({children}) => {
    return (
        <div>
            <Container maxWidth="lg" style={{marginTop: '20px'}}>
                {children}
            </Container>
        </div>
    );
};
