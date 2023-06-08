import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	body {
		background-color: black;
		font-family: 'Lexand Deca', sans-serif;
	}
	a {
		text-decoration: none;
	}
	button {
		height: 43px;
		background: #52B6FF;
		border-radius: 3px;
		border-style: none;
		font-size: 18px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: #FFFFFF;
		padding: 0 20px;
		&:disabled {
			background-color: lightgray;
		}
	}
	input {
		background: #FFFFFF;
		border: 1px solid #D5D5D5;
		border-radius: 3px;
		height: 45px;
		width: 90%;
		margin-bottom: 25px;
		margin-top: 10px;
		padding: 0 10px;
		
		font-size: 18px;
		display: flex;
		align-items: center;
		&::placeholder{
			font-style: italic;
			color: #DBDBDB;
		}
		
	}
	
`;

export default GlobalStyle;
