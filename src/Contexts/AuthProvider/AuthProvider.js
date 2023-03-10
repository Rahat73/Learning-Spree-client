import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const googleSignInProvider = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const githubSignInProvider = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            //console.log('user inside state change', currentUser?.providerData[0]?.providerId);
            // checking if the providerid is git hub. cz github emailVerified is false
            if (currentUser === null || currentUser.emailVerified || currentUser?.providerData[0]?.providerId === "github.com") {
                setUser(currentUser);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, [])

    const authInfo = { user, loading, setLoading, createUser, signIn, updateUserProfile, verifyEmail, googleSignInProvider, githubSignInProvider, logOut };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;