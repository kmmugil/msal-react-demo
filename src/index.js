import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./styles/theme";

import { BrowserRouter } from "react-router-dom";

import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './config/authConfig';
import { EventType } from '@azure/msal-browser';

import App from './App';

// The instantiation of public client application is done outside the component tree to avoid re-instantiation everytime react re-renders the pages in the application
const publicClientApplication = new PublicClientApplication(msalConfig);

// Once the user signs in, the accounts with authorization tokens are held in the cache (session storage in this case). These accounts can be queried, but that's going to be messy.
// Instead we need to set an active account associated with the public client application instance we are passing to the msal provider as msal context for the application.
// This can be achieved by registering an event with msal.js. It fires events wrt various things happening in the application, like if the user signs in, new account is added, if it
// tries to acquire an access token, etc., 
publicClientApplication.addEventCallback(event => {
    if(event.eventType === EventType.LOGIN_SUCCESS) {
        console.log(event);
        publicClientApplication.setActiveAccount(event.payload.account);
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={ theme }>
                <App msalInstance={ publicClientApplication } />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
