import React from 'react';
import Container from "@material-ui/core/Container";

export const Body = ({children}) => {
    return (
        <div>
            <Container maxWidth="lg" style={{marginTop: '20px'}}>
                {children}
            </Container>
        </div>
    );
};
