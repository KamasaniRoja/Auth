import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { auth } from './firebase';
import {
    Button,
    Container,
    CssBaseline,
    TextField,
    Typography
} from '@mui/material';

const LoginBox = styled('div')(({ theme }) => ({
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

const LoginForm = styled('form')(({ theme }) => ({
    width: '100%',
    marginTop: theme.spacing(1),
}));

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then(user => console.log(user)).catch(err => console.log(err));
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <LoginBox>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <LoginForm onSubmit={handleSubmit} autoComplete="off">
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoFocus
                        value={email}
                        onChange={handleEmailChange}
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
                        autoComplete="current-password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                </LoginForm>
            </LoginBox>
        </Container>
    );
};

export default SignUp;
