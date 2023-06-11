import { createGlobalStyle } from "styled-components";
//porque o prettier não funciona aqui?

const GlobalStyle = createGlobalStyle`

	* {
	font-family: 'Roboto', sans-serif; //porque  colocando a fonte aqui, não é aplicada em tudo?
}

input[type="password"] {
	-webkit-text-security: circle;
}

body {
	  font-family: 'Roboto', sans-serif;
    height: 100%;
    width: 100%;
    color: white;
    background-color: black;
  }

  input {
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 8px;
    height: 55px;
    margin-bottom: 25px;
    margin-top: 10px;
    padding: 0 10px;
    font-size: 18px;
    display: flex;
    align-items: center;
    &::placeholder {
      font-size: 1em;
      color: #7e7e7e;
    }
  }
`;

export default GlobalStyle;
