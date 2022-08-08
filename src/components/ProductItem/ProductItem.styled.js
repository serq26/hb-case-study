import styled from "styled-components";

export const ProductListItem = styled.div`
  width: 100%;
  border-radius: 10px;
  box-shadow: 2px 2px 10px #bbb;
  -webkit-box-shadow: 2px 2px 10px #bbb;
  font-weight: 600;
  font-size: 17px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  margin-bottom: 20px;
  transition: all 0.3s ease-in-out;
  span {
    margin-left: 14px;
  }
  button {
    margin-right: 14px;
  }
  &:hover {
    background-color: #f5f5f5;
  }
  &:hover button {
    background-color: red;
  }
`;

export const Text = styled.span``;