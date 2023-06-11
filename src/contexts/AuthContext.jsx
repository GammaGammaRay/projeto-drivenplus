import { useState, createContext } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const persistedAuth = JSON.parse(localStorage.getItem("auth"));

  const [auth, setAuth] = useState(persistedAuth);
  const [subscription, setSubscription] = useState({});


  function login(authData) {
    setAuth(authData);
    localStorage.setItem("auth", JSON.stringify(authData));
  }

  function updateSubscription(subscriptionData) {
    setSubscription(subscriptionData);
  }

  return (
    <AuthContext.Provider
      value={{ auth, subscription, updateSubscription, login  }}
    >
      {children}
    </AuthContext.Provider>
  );
}
