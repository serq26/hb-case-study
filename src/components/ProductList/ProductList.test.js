import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductsListContext, {
  ProductsListProvider,
} from "../../contexts/useProductsList";
import ProductsList from "./index";

let productsList = [];

const renderComponent = (productsList) => {
  return render(
    <ProductsListContext.Provider value={{ productsList }}>
      <ProductsList />
    </ProductsListContext.Provider>
  );
};

describe("Products List Component", () => {
  it("should be rendered", () => {
    let component;
    component = renderComponent(productsList);
    expect(component).toBeTruthy();
  });

  it("should render products list length is 0", () => {
    productsList = [];
    renderComponent(productsList);
    expect(screen.getByTestId("empty-result")).toBeInTheDocument();
  });

  it("should render when products list are listed", () => {
    productsList = [
      {
        name: "Procuct A",
        barcode: "123456",
      },
      {
        name: "Product B",
        barcode: "678901",
      },
    ];

    renderComponent(productsList);
    expect(screen.getByTestId("products-list")).toBeInTheDocument();
  });
});
