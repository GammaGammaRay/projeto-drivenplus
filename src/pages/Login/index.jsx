import React from "react";
import { useState } from "react";
import { LoginPageContainer } from "./style";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { auth, login } = useAuth();

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setUser(user.email, user.password);

    function loginSuccess() {
      navigate("/subscriptions");
      setIsLoading(false);
    }

    function loginFailure() {
      setIsLoading(false);
    }

    api.userLogin(user, loginSuccess, loginFailure);
  }

  return (
    <LoginPageContainer>
      <img src="public/driven+ logo.svg" />
      <form onSubmit={handleSubmit}>
        <input
          placeholder="E-mail"
          type="email"
          name="email"
          disabled={isLoading}
          value={user.email}
          onChange={handleChange}
        />
        <input
          placeholder="Senha"
          type="password"
          name="password"
          disabled={isLoading}
          value={user.password}
          onChange={handleChange}
        />
        <button>ENTRAR</button>
      </form>
      <Link to="/sign-up">Não possuí uma conta? Cadastre-se</Link>
    </LoginPageContainer>
  );
}
