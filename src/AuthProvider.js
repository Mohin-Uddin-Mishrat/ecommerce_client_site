import React, { createContext } from 'react';
import { app } from './firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

 
export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    
    const googleSighnIn=()=>{
        return signInWithPopup(auth, provider);
    }
    const signIn =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    



    const info = {
        googleSighnIn,
        createUser,
        signIn
    }
    return (
        <AuthContext.Provider value={info}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;