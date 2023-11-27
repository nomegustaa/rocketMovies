import styled from "styled-components";
import { IButton } from "./types";

export const Button = styled.div<IButton>`
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
`;
