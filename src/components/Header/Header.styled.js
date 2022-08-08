import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 20px 50px;
  position: relative;
  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

export const Logo = styled.div`
  svg {
    display: block;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    border: none;
    overflow: hidden;
  }
  @media (max-width: 768px) {
    width: 40%;
    svg {
      max-width: 70%;
    }
  }
`;

export const Menu = styled.div`
  @media (max-width: 768px) {
    width: 60%;
  }
`;

export const MenuList = styled.div`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;

export const MenuListItem = styled.div`
  margin: 0 15px;
  position: relative;
  @media (max-width: 768px) {
    margin: 0 5px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  color: #646464;
  padding: 6px;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #f66d00;
  }
  ${(link) =>
    link.active === "active" &&
    `
    background-color: #f66d00;
    color: #fff!important;
  `}
  @media (max-width: 768px) {
    font-size: 3.2vw;
  }
`;

export const ColorfulBand = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 8px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  .band1 {
    width: 11%;
    background-color: #7622da;
  }
  .band2 {
    width: 18%;
    background-color: #47c6eb;
  }
  .band3 {
    width: 31%;
    background-color: #ed5f1f;
  }
  .band4 {
    width: 15%;
    background-color: #f59f28;
  }
  .band5 {
    width: 13%;
    background-color: #6b1e5b;
  }
  .band6 {
    width: 12%;
    background-color: #45b794;
  }
`;
