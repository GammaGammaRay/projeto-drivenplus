import { useState, createContext } from "react";

export const AuthContext = createContext();

// esse trecho de passar o children desestruturado e jogar no retorno da função, não entendo muito bem
export default function AuthProvider({ children }) {
  const persistedAuth = JSON.parse(localStorage.getItem("auth"));
  const [auth, setAuth] = useState(persistedAuth);

  function login(authData) {
    setAuth(authData);
    localStorage.setItem("auth", JSON.stringify(authdata));
  }


  return (
    <AuthContext.Provider value={{ auth, login }}>
      {children}
    </AuthContext.Provider>
  );
}
