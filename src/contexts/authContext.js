import { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
} from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);
const provider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const emailLogin = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  const googleLogin = () => {
    signInWithRedirect(auth, provider);
  };
  const signout = () => signOut(auth);

  useEffect(() => {
    getRedirectResult(auth).then((result) => {
      console.log(result);
      result && !currentUser && setCurrentUser(result.user);
      setLoading(false);
    });
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    emailLogin,
    googleLogin,
    signup,
    signout,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
