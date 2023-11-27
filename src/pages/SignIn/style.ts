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
  /* justify-content: center; */
  padding: 0 166px;
`;

export const FormLogin = styled.form`
  div {
    margin: 8px 0;
  }
  button {
    margin: 24px 0;
  }
`;

export const ContainerImage = styled.div`
  flex: 1;
  background: url(${imageCinemark}) no-repeat center center;
  background-size: cover;
`;
