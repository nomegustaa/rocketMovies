import styled from "styled-components";

export const ContainerHome = styled.div`
  margin: 0 13rem;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    color: #fff;
    font-weight: 300;
  }
`;

export const ContainerMovies = styled.div`
  max-height: 52rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff859b;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-moz-scrollbar {
    width: 12px;
  }
`;
