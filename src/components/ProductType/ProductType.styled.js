import styled from "styled-components";

export const ProductType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  margin-bottom: 50px;
  width: 30%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  font-weight: 500;
  color: #646464;
  font-size: 18px;
  margin-bottom: 20px;
  display: block;
`;
