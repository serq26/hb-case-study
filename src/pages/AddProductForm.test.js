import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddProductForm from "./AddProductForm";
import ProductsContext from "../contexts/useProducts";
import { ProductTypeProvider } from "../contexts/useProductType";

let products = {
  name: "Procuct A",
  barcode: "123456",
};

describe("AddProductForm Component", () => {
  it("should be rendered", () => {
    let component;
    component = render(
        <ProductsContext.Provider value={{ products }}>
          <ProductTypeProvider>
              <AddProductForm />
          </ProductTypeProvider>
        </ProductsContext.Provider>
    );
    expect(component).toBeTruthy();
  });
});
