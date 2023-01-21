import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { useMsal } from "@azure/msal-react";

export const WelcomeName = () => {
    const { instance } = useMsal();
    const [username, setUsername] = useState('');

    useEffect(() => {
        const currentAccount = instance.getActiveAccount();
        if(currentAccount) {
            setUsername(currentAccount.name);
        }
    }, [instance]);

    return <Typography variant="h6">Welcome, { username }</Typography>;
};