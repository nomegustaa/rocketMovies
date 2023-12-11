import styled from "styled-components";
import imageCinemark from "../../assets/images/cinemark-login.svg";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: stretch;
`;
export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 166px;

  h1 {
    color: #ff859b;
    margin: 0;
  }
  h3 {
    color: #fff;
    font-weight: 400;
    margin: 48px 0;
  }
`;

export const Description = styled.p`
  color: #fff;
  margin: 0;
  font-weight: 300;
`;

export const LinkSignUp = styled(Link)`
  cursor: pointer;
  color: #ff859b;
  text-align: center;
  text-decoration: none;
`;

export const FormLogin = styled.form`
  div {
    margin: 8px 0;
  }
  button {
    margin: 24px 0 42px 0;
  }
`;

export const ContainerImage = styled.div`
  flex: 1;
  background: url(${imageCinemark}) no-repeat center center;
  background-size: cover;
`;
