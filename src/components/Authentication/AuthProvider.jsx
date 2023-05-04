import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
import { GithubAuthProvider } from "firebase/auth";

const githubProvider = new GithubAuthProvider();



const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const userCreate = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    const gitHubSignIn = () =>{
        return signInWithPopup(auth, githubProvider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false);
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const authInfo = {
        user,
        userCreate,
        loginUser,
        logOut,
        loading,
        googleSignIn,
        gitHubSignIn
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;