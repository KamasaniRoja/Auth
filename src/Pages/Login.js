import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { auth, googleProvider } from './firebase';
import {
    Button,
    Container,
    CssBaseline,
    TextField,
    Typography
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

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

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleGoogleSignIn = async () => {
        try {
            const { user } = await auth.signInWithPopup(googleProvider);
            console.log(user);
        } catch (err) {
            console.log(err);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(user => console.log(user)).catch(err => console.log(err));
    };
    //  this is for signup createUserWithEmailAndPassword
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <LoginBox>
                <Typography component="h1" variant="h5">
                    Sign in
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
                        Sign In
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleGoogleSignIn}
                        startIcon={<GoogleIcon />}
                    >
                        Sign In with Google
                    </Button>

                </LoginForm>

            </LoginBox>
        </Container>
    );
};

export default LoginPage;
