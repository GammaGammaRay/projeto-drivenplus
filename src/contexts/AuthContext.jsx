import { useState, createContext } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const persistedAuth = JSON.parse(localStorage.getItem("auth"));
  const persistedSubscription = JSON.parse(localStorage.getItem("subscription"));

  const [auth, setAuth] = useState(persistedAuth);
  const [subscription, setSubscription] = useState(persistedSubscription);


  function login(authData) {
    setAuth(authData);
    localStorage.setItem("auth", JSON.stringify(authData));
  }

  function updateSubscription(subscriptionData) {
    setSubscription(subscriptionData);
    localStorage.setItem("subscription", JSON.stringify(subscriptionData));
  }

  return (
    <AuthContext.Provider
      value={{ auth, subscription, updateSubscription, login  }}
    >
      {children}
    </AuthContext.Provider>
  );
}
