import React from "react";
import { useProductType } from "../../contexts/useProductType";
import { useProducts } from "../../contexts/useProducts";
import Button from "../Button";
import * as P from "./ProductType.styled";

export default function ProductType() {
  const { productType, setProductType } = useProductType();
  const { setProducts } = useProducts();

  const handleProductType = (type) => {
    setProductType(type);
    setProducts([]);
  };

  const productTypes = ["Online License", "Standard"];

  return (
    <P.ProductType>
      <P.Title>Product Type</P.Title>
      <P.Buttons>
        {productTypes.map((type,key) => (
          <Button
            key={key}
            data-testid={`button-${key+1}`}
            type="button"
            text={type}
            theme="outline"
            active={productType === type ? true : false}
            onClick={() => handleProductType(type)}
          />
        ))}
      </P.Buttons>
    </P.ProductType>
  );
}
