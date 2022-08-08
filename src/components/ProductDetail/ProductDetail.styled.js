import styled from "styled-components";

export const ProductDetails = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  width: 30%;
  margin-bottom: 20px;
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

export const List = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-self: center;
  flex-flow: column;
`;

export const ListItem = styled.li`
  width: 100%;
  border-radius: 10px;
  font-size: 15px;
  margin-bottom: 20px;
  transition: all 0.3s ease-in-out;
`;

export const Text = styled.div`
  display: block;
  width: 100%;
  text-transform: capitalize;
`;

export const InputGroup = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const Label = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: $text-color;
  padding-left: 2px;
  margin-bottom: 4px;
  display: block;
`;

export const Textarea = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  border-radius: 10px;
  box-shadow: 2px 2px 10px #bbb;
  -webkit-box-shadow: 2px 2px 10px #bbb;
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
