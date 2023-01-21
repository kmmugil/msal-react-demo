// Configuration MSAL object containing your configuration parameters for authentication
// This object allows you to configure important elements of MSAL functionality and is passed into the constructor of PublicClientApplication;
/*
    Authority Tenant ID: 
    1. The tenant ID of the organization if the app is a single-tenant application (restrict to single organization)
    2. "organizations" if the application is multi-tenant and is available to only other organizations - school or work
    3. "common" if the application is multi-tenant and is available to all accounts (personal and organizations)
    4. "consumer" if the application is multi-tenant and is restricted to only personal accounts 
*/
export const msalConfig = {
    auth: {
        clientId: "0f1fd866-2bf2-4f6d-b4d3-b0d50c3493fe",
        authority: "https://login.microsoftonline.com/23d0e525-9751-490e-bf3c-ec0f5ebcb3de", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
        redirectUri: "http://localhost:3000",
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
    scopes: ["User.Read"]
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};