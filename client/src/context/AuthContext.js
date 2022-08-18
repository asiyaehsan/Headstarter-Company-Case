// AuthContext.js - Set up the authentication

import { useContext, createContext } from "react";
// Authentication features
import {
  GoogleAuthProvider,
  GoogleAuthPopup,
  signInWithPop,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
  };
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
