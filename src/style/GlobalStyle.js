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

  h1{

  }
`;

export default GlobalStyle;
