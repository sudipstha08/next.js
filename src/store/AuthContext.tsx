import React, { useContext, useState, useEffect } from "react";
import { auth, firebase } from "../../firebase";
import { Loader } from "../components";

interface IProps {
  children?: React.ReactNode;
}

interface ContextProps {
  currentUser?: firebase.User | null;
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth?.onAuthStateChanged((user: any) => {
      if (user) {
        setCurrentUser(user);
        setLoading(false);
      }
    });
    return () => unsubscribe;
  }, []);

  const signup = (email: string, password: string) => {
    auth?.createUserWithEmailAndPassword(email, password);
  };

  const login = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  const resetPassword = (email: string) => {
    return auth.sendPasswordResetEmail(email);
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
