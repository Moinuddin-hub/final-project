import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,updateProfile } from "firebase/auth";

import { app } from "../Firebase/Firebase_config";
export const AuthContext=createContext(null);
const auth=getAuth(app)

const AuthProvider = ({children}) => {
  const[user,setUser]=useState(null);
  const[loading,setLoading]=useState(true);
// Create user
  const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
 
  const signIn=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut=()=>{
    setLoading(true);
    return signOut(auth)
  }
  // update profile
  const updateUserProfile=(name,photo)=>{
   return  updateProfile(auth.currentUser, {
      displayName:name, photoURL:photo
    });
    
  }

  useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        console.log('current user',currentUser);
        setLoading(false);
    })
    return()=>{
        return unSubscribe();
    }
  },[])

    const AuthInfo={
         user,
         loading,
         createUser,
         signIn,
         logOut,
         updateUserProfile
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;