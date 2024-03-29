import React, { useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase";
import { Loader } from "../components";

interface IProps {
  children?: React.ReactNode;
}

interface ContextProps {
  currentUser?: any;
  signup?: (email: string, password: string) => void;
  login?: (email: string, password: string) => void;
  updateEmail?: any;
  updatePassword?: any;
}

const AuthContext = React.createContext<any>("");

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }: IProps) => {
  const [currentUser, setCurrentUser] = useState<ContextProps>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        user && setCurrentUser(user as any);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const signup = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  const resetPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email);
  };

  const updateEmail = (email: string) => {
    return currentUser?.updateEmail(email);
  };

  const updatePassword = (password: string) => {
    return currentUser?.updatePassword(password);
  };

  if (loading) {
    return <Loader />;
  }

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value as ContextProps}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
