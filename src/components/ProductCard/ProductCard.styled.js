import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-flow: column;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-bottom: 25px;
`;

export const CardHeader = styled.div`
  padding: 30px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    padding: 30px 20px;
    flex-flow: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const Title = styled.div`
  margin-bottom: 0;
  width: 10%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BoldTitle = styled.div`
  font-weight: 600;
`;

export const CardBody = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  height: 0;
  overflow: hidden;

  ${(body) =>
    body.isOpened === "open" &&
    `
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    height: 100%;
  `}
`;

export const Content = styled.div`
  padding: 20px 30px;
`;

export const HeaderPart = styled.div`
  span {
    display: block;
  }
`;

export const Buttons = styled.div`
  display: flex;
  button {
    margin: 0 4px;
  }
`;
