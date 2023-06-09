import { createGlobalStyle } from "styled-components";

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
`;

export default GlobalStyle;
