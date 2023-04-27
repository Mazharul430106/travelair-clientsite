import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import { app } from '../Firebase/Firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const user = { displayName: 'Mazharul Islam' }
    
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;