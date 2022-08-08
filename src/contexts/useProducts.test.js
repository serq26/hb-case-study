import React from "react";
import ProductsContext, { ProductProvider } from "./useProducts";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";

describe("Products Context", () => {
  let testProducts, testSetProducts;
  let products = [
    {name: "Product A", barcode: "123456"}
  ]

  it("should set the products", () => {
    render(
      <ProductProvider>
        <ProductsContext.Consumer>
          {({ products, setProducts }) => {
            testProducts = products;
            testSetProducts = setProducts;
          }}
        </ProductsContext.Consumer>
      </ProductProvider>
    );
    act(() => testSetProducts(products));
    expect(testProducts).toEqual(products);
  });
});
