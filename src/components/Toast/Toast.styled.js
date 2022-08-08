import styled from "styled-components";

export const Toast = styled.div`
  position: fixed;
  right: -1000px;
  top: 100px;
  padding: 10px;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  ${(toast) =>
    toast.type === "success" &&
    `
    right: 10px;
    border-color: green;
    background-color: green;
    color: white;
  `}

  ${(toast) =>
    toast.type === "error" &&
    `
    border-color: red;
    background-color: red;
    color: white;
  `}
`;

export const Text = styled.div`
  padding: 0;
  margin: 0;
  line-height: 20px;
  text-align: center;
`;

export const Timer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 5px;
  background-color: #fff;
  border-radius: 10px;
`;
