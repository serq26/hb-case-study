import React from "react";
import { useProductsList } from "../../contexts/useProductsList";
import ProductCard from "../ProductCard";
import * as P from "./ProductList.styled";

export default function ProductList() {
  const { productsList } = useProductsList();

  return productsList.length > 0 ? (
    <P.ProductsList>
      <P.List data-testid="products-list">
        {productsList
          .sort((a, b) => b.timeStamp - a.timeStamp)
          .map((product, key) => (
            <ProductCard key={key} product={product} />
          ))}
      </P.List>
    </P.ProductsList>
  ) : (
    <P.AlertMessage data-testid="empty-result">No products have been added yet...</P.AlertMessage>
  );
}
