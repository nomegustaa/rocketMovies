import styled from "styled-components";

export const ContainerMovie = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 133, 155, 0.075);
  border-radius: 16px;
  padding: 24px;
  margin: 0 0 20px 0;
`;

export const ContainerTag = styled.div`
  display: flex;
  gap: 8px;
`;
export const Tags = styled.p`
  background-color: #312e38;
  padding: 8px;
  border-radius: 8px;
`;

export const Description = styled.p`
  color: #999591;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
