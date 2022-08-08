import React from "react";
import { useProducts } from "../../contexts/useProducts";
import IconButton from "../IconButton";
import * as P from "./ProductItem.styled"

export default function ProductItem({ product}) {
  const { products, setProducts } = useProducts();
  const handleDelete = (productBarcode) => {
    setProducts(
      products.filter((product) => product.barcode !== productBarcode)
    );
  };

  return (
    <P.ProductListItem>
      <P.Text data-testid="product-name-barcode">
        {product.name} - {product.barcode}
      </P.Text>
      <IconButton
        type="submit"
        icon="/images/icons/trash.svg"
        theme="delete"
        onClick={() => handleDelete(product.barcode)}
      />
    </P.ProductListItem>
  );
}
