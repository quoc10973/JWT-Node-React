import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext({
    isAuthenticated: false,
    user: {
        email: '',
        name: ''
    }
});

export const AuthWrapper = (prob) => {
    const [auth, setAuth] = useState({
        isAuthenticated: false,
        user: {
            email: '',
            name: ''
        }
    });

    const [appLoading, setAppLoading] = useState(true);

    return (
        <AuthContext.Provider value={{
            auth,
            setAuth,
            appLoading,
            setAppLoading
        }}>
            {prob.children}
        </AuthContext.Provider>
    );
}