import React from "react";
import { useState } from "react";
import { RegisterUserPageContainer } from "./style";
import { useNavigate, Link } from "react-router-dom";
import api from "../../services/api";
import ReactInputMask from "react-input-mask";

export default function RegisterUser() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    cpf: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleNewUserRegistration = (e) => {
    e.preventDefault();

    function registerSuccess() {
      console.log(formData);
      navigate("/");
    }

    function registerFailure() {}

    api.userRegister(formData, registerSuccess, registerFailure);
  };

  return (
    <RegisterUserPageContainer>
      <form onSubmit={handleNewUserRegistration}>
        <input
          placeholder="Nome"
          type="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <ReactInputMask
          mask="999.999.999-99"
          placeholder="CPF"
          type="text"
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
          required
        />
        <input
          placeholder="E-mail"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          placeholder="Senha"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button>CADASTRAR</button>
      </form>
      <Link to="/">Já possuí uma conta? Entre</Link>
    </RegisterUserPageContainer>
  );
}
