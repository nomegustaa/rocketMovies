import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeaderProfile = styled.div`
  height: 10rem;
  background-color: rgba(255, 133, 155, 0.05);
  position: absolute;
  width: 100%;
  top: 0;
`;

export const ContainerBack = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin: 3.7rem 0 0 10rem;
  p {
    color: #ff859b;
    cursor: pointer;
  }
`;
export const UploadContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 0 55px 0;
`;

export const UploadImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
export const ContainerCamera = styled.div`
  position: absolute;
  background-color: #ff859b;
  width: 48px;
  height: 48px;
  padding: 5px;
  border-radius: 50%;
  right: 0;
  bottom: 0;
`;

export const UploadButton = styled.label`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 186px;
  height: 186px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #ccc;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    width: 25%;
    margin: 5px 0;
  }
`;

export const UploadInput = styled.input`
  display: none;
`;
