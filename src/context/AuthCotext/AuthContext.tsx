import React from 'react'
import { createContext, useReducer } from "react";
import { AuthState, authReducer } from "./authReducer";

interface AuthContextProps {
    authState: AuthState
    setAuthenticated: () => void;
    setNotAuthenticated: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

const initialAuthState: AuthState = {
    userName: 'Didier Cruz',
    userStatus: 'checking',
}

export const AuthProvider = ({children}: any) => {

    const [authState, dispatch] = useReducer(authReducer, initialAuthState);

    const setAuthenticated = () => {
        dispatch({type: 'set_authenticated'});
    }

    const setNotAuthenticated = () => {
        dispatch({type: 'set_not_authenticated'});
    }

    return (
        <AuthContext.Provider value={{
            authState,
            setAuthenticated,
            setNotAuthenticated
        }}>
            {children}
        </AuthContext.Provider>
    )
}