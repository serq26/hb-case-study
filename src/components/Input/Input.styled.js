import styled from "styled-components";

export const InputGroup = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: $text-color;
  padding-left: 2px;
  margin-bottom: 4px;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  border: none;
  outline: none;
  border-radius: 10px;
  box-shadow: 2px 2px 10px #ddd;
  -webkit-box-shadow: 2px 2px 10px #ddd;
  padding-left: 20px;
  font-weight: 500;
  font-size: 17px;
  padding: 20px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  &:focus {
    outline: 2px solid #f66d00;
  }
`;
