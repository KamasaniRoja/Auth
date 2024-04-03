
import React from 'react';
import { Container, Typography } from '@mui/material';

const homeStyle = {
    padding: '20px',
};

export const Home = (props) => {

    return (
        <Container style={homeStyle}>
            <Typography variant="h4" component="h1">
                Welcome Home
            </Typography>
        </Container>
    );
}

