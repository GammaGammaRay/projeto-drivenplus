import { styled } from "styled-components";

export const LoginPageContainer = styled.div`
  display: flex;
  margin: 30vh 0 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    width: 300px;
  }
  form {
    margin-top: 20px;
  }

  a {
    font-size: 14px;
    letter-spacing: 0.1em;
    text-decoration: underline;
    color: white;
  }

  button {
    height: 43px;
    background: #ff4791;
    border-radius: 3px;
    border-style: none;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    width: 100%;
    margin-bottom: 27px;
    letter-spacing: 0.1em;
    &:hover{
        background-color: #cc3873;
    }
    &:disabled {
      background-color: lightgray;
    }
  }
  input {
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    height: 45px;
    margin-bottom: 25px;
    margin-top: 10px;
    padding: 0 10px;
    font-size: 18px;
    display: flex;
    align-items: center;
    &::placeholder {
      /* font-style: italic; */
      color: #7e7e7e;
    }
  }
`;
