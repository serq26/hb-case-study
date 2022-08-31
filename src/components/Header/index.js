import React from "react";
import { useActivePage } from "../../contexts/useActivePage";
import * as P from "./Header.styled";

export default function Header() {
  const { activePage, setActivePage } = useActivePage();
  
  const menuItems = [
    { title: "Products List", seo: "products-list" },
    { title: "Add Product", seo: "add-product" },
  ];
  
  return (
    <P.Header>
      <P.Logo>
        <a
          href="/#"
          onClick={() => {
            setActivePage("products-list")
          }}
        >
          <h1>My Products</h1>
        </a>
      </P.Logo>
      <P.Menu>
        <P.MenuList>
          {menuItems.map((item,key) => {
            return (
              <P.MenuListItem key={key}>
                <P.Link
                  active={activePage === item.seo ? "active" : ""}
                  href="/#"
                  title={item.title}
                  onClick={() => {
                    setActivePage(item.seo)
                  }}
                >
                  {item.title}
                </P.Link>
              </P.MenuListItem>
            );
          })}
        </P.MenuList>
      </P.Menu>
      <P.ColorfulBand>
        <div className="band2"></div>
        <div className="band5"></div>
        <div className="band3"></div>
        <div className="band1"></div>
        <div className="band6"></div>
        <div className="band4"></div>
      </P.ColorfulBand>
    </P.Header>
  );
}
