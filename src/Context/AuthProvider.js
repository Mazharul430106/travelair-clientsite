import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/Firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Google login.
    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }



    // Create user.
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login user.
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Update user Profile.
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    // Logout User.
    const logoutUser = () => {
        return signOut(auth);
    }

    // Email verification.
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    // State Change User.
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return unSubscribe();
    }, [])


    const authInfo = { createUser, loginUser, user, updateUserProfile, logoutUser, verifyEmail, googleLogin }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;