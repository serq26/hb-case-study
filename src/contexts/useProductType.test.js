import React from "react";
import ProductTypeContext, { ProductTypeProvider } from "./useProductType";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";

describe("Product Type Context", () => {
  let testProductType, testSetProductType;

  it("should set the product type", () => {
    render(
      <ProductTypeProvider>
        <ProductTypeContext.Consumer>
          {({ productType, setProductType }) => {
            testProductType = productType;
            testSetProductType = setProductType;
          }}
        </ProductTypeContext.Consumer>
      </ProductTypeProvider>
    );
    act(() => testSetProductType("Standard"));
    expect(testProductType).toEqual("Standard");
  });
});
