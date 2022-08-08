import React from "react";
import ProductsListContext, { ProductsListProvider } from "./useProductsList";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";

describe("Products List Context", () => {
  let testProductsList, testSetProductsList;
  let productsList = [
    {name: "Product A", barcode: "123456"},
    {name: "Product B", barcode: "987654"}
  ]

  it("should set the products list", () => {
    render(
      <ProductsListProvider>
        <ProductsListContext.Consumer>
          {({ productsList, setProductsList }) => {
            testProductsList = productsList;
            testSetProductsList = setProductsList;
          }}
        </ProductsListContext.Consumer>
      </ProductsListProvider>
    );
    act(() => testSetProductsList(productsList));
    expect(testProductsList).toEqual(productsList);
  });
});
