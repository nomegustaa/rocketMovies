import styled from "styled-components";
import imageCinemark from "../../assets/images/cinemark-login.svg";

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
    font-size: 48px;
    margin: 0;
  }
  p {
    color: #fff;
    margin: 0;
    font-weight: 300;
  }

  h3 {
    margin: 48px 0;
    color: #fff;
  }
`;

export const FormLogin = styled.form`
  div {
    margin: 8px 0;
  }
  button {
    margin: 24px 0;
  }
`;

export const ContainerBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  P {
    color: #ff859b;
    cursor: pointer;
  }
`;

export const ContainerImage = styled.div`
  flex: 1;
  background: url(${imageCinemark}) no-repeat center center;
  background-size: cover;
`;
