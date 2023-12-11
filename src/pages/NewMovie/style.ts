import styled from "styled-components";

export const ContainerNewMovie = styled.div`
  margin: 0 13rem;
  h1 {
    color: #fff;
  }
  h3 {
    margin: 0;
    color: #999591;
  }
`;
export const ContainerInput = styled.div`
  display: flex;
  gap: 40px;
  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  > div > input {
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }
`;

export const Textarea = styled.textarea`
  width: 98%;
  border-radius: 10px;
  border: none;
  background-color: #262529;
  color: #948f99;
  outline: none;
  padding: 16px;
  resize: none;
`;

export const ContainerMarker = styled.div`
  display: flex;
  gap: 1rem;
  background-color: #0d0c0f;
  border-radius: 10px;
  padding: 16px;
  margin: 0 0 40px 0;
`;

export const AddMarker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 56px;
  background-color: transparent;
  border: 2px dashed #948f99;
  border-radius: 10px;
  padding: 8px;
  cursor: pointer;
  gap: 5px;
  p {
    color: #948f99;
    font-size: 14px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }
`;

export const Marker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #262529;
  border: none;
  border-radius: 10px;
  padding: 8px;
  margin: 0 5px;
  cursor: pointer;
  p {
    color: #948f99;
    font-size: 14px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 40px;
`;
