import React from "react";
import { useState } from "react";
import { RegisterUserPageContainer } from "./style";
import { useNavigate, Link } from "react-router-dom";
import api from "../../services/api";
import ReactInputMask from "react-input-mask";

export default function RegisterUser() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    cpf: "",
    password: "",
  });

  // const [confirmPassword, setConfirmPassword] = useState('');

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // function checkConfirmPassword(e) {
  //   setConfirmPassword(e.target.value);
  //   return e.target.value === formData.password;
  // }

  //qual a diferença entre declarar função como const variável arrow-function ou só function?
  const handleNewUserRegistration = (e) => {
    e.preventDefault(); //porque o intellisense não completa o preventDefault()?
    setIsLoading(true);

    function registerSuccess() {
      console.log(formData);
      setIsLoading(false);
      navigate("/");
    }

    function registerFailure() {
      setIsLoading(false);
    }

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
        {/* <input
          placeholder="Confirmar Senha"
          type="password"
          value={confirmPassword}
          onChange={(e) => checkConfirmPassword(e)}
          required
        />
        {checkConfirmPassword() ? (
          <span>Senhas são iguais</span>
        ) : (
          <span>Senhas não são iguais</span>
        )} */}

        <button>CADASTRAR</button>
      </form>
      <Link to="/">Já possuí uma conta? Entre</Link>
    </RegisterUserPageContainer>
  );
}
