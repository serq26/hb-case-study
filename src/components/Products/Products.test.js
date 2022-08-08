import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductsContext from "../../contexts/useProducts";
import Products from "./index";

let products = [];

const renderComponent = (products) => {
  return render(
    <ProductsContext.Provider value={{ products }}>
      <Products />
    </ProductsContext.Provider>
  );
};

describe("Products Component", () => {
  it("should be rendered", () => {
    let component;
    component = renderComponent(products);
    expect(component).toBeTruthy();
  });

  it("should render products length is 0", () => {
    renderComponent(products);
    expect(screen.getByTestId("empty-result")).toBeInTheDocument();
  });

  it("should render when products are listed", () => {
    products = [
      {
        name: "Procuct A",
        barcode: "123456",
      },
      {
        name: "Product B",
        barcode: "678901",
      },
    ];

    renderComponent(products);
    expect(screen.getByTestId("products-list")).toBeInTheDocument();
  });
});
