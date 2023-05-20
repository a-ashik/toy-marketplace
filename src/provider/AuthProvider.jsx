import { createContext, useEffect } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut } from "firebase/auth";

import app from '../firebase/firebase.config'
import { useState } from 'react';

export const AuthContext = createContext()
const auth = getAuth(app)
const Provider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true);

    const registerUser = (email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () =>{
        setLoader(true)
        return signInWithPopup(auth,Provider)
      }


    const logOut = () => {
        setLoader(true)
        return signOut(auth);
      };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser) ;
        console.log(currentUser)
        setLoader(false)
        });

        return () => {
        return unsubscribe() ;
        }
    },[])
        

    const authInfo = {
        user,
        loader,
        registerUser,
        login,
        googleSignIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;