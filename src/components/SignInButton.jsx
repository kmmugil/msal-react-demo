import Button from '@mui/material/Button';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../config/authConfig';

export const SignInButton = () => {
    const { instance } = useMsal();

    const handleSignIn = () => {
        instance.loginRedirect(loginRequest);
    };

    return (
        <Button color="inherit" onClick={ handleSignIn }>Sign in</Button>
    );
};