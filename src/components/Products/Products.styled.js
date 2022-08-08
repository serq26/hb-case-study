import styled from "styled-components";

export const Products = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  width: 30%;
  margin-bottom: 50px;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 50px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-image: url("/images/card-bg.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  @media (max-width: 1199px) {
    width: 90%;
    padding: 50px 20px;
  }
`;

export const Title = styled.div`
  font-weight: 500;
  color: #646464;
  font-size: 18px;
  margin-bottom: 20px;
  display: block;
`;

export const ProductList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-self: center;
  flex-flow: column;
`;

export const Text = styled.p``;
