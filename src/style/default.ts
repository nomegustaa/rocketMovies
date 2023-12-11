import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1C1B1E;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif, Helvetica;
}
  input {
    outline: none;
    border-radius: 10px;
  }

  button{
    font-family: 'Roboto', sans-serif, Helvetica;
  }
  a{
    text-decoration: none;
  }
`;
