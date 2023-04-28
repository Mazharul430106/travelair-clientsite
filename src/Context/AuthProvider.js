import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/Firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(user)

    // Google login.
    const googleLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    // Create user.
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login user.
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Update user Profile.
    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }

    // Logout User.
    const logoutUser = () => {
        setLoading(true);
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
            setLoading(false);
        })
        return unSubscribe();
    })


    const authInfo = { user, loading, createUser, loginUser, updateUserProfile, logoutUser, verifyEmail, googleLogin, }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;