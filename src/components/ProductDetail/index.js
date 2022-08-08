import React, { Fragment } from "react";
import * as P from "./ProductDetail.styled";
import Input from "../Input";
import Button from "../Button";
import { useProducts } from "../../contexts/useProducts";
import { useActivePage } from "../../contexts/useActivePage";
import { useProductType } from "../../contexts/useProductType";
import { useProductsList } from "../../contexts/useProductsList";

export default function ProductDetail({ setIsComplete }) {
  const { productsList, setProductsList } = useProductsList();
  const { products, setProducts } = useProducts();
  const { productType, setProductType } = useProductType();
  const { setActivePage } = useActivePage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newData = productsList.concat(products);
    setProductsList(newData);
    setProducts([]);
    setProductType("");
    setIsComplete(true);
    setTimeout(() => {
      setActivePage("products-list");
    }, 1500);
  };

  const handleChange = (e, productBarcode, key) => {
    const newState = [];
    products.forEach((product) => {
      if (product.barcode === productBarcode) {
        product[key] = e.target.value;
      }
      newState.push(product);
    });
    setProducts(newState);
  };

  return (
    <P.ProductDetails onSubmit={handleSubmit}>
      <P.Title>Product Details</P.Title>

      {products.length > 0 ? (
        <P.List data-testid="products-list">
          {products.map((product, key) => (
            <P.ListItem key={key}>
              {Object.entries(product).map(([key, value], index) => (
                <Fragment key={index}>
                  <P.Text
                    style={{
                      display:
                        key !== "name" && key !== "barcode" ? "none" : "",
                    }}
                  >
                    {key}: {value}
                  </P.Text>
                </Fragment>
              ))}
              <br />
              {productType === "Online License" && (
                <Input
                  type="text"
                  name="license-code"
                  label="License Code (Required):"
                  style={{ width: "50%" }}
                  required={true}
                  onChange={(e) =>
                    handleChange(e, product.barcode, "licenseCode")
                  }
                />
              )}
              <P.InputGroup>
                <P.Label>
                  Description (
                  {productType === "Standard" ? "Required" : "Optional"}):
                </P.Label>
                <P.Textarea
                  name="product-detail"
                  rows={4}
                  required={productType === "Standard" ? true : false}
                  onChange={(e) =>
                    handleChange(e, product.barcode, "description")
                  }
                />
              </P.InputGroup>
            </P.ListItem>
          ))}
        </P.List>
      ) : (
        <P.Title data-testid="empty-result">There is no products...</P.Title>
      )}

      <Button
        type="submit"
        text="Submit"
        theme="dark"
        disabled={products.length === 0 ? true : false}
      />
    </P.ProductDetails>
  );
}
