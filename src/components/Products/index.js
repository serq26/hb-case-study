import React from "react";
import { useProducts } from "../../contexts/useProducts";
import ProductItem from "../ProductItem";
import * as P from "./Products.styled"

export default function Products() {
  const { products } = useProducts();

  return (
    <P.Products>
      <P.Title>Products</P.Title>
      {products.length > 0 ? (
        <P.ProductList data-testid="products-list">
          {products.map((product, key) => (
            <ProductItem
              key={key}
              product={product}
            />
          ))}
        </P.ProductList>
      ) : (
        <P.Text data-testid="empty-result">There is no product...</P.Text>
      )}
    </P.Products>
  );
}
