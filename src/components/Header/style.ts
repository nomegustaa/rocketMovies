import styled from "styled-components";

export const ContainerHader = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #999591;
  justify-content: space-evenly;

  h1 {
    color: #ff859b;
  }
`;

export const AvatarUser = styled.div`
  height: 56px;
  width: 56px;
  background-color: #c5c5c5;
  border-radius: 1px solid #999591;
  border-radius: 100%;
`;

export const ContainerUser = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  span {
    font-size: 14px;
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const NameUser = styled.span`
  color: #f4ede8;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Logout = styled.span`
  color: #948f99;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;
