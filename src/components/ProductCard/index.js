import React, { useState } from "react";
import { useProductsList } from "../../contexts/useProductsList";
import IconButton from "../IconButton";
import * as P from "./ProductCard.styled";

export default function ProductCard({ product }) {
  const [isOpened, setIsOpened] = useState(false);
  const { productsList, setProductsList } = useProductsList();

  const handleDelete = (productBarcode) => {
    setProductsList(
      productsList.filter((product) => product.barcode !== productBarcode)
    );
  };

  return (
    <P.Card>
      <P.CardHeader>
        <P.Title>{product.name}</P.Title>
        <P.HeaderPart data-testid="product-name-barcode">
          <span>Barcode: {product.barcode}</span>
          <span>Created Date: {product.createdDate}</span>
        </P.HeaderPart>
        <P.HeaderPart>
          <P.BoldTitle>Product Type</P.BoldTitle>
          <span>{product.productType}</span>
        </P.HeaderPart>
        <P.Buttons>
          <IconButton
            type="submit"
            icon="/images/icons/trash.svg"
            theme="delete"
            onClick={() => handleDelete(product.barcode)}
          />
          <IconButton
            type="button"
            icon={isOpened ? "/images/icons/up.svg" : "/images/icons/down.svg"}
            theme="collapse"
            onClick={() => setIsOpened(!isOpened)}
          />
        </P.Buttons>
      </P.CardHeader>
      <P.CardBody isOpened={isOpened && "open"}>
        <P.Content>
          <P.BoldTitle>Description:</P.BoldTitle>
          <p data-testid="product-description">{product.description}</p>
        </P.Content>
      </P.CardBody>
    </P.Card>
  );
}
