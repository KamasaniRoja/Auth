import React from 'react';
import { Container, Typography } from '@mui/material';

const homeStyle = {
    padding: '20px',
};

export const About = () => {
    return (
        <Container style={homeStyle}>
            <Typography variant="h4" component="h1">
                Welcome to the About page
            </Typography>
        </Container>
    );
}
