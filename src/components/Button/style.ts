import styled from "styled-components";
import { IButton } from "./types";

export const Button = styled.button<IButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: ${(props) => props.background};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: none;
  border-radius: 10px;
  color: #312e38;
  cursor: pointer;
  font-size: 16px;

  .loader {
    border: 6px solid #fff;
    border-top: 6px solid transparent;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;
