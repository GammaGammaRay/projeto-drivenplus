import { useState, createContext } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const persistedAuth = JSON.parse(localStorage.getItem("auth"));

  const [auth, setAuth] = useState(persistedAuth);
  const [subscription, setSubscription] = useState(null)

  function login(authData) {
    setAuth(authData);
    localStorage.setItem("auth", JSON.stringify(authData));
  }


  return (
    <AuthContext.Provider value={{ auth, subscription, setSubscription, login }}>
      {children}
    </AuthContext.Provider>
  );
}
