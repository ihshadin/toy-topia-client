import React, { createContext, useEffect, useState } from 'react';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider;
    const githubProvider = new GithubAuthProvider;
    const facebookProvider = new FacebookAuthProvider;

    // CreateUser with Email and Password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Signin with Email and password
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // Google login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    // GitHub Login
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }
    // Facebook Login
    const facebookLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    }
    // LogOut 
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // User Check
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log(loggedUser);
            setUser(loggedUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        setUser,
        setLoading,
        createUser,
        signIn,
        googleLogin,
        githubLogin,
        facebookLogin,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;